/*let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 20) ? 'Beginner'
          : ((user.level >= 20) && (user.level <= 40)) ? 'Commander Elite'
          : ((user.level >= 40) && (user.level <= 60)) ? 'The Commander Hero'
          : ((user.level >= 60) && (user.level <= 80)) ? 'The Commander Elite Hero'
          : ((user.level >= 80) && (user.level <= 100)) ? 'The Commander Elite Super Strong Hero'
          : ((user.level >= 100) && (user.level <= 120)) ? 'The Commander Elite Super Strong Shadow Hero'
          : ((user.level >= 120) && (user.level <= 140)) ? 'The Commander Legends Shadow Hero'
          : ((user.level >= 140) && (user.level <= 160)) ? 'The Commander Super Legends Shadow Hero'
          : 'Legends'
  user.role = role
  return true
}

module.exports = handler*/

const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Anonymous Entity': 0, 
  'Tier 11-C': 1, 
  'Tier 11-B': 3,
  'Tier 11-A': 5,
  'Tier 10-C': 7,
  'Tier 10-B': 9,
  'Tier 10-A': 10,
  'Tier 9-C': 12,
  'Tier 9-B': 14,
  'Tier 9-A': 16,
  'Tier 8-C': 18,
  'Tier H8-C': 19,  
  'Tier 8-B': 21,
  'Tier 8-A': 23,
  'Tier L7-C': 25,
  'Tier 7-C': 27,
  'Tier H7-C': 28,
  'Tier L7-B': 30,
  'Tier 7-B': 32,
  'Tier 7-A': 34,
  'Tier H7-A': 36,
  'Tier L6-C': 37,
  'Tier 6-C': 39,
  'Tier H6-C': 41,
  'Tier L6-B': 43,
  'Tier 6-B': 45,
  'Tier H6-B': 46,
  'Tier 6-A': 48,
  'Tier H6-A': 50,
  'Tier 5-C': 52,
  'Tier L5-B': 54,
  'Tier 5-B': 55,
  'Tier 5-A': 57,
  'Tier H5-A': 59,
  'Tier L4-C': 61,
  'Tier 4-C': 63,
  'Tier H4-C': 64,
  'Tier 4-B': 66,
  'Tier 4-A': 68,
  'Tier 3-C': 70,
  'Tier 3-B': 72,
  'Tier 3-A': 73,
  'Tier H3-A': 75,
  'Tier L2-C': 77,
  'Tier 2-C': 79,
  'Tier 2-B': 81,
  'Tier 2-A': 82,
  'Tier L1-C': 84,
  'Tier 1-C': 86,
  'Tier H1-C': 88,
  'Tier 1-B': 90,
  'Tier H1-B': 91,
  'Tier L1-A': 94,
  'Tier 1-A': 96,
  'Tier H1-A': 100,
  'Tier 0': 1000
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
