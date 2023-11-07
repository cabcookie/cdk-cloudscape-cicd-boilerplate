import React, { useEffect, useState } from "react";
import Cards from "@cloudscape-design/components/cards";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Pagination from "@cloudscape-design/components/pagination";
import TextFilter from "@cloudscape-design/components/text-filter";
import { useCollection } from "@cloudscape-design/collection-hooks";
import { TableEmptyState } from "../commons/TableEmptyState";
import { TableNoMatchState } from "../commons/TableNoMatchState";
import { useLocalStorage } from "../commons/use-local-storage";
import { CARD_DEFINITIONS, DEFAULT_PREFERENCES, PAGE_SIZE_OPTIONS, VISIBLE_CONTENT_OPTIONS } from "../commons/cards-config";
import { FullPageHeader } from "../commons/FullPageHeader";
import { DataProvider, TAirport } from "../commons/DataProvider";
import { useTranslation } from "react-i18next";

interface DetailsCardsProps {
  loadHelpPanelContent: () => void;
}

export const DetailsCards: React.FC<DetailsCardsProps> = ({ loadHelpPanelContent }) => {
  const [loading, setLoading] = useState(true);
  const [airports, setAirports] = useState<TAirport[]>([]);
  const [preferences, setPreferences] = useLocalStorage('React-Cards-Preferences', DEFAULT_PREFERENCES);
  const {t} = useTranslation();

  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps} = useCollection(airports, {
    filtering: {
      empty: <TableEmptyState
        noDataTitle={t('exampleData.noDataTitle')}
        noDataDescription={t('exampleData.noDataDescription')}
        createRecordText={t('exampleData.createRecordText')}
      />,
      noMatch: <TableNoMatchState onClearFilter={() => actions.setFiltering('')} />
    },
    pagination: { pageSize: preferences.pageSize },
    selection: {},
  });

  useEffect(() => {
    const data = new DataProvider().getData();
    setAirports(data);
    setLoading(false);
  }, []);

  return (
    <Cards
      {...collectionProps}
      stickyHeader={true}
      cardDefinition={CARD_DEFINITIONS(t)}
      visibleSections={preferences.visibleContent}
      loading={loading}
      loadingText={t('exampleData.loadingText')}
      items={items}
      selectionType="multi"
      variant="full-page"
      ariaLabels={{
        allItemsSelectionLabel: () => t('tableData.select.all'),
        itemSelectionLabel: (data, row) => t('tableData.select.one', {
          record: row.name
        }),
        selectionGroupLabel: t('tableData.select.selection')
      }}
      renderAriaLive={({firstIndex, lastIndex, totalItemsCount}) => t('tableData.select.displayItems', {
        firstIndex,
        lastIndex,
        totalItemsCount,
      })}
      header={
        <FullPageHeader
          title={t('exampleData.data_other')}
          createButtonText={t('exampleData.createRecordText')}
          selectedItemsCount={collectionProps.selectedItems?.length || 0}
          counter={loading
            ? ''
            : collectionProps.selectedItems && collectionProps.selectedItems?.length > 0
              ? `(${collectionProps.selectedItems.length}/${airports.length})`
              : `(${airports.length})`}
          onInfoLinkClick={loadHelpPanelContent}
        />
      }
      filter={
        <TextFilter
          {...filterProps}
          filteringAriaLabel={t('exampleData.filterText')}
          filteringPlaceholder={t('exampleData.findText')}
          filteringClearAriaLabel={t('filter.clear')}
          countText={t('tableData.matches.match', { count: filteredItemsCount })}
          disabled={loading}
        />
      }
      pagination={<Pagination {...paginationProps} disabled={loading} />}
      preferences={
        <CollectionPreferences
          title={t('preferences.title')}
          confirmLabel={t('general.buttons.confirm')}
          cancelLabel={t('general.buttons.cancel')}
          disabled={loading}
          preferences={preferences}
          onConfirm={({detail}) => setPreferences(detail)}
          pageSizePreference={{
            title: t('preferences.pageSize'),
            options: PAGE_SIZE_OPTIONS(t),
          }}
          visibleContentPreference={{
            title: t('preferences.selectVisibleColumns'),
            options: VISIBLE_CONTENT_OPTIONS(t),
          }}
        />
      }
    />
  );
};
