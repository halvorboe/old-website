import os
import subprocess
import time
import uuid

from sanic import Sanic
from sanic.response import file, json

TEMP = "temp"
UPLOADS = "uploads"


app = Sanic(__name__)


def convert(docx, markdown):
    subprocess.call(f"pandoc -s {docx} -t markdown -o {markdown}".split())


@app.route("/", methods=["POST", "GET"])
async def index(request):
    return await file("index.html")


@app.route("/upload", methods=["POST"])
async def upload(request):

    post_file = request.files.get("file")

    print("file", type(post_file))

    name, body = post_file.name, post_file.body

    if not name.endswith(".docx"):
        return json({"error": "file needs to be docx"})

    doc_id = uuid.uuid4()

    temp_path = f"{TEMP}/{doc_id}.docx"
    with open(temp_path, "wb+") as f:
        f.write(body)

    upload_path = f"{UPLOADS}/{doc_id}.md"

    convert(temp_path, upload_path)

    return await file("happy.html")


def make_dir(name):
    if not os.path.exists(name):
        os.makedirs(name)


if __name__ == "__main__":
    make_dir(TEMP)
    make_dir(UPLOADS)

    app.run(host="0.0.0.0", port=8080, debug=True)
