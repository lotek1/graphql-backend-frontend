import React from 'react'
import { useQuery, gql } from "@apollo/client"

const QUERY_ALL_USERS = gql`
query GetAllUsers {
    users {
        id
        name
        age
        username
        nationality
    }
}
`

const QUERY_ALL_MOVIES = gql`
query GetAllMovies {
    movies {
        
            name
       
        
    }
}
`

function DisplayData() {

    const {data, loading, error} = useQuery(QUERY_ALL_USERS)
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES)
    
    if (loading) {
        return <h1>DATA IS LOADING...</h1>
    }
    if (data) {
        console.log(data)
    }
   if (error) {
       console.log(error)
   }

  return (
    <div>
{data && data.users.map((user) => {
    return (
        <div key={user.name}>
        <h5>name: {user.name}</h5>
        <h5>username: {user.username}</h5>
        <h5>age: {user.age}</h5>
        <h5>Nat: {user.nationality}</h5>
        </div>
    );
})}
{movieData && movieData.movies.map((movie) => {
    return <h5 key={movie.name}>Movie Name: {movie.name}</h5>
})}
    </div>
  )
}

export default DisplayData