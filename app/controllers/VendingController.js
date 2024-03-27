import { AppState } from "../AppState.js";
import { vendingService } from "../services/VendingService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";

export class VendingController {
    constructor() {
        this.drawSnacks()
        AppState.on('money', this.drawMoney)
        vendingService.loadMoney()

        AppState.on('money', vendingService.saveMoney)
    }

    drawSnacks() {
        let snacksContent = ''
        AppState.snacks.forEach(snack => {
            snacksContent += snack.snackHtml
        })
        setHTML('snacks-container', snacksContent)
    }

    drawMoney() {
        setText('money', `Money: $${AppState.money.toFixed(2)}`)
    }

    addQuarter() {
        vendingService.addMoney(0.25)
    }

    addDollar() {
        vendingService.addMoney(1.00)
    }

    purchaseItem() {
        event.preventDefault()
        vendingService.attemptItemPurchase(getFormData(event.target))
        // @ts-ignore
        event.target.reset()
    }
}