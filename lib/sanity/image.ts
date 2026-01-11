import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export function getSanityImageUrl(source: any, width: number, height?: number) {
  return builder
    .image(source)
    .width(width)
    .height(height || width)
    .auto("format")
    .fit("max")
    .url();
}
