import sqlite3
import json

def savienot():
  db = sqlite3.connect('top.db',check_same_thread=False)
  return db

def json_to_db():
  db = savienot()
  JSON = 'dati/top.json'
  
  db.execute("""CREATE TABLE IF NOT EXISTS rezultati ( 
              id INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,
              vards TEXT,
              vecums INTEGER,
              punkti INTEGER,
             datums TEXT
           )""")
  
  with open(JSON, 'r', encoding='utf-8') as f:
    dati = f.read()
    datiJson = json.loads(dati)
    #print(datiJson)

  for i in range(len(datiJson["top"])):
      db.execute("""INSERT INTO rezultati 
            (vards, vecums, punkti, datums) 
            VALUES (:vards, :vecums, :punkti, :datums)""", 
            {'vards': datiJson["top"][i]["vards"], 'vecums': datiJson["top"][i]["vecums"], 'punkti':datiJson["top"][i]["punkti"],'datums':datiJson["top"][i]["datums"] })
  
      db.commit()

  dati = db.execute("SELECT * FROM rezultati")

  print(dati.fetchall())

#json_to_db()

def pievienot_datus(jauns_ieraksts):
  db = savienot()
  db.execute("""CREATE TABLE IF NOT EXISTS rezultati ( 
              id INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,
              vards TEXT,
              vecums INTEGER,
              punkti INTEGER,
             datums TEXT
           )""")
  
  db.execute("""INSERT INTO rezultati 
              (vards, vecums, punkti,datums) 
              VALUES (:vards, :vecums, :punkti,:datums)""", 
              {'vards': jauns_ieraksts['vards'], 'vecums': jauns_ieraksts['vecums'], 'punkti':jauns_ieraksts['punkti'],'datums':jauns_ieraksts['datums']})

  db.commit()


def atgriezt_datus():
  db = savienot()
  dati = db.execute(""" SELECT * FROM rezultati""")
  rezultats = dati.fetchall()
  dati = []
  for rez in rezultats:
    dati.append({
      "id":rez[0],
      "vards":rez[1],
      "vecums":rez[2],
      "punkti":rez[3],
      "datums":rez[4],
    })

  print(dati)
  return dati

#atgriezt_datus()
#json_to_db()