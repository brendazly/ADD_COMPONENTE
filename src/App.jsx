import'./App.css'
import HelloWorld from './components/HelloWord'

function App() {
const url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicelembrancinhas.com.br%2Fmoranguinho-baby-01-1-a-10un%3Fsrsltid%3DAfmBOorw-sIj7riNWbGh3eoj0habX4R2PzVTw5a9IGA5ZC03XU_LP6OY&psig=AOvVaw2s6A-2jdmOoo0knECvN4Tl&ust=1754529411098000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDN0MWB9Y4DFQAAAAAdAAAAABAE'
return (
<div className="App">
<h1>Olá Pessoas </h1>
<p>Meu Primeiro Site</p>
<HelloWorld/>
<img src={url}/>
</div>

)
}

export default App