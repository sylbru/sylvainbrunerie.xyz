---
layout: "layout.html"
---

# Sylvain Brunerie

- développeur web | musicien
- +33 (0) 6 08 73 38 39
- sylvain.brunerie@gmail.com

## Projects

<ul>
{% for project in collections.project %}
<li>{{ project.data.name }}</li>
{% endfor %}
</ul>
