
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { TicketsComponent } from './../tickets/tickets.component';
import { TicketDetailComponent } from './../ticket-detail/ticket-detail.component';
import { NewTicketComponent } from './../new-ticket/new-ticket.component';
import { MyTicketsComponent } from './../my-tickets/my-tickets.component';
import { EditTicketComponent } from './../edit-ticket/edit-ticket.component';
import { ContactComponent } from './../contact/contact.component';
import { RoutingModule } from './../module/routing.modules';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketDetailComponent,
    NewTicketComponent,
    MyTicketsComponent,
    EditTicketComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
})
export class CaseModule {}
