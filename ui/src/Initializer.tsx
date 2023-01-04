import { FC, PropsWithChildren } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useCollateralTypes } from '@snx-v3/useCollateralTypes';
import { usePools } from '@snx-v3/usePools';
import { useOwnerAccounts } from './hooks/useOwnerAccounts';

export const Initializer: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading: isLoadingCollateralTypes } = useCollateralTypes();
  const { isLoading: isLoadingOwnerAccounts } = useOwnerAccounts();
  const { isLoading: isLoadingPools } = usePools();

  const isLoading = isLoadingCollateralTypes || isLoadingOwnerAccounts || isLoadingPools;

  return isLoading ? <Spinner mx="auto" my="auto" /> : <>{children}</>;
};
