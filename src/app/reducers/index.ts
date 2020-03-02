import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import ArticlesReducer from './articles.reducer'

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  articles: ArticlesReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
