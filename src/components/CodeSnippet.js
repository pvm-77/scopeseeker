import {CodeBlock, dracula ,github ,tomorrowNight} from "react-code-blocks";


const CodeSnippet = ({code,}) => {
  return (
    <CodeBlock
    text={code}
    language="javascript"
    showLineNumbers='true'
    theme={tomorrowNight}
    
    />
  )
}

export default CodeSnippet
