import { Button, Text, useToast, VStack } from '@chakra-ui/react';
import { Amount } from '@snx-v3/Amount';
import { Multistep } from '@snx-v3/Multistep';
import { utils } from 'ethers';
import { useApprove } from '@snx-v3/useApprove';
import { Wei } from '@synthetixio/wei';
import { FC, useCallback, useState } from 'react';
import { Network } from '@snx-v3/useBlockchain';
import { StepSuccess } from './StepSuccess';
import { ZEROWEI } from '@snx-v3/constants';
import { useTokenBalance } from '@snx-v3/useTokenBalance';
import { useCollateralType } from '@snx-v3/useCollateralTypes';
import { useGetWrapperToken } from '@snx-v3/useGetUSDTokens';
import { getSpotMarketId, isBaseAndromeda } from '@snx-v3/isBaseAndromeda';
import { useConvertStataUSDC } from '@snx-v3/useConvertStataUSDC';

type Props = FC<{
  amount: Wei;
  network: Network;
  onSuccess: () => void;
  onBack: () => void;
}>;

export const ConvertStataUSDCTransaction: Props = ({ onSuccess, amount, network, onBack }) => {

  //const { data: USDC } = useV2sUSD(network);
  //const { data: USDC_balance } = useTokenBalance(USDC, network);
  //const { data: stataUSDC } = useUSDProxyForChain(network);
  //const { data: stataUSDC_balance } = useTokenBalance(stataUSDC?.address, network);

  const isBase = isBaseAndromeda(network?.id, network?.preset);

  const { data: USDC } = useCollateralType('USDC');
  const { data: wrapperUSDCToken } = useGetWrapperToken(getSpotMarketId(USDC?.displaySymbol));
  // TODO: This will need refactoring
  const usdcAddress = isBase
    ? wrapperUSDCToken
    : USDC?.tokenAddress;
  const { data: USDC_balance } = useTokenBalance(usdcAddress, network);

  const { data: stataUSDC } = useCollateralType('stataUSDC');
  const { data: wrapperStataUSDCToken } = useGetWrapperToken(getSpotMarketId(stataUSDC?.displaySymbol));
  // TODO: This will need refactoring
  const stataUSDCAddress = isBase
    ? wrapperStataUSDCToken
    : stataUSDC?.tokenAddress;
  const { data: stataUSDC_balance } = useTokenBalance(stataUSDCAddress, network);

  const [infiniteApproval, setInfiniteApproval] = useState(false);
  const [txState, setTxState] = useState({
    step: 1,
    status: 'idle',
  });
  const [txSummary, setTxSummary] = useState({
    usdcBalance: ZEROWEI,
    changeUsdcBalance: ZEROWEI,
   oldStataUSDCBalance: ZEROWEI,
    newStataUSDCBalance: ZEROWEI,
  });

  const { approve, refetchAllowance, requireApproval } = useApprove({
    contractAddress: usdcAddress,
    amount: amount.gt(0)
      ? isBase
        ? // Base USDC and Base stataUSDC are 6 decimals
          utils.parseUnits(amount.toString(), 6)
        : utils.parseUnits(amount.toString(), USDC?.decimals)
      : 0,
    spender: stataUSDCAddress,
  });


  const toast = useToast({ isClosable: true, duration: 9000 });

  const { convert, balance, isSuccess } = useConvertStataUSDC({
    amount: amount.gt(0)
      ? isBase
        ? // Base USDC and Base stataUSDC are 6 decimals
          utils.parseUnits(amount.toString(), 6)
        : utils.parseUnits(amount.toString(), USDC?.decimals)
      : 0,
    depositToAave: true,
  });

  const onSubmit = useCallback(async () => {
  console.log('ConvertStataUSDCTransaction.tsx', {
      amount: utils.parseUnits(amount.toString(), 6).toString(),
      requireApproval, 
      step: txState.step, 
      USDC_balance: USDC_balance?.toString(), 
      stataUSDC_balance: stataUSDC_balance?.toString(),
    });

    try {
      if (txState.step > 2) {
        onSuccess();
        return;
      }

      if (txState.step === 1 && requireApproval) {
        setTxState({
          step: 1,
          status: 'pending',
        });

        await approve(infiniteApproval);
        refetchAllowance();
      }

      setTxState({
        step: 2,
        status: 'pending',
      });

      setTxSummary({
        usdcBalance: USDC_balance || ZEROWEI,
        changeUsdcBalance: amount,
        oldStataUSDCBalance: stataUSDC_balance || ZEROWEI,
        newStataUSDCBalance: ZEROWEI,
      });

      await convert();
      const newStataUSDCBalance = await balance();


      setTxSummary({
        usdcBalance: USDC_balance || ZEROWEI,
        changeUsdcBalance: amount,
        oldStataUSDCBalance: stataUSDC_balance || ZEROWEI,
        newStataUSDCBalance: newStataUSDCBalance,
      });

      setTxState({
        step: 2,
        status: 'success',
      });

      toast.closeAll();
      toast({
        title: 'Success',
        description: 'Migration executed.',
        status: 'success',
        duration: 5000,
        variant: 'left-accent',
      });
    } catch (error) {
      setTxState((state) => ({
        step: state.step,
        status: 'error',
      }));
      toast({
        title: 'Migration failed',
        description: 'Please try again.',
        status: 'error',
        variant: 'left-accent',
      });
    }
  }, [
    amount,
    approve,
    balance,
    infiniteApproval,
    convert,
    onSuccess,
    refetchAllowance,
    requireApproval,
    toast,
    txState.step,
    USDC_balance,
    stataUSDC_balance,
  ]);

  if (isSuccess) {
    return <StepSuccess {...txSummary} onConfirm={onSuccess} />;
  }

  return (
    <VStack spacing={0}>
      <Multistep
        width="100%"
        step={1}
        title="Approve USDC transfer"
        status={{
          failed: txState.step === 1 && txState.status === 'error',
          success: txState.step > 1,
          loading: txState.step === 1 && txState.status === 'pending',
        }}
        checkboxLabel="Approve unlimited USDC transfers to stataUSDC"
        checkboxProps={{
          isChecked: infiniteApproval,
          onChange: (e) => setInfiniteApproval(e.target.checked),
        }}
        mt={0}
      />

      <Multistep
        width="100%"
        step={2}
        title="Convert USDC to stataUSDC"
        mb={4}
        mt={4}
        subtitle={
          <Text>
            This will convert <Amount value={amount} suffix={` USDC `} /> to stataUSDC
          </Text>
        }
        status={{
          failed: txState.step === 2 && txState.status === 'error',
          success: txState.step === 2 && txState.status === 'sucess',
          loading: txState.step === 2 && txState.status === 'pending',
        }}
      />

      <Button isDisabled={txState.status === 'pending'} onClick={onSubmit} width="100%" mb={2}>
        {(() => {
          switch (true) {
            case txState.status === 'error':
              return 'Retry';
            case txState.status === 'pending':
              return 'Processing...';
            case txState.step === 2 && txState.status === 'sucess':
              return 'Done';
            default:
              return 'Execute Transaction';
          }
        })()}
      </Button>

      {txState.status !== 'pending' && (
        <Button variant="outline" colorScheme="gray" width="100%" onClick={onBack}>
          Back
        </Button>
      )}
    </VStack>
  );
};
