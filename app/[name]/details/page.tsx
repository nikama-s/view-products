import Main from "@/app/[name]/details/components/Main";
import axios from "axios";
import Error from "@/components/Error";

interface Params {
  name: string;
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.name.split("-")[1];

  try {
    const { data: product } = await axios.get(
      `https://dummyjson.com/products/${id}`
    );
    return <Main product={product} />;
  } catch (error) {
    const errorMessage =
      (error as Error).message || "An unknown error occurred";
    return <Error>{errorMessage}</Error>;
  }
}
