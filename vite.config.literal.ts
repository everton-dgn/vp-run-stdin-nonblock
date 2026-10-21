import { defineConfig } from 'vite-plus'

export default defineConfig({
  run: {
    tasks: {
      hello: { command: 'echo hello' }
    }
  }
})
