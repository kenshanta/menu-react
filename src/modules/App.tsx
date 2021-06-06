import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {IProduct} from '../utils/interfaces'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
// import { Root } from '../root';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

const App: React.FC = () => {
  // State of your application
  const [products, setProducts] = useState<IProduct[] | null>(null)
  
  useEffect (() => {
    // try {
      async function fetchApi(){

        const response = await axios.get('http://localhost:1337/products');
        setProducts(response.data)
      }
      fetchApi()
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

    // Print errors if any
    const classes = useStyles();
    return (
      <>
       <AppBar position="static">
        <Toolbar className={classes.toolbar}>
         
          <Typography className={classes.title} variant="h4" noWrap>
            Churchill's Taylor
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        <ul>
          {products&& products.map((product: any) => (
            <li key={product.id}>{product.name} --- {product.prices.primary}</li>
          ))
        }
        </ul>
      </>
    );
}

export default App;
