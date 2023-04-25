import { createContext } from 'react';
import ICompressContext from '../interfaces/ICompressContext';

export const defaultCompressContext: ICompressContext = {
  targetFolder: undefined,
};

const CompressContext = createContext(defaultCompressContext);

export default CompressContext;
