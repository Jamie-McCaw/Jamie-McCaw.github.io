---
layout: default
title: Blog - Jamie McCaw | Developer
---
<section>
	<h3>Blog</h3>
	<ul class="posts">
		{% for post in site.posts %}
		<li>
		<span>{{ post.date | date_to_string }}</span> &mdash;
		<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
		</li>
		{% endfor %}
	</ul>
</section>