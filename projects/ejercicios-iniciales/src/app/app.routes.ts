import { Routes } from '@angular/router';
import { Ex01Component} from './components/ex01/ex01.component';
import { Ex02Component } from './components/ex02/ex02.component';
import { Ex03Component } from './components/ex03/ex03.component';
import { Ex04Component } from './components/ex04/ex04.component';
import { Ex05Component } from './components/ex05/ex05.component';
import { Ex06Component } from './components/ex06/ex06.component';
import { Ex07Component } from './components/ex07/ex07.component';
import { Ex08Component } from './components/ex08/ex08.component';
import { Ex09Component } from './components/ex09/ex09.component';
import { Ex10Component } from './components/ex10/ex10.component';

export const routes: Routes = [
  {path: 'ej01', component: Ex01Component},
  {path: 'ej02', component: Ex02Component},
  {path: 'ej03', component: Ex03Component},
  {path: 'ej04', component: Ex04Component},
  {path: 'ej05', component: Ex05Component},
  {path: 'ej06', component: Ex06Component},
  {path: 'ej07', component: Ex07Component},
  {path: 'ej08', component: Ex08Component},
  {path: 'ej09', component: Ex09Component},
  {path: 'ej10', component: Ex10Component},
  {path: '', redirectTo: 'ej01', pathMatch: 'full'},
];
