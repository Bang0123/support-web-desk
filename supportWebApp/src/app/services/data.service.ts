import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public currentTicket: Observable<Ticket>;
  private ticketSource: BehaviorSubject<Ticket>;
  constructor() {
    const tick: Ticket = {
      id: -1,
      status: '',
      priority: '',
      subject: '',
      requester: { userName: '', email: '' },
      assignee: { userName: '', email: '' },
      createdAt: '',
      updatedAt: '',
      body: ''
    };
    this.ticketSource = new BehaviorSubject<Ticket>(tick);
    this.currentTicket = this.ticketSource.asObservable();
  }

  changeCurrentTicket(newtick: Ticket) {
    this.ticketSource.next(newtick);
  }
}