// @flow

export type PlatsType = {
 name: string,
 finished: boolean,
}

export type OrderType = {
 id: number,
 time: string,
 iconName: string,
 mode: string,
 orderfinished: boolean,
 plats: Array<PlatsType>,
}

export type CommandeType = {
 titre: string,
 iconName: string,
 order: OrderType,
}
