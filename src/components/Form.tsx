import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Form as FormContainer, Error } from "../styles";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { retrieveShortenLink, setLinks } from "../store/shortenSlice";

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
    <FormContainer as={"form"} onSubmit={formik.handleSubmit}>
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
