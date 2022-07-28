import { every } from "lodash";
import { supplierItem } from "./data";
import "./styles.css";

const canMarkSupplierItemAsActive = (article) => {
  const { units } = article;

  const unitValues = [
    units.order.price,
    units.order.weight,
    units.billing.price,
    units.billing.weight,
    units.stock.price,
    units.stock.weight,
    article.pricePerKg
  ];

  // if every article numeric details is different than 0 and not null
  const hasUnitValue = every(
    unitValues,
    (value) => value !== 0 && value !== null
  );
  const hasSite = !!article.site;
  const hasStockZone = !!article.stockZone;

  const canActivate = every(
    [hasUnitValue, hasSite, hasStockZone],
    (val) => val === true
  );

  return canActivate;
};

console.log(canMarkSupplierItemAsActive(supplierItem));

const App = () => {
  return (
    <div className="App">
      <h3>User Story</h3>
      <p>
        Je souhaite pouvoir mettre un article actif uniquement lorsqu'il est
        entièrement paramétré.{" "}
      </p>

      <h3>Solution</h3>
      <p>
        Afin de passer un supplierItem en Actif (isActive = true), il faut
        obliger la présence des champs suivants en base et que ceux-ci ne soient
        pas null ou =0 pour les valeurs numériques :
      </p>

      <ul>
        <li>
          <code>units.order.weight</code>
        </li>
        <li>
          <code>units.order.price</code>
        </li>
        <li>
          <code>units.billing.price</code>
        </li>
        <li>
          <code>units.billing.weight</code>
        </li>
        <li>
          <code>units.stock.price</code>
        </li>
        <li>
          <code>units.stock.weight</code>
        </li>
        <li>
          <code>pricePerKg</code>
        </li>
        <li>
          <code>site</code>
        </li>
        <li>
          <code>stockZone</code>
        </li>
      </ul>

      <h3>See the result in theh console below</h3>
    </div>
  );
};

export default App;
