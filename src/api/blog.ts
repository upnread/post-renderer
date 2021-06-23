/* eslint-disable camelcase */
import axios from 'axios'

const endpoint = 'https://secure-ravine-39715.herokuapp.com/api'

interface IBasic {
  token: string
}

interface IPostID extends IBasic {
  slug: string
  post_id?: never
}

interface IPostSlug extends IBasic {
  slug?: never
  post_id: string
}

export type TPostQ = IPostID | IPostSlug

export interface IPostGlobal {
  token: string
  q?: string
  page?: number
  order_by?: 'asc' | 'desc'
}

interface IPostIDRealted extends IPostGlobal {
  slug: string
  post_id?: never
}

interface IPostSlugRelated extends IPostGlobal {
  slug?: never
  post_id: string
}

export type TPostQRelated = IPostIDRealted | IPostSlugRelated

export interface TPostByCategory extends IPostGlobal {
  category_id: number
}

export interface TPostByTags extends IPostGlobal {
  tags_id: number[]
}

export interface TPostByAuthor extends IPostGlobal {
  author_id: number
}

export type TToken = {
  token: string
}

export function get_post({ token, post_id, slug }: TPostQ) {
  return axios.get(`${endpoint}/post/get_post`, {
    params: { token, post_id, slug }
  })
}

export function get_all_posts({ token, q, page = 1, order_by }: IPostGlobal) {
  return axios.get(`${endpoint}/post/get_all_posts?page=${page}`, {
    params: { token, q, order_by }
  })
}

export function get_featured_posts({
  token,
  q,
  page = 1,
  order_by
}: IPostGlobal) {
  return axios.get(`${endpoint}/post/get_featured_posts?page=${page}`, {
    params: { token, q, order_by }
  })
}

export function get_related_posts({
  token,
  q,
  page = 1,
  order_by,
  post_id,
  slug
}: TPostQRelated) {
  return axios.get(`${endpoint}/post/get_related_posts?page=${page}`, {
    params: { token, q, order_by, post_id, slug }
  })
}

export function get_posts_by_category({
  token,
  category_id,
  q,
  page = 1,
  order_by
}: TPostByCategory) {
  return axios.get(`${endpoint}/post/get_posts_by_category?page=${page}`, {
    params: { token, category_id, q, order_by }
  })
}

export function get_posts_by_tags({
  token,
  tags_id,
  q,
  page = 1,
  order_by
}: TPostByTags) {
  return axios.get(`${endpoint}/post/get_posts_by_tags?page=${page}`, {
    params: { token, tags_id, q, order_by }
  })
}

export function get_posts_by_author({
  token,
  author_id,
  q,
  page = 1,
  order_by
}: TPostByAuthor) {
  return axios.get(`${endpoint}/post/get_posts_by_author?page=${page}`, {
    params: { token, author_id, q, order_by }
  })
}

export function get_all_categories({ token }: TToken) {
  return axios.get(`${endpoint}/category/get_all_categories`, {
    params: { token }
  })
}

export function get_all_tags({ token }: TToken) {
  return axios.get(`${endpoint}/tag/get_all_tags`, {
    params: { token }
  })
}

export function get_all_authors({ token }: TToken) {
  return axios.get(`${endpoint}/author/get_all_authors`, {
    params: { token }
  })
}
