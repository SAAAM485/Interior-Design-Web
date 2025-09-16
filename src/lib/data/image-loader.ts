// image-loader.ts - 靜態導入所有圖片，並提供查找函式

// 靜態導入所有專案圖片，使用 as=picture 確保 vite-imagetools 處理
import mainCover from '$lib/assets/images/home/main.jpg?w=800;1600&format=webp;jpg&as=picture';
import portrait1 from '$lib/assets/images/home/portrait1.jpg?w=400;800&format=webp;jpg&as=picture';
import portrait2 from '$lib/assets/images/home/portrait2.jpg?w=400;800&format=webp;jpg&as=picture';
import aboutPortrait from '$lib/assets/images/about/portrait.jpg?w=400;600;1200&format=webp;jpg&as=picture';
import bottom from '$lib/assets/images/home/bottom.jpg?w=800;1600&format=webp;jpg&as=picture';

// 創建一個映射表，將原始路徑對應到導入的圖片物件
const imageMap: Record<string, any> = {
  '/src/lib/assets/images/home/main.jpg': mainCover,
  '/src/lib/assets/images/home/portrait1.jpg': portrait1,
  '/src/assets/images/home/portrait2.jpg': portrait2,
  '/src/lib/assets/images/about/portrait.jpg': aboutPortrait,
  '/src/lib/assets/images/home/bottom.jpg': bottom,
};

/**
 * 根據提供的原始圖片路徑，返回該圖片的 vite-imagetools 處理後的物件。
 * @param path - 圖片的原始路徑 (例如 '/src/lib/assets/images/home/main.jpg')
 * @returns vite-imagetools 處理後的圖片物件 (包含 sources 和 img 屬性)，如果找不到則為 null。
 */
export function getOptimizedImage(path: string): any | null {
  if (imageMap[path]) {
    return imageMap[path];
  }
  console.warn(`Optimized image not found in map for path: ${path}`);
  return null;
}