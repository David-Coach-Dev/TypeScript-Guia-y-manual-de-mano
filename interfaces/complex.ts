(()=>{
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string):string;
  }
  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  const client: Client = {
    name: 'David',
    age: 40,
    address: {
      id: 125,
      zip: 'ky2 sud',
      city: 'Ottawa'
    },
    getFullAddress(id:string):string {
      return `${this.address.city}, ${this.address.zip}`;
    }
  }
  const client2: Client = {
    name: 'Maria',
    age: 30,
    address: {
      id: 120,
      city: 'Toronto',
      zip: 'K2S U2A',
    },
    getFullAddress(id:string):string {
      return `${this.address.city}, ${this.address.zip}`;
    }
  }
})()