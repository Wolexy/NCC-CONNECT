export interface Ticket {
  ticketId: string;
  ticketTitle: string;
  ticketOwner: string;
  ticketSite: string;
  ticketStatus: string;
  ticketAssignedTo: string;
  ticketPriority: string;
  ticketLastUpdated: Date;
}
export interface TicketDetail {
  ticketId: string;
  ticketTitle: string;
  ticketDecription: string;
  ticketCreated: Date;
  ticketApprovedBy: string;
  ticketOwner: string;
  ticketOwnerEmail: string;
  ticketOwnerPhone: string;
  ticketSite: string;
  ticketStatus: string;
  ticketAssignedTo: string;
  ticketPriority: string;
  ticketLastUpdated: Date;
}
