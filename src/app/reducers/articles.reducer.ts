import { ArticlesActionTypes } from '../actiontypes/articles.actiontypes';

const initialState = {
    articles: null,
    loading: false,
    err: null,

    articleById: null,
    articleByIdLoading: false,
    articleByIdErr: null,

    informations: null,
    informationsLoading: false,
    informationsErr: null,

    docsAndRules: null,
    docsAndRulesLoading: false,
    docsAndRulesErr:null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ArticlesActionTypes.GET_ALL_ARTICLES_STARTED:
        return { ...state, loading: true, err: null, articles: null }
    case ArticlesActionTypes.GET_ALL_ARTICLES_SUCCESS:
        return { ...state, loading: false, err: null, articles: payload }
    case ArticlesActionTypes.GET_ALL_ARTICLES_FAILED:
        return { ...state, loading: false, err: payload, articles: null }

    case ArticlesActionTypes.GET_ARTICLE_BY_ID_STARTED:
        return { ...state, articleByIdLoading: true, articleByIdErr: null, articleById: null }
    case ArticlesActionTypes.GET_ARTICLE_BY_ID_SUCCESS:
        return { ...state, articleByIdLoading: false, articleByIdErr: null, articleById: payload }
    case ArticlesActionTypes.GET_ARTICLE_BY_ID_FAILED:
        return { ...state, articleByIdLoading: false, articleByIdErr: payload, articleById: null }

    case ArticlesActionTypes.GET_ALL_INFORMATIONS_STARTED:
        return { ...state, informationsLoading: true, informationsErr: null, informations: null }
    case ArticlesActionTypes.GET_ALL_INFORMATIONS_SUCCESS:
        return { ...state, informationsLoading: false, informationsErr: null, informations: payload }
    case ArticlesActionTypes.GET_ALL_INFORMATIONS_FAILED:
        return { ...state, informationsLoading: false, informationsErr: payload, informations: null }

    case ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_STARTED:
        return { ...state, docsAndRulesLoading: true, docsAndRulesErr: null, docsAndRules: null }
    case ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_SUCCESS:
        return { ...state, docsAndRulesLoading: false, docsAndRulesErr: null, docsAndRules: payload }
    case ArticlesActionTypes.GET_ALL_DOCS_AND_RULES_FAILED:
        return { ...state, docsAndRulesLoading: false, docsAndRulesErr: payload, docsAndRules: null }

    default:
        return state
    }
}
