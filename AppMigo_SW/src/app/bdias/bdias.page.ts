import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bdias',
  templateUrl: './bdias.page.html',
  styleUrls: ['./bdias.page.scss'],
})
export class BdiasPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  
  ngOnInit() {
  }

  goHomePage(){
    this.navCtrl.navigateBack('/home');
  }

}
