import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor (private http: Http,
                 private recipeService: RecipeService,
                 private auth: AuthService
    ) {}

    private url = 'https://ng-recipe-book-f046d.firebaseio.com/';

    storeRecipes() {
        const token = this.auth.getIdToken();
        return this.http.put(this.url + 'recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        const token = this.auth.getIdToken();

        return this.http.get(this.url + 'recipes.json?auth=' + token)
            // .map(
            //     (response: Response) => {
            //         const recipes: Recipe[] = response.json();
            //         for (let recipe of recipes) {
            //             console.log(recipe);
            //             if (!recipe['ingredients']) {
            //                 recipe['ingredients'] = [];
            //             }
            //         }
            //         return recipes
            //     }
            // )
            .subscribe(
                (response) => {
                    const recipes: Recipe[] = response.json();
                    this.recipeService.setRecipes(recipes)
                }
            )
    }
}