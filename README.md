<p align="center">
  <h1 align="center">Jatin Dholakia's Personal Website ✨</h1>
  <p align="center">
    The personal website/portfolio of Jatin Dholakia. Built using React and Bootstrap.
    <br />
     Site URL: 
    <a href="https://jatindholakia.github.io">jatindholakia.github.io</a>
    <br />
  </p>
</p>

<!-- PROJECT LOGO -->

[![Site preview](/public/social-image.png)](https://jatin.work/)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Simple Icons](https://simpleicons.org/)
| [Netlify](https://www.netlify.com/)

## Structure ⚓

- Navigation bar
- Body
  - Name
  - Github / Linkedin / Email / Twitter / Medium / Codeforces
  - Resume | About me
- About Me
  - Display picture
  - About myself, my Interests, Goals and Hobbies
  - Resume button
- Recent Projects (using GitHub API)
- Skills
  - Programming Skills
  - Database
  - Frameworks
  - Miscellaneous
- Footer
  - Quote
  - Email

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)
5. Change URL in [package.json](./package.json) file:

   ```json
   "homepage": "https://<your-username>.github.io/home"
   ```

   Or for custom deployment, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/)

6. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website run:

   ```bash
    npm run deploy
   ```

   For custom deployment, refer [pages.js](./pages.js)

   ```bash
    npm run custom-deploy
   ```

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

## License

[LGPL-3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)
