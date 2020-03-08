import { Component, OnInit } from '@angular/core';
import { Solicitation } from 'src/app/models/solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  situation: String;
  solicitation = {} as Solicitation;

  constructor(
    private solicitationService: SolicitationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getSolicitation();
  }

  saveApproval() {
    console.log('oi')
    this.solicitation.status = this.situation === 'accept' ? true : false;
    this.solicitationService.saveSolicitation(this.solicitation).subscribe(() => {
      this.router.navigate(['/approvalList']);
    });
  }

  getSolicitation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.solicitationService.getSolicitationById(id).subscribe(solicitation => this.solicitation = solicitation);
  }

  changeOption(situation: String) {
    this.situation = situation;
  }
}
