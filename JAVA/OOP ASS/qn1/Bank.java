import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public abstract class Bank {
    protected String accountName;
    protected double balance;

    public Bank(String accountName, double balance) {
        this.accountName = accountName;
        this.balance = balance;
    }

    public abstract void deposit(double amount);
    public abstract void withdraw(double amount);
    public abstract double getBalance();

    protected void recordTransaction(String transaction) {
        try (PrintWriter out = new PrintWriter(new FileWriter("Bank.txt", true))) {
            out.println(transaction);
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
}