import Transaction from '../models/Transaction';


interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ResponseTransactionsDTO {
  transactions: Transaction[];
  balance: Balance;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}


class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): ResponseTransactionsDTO {
    const transactions = this.transactions;
 
    const balance = this.getBalance();
    
    return { transactions, balance }
  }

  public getBalance(): Balance {

    const balance: Balance = this.transactions.reduce((acc, { type, value }) => (
      {
        ...acc,
        [type]: acc[type] += value,
        total: type === 'income' ? acc.total += value : acc.total -= value
      }
    ), {
      "income": 0,
      "outcome": 0,
      "total": 0
    })
    
    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type })

    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository;
