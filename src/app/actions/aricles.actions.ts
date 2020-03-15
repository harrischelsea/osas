import {Action} from '@ngrx/store';
import { ArticlesActionTypes } from '../actiontypes/articles.actiontypes';

export class ActionParrent implements Action {
    type: string;
    payload: any;
}

export class GetAllArticlesStarted implements Action {
    type = ArticlesActionTypes.GET_ALL_ARTICLES_STARTED;
}
export class GetAllArticlesSuccess implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_ARTICLES_SUCCESS;
    constructor(public payload: any){}
}
export class GetAllArticlesFailed implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_ARTICLES_FAILED;
    constructor(public payload: any){}
}

export class GetArticleByIdStarted implements ActionParrent {
    type = ArticlesActionTypes.GET_ARTICLE_BY_ID_STARTED;
    constructor(public payload: any){}
}
export class GetArticleByIdSuccess implements ActionParrent {
    type = ArticlesActionTypes.GET_ARTICLE_BY_ID_SUCCESS;
    constructor(public payload: any){}
}
export class GetArticleByIdFailed implements ActionParrent {
    type = ArticlesActionTypes.GET_ARTICLE_BY_ID_FAILED;
    constructor(public payload: any){}
}

export class GetAllInformationsStarted implements Action {
    type = ArticlesActionTypes.GET_ALL_INFORMATIONS_STARTED;
}
export class GetAllInformationsSuccess implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_INFORMATIONS_SUCCESS;
    constructor(public payload: any){}
}
export class GetAllInformationsFailed implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_INFORMATIONS_FAILED;
    constructor(public payload: any){}
}

export class GetAllDocsAndRulesStarted implements Action {
    type = ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_STARTED;
}
export class GetAllDocsAndRulesSuccess implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_SUCCESS;
    constructor(public payload: any){}
}
export class GetAllDocsAndRulesFailed implements ActionParrent {
    type = ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_FAILED;
    constructor(public payload: any){}
}