import { defineConfig } from 'vite-plus'

const command = 'echo hello'

export default defineConfig({
  run: {
    tasks: {
      hello: { command }
    }
  }
})
