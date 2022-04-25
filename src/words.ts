const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  return answers[Math.floor(Math.random()*answers.length)];
}

const answers = [
  'smart',
  'pretty',
  'super',
  'hardworking',
  'wifely',
  'motherly',
  'daughterly',
  'generous',
  'caring',
  'thoughtful',
  'intelligent',
  'capable',
  'loving',
  'lovable',
  'giggly',
  'smiley',
  'sensitive',
  'special',
  'spontaneous',
  'resourceful',
  'incredible',
  'educated',
  'graceful',
  'beautiful',
  'sexy',
  'passionate',
  'impressive',
  'remarkable',
  'resilient',
  'independent',
  'reliable',
  'bright',
  'brave',
  'powerful',
  'colombian',
  'spanish',
  'kind',
  'kissable',
  'knowledgable',
  'strong',
  'glorious',
  'sensual',
  'vibrant',
  'clever',
  'fabulous',
  'stylish',
  'creative',
  'amazing',
  'playful',
  'appealing',
  'athletic',
  'attractive',
  'fit',
  'cute',
  'dreamy',
  'stunning',
  'gorgeous',
  'perseverant',
  'dressy',
  'elegant',
  'enchanting',
  'magestic',
  'friendly',
  'hot',
  'ineffable',
  'winner',
  'lovely',
  'perfect',
  'admirable',
  'riveting',
  'shining',
  'brilliant',
  'sharp',
  'slick',
  'smoking',
  'trendsetting',
  'talented',
  'faithful',
  'loyal',
  'yummy',
  'meme',
  'everything',
  'exceptional',
  'thoughtful',
  'unique',
]