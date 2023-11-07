import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import { useTranslation } from "react-i18next";

export const Breadcrumbs = () => {
  const {t} = useTranslation();

  return <BreadcrumbGroup
    items={[
      { text: t('nav.docs.section'), href: '#' },
      { text: t('nav.docs.getStarted'), href: '#' },
    ]}
    expandAriaLabel={t('breadcrumbs.showPath')}
    ariaLabel="Breadcrumbs"
  />;
};
