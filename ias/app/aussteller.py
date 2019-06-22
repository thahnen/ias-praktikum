#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#   Rückgabe aller Ausstellerinformationen:
#   ======================================
#
#   1. GET /aussteller/
#   => Rückgabe einer Liste aller Aussteller

import cherrypy


@cherrypy.expose
class Aussteller(object):
    def __init__(self, application):
        self.application = application
        self.data_path :str = self.application.server_path + "/data/"


    @cherrypy.tools.json_out()
    def GET(self):
        # Zurückgegebene Daten mit folgenden Aufbau,
        # bei Fehler wird nur der Code zurückgegeben!
        #
        # cherrypy.response.status = 200 | 404 | 500
        #
        # {
        #   "1...n": "Aussteller"-Objekt
        # }

        code, data = self.application.get_values("aussteller.json", None)
        cherrypy.response.status = code
        if code == 200:
            # Password-Hash muss noch herausgeloescht werden!
            for elem in data:
                del data[elem]["password"]

            return data
            