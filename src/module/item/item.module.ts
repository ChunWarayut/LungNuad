export interface Food {
  key?:string;

  FOOD_ID: string;
  FOOD_NAME: string;
  FOOD_PRICE: number;
  FOOD_IMG : any;
  FOOD_TYPE_NAME: string;

}
export interface Type {

  key?:string;

  FOOD_TYPE_ID: string;
  FOOD_TYPE_NAME: string;

}

export interface Detail {

  key?:string;

  DETAIL_ID:string;
  FOOD_NAME: string;
  BUYER_NAME:string;

  DETAIL_AMOUT:number;
  DETAIL_PRICE:number;
  DETAIL_DATE:string;
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