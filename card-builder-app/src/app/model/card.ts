
export const CardAttributes = ['fire', 'air', 'earth', 'water', 'void'] as const;

export type CardAttribute = typeof CardAttributes[number];

export interface Card {
    name: string;
    attribute: CardAttribute;
    faction: string;
}


export class EditorCard implements Card {
    name: string = '';
    attribute: CardAttribute = 'void';
    faction: string = '';
}
