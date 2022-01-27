
export interface Techs {
  id: number;
  created_at: Date;
  name: string;
  image?: any;
}

export interface Portfolio {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  image?: any;
  techId: number;
  url?: any;
  techs: Techs;
}


