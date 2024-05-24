export function getImagePath(link: string, id: number) {
  // Assuming creativeId starts from 1 and maps to valid image file names starting from img_search_result_1.png

  const imageName = `${link}_${id}.png`;
  return `/src/assets/img/${imageName}`;
}
