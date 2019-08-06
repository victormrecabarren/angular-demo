import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ConsoleComponent } from './console/console.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistHeadComponent } from './playlist-head/playlist-head.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConsoleComponent,
    SideBarComponent,
    BodyComponent,
    PlaylistComponent,
    PlaylistHeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
