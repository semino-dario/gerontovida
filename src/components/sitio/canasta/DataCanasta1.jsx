const randomRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

class Categorias {
  constructor(vivienda, transporte, vestimenta, recreacion, servicios, alimentos, limpieza, medicamentos) {
    this.vivienda = vivienda
    this.transporte = transporte
    this.vestimenta = vestimenta
    this.recreacion = recreacion
    this.servicios = servicios
    this.alimentos = alimentos
    this.limplieza = limpieza
    this.medicamentos = medicamentos

  }
}

const aleatoria = () => {
  return (
    new Categorias(randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500), randomRange(1000, 2500))
  )
}

class NuevaCanasta {
  constructor(id, periodo, canasta, minima, categorias) {

    this.id = id
    this.periodo = periodo
    this.canasta = canasta
    this.minima = minima
    this.categorias = categorias
  }

}

const mayo2010 = new NuevaCanasta(0, 'Mayo-2010', 2053, randomRange(1000, 1500), aleatoria());
const diciembre2010 = new NuevaCanasta(1, 'Diciembre-2010', 2458, randomRange(1000, 1500), aleatoria());
const mayo2011 = new NuevaCanasta(2, 'Mayo-2011', 2691, randomRange(1000, 1500), aleatoria());
const noviembre2011 = new NuevaCanasta(3, 'Noviembre-2011', 3059, randomRange(1000, 1500), aleatoria());
const mayo2012 = new NuevaCanasta(4, 'Mayo-2012', 3519, randomRange(1000, 1500), aleatoria());
const diciembre2012 = new NuevaCanasta(5, 'Diciembre-2012', 3973, randomRange(1000, 1500), aleatoria());
const mayo2013 = new NuevaCanasta(6, 'Mayo-2013', 4298, randomRange(1000, 1500), aleatoria());
const diciembre2013 = new NuevaCanasta(7, 'Diciembre-2013', 4885, randomRange(1000, 1500), aleatoria());
const mayo2014 = new NuevaCanasta(8, 'Mayo-2014', 5677, randomRange(1000, 1500), aleatoria());
const noviembre2014 = new NuevaCanasta(9, 'Noviembre-2014', 6720, randomRange(1000, 1500), aleatoria());
const mayo2015 = new NuevaCanasta(10, 'Mayo-2015', 7608, randomRange(3000, 5000), aleatoria());
const noviembre2015 = new NuevaCanasta(11, 'Noviembre-2015', 8611, randomRange(5000, 6000), aleatoria());
const abril2016 = new NuevaCanasta(12, 'Abril-2016', 11031, randomRange(5000, 10000), aleatoria());
const agosto2016 = new NuevaCanasta(13, 'Agosto-2016', 13240, randomRange(5000, 10000), aleatoria());
const diciembre2016 = new NuevaCanasta(14, 'Diciembre-2016', 14062, randomRange(5000, 10000), aleatoria());
const mayo2017 = new NuevaCanasta(15, 'Mayo-2017', 16134, randomRange(5000, 1000), aleatoria());
const noviembre2017 = new NuevaCanasta(16, 'Noviembre-2017', 17523, randomRange(5000, 10000), aleatoria());
const abril2018 = new NuevaCanasta(17, 'Abril-2018', 19290, randomRange(5000, 10000), aleatoria());
const agosto2018 = new NuevaCanasta(18, 'Agosto-2018', 21127, randomRange(5000, 10000), aleatoria());
const diciembre2018 = new NuevaCanasta(19, 'Diciembre-2018', 26043, randomRange(10000, 15000), aleatoria());
const abril2019 = new NuevaCanasta(20, 'Abril-2019', 30524, randomRange(15000, 20000), aleatoria());
const octubre2019 = new NuevaCanasta(21, 'Octubre-2019', 37815, randomRange(15000, 20000), aleatoria());
const abril2020 = new NuevaCanasta(22, 'Abril-2020', 45020, randomRange(20000, 40000), aleatoria());
const octubre2020 = new NuevaCanasta(23, 'Octubre-2020', 49614, randomRange(20000, 40000), aleatoria());
const abril2021 = new NuevaCanasta(24, 'Abril-2021', 64039, randomRange(20000, 40000), aleatoria());
const octubre2021 = new NuevaCanasta(25, 'Octubre-2021', 75505, randomRange(20000, 40000), aleatoria());
const abril2022 = new NuevaCanasta(26, 'Abril-2022', 97238, 32630, new Categorias(27320, 5500, 6000, 3520, 7350, 19420, 7941, 20187));
const octubre2022 = new NuevaCanasta(27, 'Octubre-2022', 151438, 43000, new Categorias(49374, 8000, 9700, 5960, 10670, 29912, 12849, 25013));


export const DataCanasta9 = []

DataCanasta9.push(mayo2010, diciembre2010, mayo2011, noviembre2011, mayo2012, diciembre2012, mayo2013, diciembre2013, mayo2014, noviembre2014, mayo2015, noviembre2015, abril2016, agosto2016, diciembre2016, mayo2017, noviembre2017, abril2018, agosto2018, diciembre2018, abril2019, octubre2019, abril2020, octubre2020, abril2021, octubre2021, abril2022, octubre2022);


