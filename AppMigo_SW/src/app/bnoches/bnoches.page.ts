import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bnoches',
  templateUrl: './bnoches.page.html',
  styleUrls: ['./bnoches.page.scss'],
})
export class BnochesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goHomePage(){
    this.navCtrl.navigateBack('/home');
  }

}
