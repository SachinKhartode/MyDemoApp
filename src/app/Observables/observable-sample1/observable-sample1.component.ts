import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject, Subscription } from 'rxjs';
import { delay } from 'q';

@Component({
  selector: 'app-observable-sample1',
  templateUrl: './observable-sample1.component.html',
  styleUrls: ['./observable-sample1.component.css']
})
export class ObservableSample1Component implements OnInit {

  tBtn1=false;
  tBtn2=false;
  tBtn3=false;
  tBtn4=false;
  tBtn5=false;
  tBtn6=false;
  msg1:string[];
  msg2:string[];
  msg3:string[];
  msg4:string[];
  msg5:string[];
  msg6:string[];
  cnt1:number;
  cnt2:number;
  cnt3:number;
  obr1:Observable<string>;
  obr2:Subject<string>;
  obr3:Subject<string>;
  obr4:Observable<string>;
  obr5:Observable<string>;

  sub1:Subscription;
  sub2:Subscription;
  sub3:Subscription;
  constructor() {
    this.msg1 =[];
    this.msg2 =[];
    this.msg3 =[];
    this.msg4 =[];
    this.msg5 =[];
    this.msg6 =[];
    this.cnt1 = 0;
    this.cnt2 = 0;
    this.cnt3 = 0;
   }
TimerToggel1(){
   this.tBtn1=!this.tBtn1;
}
TimerToggel2(){
  this.tBtn2=!this.tBtn2;
}
TimerToggel3(){
  
  this.tBtn3=!this.tBtn3;
}
TimerToggel4(){
  this.tBtn4=!this.tBtn4;
  if(this.tBtn4){
    this.sub1 = this.obr1.subscribe(X=>{
         this.msg4.push(X);
    });}
    else {
      this.sub1.unsubscribe();
    }
    
}
TimerToggel6(){
  this.tBtn6=!this.tBtn6;
    if(this.tBtn4){
      this.sub3 = this.obr1.subscribe(X=>{
           this.msg6.push(X);
      });}
      else {
        this.sub3.unsubscribe();
      }
}
TimerToggel5(){
  this.tBtn5=!this.tBtn5;
  
  if(this.tBtn5){
    this.sub2 = this.obr2.subscribe(X=>{
      this.msg5.push(X);
    })
  }
  else {
    this.sub2.unsubscribe();
  }
}
  ngOnInit() {
/////////////////////////////////////////////////////////////////////////
    /// OBSERVABLE SAMPLE 1 
    this.obr1 = new Observable<string>(R=>{
      R.next('a');
      R.next('b');
      setInterval(T=>{
        if (this.tBtn1){
             R.next("b-" + this.cnt1)
             this.cnt1+=1;
        }
      },2000)
    });
    this.obr1.subscribe(X=>{
        this.msg1.push(X);
    });
  

/////////////////////////////////////////////////////////////////

this.obr2 = new BehaviorSubject<string>('a');

  setInterval(T=>{
    if (this.tBtn2){
         this.obr2.next("b-" + this.cnt2)
        this.cnt2+=1;
        }

  },1000)

  this.obr2.subscribe(X=>{
    this.msg2.push(X);
})



this.obr3 = new Subject();

  setInterval(T=>{
    if (this.tBtn3){
        this.obr3.next("b-" + this.cnt3)
        }
        this.cnt3+=1;

  },1000)

this.obr3.subscribe( (X:string) =>  this.msg3.push(X) );

  //   let randomNumGenerator1 = Observable.create(observer => {
  //     observer.next(Math.random());
  //  });
   
  //  let observer1 = randomNumGenerator1
  //        .subscribe(num => this.msg.push('observer 1: '+ num));
   
  //  let observer2 = randomNumGenerator1
  //        .subscribe(num => this.msg.push('observer 2: '+ num));
   
   
  //  // ------ BehaviorSubject/ Subject
   
  //  let randomNumGenerator2 = new BehaviorSubject(0);
  //  randomNumGenerator2.next(Math.random());
   
  //  let observer1Subject = randomNumGenerator2
  //        .subscribe(num=> this.msg.push('observer subject 1: '+ num));
         
  //  let observer2Subject = randomNumGenerator2
  //        .subscribe(num=> this.msg.push('observer subject 2: '+ num));


  
  }

}
