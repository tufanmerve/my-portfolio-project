import * as yup from "yup";


const validationSchema = yup.object().shape({
    name: yup.string().required("* Name field is required"),
    email: yup.string().email("Invalid email address").required("* Required field"),
    message: yup.string().required("* Message field is required")
    
    
  });


  export default validationSchema;