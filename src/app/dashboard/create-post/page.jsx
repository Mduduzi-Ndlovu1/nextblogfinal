"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill-new'), {ssr: false});

import 'react-quill-new/dist/quill.snow.css';
export default function CreatePostPage() {

    const {isSignedIn, user, isLoaded} = useUser();

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn && user.publicMetadata.isAdmin) {
        return (
            <div className='p-3 max-w-3xl mx-autp min-h-screen'>
                <h1 className='text-center text-3xl my-7 font-semibold'>
                    Create a New Post
                </h1>

                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                        <TextInput
                            type='text'
                            placeholder='Title'
                            required
                            id='title'
                            className='flex-1'
                            />

                        <Select>
                            <option value="uncategorized">Select a category</option>
                            <option value="newTech">New Technology</option>
                            <option value="opinion">A Juniors Opinion</option>
                            <option value="project">Projects</option>
                        </Select>
                    </div>
                    <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                        <FileInput type="file" id="file" accept="image/*" />
                        <Button 
                            type='button'
                            gradientDuoTone='purpleToBlue'
                            size='sm'
                            outline
                            >
                                Upload Image
                        </Button>
                    </div>

                    <ReactQuill
                        theme='snow'
                        placeholder='Write Something...'
                        className='h-72 mb-12'
                        required
                    />
                    <Button type='submit' gradientDuoTone='purpleToPink'>
                        Publish
                    </Button>
                </form>
            </div>
        )       
    }else{
        return (
            <h1 className='text-center text-3xl my-7 font-semibold'>You are not allowed to access this page</h1>
        );
    }
}
