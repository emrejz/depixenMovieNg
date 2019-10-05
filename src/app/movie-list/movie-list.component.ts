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
  ngOnInit() {}
  @HostListener("window:scroll", ["$event"])
  listeningScroll(event) {
    let movieListTag = document.getElementById("movieList");
    console.log(movieListTag.offsetHeight);
    console.log("window.innerHeight", window.innerHeight);
    console.log("window.window.scrollY", window.window.scrollY);
    console.log(window.innerHeight + window.scrollY);

    if (
      window.innerHeight + window.scrollY >= movieListTag.offsetHeight &&
      this.tryLoad
    ) {
      this.getMovies();
    }
  }
  getMovies() {
    this.tryLoad = false;
    this.movieService.getMovies().subscribe(data => {
      this.tryLoad = true;
      this.movies.push(...data["Search"]);
    });
  }
}
