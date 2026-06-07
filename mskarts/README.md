# MsKarts.com

3D printed industrial home decor — built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

## Structure

```
mskarts/
├── index.html        # Shop / product listing page
├── about.html        # About page
├── contact.html      # Contact page (Netlify forms ready)
├── netlify.toml      # Netlify config
├── css/
│   └── style.css     # All styles
└── js/
    ├── products.js   # Product data & SVG icons
    ├── cart.js       # Cart drawer logic
    └── main.js       # Filters, search, wishlist, render
```

## Deploying to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Select this repo, leave build settings blank, click Deploy
4. Your site is live!

## Adding Square payments

When you're ready to add Square:

1. Go to your Square Dashboard → Online Store → Payment Links
2. Create a payment link for each product
3. Open `js/products.js`
4. For each product, paste your Square link into the `squareLink` field:
   ```js
   squareLink: "https://square.link/u/yourlink"
   ```
5. A **Buy now** button will automatically appear on that product's card

## Adding real product photos

Replace the SVG placeholder icons with real photos:

1. Add your images to the `images/` folder (e.g. `images/lamp.jpg`)
2. In `js/products.js`, add an `image` field to each product:
   ```js
   image: "images/lamp.jpg"
   ```
3. In `js/main.js`, update the `card-img` section to use `<img>` tags

## Contact form

The contact form on `contact.html` uses Netlify Forms out of the box. Once deployed on Netlify, submissions appear in your Netlify dashboard under Forms.

## Customizing products

Edit `js/products.js` to:
- Change product names, prices, tags, star ratings
- Add or remove products
- Update badge status (`new`, `sale`, `low`, or `""` for none)
