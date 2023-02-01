import { useState } from "react";
import { Container } from "./Container";
import { bondRepayment } from "../lib/bond-calculator";
import classNames from "classnames";
import { Button } from "./Button";

export const BondCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [TotalPriceInYears, setTotalPriceInYears] = useState("");
  const [bondAnswer, setBondAnswer] = useState(0);

  const [touchedPrincipal, setTouchedPrincipal] = useState(false);
  const [touchedTotalPrice, setTouchedTotalPrice] = useState(false);
  const [touchedInterest, setTouchedInterest] = useState(false);

  interface ICalcProps {
    principal: string;
    annualInterestRate: string;
    TotalPriceInYears: string;
  }

  function formatMoney(num: number): string {
    return num.toLocaleString("en-US");
  }

  const CalculateBond = ({
    principal,
    annualInterestRate,
    TotalPriceInYears,
  }: ICalcProps) => {
    const bond = bondRepayment(
      +principal.replace(/[^0-9.]+/g, ""),
      +annualInterestRate.replace(/[^0-9.]+/g, ""),
      +TotalPriceInYears.replace(/[^0-9.]+/g, "")
    );

    setBondAnswer(bond);
  };

  return (
    <Container>
      <div className="max-w-[600px] mx-auto flex flex-col space-y-8 [&_div]:rounded-md [&_div]:text-md">
        <p className="text-2xl text-center">
          Calculate Your Monthly Bond Payments
        </p>
        <div className="space-y-6">
          <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
            Principal
            <input
              id="principal"
              required
              onBlur={() => setTouchedPrincipal(true)}
              value={principal as string}
              placeholder="R 1, 250, 000"
              onChange={(e) => setPrincipal(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedPrincipal
                  ? principal == ""
                    ? "border-black border-2"
                    : "border-primary-text"
                  : null
              )}
            />
          </div>
          <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
            <label htmlFor="annualInterestRate">Annual Interest Rate</label>
            <input
              id="annualInterestRate"
              required
              onBlur={() => setTouchedInterest(true)}
              value={annualInterestRate as string}
              placeholder="4%"
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedInterest
                  ? annualInterestRate == ""
                    ? "border-black  border-2"
                    : "border-primary-text"
                  : null
              )}
            />
          </div>
          <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
            <label htmlFor="TermToMaturity">Term to Maturity</label>
            <input
              id="TermToMaturity"
              required
              onBlur={() => setTouchedTotalPrice(true)}
              value={TotalPriceInYears as string}
              placeholder="20"
              onChange={(e) => setTotalPriceInYears(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedTotalPrice
                  ? TotalPriceInYears == ""
                    ? "border-black  border-2"
                    : "border-primary-text"
                  : null
              )}
            />
          </div>
        </div>
        {
          <div className="flex space-x-2">
            <p className="text-md">Monthly Repayment:</p>
            <p className="text-lg font-bold">
              R {bondAnswer != 0 && formatMoney(+bondAnswer.toFixed(2))}
            </p>
          </div>
        }
        <Button
          className="text-md w-auto mx-auto text-white"
          onClick={() =>
            CalculateBond({
              principal,
              annualInterestRate,
              TotalPriceInYears,
            })
          }
        >
          Calculate
        </Button>
      </div>
    </Container>
  );
};

//TODO Area Calculator

export const PricePerSquareMeter = () => {
  const [lotSize, setLotSize] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [answer, setAnswer] = useState(0);

  const [touchedLotSize, setLotSizeTouched] = useState(false);
  const [touchedPropertyValue, setTouchedPropertyValue] = useState(false);

  function pricePerSquareMeter({
    propertyValue,
    lotSize,
  }: {
    propertyValue: string;
    lotSize: string;
  }) {
    let answer =
      +propertyValue.replace(/[^0-9.]+/g, "") /
      +lotSize.replace(/[^0-9.]+/g, "");

    setAnswer(answer);
  }

  function formatMoney(num: number): string {
    return num.toLocaleString("en-US");
  }

  return (
    <Container>
      <div className="max-w-[600px] mx-auto flex flex-col space-y-8 [&_div]:rounded-md [&_div]:text-md">
        <p className="text-2xl text-center">Calculate the Price per m²</p>
        <div className="space-y-6">
          <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
            <label htmlFor="property-area">Lot Size in m2</label>
            <input
              id="property-area"
              required
              onBlur={() => setLotSizeTouched(true)}
              value={lotSize as string}
              placeholder="1000m2"
              onChange={(e) => setLotSize(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedLotSize && lotSize === ""
                  ? "border-black  border-2"
                  : "border-primary-text"
              )}
            />
          </div>
          <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
            <label htmlFor="Value">Property Value</label>
            <input
              id="Value"
              required
              onBlur={() => setTouchedPropertyValue(true)}
              value={propertyValue as string}
              placeholder="R 800 000"
              onChange={(e) => setPropertyValue(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedPropertyValue
                  ? propertyValue == ""
                    ? "border-black  border-2"
                    : "border-primary-text"
                  : null
              )}
            />
          </div>
        </div>
        {answer != 0 && (
          <div className="flex space-x-2">
            <p className="text-md">Price Per m2:</p>
            <p className="text-lg font-bold">
              R {answer != 0 && formatMoney(+answer.toFixed(2))}
            </p>
          </div>
        )}
        <Button
          className="text-md w-auto mx-auto text-white"
          onClick={() => pricePerSquareMeter({ propertyValue, lotSize })}
        >
          Calculate
        </Button>
      </div>
    </Container>
  );
};
