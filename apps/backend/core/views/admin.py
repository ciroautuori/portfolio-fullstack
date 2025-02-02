from django.contrib import admin
from apps.projects.models import Project, Technology
from apps.abouts.models import About, Education, Experinence, Skill, Speak


admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(About)
admin.site.register(Education)
admin.site.register(Experinence)
admin.site.register(Skill)
admin.site.register(Speak)
