import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://terminalgravity.github.io',
  base: '/rural-response-drones-docs',
  integrations: [
    starlight({
      title: 'Rural Response Drones',
      description: 'Research and planning docs for a rural search-and-rescue drone services venture.',
      logo: { src: './public/favicon.svg' },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TerminalGravity/rural-response-drones-docs' }],
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'meta', attrs: { name: 'robots', content: 'noindex,nofollow' } },
      ],
      sidebar: [
        {
          label: 'Strategy',
          items: [
            { label: 'Executive Brief', slug: 'executive-brief' },
            { label: 'Viability Verdict', slug: 'viability-verdict' },
            { label: 'Grant Strategy', slug: 'grant-strategy' },
            { label: 'Offer Model', slug: 'offer-model' },
            { label: 'Validation Plan', slug: 'validation-plan' },
            { label: 'Roadmap', slug: 'roadmap' },
          ],
        },
        {
          label: 'Research',
          items: [
            { label: 'Market Landscape', slug: 'market-landscape' },
            { label: 'Regulatory Notes', slug: 'regulatory-notes' },
            { label: 'Source Notes', slug: 'source-notes' },
          ],
        },
      ],
    }),
  ],
});
