var visa_year = "visa-year.vl.json";
var industry_year = "industry-year.vl.json";
var top_industry = "top-industry.vl.json";

vegaEmbed("#visa_year", visa_year).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#industry_year", industry_year).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);

   vegaEmbed("#top_industry", top_industry).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);



