import * as Yup from 'yup'

export const postSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required('Post title is required')
    .min(12, 'Post title must be at least 12 characters')
    .max(100, 'Post title must be at most 100 characters'),

  body: Yup.string()
    .trim()
    .required('Post body is required')
    .min(30, 'Post title must be at least 30 characters')
    .max(500, 'Post title must be at most 500 characters'),
})
