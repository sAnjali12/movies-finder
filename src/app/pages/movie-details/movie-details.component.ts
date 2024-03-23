import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MovieSeatsComponent } from '../movie-seats/movie-seats.component';
import { MoviesService } from 'src/app/movies.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any;
  movieId: any
  movieType: any
  bollywoodMovies: any[];
  hollywoodMovies: any[];

  constructor(
   public translate: TranslateService,
   private route: Router,
   private dialogModel: MatDialog,
   private service: MoviesService,
   private router: ActivatedRoute,
   private title:Title,
   private meta:Meta


  ) {
    translate.addLangs(['en', 'hi'])
    translate.setDefaultLang('en')

  }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

 

  switchLang(lang: string){
    this.translate.use(lang); 
  }

  bookMovieSeat(): void { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.hasBackdrop = false
    let dialogRef = this.dialogModel.open(MovieSeatsComponent, dialogConfig); 
  
    dialogRef.afterClosed().subscribe(result => { 
      // this.animal = result; 
    }); 
  }
  
 


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult =  result;

        // // updatetags
        // this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        // this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        // this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
        // // facebook
        // this.meta.updateTag({property:'og:type',content:"website"});
        // this.meta.updateTag({property:'og:url',content:``});
        // this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        // this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        // this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

    });
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}


