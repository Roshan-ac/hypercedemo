export interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}
import {
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  GiftIcon,
} from "lucide-react";

export const SERVICES: ServiceItem[] = [
  {
    icon: CreditCardIcon,
    title: "Secured Payments",
    description:
      "Secure payment options to ensure that your transactions are protected and your personal information is kept safe.",
  },
  {
    icon: TruckIcon,
    title: "Free Delivery Worldwide",
    description:
      "Enjoy free worldwide delivery on all orders, no matter where you are located.",
  },
  {
    icon: ShieldCheckIcon,
    title: "High Quality Materials",
    description:
      "We use only the finest materials in our products, ensuring that they are long-lasting and of the highest quality.",
  },
  {
    icon: GiftIcon,
    title: "Send Gifts Easily",
    description:
      "Want to surprise someone special? Our site makes it easy to send a gift to your loved ones with just a few clicks.",
  },
];
