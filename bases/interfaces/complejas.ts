(() => {
  // la interfaz principal (padre) va primero y las secundarias van despues
  interface Client {
    name: string;
    age: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Alexa",
    age: 25,
    address: {
      id: 12,
      zip: "inve",
      city: "otawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
