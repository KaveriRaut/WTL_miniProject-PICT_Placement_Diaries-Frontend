import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"
import "./home.css";

export const Home = () => {
  const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
    <div class="one">
      <h1>Welcome to PICT Placement Diaries</h1>
    </div>
      <Category />
      <Card posts={posts} />
    </>
  )
}
