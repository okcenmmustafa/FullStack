import { dataSource } from "../Components/Table";
import { Image} from "antd";
import TableComp from "../Components/Table";
import currency from "currency.js";
export default function CountryInfoFunc(requestedData,title,id) {
    let countryInfo =requestedData;
    if (!countryInfo.lengh) dataSource.length = 0;
    if(id==1)
      countryInfo.map((insideArray, i) => {
        insideArray.map((country, j) => {
  
          //calculate population
          let population = currency(country.population, {
            precision: 0,
            symbol: "",
          }).format();
  
          //defination flag as Image from url
          let flag = <Image width={100} src={country.flag} />;
          dataSource.push({
            key: `${i}${j}`,
            flag: flag,
            name: country.name, // sample result = "malta"
            nativeName:country.nativeName, // sample result = "Malta"
            languages:country.languages.map((language,i)=>i==0?`${language.name}`:`, ${language.name}`), // sample result = "Maltese, English"
            capital: country.capital,  // sample result = "Valetta"
            currencies:country.currencies.map((currency,i)=>i==0?`${currency.name}`:`, ${currency.name}`),  // sample result = "Euro"
            callingCodes:`+${country.callingCodes}`,  // sample result = "+356"
            region: country.region, // sample result = "Europe"
            population: population, // sample result = "425,384"
          });
        });
      });
    else
    countryInfo.map((country, i) => {
     //calculate population
     let population = currency(country.population, {
      precision: 0,
      symbol: "",
    }).format();

    //defination flag as Image from url
    let flag = <Image width={100} src={country.flag} />;
      dataSource.push({
        key: `${i}`,
        flag: flag,
        name: country.name, // sample result = "malta"
        nativeName:country.nativeName, // sample result = "Malta"
        languages:country.languages.map((language,i)=>i==0?`${language.name}`:`, ${language.name}`), // sample result = "Maltese, English"
        capital: country.capital,  // sample result = "Valetta"
        currencies:country.currencies.map((currency,i)=>i==0?`${currency.name}`:`, ${currency.name}`),  // sample result = "Euro"
        callingCodes:`+${country.callingCodes}`,  // sample result = "+356"
        region: country.region, // sample result = "Europe"
        population: population, // sample result = "425,384"
      });
    });
    return (
      <>
        <TableComp
          title={()=>title}
          id={id}
          getColumnSearchProps={"name"}
          dataSource={dataSource}
        />
      </>
    );
  }