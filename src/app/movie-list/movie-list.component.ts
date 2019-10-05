import { MovieService } from "./../services/movie/movie.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { MovieInList } from "../models/movieInList";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies: MovieInList[] = [];
  tryLoad: boolean = true;

  pageCount: number = 1;
  ngOnInit() {}
  @HostListener("window:scroll", ["$event"])
  listeningScroll(event) {
    if (this.scrollCond()) {
      this.getMovies();
    }
  }
  get movieListID(): any {
    return document.getElementById("movieList");
  }
  scrollCond(): boolean {
    return (
      window.innerHeight + window.scrollY + 300 >=
        this.movieListID.offsetHeight && this.tryLoad
    );
  }
  getMovies() {
    this.tryLoad = false;
    this.pageCount++;
    this.movieService.getMovies(this.pageCount).subscribe(data => {
      this.tryLoad = true;
      this.movies.push(...data["Search"]);
      // if (window.innerWidth - document.documentElement.clientWidth == 0) {
      //   this.getMovies();
      // }
    });
  }
}