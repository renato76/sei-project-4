# Generated by Django 3.1.2 on 2020-10-28 23:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('movies', '0008_auto_20201028_2311'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='liked_movies', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='movie',
            name='user',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='created_movies', to=settings.AUTH_USER_MODEL),
        ),
    ]