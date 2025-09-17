// src/lib/image-loader.ts
import { imageMap } from '$lib/image-map'; // 或相對路徑 './image-map'

export function getOptimizedImage(path: string): any | null {
	const pic = imageMap[path];
	if (!pic) {
		console.warn(`Optimized image not found for path: ${path}`);
		return null;
	}
	return pic;
}
