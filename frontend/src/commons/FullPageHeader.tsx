import React from 'react';
import { Button, Header, HeaderProps, SpaceBetween } from '@cloudscape-design/components';
import { InfoLink } from './InfoLink';
import { useTranslation } from 'react-i18next';

interface FullPageHeaderProps extends HeaderProps {
  title: string;
  createButtonText: string;
  extraActions?: React.ReactNode;
  selectedItemsCount: number;
  onInfoLinkClick?: () => void;
}

export function FullPageHeader({
  title,
  createButtonText,
  extraActions = null,
  selectedItemsCount,
  onInfoLinkClick,
  ...props
}: FullPageHeaderProps) {
  const isOnlyOneSelected = selectedItemsCount === 1;
  const {t} = useTranslation();

  return (
    <Header
      variant="awsui-h1-sticky"
      info={onInfoLinkClick && <InfoLink onFollow={onInfoLinkClick} />}
      actions={
        <SpaceBetween size="xs" direction="horizontal">
          {extraActions}
          <Button data-testid="header-btn-view-details" disabled={!isOnlyOneSelected}>
            {t('general.buttons.viewDetails')}
          </Button>
          <Button data-testid="header-btn-edit" disabled={!isOnlyOneSelected}>
            {t('general.buttons.edit')}
          </Button>
          <Button data-testid="header-btn-delete" disabled={selectedItemsCount === 0}>
            {t('general.buttons.delete')}
          </Button>
          <Button data-testid="header-btn-create" variant="primary">
            {createButtonText}
          </Button>
        </SpaceBetween>
      }
      {...props}
    >
      {title}
    </Header>
  );
}