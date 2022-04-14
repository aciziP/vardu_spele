from flask import Flask, render_template
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

@app.route('/tops.html/<vards>/<vecums>/<punkti>')
def jauns_rezultats(vards,vecums,punkti):
  
  jauns_ieraksts = {
    "vards": vards,
    "vecums": vecums,
    "punkti": punkti
    }

  db.pievienot_datus(jauns_ieraksts)

  dati = db.atgriezt_datus()

  rez = json.dumps(dati)

  return rez


app.run(host='0.0.0.0', port=8080) #iedarbina un palaiž serveri, jābūt pēdējai rindiņai šajā failā