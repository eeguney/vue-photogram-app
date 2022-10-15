<template>
  <div id="app">
    <KeepAlive>
      <router-view />
    </KeepAlive>
  </div>
</template>

<style>
:root {
  --login-background-color: #f1e5f1;
  --main-background-color: #ffffff;
  --second-background-color: #eeeeee;
  --third-background-color: #e2e2e2;
  --four-background-color: #d3d3d3;
  --login-form-label-color: #4e4e4e;
  --login-form-link-color: #4e4e4e;
  --contrast-color: #fff;
  --login-form-input-background-color: #f8f8f8;
  --login-form-card-shadow: 0px 2px 20px -17px #000000ab;
  --header-background-color: #ffffff8a;
  --button-background-color: #f5f5f5;
  --button-background-hover-color: #e7e7e7;
  --button-color: #555;
  --blue-color: #1d37c9;
  --blue-light-color: #2a3ed0;
  --blue-dark-color: #1127a3;
  --green-color: #1ab406;
  --green-light-color: #3beb24;
  --purple-color: #8202a1;
  --purple-light-color: #a409c9;
  --logo-color: #222;
  --md-width: 1024px;

  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color-scheme: light dark;
  color: #222;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  transition: all 0.3s ease;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  background-color: var(--main-background-color);
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
label {
  cursor: pointer;
}
button {
  border-radius: 8px;
  border: 0;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: var(--button-background-color);
  color: var(--button-color);
  font-family: inherit;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
button:focus,
button:focus-visible {
  outline: 0;
}
#app {
  flex: 1;
}
.relative {
  position: relative;
}
.col {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}
.row.end {
  justify-content: flex-end;
}
.row.center {
  justify-content: center;
}
.m-1 {
  margin: 1rem;
}
.ml-1 {
  margin-left: 1rem;
}

.ml-2 {
  margin-left: 2rem;
}
.mr-1 {
  margin-right: 1rem;
}
.mr-2 {
  margin-right: 2rem;
}
.mx-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-2 {
  margin-left: 2rem;
  margin-right: 2rem;
}
.my-1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.my-2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.mt-1 {
  margin-top: 1rem;
}
.p-1 {
  padding: 1rem;
}
.pl-1 {
  padding-left: 1rem;
}
.pl-2 {
  padding-left: 2rem;
}
.pr-1 {
  padding-right: 1rem;
}
.pr-2 {
  padding-right: 2rem;
}
.px-1 {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media screen and (min-width: var(--md-width)) {
  .md-ml-1 {
    margin-left: 1rem;
  }
  .md-px-1 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .md-px-2 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
.px-2 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.md-px-1 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-1 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-2 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pt-1 {
  padding-top: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.center {
  align-items: center;
  justify-content: center;
}
.flex-1 {
  flex: 1;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.mb-1 {
  margin-bottom: 1rem;
}
.close-section {
  position: absolute;
  top: calc(1rem + 7px);
  width: 30px;
  height: 30px;
  padding: 0;
  background: var(--main-background-color);
  border: 1px solid var(--third-background-color);
}
.close-section.right {
  left: -1rem;
}
.close-section.left svg {
  transform: rotate(180deg);
}
.close-section.left {
  right: -8px;
}
.backdrop-on-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000099;
  z-index: 1000;
  backdrop-filter: blur(3px);
}
@keyframes fromTopWithFade {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --main-background-color: #111111;
    --second-background-color: #222222;
    --third-background-color: #333333;
    --four-background-color: #444;
    --login-form-label-color: #fff;
    --login-form-link-color: #fff;
    --contrast-color: #000000;
    --login-form-input-background-color: #333;
    --login-form-input-focus-background-color: #555;
    --login-form-card-shadow: 0px 2px 30px -7px #000;
    --main-toolbar-nav-background-color: #222222;
    --header-background-color: #0000008a;
    --button-background-color: #333;
    --button-background-hover-color: #444;
    --button-color: #fff;
    --logo-color: #d8d8d8;
    color: white;
  }
  body {
    color: white;
  }
}
</style>
