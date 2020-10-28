from rest_framework import serializers
from.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):

    date_joined = serializers.ReadOnlyField()
    display_pic = serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False)

    class Meta(object):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'display_pic',
                  'date_joined', 'password', 'gender', 'dob')
        extra_kwargs = {'password': {'write_only': True}}
