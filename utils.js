function getNearestPoint(loc, points, threshold = 10)   {
    let minDist = Number.MAX_SAFE_INTEGER;
    let nearset = null;

    for(const point of points) {
       const dist = distance(point, loc);
       if(dist < minDist && dist < threshold) {
           minDist = dist;
           nearset = point;
       }
    }
    return nearset;
}

function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}