enum Action {
  ENTER = "ENTER",
  LEAVE = "LEAVE"
}

export interface Register {
  id: string,
  time: number,
  action: Action,
  user_id: string
}