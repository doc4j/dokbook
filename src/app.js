"use strict";
import 'jquery';
import { LoremIpsum } from "lorem-ipsum";
import { Tooltip, Popover } from 'bootstrap';
import './styles/app.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
library.add(fas, far)
dom.watch()

//svg icons
// import logo from './assets/brand-dark.svg'
// import search from './assets/search.svg'
// import profile from './assets/profile.png'

$(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl, {
      delay: {
        "hide": 250,
        "show": 100,
      }
    })
  })
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl)
  })
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  Prism.highlightAll()
  // $("#main").html(lorem.generateParagraphs(1))
  // $("#profile").attr('src', profile)
});
