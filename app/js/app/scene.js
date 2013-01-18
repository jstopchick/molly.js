define([
  'three',
  'detector',
  'stats',
  'trackballControls',
  'keyboardState',
  'fullScreen',
  'windowResize',
  'createSphere'
  ], function( ignore, ignore, ignore, ignore, ignore, ignore, ignore, createSphere ){
  return function(){
    // Detector
    if ( !Detector.webgl ) Detector.addGetWebGLMessage();
    // Globals
    var container, scene, camera, renderer, controls, stats;
    var keyboard = new THREEx.KeyboardState();
    var clock = new THREE.Clock();

    init();
    animate();

    // Functions
    function init(){

      ////////////
      // Set-up //
      ////////////

      // Create a scene
      scene = new THREE.Scene();

      // Camera
      var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
      var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
      camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
      scene.add( camera );
      camera.position.set( 0, 150, 400 );
      camera.lookAt( scene.position );

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
      container = document.createElement( 'div' );
      document.body.appendChild( container );
      container.appendChild( renderer.domElement );

      // Events
      THREEx.WindowResize( renderer, camera );
      THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt( 0 ) });

      // Controls
      controls = new THREE.TrackballControls( camera );

      // Stats
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.bottom = '0px';
      stats.domElement.style.zIndex = 100;
      container.appendChild( stats.domElement );

      // Light
      var light = new THREE.PointLight( 0xffffff );
      light.position.set( 0, 150, 100 );
      scene.add( light );

      ///////////////////
      // Custom Shapes //
      ///////////////////

      // Add multiple spheres to the scene using the createSphere function
      for (var i = 0; i < 10; i++) {
        var sphere = createSphere( i * 100, 0, 0 );
        scene.add( sphere );
      }
    }

    function animate(){
      requestAnimationFrame( animate );
      render();
      update();
    }

    function update(){
      controls.update();
      stats.update();
    }

    function render(){
      renderer.render( scene, camera );
    }
  };
});