import { useState, useEffect } from 'react';
import Header from './component/header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, STATUSES } from './store/blogSlice';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Blogs() {
  const dispatch = useDispatch();
  const { data: blogs, status } = useSelector((state) => state.blogs);

  useEffect(() => {
    // Fetch blogs when component mounts
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Loading state
  if (status === STATUSES.LOADING) {
    return (
      <h2>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </h2>
    );
  }

  // Error state
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  // Render blogs
  return (
    <>
      <Header />
      <div className={`productsWrapper row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ${styles.blogContainer}`}>
        {blogs.map((blog) => (
          <div key={blog.id} className="col">
            {/* Blog Card */}
            <Card className={`h-100 ${styles.card}`}>
              <CardContent>
                {/* Blog Title */}
                <div className={`d-flex justify-content-between ${styles.blogHeader}`}>
                  <div>
                    <Typography gutterBottom variant="h5" component="div" className={styles.blogTitle}>
                      <h4>{blog.title}</h4>
                    </Typography>
                  </div>
                </div>
                {/* Author and Content */}
                <div className={`d-flex flex-column ${styles.blogContent}`}>
                  <Typography variant="subtitle1" color="text.secondary" className={styles.author}>
                    {blog.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className={styles.description}>
                    {blog.content}
                  </Typography>
                </div>
              </CardContent>
              {/* Read More Button */}
              <CardActions>
                <div className={`d-flex justify-content-end ${styles.readMore}`}>
                  <Link href={`/readblogs/${blog.id}`} passHref>
                    <Button component="a" size="small" color="primary">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
