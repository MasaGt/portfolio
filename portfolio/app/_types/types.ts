export type Work = {
  title: string;
  description: string;
  skills: string[];
  thumbnail: string;
  imgs: string[];
  type: WorkType;
};

export type WorkType = "web" | "mobible" | "";
