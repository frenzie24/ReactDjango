from django.core.management.base import BaseCommand
from django_seed import Seed
from api.models import User, Role
from random import randrange

#adds a command to python to seed the db
class Command(BaseCommand):
    help = 'Seed the database with initial data'

    def handle(self, *args, **kwargs):
        seeder = Seed.seeder()
        # adds 10 user entries to the user table
        seeder.add_entity(User, 10, {
            'first_name': lambda x: seeder.faker.first_name(),
            'last_name': lambda x: seeder.faker.last_name(),
            'email': lambda x: seeder.faker.email(),
            'password': lambda x: seeder.faker.password(),
        })

        #adds 4 role entries to the role table
        seeder.add_entity(Role, 4, {
            'name': lambda x: seeder.faker.job(),
            'description': lambda x: seeder.sentences(lambda y: randrange(2,3)),
            'pay': lambda x: randrange(25000, 350000),
        })
        inserted_pks = seeder.execute()
        self.stdout.write(self.style.SUCCESS('Database seeded successfully!'))

        #run the seed with python manage.py seed
