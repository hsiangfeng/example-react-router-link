import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Products () {
  const { state } = useLocation();
  
  useEffect(() => {
    console.log(state); // { data: { id: '1', name: 'QQ 產品' } }
  },[]);
  return (
    <div>
      <h1>產品列表</h1>
    </div>
  )
}

export default Products