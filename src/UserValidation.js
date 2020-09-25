const yup = require("yup");

const Validation = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  birthDate: yup.date().required("Required"),
  age: yup.number().required("Required"),
});

export default Validation;
