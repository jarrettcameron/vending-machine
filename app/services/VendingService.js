import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"
import { loadState, saveState } from "../utils/Store.js"

class VendingService {

    constructor() {

    }

    addMoney(value) {
        AppState.money += value
        this.saveMoney()
    }

    saveMoney() {
        saveState('money', AppState.money)
    }

    loadMoney() {
        AppState.money = parseFloat(loadState('money', 0))
    }

    attemptItemPurchase(target) {
        let snack = AppState.snacks.find(snack => snack.code == target.code)
        if (AppState.money >= snack.price) {
            AppState.money -= snack.price
        }
    }

}

export const vendingService = new VendingService()