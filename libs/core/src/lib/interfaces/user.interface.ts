export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  avatar?: string;
  cover?: string;
  channel?: string;
  firstName: string;
  lastName: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  profile: Profile;
  friends: Friend[];
  followers: Follower[];
  subscribers: Subscriber[];
  post: Posts;
}

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  location: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Friend {}

export interface Follower {}

export interface Subscriber {}

export interface Posts {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  isPublic: boolean;
  dislikes: number;
  createdAt: Date;
  updatedAt: Date;
}
