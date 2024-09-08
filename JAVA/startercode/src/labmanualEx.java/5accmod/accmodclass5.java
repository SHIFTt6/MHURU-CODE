class accmodclass5 {
    
        public String name;  // Public field
        private int age;     // Private field
        protected double weight;  // Protected field
    
        public accmodclass5(String name, double weight) {
            this.name = name;
            this.weight = weight;
        }
        
        // Methods
        public void eat() {
            System.out.println(this.name + " is eating" + this.weight);
        }
    
        private void sleep() {
            System.out.println(name + " is sleeping");
        }
    
        protected void bark() {
            System.out.println("Woof!");
        }
    }
