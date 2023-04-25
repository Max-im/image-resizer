import { FunctionComponent } from 'react';

export default interface IRoute {
  url: string;
  element: FunctionComponent;
  title: string;
  inMenu: boolean;
}
