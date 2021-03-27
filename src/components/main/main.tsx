import * as React from 'react';
import { MoviesFilter } from '../../models/enums/movies-list';
import FilterBar from '../filter-bar/filter-bar';
import './main.scss';

export interface MainProps {
  children: React.ReactNode
}

const Main: React.FunctionComponent<MainProps> = (props: MainProps) => 
  <main className="main-container">
    {props.children}
  </main>
;

export default Main;
