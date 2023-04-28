// import itemCounter from '../Modules/itemCounter.js';

// describe('itemCounters', () => {
//   test('Counts an empty array', () => {
//     const Items = [];
//     const itemCounters = document.createElement('li');
//     itemCounter(Items, itemCounters);
//     expect(itemCounter.innerHTML).toBe('');
//   });
//   test('Counts the correct items', () => {
//     const itemCounter = document.createElement('li');
//     const JsonItems = [
//       {
//         item_id: 29291,
//         likes: 81,
//       },
//       {
//         item_id: 29291,
//         likes: 81,
//       },
//       {
//         item_id: 29291,
//         likes: 81,
//       },
//     ];
//     itemCounters(JsonItems, itemCounter);

//     expect(itemCounter.innerHTML).toBe('Food(3)');
//   });
//   test('Counts the correct items', () => {
//     const itemCounter = document.createElement('li');
//     const JsonItems = [
//       {
//         item_id: 29291,
//         likes: 81,
//       },
//       {
//         item_id: 29291,
//         likes: 81,
//       },
//     ];
//     itemCounters(JsonItems, itemCounter);

//     expect(itemCounter.innerHTML).toBe('Food(2)');
//   });
// });