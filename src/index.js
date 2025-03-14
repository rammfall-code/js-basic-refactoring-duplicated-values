function getName() {
  let name;

  do {
    name = prompt('Enter your name');
  } while (name === null || name === '');

  return name;
}

const name1 = getName();
alert(`Hi, ${name1}`);

const name2 = getName();
alert(`Hi, ${name2}`);

const name3 = getName();
alert(`Hi, ${name3}`);
