from rest_framework import serializers
from .models import Post, Comment, Like, Scrap


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'author')