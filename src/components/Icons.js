import React from 'react'
import {FaHtml5, FaReact, FaGitAlt} from 'react-icons/fa'
import {TiCss3} from 'react-icons/ti'
import { IoLogoJavascript } from 'react-icons/io'
import { DiSass, DiResponsive, DiNodejsSmall } from 'react-icons/di'
import { SiSemanticuireact, SiReactrouter, SiStyledcomponents } from 'react-icons/si'
import { Md3DRotation } from 'react-icons/md'
import Icon from './Icon'


const Icons = () => {
  return (
      <>
        {icons.map(icon => (
          <Icon key={icon.id} icon={icon} />
        ))}
      </>
  )
}
const icons = [
  {
    "id": 1,
    "icone": <FaHtml5 size='40px' color='#e34c26' />,
    "name": "HTML5",
    "initial": {background: '#e34c26'},
    "animate": {width: ['0%', '100%', '90%']},
    "porc": '90%'
  },
  {
    "id": 2,
    "icone": <TiCss3 size='40px' color='#264de4' />,
    "name": "CSS3",
    "initial": {background: '#264de4'},
    "animate": {width: ['0%', '100%', '90%']},
    "porc": '90%'
  },
  {
    "id": 3,
    "icone": <IoLogoJavascript size='40px' color='#F0DB4F'/>,
    "name": "JAVASCRIPT",
    "initial": {background: '#F0DB4F'},
    "animate": {width: ['0%', '100%', '80%']},
    "porc": '80%'
  },
  {
    "id": 4,
    "icone": <DiSass size='40px' color='#cd6799'/>,
    "name": "SASS",
    "initial": {background: '#cd6799'},
    "animate": {width: ['0%', '100%', '75%']},
    "porc": '75%'
  },
  {
    "id": 5,
    "icone": <FaGitAlt size='40px' color='#F1502F'/>,
    "name": "GIT",
    "initial": {background: '#F1502F'},
    "animate": {width: ['0%', '100%', '60%']},
    "porc": '60%'
  },
  {
    "id": 6,
    "icone": <DiResponsive size='40px' color='#264de4'/>,
    "name": "RESPONSIVE",
    "initial": {background: '#264de4'},
    "animate": {width: ['0%', '100%', '75%']},
    "porc": '75%'
  },
  {
    "id": 7,
    "icone": <FaReact size='40px' color='#61DBFB' />,
    "name": "REACT JS",
    "initial": {background: '#61DBFB'},
    "animate": {width: ['0%', '100%', '75%']},
    "porc": '75%'
  },
  {
    "id": 8,
    "icone": <SiSemanticuireact size='40px' color='#29B6F6'/>,
    "name": "SEMANTIC",
    "initial": {background: '#29B6F6'},
    "animate": {width: ['0%', '100%', '65%']},
    "porc": '65%'
  },
  {
    "id": 9,
    "icone": <SiStyledcomponents size='40px' color='#cd6799'/>,
    "name": "STYLED",
    "initial": {background: '#cd6799'},
    "animate": {width: ['0%', '100%', '60%']},
    "porc": '60%'
  },
  {
    "id": 10,
    "icone": <SiReactrouter size='40px' color='#FF0000'/>,
    "name": "R.ROUTER",
    "initial": {background: '#FF0000'},
    "animate": {width: ['0%', '100%', '70%']},
    "porc": '70%'
  },
  {
    "id": 11,
    "icone": <DiNodejsSmall size='40px' color='#68A063'/>,
    "name": "NODE",
    "initial": {background: '#68A063'},
    "animate": {width: ['0%', '100%', '45%']},
    "porc": '40%'
  },
  {
    "id": 12,
    "icone": <Md3DRotation size='40px' color='#800080'/>,
    "name": "MOTION",
    "initial": {background: '#800080'},
    "animate": {width: ['0%', '100%', '60%']},
    "porc": '60%'
  }
]

export default Icons