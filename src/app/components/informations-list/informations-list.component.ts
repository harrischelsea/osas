import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as articleSelectors from '../../selectors/articles.selectors';
import { Information } from '../../selectors/articles.selectors';

@Component({
  selector: 'app-informations-list',
  templateUrl: './informations-list.component.html',
  styleUrls: ['./informations-list.component.scss']
})
export class InformationsListComponent implements OnInit {
  INFORMATIONS: Information[] = [];
  MAIN_INFORMATION: Information = {id: 0,  link: "", naslov: "", opis: "", datum: ""}
  SUB_MAIN_INFORMATIONS: Information[] = [];
  OTHER_INFORMATIONS: Information[] = []

  constructor(private store:Store<any>) {
    this.store.pipe(select(articleSelectors.informationsSelector)).subscribe(values => {
      const { informations } = values;
      if(!informations) return;
      this.INFORMATIONS = informations;
      this.MAIN_INFORMATION = informations[0];
      this.SUB_MAIN_INFORMATIONS = [informations[1], informations[2]];
      this.OTHER_INFORMATIONS = informations.filter((el, i) => i > 2);
    })
   }

  ngOnInit() {
  }

}
