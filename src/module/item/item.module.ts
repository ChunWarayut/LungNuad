export interface Food {
  key?:string;

  FOOD_ID: string;
  FOOD_NAME: string;
  FOOD_PRICE: number;
  FOOD_IMG : any;
  FOOD_TYPE_NAME: string;
  amount: number;
}
export interface Total {
  key?:string;

  
  TOTAL_TOTAL:any;

  
}
export interface Type {

  key?:string;

  FOOD_TYPE_ID: string;
  FOOD_TYPE_NAME: string;

}

export interface Detail {

  key?:string;

  DETAIL_ID:any;
  BUYER_NAME:string;
  DETAIL_ORDER:any;
  DETAIL_TOTAL:any;
  DETAIL_DATE:any;
  DETAIL_ADDRESS:string;
  DETAIL_STATUS:string;


}

export interface Buyer {

  key?:string;
  
  BUYER_ID:string;
  BUYER_NAME:string;
  BUYER_PASSWORD:string;
  BUYER_ADDRESS:string;
  BUYER_PHONE:string;
  BUYER_EMAIL:string;

}

export interface Cart {

  key?:string;
  
  CART_ID:string;
  CART_NAME:string;
  CART_PRICE: number;
  CART_AMOUT:number;

}