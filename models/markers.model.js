class Markers {
  constructor() {
    this.actives = {}; // {id: {id. lng, lat}}
  }

  addMarker(marker) {
    this.actives[marker.id] = marker;
    return marker;
  }

  removeMarker(id) {
    const markerRemoved = this.actives[id];
    delete this.actives[id];
    return markerRemoved
  }

  updateMarker(marker) {
    this.actives[marker.id]= marker;
    return this.actives[marker.id];
  }
}

module.exports = Markers;
