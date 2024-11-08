export type layouts = "col1" | "col2" | "col3";
export type elementType =
  | "HEADER_LARGE"
  | "HEADER_MEDIUM"
  | "HEADER_SMALL"
  | "PARAGRAPH"
  | "IMAGE"
  | "LINK";
export type decorations = "BOLD" | "ITALIC";
export type block = {
  id: [string, string];
  value: string | null;
  elementType: elementType | null;
  decorations: decorations | null;
};

export type metaDataOfaRow = {
  id: string;
  layout: layouts;
  blocks: block[];
};

export type titleData = {
  value: string;
  type: "large" | "medium" | "small";
};
