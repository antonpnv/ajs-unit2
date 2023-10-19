// export const heroes = [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ]

// export function sortingHeroes(heroes) {
//   return heroes.slice().sort((a, b) => b.health - a.health);
// }

export function sortHeroes(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}
