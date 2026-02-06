// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "XX Intro + align the categories to the left. Grab more shaders from the Game Dev Hub, plus hair + eyes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resources",
          title: "Resources",
          description: "Resources, recommendations, Unity packages and demos etc.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-dialogist",
          title: 'Dialogist',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dialogist/";
            },},{id: "projects-game-dev-hub",
          title: 'Game Dev Hub',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-dev-hub/";
            },},{id: "projects-journey",
          title: 'Journey',
          description: "A Unity learning game that you play in the editor.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/journey/";
            },},{id: "projects-watercolor-rendering",
          title: 'Watercolor Rendering',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shaders/drag-shader/";
            },},{id: "projects-watercolor-rendering",
          title: 'Watercolor Rendering',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shaders/watercolor-rendering-shader/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/kristinawaldt.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%6E%66%6F@%6B%72%69%73%74%69%6E%61%77%61%6C%64%74.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KWaldt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kristinawaldt", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KristinaWaldt", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@kristinawaldt-gamedev", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
