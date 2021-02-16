# Generated by Django 3.1.3 on 2021-02-15 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_user_watchlist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='watchlist',
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
