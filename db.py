import sqlite3
import json

db = sqlite3.connect('dati/topp.db',check_same_thread=False)

def json_to_db():

  JSON = 'dati/top.json'
  
  db.execute("""CREATE TABLE IF NOT EXISTS rezultati ( 
              id INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,
              vards TEXT,
              vecums INTEGER,
              punkti INTEGER
           )""")
  
  with open(JSON, 'r', encoding='utf-8') as f:
    dati = f.read()
    datiJson = json.loads(dati)
    #print(datiJson)

  for i in range(len(datiJson["top"])):
      db.execute("""INSERT INTO rezultati 
            (vards, vecums, punkti) 
            VALUES (:vards, :vecums, :punkti)""", 
            {'vards': datiJson["top"][i]["vards"], 'vecums': datiJson["top"][i]["vecums"], 'punkti':datiJson["top"][i]["punkti"]})
  
      db.commit()

  dati = db.execute("SELECT * FROM rezultati")

  print(dati.fetchall())



def pievienot_datus(jauns_ieraksts):
  db.execute("""CREATE TABLE IF NOT EXISTS rezultati ( 
              id INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,
              vards TEXT,
              vecums INTEGER,
              punkti INTEGER
           )""")
  
  db.execute("""INSERT INTO rezultati 
              (vards, vecums, punkti) 
              VALUES (:vards, :vecums, :punkti)""", 
              {'vards': jauns_ieraksts['vards'], 'vecums': jauns_ieraksts['vecums'], 'punkti':jauns_ieraksts['punkti']})

  db.commit()


def atgriezt_datus():
  dati = db.execute(""" SELECT * FROM rezultati""")
  rezultats = dati.fetchall()
  return rezultats

#atgriezt_datus()
#json_to_db()