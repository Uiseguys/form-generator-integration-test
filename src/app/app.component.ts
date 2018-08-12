import { Component } from '@angular/core';

@Component({
    selector: `app-root`,
    templateUrl: './app.component.html'
})
export class AppComponent {
    schema: any;
    form: any;
    secondSchema: any;
    secondForm: any;

    constructor() {
        this.schema = {
          "type": "object",
          "required": ["checkbox", "min", "max", "startDate", "endDate", "startDateString", "endDateString", "dropdown", "autocomplete", "wysiwygEditor"],
          "properties": {
            "autocomplete": {
              "$id": "data/properties/autocomplete",
              "type": "array",
              "arrayType": "autocomplete",
              "items": {
                "$id": "/properties/autocomplete/items",
                "type": "object",
                "placeholder": "Search something e.g. 'Argentina'",
                "searchKey": "data.name",
                "enum": [
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Austria',
                      "capital": 'Vienna'
                    }
                  },
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Australia',
                      "capital": 'Canberra'
                    }
                  },
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Argentina',
                      "capital": 'Buenos Aires'
                    }
                  }
                ]
              }
            },
            "checkbox": {
              "$id": "data/properties/checkbox",
              "type": "boolean",
            },
            "duration": {
              "$id": "data/properties/duration",
              "type": "object",
              "properties": {
                "min": {
                  "$id": "data/properties/duration/properties/min",
                  "type": "integer",
                  "placeholder": "Min Value"
                },
                "max": {
                  "$id": "data/properties/duration/properties/max",
                  "type": "integer",
                  "placeholder": "Max Value",
                }
              }
            },
            "date": {
              "$id": "data/properties/date",
              "type": "object",
              "format": "date",
              "placeholder": "Select a Date",
              "startDate": {
                "$id": "data/properties/date/startDate",
                "type": "string"
              },
              "endDate": {
                "$id": "data/properties/date/endDate",
                "type": "string"
              },
              "lang": {
                "$id": "data/properties/date/lang",
                "type": "string"
              },
              "dateFormat": {
                "$id": "data/properties/date/dateFormat",
                "type": "string"
              }
            },
            "startDateString": {
              "$id": "data/properties/startDateString",
              "type": "string",
              "placeholder": "Start Date"
            },
            "endDateString": {
              "$id": "data/properties/endDateString",
              "type": "string",
              "placeholder": "End Date"
            },
            "dropdown": {
              "$id": "data/properties/dropdown",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": false,
                "placeholder": "Select a value",
                "readonly": true,
                "enum": ["Automatic", "Manual"]
              }
            },
            "wysiwygEditor": {
              "$id": "data/properties/wysiwygEditor",
              "type": "string",
              "stringType": "textarea",
              "fencing": true,
              "html": true,
              "markdown": true,
              "wysiwyg": true
            }
          }
        };

        this.form = {
          "autocomplete": [],
          "checkbox": false,
          "duration": {
            "min": 5,
            "max": 10
          },
          "date": {
            "startDate": "03/25/2018",
            "endDate": "04/12/2018",
            "lang": "en",
            "dateFormat": "MM.DD.YYYY"
          },
          "startDateString": "2007-08-31T16:47+00:00",
          "endDateString": "2007-08-31T16:47+00:00",
          "dropdown": [],
          "wysiwygEditor": "<strong>Initial Text</strong>"
        };

        this.secondSchema = {
          "type": "object",
          "properties": {
            "dropdown1": {
              "$id": "data/properties/dropdown1",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown1/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": true,
                "placeholder": "Select a value",
                "readonly": true,
                "enum": ["Windows", "OSX", "Linux"]
              }
            },
            "dropdown2": {
              "$id": "data/properties/dropdown2",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown2/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": true,
                "placeholder": "Select a value",
                "readonly": true,
                "if": { "dropdown1": ["Windows"] },
                "then": { "data": ["7", "10"] },
                "else": {
                  "if": { "dropdown1": ["OSX"] },
                  "then": { "data": ["High Sierra", "Mojave"] },
                  "else": {
                    "if": { "dropdown1": ["Linux"] },
                    "then": { "data": ["Linux Mint", "Ubuntu"] }
                  }
                },
                "enum": [
                  "7",
                  "10",
                  "High Sierra",
                  "Mojave",
                  "Linux Mint",
                  "Ubuntu"
                ]
              }
            },
            "dropdown3": {
              "$id": "data/properties/dropdown3",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown3/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": true,
                "placeholder": "Select a value",
                "readonly": true,
                "if": { "dropdown2": ["7"] },
                "then": { "data": ["Office Word 2007", "Notepad 2007"] },
                "else": {
                  "if": { "dropdown2": ["10"] },
                  "then": { "data": ["Office Word 2010", "Notepad 2010"] },
                  "else": {
                    "if": { "dropdown2": ["High Sierra"] },
                    "then": { "data": ["Libre office - Low Sierra", "Libre office - High Sierra"] },
                    "else": {
                      "if": { "dropdown2": ["Mojave"] },
                      "then": { "data": ["Libre office - Low Mojave", "Libre office - High Mojave"] },
                      "else": {
                        "if": { "dropdown2": ["Linux Mint"] },
                        "then": { "data": ["Linux office - Linux Mint", "Linux office - Linux Chocollate"] },
                        "else": {
                          "if": { "dropdown2": ["Ubuntu"] },
                          "then": { "data": ["Ubuntu office - Low Ubuntu", "Ubuntu office - High Ubuntu"] }
                        }
                      }
                    }
                  }
                },
                "enum": [
                  "Office Word 2007",
                  "Notepad 2007",
                  "Office Word 2010",
                  "Notepad 2010",
                  "Libre office - Low Sierra",
                  "Libre office - High Sierra",
                  "Libre office - Low Mojave",
                  "Libre office - High Mojave",
                  "Linux office - Linux Mint",
                  "Linux office - Linux Chocollate",
                  "Ubuntu office - Low Ubuntu",
                  "Ubuntu office - High Ubuntu"
                ]
              }
            },
            "dropdown4": {
              "$id": "data/properties/dropdown4",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown4/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": true,
                "placeholder": "Select a value",
                "readonly": true,
                "if": { "dropdown3": ["Office Word 2007"] },
                "then": { "data": ["Powerpoint", "SharePoint"] },
                "else": {
                  "if": { "dropdown3": ["Notepad 2007"] },
                  "then": { "data": ["Notepad Plus", "Notepad++"] },
                  "else": {
                    "if": { "dropdown3": ["Office Word 2010"] },
                    "then": { "data": ["Outlook", "Excel"] },
                    "else": {
                      "if": { "dropdown3": ["Notepad 2010"] },
                      "then": { "data": ["Notepad Plus 2010", "Notepad++ 2010"] },
                      "else": {
                        "if": { "dropdown3": ["Libre office - Low Sierra"] },
                        "then": { "data": ["Office Low Sierra 1", "Office Low Sierra 2"] },
                        "else": {
                          "if": { "dropdown3": ["Libre office - High Sierra"] },
                          "then": { "data": ["Office High Sierra 1", "Office High Sierra 2"] },
                          "else": {
                            "if": { "dropdown3": ["Libre office - Low Mojave"] },
                            "then": { "data": ["Office Low Mojave 1", "Office Low Mojave 2"] },
                            "else": {
                              "if": { "dropdown3": ["Libre office - High Mojave"] },
                              "then": { "data": ["Office High Mojave 1", "Office High Mojave 2"] },
                              "else": {
                                "if": { "dropdown3": ["Linux office - Linux Mint"] },
                                "then": { "data": ["Office Linux Mint 1", "Office Linux Mint 2"] },
                                "else": {
                                  "if": { "dropdown3": ["Linux office - Linux Chocollate"] },
                                  "then": { "data": ["Office Linux Chocollate 1", "Office Linux Chocollate 2"] },
                                  "else": {
                                    "if": { "dropdown3": ["Ubuntu office - Low Ubuntu"] },
                                    "then": { "data": ["Office Low Ubuntu 1", "Office Low Ubuntu 2"] },
                                    "else": {
                                      "if": { "dropdown3": ["Ubuntu office - High Ubuntu"] },
                                      "then": { "data": ["Office High Ubuntu 1", "Office High Ubuntu 2"] }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "enum": [
                  "Powerpoint",
                  "SharePoint",
                  "Notepad Plus",
                  "Notepad++",
                  "Outlook", "Excel",
                  "Notepad Plus 2010",
                  "Notepad++ 2010",
                  "Office Low Sierra 1",
                  "Office Low Sierra 2",
                  "Office High Sierra 1",
                  "Office High Sierra 2",
                  "Office Low Mojave 1",
                  "Office Low Mojave 2",
                  "Office High Mojave 1",
                  "Office High Mojave 2",
                  "Office Linux Mint 1",
                  "Office Linux Mint 2",
                  "Office Linux Chocollate 1",
                  "Office Linux Chocollate 2",
                  "Office Low Ubuntu 1",
                  "Office Low Ubuntu 2",
                  "Office High Ubuntu 1",
                  "Office High Ubuntu 2"
                ]
              }
            }
          },
          "required": ["dropdown1"],
          "dependencies": {
            "dropdown1": ["dropdown2"],
            "dropdown2": ["dropdown3"],
            "dropdown3": ["dropdown4"]
          }
        };

        this.secondForm = {
          "dropdown1": [],
          "dropdown2": [],
          "dropdown3": [],
          "dropdown4": []
        };
    }
}
