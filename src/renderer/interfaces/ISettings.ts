import React from 'react';

export default interface ISettings {
  targetFolder: undefined | string;
  deleteSourceFiles: boolean;
  ignoreNonMediaFiles: boolean;
  outputDirectory: string;
}

export interface ISettingsType {
  settings: ISettings;
  setSettings?: React.Dispatch<React.SetStateAction<ISettings>>;
}
