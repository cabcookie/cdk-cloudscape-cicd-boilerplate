import HelpPanel from "@cloudscape-design/components/help-panel";
import React from "react";
import { ExternalLinkGroup } from "./ExternalLinkGroup";
import { useTranslation } from "react-i18next";

const toolsFooter = (
  <ExternalLinkGroup
    items={[
      { text: 'CDK', href: 'https://aws.amazon.com/cdk/' },
      { text: 'Lambda', href: 'https://aws.amazon.com/lambda/' },
      { text: 'Cognito', href: 'https://aws.amazon.com/cognito/' },
      { text: 'DynamoDB', href: 'https://aws.amazon.com/dynamodb/' },
      { text: 'Cloudscape Design System', href: 'https://cloudscape.design' },
    ]}
  />
);

export const ToolsContent: React.FC = () => {
  const {t} = useTranslation();

  return (
    <HelpPanel footer={toolsFooter} header={<h2>{t('exampleData.data_other')}</h2>}>
      <p>
        {t('exampleData.helpPanelDescription')}
      </p>
    </HelpPanel>
  );
};
