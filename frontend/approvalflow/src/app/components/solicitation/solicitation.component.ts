import { Component, OnInit } from '@angular/core';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Solicitation } from 'src/app/models/solicitation';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.css']
})
export class SolicitationComponent implements OnInit {

  solicitation = {} as Solicitation;

  constructor(
    private solicitationService: SolicitationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveSolicitation(form: NgForm) {
    this.solicitationService.saveSolicitation(this.solicitation).subscribe(() => {
      this.cleanForm(form);
      this.router.navigate(['/']);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.solicitation = {} as Solicitation;
  }
}
