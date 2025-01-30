import { Component } from '@angular/core';
import { AccordionCollapseItemComponent } from '../accordion-collapse-item/accordion-collapse-item.component';

@Component({
  selector: 'app-accordion-collapse',
  standalone: true,
  imports: [AccordionCollapseItemComponent],
  templateUrl: './accordion-collapse.component.html',
  styleUrl: './accordion-collapse.component.css',
})
export class AccordionCollapseComponent {
  accordionItems = [
    {
      title: 'Features',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isOpen: false, // Estado inicial del acordeón (cerrado)
    },
    {
      title: 'Care',
      content:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus euismod dictumst porta eu; ultrices fusce est. Tristique conubia ipsum porttitor arcu libero at faucibus. Id quisque porta felis pulvinar sapien turpis auctor cras feugiat. Et tincidunt tellus nullam mus rutrum. Et feugiat neque morbi fringilla pulvinar porttitor maximus proin.',
      isOpen: false, // Estado inicial del acordeón (cerrado)
    },
    {
      title: 'Shipping',
      content: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
      isOpen: false, // Estado inicial del acordeón (cerrado)
    },
  ];

  toggleAccordion(p_index: number) {
    this.accordionItems[p_index].isOpen = !this.accordionItems[p_index].isOpen;
  }
}
