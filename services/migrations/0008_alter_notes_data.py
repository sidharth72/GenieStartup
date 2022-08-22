# Generated by Django 4.0.5 on 2022-08-22 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0007_alter_notes_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='data',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='notesdata', to='services.createstudymaterialservice'),
            preserve_default=False,
        ),
    ]
