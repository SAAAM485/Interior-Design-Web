// import type { OptimizedImageAsset, Picture } from 'vite-imagetools'; // 移除此行或註解掉

// 1. 使用 glob 引入所有相關圖片，只匹配原始路徑
const allImageUrls = import.meta.glob<
	true,
	string,
	string // 預期返回 URL 字串
>('/src/lib/assets/images/{home,about}/*.{jpg,jpeg,png,webp}', { // <-- 只匹配原始路徑
	eager: true,
	import: 'default' // <-- 返回原始 URL 字串
});

console.log('Image Loader: allImageUrls keys:', Object.keys(allImageUrls));

/**
 * 根據提供的原始圖片路徑，從預先載入的模組中查找對應的圖片 URL 字串。
 * @param path - 圖片的原始路徑 (例如 '/src/lib/assets/images/home/main.jpg')
 * @returns 圖片的 URL 字串，如果找不到則為 null。
 */
export function getOptimizedImage(path: string): string | null {
	console.log('Image Loader: Requesting path:', path);
	if (allImageUrls[path]) {
		console.log('Image Loader: Found match for path:', path, allImageUrls[path]);
		return allImageUrls[path];
	}

	// 嘗試移除開頭的斜線，以防 glob 鍵值沒有斜線
	const pathWithoutLeadingSlash = path.startsWith('/') ? path.substring(1) : path;
	if (allImageUrls[pathWithoutLeadingSlash]) {
		console.log('Image Loader: Found match for path (without leading slash):', pathWithoutLeadingSlash, allImageUrls[pathWithoutLeadingSlash]);
		return allImageUrls[pathWithoutLeadingSlash];
	}

	console.warn(`Image Loader: Image URL not found for path: ${path}`);
	return null;
}
