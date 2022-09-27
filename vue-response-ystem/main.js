const data = {
  name: 'CTX',
  identify: 'student',
  age: 18,
};

const updateView = () => {
  const ele = document.getElementById('container');
  ele.innerText = `${data.name} - ${data.identify} - ${data.age}`;
};

updateView();
