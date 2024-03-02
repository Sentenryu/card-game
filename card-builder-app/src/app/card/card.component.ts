import { Component, Input } from '@angular/core';
import { Card, CardAttribute, CardAttributes } from '../model/card';
import { NgClass, NgForOf } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgbDropdownModule, NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() edit: boolean = false;
  @Input({ required: true }) cardData!: Card;
  
  cardAttributes = CardAttributes;
  
  setAttribute(attribute: CardAttribute) {
    this.cardData.attribute = attribute;
  }
}
