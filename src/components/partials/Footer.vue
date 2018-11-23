<template>
  <!-- Footer -->
  <footer class="page-footer text-center text-md-left">

    <!-- Footer Links -->
    <div class="container-fluid pt-3 pb-4 maximum-width">
      <div class="row">

        <!-- First column -->
        <div class="col-lg-4 footer-column">
          <span class="title text-uppercase text-center font-weight-bold">Kontakt</span>
          <ul class="list-unstyled text-center mx-auto">
            <li class="mb-2">
              <a href="#">
                <p>
                  <i class="fa fa-map-marker fa-2x"></i>
                </p>
              </a>
            </li>

            <li class="mb-2">
              <a href="tel:<?php the_field('telefonnummer', 'options'); ?>">
                <p>
                  <i class="fa fa-phone fa-2x"></i>
                </p>
              </a>
            </li>

            <li class="mb-2">
              <a href="mailto:<?php the_field('epostadress', 'options'); ?>">
                <p>
                  <i class="fa fa-envelope fa-2x"></i>
                </p>
              </a>
            </li>

            <li class="mb-2">
              <a href="mailto:<?php the_field('facebook', 'options'); ?>">
                <p>
                  <i class="fab fa-facebook-f"></i>
                  Vår facebooksida
                </p>
              </a>
            </li>
          </ul>
        </div>
        <!-- First column -->

        <!-- Second column -->
        <div class="col-lg-4 footer-column">
          <span class="title text-uppercase text-center font-weight-bold">Om oss</span>
          <span class="pt-4 main-text">
          </span>
        </div>
        <!-- Second column -->

        <!-- Third column -->
        <div class="col-lg-4 footer-column">
          <span class="title text-uppercase text-center font-weight-bold">Länkar</span>
          <ul class="list-unstyled">
            <li>
              <a href="#">
                <p>
                  Länk
                  <i class="fas fa-angle-right"></i>
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>
                  Länk
                  <i class="fas fa-angle-right"></i>
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>
                  Länk
                  <i class="fas fa-angle-right"></i>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <!-- Third column -->
      </div>
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright py-3 text-center">
      <div class="container-fluid">
        &copy; 2018 Copyright: <a href="https://www.brandson.se/"> Brandson
        </a>

      </div>
    </div>

  </footer>
  <!-- Footer -->
</template>

<script></script>

<style></style>
