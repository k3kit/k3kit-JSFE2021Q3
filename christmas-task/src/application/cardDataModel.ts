 export interface ICardData{
  length?: number | undefined;
  num: number,
  name: string,
  count: number,
  year: number,
  shape: string,
  color:string,
  size: string,
  favorite: boolean
  picture?:string
}
 export interface ICardDto{
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color:string,
  size: string,
  favorite: string
}

 export interface ICardItemData{
  name: string;
  picture: string;

}

type ICardsDto = Record<string, ICardDto>;


 export class CardDataModel{
  data!: Array<ICardData>;

   public  async build(){
     this.data = await this.loadCardData('./data.json');
     return this;
   }
 

   public loadCardData(url:string): Promise<Array<ICardData>>{
     return fetch(url).then(res=>res.json()).then((cardData: ICardsDto)=>{
      const modelData: Array<ICardData> =  Object.keys(cardData).map(it=>{
        const item = cardData[it]
        const record: ICardData = {
          num: Number(item.num),
          name: item.name,
          count: Number(item.count),
          year: Number(item.year),
          shape: item.shape,
          color:item.color,
          size: item.size,
          favorite: Boolean(item.favorite)
        }
        return record
      })
      return modelData;
    })
  }


}
