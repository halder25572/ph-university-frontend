// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { NavLink } from "react-router-dom";
// import type { TSidebarItem, TUserPath } from "../types";







// export const sidebarItemsGenerator = (items: TUserPath[], role : any) => {
//     const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
//         if (item.path && item.name) {
//             acc.push({
//                 key: item.name,
//                 label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
//                 children: [],
//             });
//         }

//         if (item.children) {
//             acc.push({
//                 key: item.name,
//                 label: item.name,
//                 children: item.children
//                     .filter((child) => child.path && child.name)
//                     .map((child: any) => ({
//                         key: child.name,
//                         label: <NavLink to={`/${role}/${child.path}`} > {child.name} </NavLink>
//                     }))
//             });
//         }
//         return acc;
//     }, []);
//     return sidebarItems;
// }


/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";
import type { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
                children: [], // Add empty children array
            });
        }

        if (item.children) {
            const childrenItems: TSidebarItem[] = item.children
                .filter((child) => child.path && child.name)
                .map((child: any) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`} > {child.name} </NavLink>,
                    children: [] // Add empty children array for each child
                }));

            acc.push({
                key: item.name,
                label: item.name,
                children: childrenItems
            });
        }
        return acc;
    }, []);
    return sidebarItems;
}