const width = 1400;
const height = 1400;

function draw( points ) {

  ctx.save();
  ctx.clearRect( 0, 0, width, height );
  for (let i = 0; i < points.length; ++i) {
    const point = points[i];
    const radius = 2;
    ctx.beginPath();
    ctx.arc( point[0] + Math.random() * 4, point[1] + Math.random() * 2, radius, 0, 2*Math.PI, false );
    ctx.closePath();
    ctx.fillStyle = "#E93F37";
    ctx.fill()
  }

  ctx.restore();
}

const screenScale = window.devicePixelRatio || 1;
const canvas = d3.select('body').append('canvas')
  .attr( 'width', width * screenScale)
  .attr( 'height', height * screenScale )
  .style( 'width', `${width}px` )
  .style( 'height', `${height}px` )

canvas.node().getContext( '2d' ).scale( screenScale, screenScale );

const ctx = canvas.node().getContext( '2d' );

d3.json( "./cat.json", data => {

  setInterval( draw, 50, data)

});