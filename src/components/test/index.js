import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'

import CircleGroup from '../../molecules/CircleGroup'
import SectionInfo from '../../molecules/SectionInfo'
import ReadMore from '../../atoms/ReadMore'
import circleGrid from '../../../assets/graphics/circleGrid-2.svg'

const About = ({ className }) => (
  <>
    <div id="about" className={clsx(css.container, className)}>
      <SectionInfo subTitle="JASNY CEL | ABY ŻYŁO SIĘ LEPIEJ" title="Czym się zajmujemy?">
        <ReadMore btnColor="black">
          Jeżeli lubisz zmieniać rzeczywistość wokół siebie, to Design Thinking Hub jest przygotowany specjalnie dla
          Ciebie. Projektowanie unikalnych produktów oraz usług jest dyscypliną wszechstronną. W ramach pracy w Kole
          poznasz zasady projektowania zgodne ze zwinnymi metodykami Design Thinking, Scrum oraz User/Client Experience
          (UX/CX). Nauczysz się „twórczej odwagi” oraz w jaki sposób patrzeć na produkty oczami klientów, jak odkrywać
          ich potrzeby oraz oczekiwania. Dowiesz się również, jak zarządzać projektami według wartości i zasad Agile,
          które później wykorzystasz w pracy na licznych stanowiskach w IT, finansach i zarządzaniu, np. w marketingu,
          sprzedaży, logistyce, projektowaniu aplikacji webowych, etc.
        </ReadMore>
      </SectionInfo>

      <CircleGroup section={2} className={css.circleGroup} />
      <img loading="lazy" src={circleGrid} alt="" className={css.circlesBottom} />
      <img loading="lazy" src={circleGrid} alt="" className={css.circlesBottom} />
    </div>
  </>
)

About.propTypes = {
  className: PropTypes.string,
}

export default About
