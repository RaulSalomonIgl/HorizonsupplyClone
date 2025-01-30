import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-accordion-collapse-item',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './accordion-collapse-item.component.html',
  styleUrl: './accordion-collapse-item.component.css',
})
export class AccordionCollapseItemComponent {
  @Output() toggleAccordionItem = new EventEmitter<number>();

  @Input() id!: number;
  @Input() item!: {
    title: string;
    content: string;
    isOpen: boolean; // Estado inicial del acordeón (cerrado)
  };

  toggleAccordion(p_index: number) {
    this.toggleAccordionItem.emit(p_index);
  }
}
