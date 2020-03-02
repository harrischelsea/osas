import { createSelector } from '@ngrx/store';
 
export interface Article {
  id: number;
  naslov: string;
  opis: string;
  autor: string;
  datum: string;
  brojKlikova: number;
  galerija: string[];
}

export interface Information {
    id: number;
    link: string;
    naslov: string;
    opis: string;
    datum: string;
  }

interface ArticleReducer {
    articles: Article[],
    loading: boolean,
    err: any;
    articleById: Article,
    articleByIdLoading: boolean,
    articleByIdErr: any,
    informations: Information[],
    informationsLoading: boolean,
    informationsErr: any;
}
 
interface AppState {
  articles: ArticleReducer;
}
 
const selectArticles = (state: AppState) => state.articles.articles;
const selectArticlesLoading = (state: AppState) => state.articles.loading;
const selectArticlesErr = (state: AppState) => state.articles.err;
 
export const articlesSelector = createSelector(
    selectArticles,
    selectArticlesLoading,
    selectArticlesErr,
    (
    articles: Article[],
    loading: boolean,
    err: any
    ) => {
        return {
            articles,
            loading,
            err
        }
    }
);

const selectInformations = (state: AppState) => state.articles.informations;
const selectInformationsLoading = (state: AppState) => state.articles.informationsLoading;
const selectInformationsErr = (state: AppState) => state.articles.informationsErr;
 
export const informationsSelector = createSelector(
    selectInformations,
    selectInformationsLoading,
    selectInformationsErr,
    (
    informations: Information[],
    loading: boolean,
    err: any
    ) => {
        return {
            informations,
            loading,
            err
        }
    }
);

const selectArticleById = (state: AppState) => state.articles.articleById;
const selectArticleByIdLoading = (state: AppState) => state.articles.articleByIdLoading;
const selectArticleByIdErr = (state: AppState) => state.articles.articleByIdErr;
 
export const articleByIdSelector = createSelector(
    selectArticleById,
    selectArticleByIdLoading,
    selectArticleByIdErr,
    (
    article: Article,
    loading: boolean,
    err: any
    ) => {
        return {
            article,
            loading,
            err
        }
    }
);