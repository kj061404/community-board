import './App.css'
import Card from './Card'

function App() {

  return (
    <div className='background'>
      <div className='App'>
        <div className='Header'>
          <img src='./src/assets/awning.png' className='awning'></img>
          <h1>Best Lawrence Restraunts</h1>
        </div>
        <div className='card-container'>
          <Card imgUrl="./src/assets/casbah.jpg" name="The Burger Stand" cuisine="American" menuUrl="https://the-burger-stand.square.site/#most-popular"/>
          <Card imgUrl="./src/assets/715.jpg" name="715 Restraunt" cuisine="Italian" menuUrl="https://715mass.com/dinner/"/>
          <Card imgUrl="./src/assets/biggs.jpg" name="Biggs BBQ" cuisine="American" menuUrl="https://www.biggsribs.com/menus"/>
          <Card imgUrl="./src/assets/bonbon.jpg" name="Bon Bon!" cuisine="Neighborhood bistro" menuUrl="https://www.bonbonlawrence.com/dinner"/>
          <Card imgUrl="./src/assets/cellardoor.jpg" name="Cellar Door" cuisine="Café" menuUrl="https://cellardoorcafe.square.site/?location=11ea8c7701fca21eb0d80cc47a2b63e4"/>
          <Card imgUrl="./src/assets/encore.jpg" name="Encore" cuisine="Asian" menuUrl="https://www.orderencorecafe.com/"/>
          <Card imgUrl="./src/assets/jwilsons.jpg" name="J Wilsons" cuisine="New American" menuUrl="https://jwilsonsrestaurant.com/menu/"/>
          <Card imgUrl="./src/assets/laestrella.jpg" name="La Estrella" cuisine="Mexican" menuUrl="https://laestrellamexicana.com/lawrence-la-estrella-food-menu"/>
          <Card imgUrl="./src/assets/roost.jpg" name="The Roost" cuisine="Breakfast" menuUrl="https://www.920mass.com/breakfast-and-lunch"/>
          <Card imgUrl="./src/assets/Terrebonne.jpg" name="Terrebonne Po' Boys" cuisine="Southern" menuUrl="https://www.terrebonnelfk.com/menu"/>
          <Card imgUrl="./src/assets/thaiDiner.jpg" name="Thai Diner" cuisine="Thai" menuUrl="https://www.thaidinerlawrencekansas.com/menu-1"/>
          <Card imgUrl="./src/assets/lapasadita.jpg" name="La Pasadita" cuisine="Mexican" menuUrl="https://www.lapasaditalawrence.com/order"/>
        </div>
      </div>
    </div>

  );
}

export default App
