import { MovieService } from "./../services/movie/movie.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { MovieInList } from "../models/movieInList";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService, private router: Router) {}
  movies: MovieInList[] = [];

  ngOnInit() {
    if (this.movieList.length === 0) {
      this.movieService.getMovies();
    }
  }
  @HostListener("window:scroll", ["$event"])
  listeningScroll(event) {
    if (this.scrollCond()) {
      this.movieService.getMovies();
    }
  }
  get movieListID(): any {
    return document.getElementById("movieList");
  }
  scrollCond(): boolean {
    return window.innerHeight + window.scrollY >= this.movieListID.offsetHeight;
  }
  get movieList(): MovieInList[] {
    return this.movieService.movies;
    // this.tryLoad = false;
    // this.pageCount++;
    // this.movieService.getMovies(this.pageCount).subscribe(data => {
    //   this.tryLoad = true;
    //   this.movies.push(...data["Search"]);
    //   // if (window.innerWidth - document.documentElement.clientWidth == 0) {
    //   //   this.getMovies();
    //   // }
    // });
  }
  goDetail(id) {
    this.router.navigateByUrl("movie/" + id);
  }
}
