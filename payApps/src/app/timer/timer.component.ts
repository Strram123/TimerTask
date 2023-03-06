import { Component, OnInit } from '@angular/core';
import{interval,Subscription}from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  num=0
  subscription:Subscription;
  source=interval(1000);
  constructor() { }

  ngOnInit() {
  }
 public start():void{
    this.subscription=this.source.subscribe(()=>{this.increment(this.num)});
  }

  increment(numReceiver:number){
  this.num++
  }
  public stop():void{
  this.subscription.unsubscribe();
  }
  public restart():void{
  this.num=0
  this.subscription=this.source.subscribe(()=>{this.increment(this.num)});
  }

}
