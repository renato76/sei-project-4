# Generated by Django 3.1.3 on 2021-02-17 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0013_auto_20210216_2118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='age_rating',
            field=models.CharField(max_length=3),
        ),
        migrations.AlterField(
            model_name='movie',
            name='director',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='movie',
            name='duration',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='movie',
            name='trailer',
            field=models.CharField(max_length=200),
        ),
    ]
