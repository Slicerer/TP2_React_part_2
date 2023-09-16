import config from "../../src/config";

class MealService {
    constructor() {}

    toutLesCategories = "categories.php";
    choixDeMeneu = "filter.php?c=";
    choixFinal = "lookup.php?i=";
    baseUrl = config.baseUrl;

    async getAllFoods() {    
        const res = await fetch(`${this.baseUrl}${this.toutLesCategories}`);
        if (!res.ok) throw new Error();
        return await res.json();
    };

 

    async getFood(menuCate) {          
        const res = await fetch(`${this.baseUrl}${this.choixDeMeneu}${menuCate}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }

    async getRepas(id) {                        
        const res = await fetch(`${this.baseUrl}${this.choixFinal}${id}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }





}

export default MealService;