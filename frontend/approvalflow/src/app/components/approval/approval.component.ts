import { Component, OnInit } from '@angular/core';
import { Solicitation } from 'src/app/models/solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  solicitation = {} as Solicitation;

  constructor(
    private solicitationService: SolicitationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getSolicitation();
  }

  saveApproval(form: NgForm) {
    this.solicitation.status = true;
    this.solicitationService.saveSolicitation(this.solicitation).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  getSolicitation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.solicitationService.getSolicitationById(id).subscribe(solicitation => this.solicitation = solicitation);
  }

  rejectApproval(form: NgForm) {

  }
}
