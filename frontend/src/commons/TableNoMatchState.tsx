import { Box, Button, SpaceBetween } from "@cloudscape-design/components";
import React from "react";
import { useTranslation } from "react-i18next";

interface TableNoMatchStateProps {
  onClearFilter: () => void;
}

export const TableNoMatchState: React.FC<TableNoMatchStateProps> = ({ onClearFilter }) => {
  const {t} = useTranslation();

  return (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
      <SpaceBetween size="xxs">
        <div>
          <b>{t('tableData.matches.noMatches')}</b>
          <Box variant="p" color="inherit">
            {t('tableData.matches.noMatchesFound')}
          </Box>
        </div>
        <Button onClick={onClearFilter}>
          {t('tableData.matches.createFilter')}
        </Button>
      </SpaceBetween>
    </Box>
  );
};
