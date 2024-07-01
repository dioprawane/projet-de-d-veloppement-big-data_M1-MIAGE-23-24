
export default class Content{

    content(){

       
        return  ` 

      

        <div class="divGlobal">
        <div class="divAnnalyseBenchmark">
        
        
          <h2>Analyse des Benchmarkings  </h2>

          <h3>Benchmark de création pour 1000000 éléments</h3>

          <div class="divv">
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                    "label": "Total",
                    "data": [145909.219265, 173202.515605],
                    "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Minimum",
                  "data": [0.105542, 0.107458],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Maximum",
                  "data": [51.1915, 60.368333
                  ],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Moyenne",
                  "data": [0.145909219265, 0.173202515605],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          </div>
          <p>
            Nous pouvons remarquer que MongoDB a obtenu de manière significative de meilleurs résultats sur le total, le maximum et la moyenne. En revanche, sur le minimum, c'est à peu près équivalent.
          </p>

          <h3>Benchmark de récupération pour 1000000 éléments</h3>

          <div class="divv">
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                    "label": "Total",
                    "data": [183425.072509, 171339.510892],
                    "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Minimum",
                  "data": [0.0785, 0.076583],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Maximum",
                  "data": [60.554959, 60.38625
                  ],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Moyenne",
                  "data": [0.183425072509, 0.171339510892],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          </div>
          <p>
            Redis est plus efficace sur le total et la moyenne de même que sur le minimum et le maximum mais c'est à peut près équivalent.
          </p>

          <h3>Benchmark de mise à jours pour 1000000 éléments</h3>
          <div class="divv">
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                    "label": "Total",
                    "data": [208890.502965, 209000.70981],
                    "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Minimum",
                  "data": [0.101958, 0.107833],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Maximum",
                  "data": [60.183792, 60.151709
                  ],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Moyenne",
                  "data": [0.208890502965, 0.20900070981],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          </div>
          <p>
            MongoDB semble un peu plus rapide sur le total, le minimum et la moyenne. En revanche, Redis est plus rapide sur le maximum et surtout la moyenne.
          </p>

          <h3>Benchmark de supression pour 1000000 éléments</h3>

          <div class="divv">
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                    "label": "Total",
                    "data": [328277.042036, 342075.606457],
                    "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Minimum",
                  "data": [0.175125, 0.173583],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Maximum",
                  "data": [72.802917, 60.387625
                  ],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Moyenne",
                  "data": [0.328277042036, 0.342075606457],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          </div>
          <p>
            MongoDB semble meilleur sur le total et la moyenne. En revanche, Redis est meilleur sur le maximum. Pour le minimum, c'est à peu près équivalent.
          </p>


          <h3>Benchmark de recherche pour 100 éléments</h3>

          <div class="divv">
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                    "label": "Total",
                    "data": [46989.2622, 46975.37864],
                    "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Minimum",
                  "data": [240.5545, 236.3749],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Maximum",
                  "data": [1418.428, 1419.476
                  ],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          <div class="divvv">
          <bt-chart class="char" jsonObjectString='{
            "chart": {
              "type": "bar",
              "data": {
                "labels": ["MongoDB", "Redis"],
                "datasets": [
                {
                  "label": "Moyenne",
                  "data": [469.892622, 469.892629],
                  "borderWidth": 1
                }
              ]
              },
              "options": {
                "scales": {
                  "y": {
                    "beginAtZero": true
                  }
                }
              }
            }
          }'></bt-chart>
          </div>
          </div>
          <p>
            Ici les requêtes semblent être équivalentes. Par contre nous pouvons remarquer que les recherches sont plutôt lentes. comparé aux autres opérations
          </p>

          <h3>Conclusion</h3>
          <p>
            Pour conclure il semblerait qu'il n'y ai pas d'énorme différence entre MongoDB une base de donnée orienté document et Redis une base de données de type clef-valeur . Cependant, MongoDB semble être un peu plus rapide sur la création. En revanche, Redis semble être plus rapide sur la récupération et la suppression.
          </p>
          
        
        
        
            
            `
    }
}

