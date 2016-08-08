var Processor = Backbone.Model.extend({
  defaults: {
    tabId: null,
    isFound: false,
    isUsingPrePopulated: false,
    usePrePopulated: false,
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
    },
    {  
      "activeExperiments":[  
        "5355901213",
        "6518261295",
        "6269850443"
      ],
      "allExperiments":{  
        "5355901213":{  
          "audiences":[  
            5356961117
          ],
          "variation_weights":{  
            "5361970061":10000
          },
          "uses_geotargeting":true,
          "name":"HP Footer Subscribe Links - Domestic",
          "enabled":true,
          "variation_ids":[  
            "5352520319",
            "5361970061"
          ],
          "urls":[  
            {  
              "match":"substring",
              "value":"http://international.nytimes.com"
            },
            {  
              "match":"substring",
              "value":"http://www.nytimes.com"
            }
          ],
          "enabled_variation_ids":[  
            "5361970061"
          ]
        },
        "6518261295":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runComplexABTest = function( assetId, swapHed, swapSum, newHeadline, newSummary, goalName ) {if (swapHed && assetId && newHeadline) {window.headInterval = setInterval(function() {var headline = $('article#topnews-' + assetId + ' .story-heading a').first();if (headline.length > 0) {headline.html(newHeadline);clearInterval(window.headInterval);}}, 50);}if (swapSum && assetId && newSummary) {window.sumInterval = setInterval(function() {var summary = $('article#topnews-' + assetId + ' .summary').first();if (summary.length > 0) {summary.html(newSummary);clearInterval(window.sumInterval);}}, 50);}if (goalName) {$('article#topnews-' + assetId + ' .story-heading a').live('mousedown', function() {window.optimizely.push(['trackEvent', goalName]);});}};\n/*_optimizely_evaluate=safe */",
          "variation_weights":{  
            "6512011305":5000,
            "6512011306":5000
          },
          "name":"100000004526647_1468420779271 Yale Drops Case Against Worker Who Smashed Window",
          "enabled":true,
          "variation_ids":[  
            "6512011305",
            "6512011306"
          ],
          "urls":[  
            {  
              "match":"simple",
              "value":"http://www.nytimes.com/"
            }
          ],
          "enabled_variation_ids":[  
            "6512011305",
            "6512011306"
          ]
        },
        "6269850443":{  
          "code":"/*_optimizely_evaluate=force */\nwindow.runSubscribeTest = function(runTest, language, goalName) {\n    if (runTest && language) {\n        window.headInterval = setInterval(function() {\n            var headline = $('#subscribe-msg').first();\n            if (language.length > 0) {\n                headline.html(language);\n                clearInterval(window.headInterval);\n            }\n        }, 50);\n    }\n   \n    if (goalName) {\n        $('#subscribe-lang-1 a').live('mousedown', function() {\n            window.optimizely.push(['trackEvent', goalName]);\n        });\n    }\n};\n/*_optimizely_evaluate=safe */",
          "variation_weights":{  
            "6261770338":5000,
            "6275461442":5000
          },
          "name":"Subscribe Promo AB",
          "enabled":true,
          "variation_ids":[  
            "6278980107",
            "6261770338",
            "6275461442"
          ],
          "urls":[  
            {  
              "match":"simple",
              "value":"http://www.nytimes.com/"
            }
          ],
          "enabled_variation_ids":[  
            "6261770338",
            "6275461442"
          ]
        }
      },
      "allVariations":{  
        "5361970061":{  
          "code":"$(\".home-delivery > a\").attr({\"href\":\"http://www.nytimes.com/digitalleftnav\"});\n$(\".home-delivery > a\").text(\"Home Delivery\");\n$(\".home-delivery > a\").attr({\"href\":\"http://www.nytimes.com/hdleftnav\"});\n$(\".digital-subscriptions > a\").attr({\"href\":\"http://www.nytimes.com/digitalleftnav\"});",
          "name":"Variation #1"
        },
        "6512011305":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runComplexABTest( 100000004526647, 'false', 'false', '', '', '100000004526647_1468420779271' );\n/*_optimizely_evaluate=safe */",
          "id":"6512011305",
          "current":false,
          "headline":"Yale Drops Case Against Worker Who Smashed Window"
        },
        "6512011306":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runComplexABTest( 100000004526647, 'true', 'false', 'A Yale Window Depicted Slavery. A Worker Smashed It.', '', '100000004526647_1468420779271' );\n/*_optimizely_evaluate=safe */",
          "name":"A Yale Window Depicted Slavery. A Worker Smashed It.",
          "id":"6512011306",
          "current":false,
          "headline":"A Yale Window Depicted Slavery. A Worker Smashed It."
        },
        "6261770338":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runSubscribeTest( true, 'You count on us for the facts. We count on you for support.', 'SubscribeGoal' );\n/*_optimizely_evaluate=safe */",
          "name":"Count on us for facts",
          "id":"6261770338",
          "current":false,
          "headline":"You count on us for the facts. We count on you for support.'"
        },
        "6275461442":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runSubscribeTest( true, 'Your support is crucial to our mission', 'SubscribeGoal' );\n/*_optimizely_evaluate=safe */",
          "name":"Support Crucial to Mission",
          "id":"6275461442",
          "current":false,
          "headline":"Your support is crucial to our mission'"
        }
      },
      "all_experiments":{  
        "5355901213":{  
          "audiences":[  
            5356961117
          ],
          "variation_weights":{  
            "5361970061":10000
          },
          "uses_geotargeting":true,
          "name":"HP Footer Subscribe Links - Domestic",
          "enabled":true,
          "variation_ids":[  
            "5352520319",
            "5361970061"
          ],
          "urls":[  
            {  
              "match":"substring",
              "value":"http://international.nytimes.com"
            },
            {  
              "match":"substring",
              "value":"http://www.nytimes.com"
            }
          ],
          "enabled_variation_ids":[  
            "5361970061"
          ]
        },
        "6518261295":{  
          "code":"/*_optimizely_evaluate=force */ \nwindow.runComplexABTest = function( assetId, swapHed, swapSum, newHeadline, newSummary, goalName ) {if (swapHed && assetId && newHeadline) {window.headInterval = setInterval(function() {var headline = $('article#topnews-' + assetId + ' .story-heading a').first();if (headline.length > 0) {headline.html(newHeadline);clearInterval(window.headInterval);}}, 50);}if (swapSum && assetId && newSummary) {window.sumInterval = setInterval(function() {var summary = $('article#topnews-' + assetId + ' .summary').first();if (summary.length > 0) {summary.html(newSummary);clearInterval(window.sumInterval);}}, 50);}if (goalName) {$('article#topnews-' + assetId + ' .story-heading a').live('mousedown', function() {window.optimizely.push(['trackEvent', goalName]);});}};\n/*_optimizely_evaluate=safe */",
          "variation_weights":{  
            "6512011305":5000,
            "6512011306":5000
          },
          "name":"100000004526647_1468420779271 Yale Drops Case Against Worker Who Smashed Window",
          "enabled":true,
          "variation_ids":[  
            "6512011305",
            "6512011306"
          ],
          "urls":[  
            {  
              "match":"simple",
              "value":"http://www.nytimes.com/"
            }
          ],
          "enabled_variation_ids":[  
            "6512011305",
            "6512011306"
          ]
        },
        "6269850443":{  
          "code":"/*_optimizely_evaluate=force */\nwindow.runSubscribeTest = function(runTest, language, goalName) {\n    if (runTest && language) {\n        window.headInterval = setInterval(function() {\n            var headline = $('#subscribe-msg').first();\n            if (language.length > 0) {\n                headline.html(language);\n                clearInterval(window.headInterval);\n            }\n        }, 50);\n    }\n   \n    if (goalName) {\n        $('#subscribe-lang-1 a').live('mousedown', function() {\n            window.optimizely.push(['trackEvent', goalName]);\n        });\n    }\n};\n/*_optimizely_evaluate=safe */",
          "variation_weights":{  
            "6261770338":5000,
            "6275461442":5000
          },
          "name":"Subscribe Promo AB",
          "enabled":true,
          "variation_ids":[  
            "6278980107",
            "6261770338",
            "6275461442"
          ],
          "urls":[  
            {  
              "match":"simple",
              "value":"http://www.nytimes.com/"
            }
          ],
          "enabled_variation_ids":[  
            "6261770338",
            "6275461442"
          ]
        }
      },
      "data":{  

      },
      "iapi":{  
        "revision":3716
      },
      "variationIdsMap":{  
        "5355901213":[  
          "5361970061"
        ],
        "6269850443":[  
          "6275461442"
        ],
        "6455440622":[  
          "6462540676"
        ],
        "6459951494":[  
          "6458121630"
        ],
        "6462231828":[  
          "6466143600"
        ],
        "6487211611":[  
          "6484840088"
        ],
        "6518261295":[  
          "6512011306"
        ]
      },
      "variationMap":{  
        "5355901213":1,
        "6269850443":2,
        "6455440622":0,
        "6459951494":0,
        "6462231828":0,
        "6487211611":0,
        "6518261295":1
      },
      "variationNamesMap":{  
        "5355901213":"Variation #1",
        "6269850443":"Support Crucial to Mission",
        "6455440622":"Var 6462540676",
        "6459951494":"Var 6458121630",
        "6462231828":"Var 6466143600",
        "6487211611":"Var 6484840088",
        "6518261295":"A Yale Window Depicted Slavery. A Worker Smashed It."
      },
      "variation_map":{  
        "5355901213":1,
        "6269850443":2,
        "6455440622":0,
        "6459951494":0,
        "6462231828":0,
        "6487211611":0,
        "6518261295":1
      }
    }
  ],

  optimizely: null,

  activeExperiments: [],

  orgHeadlines: null,

  constructor: function(attr, opt) {
    this._prePopulatedPtr = Math.floor((Math.random() * this._prePopulated.length));

    Backbone.Model.apply(this, arguments);
  },

  setActiveExperiments: function() {
    this.activeExperiments = [];

    var obj = this.optimizely;

    // Error handling 1: optimizely is not usable or exist
    if(obj.activeExperiments == null
      || obj.activeExperiments.length == 0) {

      if(!this.get('usePrePopulated')) {
        if(this.get('useInactive')) {
          // Decided to use one of past data of the news site: only debugging purpose
          // TODO: not perfectly tested
          obj.activeExperiments = this.optimizely.allExperiments;
        }
        else {
          // Just return an emply array: nothing to show
          return this.activeExperiments;
        }
      }
      else {
        // Decided to use prepopulated data
        obj = this._prePopulated[this._prePopulatedPtr];
        this.set('isUsingPrePopulated', true);
      }
    }

    var _activeExperiments = obj.activeExperiments;

    if (this.get('forceUseInactive')) _activeExperiments = Object.keys(this.optimizely.allExperiments);

    var unwrap = function(str, cnt) {
      str = str.substring(1);
      str = str.substring(0, str.length - 1);
      return str.trim();
    };

    for (var expIndex in _activeExperiments) {

      var expId = _activeExperiments[expIndex];

      if(!obj.allExperiments[expId]) continue; // addtion made while building optcollector

      var varIds = obj.allExperiments[expId].enabled_variation_ids;
      if(varIds.length < 2) continue;
      var variations = [];

      for (var varIndex in varIds) {

        var varId = varIds[varIndex];
        var variation = obj.allVariations[varId];
        variation.id = varId;
        var current = false;
        variation.current = current; // by default

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
            current = true;
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
          headline = headline.substring(0, i - 1);

          if(obj.variationIdsMap[expId].length > 0) {
            var currentHeadlineId = obj.variationIdsMap[expId][0];
            if(varId == currentHeadlineId) {
              current = true;
            }
          }
        }
        else if(headline.includes('window.runComplexABTest(')) {
          //
          // New York Times Rule 2: for headline test
          //
          var exp = obj.allExperiments[expId];
          var code = obj.allVariations[varIds[varIndex]].code;
          var identifier = code.match(/runComplexABTest\(\s*\d+/)[0];
          identifier = identifier.replace('runComplexABTest(', '').trim();

          var fromPage = this.orgHeadlines[identifier];
          // console.log(fromPage);
          
          // "/*_optimizely_evaluate=force */ ↵window.runComplexABTest( 100000004574587, 'false', 'false', '', '', '100000004574587_1470682459118' );↵/*_optimizely_evaluate=safe */"
          // "/*_optimizely_evaluate=force */ ↵window.runComplexABTest( 100000004574587, 'true', 'false', 'Suicide Bomber Strikes at Lawyers&#39; Protest in Pakistan', '', '100000004574587_1470682459118' );↵/*_optimizely_evaluate=safe */"
          code = code.replace('\n', '').match(/\(\s*[0-9]+,\s*.+\)/)[0].split(',');
          fromCode = code.slice(3, code.length - 2).join(', ').trim();

          console.log(fromPage, fromCode);

          if(!fromCode || fromCode.trim() == '\'\'') {
            // Original headline; the code doesn't have the data
            headline = fromPage;
          }
          else {
            headline = fromCode;
          }

          if(obj.variationIdsMap[expId].length > 0) {
            var currentHeadlineId = obj.variationIdsMap[expId][0];
            if(varId == currentHeadlineId) {
              current = true;
            }
          }
        }

        //
        // Common Processing
        //
        headline = headline.trim();
        while(
          (headline.startsWith('(') && headline.endsWith(')'))
          || (headline.startsWith('"') && headline.endsWith('"'))
          || (headline.startsWith('\'') && headline.endsWith('\''))
          // || (headline.startsWith('&quot;') && headline.endsWith('&quot;'))
          // || (headline.startsWith('&#39;') && headline.endsWith('&#39;'))
          ) {
          headline = unwrap(headline, 1);
        }
        // while(headline.includes('&#39;')){
        //   headline = headline.replace('&#39;', '\'');
        // }

        variation.headline = headline;
        variation.current = current;

        if(variation.headline.trim() == '') continue;

        variations.push(variation);
      }

      var experiment = {
        id: expId,
        variations: variations
      };

      if(experiment.variations.length < 2) continue;

      // Sort variation; current condition goes first // addtion made while building optcollector
      experiment.variations.sort(function(a, b) {
        return (a.current == b.current) ? 0 : (a.current ? -1 : 1);
      });

      this.activeExperiments.push(experiment);
    }

    // Error handling 2: optimizely is not usable or exist
    // This happens when the page has an Optimizely object
    // with only dummy items with one or less variation; New York Times
    if(this.activeExperiments.length == 0
      && this.get('usePrePopulated')) {
      // Decided to use prepopulated data
      // So, do this again
      this.optimizely = {};
      this.setActiveExperiments();
    }

    return this.activeExperiments;
  }
});



var SandboxRenderer = Backbone.Model.extend({
  constructor: function(attr, opt) {
    // Currently, attr requires sources and compileFunction
    this.sources = {};
    this.templates = {};
    this.compileFunction = {};

    var sourceName = templateName = '';
    for(var srcIndex in attr.sources) {
      // attr.sources is an array of key (sourceName) - value (sourceText) pairs. For example,
      // sources:[
      //   { experiment: $('#experiment-template').html() }
      // ]
      var source = attr.sources[srcIndex];
      sourceName = templateName = Object.keys(source)[0]; // the only key in the source object; experiment in the example above
      var sourceText = source[sourceName];
      this._setSource(sourceName, sourceText);
    }

    this._setTemplate(templateName, attr.compileFunction);
    
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
  }
});
