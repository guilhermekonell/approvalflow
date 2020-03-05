import { Component, OnInit } from '@angular/core';
import { Solicitation } from 'src/app/models/solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  solicitation = {} as Solicitation;

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit(): void {
  }

  getSolicitation(id: number) {
    // this.solicitation = this.solicitationService.getSolicitationById(id);
  }
}
