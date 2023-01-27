export type ElementTitleProps = {
  title: string;
};

export type ElementTextFieldProps = {
  showError: boolean;
  value: string;
  helperText: string;
  onChange: (e: any) => void; // Fix!!
};

export type ElementPaperProps = {
  children?: JSX.Element[];
};

export type ElementButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  type?: string;
  disabled?: boolean;
};

///
export type ElementShowCodeSnipItProps = {
  codeSnipIt: string;
};

export type ElementCodeSnipitProps = {
  img: string;
};

export type PaletteDisplayBoxProps = {
  element: string;
};

export type PaletteThemeType = {
  COLOR_BG: string;
  COLOR_HEADER: string;
  COLOR_HEADLINE: string;
  COLOR_SECONDARY: string;
  COLOR_SECONDARY_CONTRAST: string;
  COLOR_BUTTON: string;
  COLOR_BUTTON_TEXT: string;
  COLOR_ALERT: string;
  COLOR_ALERT_TEXT: string;
  HEADER_ELEVATION: number;
  NAME: string;
};

export type AllPaletteThemes = {
  [key: string]: PaletteThemeType;
};

export type PaletteSelectionProps = {
  setSelectedColorPalette: (key: string) => void;
};
