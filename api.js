const apiHostCovidStats = "https://corona.lmao.ninja/v2/all?yesterday";
const apiHostCovidCountriesStats = "https://corona.lmao.ninja/v2/countries/";

export default {

    getApiHostCovidStats() {
        return apiHostCovidStats.toString();
    },

    
    getApiHostCovidCountriesStats() {
        return apiHostCovidCountriesStats.toString();
    },


}