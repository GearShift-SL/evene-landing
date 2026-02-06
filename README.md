# astro-template

Basic astro template with SEO, a header and tailwind css configured.


## How to start a project with this template

1. Clone this repo

    ```bash
    git clone git@github.com:GearShift-SL/astro-template.git my-new-project
    ```

    ```bash
    cd my-new-project
    ```

2. Rename the `origin` to `upstream`

    ```bash
    git remote rename origin upstream
    ```

3. Add the new origin

    ```bash
    git remote add origin git@github.com:you/my-new-project.git
    ```

    ```bash
    git push -u origin main
    ```

## How to bring template updates later

1. Get the template changes
    ```bash
    git fetch upstream
    ```

2. Merge them
    ```bash
    git merge upstream/main
    ```

## Initial project configuration

There are a bunch of things you need to change immediately after cloning the project:

1. Open the directory in a devcontainer

2. Run `npm install`

3. Update astro `npx @astrojs/upgrade`

4. **Domain**: Replace `mywebsite.com` with your domain. Use the global search function in VSCode or Cursor and replace all.

5. **Favicons**: Replace the 3 files in `src/assets/favicon/`. Use https://realfavicongenerator.net/ to generate them.

6. **Logo**: Replace the main logo in `src/icons/`. It must be in `.svg`.

7. **OG Image**: Go to `src/assets/images/` and replace the og image. It must be in `.webp`.

8. **Website config**: Open `src/config.ts` and update as needed.

9. **Main colors**: Open `src/styles/global.css` and change the primary, secondary, etc. colors. You can later use them with tailwind classes like `text-primary`, `bg-secondary`, ...

10. **Footer**: Update the footer in `src/components/common/Footer.astro`

11. **Contact**: Update the contact form API endpoint in `src/pages/contact.astro`

## Importing images

Astro optimizes the images at build time if you import them this way:

```astro
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---

<Image src={localBirdImage} alt="A bird sitting on a nest of eggs." />
```

## Using react components

If you have some complex functionality such as a contact form or a button or something that needs typescript, you can create a `.tsx` component and import it in any astro file this way:

```astro
---
import MyCoolComponent from '.../MyComponent.tsx';
---

<html>
  ...
  <MyCoolComponent client:load />
</html>
```

This hidrates the component on page load.

You can also use `client:visible` to only hydrate the react component whenever the

## Blog stuff

1. You can see the current content config in `src/content.config.ts`

2. Put your content in `src/content/` following the same metadata pattern as the existing template posts.

3. If you put an image named `cover.png` in one of the content directories, it will be automatically used as an og image and a cover image for that article.


## Umami analytics

This template uses umami analytics.

You can change the umami analytics id and domain in `src/layouts/Layout.astro`