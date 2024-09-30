---
layout: "layout.njk"
---

# Code

<ul role="list" class="grid" data-rows="masonry" style="--basis: 20ch">
{% for project in collections.project %}
<li>
  <article class="project-card | stack">
    <header><a href="{{ project.data.url }}">{{ project.data.name }}</a></header>
    <p class="project-card__description">{{ project.data.description }}</p>
  </article>
</li>
{% endfor %}
</ul>
