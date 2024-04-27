/*Header.js*/
import React from "react";

function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-transparent mb-0">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My resume</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Languages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Soft Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Tech</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>  
  );
}

export default Header;

