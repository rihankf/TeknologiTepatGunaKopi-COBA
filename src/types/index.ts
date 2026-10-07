export type Tool = {
  slug: string;
  name: string;
  category: string;
  image: string;
  problem: string;
  description: string;
  priceRange: string;
  buyLink?: string;
  specs: { label: string; value: string }[];
};

export type Problem = {
  icon: string;
  title: string;
  description: string;
  impact: string;
};
