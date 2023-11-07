import { forwardRef } from "react";
import AppLayout, { AppLayoutProps } from "@cloudscape-design/components/app-layout";
import I18nProvider from "@cloudscape-design/components/i18n";
import enMessages from '@cloudscape-design/components/i18n/messages/all.en.json';
import deMessages from '@cloudscape-design/components/i18n/messages/all.en.json';
import { useTranslation } from "react-i18next";

export const CustomAppLayout = forwardRef<AppLayoutProps.Ref, AppLayoutProps>((props, ref) => {
  const {i18n} = useTranslation();

  return (
    <I18nProvider locale={i18n.language} messages={[enMessages, deMessages]}>
      <AppLayout ref={ref} {...props} />
    </I18nProvider>
  );
});
