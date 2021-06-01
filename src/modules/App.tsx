import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { Root } from '../root';

const App: React.FC = () => {
  // State of your application
  
  useEffect(() => {
    // try {
    // const response = await axios.get('http://localhost:1337/categories');

    console.log( 'responsed it!');
    // }
  }, []);

  // Fetch your menu products immediately after the component is mounted
  // componentDidMount() {
    //   this.setState({ restaurants: response.data });
    // } catch (error) {
    //   this.setState({ error });
    // }
    // console.log('mounted')
  // };

  const [categories, setCategories] = useState<string>('sss')
    // Print errors if any

    return (
      <div className="App">
        <h1>
          {categories}
        </h1>
      </div>
    );
}

export default App;
