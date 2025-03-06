import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/personalColor",
        "/blog/personalColor",
        "/personalColorEng",
        "/personalColorEng/result/ESTJ",
      ],
      renderer: PuppeteerRenderer,
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://mbti-service.shop/"
          );
      },
    }),
  ],
});

// CI/CD
// 1. 코드작성 수정
// 2. GitHub Push
// 3. 프로젝트 빌드 -> 빌드파일
// 4. S3에 빌드파일 업로드
// 5. Cloud Front Invalidation

// => 3~5을 Github Action을 통해서