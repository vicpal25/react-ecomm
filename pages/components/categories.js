import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_CATEGORIES = gql`
  {
    categories {
      name
      categoryId
    }
  }
`;

function Categories({ onCategoriesSelected }) {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name="categories" onChange={onCategoriesSelected}>
        {data.categories.map(category => (
          <option key={category.sku} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    );
  }

  export default Categories;