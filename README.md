# vp run: non-blocking stdin with a constant in the `run` config

Minimal reproduction for a vite-plus bug. On macOS, a script started with
`vp run` gets a non-blocking stdin when a task in the `run` block of
`vite.config.ts` references a constant. Interactive prompts then exit without
waiting for input.

Run the commands in a terminal, with stdin connected to it (no pipes or
redirects).

```sh
bun install
vp run probe   # prints "stdin is non-blocking: EAGAIN" without waiting
vp run up      # the package list closes with "Selected 0 packages to update"
```

Controls that wait for input:

```sh
node probe.mjs                     # press Enter: prints "stdin is blocking"
vp update --interactive --latest   # cancel with Ctrl+C
bun run up                         # cancel with Ctrl+C
```

Write the same task with the command as a string literal, and both `vp run`
commands wait for input:

```sh
cp vite.config.literal.ts vite.config.ts
vp run probe
vp run up
```
