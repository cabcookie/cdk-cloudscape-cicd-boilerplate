import { TFunction } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type ConsentCookie = {
  advertising: boolean;
  essential: boolean;
  functional: boolean;
  performance: boolean;
};

interface CookieConsent {
  checkForCookieConsent: () => void;
  getConsentCookie: () => ConsentCookie;
}

declare global {
  interface Window {
    AwsUiConsent: CookieConsent;
  }
}

const load = (key: string, t: TFunction<"translation">) => {
  const value = localStorage.getItem(key);
  try {
    return value && JSON.parse(value);
  } catch (e) {
    console.warn(
      t('localStorage.keyNotFound', { key })
    );
    return undefined;
  }
};

const hasConsent = () => {
  if (typeof window.AwsUiConsent === 'undefined') {
    return false;
  }

  const cookieConsent = window.AwsUiConsent.getConsentCookie();
  return cookieConsent?.functional ?? false;
};

const save = <T>(key: string, value: T) => {
  if (hasConsent()) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const {t} = useTranslation();
  const [value, setValue] = useState<T>(() => load(key, t) ?? defaultValue);

  const handleValueChange = (newValue: T) => {
    setValue(newValue);
    save<T>(key, newValue);
  };

  return [value, handleValueChange] as const;
};
