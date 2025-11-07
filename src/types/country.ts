export interface Country {
  name: {
    common: string
    official: string
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  cca2: string
  cca3: string
  capital?: string[]
  region: string
  subregion?: string
  languages?: {
    [key: string]: string
  }
  population: number
  area?: number
  flags: {
    png: string
    svg: string
    alt?: string
  }
  coatOfArms?: {
    png?: string
    svg?: string
  }
  maps?: {
    googleMaps: string
    openStreetMaps: string
  }
  timezones?: string[]
  continents?: string[]
  currencies?: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  borders?: string[]
}
