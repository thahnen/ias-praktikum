#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#   Rückgabe und Bearbeitung der Hallen:
#   =============================================================
#
#   1. GET /hallen/
#   => Rückgabe einer Liste aller Hallen
#   2. GET /hallen/<hallen_id>
#   => Rückgabe eines Hallenelements
#   3. PUT /hallen/<hallen_id> + JSON-Daten
#   => Entsprechende Halle ändern

import cherrypy


@cherrypy.expose
class Hallen(object):
    def __init__(self, application):
        self.application = application
        self.data_path :str = self.application.server_path + "/data/"


    @cherrypy.tools.json_out()
    def GET(self, hallen_id :int = None):
        # Zurückgegebene Daten mit folgenden Aufbau,
        # bei Fehler wird nur der Code zurückgegeben!
        #
        # cherrypy.response.status = 200 | 404 | 500
        #
        # {
        #   ("1...n": "Hallen"-Objekt) oder "Hallen"-Objekt-Inhalt
        # }

        code, data = self.application.get_values("hallen.json", hallen_id)
        cherrypy.response.status = code
        if code == 200:
            return data

    @cherrypy.tools.json_in()
    def PUT(self, hallen_id :int):
        # cherrypy.response.status = 200 | 400 | 404 | 500

        try:
            input_json = cherrypy.request.json
        except Exception:
            cherrypy.response.status = 400
            return

        code :int = self.application.update_values("hallen.json", hallen_id, input_json)
        cherrypy.response.status = code