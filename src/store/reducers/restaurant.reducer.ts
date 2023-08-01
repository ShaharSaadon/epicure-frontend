import { Dish, Restaurant } from "../../Assets/data";
import {
    SET_CURRENT_RESTAURANT,
    SET_CURRENT_DISH,
    SET_DISH_TO_ORDER,
} from "../actions/restaurant.actions";
import {
    SetCurrentRestaurantAction,
    SetCurrentDishAction,
} from "../actions/restaurant.actions";
interface RestaurantState {
    currentRestaurant: Restaurant | null;
    currentDish: Dish | null;
    // dishToOrder: DishOrder | null;
}

const INITIAL_STATE: RestaurantState = {
    currentRestaurant: null,
    currentDish: null,
    // dishToOrder: null,
};

type ModalActions =
    | ReturnType<typeof toggleModal>
    // | OpenModalAction
    | SetCurrentRestaurantAction
    | SetCurrentDishAction;
// | SetDishToOrderAction;

export function restaurantReducer(
    state = INITIAL_STATE,
    action: ModalActions
): RestaurantState {
    switch (action.type) {
        case SET_CURRENT_RESTAURANT:
            return {
                ...state,
                currentRestaurant: action.payload,
            };
        case SET_CURRENT_DISH:
            return {
                ...state,
                currentDish: action.payload,
            };
        // case SET_DISH_TO_ORDER:
        //     return {
        //         ...state,
        //         dishToOrder: action.payload,
        //     };
        default:
            return state;
    }
}
