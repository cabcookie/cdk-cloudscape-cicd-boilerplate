import { Box, Button, SpaceBetween } from "@cloudscape-design/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { EmptyDataSet } from "./DataProvider";

export const TableEmptyState: React.FC<EmptyDataSet> = ({ noDataTitle, noDataDescription, createRecordText }) => {
  const {t} = useTranslation();

  return (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
      <SpaceBetween size="xxs">
        <div>
          <b>{noDataTitle}</b>
          <Box variant="p" color="inherit">
            {noDataDescription || t('tableData.empty.noDataDescription')}
          </Box>
        </div>
        <Button>{createRecordText || t('tableData.empty.createRecordText')}</Button>
      </SpaceBetween>
    </Box>
  );
};
