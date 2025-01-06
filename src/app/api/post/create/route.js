import Post from '@/app/lib/models/post.model.js';
import { connect } from '@/app/lib/mongodb/mongoose';
import { currentUser } from '@clerk/nextjs/server';

export const POST = async (req) => {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }

    await connect();
    const data = await req.json();

    // Validate user permissions
    const { userMongoId, isAdmin } = user.publicMetadata;
    if (!isAdmin || userMongoId !== data.userMongoId) {
      return new Response('Unauthorized', { status: 401 });
    }

    const slug = data.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');

    const newPost = await Post.create({
      userId: userMongoId,
      content: data.content,
      title: data.title,
      image: data.image,
      category: data.category,
      slug,
    });

    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return new Response('Error creating post', { status: 500 });
  }
};
