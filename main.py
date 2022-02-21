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




@app.route('/tops.html/rezultati/jauns/<vards>/<rekords>')
def jauns_rekords(vards,rekords):
  try:
    jauns_rekords = int(rekords)
  except:
    return "Stop hacking!"

  jauns_ieraksts = {"vards": vards, "rezultats": jauns_rekords}
  with open ('dati/top.json', "r", encoding="utf-8") as f:
    dati = json.loads(f.read())

  ir_ieraksts = False #Pievienot karodziņu
  for i in range(len(dati["top"])):
    if dati["top"][i]["vards"] == vards:
      dati["top"][i]["rezultats"]=(jauns_rekords)
      ir_ieraksts = True
  
  if not ir_ieraksts:
    dati["top"].append(jauns_ieraksts)

  with open("dati/top.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(dati, indent=2, ensure_ascii=False))

  return jsonify(dati)

app.run(host='0.0.0.0', port=8080) #iedarbina un palaiž serveri, jābūt pēdējai rindiņai šajā failā