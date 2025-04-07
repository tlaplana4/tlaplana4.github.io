    let mosques = [];

    function setup() {
      createCanvas(windowWidth, windowHeight);
      // Creem 50 mosques
      for (let i = 0; i < 50; i++) {
        mosques.push(new Mosca(random(width), random(height)));
      }
    }

    function draw() {
      background(220);
      // Actualitzem i dibuixem cada mosca
      for (let m of mosques) {
        m.mou();
        m.mostra();
      }
    }

    class Mosca {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // La mida base determina la grandària de la mosca
        this.mida = random(10, 20);
        this.velocitat = random(1, 3);
        // Offsets per al moviment suau amb noise
        this.offsetX = random(1000);
        this.offsetY = random(1000);
      }
      
      mou() {
        // Obtenim el moviment a partir de noise
        let movimentX = map(noise(this.offsetX), 0, 1, -this.velocitat, this.velocitat);
        let movimentY = map(noise(this.offsetY), 0, 1, -this.velocitat, this.velocitat);
        this.x += movimentX;
        this.y += movimentY;
        this.offsetX += 0.01;
        this.offsetY += 0.01;
        
        // Si la mosca surt de la pantalla, la reposicionem a l'altre costat
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      
      mostra() {
        push();
        translate(this.x, this.y);
        
        // Dibuixem el cos: una el·lipse negre
        noStroke();
        fill(0);
        // Cos el·líptic: ample 2x la mida i alt 1x la mida
        ellipse(0, 0, this.mida * 2, this.mida);
        
        // Dibuixem les ales: dues el·lipse blanques
        fill(255);
        // Ales esquerra i dreta, una mica cap amunt
        ellipse(-this.mida * 0.5, -this.mida * 0.6, this.mida, this.mida * 0.6);
        ellipse(this.mida * 0.5, -this.mida * 0.6, this.mida, this.mida * 0.6);
        
        // Dibuixem les antenes: línies que surten del cap
        stroke(0);
        strokeWeight(2);
        // Antena esquerra
        line(0, -this.mida * 0.5, -this.mida * 0.5, -this.mida);
        // Antena dreta
        line(0, -this.mida * 0.5, this.mida * 0.5, -this.mida);
        
        pop();
      }
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
