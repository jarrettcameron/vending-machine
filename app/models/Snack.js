export class Snack {
    /**
     * @param {{name, description, price, code, imgUrl}} data
     */
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.code = data.code
        this.imgUrl = data.imgUrl
        this.description = data.description
    }

    get snackHtml() {
        return `<div class="col-md-4 col-6">
        <div class="card bg-black text-light">
            <img src="${this.imgUrl}"
                alt="" class="card-img-top">
            <span class="card-title px-3 fs-4 fw-bold d-flex justify-content-between">
                <div>${this.name}</div>
                <div>${this.code}</div>
            </span>
            <div class="card-body pt-0 d-flex justify-content-between">
                <div>
                    ${this.description}<br>
                    Price: $${this.price.toFixed(2)}
                </div>
                <!--<button class="btn btn-primary px-4" onclick="app.SnacksController.buySnack('${this.name}')">Buy</button>-->
            </div>
        </div>
    </div>`
    }

}