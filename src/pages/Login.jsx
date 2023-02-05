import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {

    const {register, reset, handleSubmit} = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
        .then(res => {
            console.log(res.data.data)
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err))

            reset({
            email: "",
            password: ""
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' {...register("email")}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register("password")}/>
          </div>
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login