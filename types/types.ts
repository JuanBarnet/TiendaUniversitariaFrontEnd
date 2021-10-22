import { IconType } from "react-icons";

export interface SideBarMenuItem {
    rol: string[];
    id: string;
    label: string;
    icon: IconType;
    url: string;
    type: string;
    icon2: IconType;
    texto: string;
}

export interface SideBarMenuCard {
    id: string;
    displayName: string;
    photoUrl: string;
    title: string;
    url: string;
}