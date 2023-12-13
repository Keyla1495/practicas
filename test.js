const { expect } = require('chai');
const {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje
} = require('./index'); 

// Información de prueba // NO TOCAR ESTE ARRAY
const autosPrueba = [
  { id: 1, marca: "Toyota", modelo: "Camry", kilometraje: 50000, precio: 105000 },
  { id: 2, marca: "Honda", modelo: "Civic", kilometraje: 60000, precio: 22000 },
  { id: 3, marca: "Ford", modelo: "Focus", kilometraje: 45000, precio: 20000 },
  { id: 4, marca: "Chevrolet", modelo: "Malibu", kilometraje: 70000, precio: 28000 },
  { id: 5, marca: "Nissan", modelo: "Altima", kilometraje: 55000, precio: 23000 },
  { id: 6, marca: "Hyundai", modelo: "Elantra", kilometraje: 40000, precio: 19000 },
  { id: 7, marca: "Kia", modelo: "Optima", kilometraje: 65000, precio: 26000 },
  { id: 8, marca: "Mazda", modelo: "Mazda3", kilometraje: 48000, precio: 21000 },
  { id: 9, marca: "Volkswagen", modelo: "Jetta", kilometraje: 52000, precio: 24000 },
  { id: 10, marca: "Subaru", modelo: "Impreza", kilometraje: 58000, precio: 27000 }
];


describe('Concesionaria de Autos', function () {
  xit('debería mostrar la información de los autos', function () {
    const resultado = mostrarInformacionAutos(autosPrueba);
    expect(resultado).to.be.equal(autosPrueba);
  });

  xit('debería filtrar autos por marca', function () {
    const resultado = filtrarPorMarca(autosPrueba, 'Toyota');
    expect(resultado).to.have.lengthOf(1);
    expect(resultado[0].marca).to.equal('Toyota');
  });

 xit('debería calcular el precio promedio de los autos', function () {
    const resultado = calcularPrecioPromedio(autosPrueba);
    expect(resultado).to.equal(31500); 
  });

 it('debería encontrar el auto más caro', function () {
    const resultado = encontrarAutoMasCaro(autosPrueba);
    expect(resultado.marca).to.equal('Toyota');
  });

 xit('debería incrementar el precio de todos los autos en un 10%', function () {
    const aumentados = incrementarPrecio(autosPrueba);
    const preciosOriginales = autosPrueba.map(auto => auto.precio);
    expect(aumentados).to.deep.equal(preciosOriginales.map(precio => precio * 1.10));
  });

 xit('debería encontrar el auto con el menor kilometraje', function () {
    const resultado = encontrarAutoMenorKilometraje(autosPrueba);
    expect(resultado.kilometraje).to.equal(40000);
  });

  xit('debería ordenar autos por precio de menor a mayor', function () {
    const preciosOrdenados = ordenarPorPrecio([...autosPrueba]);
    expect(preciosOrdenados).to.deep.equal([19000, 20000, 21000, 22000, 23000, 24000, 26000, 27000, 28000, 105000 ]);
  });

 xit('debería obtener marcas únicas de los autos', function () {
    const resultado = obtenerMarcasUnicas(autosPrueba);
    expect(resultado).to.deep.equal(['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'Mazda', 'Volkswagen', 'Subaru']);
  });

 xit('debería filtrar autos por rango de precios', function () {
    const resultado = filtrarPorRangoDePrecio(autosPrueba, 22000, 25000);
    expect(resultado).to.have.lengthOf(3);
    expect(resultado[0].precio).to.equal(22000);
    expect(resultado[2].precio).to.equal(24000);
  });

 xit('debería calcular el total de kilometraje de todos los autos', function () {
    const resultado = calcularTotalKilometraje(autosPrueba);
    expect(resultado).to.equal(543000);
  });
});
