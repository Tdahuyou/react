import React from "react";

function App() {
  const items = [
    { id: 1, title: 'Item 1', description: 'This is the first item.' },
    { id: 2, title: 'Item 2', description: 'This is the second item.' },
    { id: 3, title: 'Item 3', description: 'This is the third item.' }
  ];

  // 写法1
  // 正确写法
  return (
    <>
      {items.map(item => (<React.Fragment key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </>
  );

  // 写法2
  // 会报错
  // Warning: Each child in a list should have a unique "key" prop.
  // return (
  //   <>
  //     {items.map(item => (
  //       <>
  //         <h2>{item.title}</h2>
  //         <p>{item.description}</p>
  //       </>
  //     ))}
  //   </>
  // );

  // 写法3
  // 会报错
  // Warning: Each child in a list should have a unique "key" prop.
  // return (
  //   <>
  //     {items.map(item => (
  //       <div>
  //         <h2>{item.title}</h2>
  //         <p>{item.description}</p>
  //       </div>
  //     ))}
  //   </>
  // );

  // 写法4
  // 会影响到真实 DOM
  // return (
  //   <>
  //     {items.map(item => (
  //       <div key={item.id}>
  //         <h2>{item.title}</h2>
  //         <p>{item.description}</p>
  //       </div>
  //     ))}
  //   </>
  // );
}

export default App;
