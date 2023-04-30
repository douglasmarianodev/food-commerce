export function snackEmoji(name: string){

  switch (name.toLowerCase()){
    case 'burger':
    return '🍔'
    case 'ice-cream':
      return '🍨'
    case 'drink':
      return '🥤'
    case 'pizza':
      return '🍕'
    case 'regional':
      return '🍴'
    default:
      return '🧑'

  }
}
