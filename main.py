from flask import Flask, render_template, jsonify
import datetime
import json
import db

app = Flask('app')
app.config['JSON_AS_ASCII'] = False

@app.route('/') 
def index():
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

@app.route('/sutit/<vards>/<vecums>/<punkti>')
def jauns_rezultats(vards,vecums,punkti):
  tagad = datetime.datetime.now()
  datums = tagad.strftime("%Y/%m/%d, %H:%M:%S")
  jauns_ieraksts = {
    "vards": vards,
    "vecums": vecums,
    "punkti": punkti,
    "datums": datums
    }

  db.pievienot_datus(jauns_ieraksts)
  return "Darits"

@app.route('/lasit')
def lasit():
  dati = db.atgriezt_datus()

  rez = json.dumps(dati)

  return rez

  
app.run(host='0.0.0.0', port=8080) #iedarbina un palaiž serveri, jābūt pēdējai rindiņai šajā failā