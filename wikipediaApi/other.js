const getTable = regexpFilter(patterns.table)

const getTitle = source => {
  const title = regexpFilter(patterns.title)(source)[0]
  let titleContent = regexpFilter(patterns.content)(title)
  titleContent = titleContent.slice(1, -1)
  if (titleContent[0] !== /\w/) {
    titleContent = titleContent.slice(1)
  }
  if (titleContent[titleContent.length - 1] !== /\w/) {
    titleContent = titleContent.slice(0, -1)
  }
  return titleContent
}

const getAuthor = source => {
  const author = regexpFilter(patterns.author)(source)[0]
  let authorContent = regexpFilter(/title.*?>/g)(author)
  authorContent = authorContent[authorContent.length - 1]
  authorContent = authorContent.slice("title=".length).slice(0, -1)
  if (authorContent[0] !== /\w/) {
    authorContent = authorContent.slice(1)
  }
  if (authorContent[authorContent.length - 1] !== /\w/) {
    authorContent = authorContent.slice(0, -1)
  }
  return authorContent
}

const getAlbum = source => {
  const album = regexpFilter(patterns.album)(source)[0]
  let albumContent = regexpFilter(/title.*?>.*?</g)(album)
  albumContent = regexpFilter(patterns.content)(albumContent)
  return albumContent.slice(1, -1)
}

const getReleased = source => {
  const released = regexpFilter(patterns.released)(source)
  const releasedContent = regexpFilter(patterns.content)(released)
  return releasedContent.slice(1, -1)
}

const getLength = source => {
  const min = regexpFilter(patterns.lengthMin)(source)
  const minContent = regexpFilter(patterns.content)(min).slice(1, -1)
  const sec = regexpFilter(patterns.lengthSec)(source)
  const secContent = regexpFilter(patterns.content)(sec).slice(1, -1)
  return {
    minutes: minContent,
    seconds: secContent
  }
}

const getLinksContent = source => {
  const links = regexpFilter(patterns.links)(source)
  const linksContents = links.map(link => {
    let content = regexpFilter(patterns.linksContent)(link)
    if (content) return content.slice(1, -1)
  }).filter(link => link)
  return linksContents
}