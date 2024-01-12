import { useLocation} from 'react-router-dom'


export default function Home() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
  return (
    <div>
        {name && <h2> Hello {name} ,Contact us Here...</h2>}
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem, laudantium porro temporibus 
            at labore quo consectetur incidunt,
            possimus dicta ex ea qui neque. Laborum id voluptatum ut voluptates earum.
        </p>
    </div>
  )
}
