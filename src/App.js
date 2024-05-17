import React, { useState } from 'react';
import DraggableItem from './components/DraggableItem';
import DroppableList from './components/DroppableList';
import CodeSnippet from './components/CodeSnippet';
import { BiCodeCurly } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
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
    <div
      // style={{backgroundColor:'#CFD8DC'}} 
      className="flex overflow-hidden h-lvh w-lvw bg-blue-200">
      <div className='flex flex-col p-4'>
        <div className='flex justify-center p-2  align-middle'>
          <a href='/' className='mr-2'>
            <BiCodeCurly className='w-10 h-10 ' />
          </a>

          <h1 className='text-2xl font-bold border font-serif'>Scope Match</h1>
        </div>

        <p className='font-thin  p-0 italic text-[12px]'>Match the variables to their correct scopes in the code snippet.</p>
        <div className='flex justify-center align-middle my-2'>
          <select>
            <option>choose an example</option>
            <option>choose an example</option>
            <option>choose an example</option>
            <option>choose an example</option>
            <option>choose an example</option>
          </select>
          <button className='bg-green-800 gap-2 text-white rounded mx-2 p-2 flex  content-center justify-center'>
            <span>run</span>
            <FaPlay className='w-5 h-5' />

          </button>
          <button className='bg-red-800 gap-2 rounded p-2 flex border text-white font-sans '>
            <span>share</span>
            <CiLink className='h-5 w-5' />
          </button>

        </div>

        <div className="code-snippet w-96 h-full bg-teal-800 p-2  ">
          {/* <pre>{codeSnippet.code}</pre> */}
          <CodeSnippet code={codeSnippet.code}  />
        </div>
      </div>

      <div className='flex flex-col flex-1  p-4'>

        <div className='flex   flex-wrap p-4' >
          <div className=' ml-2 mt-2 mb-2 rounded-sm shadow-2xl bg-teal-800 w-full'>
            <p className='p-2'>Variables</p>
            <ul className='shadow-sm bg-fuscia-500 inline-block'>
              {codeSnippet.variables.map((item) => (
                <DraggableItem key={item.id} id={item.id} content={item.content} />
              ))}
            </ul>
          </div>
        </div>

        <div className="drag-and-drop ">

          <div className=' min-h-80  flex flex-wrap mt-2 h-full p-4'>
            {SCOPES.map((scope, index) => (
              <DroppableList key={index} scope={scope} onDrop={(droppedItem) => handleDrop(droppedItem, index)} />
            ))}
          </div>

        </div>



      </div>


    </div>
  );
};

export default App;
