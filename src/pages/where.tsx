import type { NextPage } from 'next'
import Head from 'next/head'

const Where: NextPage = () => {
  return (
    <>
      <Head>
        <title>Как добраться • B4CKSP4CE</title>
      </Head>

      <h1>Как добраться?</h1>
      <article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem enim quae a libero dolore dicta amet, provident omnis animi, quis reprehenderit praesentium distinctio ipsam aut laborum tempore atque odio minima.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus enim est? Minima laborum, debitis ducimus magni vitae incidunt ipsam unde quas iure adipisci nihil eum eos numquam provident amet.
          </p>
          <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=29206101690" className="mapIframe"></iframe>
        </article>

        <article>
          <header>
            <h2>Общественный транспорт</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet quis est? Quod ullam quos soluta repellendus nihil dolor, mollitia reiciendis aperiam dolores tempora eveniet numquam exercitationem ad at porro!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet rem quas repudiandae fuga voluptates iure dicta, facilis in velit aliquid nesciunt pariatur, officiis temporibus consequatur adipisci. Omnis, aut impedit?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae maxime harum repudiandae, quo nostrum odit. Itaque, reprehenderit iste blanditiis impedit veritatis commodi voluptatem accusamus ad reiciendis quae, quam est?
          </p>
        </article>
    </>
  );
  
}

export default Where;