const circleContainer = document.getElementById('circle');

    const totalDots = 16;
    const evenGap = 20;
    const oddGap = 10;

    let currentAngle = 0;

    for (let i = 1; i <= totalDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        circleContainer.appendChild(dot);

        const x = 160 + 130 * Math.cos((currentAngle * Math.PI) / 180) - 10;
        const y = 150 + 140 * Math.sin((currentAngle * Math.PI) / 180) - 10;

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        currentAngle += i % 2 === 0 ? evenGap : oddGap;
    }
    let rotation = 0;

    function animate() {
        rotation += 1;
        circleContainer.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
    }

    animate();


    document.getElementById("form1").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission
        alert("Thank you for contacting us! We will get back to you soon.");
    });


                    
