const formatContent = (data) => {
  const regex = /(\s(Do|W|We|Z|Za|Ze|I|O|U|A|do|w|we|z|za|ze|i|o|u|a))(\s)/g
  const addspace = () => '&nbsp;'
  return data.replace(regex, `$1${addspace()}`)
}

export default formatContent
