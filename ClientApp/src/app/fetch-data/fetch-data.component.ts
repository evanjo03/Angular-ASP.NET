import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public things: AnotherList[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
      console.log(baseUrl);
    }, error => console.error(error));

    // http.get<AnotherList[]>(baseUrl + 'api/SampleData/AnotherList').subscribe(result => {
    //   this.forecasts = result;
    //   console.log(baseUrl);
    // }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

// interface AnotherList {
//   dateFormatted: string;
//   temperatureC: number;
//   temperatureF: number;
//   summary: string;
// }
