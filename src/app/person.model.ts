export interface Person{
   type: 'income' | 'outcome' | 'loan' | 'investment',
   id: string,
   amount: number,
   name:{
       first:string,
       last:string
   },
   company: string,
   email: string,
   phone: string,
   address: string
}