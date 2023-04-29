import { createContext } from 'react';
import ISettings, { ISettingsType } from '../interfaces/ISettings';

export const defaultSettings: ISettings = {
  targetFolder: undefined,
  deleteSourceFiles: true,
  ignoreNonMediaFiles: false,
  outputDirectory: 'near',
};

const SettingsContext = createContext<ISettingsType>({
  settings: defaultSettings,
});

export default SettingsContext;
