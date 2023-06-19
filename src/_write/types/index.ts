interface HashTagItemTypes {
  post_hashtag_no: number;
  hashtag_title: string;
}

export interface LetterItemTypes {
  artist_name: string;
  artist_no: number;
  cate_img_url: string;
  cate_title: string;
  hashtag: HashTagItemTypes[];
  img_url: string;
  post_cate_no: number;
  post_description: string;
  post_img_no: number;
  post_no: number;
  post_title: string;
}

export type LetterListTypes = LetterItemTypes[][];

export interface CategoryItemTypes {
  cate_eng_title: string;
  cate_title: string;
  post_cate_no: number;
  view_seq: number;
}

export type CategoryListTypes = CategoryItemTypes[];
