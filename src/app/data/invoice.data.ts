import { Invoice } from "../models/invoice";

export const invoiceData: any = {

  id: 1,
  name: 'Componentes de PC',
  client: {
    name: 'Exequiel',
    lastname: 'Carrizo',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'Groove Street',
      number: 33,
    }
  },
  company: {
    name: 'New Age',
    fiscalNumber: 153215,
  },
  items: [
    {
      id: 1,
      product: 'CPU Ryzen 7',
      price: 699,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Red Dragon Teclado Mecanico',
      price: 199,
      quantity: 2
    },
    {
      id: 3,
      product: 'Monitor Samsung 24 Pulgadas',
      price: 799,
      quantity: 3
    },
  ]
}
