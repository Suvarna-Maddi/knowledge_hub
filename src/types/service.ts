export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  fullDetails: string;
  duration?: string;
  placementSupport?: boolean;
};
