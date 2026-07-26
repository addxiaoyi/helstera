import React from 'react';
import { EnterpriseComplianceSection } from './EnterpriseComplianceSection';

interface TokenomicsSectionProps {
  openContractModal?: () => void;
  openApiKeyModal?: () => void;
}

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ openContractModal }) => {
  return <EnterpriseComplianceSection openContractModal={openContractModal || (() => {})} />;
};
