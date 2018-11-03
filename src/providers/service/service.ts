import { Injectable } from '@angular/core';
import { Type, Detail, Buyer, Food, Cart } from '../../module/item/item.module';

import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  
  private foodListRef = this.db.list<Food>('food-list');
  private typeListRef = this.db.list<Type>('type-list');
  private detailListRef = this.db.list<Detail>('detail', ref => ref.orderByChild('statusNum'));
  private detailListRef2 = this.db.list<Detail>('detail', ref => ref.orderByChild('status').equalTo('กำลังดำเนินการ'));

  private buyerlListRef = this.db.list<Buyer>('buyer-list');
  private cartListRef = this.db.list<Cart>(`cart-list`)

  constructor(private db: AngularFireDatabase){
  }

  getFoodList() {
    return this.foodListRef;
  }

  getTypeList() {
    return this.typeListRef;
  }

  getDetailList() {
    return this.detailListRef;
  }
  
  getDetailList2() {
    return this.detailListRef2;
  }

  getBuyerList() {
    return this.buyerlListRef;
  }

  getCartList() {
    return this.cartListRef;
  }

  addFoodItem(food:Food) {
    return this.foodListRef.push(food);
  }

  addTypeItem(type:Type) {
    return this.typeListRef.push(type);
  }

  addDetailItem(detail:Detail) {
    console.log('22');
    
    return this.detailListRef.push(detail);
  }

  addBuyerItem(buyer:Buyer) {
    return this.buyerlListRef.push(buyer);
  }

  
  addCartItem(cart:Cart) {
    return this.cartListRef.push(cart);
  }


  editFoodItem(food:Food){
    return this.foodListRef.update(food.key, food);
  }

  editTypeItem(type:Type){
    return this.typeListRef.update(type.key, type);
  }

  editDetailItem(detail:Detail){
    return this.detailListRef.update(detail.key, detail);
  }

  editBuyerItem(buyer:Buyer){
    return this.buyerlListRef.update(buyer.key, buyer);
  }

  
  editCartItem(cart:Cart){
    return this.cartListRef.update(cart.key, cart);
  }

  removeFoodItem(food:Food){
    return this.foodListRef.remove(food.key);
  }

  removeTyperItem(type:Type){
    return this.typeListRef.remove(type.key);
  }

  removeDetailItem(detail:Detail){
    return this.detailListRef.remove(detail.key);
  }

  removeBuyertem(buyer:Buyer){
    return this.buyerlListRef.remove(buyer.key);
  }
  
  removeCartItem(){
    return this.cartListRef.remove();
  }
  

}
