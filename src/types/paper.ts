export interface Paper {
  id: number;
  papertitle: string;
  coauthors: string;
  publishername: string;
  journalaltimpactfactor: string;
  published_at: string;
  doi?: string;
  journalname?: string;
  pdfLink?: string;
  mediaLinks?: string[];
}

export interface PapersResponse {
  data: Paper[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type SortField =
  | "papertitle"
  | "published_at"
  | "journalaltimpactfactor";
export type SortOrder = "asc" | "desc";
export type SearchCategory = "papertitle" | "coauthors" | "journalname";
