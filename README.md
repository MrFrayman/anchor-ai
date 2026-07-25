# anchor-ai

I basically just took a Figma mockup for some enterprise AI landing page and pushed pixels until it looked like a real website. It's one of those light-mode, high-contrast, stripe style designs with a lot of specific spacing, so if you see some weird arbitrary Tailwind values in the code, blame the designer (or my commitment to the bit).

[Figma design →](https://www.figma.com/community/file/1657051188712932346/a-premium-dark-template-for-enterprise-ai-platforms-revenue-intelligence-tools-and-b2b-saas)

<!-- screenshot goes here -->

## getting it to run

If you've touched a web project in the last five years, you know the drill. If not, here:

1.  **Install the weight of the world:** Run `npm install`. It'll take a minute to download half the internet.
2.  **Fire it up:** Run `npm run dev` and then head over to `localhost:3000`.

It uses Next.js and Tailwind v4. If the styles look like they're having a mid-life crisis, make sure you're on a recent version of Node.

## some thoughts

- **The pixels:** I tried to be faithful to the Figma, which means there's a lot of `text-[68px]` and `tracking-[-3.5px]` flying around. It's not "scalable" or "semantic" or whatever the LinkedIn influencers are preaching this week, but it matches the design.
- **Responsiveness:** It works on my machine. I've poked at the mobile view a bit, but some of those massive hero headers might need another pass if they're still clipping on smaller screens.
- **The Stack:** Standard Next.js setup. Nothing fancy, no over-engineered state management for a landing page that just needs to look pretty.
