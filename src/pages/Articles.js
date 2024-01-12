import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFethch'
import { useEffect } from 'react';

export default function Articles() {
    const { id } = useParams()
    const url = ' http://localhost:3001/articles/' + id
    const { data: article, isLoading, error } = useFetch(url);
    const navigate = useNavigate()

    useEffect(() => {
        if(error){
           setTimeout(() => {
            navigate('/')
           }, 1000);
        }
    },[error])

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>by {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
