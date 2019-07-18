import os
import io
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("insuremi-c7f10ed8b021.json")
def detect_text(path):
    """Detects text in the file."""
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')

    for text in texts:
        print(text.description)

        #print('bounds: {}'.format(','.join(vertices)))
detect_text('../6.png')