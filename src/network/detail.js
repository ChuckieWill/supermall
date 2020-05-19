import {request} from './request' 


export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.nowPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParam{
  constructor(info, rule){
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables[0]
  }
}