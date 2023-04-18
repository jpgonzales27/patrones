interface Strategy {
  loggin(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.loggin(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  loggin(user: string, password: string): boolean {
    console.log("nos dirigiamos a la BD");
    if (user === "admin" && password === "123456") {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  loggin(user: string, password: string): boolean {
    console.log("nos dirigiamos a un servicio de autentificacion");
    if (user === "admin" && password === "123456") {
      return true;
    }
    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  loggin(user: string, password: string): boolean {
    console.log("nos dirigiamos autentificarnos con Google");
    if (user === "admin" && password === "123456") {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login("admin", "123456");
auth.setStrategy(new LoginServiceStrategy());
auth.login("admin", "123456");
auth.setStrategy(new LoginGoogleStrategy());
auth.login("admin", "123456");
