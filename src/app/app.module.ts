import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './pages/home/home.component';
import {effectsArr} from './effects/'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { InformationsListComponent } from './components/informations-list/informations-list.component';
import { ParseDatePipe } from './pipes/parse-date.pipe';
import { AdministratorComponent } from './pages/administrator/administrator.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateInfoComponent } from './components/create-info/create-info.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { DocumentsAndRulesComponent } from './pages/documents-and-rules/documents-and-rules.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    HeaderComponent,
    ArticlesListComponent,
    InformationsListComponent,
    ParseDatePipe,
    AdministratorComponent,
    WelcomeHeaderComponent,
    ArticleComponent,
    LoginComponent,
    CreateArticleComponent,
    CreateInfoComponent,
    FooterComponent,
    DocumentsAndRulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    EditorModule,
    FormsModule,
    ReactiveFormsModule,

    GalleryModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effectsArr),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
