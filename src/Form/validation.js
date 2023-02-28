import * as Yup from 'yup';


const validationSchema = Yup.object({
  name: Yup.string().required("* Name field is required"),
  email: Yup.string().email("Invalid email address").required("* Required field"),
  message: Yup.string().required("* Message field is required")
});



export default validationSchema;

