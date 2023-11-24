Mateo Calderón Rincón 
202213589
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;

  constructor() { }

  ngOnInit() {
    this.series = this.getSerieList();
    this.calcularPromedio();
  }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  calcularPromedio() {
    let totalTemporadas = 0;

    this.series.forEach((serie) => {
      totalTemporadas += serie.seasons;
    });

    if (this.series.length > 0) {
      this.promedio = totalTemporadas / this.series.length;
    }
  }
}