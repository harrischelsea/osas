import { Component, OnInit } from '@angular/core';
import * as articleSelectors from '../../selectors/articles.selectors';
import { Article } from '../../selectors/articles.selectors';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  ARTICLES: Article[] = [];
  POPULAR: Article[] = [];
  
  constructor(private store:Store<any>) {
    this.store.pipe(select(articleSelectors.articlesSelector)).subscribe(values => {
      const { articles } = values;
      if(!articles) return;
      // this.ARTICLES = articles;
      this.ARTICLES = articles.slice().sort(this.sortiranje);
      this.POPULAR = articles.slice().sort(this.compare).slice(0, 5);
    })
   }

  ngOnInit() {
  }

  sortiranje(a, b) {
    let comparison = 0;
    if (moment(new Date(a.datum)) > moment(new Date(b.datum))) {
      comparison = -1;
    } else if (moment(new Date(a.datum)) > moment(new Date(b.datum))) {
      comparison = 1;
    }
    return comparison;
  }

  compare(a, b) {
    let comparison = 0;
    if (a.brojKlikova > b.brojKlikova) {
      comparison = -1;
    } else if (a.brojKlikova < b.brojKlikova) {
      comparison = 1;
    }
    return comparison;
  }

}
