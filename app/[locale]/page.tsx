import en from "@/src/locales/en";
import ru from "@/src/locales/ru";
export { default } from "@/src/bundles/home";

type GenerateMetadataProps = {
  params: {
    locale: "en" | "ru";
  };
};

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataProps) {
  const dict = {
    en,
    ru,
  };

  return {
    title: dict[locale].home.meta.title,
    description: dict[locale].home.meta.description,
  };
}
