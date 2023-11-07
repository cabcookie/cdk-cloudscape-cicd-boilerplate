import React, { useId, useState } from "react";
import Flashbar, { FlashbarProps } from "@cloudscape-design/components/flashbar";
import { useDisclaimerFlashbarItem } from "./disclaimer-flashbar-item";
import { useTranslation } from "react-i18next";

const useNotifications = (showSuccessNotification = false) => {
  const successId = useId();
  const [successDismissed, dismissSuccess] = useState(false);
  const [disclaimerDismissed, dismissDisclaimer] = useState(false);
  const { t } = useTranslation();

  const disclaimerItem = useDisclaimerFlashbarItem(() => dismissDisclaimer(true));

  const notifications: Array<FlashbarProps.MessageDefinition> = [];

  if (disclaimerItem && !disclaimerDismissed) {
    notifications.push(disclaimerItem);
  }

  if (showSuccessNotification && !successDismissed) {
    notifications.push({
      type: 'success',
      content: t('notifications.successDemo'),
      statusIconAriaLabel: 'success',
      dismissLabel: t('notifications.dismiss'),
      dismissible: true,
      onDismiss: () => dismissSuccess(true),
      id: successId,
    });
  }

  return notifications;
};

interface NotificationsProps {
  successNotification?: boolean;
}

export const Notifications: React.FC<NotificationsProps> = ({ successNotification }) => {
  const notifications = useNotifications(successNotification);
  return <Flashbar items={notifications} />
};
