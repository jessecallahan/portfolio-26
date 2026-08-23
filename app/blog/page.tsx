'use client'


import Link from 'next/dist/client/link';
import { blogPosts } from './blog-post';
import { Box, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import React from 'react';


export default function Blog() {

  return (
    <>
  
      <Box>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
          <Card>
            <CardActionArea component={Link} href={`/blog/${post.id}`}>
            <CardContent >
              <Typography variant="h5" component="div" gutterBottom>
                {post.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" >
                {post.content}
              </Typography>

              <Typography variant="caption" color="text.disabled">
                {post.content}
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
          {/* {index < blogPosts.length - 1 && (
            <Box sx={{ mt: 1 }} /> // 8px (1 unit) margin-top for spacing between cards
          )} */}
        </React.Fragment>
        ))}
      </Box>
  </>
  )
}
