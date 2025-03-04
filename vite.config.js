import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// CI/CD
// 1. 코드작성 수정
// 2. GitHub Push
// 3. 프로젝트 빌드 -> 빌드파일
// 4. S3에 빌드파일 업로드
// 5. Cloud Front Invalidation

// 3~5fmf Github Action을 통해서