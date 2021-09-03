import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HRDocApp';
  constructor(private fs:AngularFirestore) {

  }
  ngOnInit(): void {
    this.fs.collection('test').snapshotChanges().subscribe( empleado => {
      console.log( empleado.map( x => x.payload.doc.data() ) )
    })
  }
}
