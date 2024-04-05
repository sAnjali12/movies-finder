import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  posterList: any = []


images = [
  {
    title: "Leo",
    overview: "A heartwarming story about a young lion named Leo who embarks on an adventure to find his place in the world.",
    image: "../../../assets/images/leo.gif"
  },
  {
    title: "Panda",
    overview: "An animated film following the journey of a young panda as he navigates through the challenges of life in the jungle.",
    image: "../../../assets/images/panda-poster.jpg"
  },
  {
    title: "Animal",
    overview: "A thrilling tale of survival as a group of friends encounter a mysterious creature during a camping trip.",
    image: "../../../assets/images/aminal.gif"
  },
  {
    title: "Spider-Man: No Way Home",
    overview: "A suspenseful adventure following the adventures of a spider as it spins its web and faces various challenges.",
    image: "../../../assets/images/spider.gif"
  }
  // Add other image objects here
];
  currentSlide: number = 0;
  translatedMovies: any[];
  language: any
  bannerResult: any[]
  trendingMovieResult: any[]
  actionMovieResult: any[]
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];


  constructor(
    private service: MoviesService,
    private router: Router,
    public translate: TranslateService

  ) {
    
    translate.addLangs(['en', 'hi'])
    this.language = localStorage.getItem('language');
    if(this.language !== null){
      translate.setDefaultLang(this.language)
      this.switchLang(this.language)
    }else{
      translate.setDefaultLang('en')
    }
   }

  ngOnInit(): void {
    this.getBanner();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
  }

  getBanner(){
    this.service.bannerApiData().subscribe( (res)=>{
      this.bannerResult = res.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // action 
  actionMovie() {
    this.service.getActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.service.getAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.getAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.getComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }


  // translateMovies(lang: string) {
  //   this.translatedMovies = this.translate.instant('bollywood').map((movie: any) => {
  //       return {
  //           title: movie.title,
  //           image: movie.image,
  //           duration: movie.duration,
  //           year: movie.year,
  //           id: movie.id,
  //           language: movie.language,
  //           description: movie.description
  //       };
  //   });
  //   this.hollywoodMovieList = this.translate.instant('hollywood').map((movie: any) => {
  //       return {
  //           title: movie.title,
  //           image: movie.image,
  //           duration: movie.duration,
  //           year: movie.year,
  //           id: movie.id,
  //           language: movie.language,
  //           description: movie.description
  //       };
  //   });
  // }

  switchLang(lang: string){
    this.translate.use(lang); 
    localStorage.setItem('language', lang);
    // this.router.navigate(['/user']);
  }

  logOut(){
    localStorage.removeItem('user');
  }

  handleMovieCardClick(id: any, type: any){
    console.log(id)
    console.log(type)
    console.log('..........')
    this.router.navigate(['/movie-details/', id, type]);
  }
}
