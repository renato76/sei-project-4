# Generated by Django 3.1.3 on 2021-02-25 15:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='profile_image',
        ),
    ]