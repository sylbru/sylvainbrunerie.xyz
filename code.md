---
layout: "layout.njk"
---

# Code

<ul>
{% for project in collections.project %}
<li><a href="{{ project.data.url }}">{{ project.data.name }}</a></li>
{% endfor %}
</ul>
