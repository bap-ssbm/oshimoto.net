export interface EventData {
  date: string;
  name: string;
  place: string;
  pdf?: string;
  link?: string;
  img: string;
}

export const events: EventData[] = [
  {
    date: '2024年7月1日~7日',
    name: '第70回全日本チンドンコンクール特別写真展示「おかえり、チンドン」',
    place: '富山駅南北自由通路',
    img: '/images/event-img-01.jpg',
    link: 'https://www.instagram.com/p/C5KM9D7OFx2/',
  },
  {
    date: '2023/4/28 - 2023/6/8',
    name: '「新たなる光 生まれ変わったアレグリア」Part 2',
    place: 'LUMIX BASE Tokyo',
    img: '/images/343767623_245795961252416_9039589037470252456_n.jpg',
    pdf: '/pdf/LBTphoto.oshimoto.pdf',
  },
  {
    date: '2023/1/27 - 2023/3/9',
    name: '「新たなる光 生まれ変わったアレグリア」Part 1',
    place: 'LUMIX BASE Tokyo',
    img: '/images/lumix1.jpg',
    pdf: '/pdf/lbtsyasinten.pdf',
  },
  {
    date: '2020/9/4 - 2020/9/15',
    name: 'Death Valley',
    place: 'Hayama SPACE AO',
    img: '/images/118794216_175452254099088_3660761354886132152_n.jpg',
  },
];
