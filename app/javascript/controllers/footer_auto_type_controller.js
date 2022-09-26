import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

// Connects to data-controller="footer-auto-type"
export default class extends Controller {
  connect() {
    const typed = new Typed(".footer-type", {
      strings: ["This website"],
      typeSpeed: 100,
    });
  }
}
