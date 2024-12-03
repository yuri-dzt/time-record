export enum Situation {
  IN = "IN",
  OUT = "OUT"
}

export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  situation: Situation,
  company_id: string
}