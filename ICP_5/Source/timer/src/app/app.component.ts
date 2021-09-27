import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timer';
  constructor() { }
  ngOnInit() {}
//initializing countDownDate with event date
  countDownDate = new Date("August 27, 2022 15:25:30").getTime();
  demo:any;
//logic for count down time displaying months, days, hours, minutes, seconds
    x = setInterval(() => {
      var now = new Date().getTime();
      var distance = this.countDownDate - now;
      var months= Math.floor(distance / (1000 * 60 * 60 * 24*30));
      var days= Math.floor(distance % (1000 * 60 * 60 * 24 *30)/(1000 * 60 * 60 *24));
      var hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds= Math.floor((distance % (1000 * 60)) / (1000));
      this.demo = months + "m | " + days + "d | " + hours + "h | " + minutes + "m | " + seconds + "s";
//if date is earlier than todays date, below code will run and displays expired
      if(distance<0){
        clearInterval(this.x);
        this.demo = "Expired";
      }
    })

}
