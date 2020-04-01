import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as articleActions from '../../actions/aricles.actions';
import * as articleSelectors from '../../selectors/articles.selectors';
import { ArticleService } from '../../services/article.service';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  ARTICLE: articleSelectors.Article = {id: 0, autor: "", galerija: [], naslov: "", opis: "", datum: "", brojKlikova: 0}
  images: GalleryItem[] = [];

  constructor(
    private router:ActivatedRoute, 
    private store:Store<any>,
    private articleService:ArticleService
    ) {
    this.store.pipe(select(articleSelectors.articleByIdSelector)).subscribe(values => {
      const { article } = values;
      this.images = [];
      if (!article) return;
      this.ARTICLE = article;

      if (!article.galerija) return;
      article.galerija.map(element => {
        this.images = [
          ...this.images,
          new ImageItem({ src: element, thumb: element })
        ];
      });
      

    })
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params.id){
        console.log('ID', params.id);

        const isOpen = localStorage.getItem(params.id);
        if (!isOpen) {
          this.articleService.updateArticle(params.id);
          localStorage.setItem(params.id, "yes");
        }
        
        this.store.dispatch(new articleActions.GetArticleByIdStarted(params.id))
      }
    })
  }

}
