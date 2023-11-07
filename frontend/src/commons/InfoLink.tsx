import React from 'react';
import Link, { LinkProps } from '@cloudscape-design/components/link';

interface InfoLinkProps {
  id?: string;
  ariaLabel?: string;
  onFollow: LinkProps['onFollow'];
}
export const InfoLink = (props: InfoLinkProps) => (
  <Link variant="info" {...props}>
    Info
  </Link>
);