import React , {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    })

  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : null 
}

export default EditPost
