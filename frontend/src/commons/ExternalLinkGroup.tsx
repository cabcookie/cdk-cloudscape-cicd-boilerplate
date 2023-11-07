import React, { useId } from "react";
import { Container, Header, Icon, Link } from "@cloudscape-design/components";
import { SeparatedList } from "./separated-list/SeparatedList";
import { useTranslation } from "react-i18next";

interface ExternalLinkItemProps {
  href: string;
  text: string;
}

const ExternalLinkItem: React.FC<ExternalLinkItemProps> = ({ href, text }) => (
  <Link href={href} target="_blank">
    {text}
  </Link>
);

interface ExternalLinkGroupProps {
  variant?: 'default' | 'container';
  header?: string;
  groupAriaLabel?: string;
  items: Array<ExternalLinkItemProps>;
}

export const ExternalLinkGroup: React.FC<ExternalLinkGroupProps> = ({
  header,
  groupAriaLabel,
  items,
  variant = 'default',
}) => {
  const {t} = useTranslation();
  const theHeader = !header
    ? t('nav.docs.learnMore')
    : header;

  const externalIcon = (
    <span role="img" aria-label={t('general.links.openInNewTab')}>
      <Icon name="external" size="inherit" />
    </span>
  );

  const headerId = `header-${useId()}`;

  return variant === 'container'
    ? (
        <Container
          header={
            <Header>
              <span id={headerId}>
                {theHeader} {externalIcon}
              </span>
            </Header>
          }
        >
          <SeparatedList
            ariaLabel={groupAriaLabel}
            ariaLabelledBy={groupAriaLabel ? undefined : headerId}
            items={items.map((item, idx) => (
              <ExternalLinkItem key={idx} href={item.href} text={item.text} />
            ))}
          />
        </Container>
      )
    : (<>
        <h3 id={headerId}>
          {theHeader} {externalIcon}
        </h3>
        <ul aria-label={groupAriaLabel} aria-labelledby={groupAriaLabel ? undefined : headerId}>
          {items.map((item, idx) => (
            <li key={idx}>
              <ExternalLinkItem href={item.href} text={item.text} />
            </li>
          ))}
        </ul>
      </>);
}
