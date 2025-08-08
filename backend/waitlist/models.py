from django.db import models

class Waitlist(models.Model):
    # first_name = models.CharField(max_length=50, verbose_name='First Name')
    # last_name = models.CharField(max_length=50, verbose_name='Last Name')
    email = models.EmailField(unique=True, verbose_name='Email Address')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created At')

    def __str__(self):
        return f'{self.first_name} {self.last_name} <{self.email}>'

    class Meta:
        verbose_name = 'Waitlist'
        verbose_name_plural = 'Waitlists'
        ordering = ['created_at']
