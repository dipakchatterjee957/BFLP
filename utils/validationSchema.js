const yup = require('yup');
const phoneRegex = /^(?:(?:0|91)?[6789]\d{9})$/;

module.exports.createUserSchema = yup.object({
    body: yup.object({
        user_name: yup.string().min(3,"Minimum 3 letter required").required(),
        mobile_primary: yup
        .string()
        .matches(phoneRegex, "Phone no is not valid")
        .min(10)
        .max(10),
    })
})