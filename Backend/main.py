from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Query(BaseModel):
    query: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/query")
def run_query(q: Query):
    return {
        "input": q.query,
        "output": "processed result",
        "data": [{"x":1,"y":2},{"x":2,"y":5}]
    }