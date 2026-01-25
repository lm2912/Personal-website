# lukemccrone.com

This is the personal website of Luke McCrone ([lukemccrone.com](https://lukemccrone.com)).

It's built using [Eleventy](https://www.11ty.dev/), [TailwindCSS](https://tailwindcss.com/), and [Alpine.js](https://alpinejs.dev/).

The theme was forked from https://github.com/switowski/portfolio.

TODO:
- [ ] Update /about page.
- [ ] Add Microsoft Bookings, with link https://outlook.office365.com/book/YourBookingPage
- [ ] Add talks to talks.json, with cover images
- [ ] Start blogging
- [ ] Update /consulting page with details about offering

----

## File structure

Most important folders:

```txt
.
├── src
│   ├── _assets
│   │   ├── icons - contains SVG icons that will be merged together as SVG sprite
│   │   ├── images - images for pages (they will go through asset optimization with eleventy-img and WILL change name)
│   │   ├── scripts - JS scripts
│   │   └── styles - CSS files (technically PostCSS files)
│   │       └── vendors - in theory - vendored CSS files (mostly Prism themes)
│   ├── _data - data folder (site information, talks, etc.)
│   ├── _includes - components, layouts, headers, footers, basically all nunjucks files go here
│   │   ├── components - reusable components (contact me, post card template, etc.)
│   │   ├── layouts
│   ├── feed.njk - RSS feed
│   ├── pages - various pages
│   ├── posts - published posts sorted into yearly buckets with images stored next to the markdown text
│   └── static - static images that will be copied with passthroughCopy (so without any modifications)
└── utils - JS utilities like filters, shortcodes, etc.
```

Everything that will end up in the `dist` folder comes from `src` folder. But there are also folders like `utils` that contain custom JS functions used during the build process (so they don't belong in the `src` folder).

### Guidelines

#### Creating Blog Covers

[https://coverview.vercel.app/editor](https://coverview.vercel.app/editor)

#### SEO

Set cover images to 1200x630px to make them looks the best on social media (Twitter, LinkedIn) ([source](https://iamturns.com/open-graph-image-size/)).

For images in posts, width of 1920px sounds like a good default. Those images will be resized anyway and that resolution is easier to remember than 1840px (that's 2*920px - which is max image width in blog post).

## Local development

Start server: `npm run dev`

Start debug mode: `npm run debug`

Run production server locally: `npm run staging` or `npm run build && npx serve dist`

### Assets

Take screenshots on retina display (Macbook's screen) and cut it there as well (strangely, editing image in Preview app *seems to* lower the quality of the image and results in artifacts when taking screenshots of the terminal).

Optimizing GIFs (this is probably obsolete now since I'm converting GIFs to WebP with eleventy-img):

```bash
gifsicle -O3 --colors 256 --lossy=30 -b -i *.gif
```

### Debugging

Drop this `{{ page | log }}` on a page and it will print all page variables for that page in the terminal.

Alternatively use the `debug` filter: {{ some-variable | debug }}
