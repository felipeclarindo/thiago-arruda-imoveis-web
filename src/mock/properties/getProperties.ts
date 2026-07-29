import { PropertyProps } from "@/types/pages/PropertiesProps";
import { properties } from "./propertiesData";

export default function getProperties(): PropertyProps[] {
  return properties as PropertyProps[];
}
