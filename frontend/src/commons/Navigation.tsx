import React from "react";
import SideNavigation, { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import { useTranslation } from "react-i18next";

const defaultOnFollowHandler: SideNavigationProps['onFollow'] = (event) => {
  event.preventDefault();
};

interface NavigationProps {
  activeHref?: string;
  header?: SideNavigationProps['header'];
  items?: SideNavigationProps['items'];
  onFollowHandler?: SideNavigationProps['onFollow'];
}

export const Navigation: React.FC<NavigationProps> = ({ activeHref, header, items, onFollowHandler }) => {
  const { t } = useTranslation();
  const theHeader = !header
    ? { text: t('app.name'), href: '#/' }
    : header;
  const theOnFollowHandler = !onFollowHandler
    ? defaultOnFollowHandler
    : onFollowHandler;
  const theItems = !items
    ? [{
        type: 'section',
        text: t('nav.docs.section'),
        items: [
          { type: 'link', text: t('nav.docs.getStarted'), href: '#/getting-started' },
          { type: 'link', text: t('nav.docs.demos'), href: '#/demos' },
        ],
      }]
    : items;

  return <SideNavigation
    items={theItems}
    header={theHeader}
    activeHref={activeHref}
    onFollow={theOnFollowHandler}
  />
};
