import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as articleSelectors from '../../selectors/articles.selectors';
import { Information } from '../../selectors/articles.selectors';
import * as articlesActions from '../../actions/aricles.actions';

@Component({
  selector: 'app-documents-and-rules',
  templateUrl: './documents-and-rules.component.html',
  styleUrls: ['./documents-and-rules.component.scss']
})
export class DocumentsAndRulesComponent implements OnInit {
  INFORMATIONS: Information[] = [];
  MAIN_INFORMATION: Information = {id: 0,  link: "", naslov: "", opis: "", datum: ""}
  SUB_MAIN_INFORMATIONS: Information[] = [];
  OTHER_INFORMATIONS: Information[] = []

  constructor(private store:Store<any>) {
    this.store.pipe(select(articleSelectors.informationsSelector)).subscribe(values => {
      const { informations } = values;
      if(!informations) return;
      // this.INFORMATIONS = informations.slice(0, 9);
      this.INFORMATIONS = informations;
      this.INFORMATIONS = this.INFORMATIONS.sort((a, b) => (a.datum > b.datum) ? 1 : -1);
      this.MAIN_INFORMATION = informations[0];
      this.SUB_MAIN_INFORMATIONS = [informations[1], informations[2]];
      this.OTHER_INFORMATIONS = informations.filter((el, i) => i > 2 && i < 6);
    })
   }

  ngOnInit() {
    this.store.dispatch(new articlesActions.GetAllInformationsStarted());
  }

}