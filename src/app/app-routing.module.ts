import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: MovieListComponent },
  { path: "movie/:id", component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
