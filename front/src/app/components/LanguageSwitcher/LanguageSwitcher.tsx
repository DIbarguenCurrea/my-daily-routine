'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Switch, FormControlLabel } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] === 'es' ? 'es' : '';
  const [isSpanish, setIsSpanish] = useState(currentLocale === 'es');

  useEffect(() => {
    setIsSpanish(currentLocale === 'es');
  }, [currentLocale]);

  const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLocale = event.target.checked ? 'es' : '';
    const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsSpanish(newLocale === 'es');
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isSpanish}
          onChange={changeLanguage}
          color="primary"
          inputProps={{ 'aria-label': 'language switcher' }}
        />
      }
      label={<TranslateIcon />}
    />
  );
};

export default LanguageSwitcher;
