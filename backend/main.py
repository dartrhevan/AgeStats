from app import app

if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', '0.0.0.0')
    try:
        PORT = int(os.environ.get('PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)

