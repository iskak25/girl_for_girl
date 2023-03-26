import React from 'react'
import mainStyle from './Main.module.scss'

const Main = () => {
  return (
    <>
      <div className={mainStyle.main}>
        <h3 className={mainStyle.main_h3}>О нас</h3>
        <div className={mainStyle.main_container}>
          <div className={mainStyle.main_item}>
            <p className={mainStyle.main_item__p}>
              Мы верим в расширение прав и возможностей девочек, чтобы они могли
              взять свою жизнь в свои руки и полностью раскрыть свой потенциал.
            </p>
          </div>
          <div className={mainStyle.main_item}>
            <p className={mainStyle.main_item__p}>
              Мы стремимся создать инклюзивную среду, в которой девочки из всех
              слоев общества чувствуют, что их ценят и поддерживают.
            </p>
          </div>
          <div className={mainStyle.main_item}>
            <p id={mainStyle.icon} className={mainStyle.main_item__p__id}>
              Наша миссия - дать девочкам возможность поверить в себя и свои
              способности, повысить их самооценку и устойчивость, а также
              поддержать их в преодолении трудностей, связанных с взрослением в
              современном мире.
            </p>
          </div>
          <div className={mainStyle.main_item}>
            <p className={mainStyle.main_item__p}>
              Наше видение - создать мир, в котором у каждой девочки есть
              инструменты, навыки и поддержка, необходимые для успешной жизни,
              независимо от того, с какими препятствиями она может столкнуться.
            </p>
          </div>
          <div className={mainStyle.main_item}>
            <p className={mainStyle.main_item__p}>
              Мы верим в силу наставничества, обеспечивающего руководство,
              поддержку и положительные ролевые модели для девочек.
            </p>
          </div>
          <div className={mainStyle.main_item}>
            <p className={mainStyle.main_item__p}>
              Мы верим в то, что способствуем личностному и профессиональному
              росту девочек, вооружая их навыками, необходимыми для достижения
              успеха в жизни.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main

{
  /* <div className={mainStyle.main_left}>
  <h2 className={mainStyle.main_left_h2}>О нас</h2>
  <div className={mainStyle.main_left_text}>
    <p className={mainStyle.main_left_p}>
      Мы стремимся создать <br /> инклюзивную среду, в которой девочки
      из всех слоев общества чувствуют, что их ценят и поддерживают.
    </p>
  </div>
  <div className={mainStyle.main_left_text}>
    <p className={mainStyle.main_left_p}>
      Наша миссия - дать девочкам возможность поверить в себя и свои
      способности, повысить их самооценку и устойчивость, а также
      поддержать их в преодолении трудностей, связанных с взрослением в
      современном мире.
    </p>
  </div>
</div>
<div className={mainStyle.main_right}>
  <div className={mainStyle.main_right_text}>
    <p className={mainStyle.main_right_p}>
      Мы верим в расширение прав и возможностей девочек, чтобы они могли
      взять свою жизнь в свои руки и полностью раскрыть свой потенциал.
    </p>
  </div>
  <div className={mainStyle.main_right_imgs}></div>
  <img className={mainStyle.main_right_img} src={main_img} alt="" />
</div> */
}
