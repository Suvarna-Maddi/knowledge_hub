import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/services/ServicesPage';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: "Our Services | Knowledge Hub" },
      {
        name: "description",
        content: "Explore our premium IT, Cloud, Office, and Non-IT courses.",
      },
    ],
  }),
  component: ServicesPage,
});
