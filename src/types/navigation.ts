import { Delivery } from './delivery';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  DeliveryDetails: { delivery: Delivery };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}