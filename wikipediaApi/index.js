const {
  fetchHtml,
  searchWiki,
  getTitle,
  getAuthor,
  getAlbum,
  getGenre,
  getLabel,
  getLength,
  getDescription,
} = require('./utils');

async function search(searchTerm) {
  try {
    const results = await searchWiki(searchTerm)
    const html = await fetchHtml(results[0].id)

    const wikiInfo = {
      title: results[0].title,
      songTitle: getTitle(html),
      author: getAuthor(html),
      album: getAlbum(html),
      genre: getGenre(html),
      label: getLabel(html),
      length: getLength(html),
      description: getDescription(html)
    }

    return wikiInfo

  } catch (error) { console.log("Error: " + error) }
}

module.exports = search