import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/courses/CoursesPage";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Computer Courses in Suncity | Knowledge Hub" },
      { name: "description", content: "Explore programming, AWS, Azure, DevOps, Excel, Power BI, Tally, networking, DCA and PGDCA courses." },
      { property: "og:title", content: "Courses at Knowledge Hub" },
      { property: "og:description", content: "Practical computer courses for beginners, students, and professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: CoursesPage
});
