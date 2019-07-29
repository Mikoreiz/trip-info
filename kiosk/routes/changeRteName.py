import os
path = '/Users/Macbook/Desktop/kiosk/routes'
files = os.listdir(path)

for file in files:
    if file.startswith('r'):
        os.rename(file, file[1:])
