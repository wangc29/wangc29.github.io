---
# ================================================================
# index.md — ABOUT PAGE (your homepage)
# ================================================================
# This "front matter" block (between the --- lines) tells Jekyll
# how to handle this page. You don't need to change it.
layout: default
title: ""
---

<!--
  ================================================================
  PROFILE HEADER
  - Replace the .about-photo div with your real photo once ready:
      <img class="about-photo" src="/assets/images/photo.jpg" alt="Chen Wang">
  - Update your name, current role, and social links in _config.yml
  ================================================================
-->
<div class="about-grid">

  <!-- PHOTO: Replace this div with an <img> tag when you have a photo -->
  <div class="about-photo">CW</div>

  <div>
    <div class="about-name">Chen Wang</div>
    <div class="about-role">Associate Manager, Statistical Genetics · Regeneron Genetics Center</div>
    <div class="links" style="margin-top: 0.75rem;">
      <!-- Links pull from _config.yml automatically -->
      <a class="btn-ghost" href="{{ site.scholar_url }}" target="_blank">Google Scholar</a>
      <a class="btn-ghost" href="{{ site.github_url }}" target="_blank">GitHub</a>
      <a class="btn-ghost" href="{{ site.linkedin_url }}" target="_blank">LinkedIn</a>
    </div>
  </div>

</div>

<!--
  ================================================================
  BIO PARAGRAPHS
  Edit these paragraphs to keep your About text up to date.
  - Para 1: Current role
  - Para 2: Education
  - Para 3: Research interests
  ================================================================
-->
<div class="about-bio">
  <p>
    Hi! I'm Chen. I am an Associate Manager of Statistical Genetics at the
    <a href="https://www.regeneron.com/science/genetics-center">Regeneron Genetics Center</a>,
    where I develop internal tools for targeted trial emulation using causal inference
    and time-to-event analysis to validate human genetics hypotheses and inform target
    prioritization. Previously, I was a Senior Manager of Clinical Data Science at
    <a href="https://www.gilead.com">Gilead Sciences</a>, where I led statistical
    modeling efforts across 40+ clinical programs.
  </p>
  <p>
    I received my Ph.D. in Statistical Genetics from
    <a href="https://psu.edu">The Pennsylvania State University</a>,
    advised by
    <!-- Replace YOUR_ADVISOR_URL with Dr. Liu's actual profile page -->
    <a href="YOUR_ADVISOR_URL">Dr. Dajiang J. Liu</a>.
    Before that, I completed my M.S. in Bioinformatics and Applied Statistics at
    Miami University and my B.S. in Biological Sciences at China Agricultural University.
  </p>
  <p>
    My research sits at the interface of human genetics, real-world evidence, and clinical
    trial analytics. I apply rigorous statistical methods — including Bayesian inference,
    causal inference, and machine learning — to support target discovery, indication
    selection, and end-to-end clinical development decision-making.
  </p>
</div>

<hr class="section-divider">

<!--
  ================================================================
  EXPERIENCE SECTION
  TO ADD A NEW ROLE: copy one .item block and paste at the top.
  TO REMOVE A ROLE: delete the entire .item block.
  ================================================================
-->
<div class="exp-section-title">Experience</div>
<div class="items">

  <div class="item">
    <div class="item-meta">Regeneron Genetics Center · 2025 – Present</div>
    <h3>Associate Manager, Statistical Genetics</h3>
    <p>Trial emulation, causal inference, GWAS for neuropsychiatric disorders.</p>
  </div>

  <div class="item">
    <div class="item-meta">Gilead Sciences · 2023 – 2025</div>
    <h3>Senior Manager, Clinical Data Science</h3>
    <p>Bayesian enrollment modeling across 40+ programs; RWE and miRNA normalization methods.</p>
  </div>

  <div class="item">
    <div class="item-meta">Penn State College of Medicine · 2020 – 2023</div>
    <h3>Graduate Research Assistant</h3>
    <p>Developed RATES and GPS — R packages for GWAS replicability and EHR-based disease progression prediction.</p>
  </div>

  <!-- TEMPLATE: copy this block to add a new role
  <div class="item">
    <div class="item-meta">Company Name · Year – Year</div>
    <h3>Your Job Title</h3>
    <p>Short description of your work and impact.</p>
  </div>
  -->

</div>

<hr class="section-divider">

<!--
  ================================================================
  CONTACT
  Update your email in _config.yml — it will update here automatically.
  ================================================================
-->
<div class="exp-section-title">Contact</div>
<a class="contact-email" href="mailto:{{ site.email }}">✉ {{ site.email }}</a>

<hr class="section-divider">

<!--
  ================================================================
  VISITOR MAP
  To set up after your site is live:
    1. Go to https://clustrmaps.com and sign up (free)
    2. Enter your site URL: https://wangc29.github.io
    3. Copy the <script> embed code they give you
    4. Replace the placeholder div below with that script tag
  ================================================================
-->
<div class="exp-section-title">Visitors</div>
<div class="map-section">
  <div class="map-label">Where in the world are my visitors from?</div>
  <div class="map-wrapper">
    <!-- REPLACE THIS with your ClustrMaps <script> tag once your site is live -->
    <div class="map-placeholder">
      Visitor map will appear here.<br>
      Set up at <a href="https://clustrmaps.com" target="_blank">clustrmaps.com</a> once your site is live.
    </div>
  </div>
</div>
