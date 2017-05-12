# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def home (request):
    return render(request, 'main.html')

def jsonInfo(reques):
    info = {
        0:{"id": 1, "author": "Pete Hunt", "text": "This is one comment"},
        1:{"id": 2, "author": "Jordan Walk", "text": "This is one comment"},
    }

    return JsonResponse(info)