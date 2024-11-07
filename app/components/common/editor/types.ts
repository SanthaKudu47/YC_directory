export type layouts = "col1" | "col2" | "col3";
export type elementType =
  | "HEADER"
  | "SUB_HEADER"
  | "PARAGRAPH"
  | "IMAGE"
  | "LINK";
export type decorations = "BOLD" | "ITALIC";
export type block = {
  id: [string, number];
  value: string | null;
  elementType: elementType | null;
  decorations: decorations | null;
};

export type metaDataOfaRow = {
  id:string;
  layout: layouts;
  blocks: block[];
};
