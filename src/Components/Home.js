import React,{useState, useEffect} from 'react';
import Product from './Product';
import Button from '@material-ui/core/Button';
import './Home.css';



const data = [
    {
                 id:'101',
                title:'Item1',
                price:11.96,
                rating:4,
                image:'https://images-na.ssl-images-amazon.com/images/I/71IvknzShwL._UL1300_.jpg'
    },

    {
        id:'102',
        title:'Item2',
        price:20.96,
        rating:5,
        image:'https://images-na.ssl-images-amazon.com/images/I/31ibvRKCB8L.jpg'   
    },

    {
        id:'103',
        title:'Item3',
        price:30.50,
        rating:4,
        image:'https://images-na.ssl-images-amazon.com/images/I/71EwydHTc8L._SL1000_.jpg'   
    },

    {
                id:'104',
                title:'Item4',
                price:29.89,
                rating:3,
                image:'https://images-na.ssl-images-amazon.com/images/I/51QO4iATxCL._SL1088_.jpg'
    },

    {
        id:'105',
        title:'Item5',
        price:43,
        rating:4,
        image:'https://images-na.ssl-images-amazon.com/images/I/A1rvzUXyHrL._SL1500_.jpg'
    },

    {
                id:'106',
                title:'Item6',
                price:35.67,
                rating:4,
                image:'https://images-na.ssl-images-amazon.com/images/I/51Y21By5TzL._SL1000_.jpg'
    },

    {
                id:'107',
                title:'Item7',
                price:50,
                rating:3,
                image:'https://images-na.ssl-images-amazon.com/images/I/51HxYKRTfhL._SL1500_.jpg'
    },

    {
        id:'108',
        title:'Item8',
        price:40,
        rating:2,
        image:'https://images-na.ssl-images-amazon.com/images/I/71SJZ2F9YLL._SL1500_.jpg'
    },
];


const getData = (page, size) => {
    const result = [];
    for(let i=(page-1)*size; i< page* size;i++){
        result.push(data[i]);
    }
    return result;
}


function Home() {

    const [pg, setPg] = useState(1);

    const onClick = () => {
        setPg(pg+1);
    };

    const onclick = () => {
        setPg(pg-1);
    };

    const resfinal = getData(pg,4);
    const count = data.length;
    //console.log(getData(1, 3));
    //console.log(getData(2,3));
    return (

         <div>
         <div className='homerow'>
             {resfinal.map(x => <Product 
                 id={x.id}
                 title={x.title}
                 price={x.price}
                 rating={x.rating}
                image={x.image}
            />) }
            
        </div>
        <div className='buttonalign'>
        {pg*4 < count ?<Button onClick={onClick} variant="outlined" color="primary" size="small">Next</Button>: <Button onClick={onclick} variant="outlined" color="primary" size="small">Prev</Button>}
        </div>
        </div>
    )
}

export default Home;
