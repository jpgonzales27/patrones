interface RouteStrategy {
  crearRuta(tipoRuta: string, tipoVehiculo: string): string;
}

class ContextRuta {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  mostrarRuta(tipoRuta: string, tipoVehiculo: string): string {
    return this.strategy.crearRuta(tipoRuta, tipoVehiculo);
  }
}

class BiciStrategy implements RouteStrategy {
  crearRuta(tipoRuta: string, tipoVehiculo: string): string {
    if (tipoRuta === "rapida") {
      return `La mejor ruta para un ${tipoVehiculo} es la ciclovia ${tipoRuta}`;
    }
    return `La mejor ruta para un ${tipoVehiculo} es cruzar la avenida ${tipoRuta}`;
  }
}

class BusStrategy implements RouteStrategy {
  crearRuta(tipoRuta: string, tipoVehiculo: string): string {
    if (tipoRuta === "rapida") {
      return `La mejor ruta para un ${tipoVehiculo} es la avenida principal ${tipoRuta}`;
    }
    return `La mejor ruta para un ${tipoVehiculo} es la avenida circunvalacion ${tipoRuta}`;
  }
}

class TaxiStrategy implements RouteStrategy {
  crearRuta(tipoRuta: string, tipoVehiculo: string): string {
    if (tipoRuta === "rapida") {
      return `La mejor ruta para un ${tipoVehiculo} es la avenida principal ${tipoRuta}`;
    }
    return `La mejor ruta para un ${tipoVehiculo} es ingregasar por la calle Font ${tipoRuta}`;
  }
}

const rutas = new ContextRuta(new BiciStrategy());
console.log(rutas.mostrarRuta("rapida", "bici"));
rutas.setStrategy(new TaxiStrategy());
console.log(rutas.mostrarRuta("lenta", "taxi"));
