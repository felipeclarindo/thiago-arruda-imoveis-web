import PropertyScreen from "@/screens/properties/PropertyScreen";

interface PropertyPageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function PropertyPage({
  params,
}: Readonly<PropertyPageProps>) {
  const { id } = await params;

  return <PropertyScreen id={id} />;
}
