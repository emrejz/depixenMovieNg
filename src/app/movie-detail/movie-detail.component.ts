import { MovieService } from "./../services/movie/movie.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.movieService.getMovieDetail(id).subscribe(data => console.log(data));
    });
  }
}
