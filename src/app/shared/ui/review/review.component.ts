import { Review } from '@/app/core/interfaces/Review';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  reviews: Review[] = [
    {
      author: 'Jese Leos',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      joinDate: 'August 2014',
      reviewDate: 'March 3, 2017',
      rating: 4,
      title: 'Thinking to buy another one!',
      content:
        'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
      helpfulCount: 19,
      isHelpful: true,
      reportLink: '#report-abuse-1',
    },
    {
      author: 'Lina Torres',
      avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      joinDate: 'January 2015',
      reviewDate: 'July 22, 2018',
      rating: 5,
      title: 'Absolutely love this watch!',
      content:
        "I absolutely love my Invicta Pro Diver! The design is great, and it's super durable. I've worn it in the pool, and it still looks like new. Highly recommend it to anyone looking for a stylish and affordable watch.",
      helpfulCount: 32,
      isHelpful: true,
      reportLink: '#report-abuse-2',
    },
    {
      author: 'Carlos Méndez',
      avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      joinDate: 'April 2017',
      reviewDate: 'November 12, 2019',
      rating: 3,
      title: 'Decent but not top quality',
      content:
        "It's a good watch for the price, but the build quality doesn't compare to high-end brands. The strap is a bit flimsy, and the design is very simple. It's ok for everyday use but not for anything fancy.",
      helpfulCount: 8,
      isHelpful: false,
      reportLink: '#report-abuse-3',
    },
    {
      author: 'Miguel González',
      avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      joinDate: 'June 2019',
      reviewDate: 'December 14, 2020',
      rating: 4,
      title: 'Good watch for the price!',
      content:
        'I bought this watch last week and so far it has worked great. The color is amazing and the size is perfect for my wrist. I’ve already gotten a few compliments on it. Definitely a good option for those on a budget.',
      helpfulCount: 14,
      isHelpful: true,
      reportLink: '#report-abuse-4',
    },
    {
      author: 'Sofía García',
      avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
      joinDate: 'March 2016',
      reviewDate: 'August 5, 2022',
      rating: 2,
      title: 'Not as expected',
      content:
        'I was excited to try this out, but I am a bit disappointed. The watch doesn’t hold up well to daily wear, and the strap feels cheap. It might be a good option for occasional use, but not for regular wear.',
      helpfulCount: 3,
      isHelpful: false,
      reportLink: '#report-abuse-5',
    },
  ];
}
