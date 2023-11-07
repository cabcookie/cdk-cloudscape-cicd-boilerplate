import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from './commons/Navigation';
import { Notifications } from './commons/Notifications';
import { Breadcrumbs } from './commons/Breadcrumbs';
import { DetailsCards } from './components/DetailsCards';
import { CustomAppLayout } from './commons/CustomAppLayout';
import { ToolsContent } from './commons/ToolsContent';
import { useTranslation } from 'react-i18next';
import { translations } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import './i18n';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [toolsOpen, setToolsOpen] = useState(false);
  const appLayout = useRef();

  useEffect(() => {
    document.title = t('app.name');
  }, []);

  I18n.putVocabularies(translations);
  I18n.setLanguage(i18n.language);

  return (
    <CustomAppLayout
      ref={appLayout}
      navigation={<Navigation activeHref='#/getting-started' />}
      notifications={<Notifications successNotification={true} />}
      breadcrumbs={<Breadcrumbs />}
      content={<DetailsCards
        loadHelpPanelContent={() => {
          setToolsOpen(true);
          appLayout.current?.focusToolsClose();
        }}
      />}
      contentType='cards'
      tools={<ToolsContent />}
      toolsOpen={toolsOpen}
      onToolsChange={({detail}) => setToolsOpen(detail.open)}
      stickyNotifications={true}
    />
  )
};

export default App;
