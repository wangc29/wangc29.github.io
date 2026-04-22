---
# ================================================================
# blog.md — BLOG LISTING PAGE
# ================================================================
# You NEVER need to edit this file when adding new posts.
# Just create a new .md file in the _posts/ folder and it
# automatically appears here.
layout: default
title: Blog
---

<div class="tag">Blog</div>
<h2>Notes, tutorials &amp; learning</h2>
<p class="bio">Things I've learned, methods I use, and ideas worth writing down.</p>

<!--
  CATEGORY FILTER PILLS
  To add a new category: add a new button with onclick="filterPosts('yourcat', this)"
  Then use category: yourcat in your post's front matter.
-->
<div class="pills filter-pills">
  <button class="pill active-filter" onclick="filterPosts('all', this)">All</button>
  <button class="pill" onclick="filterPosts('tutorial', this)">Tutorial</button>
  <button class="pill" onclick="filterPosts('methods', this)">Methods</button>
  <button class="pill" onclick="filterPosts('career', this)">Career</button>
</div>

<!--
  POST LIST
  Jekyll automatically loops through all your _posts/ files
  and generates this list. You never edit this block manually.
  Just add new posts to _posts/ and they appear here automatically.
-->
<div id="posts-container">
  {% for post in site.posts %}
  <a class="blog-post" data-cat="{{ post.category }}" href="{{ post.url | relative_url }}">
    <div>
      <div class="post-title">
        {{ post.title }}
        {% if post.category %}
          <span class="post-cat">{{ post.category }}</span>
        {% endif %}
      </div>
      <div class="post-desc">{{ post.excerpt | strip_html | truncatewords: 20 }}</div>
      <div class="post-meta">{{ post.date | date: "%b %Y" }}</div>
    </div>
    <div class="arrow">›</div>
  </a>
  {% endfor %}
</div>

<script src="{{ '/assets/js/main.js' | relative_url }}"></script>
