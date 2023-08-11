import type { Article } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {

  const articles: Article[] = [
    {
      title: "Openness in design",
      description: "interactions between users and software and openness in ux design",
      url: "/articles/all/2023/openness-in-design",
      tags: ["design"]
    }
  ]

  return {
    articles
  }
}