import {Form, Link, redirect} from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utiles';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData()
  // console.log("form", formData);
  const data = Object.fromEntries(formData)
  // console.log("data", data);
  
  try {
    const response = await customFetch.post("/auth/local/register",data);
    // console.log(response);
    toast.success("account created successfully")
    return redirect('/login')
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "Please double check your credentials"
    toast.error(errorMessage)
    return null
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method="POST" className='card w-96 p-8 flex flex-col gap-y-4 bg-base-100 shadow-lg'>
        <h4 className='text-center text-3xl font-bold capitalize '>register</h4>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
        <div className='mt-4'>
          <SubmitBtn type='submit' text='Register'/>
        </div>
        <div>
          <p className='text-center'>Already a memeber?
            <Link to='/login' className='link-hover link-primary ml-3'>Login</Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Register;
