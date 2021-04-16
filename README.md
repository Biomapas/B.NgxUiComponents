# Aimie Components

![npm](https://aleen42.github.io/badges/src/npm.svg) ![](https://img.shields.io/npm/v/ngx-aimie) ![](https://img.shields.io/npm/dt/ngx-aimie)

## About

<strong>Aimie Components</strong> (<strong>ngx-aimie</strong>) is a UI component library for Angular 2+ developers.
Aimie Components helps in constructing attractive, consistent, and functional SPA and PWA.

The library is mainly intended for Biomapas use in their IT projects but is also available for public usage and contributions.

The current implementation of ngx-aimie is written on top of the Angular Material component library. As a result, it takes over most of its characteristics and features.

## Table of contents
- [About](#about)
- [Getting started](#getting-started)
  * [Install](#install)
  * [Display a component](#display-a-component)
- [Components](#components)
  * [Buttons](#buttons)
    + [Fetching](#fetching)
- [Contributions](#contributions)
- [License](#license)
- [Author](#author)

<!-- toc -->

## Getting started
This guide explains how to set up Aimie Components.

### Install
Install by running the following command:

```
npm install ngx-aimie --save
```

### Display a component
Let's display a button component in your app and verify that everything works.

You need to import the AimieComponentsModule by adding the following lines to your app.module.ts file.

```
import { AimieComponentsModule } from 'ngx-aimie';
…
@NgModule ({....
imports: [...,
AimieComponentsModule,
…]
```

Add the <aimie-button-fetching> tag to the app.component.html like so:

```
<aimie-button-fetching></aimie-button-fetching>
```

Run your local dev server:
```
ng serve
```

Then point your browser to http://localhost:4200.
You should see the <aimie-button-fetching> component on the page.

## Components
### Buttons
<strong>ngx-aimie</strong> buttons are native button or link elements enhanced with Material Design styling and ink ripples.

#### Fetching

Fetching button takes 3 parameters:
* `fetching: bool` - initiates animation sequence.
* `materialIcon: string` - choose any [Material Design](https://fonts.google.com/icons) icon.
* `rotateIcon: bool` - rotates the icon if `[fetching]` was also initiated.

Pass fetching parameter from your request function to the component to start button animation.
<br>
Material icon defaults to `sync`.
```
<aimie-button-fetching (click)="request()" 
                       [fetching]="bool"
                       [rotateIcon]="bool"
                       materialIcon="refresh">
                       </aimie-button-fetching>
```

...

⌛ Other components will arrive shortly.

...


## Contributions
<strong>ngx-aimie</strong> is an open-sourced package. Contributions of any shape are welcome and appreciated.

## License
The MIT License (MIT)

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Source: http://opensource.org/licenses/MIT

## Author
[Pijus Rancevas](https://github.com/pijus-r)
