'use client';

import * as React from 'react';
import Image from 'next/image';

import type { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  {
    value: 'vi',
    label: 'Tiếng Việt',
    icon: '/assets/icons/ic_flag_vi.svg',
  },
] as const;

// ----------------------------------------------------------------------

export type LanguagePopoverProps = {
  showLabel?: boolean;
  sx?: SxProps<Theme>;
};

export default function LanguagePopover({ showLabel = false, sx }: LanguagePopoverProps) {
  const changeLocale = useChangeLocale();
  const currentLocal = useCurrentLocale();
  const [open, setOpen] = React.useState<HTMLButtonElement | null>(null);

  const selectedLanguage = React.useMemo(
    () => LANGS.find((n) => n.value == currentLocal) ?? LANGS[0],
    [currentLocal],
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {showLabel ? (
        <Button
          onClick={handleOpen}
          size="small"
          sx={{
            ...(open && {
              bgcolor: 'action.selected',
            }),
            ...sx,
          }}
          startIcon={
            <Image
              src={selectedLanguage.icon}
              alt={selectedLanguage.label}
              width={32}
              height={32}
            />
          }
        >
          <Typography variant="button" color="text.primary">
            {selectedLanguage.label}
          </Typography>
        </Button>
      ) : (
        <IconButton
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            ...(open && {
              bgcolor: 'action.selected',
            }),
            ...sx,
          }}
        >
          <Image src={selectedLanguage.icon} alt={selectedLanguage.label} width={40} height={40} />
        </IconButton>
      )}

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLocal}
            onClick={() => {
              changeLocale(option.value);
              handleClose();
            }}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
