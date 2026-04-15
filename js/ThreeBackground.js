// ─── ThreeBackground Component ──────────────────────────────────────────────
// Mounts a Three.js animated star-field + wireframe shapes onto canvas#bg.

(function () {
  const { useEffect } = React;

  function ThreeBackground() {
    useEffect(() => {
      const canvas = document.getElementById('bg');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x050510, 1);

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Star field
      const starGeo = new THREE.BufferGeometry();
      const N = 3000;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i*3]   = (Math.random() - .5) * 160;
        pos[i*3+1] = (Math.random() - .5) * 160;
        pos[i*3+2] = (Math.random() - .5) * 160;
        const t = Math.random();
        col[i*3]   = 0.4 + t * 0.6;
        col[i*3+1] = 0.4 + t * 0.4;
        col[i*3+2] = 0.8 + t * 0.2;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      starGeo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
      const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ size: .18, vertexColors: true, transparent: true, opacity: .9 })
      );
      scene.add(stars);

      // Wireframe shapes
      const shapes = [];
      const addShape = (geo, color, x, y, z) => {
        const mesh = new THREE.Mesh(
          geo,
          new THREE.MeshStandardMaterial({ color, wireframe: true, transparent: true, opacity: .25 })
        );
        mesh.position.set(x, y, z);
        scene.add(mesh);
        shapes.push(mesh);
      };
      addShape(new THREE.IcosahedronGeometry(.9, 0),  0x6a8fff, -3.5,  1.5, -3);
      addShape(new THREE.OctahedronGeometry(.7),       0xbf9aff,  3.2, -1.2, -4);
      addShape(new THREE.TorusGeometry(.8, .2, 8, 24), 0x8ac9ff,  0,    2,  -5);
      addShape(new THREE.TetrahedronGeometry(.65),     0xd48aff, -2.8, -2,  -3);
      addShape(new THREE.IcosahedronGeometry(.5),      0x6aefcf,  2.5,  2.5, -2);

      scene.add(new THREE.AmbientLight(0xffffff, .6));
      const pt = new THREE.PointLight(0x6a8fff, 2, 60);
      pt.position.set(5, 5, 5);
      scene.add(pt);

      let mx = 0, my = 0, scrollY = 0, tick = 0;
      const onMouse  = e => { mx = (e.clientX / window.innerWidth  - .5) * 2; my = (e.clientY / window.innerHeight - .5) * 2; };
      const onScroll = () => { scrollY = window.scrollY; };
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('mousemove', onMouse);
      window.addEventListener('scroll',    onScroll);
      window.addEventListener('resize',    onResize);

      let rafId;
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        tick += .004;
        stars.rotation.y = tick * .05;
        stars.rotation.x = tick * .02;
        camera.position.x += (mx * .8  - camera.position.x) * .04;
        camera.position.y += (-my * .5 - camera.position.y) * .04;
        camera.position.z  = 5 + scrollY * .004;
        shapes.forEach((m, i) => {
          m.rotation.x = tick * (.3 + i * .05);
          m.rotation.y = tick * (.4 + i * .03);
          m.position.y += Math.sin(tick + i * 1.2) * .003;
        });
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('scroll',    onScroll);
        window.removeEventListener('resize',    onResize);
        renderer.dispose();
      };
    }, []);

    return null;
  }

  window.ThreeBackground = ThreeBackground;
})();
