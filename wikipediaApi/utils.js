const patterns = require('./patterns');
const fetch = require('node-fetch');

async function searchWiki(searchTerm) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchTerm}`
  try {
    const response = await fetch(url, {
      headers: {
        "Origin": "localhost:3000",
        "Content-Type": "application/json"
      }
    })
    const jsonResult = await response.json()
    const results = await jsonResult.query.search

    const titlesAndIds = results.map(result => {
      return { title: result.title, id: result.pageid }
    })
    return titlesAndIds
  } catch (error) {
    console.log(error)
  }
}

const fetchHtml = async (pageid) => {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=parse&format=json&pageid=${pageid}`;
  try {
    let response = await fetch(endpoint)
    let json = await response.json()
    let html = await json.parse.text['*']
    return html
  } catch (err) {
    return err
  }
}

const regexpFilter = pattern => {
  return source => {
    let arr
    let results = []
    while ((arr = pattern.exec(source)) !== null) {
      results.push(arr[0])
    }
    return results
  }
}

const getTitle = source => {
  try {
    let title = regexpFilter(/class="summary".*?khaki;">".*?"/g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/class="summary".*?khaki;">"/g)(title)[0]
    title = title.slice(toCut.length)
    return title
  } catch (error) { return }
}

const getAuthor = source => {
  try {
    let author = regexpFilter(/>Single<.*?title.*?>.*?</g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/>Single<.*?title.*?>/g)(author)[0]
    author = author.slice(toCut.length)
    return author
  } catch (error) { return }
}

const getAlbum = source => {
  try {
    let album = regexpFilter(/album.*?title.*?".*?>.*?</g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/album.*?title.*?".*?>/g)(album)[0]
    album = album.slice(toCut.length)
    return album
  } catch (error) { return }
}
const getGenre = source => {
  try {
    let genre = regexpFilter(/Genre.*?title.*?>.*?</g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/Genre.*?title.*?>/g)(genre)[0]
    genre = genre.slice(toCut.length)
    return genre
  } catch (error) { return }
}

const getLabel = source => {
  try {
    let label = regexpFilter(/Label.*?title=".*?"/g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/Label.*?title="/g)(label)[0]
    label = label.slice(toCut.length)
    return label
  } catch (error) { return }
}

const getLength = source => {
  try {
    let min = regexpFilter(/class="min">.*?</g)(source)[0].slice(0, -1)
    let toCut = regexpFilter(/class="min">/g)(min)[0]
    min = min.slice(toCut.length)

    let sec = regexpFilter(/class="s">.*?</g)(source)[0].slice(0, -1)
    toCut = regexpFilter(/class="s">/g)(sec)[0]
    sec = sec.slice(toCut.length)

    return { min, sec }
  } catch (error) { return }
}


const getDescription = source => {
  try {
    let description = regexpFilter(patterns.description)(source)
    return description
  } catch (error) { return }
}


module.exports = {
  searchWiki,
  fetchHtml,
  regexpFilter,
  getTitle,
  getAuthor,
  getAlbum,
  getGenre,
  getLabel,
  getLength,
  getDescription
}