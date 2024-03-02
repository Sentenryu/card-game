import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { EditorCard } from '../model/card';

@Component({
    selector: 'app-card-editor',
    standalone: true,
    templateUrl: './card-editor.component.html',
    styleUrl: './card-editor.component.css',
    imports: [CardComponent]
})
export class CardEditorComponent {
    card = new EditorCard();
}
