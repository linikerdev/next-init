import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

const Home = ({ respositories }) => (
  <div>
    <Link href='/blog'><a>Blog</a></Link>
    {
      respositories.map(repo => <h2 key={repo.id}>{repo.name}</h2>
      )
    }
  </div>
)

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/linikerdev/repos')
  const respositories = await response.json()
  return { respositories }
}

export default Home
