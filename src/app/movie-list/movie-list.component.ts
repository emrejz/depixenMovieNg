import { MovieService } from "./../services/movie/movie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {}
  getMovies() {
    this.movieService.getMovies().subscribe(data => console.log(data));
  }
}
