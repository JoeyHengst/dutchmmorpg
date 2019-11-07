import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  authDomain: 'dutch-mmorpg.firebaseapp.com',
  databaseURL: 'https://dutch-mmorpg.firebaseio.com',
  projectId: 'dutch-mmorpg',
  storageBucket: 'dutch-mmorpg.appspot.com',
  messagingSenderId: '806896239237',
  appId: '1:806896239237:web:1ed94d578c8d5abdb2dfec',
  measurementId: 'G-HYWCSNKGLW'
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ]
})
export class AuthModule {}
