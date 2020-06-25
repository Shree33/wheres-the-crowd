import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize("UA-170892135-1", {
    debug: true, 
    gaOptions:{
        sitSpeedSampleRate: 100
    }
  })
}

export const logPageView = () => {
  ReactGA.pageview("visitor")
}