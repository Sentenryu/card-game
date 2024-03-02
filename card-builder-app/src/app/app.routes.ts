import { Routes } from '@angular/router';
import { CardEditorComponent } from './card-editor/card-editor.component';

export const routes: Routes = [
    { path: '', redirectTo: 'card-editor', pathMatch: 'full' },
    { path: 'card-editor', component: CardEditorComponent },
];
