import { AboutUs as TAboutUs } from "../api/aboutUs/AboutUs";

export const ABOUTUS_TITLE_FIELD = "title";

export const AboutUsTitle = (record: TAboutUs): string => {
  return record.title?.toString() || String(record.id);
};
