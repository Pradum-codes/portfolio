export function getProjectImages(images: string | string[]): string[] {
  if (Array.isArray(images)) {
    return images.map((image) => image.trim()).filter(Boolean)
  }

  return images
    .split(",")
    .map((image) => image.trim())
    .filter(Boolean)
}
