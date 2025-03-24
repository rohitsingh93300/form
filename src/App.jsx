import React, { useEffect, useState } from 'react'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Trash2 } from 'lucide-react';
import { Textarea } from './components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';

const App = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    description: "",
    file: ""
  });
  const [fileUrl, setFileUrl] = useState(null);
  const [val, setVal] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    setVal(input)
  };
  const deleteHandler = () => {
    setVal("")
    setInput("")
  }

  return (
    <div className=" bg-gray-100">
      <div className='flex justify-between max-w-6xl mx-auto items-center min-h-[750px]'>
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">Create an account</h1>
            </CardTitle>
            <p className='text-gray-600 mt-2 text-sm font-serif text-center'>Enter your details below to create your account</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className='flex gap-3'>
                <div className='space-y-1'>
                  <Label>First Name</Label>
                  <Input type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className='space-y-1'>
                  <Label>Last Name</Label>
                  <Input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='space-y-1'>
                <Label>Email</Label>
                <Input type="email"
                  placeholder="john.doe@example.com"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1'>
                <Label>Username</Label>
                <Input type="text"
                  placeholder="Enter a username"
                  name="username"
                  value={input.username}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1'>
                <Label>Description</Label>
                <Textarea placeholder="Enter Your bio" name="description" value={input.description} onChange={handleChange} />
              </div>

              <div >
                <Label htmlFor="name" className="text-right">
                  Picture
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                  className="w-[277px]"
                />
              </div>

              <Button type="submit" className="w-full">Create Account</Button>
              <p className='text-center text-gray-600'>Already have an account? <span className='underline cursor-pointer hover:text-gray-800'>Sign in</span></p>
            </form>
          </CardContent>
        </Card>
        {
          val && <Card className="w-full max-w-md py-10 px-12 shadow-lg rounded-2xl bg-blue-50 flex flex-col items-center justify-start">
            <div className='flex justify-between w-full'>
              <h1 className='font-bold text-2xl text-gray-700'>Profile</h1>
              <Button onClick={deleteHandler} variant="outline" ><Trash2 className='text-red-600' /></Button>
            </div>
            <Avatar className="w-40 h-40 border-3 border-blue-500">
              <AvatarImage src={fileUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className='font-bold text-4xl text-gray-700'>{val.firstName} {val.lastName}</h1>
            <h3><span className='font-semibold'>Username :</span> {val.username}</h3>
            <p><span className='font-semibold'>Email : </span>{val.email}</p>
            <p><span className='font-semibold'>Description : </span>{val.description}</p>

          </Card>
        }

      </div>
    </div>
  )
}

export default App
