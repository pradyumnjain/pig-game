from flask import Flask,render_template #class Flask

app = Flask(__name__) #tells python it is unique

@app.route('/')
def home():
	return render_template('index.html')
