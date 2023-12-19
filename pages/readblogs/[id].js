import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { STATUSES } from '../store/blogSlice';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../../styles/Home.module.css';
import Header from '../component/header';
import Head from 'next/head';

function ReadBlogs() {
  const router = useRouter();
  const { id } = router.query;

  // Get blogs and status from Redux store
  const { data: blogs, status } = useSelector((state) => state.blogs);

  // Find the blog with the matching id from the URL
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    // Update the title in the Head component when the component mounts
    if (blog) {
      document.title = `${blog.title} - Your Blog Name`;
    }
  }, [blog]);

  if (status === STATUSES.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === STATUSES.ERROR || !blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Head>
        {/* Set the title and meta description for SEO */}
        <title>{blog.title} - Your Blog Name</title>
        <meta name="description" content="Your meta description goes here." />
      </Head>
      {/* Header component */}
      <Header />
      {/* Main content container */}
      <Container className="mt-4">
        {/* Blog content box */}
        <div className={style['blog-box']}>
          {/* Blog title */}
          <Row>
            <Col>
              <h1 className={style['title']}>{blog.title}</h1>
            </Col>
          </Row>
          {/* Divider line */}
          <Row className={style['divider-line']}></Row>
          {/* Author information */}
          <Row className="mt-3">
            <Col>
              <p className="font-italic text-muted" id={style['author']}>
                {blog.author}
              </p>
            </Col>
          </Row>
          {/* Divider line */}
          <Row className="divider-line"></Row>
          {/* Blog content */}
          <Row className="mt-3">
            <Col>
              <p className={style['content']}>{blog.content}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ReadBlogs;

