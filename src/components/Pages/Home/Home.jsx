import React from 'react'
import { Main } from '../../Layouts/Main/Main';
import { Tittle } from '../../Tittle/Tittle';
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { Xp } from '../../Xp/Xp';


import error  from '../../../assets/404.png'
import bot  from '../../../assets/bot.png'
import bleux from '../../../assets/bleux.png'

import java from '../../../assets/java.png'
import python from '../../../assets/python.png'
import javascript from '../../../assets/js.png'
import mysql from '../../../assets/mysql.jpg'




export const Home = () => {
  return (
    <>
    <Main>
      <section className='firstSection'>
      <Tittle title='PERFIL' />
      <div className='FirstSectionDiv'>
      <div className='FirstSectionText'>
      <p className='textOne'>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
     manera para permitir la presentación de elementos gráficos en documentos, sin
     necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
     los diseños y la forma del contenido antes de que el contenido se haya creado, dando
     al diseño y al proceso de producción más libertad</p>
      <p className='textSecond'>Actualmente me estoy formando en analisis y desarrollo de software (ADSO).</p>
      </div>
      </div>
      </section>
      <section className='secondSection'>
      <Tittle title='PROYECTOS' />
      <div className='SecondSectionDiv'>
        <div className='TextSecondSection'>
        <Proyects img={bleux} title='Bleux' desc='Proyecto css' link='https://github.com/marimorita/Bleux.git' />
        <Proyects img={bot} title='BotTerritorium' desc='Bot diseñado para subir una evidencia en la plataforma territorium' link='https://github.com/JPGV1/bot.git' />
        </div>
      </div>
      </section>
      <section className='threeSection'>
      <Tittle title='REFERENCIAS' />
      <div className='ThreeSectionDiv'>
        <div className='TextThreeSection'>
        <References name='Fanny Morales' charge='Niñera, ventas' phone='3128466064' email='fanny-mari@hotmail.com' />
        <References name='Boris Alejandro Morales' charge='Lic.Matematicas, Ing.Sistemas' phone='3137625393' email='bothis04g@gmail.com' />
        <References name='Carlos Alberto Arango' charge='Constructor independiente' phone='1+(978)815-6113' email='cafan1924@gmail.com' />
        </div>
      </div>
      </section>
      <section className='fourSection'>
      <Tittle title='EXPERIENCIA' />
      <div className='FourSectionDiv'>
        <div className='TextFourSection'>  
        <Xp img={java} text='Bases' progress='50' />  
        <Xp img={python} text='Bases' progress='50' />
        <Xp img={javascript} text='Intermedio' progress='70' />
        <Xp img={mysql} text='Intermedio' progress='70' />
        </div>
      </div>
      </section>
    </Main>
    </>
  )
}
