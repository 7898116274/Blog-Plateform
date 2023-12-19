import * as Yup from "yup";

export const contentSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    title: Yup.string().min(2).max(70).required("Please enter the title"),
    content: Yup.string().min(30).max(10000).required("Please enter your content"),
  });