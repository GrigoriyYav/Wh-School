export interface IChartData {
  data : IChart[]
}

export interface IChart {
  dt_date : string,
  office_id : number,
  office_name : string,
  qty_shk: number,
  qty_shk_cat1: number,
  qty_shk_cat2: number,
  qty_shk_cat3: number,
  qty_shk_cat4: number,

}


/*
{"data":[
    {"dt_date":"2022-07-12","office_id":507,"office_name":"Коледино","qty_shk":19773,"qty_shk_cat1":242,"qty_shk_cat2":110,"qty_shk_cat3":14297,"qty_shk_cat4":5128},
    {"dt_date":"2022-07-11","office_id":507,"office_name":"Коледино","qty_shk":25959,"qty_shk_cat1":468,"qty_shk_cat2":189,"qty_shk_cat3":18449,"qty_shk_cat4":6855},
    {"dt_date":"2022-07-10","office_id":507,"office_name":"Коледино","qty_shk":21591,"qty_shk_cat1":294,"qty_shk_cat2":96,"qty_shk_cat3":15450,"qty_shk_cat4":5751},
    {"dt_date":"2022-07-09","office_id":507,"office_name":"Коледино","qty_shk":20193,"qty_shk_cat1":326,"qty_shk_cat2":101,"qty_shk_cat3":14760,"qty_shk_cat4":5006},
    {"dt_date":"2022-07-08","office_id":507,"office_name":"Коледино","qty_shk":21530,"qty_shk_cat1":491,"qty_shk_cat2":101,"qty_shk_cat3":15137,"qty_shk_cat4":5802},
    {"dt_date":"2022-07-07","office_id":507,"office_name":"Коледино","qty_shk":22832,"qty_shk_cat1":304,"qty_shk_cat2":101,"qty_shk_cat3":16325,"qty_shk_cat4":6102},
    {"dt_date":"2022-07-06","office_id":507,"office_name":"Коледино","qty_shk":22954,"qty_shk_cat1":321,"qty_shk_cat2":107,"qty_shk_cat3":16589,"qty_shk_cat4":5938},
    {"dt_date":"2022-07-05","office_id":507,"office_name":"Коледино","qty_shk":23505,"qty_shk_cat1":336,"qty_shk_cat2":109,"qty_shk_cat3":16588,"qty_shk_cat4":6475}
  ]
}
*/