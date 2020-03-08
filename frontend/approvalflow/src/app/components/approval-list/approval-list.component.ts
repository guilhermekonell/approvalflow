import { Solicitation } from 'src/app/models/solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.css']
})
export class ApprovalListComponent implements OnInit {

  nameFilter: String;
  descriptionFilter: String;
  solicitations: Solicitation[];

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit(): void {
    this.getSolicitations();
  }

  getSolicitations(): void {
    this.solicitationService.getSolicitations().subscribe((solicitations: Solicitation[]) => {
      this.solicitations = solicitations;
    });
  }

  getSolicitationsApproved(): void {
    this.solicitationService.getSolicitationsApproved().subscribe((solicitations: Solicitation[]) => {
      this.solicitations = solicitations;
    })
  }

  getSolicitationsRejected(): void {
    this.solicitationService.getSolicitationsRejected().subscribe((solicitations: Solicitation[]) => {
      this.solicitations = solicitations;
    })
  }

  getSolicitationsByName(): void {
    if (this.nameFilter === '') {
      this.getSolicitations();
      return;
    }
    this.solicitationService.getSolicitationsByName(this.nameFilter).subscribe((solicitations: Solicitation[]) => {
      this.solicitations = solicitations;
    })
  }

  getSolicitationsByDescription(): void {
    if (this.descriptionFilter === '') {
      this.getSolicitations();
      return;
    }
    this.solicitationService.getSolicitationsByDescription(this.descriptionFilter).subscribe((solicitations: Solicitation[]) => {
      this.solicitations = solicitations;
    })
  }

}
