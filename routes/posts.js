import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

// Middleware
import auth from '../middleware/auth.js';

// Set up router
const router = express.Router();

// example - http://localhost:5000/posts
router.get('/', getPosts);
router.post('/new-post', auth, createPost);

// used for updating existing documents later to get specific post page
router.patch('/update-post/:id', auth, updatePost);
router.delete('/update-post/:id', auth, deletePost);

// include auth for user to only be able to like once instead of multiple times
router.patch('/:id/likePost', auth, likePost);

export default router;