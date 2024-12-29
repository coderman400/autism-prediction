from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd


app = FastAPI()


with open("best_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

with open("encoders.pkl", "rb") as encoders_file:
    encoders = pickle.load(encoders_file)