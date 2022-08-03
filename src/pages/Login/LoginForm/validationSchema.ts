import * as Yup from 'yup'

const validate = Yup.object({
	email: Yup.string()
		.max(25, 'Must be 25 characters or less')
		.required('Required')
		.email('Must be a valid email'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password required'),
})

export default validate
