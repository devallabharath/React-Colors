import Router from './routes'
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/");

const App:React.FC = () => <div className="App"><Router /></div>

export default App
