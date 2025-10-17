from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import models, transforms
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (so React can call this API)

# ---- Load Model ----
num_classes = 51
model = models.resnet50(pretrained=False)
model.fc = torch.nn.Linear(model.fc.in_features, num_classes)

# Load your trained weights
model.load_state_dict(torch.load('fruits_vegetables_51.pth', map_location=torch.device('cpu')))
model.eval()

# ---- Define Transformations ----
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# ---- Class Names ----
class_names = [
    'Amaranth', 'Apple', 'Banana', 'Beetroot', 'Bell pepper',
    'Bitter Gourd', 'Blueberry', 'Bottle Gourd', 'Broccoli',
    'Cabbage', 'Cantaloupe', 'Capsicum', 'Carrot', 'Cauliflower',
    'Chilli pepper', 'Coconut', 'Corn', 'Cucumber', 'Dragon_fruit',
    'Eggplant', 'Fig', 'Garlic', 'Ginger', 'Grapes', 'Jalepeno',
    'Kiwi', 'Lemon', 'Mango', 'Okra', 'Onion', 'Orange', 'Paprika',
    'Pear', 'Peas', 'Pineapple', 'Pomegranate', 'Potato', 'Pumpkin',
    'Raddish', 'Raspberry', 'Ridge Gourd', 'Soy beans', 'Spinach',
    'Spiny Gourd', 'Sponge Gourd', 'Strawberry', 'Sweetcorn',
    'Sweetpotato', 'Tomato', 'Turnip', 'Watermelon'
]

# ---- Prediction Endpoint ----
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']

    try:
        # Read and preprocess image
        image = Image.open(io.BytesIO(file.read())).convert('RGB')
        image_tensor = transform(image).unsqueeze(0)

        # Move to device (CPU or GPU)
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        model.to(device)
        image_tensor = image_tensor.to(device)

        # Inference
        with torch.no_grad():
            outputs = model(image_tensor)
            _, predicted_class = torch.max(outputs, 1)

        predicted_label = class_names[predicted_class.item()]
        return jsonify({'predicted_label': predicted_label})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# ---- Root Test Endpoint ----
@app.route('/')
def home():
    return "Smart Recipe Generator - AI Model API is Running 🚀"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
