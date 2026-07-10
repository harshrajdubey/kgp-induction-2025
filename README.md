[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tsg-iitkgp/freshers-induction">
    <img src="https://gymkhana.iitkgp.ac.in/data/media/images/general/gymkhanaLogo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">
    Induction Website
  </h3>

  <p align="center">
    <a href="https://inductionprogram.iitkgp.ac.in/"><strong>Visit Live Website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tsg-iitkgp/freshers-induction/issues">
    Report Bug
    </a>
    ·
    <a href="https://github.com/tsg-iitkgp/freshers-induction/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>

- [Development](#development)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
  - [File Structure](#file-structure)
  - [Setting Up Locally](#setting-up-locally)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Additional Documentation](#additional-documentation)

</details>

<!-- Development -->
## Development

#### Libraries/Frameworks Used

This project has been built with the following technologies.

- [React 18](https://react.dev)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [TanStack React Query](https://tanstack.com/query/latest)
- [Lucide React](https://lucide.dev/) (Icons)

#### File Structure

```
.
├── public/          # Static assets & public resources
├── src/
│   ├── assets/      # Image and media assets
│   ├── components/  # Reusable React components (FAQ, Schedule, Map, etc.)
│   │   └── ui/      # shadcn/ui design system primitives
│   ├── hooks/       # Custom React hooks (e.g., use-mobile)
│   ├── lib/         # Utility/helper functions (e.g., cn)
│   ├── pages/       # Page-level view components (Index, NotFound)
│   ├── App.css      # App-level styling
│   ├── App.tsx      # Main application routing and structure
│   ├── index.css    # Tailwind CSS and global style system
│   └── main.tsx     # Application entry point
├── components.json  # shadcn/ui configuration
├── eslint.config.js # ESLint rules and settings
├── index.html       # HTML entry point template
├── package.json     # Project dependencies & scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite bundler configuration
```

- `public`: Contains static files such as logos, icons, and fonts.
- `src`: Contains all React/TypeScript source code.
  - `assets`: Image assets (backgrounds, photos, etc.) used within components.
  - `components`: Core website components, custom sections, and shadcn UI elements.
  - `hooks`: Reusable UI state hooks.
  - `lib`: Common utility functions.
  - `pages`: Main pages mapped to routes.

#### Setting Up Locally

> **Prerequisites:** [Node.js](https://nodejs.org/) v18+ and npm (bundled with Node.js).

```sh
# Clone the repository
git clone https://github.com/tsg-iitkgp/freshers-induction.git
cd freshers-induction

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

##### Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview the production build locally |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

> [!Note]
> For any ideas, suggestions or queries regarding the website, mail us at <tech.coordi@iitkgp.ac.in>

#### Present Technology Coordinator(s)

Name|Email|Phone No.
-----|-----|---------
[Harsh Raj Dubey](https://github.com/harshrajdubey) | <dubeyharshraj.iitkgp@gmail.com> | +91-9636402605
[Shubham Krishan](https://github.com/shub-krishan208) | <shubhamkrishan.iitkgp@gmail.com> | +91-7812083803

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [Img Shields](https://shields.io)
- [Technology Students' Gymkhana (TSG), IIT Kharagpur](https://gymkhana.iitkgp.ac.in)

<p align="right">(<a href="#top">back to top</a>)</p>

## Additional Documentation

- [Changelogs](/.github/CHANGELOG.md)
- [License](/LICENSE)
- [Security Policy](/.github/SECURITY.md)
- [Code of Conduct](/.github/CODE_OF_CONDUCT.md)
- [Contribution Guidelines](/.github/CONTRIBUTING.md)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tsg-iitkgp/freshers-induction.svg?style=for-the-badge
[contributors-url]: https://github.com/tsg-iitkgp/freshers-induction/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tsg-iitkgp/freshers-induction.svg?style=for-the-badge
[forks-url]: https://github.com/tsg-iitkgp/freshers-induction/network/members
[stars-shield]: https://img.shields.io/github/stars/tsg-iitkgp/freshers-induction.svg?style=for-the-badge
[stars-url]: https://github.com/tsg-iitkgp/freshers-induction/stargazers
[issues-shield]: https://img.shields.io/github/issues/tsg-iitkgp/freshers-induction.svg?style=for-the-badge
[issues-url]: https://github.com/tsg-iitkgp/freshers-induction/issues
[license-shield]: https://img.shields.io/github/license/tsg-iitkgp/freshers-induction.svg?style=for-the-badge
[license-url]: https://github.com/tsg-iitkgp/freshers-induction/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/technology-students-gymkhana-iit-kharagpur/
