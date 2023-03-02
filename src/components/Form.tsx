import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { Button, Form as FormContainer, Error } from "../styles";
import { useAppDispatch } from "../store/hooks";
import { retrieveShortenLink } from "../store/shortenSlice";
import Blob from '../../images/bg-shorten-mobile.svg'
import BlobDesktop from '../../images/bg-shorten-desktop.svg'
const schema = Yup.object().shape({
  link: Yup.string()
    .required("Please enter a link")
    .url("Please enter a valid URL"),
});

export const Form = () => {
  
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: { link: "" },
    onSubmit: ({ link }) => {
       dispatch(retrieveShortenLink(link));
  
      
    },
    validationSchema: schema,
  });

  return (
    <FormContainer as={"form"} onSubmit={formik.handleSubmit} bg={Blob} bgBig={BlobDesktop}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={formik.values.link}
        onChange={formik.handleChange}
        name="link"
      />

      {formik.errors.link && <Error>{formik.errors.link}</Error>}
      <Button type="submit" borderRadius="5px">
        Shorten it!
      </Button>
    </FormContainer>
  );
};
