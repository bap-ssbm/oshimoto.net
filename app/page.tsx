import HomepageIMG from "./components/homepageImg/HomepageIMG"



export default function page() {
  return (
    <main className='overflow-x-hidden z-[1] flex flex-col gap-10 md:gap-24'>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/yp-U_SETSaLJL-evwq-5SaYyE9Q43sTcSlgrYx_JT7Z9f6XpD6y74Elm_CTLcbFhVgZ6WrG_jT-WwyszmmMJcZkQa6vSbtj2-YX_nnkyl1CIt4J8PldMV1HyzaJqc2CsV3Znfea2JQ=w2400'
        linkTo='/portfolio/portraits' >PORTRAITS</HomepageIMG>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/FjN6QljUzQy3yXBFIjaoYUCN-C3g52kdPscqae9PlL6FMyFZokn3Gj2sHV_GBIhQIbQrpt4BBfrWCzwR_dBy9jYKOq7QW9VL1Abq8JW0z4UiEGiSMdBYEaenBCMpQjpKN3-0UgG2=w2400'
        linkTo='/portfolio/na-landscape' >NORTH AMERICA</HomepageIMG>
      <HomepageIMG
        imgURL='https://lh3.googleusercontent.com/L_bkql0NGWRhvIWPED1U0fucZr7l0UQtZ8GkgM_7E4G_vBlLkY3Uxy3WPSkOYpfWvHgLpvYpNUCm-QM6kCZYms7k8AFa4LZ5_lNETx4ji-3uV7YAzRyutE0XUkL8Wcf30QVL6PGj0Q=w2400'
        linkTo='/portfolio/jp-landscape' >JAPAN</HomepageIMG>
    </main>

  )
}
