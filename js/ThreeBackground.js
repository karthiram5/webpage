// ─── ThreeBackground Component ──────────────────────────────────────────────

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

      // ── Star field ────────────────────────────────────────────────────
      const starGeo = new THREE.BufferGeometry();
      const N = 3500;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i*3]   = (Math.random() - .5) * 180;
        pos[i*3+1] = (Math.random() - .5) * 180;
        pos[i*3+2] = (Math.random() - .5) * 180;
        const t = Math.random();
        col[i*3]   = 0.4 + t * 0.6;
        col[i*3+1] = 0.4 + t * 0.4;
        col[i*3+2] = 0.8 + t * 0.2;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      starGeo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
      const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ size: .18, vertexColors: true, transparent: true, opacity: .85 })
      );
      scene.add(stars);


      // ── Wireframe shapes ──────────────────────────────────────────────
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

      // ── SPIRAL GALAXY ─────────────────────────────────────────────────
      const galN = 700;
      const galPos = new Float32Array(galN * 3);
      const galCol = new Float32Array(galN * 3);
      for (let i = 0; i < galN; i++) {
        const frac = i / galN;
        const angle = frac * Math.PI * 14;
        const radius = 0.5 + frac * 4.2;
        const spread = (Math.random() - 0.5) * 0.45;
        galPos[i*3]   = Math.cos(angle) * (radius + spread) - 9;
        galPos[i*3+1] = (Math.random() - 0.5) * 0.4 - 2.5;
        galPos[i*3+2] = Math.sin(angle) * (radius + spread) - 12;
        const b = 0.4 + Math.random() * 0.6;
        galCol[i*3]   = 0.28 * b;
        galCol[i*3+1] = 0.42 * b;
        galCol[i*3+2] = b;
      }
      const galGeo = new THREE.BufferGeometry();
      galGeo.setAttribute('position', new THREE.BufferAttribute(galPos, 3));
      galGeo.setAttribute('color',    new THREE.BufferAttribute(galCol, 3));
      const galaxy = new THREE.Points(galGeo, new THREE.PointsMaterial({
        size: 0.055, vertexColors: true, transparent: true, opacity: 0.65
      }));
      scene.add(galaxy);

      // ── ENERGY PULSE RINGS ────────────────────────────────────────────
      const energyRings = [];
      [
        { r: 3.0, color: 0x6a8fff, phase: 0,    zRot:  1.0 },
        { r: 4.6, color: 0xbf9aff, phase: 2.09, zRot: -0.7 },
        { r: 6.2, color: 0x8ac9ff, phase: 4.19, zRot:  0.5 }
      ].forEach(cfg => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(cfg.r, 0.012, 8, 100),
          new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0 })
        );
        ring.position.set(0, 0, -7);
        ring.rotation.x = Math.PI / 2.8;
        scene.add(ring);
        energyRings.push({ mesh: ring, phase: cfg.phase, zRot: cfg.zRot });
      });

      // ── FLOATING ORB SPHERES ──────────────────────────────────────────
      const floatOrbs = [];
      const orbColors = [0x6a8fff, 0xbf9aff, 0x8ac9ff];
      for (let i = 0; i < 9; i++) {
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.10 + Math.random() * 0.12, 8, 8),
          new THREE.MeshBasicMaterial({
            color: orbColors[i % 3],
            transparent: true,
            opacity: 0.18 + Math.random() * 0.12
          })
        );
        orb.position.set(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          -3 - Math.random() * 6
        );
        scene.add(orb);
        floatOrbs.push({
          mesh: orb,
          phase: Math.random() * Math.PI * 2,
          speed: 0.35 + Math.random() * 0.45,
          baseOpacity: 0.18 + Math.random() * 0.12
        });
      }

      // ── SHOOTING STAR SYSTEM ──────────────────────────────────────────
      const activeShots = [];
      let shotFrame = 0;
      let nextShotFrame = 100 + Math.floor(Math.random() * 80);

      function spawnShootingStar() {
        const startX  = -10 + Math.random() * 6;
        const startY  =   3 + Math.random() * 6;
        const startZ  =  -3 - Math.random() * 5;
        const tailLen =   1.8 + Math.random() * 2.2;
        const pts = [
          new THREE.Vector3(startX, startY, startZ),
          new THREE.Vector3(startX - tailLen, startY + tailLen * 0.3, startZ)
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({ color: 0xd0e8ff, transparent: true, opacity: 0 });
        const line = new THREE.Line(geo, mat);
        const spd = 0.10 + Math.random() * 0.08;
        line.userData = { vx: spd, vy: -spd * 0.32, life: 0, maxLife: 50 + Math.floor(Math.random() * 35) };
        scene.add(line);
        activeShots.push(line);
      }

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

        // Stars
        stars.rotation.y = tick * .05;
        stars.rotation.x = tick * .02;

        // Camera parallax
        camera.position.x += (mx * .8  - camera.position.x) * .04;
        camera.position.y += (-my * .5 - camera.position.y) * .04;
        camera.position.z  = 5 + scrollY * .004;

        // Wireframe shapes
        shapes.forEach((m, i) => {
          m.rotation.x = tick * (.3 + i * .05);
          m.rotation.y = tick * (.4 + i * .03);
          m.position.y += Math.sin(tick + i * 1.2) * .003;
        });

        // Spiral Galaxy
        galaxy.rotation.y = tick * 0.026;

        // Energy Rings pulse
        energyRings.forEach((r, i) => {
          const pulse = Math.sin(tick * 2.2 + r.phase);
          r.mesh.material.opacity = Math.max(0, pulse) * 0.20;
          r.mesh.scale.setScalar(0.97 + Math.abs(pulse) * 0.05);
          r.mesh.rotation.z += 0.0025 * r.zRot;
          r.mesh.rotation.y = tick * 0.07 * (i % 2 === 0 ? 1 : -1);
        });

        // Floating Orbs
        floatOrbs.forEach(o => {
          o.mesh.position.y += Math.sin(tick * o.speed + o.phase) * 0.004;
          o.mesh.position.x += Math.cos(tick * o.speed * 0.6 + o.phase) * 0.002;
          o.mesh.material.opacity = o.baseOpacity + Math.abs(Math.sin(tick * o.speed * 0.5 + o.phase)) * 0.10;
        });

        // Shooting stars
        shotFrame++;
        if (shotFrame >= nextShotFrame) {
          spawnShootingStar();
          shotFrame = 0;
          nextShotFrame = 90 + Math.floor(Math.random() * 100);
        }
        for (let i = activeShots.length - 1; i >= 0; i--) {
          const s = activeShots[i];
          const d = s.userData;
          d.life++;
          const p = d.life / d.maxLife;
          if (p >= 1) {
            scene.remove(s);
            s.geometry.dispose();
            s.material.dispose();
            activeShots.splice(i, 1);
            continue;
          }
          const arr = s.geometry.attributes.position.array;
          arr[0] += d.vx; arr[1] += d.vy;
          arr[3] += d.vx; arr[4] += d.vy;
          s.geometry.attributes.position.needsUpdate = true;
          const fade = p < 0.12 ? p / 0.12 : p > 0.78 ? (1 - p) / 0.22 : 1;
          s.material.opacity = fade * 0.9;
        }

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('scroll',    onScroll);
        window.removeEventListener('resize',    onResize);
        activeShots.forEach(s => { s.geometry.dispose(); s.material.dispose(); });
        renderer.dispose();
      };
    }, []);

    return null;
  }

  window.ThreeBackground = ThreeBackground;
})();
