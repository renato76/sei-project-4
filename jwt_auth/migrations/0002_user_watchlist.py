# Generated by Django 3.1.3 on 2020-12-31 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0010_auto_20201028_2355'),
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='watchlist',
            field=models.ManyToManyField(related_name='watchlist', to='movies.Movie'),
        ),
    ]