import HomepageIMG from "../components/homepageImg/HomepageIMG"



export default function page() {
  return (
    <main className='overflow-x-hidden z-[1] flex flex-col gap-10 md:gap-24'>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/qBk5E0g8ma7aDORpifeZeR9fgjQum82rwSl3ja9fT9stWbi-4Tr9xPePphlxa_bChKpBi-Rxy2Ddkt8OfteKXRUQjW1htD37jQMcq4lgnBZkyUGr1oJv1ogYnO9t4Z10a8BPGJblMA=w2400'
        linkTo='/portfolio/portraits' >PORTRAITS</HomepageIMG>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/FjN6QljUzQy3yXBFIjaoYUCN-C3g52kdPscqae9PlL6FMyFZokn3Gj2sHV_GBIhQIbQrpt4BBfrWCzwR_dBy9jYKOq7QW9VL1Abq8JW0z4UiEGiSMdBYEaenBCMpQjpKN3-0UgG2=w2400'
        linkTo='/portfolio/na-landscape' >NORTH AMERICAN LANDSCAPES</HomepageIMG>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/L_bkql0NGWRhvIWPED1U0fucZr7l0UQtZ8GkgM_7E4G_vBlLkY3Uxy3WPSkOYpfWvHgLpvYpNUCm-QM6kCZYms7k8AFa4LZ5_lNETx4ji-3uV7YAzRyutE0XUkL8Wcf30QVL6PGj0Q=w2400'
        linkTo='/portfolio/jp-landscape' >JAPANESE LANDSCAPES</HomepageIMG>
    </main>

  )
}
