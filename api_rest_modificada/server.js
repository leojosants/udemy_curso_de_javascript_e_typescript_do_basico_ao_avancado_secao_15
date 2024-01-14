import app from './app';

const port = Number(3001);
const link = `CTRL + Click em http://localhost:${port}`;

app.listen(port, () => {
  console.log(`\nEscutando na porta ${port}`);
  console.log(`${link}`);
});
