# Generated by Django 4.0.4 on 2022-05-25 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HR', '0002_alter_vac_end_alter_vac_reason_alter_vac_start'),
    ]

    operations = [
        migrations.CreateModel(
            name='vacation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateField(null='true')),
                ('end', models.DateField(null='true')),
                ('reason', models.TextField(max_length=500, null='true')),
            ],
        ),
        migrations.DeleteModel(
            name='vac',
        ),
    ]