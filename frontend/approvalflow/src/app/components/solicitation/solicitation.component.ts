import { Component, OnInit } from '@angular/core';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Solicitation } from 'src/app/models/solicitation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.css']
})
export class SolicitationComponent implements OnInit {

  solicitation = {} as Solicitation;

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit(): void {
  }

  saveSolicitation(form: NgForm) {
    this.solicitationService.saveSolicitation(this.solicitation).subscribe(() => {
      this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.solicitation = {} as Solicitation;
  }

}
