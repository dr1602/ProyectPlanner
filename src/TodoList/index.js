import React from 'react';
import './TodoList.css'

function TodoList(props) {

  const renderFunc = props.children || props.render;

  console.log(`loading ${props.loading}`)

  return (
    <>
      {
        props.loading ? (
          <> 
          </>
        ) : (
          <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
    
            {(!props.loading && !props?.totalTodos) && props.onEmptyTodos()}
    
            {(!!props.totalTodos && !props?.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
    
    
            {/* {props.searchedTodos.map(todo => (props.render(todo)))} */}
            {/* {props.searchedTodos.map(props.render)}       */}
            {/* {props.searchedTodos.map(props.children)} */}
            {props.searchedTodos.map(renderFunc)}
    
            <ul>
              {props.children}
            </ul>
          </section>
        )
      }


    </>

  );
}

export { TodoList };
