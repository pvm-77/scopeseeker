import React, { useState } from 'react';
import DraggableItem from './components/DraggableItem';
import DroppableList from './components/DroppableList';
import CodeSnippet from './components/CodeSnippet';
const SCOPES = ['Global', 'Function 1', 'Function 2', 'Block']; // Define available scopes

const App = () => {
  const [codeSnippet, setCodeSnippet] = useState({
    // Example code snippet with variables in different scopes
    code: `function func1() {
  let blockVar = 'block variable';
  console.log(globalVar); // Global variable access
}

var globalVar = 'global variable';
func1();
`,
    variables: [
      { id: 1, content: 'globalVar' },
      { id: 2, content: 'func1' },
      { id: 3, content: 'blockVar' },
    ],
  });

  const handleDrop = (item, scopeIndex) => {
    // Update dropped items based on scope
    setCodeSnippet((prevSnippet) => ({
      ...prevSnippet,
      variables: prevSnippet.variables.map((varItem) =>
        varItem.id === item.id ? { ...varItem, scope: scopeIndex } : varItem
      ),
    }));
  };

  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline bg-slate-600'>Scope Match</h1>
      <p>Match the variables to their correct scopes in the code snippet.</p>

      <div className='flex justify-st border-2 border-fuchsia-950 flex-wrap p-4' >

        <div className="code-snippet border-2 border-red-100  ">
          {/* <pre>{codeSnippet.code}</pre> */}
          <CodeSnippet code={codeSnippet.code} />
        </div>


        <div className='border-2 border-green-900 ml-2 mt-2 mb-2'>
          <ul>
            {codeSnippet.variables.map((item) => (
              <DraggableItem key={item.id} id={item.id} content={item.content} />
            ))}
          </ul>
        </div>


      </div>

      <div className="drag-and-drop ">

        <div>
          {SCOPES.map((scope, index) => (
            <DroppableList key={index} onDrop={(droppedItem) => handleDrop(droppedItem, index)} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
