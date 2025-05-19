import Users from "@/data/users.json";
import { setUserData } from '@/redux/user/actionCreator';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from '@clerk/nextjs'
export default function SignInModule() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

	const admin = useSelector((state) => state.user.admin);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists
    const user = Users.find(user => user.email === email || user.username === email);

    if (!user) {
      setMessage('User not found.');
      console.error('Error: User not found.');
      return;
    }

    // Check if the password matches
    if (user.password !== password) {
      setMessage('Incorrect password.');
      console.error('Error: Incorrect password.');
      return;
    }

    // Successful login
    dispatch(setUserData(user));
    setMessage('Login successful!');
    router.push('/dashboard');
  };

  useEffect(() => {
    if (admin) {
      setMessage('You are already logged in.');
      router.push('/dashboard');
    }
  }, []);

  return (
    <div className="login-registration-wrapper">
      <div className="container">
        <div className="row g-0">
     
        
            <SignIn />
         
        
        </div>
      </div>
    </div>
  );
}
