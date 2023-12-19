#  SparkScribe Blogging Platform 

A small blogging platform built with Next.js,and Redux.

# Description

This project is a small blogging platform developed using Next.js. It allows users to view a list of blog posts, create new posts, and read individual posts in detail.

# Features

1.Landing Page:
Display a list of blog posts with titles and short previews.

2.Post Creation Page:
Form for creating a new blog post with title, content, and author name and Added Form validation for each field.

3.Post Detail Page:

Detailed view of a post when clicked, displaying full content, title, and author.

# Navigation:

Navigation bar to switch between the Landing Page and Post Creation Page In Header

# API Integration:

use mock api {https://my-json-server.typicode.com/7898116274/data/user}

# Css and Responsive 
Use MUI , Bootstrap

# SEO Optimization:
SEO-friendly with proper use of meta tags.

# State Management:
Use Redux 


# Getting Start 
 ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


 # Project Structure
 
   `pages/`: Next.js pages for different views.
    -`index.js`: Landing Page.
    -`form.js`: Post Creation Page.
    -`readblogs/[id].js`: Post Detail Page.
    `components/`: Reusable components.
       - `header.js`: Navigation Header.
        -`schema/`: Form validation schema.
           - `index.js`: Yup validation schema.
    `store/`: Redux store setup.
      -  `blogSlice.js`: Redux slice for managing blog state.
      -  `formSlice.js`: Redux slice for managing form state.
    
    `styles/`: Global and Home styles.
    
    
#  Dependencies

npm i axios
npm install react-bootstrap bootstrap  
npm install react-redux  @reduxjs/toolkit 
npm install @mui/material @emotion/react @emotion/styled 
npm i formik            
npm i yup
npm install next-themes   

