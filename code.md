---
layout: "layout.njk"
---

# Code

<ul role="list" class="grid">
{% for project in collections.project %}
<li>
  <article class="project-card | stack">
    <header><a href="{{ project.data.url }}">{{ project.data.name }}</a></header>
    <p class="project-card__description">{{ project.data.description }}</p>
  </article>
</li>
{% endfor %}
</ul>
