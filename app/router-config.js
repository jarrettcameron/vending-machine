import { VendingController } from "./controllers/VendingController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [VendingController],
    view: 'app/views/MainView.html'
  }
])