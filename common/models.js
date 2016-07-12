var Processor = Backbone.Model.extend({
  defaults: {
    tabId: null,
    isFound: false,
    isUsingPrePopulated: false,
    usePrePopulated: true,
    useInactive: false,
    forceUseInactive: false
  },

  _prePopulated: [
    {
      "activeExperiments":[
        "6360074345"
      ],
      "allExperiments":{  
        "6334365568":{  
          "conditional_code":"$( \".postid-10255069\" ).length > 0",
          "activation_mode":"conditional",
          "name":"Wordpress [10255069]: Baby-crazy women are begging Donor Dad for his famous sperm",
          "variation_ids":[
            "6339376997",
            "6339376998",
            "6337600152",
            "6332552227",
            "6336333260"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6339376997",
            "6339376998",
            "6337600152",
            "6332552227",
            "6336333260"
          ]
        },
        "6360074345":{  
          "conditional_code":"$( \".postid-10259320\" ).length > 0",
          "variation_weights":{  
            "6354613503":2000,
            "6354613502":2000,
            "6368451156":2000,
            "6363604303":2000,
            "6367023442":2000
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10259320]: You can now major in 'Moneyball'",
          "enabled":true,
          "variation_ids":[
            "6354613502",
            "6354613503",
            "6367023442",
            "6368451156",
            "6363604303"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6354613502",
            "6354613503",
            "6367023442",
            "6368451156",
            "6363604303"
          ]
        }
      },
      "all_experiments":{  
        "6334365568":{  
          "conditional_code":"$( \".postid-10255069\" ).length > 0",
          "activation_mode":"conditional",
          "name":"Wordpress [10255069]: Baby-crazy women are begging Donor Dad for his famous sperm",
          "variation_ids":[
            "6339376997",
            "6339376998",
            "6337600152",
            "6332552227",
            "6336333260"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6339376997",
            "6339376998",
            "6337600152",
            "6332552227",
            "6336333260"
          ]
        },
        "6360074345":{  
          "conditional_code":"$( \".postid-10259320\" ).length > 0",
          "variation_weights":{  
            "6354613503":2000,
            "6354613502":2000,
            "6368451156":2000,
            "6363604303":2000,
            "6367023442":2000
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10259320]: You can now major in 'Moneyball'",
          "enabled":true,
          "variation_ids":[
            "6354613502",
            "6354613503",
            "6367023442",
            "6368451156",
            "6363604303"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6354613502",
            "6354613503",
            "6367023442",
            "6368451156",
            "6363604303"
          ]
        }
      },
      "allVariations":{  
        "6354613503":{  
          "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"How to strike it rich in baseball without ever playing\");",
          "name":"How to strike it rich in baseball without ever playing"
        },
        "6332552227":{  
          "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Serial sperm donor is going to have a lot more kids soon\");",
          "name":"Serial sperm donor is going to have a lot more kids soon"
        },
        "6339376997":{  
          "name":"Original"
        },
        "6339376998":{  
          "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Women are fighting to get a piece of the Sperminator\");",
          "name":"Women are fighting to get a piece of the Sperminator"
        },
        "6336333260":{  
          "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Prolific sperm donor has a huge fan club\");",
          "name":"Prolific sperm donor has a huge fan club"
        },
        "6363604303":{  
          "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Now you can get a degree for geeking out on sports stats\");",
          "name":"Now you can get a degree for geeking out on sports stats"
        },
        "6367023442":{  
          "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Finally, a college major for sports stats geeks\");",
          "name":"Finally, a college major for sports stats geeks"
        },
        "6368451156":{  
          "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Syracuse wants to develop the next generation of 'Moneyball' executives\");",
          "name":"Syracuse wants to develop the next generation of 'Moneyball' executives"
        },
        "6337600152":{  
          "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Women lining up for serial sperm donor’s goods\");",
          "name":"Women lining up for serial sperm donor’s goods"
        },
        "6354613502":{  
          "name":"Original"
        }
      },
      "revision":6553,
      "variationIdsMap":{  
        "6360074345":[
          "6367023442"
        ]
      },
      "variation_map":{  
        "6360074345":2
      },
      "variationMap":{  
        "6360074345":2
      },
      "variationNamesMap":{  
        "6360074345":"Finally, a college major for sports stats geeks"
      },
      "data":{  
        "audiences":{  
          "2690270357":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ]
              ]
            ],
            "name":"Desktop only",
            "segment_id":2664470705
          },
          "2840320495":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2830940549
                  }
                ]
              ]
            ],
            "name":"New Visitors",
            "segment_id":2816530250
          },
          "2846450017":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "not",
                  [
                    "or",
                    {  
                      "dimension_id":2830940549
                    }
                  ]
                ]
              ]
            ],
            "name":"Returning Visitors",
            "segment_id":2815550413
          },
          "2854090004":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2862580005,
                    "value":"US|NY|NEWYORK"
                  }
                ]
              ]
            ],
            "name":"NYC",
            "segment_id":2851680020
          },
          "2870970152":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  }
                ]
              ],
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2855410187,
                    "value":"true",
                    "match":"exact"
                  }
                ]
              ]
            ],
            "name":"Desktop only + Test cookie",
            "segment_id":2865290708
          }
        },
        "thirdParty":{  

        },
        "experiments":{  
          "6334365568":{  
            "code":"",
            "name":"Wordpress [10255069]: Baby-crazy women are begging Donor Dad for his famous sperm",
            "conditional":true,
            "manual":false,
            "section_ids":[
            ],
            "variation_ids":[
              "6339376997",
              "6339376998",
              "6337600152",
              "6332552227",
              "6336333260"
            ]
          },
          "6360074345":{  
            "code":"",
            "name":"Wordpress [10259320]: You can now major in 'Moneyball'",
            "conditional":true,
            "manual":false,
            "section_ids":[
            ],
            "variation_ids":[
              "6354613502",
              "6354613503",
              "6367023442",
              "6368451156",
              "6363604303"
            ]
          }
        },
        "segments":{  
          "298873633":{  
            "name":"Source Type"
          },
          "298928413":{  
            "name":"Browser"
          },
          "299044025":{  
            "name":"Mobile Visitors"
          },
          "2250462273":{  
            "name":"Campaign"
          },
          "2664470705":{  
            "name":"Desktop only"
          },
          "2815550413":{  
            "name":"Returning Visitors"
          },
          "2816530250":{  
            "name":"New Visitors"
          },
          "2851680020":{  
            "name":"NYC"
          },
          "2865290708":{  
            "name":"Desktop only + Test cookie"
          }
        },
        "sections":{  

        },
        "variations":{  
          "6354613503":{  
            "name":"How to strike it rich in baseball without ever playing",
            "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"How to strike it rich in baseball without ever playing\");"
          },
          "6332552227":{  
            "name":"Serial sperm donor is going to have a lot more kids soon",
            "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Serial sperm donor is going to have a lot more kids soon\");"
          },
          "6339376997":{  
            "name":"Original",
            "code":""
          },
          "6339376998":{  
            "name":"Women are fighting to get a piece of the Sperminator",
            "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Women are fighting to get a piece of the Sperminator\");"
          },
          "6336333260":{  
            "name":"Prolific sperm donor has a huge fan club",
            "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Prolific sperm donor has a huge fan club\");"
          },
          "6363604303":{  
            "name":"Now you can get a degree for geeking out on sports stats",
            "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Now you can get a degree for geeking out on sports stats\");"
          },
          "6367023442":{  
            "name":"Finally, a college major for sports stats geeks",
            "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Finally, a college major for sports stats geeks\");"
          },
          "6368451156":{  
            "name":"Syracuse wants to develop the next generation of 'Moneyball' executives",
            "code":"$(\"h1 > .postid-10259320, h3.postid-10259320, h2.postid-10259320\").text(\"Syracuse wants to develop the next generation of 'Moneyball' executives\");"
          },
          "6337600152":{  
            "name":"Women lining up for serial sperm donor’s goods",
            "code":"$(\"h1 > .postid-10255069, h3.postid-10255069, h2.postid-10255069\").text(\"Women lining up for serial sperm donor’s goods\");"
          },
          "6354613502":{  
            "name":"Original",
            "code":""
          }
        },
        "visitor":{  
          "browser":"Chrome",
          "browserVersion":"51.0.2704.103",
          "device":"unknown",
          "deviceType":"desktop",
          "platform":{  
            "id":"mac os",
            "version":"10.11.5"
          },
          "mobile":false,
          "mobileId":"unknown",
          "os":"mac os",
          "lists":{  

          },
          "location":{  
            "continent":"NA",
            "country":"US",
            "region":"NY",
            "city":"NEWYORK"
          },
          "ip":"104.247.35.210",
          "matchingRules":null,
          "referrer":"",
          "segments":{  
            "298873633":"search",
            "298928413":"gc",
            "299044025":"false",
            "2250462273":"none",
            "2664470705":"true",
            "2815550413":"true",
            "2816530250":"true",
            "2851680020":"true"
          },
          "dimensions":{  

          },
          "audiences":{  
            "2690270357":true,
            "2840320495":true,
            "2846450017":true,
            "2854090004":true,
            "2870970152":false
          },
          "params":{  
            "":""
          }
        },
        "state":{  
          "activeExperiments":[
            "6360074345"
          ],
          "variationIdsMap":{  
            "6360074345":[
              "6367023442"
            ]
          },
          "variationMap":{  
            "6360074345":2
          },
          "variationNamesMap":{  
            "6360074345":"Finally, a college major for sports stats geeks"
          },
          "enabled":true,
          "integrations":{  
            "activeOAuthClientIds":[
            ]
          }
        }
      },
      "iapi":{  

      }
    },
    {  
      "activeExperiments":[
        "6405201336"
      ],
      "allExperiments":{  
        "6405201336":{  
          "conditional_code":"$( \".postid-10262545\" ).length > 0",
          "variation_weights":{  
            "6403512399":2000,
            "6403512398":2000,
            "6399660190":2000,
            "6388751002":2000,
            "6386990817":2000
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10262545]: The ugly scenes behind the blue wall of Facebook",
          "enabled":true,
          "variation_ids":[
            "6403512398",
            "6403512399",
            "6399660190",
            "6388751002",
            "6386990817"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6403512398",
            "6403512399",
            "6399660190",
            "6388751002",
            "6386990817"
          ]
        }
      },
      "all_experiments":{  
        "6405201336":{  
          "conditional_code":"$( \".postid-10262545\" ).length > 0",
          "variation_weights":{  
            "6403512399":2000,
            "6403512398":2000,
            "6399660190":2000,
            "6388751002":2000,
            "6386990817":2000
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10262545]: The ugly scenes behind the blue wall of Facebook",
          "enabled":true,
          "variation_ids":[
            "6403512398",
            "6403512399",
            "6399660190",
            "6388751002",
            "6386990817"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6403512398",
            "6403512399",
            "6399660190",
            "6388751002",
            "6386990817"
          ]
        }
      },
      "allVariations":{  
        "6403512399":{  
          "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Working at Facebook is worse than you could imagine \");",
          "name":"Working at Facebook is worse than you could imagine "
        },
        "6386990817":{  
          "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"It's not OK to talk about your wealth at Facebook \");",
          "name":"It's not OK to talk about your wealth at Facebook"
        },
        "6399660190":{  
          "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"The ruthless, punishing life of a Facebook employee \");",
          "name":"The ruthless, punishing life of a Facebook employee "
        },
        "6388751002":{  
          "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Insider reveals what really goes on at Facebook \");",
          "name":"Insider reveals what really goes on at Facebook "
        },
        "6403512398":{  
          "name":"Original"
        }
      },
      "revision":6598,
      "variationIdsMap":{  
        "6405201336":[
          "6388751002"
        ]
      },
      "variation_map":{  
        "6405201336":3
      },
      "variationMap":{  
        "6405201336":3
      },
      "variationNamesMap":{  
        "6405201336":"Insider reveals what really goes on at Facebook "
      },
      "data":{  
        "audiences":{  
          "2690270357":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ]
              ]
            ],
            "name":"Desktop only",
            "segment_id":2664470705
          },
          "2840320495":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2830940549
                  }
                ]
              ]
            ],
            "name":"New Visitors",
            "segment_id":2816530250
          },
          "2846450017":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "not",
                  [
                    "or",
                    {  
                      "dimension_id":2830940549
                    }
                  ]
                ]
              ]
            ],
            "name":"Returning Visitors",
            "segment_id":2815550413
          },
          "2854090004":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2862580005,
                    "value":"US|NY|NEWYORK"
                  }
                ]
              ]
            ],
            "name":"NYC",
            "segment_id":2851680020
          },
          "2870970152":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  }
                ]
              ],
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2855410187,
                    "value":"true",
                    "match":"exact"
                  }
                ]
              ]
            ],
            "name":"Desktop only + Test cookie",
            "segment_id":2865290708
          }
        },
        "thirdParty":{  

        },
        "experiments":{  
          "6405201336":{  
            "code":"",
            "name":"Wordpress [10262545]: The ugly scenes behind the blue wall of Facebook",
            "conditional":true,
            "manual":false,
            "section_ids":[
            ],
            "variation_ids":[
              "6403512398",
              "6403512399",
              "6399660190",
              "6388751002",
              "6386990817"
            ]
          }
        },
        "segments":{  
          "298873633":{  
            "name":"Source Type"
          },
          "298928413":{  
            "name":"Browser"
          },
          "299044025":{  
            "name":"Mobile Visitors"
          },
          "2250462273":{  
            "name":"Campaign"
          },
          "2664470705":{  
            "name":"Desktop only"
          },
          "2815550413":{  
            "name":"Returning Visitors"
          },
          "2816530250":{  
            "name":"New Visitors"
          },
          "2851680020":{  
            "name":"NYC"
          },
          "2865290708":{  
            "name":"Desktop only + Test cookie"
          }
        },
        "sections":{  

        },
        "variations":{  
          "6403512399":{  
            "name":"Working at Facebook is worse than you could imagine ",
            "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Working at Facebook is worse than you could imagine \");"
          },
          "6386990817":{  
            "name":"It's not OK to talk about your wealth at Facebook",
            "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"It's not OK to talk about your wealth at Facebook \");"
          },
          "6399660190":{  
            "name":"The ruthless, punishing life of a Facebook employee ",
            "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"The ruthless, punishing life of a Facebook employee \");"
          },
          "6388751002":{  
            "name":"Insider reveals what really goes on at Facebook ",
            "code":"$(\"h1 > .postid-10262545, h3.postid-10262545, h2.postid-10262545\").text(\"Insider reveals what really goes on at Facebook \");"
          },
          "6403512398":{  
            "name":"Original",
            "code":""
          }
        },
        "visitor":{  
          "browser":"Chrome",
          "browserVersion":"51.0.2704.103",
          "device":"unknown",
          "deviceType":"desktop",
          "platform":{  
            "id":"mac os",
            "version":"10.11.5"
          },
          "mobile":false,
          "mobileId":"unknown",
          "os":"mac os",
          "lists":{  

          },
          "location":{  
            "continent":"NA",
            "country":"US",
            "region":"NY",
            "city":"NEWYORK"
          },
          "ip":"104.247.35.210",
          "matchingRules":null,
          "referrer":"",
          "segments":{  
            "298873633":"search",
            "298928413":"gc",
            "299044025":"false",
            "2250462273":"none",
            "2664470705":"true",
            "2815550413":"true",
            "2816530250":"true",
            "2851680020":"true"
          },
          "dimensions":{  

          },
          "audiences":{  
            "2690270357":true,
            "2840320495":true,
            "2846450017":true,
            "2854090004":true,
            "2870970152":false
          },
          "params":{  
            "":""
          }
        },
        "state":{  
          "activeExperiments":[
            "6405201336"
          ],
          "variationIdsMap":{  
            "6405201336":[
              "6388751002"
            ]
          },
          "variationMap":{  
            "6405201336":3
          },
          "variationNamesMap":{  
            "6405201336":"Insider reveals what really goes on at Facebook "
          },
          "enabled":true,
          "integrations":{  
            "activeOAuthClientIds":[
            ]
          }
        }
      },
      "iapi":{  

      }
    },
    {  
      "activeExperiments":[
        "6398621582"
      ],
      "allExperiments":{  
        "6398621582":{  
          "conditional_code":"$( \".postid-10262972\" ).length > 0",
          "variation_weights":{  
            "6388851353":3334,
            "6388851354":3333,
            "6402462627":3333
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10262972]: Cows cannot resist this beautiful Swedish woman",
          "enabled":true,
          "variation_ids":[
            "6388851353",
            "6388851354",
            "6402462627"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6388851353",
            "6388851354",
            "6402462627"
          ]
        }
      },
      "all_experiments":{  
        "6398621582":{  
          "conditional_code":"$( \".postid-10262972\" ).length > 0",
          "variation_weights":{  
            "6388851353":3334,
            "6388851354":3333,
            "6402462627":3333
          },
          "activation_mode":"conditional",
          "name":"Wordpress [10262972]: Cows cannot resist this beautiful Swedish woman",
          "enabled":true,
          "variation_ids":[
            "6388851353",
            "6388851354",
            "6402462627"
          ],
          "urls":[
            {  
              "match":"simple",
              "value":"nypost.com"
            }
          ],
          "enabled_variation_ids":[
            "6388851353",
            "6388851354",
            "6402462627"
          ]
        }
      },
      "allVariations":{  
        "6388851353":{  
          "name":"Original"
        },
        "6388851354":{  
          "code":"$(\"h1 > .postid-10262972, h3.postid-10262972, h2.postid-10262972\").text(\"Swedish Daenerys Targaryen calls cows instead of dragons\");",
          "name":"Swedish Daenerys Targaryen calls cows instead of dragons"
        },
        "6402462627":{  
          "code":"$(\"h1 > .postid-10262972, h3.postid-10262972, h2.postid-10262972\").text(\"This woman brings all the milkshakes to the Fjord\");",
          "name":"This woman brings all the milkshakes to the Fjord"
        }
      },
      "revision":6600,
      "variationIdsMap":{  
        "6398621582":[
          "6388851353"
        ]
      },
      "variation_map":{  
        "6398621582":0
      },
      "variationMap":{  
        "6398621582":0
      },
      "variationNamesMap":{  
        "6398621582":"Original"
      },
      "data":{  
        "audiences":{  
          "2690270357":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  },
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ]
              ]
            ],
            "name":"Desktop only",
            "segment_id":2664470705
          },
          "2840320495":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2830940549
                  }
                ]
              ]
            ],
            "name":"New Visitors",
            "segment_id":2816530250
          },
          "2846450017":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "not",
                  [
                    "or",
                    {  
                      "dimension_id":2830940549
                    }
                  ]
                ]
              ]
            ],
            "name":"Returning Visitors",
            "segment_id":2815550413
          },
          "2854090004":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2862580005,
                    "value":"US|NY|NEWYORK"
                  }
                ]
              ]
            ],
            "name":"NYC",
            "segment_id":2851680020
          },
          "2870970152":{  
            "conditions":[
              "and",
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"desktop"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"tablet"
                  }
                ],
                [
                  "or",
                  {  
                    "dimension_id":2593380160,
                    "value":"ipad"
                  }
                ]
              ],
              [
                "or",
                [
                  "or",
                  {  
                    "dimension_id":2855410187,
                    "value":"true",
                    "match":"exact"
                  }
                ]
              ]
            ],
            "name":"Desktop only + Test cookie",
            "segment_id":2865290708
          }
        },
        "thirdParty":{  

        },
        "experiments":{  
          "6398621582":{  
            "code":"",
            "name":"Wordpress [10262972]: Cows cannot resist this beautiful Swedish woman",
            "conditional":true,
            "manual":false,
            "section_ids":[
            ],
            "variation_ids":[
              "6388851353",
              "6388851354",
              "6402462627"
            ]
          }
        },
        "segments":{  
          "298873633":{  
            "name":"Source Type"
          },
          "298928413":{  
            "name":"Browser"
          },
          "299044025":{  
            "name":"Mobile Visitors"
          },
          "2250462273":{  
            "name":"Campaign"
          },
          "2664470705":{  
            "name":"Desktop only"
          },
          "2815550413":{  
            "name":"Returning Visitors"
          },
          "2816530250":{  
            "name":"New Visitors"
          },
          "2851680020":{  
            "name":"NYC"
          },
          "2865290708":{  
            "name":"Desktop only + Test cookie"
          }
        },
        "sections":{  

        },
        "variations":{  
          "6388851353":{  
            "name":"Original",
            "code":""
          },
          "6388851354":{  
            "name":"Swedish Daenerys Targaryen calls cows instead of dragons",
            "code":"$(\"h1 > .postid-10262972, h3.postid-10262972, h2.postid-10262972\").text(\"Swedish Daenerys Targaryen calls cows instead of dragons\");"
          },
          "6402462627":{  
            "name":"This woman brings all the milkshakes to the Fjord",
            "code":"$(\"h1 > .postid-10262972, h3.postid-10262972, h2.postid-10262972\").text(\"This woman brings all the milkshakes to the Fjord\");"
          }
        },
        "visitor":{  
          "browser":"Chrome",
          "browserVersion":"51.0.2704.103",
          "device":"unknown",
          "deviceType":"desktop",
          "platform":{  
            "id":"mac os",
            "version":"10.11.5"
          },
          "mobile":false,
          "mobileId":"unknown",
          "os":"mac os",
          "lists":{  

          },
          "location":{  
            "continent":"NA",
            "country":"US",
            "region":"NY",
            "city":"NEWYORK"
          },
          "ip":"104.247.35.210",
          "matchingRules":null,
          "referrer":"",
          "segments":{  
            "298873633":"search",
            "298928413":"gc",
            "299044025":"false",
            "2250462273":"none",
            "2664470705":"true",
            "2815550413":"true",
            "2816530250":"true",
            "2851680020":"true"
          },
          "dimensions":{  

          },
          "audiences":{  
            "2690270357":true,
            "2840320495":true,
            "2846450017":true,
            "2854090004":true,
            "2870970152":false
          },
          "params":{  
            "":""
          }
        },
        "state":{  
          "activeExperiments":[
            "6398621582"
          ],
          "variationIdsMap":{  
            "6398621582":[
              "6388851353"
            ]
          },
          "variationMap":{  
            "6398621582":0
          },
          "variationNamesMap":{  
            "6398621582":"Original"
          },
          "enabled":true,
          "integrations":{  
            "activeOAuthClientIds":[
            ]
          }
        }
      },
      "iapi":{  

      }
    }
  ],

  optimizely: null,

  activeExperiments: [],

  constructor: function(attr, opt) {
    this._prePopulatedPtr = Math.floor((Math.random() * this._prePopulated.length));

    Backbone.Model.apply(this, arguments);
  },

  setActiveExperiments: function() {
    this.activeExperiments = [];

    var obj = this.optimizely;

    // Error handling: optimizely is not usable
    if(obj.activeExperiments == null
      || obj.activeExperiments.length == 0) {
      
      if(!this.attributes.usePrePopulated) {
        if(this.attributes.useInactive) {
          obj.activeExperiments = this.optimizely.allExperiments;
        }
        else {
          return this.activeExperiments;
        }
      }
      else {
        obj = this._prePopulated[this._prePopulatedPtr];
        this.attributes.isUsingPrePopulated = true;
        // $("span.debugging-note").show();
      }
    }

    var _activeExperiments = obj.activeExperiments;

    if (this.attributes.forceUseInactive) _activeExperiments = Object.keys(this.optimizely.allExperiments);

    var unwrap = function(str, cnt) {
      str = str.substring(1);
      str = str.substring(0, str.length - 1);
      return str.trim();
    };

    for (var expIndex in _activeExperiments) {

      var expId = _activeExperiments[expIndex];
      var varIds = obj.allExperiments[expId].enabled_variation_ids;
      if(varIds.length < 2) continue;
      var variations = [];

      for (var varIndex in varIds) {

        var varId = varIds[varIndex];
        var variation = obj.allVariations[varId];
        variation.id = varId;
        variation.current = false;

        var headline = variation.code || '';

        if(headline.includes('.text(') ||
          (headline == '' && variation.name == 'Original')) {
          //
          // New York Post Rule
          //
          var i = headline.indexOf('text(');
          if(i >= 0) {
            headline = headline.substring(i + 4);
          }
          else {
            var head = obj.allExperiments[expId].name.indexOf(']:');
            headline = obj.allExperiments[expId].name.substring(head).replace(']:', '').trim();
          }

          if(headline.endsWith(';')) {
            headline = headline.substring(0, headline.length - 1);
          }

          // Detect current condition
          var currentArr = obj.variationIdsMap[expId];
          console.log(currentArr);
          if (Array.isArray(currentArr)
            && currentArr.length >= 1
            && currentArr.includes(varId)) {
            variation.current = true;
          }
        }
        else if(headline.includes('window.runSubscribeTest( true, \'')) {
          //
          // New York Times Rule 1: for subscription test
          //
          var i = headline.indexOf('window.runSubscribeTest( true, \'');
          headline = headline.substring(i);
          headline = headline.replace('window.runSubscribeTest( true, \'', '');
          i = headline.indexOf(', \'SubscribeGoal\'');
          headline = headline.substring(0, i);
        }
        else if(headline.includes('window.runComplexABTest(')) {
          //
          // New York Times Rule 2: for headline test
          //
          var exp = obj.allExperiments[expId];
          var head = exp.name.indexOf(' ');
          var fromExpName = exp.name.substring(head);
          console.log('fromExpName', fromExpName);

          var fromCode = obj.allVariations[varIds[varIndex]].code;
          var head = fromCode.indexOf('window.runComplexABTest(');
          fromCode = fromCode.substring(head).replace('window.runComplexABTest(', '').trim();
          if (fromCode.includes('/*_optimizely_evaluate')) {
            var cmtIndex = fromCode.indexOf('/*_optimizely_evaluate');
            fromCode = fromCode.substring(0, cmtIndex).trim();
          }
          if (fromCode.endsWith(';')) {
            fromCode = fromCode.substring(0, fromCode.length - 1).trim();
          }
          if (fromCode.endsWith(')')) {
            fromCode = fromCode.substring(0, fromCode.length - 1).trim();
          }

          fromCode = fromCode.split(',');
          fromCode.splice(0, 3);
          fromCode.splice(fromCode.length - 2, 2);
          fromCode = fromCode.join().trim();
          console.log('fromCode', fromCode);

          if(fromCode != null && (fromCode == '' || fromCode == '\'\'' || fromCode == fromExpName)) {
            headline = fromExpName;
          }
          else {
            headline = fromCode;
          }

          // TODO: detect current condition -- coudn't do this bc haven't seen live data
        }

        //
        // Common Processing
        //
        headline = headline.trim();
        while(
          (headline.startsWith('(') && headline.endsWith(')'))
          || (headline.startsWith('"') && headline.endsWith('"'))
          || (headline.startsWith('\'') && headline.endsWith('\''))
          || (headline.startsWith('&quot;') && headline.endsWith('&quot;'))
          || (headline.startsWith('&#39;') && headline.endsWith('&#39;'))
          ) {
          headline = unwrap(headline, 1);
        }

        variation.headline = headline;

        variations.push(variation);
      }

      var experiment = {
        id: expId,
        variations: variations
      };

      this.activeExperiments.push(experiment);
    }

    for(var expIndex in this.activeExperiments) {
      var experiment = this.activeExperiments[expIndex];
      experiment.variations.sort(function(a, b) {
        return (a.current == b.current) ? 0 : (a.current ? -1 : 1);
      });
    }

    return this.activeExperiments;
  }
});



var Messenger = Backbone.Model.extend({
  defaults: {
    name: null,
    tabId: null,
    connected: false
  },

  constructor: function(attr, opt) {
    this.ports = null;
    this.handlers = null;

    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attr, opt) {
    console.log('initialized', 'Messenger', this);

    this.on('change:connected', function() {
      console.log('change', 'connected', this);
    });
  },

  addPort: function(portName, port) {
    this.ports[portName] = port;
  },

  removePort: function(portName) {
    if(portName in this.ports) {
      this.ports[portName] = null;
      delete this.ports[portName];
    }
  },

  send: function(receiver, message) {
    var port = this.ports[receiver];
    if(port && port.postMessage) {
      port.postMessage({
        sender: this.name,
        receiver: receiver,
        content: msg
      });
    }
    else {
      console.error('cannot send a message to', receiver);
    }
  },

  addMessageHandler: function(eventName, handlerFunc) {
    this.handlers[eventName] = handlerFunc;
    // TODO: real binding between events and handlers?
  }
});



var SandboxRenderer = Backbone.Model.extend({
  constructor: function(attr, opt) {
    // Currently, attr requires sources and compileFunction
    this.sources = {};
    this.templates = {};
    this.compileFunction = {};

    var srcName = tempName = '';
    for(var srcIndex in attr.sources) { // an array of sourceName-sourceElemId pairs
      var source = attr.sources[srcIndex];
      srcName = tempName = Object.keys(source)[0];
      var srcText = source[srcName];
      this._setSource(srcName, srcText);
    }

    this._setTemplate(tempName, attr.compileFunction);
    
    Backbone.Model.apply(this, arguments);
  },

  _setSource: function(sourceName, sourceText) {
    this.sources[sourceName] = sourceText;
  },

  _setTemplate: function(templateName, compileFunc) {
    this.templates[templateName] = compileFunc(this.sources[templateName]);
  },

  sbRender: function(sourceName, context) {
    var source = this.sources[sourceName];
    if(!source) {
      console.error('cannot find the source. setSource before render.', sourceName);
      return '';
    }
    // if(!templateName in templates) {
    //   _setTemplate(templateName);
    // }
    return this.templates[sourceName](context);
  }
});



var Tab = Backbone.Model.extend({
  defaults: {
    tabId: null,
    name: null,
    isOpen: true
  },

  constructor: function(attr, opt) {
    this.messenger = new Messenger(attr);
    this.processor = new Processor(attr);

    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attr, opt) {
    console.log('initialized', 'Tab', this);

    this.on('change:isOpen', function() {
      console.log('change', 'isOpen', this);
    });
  },

  getOptimizely: function() {
    return this.processor.optimizely;
  },

  getActiveExperiments: function() {
    return this.processor.activeExperiments;
  },

  getPort: function(portName) {
    if(portName) {
      return this.messenger.ports[portName];
    }

    return this.messenger.ports;
  }
});
