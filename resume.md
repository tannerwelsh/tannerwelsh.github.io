---
layout: page
title: Resume
permalink: /cv/
in_menu: false
---

## Jobs

{% for job in site.work %}
### {{ job.title }}
_with_ {{ job.company }}
<br>_from_ {{ job.start_year }} _to_ {{ job.end_year }}
<br>_in_ {{ job.location }}

{{ job.content }}
{% endfor %}

## Education

{% for study in site.education %}
### {{ study.school }}
_studying_ {{ study.field_of_study }}
<br>_from_ {{ study.start_year }} _to_ {{ study.end_year }}
<br>_in_ {{ study.location }}

{{ study.content }}
{% endfor %}

## Volunteer

{% for vol in site.volunteer %}
### {{ vol.role }}
_at_ {{ vol.organization }}
<br>_from_ {{ vol.start_year }} _to_ {{ vol.end_year }}
<br>_in_ {{ vol.location }}
<br>_doing_ {{ vol.cause }}

{{ vol.content }}
{% endfor %}
