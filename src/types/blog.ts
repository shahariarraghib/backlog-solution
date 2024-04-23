type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  user: any;
  tags: string[];
  readable_publish_date: string;
  profile_image_90: string;
  type_of: string;
  paragraph: any;
};
