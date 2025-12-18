/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
    key: string;
    label: ReactNode;
    children: TSidebarItem[];
}


export type TUserPath = {
  reduce(arg0: (acc: TSidebarItem[], item: any) => TSidebarItem[], arg1: never[]): unknown;
  name: string;
  path?: string; // Make path optional
  element?: ReactNode; // Make element optional
  children?: TUserPath[];
};