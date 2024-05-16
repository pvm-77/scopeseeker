import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; // for code formatting

const SCOPES = ['Global', 'Function']; // Default scopes (can be extended)
const DEFAULT_CODE = `function func1() {
  let blockVar = 'block variable';
  console.log(globalVar); // Global variable access
}

var globalVar = 'global variable';
func1();
`;

const App = () => {
  const [code, setCode] = useState(DEFAULT_CODE); // User-written code
  const [selectedScope, setSelectedScope] = useState(SCOPES[0]); // Selected scope
  const [variables, setVariables] = useState([]); // User-defined variables
  const [errors, setErrors] = useState([]); // Error messages (if any)

  // Function to identify variables and their scopes
  const analyzeCode = () => {
    const newVariables = []; // Stores extracted variables
    const newErrors = []; // Stores any errors encountered
    const lines = code.split('\n');

    try {
      // Use a suitable parser (e.g., Esprima) for deeper analysis
      // (This example uses basic regex for illustration)
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const varMatches = line.match(/^(var|let|const) (\w+) (.*)$/); // Basic variable declaration regex

        if (varMatches) {
          const [, declarationType, varName, value] = varMatches;
          const scope = selectedScope; // Assuming scope is based on selectedScope

          if (variables.some((v) => v.content === varName)) {
            newErrors.push(`Variable '${varName}' already declared.`);
          } else {
            newVariables.push({ id: Math.random(), content: varName, scope });
          }
        }
      }
    } catch (error) {
      newErrors.push(`Error parsing code: ${error.message}`);
    }

    setVariables(newVariables);
    setErrors(newErrors);
  };

  // Handle code changes and trigger analysis
  useEffect(() => {
    analyzeCode();
  }, [code]); // Rerun analysis on code changes

  // Handle scope selection
  const handleScopeChange = (event) => {
    setSelectedScope(event.target.value);
  };

  // Handle user-defined variables input
  const handleVariableChange = (event, index) => {
    const updatedVariables = [...variables];
    updatedVariables[index].content = event.target.value;
    setVariables(updatedVariables);
  };

  return (
    <div className="App">
      <h1>Scope Match</h1>
      <p>Match the variables to their correct scopes in the code snippet.</p>
      <div className="code-editor">
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </div>
      <div className="controls">
        <select value={selectedScope} onChange={handleScopeChange}>
          {SCOPES.map((scope) => (
            <option key={scope} value={scope}>
              {scope}
            </option>
          ))}
        </select>
        <br />
        {errors.length > 0 && (
          <div className="errors">
            <h4>Errors:</h4>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="drag-and-drop">
        <ul>
          {variables.map((item, index) => (
            <li key={item.id}>
              <input
                type="text"
                value={item.content}
                onChange={(event) => handleVariableChange(event, index)}
              />
            </li>
          ))}
        </ul>
        <br />
        <h4>Drop Zone (Scope Visualization can be added here)</h4>
        <pre dangerouslySetInnerHTML={{ __html: marked(code) }} />
      </div>
    </div>
  );
};

export default App;
