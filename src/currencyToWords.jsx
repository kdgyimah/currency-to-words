import {
  oneDigit,
  twoDigits,
  threeDigits,
  GetNumericGroupTitle,
} from "./converter.js";

const convertToWords = (currency) => {
  if (currency != 0 && !currency) return "invalid input";

  let numericGroup = 1; // thousands , millions
  let result = "";

  try {
    while (currency != 0) {
      let tempResult = "";
      let remain = currency % 1000;

      if (remain < 10) tempResult = oneDigit(remain);
      else if (remain < 100) tempResult = twoDigits(remain);
      else tempResult = threeDigits(remain);

      if (tempResult)
        //for numbers like 1,000,001 that thousands part is empty
        result = `${tempResult} ${GetNumericGroupTitle(
          numericGroup,
        )} ${result}`.trim();

      currency = Math.floor(currency / 1000);
      numericGroup++;
    }
    return result;
  } catch (e) {
    throw new Error("Exception in parsing");
  }
};

const completeBigCurrencyWords = (amount, amountWord = "Ghana Cedi") => {
  if (!amount) amount = "zero";
  return amount + (amount === "one" ? ` ${amountWord}` : ` ${amountWord}s`);
};

const completeLowCurrencyWords = (amount, amountWord = "pesewa") => {
  if (!amount) return "";
  return (
    `, and ${amount} ` + (amount === "one" ? `${amountWord}` : `${amountWord}s`)
  );
};

export const CurrencyToWords = (
  value,
  bigCurrency = "Ghana Cedi",
  lowCurrency = "pesewa",
) => {
  const currency = (value + "").replace(" ", "").split(".");

  const bigCurrencyInWords = convertToWords(Number.parseInt(currency[0]));
  const lowCurrencyInWords =
    currency.length == 2
      ? convertToWords(
          Number.parseInt(
            currency[1].length == 1 ? `${currency[1]}0` : currency[1],
          ),
        )
      : "";

  return (
    completeBigCurrencyWords(bigCurrencyInWords, bigCurrency) +
    completeLowCurrencyWords(lowCurrencyInWords, lowCurrency)
  );
};

export default CurrencyToWords;
