import { BondCalculator, PricePerSquareMeter } from "../components/Calculators";
import { Container } from "../components/Container";

export default function buyers() {
  return (
    <Container>
      <div className="pt-10">
        <BondCalculator />
      </div>
    </Container>
  );
}
