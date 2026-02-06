---
layout: page
permalink: /resources/
title: Resources
description: Resources, recommendations, Unity packages and demos etc.
nav: true
nav_order: 4
---

## Unity Packages + Demos

Links to some of my public Unity packages and demos. Some of them are ancient but maybe they can still help. Let me know if you run into any issues!

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

<hr>

## Recommendations

You can find my recommendations for beginner+ Unity devs [on my Game Dev Hub](https://kristinawaldt.notion.site/Linkliste-Ressourcen-718b10f297cb4fdfbc7e3ceb93edeb7f). The descriptions are only available in German though.