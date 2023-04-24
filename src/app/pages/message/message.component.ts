import { Component, OnInit } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  inputValue?: string;

  data = [
    {
      author: '再花',
      content: '这是一条留言',
      date: '2023年4月24日16:54:43'
    },
    {
      author: '方长',
      content: '这也是一条留言',
      date: '2023年4月24日16:55:16'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
