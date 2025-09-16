export interface ProjectImage {
  src: string; // 圖片的原始路徑
  alt: string; // 圖片說明文字
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string; // 封面圖的原始路徑
  images: ProjectImage[];
}

// 模擬的專案資料
export const projects: Project[] = [
  {
    slug: 'modern-living-space',
    title: '現代起居空間',
    description: '一個充滿陽光與簡約線條的現代居住空間。',
    coverImage: '/src/lib/assets/images/home/main.jpg',
    images: [
      { src: '/src/lib/assets/images/home/main.jpg', alt: '空間主視覺' },
      { src: '/src/lib/assets/images/home/portrait1.jpg', alt: '客廳一角' },
    ]
  },
  {
    slug: 'cozy-personal-area',
    title: '舒適個人領域',
    description: '專為放鬆和個人時光設計的溫馨角落。',
    coverImage: '/src/lib/assets/images/home/portrait2.jpg',
    images: [
      { src: '/src/lib/assets/images/home/portrait2.jpg', alt: '臥室主視覺' },
      { src: '/src/lib/assets/images/about/portrait.jpg', alt: '書房一角' },
    ]
  },
  {
    slug: 'minimalist-functional-design',
    title: '極簡功能設計',
    description: '結合功能性與極簡美學的設計案例。',
    coverImage: '/src/lib/assets/images/home/bottom.jpg',
    images: [
      { src: '/src/lib/assets/images/home/bottom.jpg', alt: '設計細節' },
    ]
  },
];
