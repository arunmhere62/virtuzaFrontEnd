import * as Yup from 'yup';
import { FieldProps } from "../../types/types";


export const blogsField: FieldProps[] = [
    {
        name: 'Blog posts',
        type: 'section',
        titleGridSize: 12,
        subFields: [
            { name: 'title', label: 'Title', type: 'text', gridSize: 5, },
            { name: 'description', label: 'Description', type: 'text', gridSize: 5, },
            { name: 'author', label: 'Author', type: 'text', gridSize: 5, },
            { name: 'content', label: 'Content', type: 'text', gridSize: 5, },
            { name: 'publishedDate', label: 'Published Data', type: 'date', gridSize: 5, },
            { name: 'imageUrl', label: '', type: 'text', gridSize: 5, startAdornment: "IMG URL" },
        ]
    },
];

export const userProfileFields: FieldProps[] = [
    {
        name: 'User Profile',
        type: 'section',
        titleGridSize: 12,
        subFields: [
            { name: 'username', label: 'User Name', type: 'text', gridSize: 5, },
            { name: 'email', label: 'email', type: 'text', gridSize: 5, },
            { name: 'dob', label: 'dob', type: 'date', gridSize: 5, },
            { name: 'password', label: 'password', type: 'text', gridSize: 5, },
            { name: 'address', label: 'address', type: 'text', gridSize: 5, },
            { name: 'city', label: 'city', type: 'text', gridSize: 5, },
            { name: 'state', label: 'state', type: 'text', gridSize: 5, },
            { name: 'job', label: 'job', type: 'text', gridSize: 5, },
        ]
    },
];

// !  --------------------------


// username
// email
// dob
// password
// address
// city
// state
// job