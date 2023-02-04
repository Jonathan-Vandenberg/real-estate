import {
  BondCalculator,
  PricePerSquareMeter,
} from "../components/util-features/Calculators";
import { Container } from "../components/global/Container";

export default function buyers() {
  return (
    <Container>
      <div className="pt-10">
        <BondCalculator />
      </div>
    </Container>
  );
}
