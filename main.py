from flask import Flask, render_template, jsonify
import json

app = Flask('app') #Tiek izveidota aplikācija, mainīgais, kas izsauc Flask klasi un nosauc par app
app.config['JSON_AS_ASCII'] = False

@app.route('/') #Flask sintakse, app.route aplikācijas ceļš, pamata pirmā lapa (index.html)
def index():   #Definēta funkcija, kas tiks izpildīta, kad tiks atvērts ceļš
  return render_template("index.html")  #Iegūstam html failu

@app.route('/index.html')
def indexx():
  return render_template("index.html")  

@app.route('/spele_v.html')
def spele_v():
  return render_template("spele_v.html")  

@app.route('/tops.html')
def tops():
  return render_template("tops.html")  

@app.route('/info.html')
def info():
  return render_template("info.html")  



app.run(host='0.0.0.0', port=8080) #iedarbina un palaiž serveri, jābūt pēdējai rindiņai šajā failā