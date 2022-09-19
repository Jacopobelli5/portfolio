import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

export default class extends Controller {
  connect() {
    const typed = new Typed(".type", {
      strings: ["Hi, my name is"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  }
}
