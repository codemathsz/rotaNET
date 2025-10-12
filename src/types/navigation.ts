import type { Delivery } from './delivery';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  DeliveryDetails: { deliveryId: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}