import { useId } from "react";
import { FlashbarProps } from "@cloudscape-design/components/flashbar";
import { useTranslation } from "react-i18next";

type TUseDisclaimerFlashbarItem = (onDismiss: (id: string) => void) => FlashbarProps.MessageDefinition | null;

const useDisclaimerFlashbarItem: TUseDisclaimerFlashbarItem = (onDismiss) => {
  const id = useId();
  const { t } = useTranslation();

  return {
    type: 'info',
    dismissible: true,
    dismissLabel: t('notifications.dismiss'),
    onDismiss: () => onDismiss(id),
    statusIconAriaLabel: 'info',
    content: <>{t('notifications.cloudscapeDemo')}</>,
    id,
  };
};

export { useDisclaimerFlashbarItem };
