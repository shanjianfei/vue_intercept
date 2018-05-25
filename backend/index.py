# -*- coding:utf-8 -*-

import web
import time
import jwt
import json

url = (
    '/login', 'Login'
)

USER = 'admin'
PASSWORD = '123456'

app = web.application(url, globals())


def create_token():
    payload = {
        "iat": int(time.time()),
        "exp": int(time.time()) + 86400 * 7,
        "scopes": ['open']
    }
    token = jwt.encode(payload, 'secret', algorithm='HS256')
    return {'token': token}


def verify_bearer_token(token):
    payload = jwt.decode(token, 'secret', algorithms=['HS256'])
    if payload:
        return True
    else:
        return False


class Login(object):
    def POST(self):
        data = eval(web.data())
        try:
            if data['usr'] == USER and data['psd'] == PASSWORD:
                token = create_token()
                return json.dumps(token)
        except Exception, e:
            print e
        web.ctx.status = '401'
        return json.dumps({'status': 'fail'})


if __name__ == '__main__':
    app.run()
