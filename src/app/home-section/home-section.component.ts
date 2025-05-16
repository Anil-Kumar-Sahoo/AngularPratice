import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home-section',
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent implements OnInit {
  ngOnInit() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 320,
          density: { enable: true, value_area: 800 }
        },
        color: { value: ["#00f7ff", "#ff00c8", "#ffffff"] },
        shape: {
          type: ["star", "polygon", "square"],
          polygon: { nb_sides: 6 }
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: { enable: true, speed: 0.5, opacity_min: 0.4, sync: false }
        },
        size: {
          value: 6,
          random: { enable: true, minimumValue: 3 },
          anim: { enable: true, speed: 2, size_min: 3, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#fff",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: ["grab", "bubble"] },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 0.6 }
          },
          bubble: {
            distance: 200,
            size: 10,
            duration: 2,
            opacity: 1,
            speed: 3
          },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
}
