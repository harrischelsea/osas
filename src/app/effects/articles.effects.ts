import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../services/article.service';
import { ArticlesActionTypes } from '../actiontypes/articles.actiontypes';
import * as articlesActions from '../actions/aricles.actions';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ArticlesEffects {
  constructor(
      private actions$: Actions,
      private articlesService: ArticleService
      ) {}

    getArticles$ = createEffect(() => 
        this.actions$.pipe(
                ofType(ArticlesActionTypes.GET_ALL_ARTICLES_STARTED),
                mergeMap(() => this.performGetArticles())
        )
    )

    performGetArticles(){
        return this.articlesService.getArticles()
        .pipe(
            map(articles => new articlesActions.GetAllArticlesSuccess(articles)),
            catchError((err) => {
                return of(new articlesActions.GetAllArticlesFailed(err))
            })
        )
    }

    getArticleById$ = createEffect(() => 
    this.actions$.pipe(
            ofType(ArticlesActionTypes.GET_ARTICLE_BY_ID_STARTED),
            mergeMap((action) => this.performGetArticleById(action['payload']))
        )
    )

    performGetArticleById(id: string){
        return this.articlesService.getArticleById(id)
        .pipe(
            map(article => {
                return  new articlesActions.GetArticleByIdSuccess(article)
            }),
            catchError((err) => {
                return of(new articlesActions.GetArticleByIdFailed(err))
            })
        )
    }

    getInformationss$ = createEffect(() => 
        this.actions$.pipe(
                ofType(ArticlesActionTypes.GET_ALL_INFORMATIONS_STARTED),
                mergeMap(() => this.performGeInformations())
        )
    )

    performGeInformations(){
        return this.articlesService.getInformations()
        .pipe(
            map(informations => new articlesActions.GetAllInformationsSuccess(informations)),
            catchError((err) => {
                return of(new articlesActions.GetAllInformationsFailed(err))
            })
        )
    }

}
