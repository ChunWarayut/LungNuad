export interface Food {
  key?:string;

  FOOD_ID: number;
  FOOD_NAME: string;
  FOOD_PRICE: number;
  FOOD_IMG : number;
  FOOD_TYPE_NAME: string;

}
export interface Type {

  key?:string;

  FOOD_TYPE_ID: number;
  FOOD_TYPE_NAME: string;

}

export interface Detail {

  key?:string;

  DETAIL_ID:string;
  DETAIL_AMOUT:string;
  DETAIL_PRICE:string;
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