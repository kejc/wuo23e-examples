function ladida() {
  console.log('Hejsa');
  return 'Tak for denne gang';
}

function receiver(value) {
  console.log('Tak for den nye værdi som var: ' + value);
}

const ladidaValue = ladida();

console.log(ladidaValue);

receiver(ladidaValue);
receiver(ladida());
receiver({ age: 'ung' });
