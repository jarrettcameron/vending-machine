import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({
      name: 'Popcorn',
      description: "It's popcorn.",
      price: 1.00,
      code: "A01",
      imgUrl: 'https://plus.unsplash.com/premium_photo-1667425092311-80658bb0c05f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Potato Chips',
      description: "The highest quality potato chips.",
      price: 10.00,
      code: "A02",
      imgUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Oreos',
      description: "It's not popcorn actually, it's oreos.",
      price: 1.00,
      code: "A03",
      imgUrl: 'https://images.unsplash.com/photo-1523484812979-8d03369644f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Expired Gummy Worms',
      description: "Expired in 2006, they are rock solid.",
      price: 2.25,
      code: "A04",
      imgUrl: 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Skittles',
      description: "Ya nasty",
      price: 1.50,
      code: "A05",
      imgUrl: 'https://images.unsplash.com/photo-1600359738432-965e50c4d89e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Mystery Suitcase',
      description: "You're liable for whatever is in this thing.",
      price: 999.999,
      code: "A06",
      imgUrl: 'https://images.unsplash.com/photo-1610244767159-0f9797ff1926?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]

  money = 0

}

export const AppState = createObservableProxy(new ObservableAppState())