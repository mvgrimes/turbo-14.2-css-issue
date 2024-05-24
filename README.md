# nextjs 14.2 turbo issue

This repo reproduces an issue in nextjs 14.2 using the `--turbo` flag.
CSS rules with `:is()` seem to be discarded. The issue appears to have been
introduced in `14.2.0-canary-14`. It only appears in developemnt.

This repo has an very simple nextjs site with a single checkbox. It is styled
(via `src/app/global.css`) to have large margin using:

```css
.cb:is(input:checked) {
  margin: 3rem;
}
```

### Not Working:

The `main` (or `not-ok`) branch uses nextjs `14.2.0-canary-14`. In development,
it generates `.next/static/chunks/src_app_globals_b52d8e.css`:

```css
/* [project]/src/app/globals.css [app-client] (css) */
.cbinput:checked {
  margin: 3rem;
}

/*# sourceMappingURL=src_app_globals_b52d8e.css.map*/
```

### Working:

The `ok` branch is identical to `main` except it uses nextjs
`14.2.0-canary-13`. In development, it generates
`.next/static/chunks/src_app_globals_b52d8e.css`:

```css
/* [project]/src/app/globals.css [app-client] (css) */
.cb:is(input:checked) {
  margin: 3rem;
}
/*# sourceMappingURL=src_app_globals_b52d8e.css.map*/
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
