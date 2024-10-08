export interface Icompanies {
  id: string;
  name: string;
  description: string;
  logo: string;
  phone: string;
  address: string;
  website: string;
  industry: string;
  email: string;
}
export interface Ijobs {
  name: string;
  description: string;
  company_id?: string;
  contact_email: string;
  contact_phone:string;
  logo: string;
  field: string;
}
export interface Iroadmap {
  id: string;
  name: string;
}
export interface IroadmapContent {
  id: string;
  name: string;
  contents: IContents[]
}

export interface IContents{
    id: string;
    description: string;
    link: string;
}


export interface userData {
  access_token: string;
  token_type: string;
  SetUserName: (name:string)=> void;
  user: {
    name: string;
    email: string;
    id: string;
    image_link: string;
    phone: string;
  };
}

export interface AuthContextType {
  isLoggedIn: boolean;
  user: userData | null;
  userToken: string | null;
  login: (data: userData) => void;
  logout: () => void;
  SetUserName: (name:string)=> void;
}

export interface ICompany {
  company: Icompanies;
  jobs: Ijobs[];
}

export interface ISchedule{
  id: string,
  user_id: string,
  roadmap_id: string,
  content_id: string,
  lesson_date: string,
  created_at: string,
  updated_at: string,
  roadmap: {
      id: string,
      name: string
  },
  content: {
      id: string,
      title: string,
      description: string,
      link: string
  }
}

export interface IDayContent{
    id: string,
    user_id: string,
    roadmap_id: string,
    content_id: string,
    lesson_date: string,
    created_at: string,
    updated_at: string,
    roadmap: {
        id: string,
        name: string
    },
    content: {
        id: string,
        title: string,
        description: string,
        link: string
    }
}