public class Account extends Bank {
    public Account(String accountName, double balance) {
        super(accountName, balance);
    }

    @Override
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            recordTransaction("Deposited " + amount + " into " + accountName);
        } else {
            System.out.println("Invalid deposit amount. Amount must be greater than 0.");
        }
    }

    @Override
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            recordTransaction("Withdrew " + amount + " from " + accountName);
        } else if (amount > balance) {
            System.out.println("Withdrawal amount exceeded account balance.");
        } else {
            System.out.println("Invalid withdrawal amount. Amount must be greater than 0.");
        }
    }

    @Override
    public double getBalance() {
        return balance;
    }
}