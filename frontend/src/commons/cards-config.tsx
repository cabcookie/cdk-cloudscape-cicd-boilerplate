import React from "react";
import { CardsProps } from "@cloudscape-design/components/cards";
import Link from "@cloudscape-design/components/link";
import { TAirport } from "./DataProvider";
import { TFunction } from "i18next";

export const PAGE_SIZE_OPTIONS = (t: TFunction<"translation">) => [5, 10, 15]
  .map((value) => ({
    value,
    label: t('exampleData.count', { count: value }),
  }));

export const VISIBLE_CONTENT_OPTIONS = (t: TFunction<"translation">) => [
  {
    label: t('exampleData.dataProperties'),
    options: [
      { id: 'city', label: t('exampleData.properties.city') },
      { id: 'shortName', label: t('exampleData.properties.shortName') },
      { id: 'numberOfRunways', label: t('exampleData.properties.numberOfRunways') },
      { id: 'open', label: t('exampleData.properties.open') },
    ],
  },
];

export const CARD_DEFINITIONS = (t: TFunction<"translation">): CardsProps.CardDefinition<TAirport> => ({
  header: (item) => (
    <div>
      <Link fontSize="heading-m" href="#">
        {item.name}
      </Link>
    </div>
  ),
  sections: [
    { id: 'city', header: t('exampleData.properties.city'), content: (item) => item.city },
    { id: 'shortName', header: t('exampleData.properties.shortName'), content: (item) => item.shortName },
    { id: 'numberOfRunways', header: t('exampleData.properties.numberOfRunways'), content: (item) => item.numberOfRunways },
    { id: 'open', header: t('exampleData.properties.open'), content: (item) => item.open },
  ],
});

export const DEFAULT_PREFERENCES = {
  pageSize: 5,
  visibleContent: ['city', 'shortName'],
};
