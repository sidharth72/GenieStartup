# Generated by Django 4.0.5 on 2022-08-20 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='createstudymaterialservice',
            name='query',
            field=models.CharField(default=' ', max_length=1000),
        ),
    ]
