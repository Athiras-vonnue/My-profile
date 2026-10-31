# My Profile (React)

Sample project for OJT Day 2: a profile page built with React.

## Run it

```
npm install
npm run dev
```

Open http://localhost:5173

## Make it yours

Open `src/data.js` and change the name, about text, skills, projects,
contact details and GitHub username. You don't need to touch the components
to personalise the page.

## Where each idea from the session is used

| Idea              | File                                   |
|-------------------|----------------------------------------|
| Components        | every file in `src/components/`        |
| Props             | `SkillCard.jsx`, `ProjectCard.jsx`     |
| Lists with map()  | `Skills.jsx`, `Projects.jsx`           |
| useState          | `LikeButton.jsx`, `Contact.jsx`        |
| onClick           | `LikeButton.jsx`, `Contact.jsx`, `Header.jsx` |
| Show / hide (&&)  | `Contact.jsx`                          |
| Dark mode toggle  | `App.jsx` + `Header.jsx`               |
| API call (fetch)  | `GitHubCard.jsx`                       |

## Put it online

```
npm run build
```

Then drag the `dist` folder onto https://app.netlify.com/drop
