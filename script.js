import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '120s',
};

export default function () {

  const id = Math.floor(Math.random() * (9999999)) + 1;

  http.get(`http://localhost:3004/restaurants/${id}/reviews`);
}