import { Component, OnInit } from '@angular/core';
import * as articlesActions from '../../actions/aricles.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new articlesActions.GetAllArticlesStarted());
    this.store.dispatch(new articlesActions.GetAllInformationsStarted());
  }

}
