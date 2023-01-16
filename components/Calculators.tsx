import { useState } from "react";
import { Container } from "./Container";
import { bondRepayment } from "../lib/bond-calculator";
import classNames from "classnames";
import { Button } from "./Button";

export const BondCalculator = () => {
  const [Area, setArea] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [TotalPriceInYears, setTotalPriceInYears] = useState("");
  const [bondAnswer, setBondAnswer] = useState(0);

  const [touchedArea, setTouchedArea] = useState(false);
  const [touchedTotalPrice, setTouchedTotalPrice] = useState(false);
  const [touchedInterest, setTouchedInterest] = useState(false);

  interface ICalcProps {
    Area: string;
    annualInterestRate: string;
    TotalPriceInYears: string;
  }

  const CalculateBond = ({
    Area,
    annualInterestRate,
    TotalPriceInYears,
  }: ICalcProps) => {
    const bond = bondRepayment(
      +Area.replace(/[^0-9.]+/g, ""),
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
            <label htmlFor="Area">Area</label>
            <input
              id="Area"
              required
              onBlur={() => setTouchedArea(true)}
              value={Area as string}
              placeholder="R 1, 250, 000"
              onChange={(e) => setArea(e.target.value)}
              className={classNames(
                "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
                touchedArea
                  ? Area == ""
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
            <label htmlFor="TotalPriceInYears">TotalPrice In Years</label>
            <input
              id="TotalPriceInYears"
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
        {bondAnswer != 0 && (
          <div className="flex space-x-2">
            <p className="text-md">Monthly Repayment:</p>
            <p className="text-lg font-bold">R {bondAnswer.toFixed(2)}</p>
          </div>
        )}
        <Button
          className="text-md w-auto mx-auto text-white"
          onClick={() =>
            CalculateBond({
              Area,
              annualInterestRate,
              TotalPriceInYears,
            })
          }
          href={""}
        >
          Calculate
        </Button>
      </div>
    </Container>
  );
};

//TODO Area Calculator

// export const PricePerSquareMeter = () => {
//   const [propertyArea, setPropertyArea] = useState(0);
//   const [propertyTotalPrice, setPropertyTotalPrice] = useState(0);
//   const [answer, setAnswer] = useState(0);

//   const [touchedArea, setTouchedArea] = useState(false);
//   const [touchedPropertyTotal, setTouchedPropertyTotal] = useState(false);

//   const pricePerSquareMeter = totalPrice / area;

//   return (
//     <Container>
//       <div className="max-w-[600px] mx-auto flex flex-col space-y-8 [&_div]:rounded-md [&_div]:text-md">
//         <p className="text-2xl text-center">Calculate the Price per m2</p>
//         <div className="space-y-6">
//           <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
//             <label htmlFor="property-area">Property Area</label>
//             <input
//               id="property-area"
//               required
//               onBlur={() => setTouchedArea(true)}
//               value={propertyArea as number}
//               placeholder="1000"
//               onChange={(e) => setPropertyArea(e.target.valueAsNumber)}
//               className={classNames(
//                 "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
//                 touchedArea && propertyArea === 0
//                   ? "border-black  border-2"
//                   : "border-primary-text"
//               )}
//             />
//           </div>
//           <div className="flex items-start  justify-center flex-col space-y-1 text-dark-gray">
//             <label htmlFor="TotalPriceInYears">TotalPrice In Years</label>
//             <input
//               id="TotalPriceInYears"
//               required
//               onBlur={() => setTouchedPropertyTotal(true)}
//               value={TotalPriceInYears as number}
//               placeholder="20"
//               onChange={(e) => setPropertyTotalPrice(e.target.value)}
//               className={classNames(
//                 "p-3 rounded-xl w-full text-[rgb(0,0,0)]",
//                 touchedTotalPrice
//                   ? TotalPriceInYears == ""
//                     ? "border-black  border-2"
//                     : "border-primary-text"
//                   : null
//               )}
//             />
//           </div>
//         </div>
//         {bondAnswer != 0 && (
//           <div className="flex space-x-2">
//             <p className="text-md">Monthly Repayment:</p>
//             <p className="text-lg font-bold">R {bondAnswer.toFixed(2)}</p>
//           </div>
//         )}
//         <Button
//           className="text-md w-auto mx-auto text-white"
//           onClick={() =>
//             CalculateBond({
//               Area,
//               annualInterestRate,
//               TotalPriceInYears,
//             })
//           }
//           href={""}
//         >
//           Calculate
//         </Button>
//       </div>
//     </Container>
//   );
// };
