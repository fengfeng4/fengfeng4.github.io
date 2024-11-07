from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from transformers import AutoModel, AutoTokenizer

# 初始化FastAPI应用
app = FastAPI()

# 添加CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 在生产环境中应该设置具体的域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 初始化模型和分词器
model_name = "zxhezexin/openlrm-mix-large-1.1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

@app.post("/predict/")
async def predict(request: Request):
    data = await request.json()
    input_text = data.get("text", "")

    # 将输入文本编码为模型可以处理的格式
    inputs = tokenizer(input_text, return_tensors="pt")
    outputs = model(**inputs)

    # 根据输入文本内容返回相应的链接
    if "教学" in input_text or "学习" in input_text:
        result = {"link": "/learning.html"}
    elif "企业" in input_text:
        result = {"link": "/enterprise.html"}
    else:
        result = {"link": "/"}

    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)