# Blog Posting API

This API provides endpoints to manage blog posts.

Visit [Here](https://blog-post-phi.vercel.app/) to explore the API endpoints

## Blog Post Schema

- **id**:
  - Type: Number
  - Requirement: Required, Unique
  
- **title**:
  - Type: String
  - Requirement: Required
  
- **content**:
  - Type: String
  - Requirement: Required
  - Minimum Length: 200 characters
  
- **author**:
  - Type: String
  - Requirement: Required
  
- **authorProfile**:
  - Type: String
  - Requirement: Optional

## Routes

### Create Blog Post
- **Route:** `POST /create-blog`
- **Description:** Creates a new blog post.
- **Request Body:** Expects JSON data containing blog post details (`title`, `content`, `author`,  `authorProfile (optional)`).
- **Response:** Returns the created blog post.

### Get All Blogs
- **Route:** `GET /`
- **Description:** Retrieves all blog posts.
- **Response:** Returns a list of all blog posts available.

### Get Single Blog
- **Route:** `GET /:id`
- **Description:** Retrieves a single blog post by its ID.
- **Request Params:** Expects the ID of the blog post to retrieve.
- **Response:** Returns the specific blog post if found.

### Update Blog Information
- **Route:** `PUT /:id/`
- **Description:** Updates information for a specific blog post.
- **Request Params:** Expects the ID of the blog post to update.
- **Request Body:** Expects JSON data with updated blog post details (`title`, `content`, `author`, optional: `authorProfile`).
- **Response:** Returns the updated blog post.

### Delete Blog
- **Route:** `DELETE /:id/`
- **Description:** Deletes a specific blog post.
- **Request Params:** Expects the ID of the blog post to delete.
- **Response:** Returns a success message if the blog post is deleted.
