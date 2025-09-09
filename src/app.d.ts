/// <reference types='@sveltejs/kit' />

declare module '*&as=picture' {
  const image: {
    sources: { srcset: string; type: string }[];
    img: { src: string };
  };
  export default image;
}