export type BlogContent = {
  time: number;
  blocks: {
    id: string;
    type: string;
    data: any;
  }[];
  version: string;
};
