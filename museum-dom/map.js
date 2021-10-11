
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkb3VrZW43ODA5IiwiYSI6ImNrdTFpOWVvNTI4NW8ybnA4cWdvbWR5cWkifQ.CMpP6WjNcKAXGQAGjt5SzQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hadouken7809/cku2zajbw064917lfu0i0l2z8',
  center: [2.33587, 48.86102],
  zoom: 15.5
});

map.addControl(new mapboxgl.NavigationControl());

