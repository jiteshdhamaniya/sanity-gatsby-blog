export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60efa35d3850ae86412bca68",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-336isuu5",
                  apiId: "3660d6b2-72f6-41fd-8fc4-96066a4ed785",
                },
                {
                  buildHookId: "60efa35c51f64d854db51f46",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-we3zkg4w",
                  apiId: "c6a9d52a-9364-4cf8-ab0c-c729b97ce080",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jiteshdhamaniya/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-we3zkg4w.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
