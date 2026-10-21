import { readSync } from 'node:fs'

console.log('Waiting for one byte on stdin. Press Enter.')
try {
  readSync(0, Buffer.alloc(1))
  console.log('stdin is blocking')
} catch (error) {
  console.log(`stdin is non-blocking: ${error.code}`)
}
