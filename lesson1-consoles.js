console.log('External JS file loaded');

console.group('Group of console logs');
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.groupEnd();

console.error('This is an error');

console.warn('This is a warning');

console.table({ name: 'John', age: 30, city: 'New York' });

const styles =
  'background-color: blue; color: white; padding: 5px; border-radius: 5px';

console.log('%cHello World', styles);
