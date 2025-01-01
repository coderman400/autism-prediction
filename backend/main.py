from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import pandas as pd


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)
with open("model/best_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

with open("model/encoders.pkl", "rb") as encoders_file:
    encoders = pickle.load(encoders_file)

print(encoders.keys())

class InputData(BaseModel):
    A1_Score: int
    A2_Score: int
    A3_Score: int
    A4_Score: int
    A5_Score: int
    A6_Score: int
    A7_Score: int
    A8_Score: int
    A9_Score: int
    A10_Score: int
    age: int
    gender: str
    ethnicity: str
    jaundice: str
    autism: str
    country_of_res: str
    relation: str

@app.get("/")
def read_root():
    return {"message": "Woke up!", "status": "running"}

@app.post("/predict")
def predict(input_data: InputData):
    input_dict = input_data.dict()
    data = pd.DataFrame([input_dict])

    # Apply label encoders for categorical features
    for feature, encoder in encoders.items():
        if feature in data.columns:
            try:
                # Ensure the input data is in 2D format
                data[feature] = encoder.transform(data[[feature]])  # Pass as 2D format
            except Exception as e:
                return {"error": f"Encoding failed for {feature}. Details: {str(e)}"}

    # Make prediction
    prediction = model.predict(data)[0]
    result = "yes" if prediction == 1 else "no"

    return {
        "input": input_dict,
        "prediction": result
    }
