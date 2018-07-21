import { Component } from '@angular/core';

@Component({
    selector: `app-root`,
    templateUrl: './app.component.html'
})
export class AppComponent {
    schema: any;
    form: any;

    constructor() {
        this.schema = {
            "type": "object",
            "required": ["checked", "min", "max", "startDate", "endDate", "startDateString", "endDateString", "dropdown", "autocomplete"],
            "properties": {
                "checked": {
                    "$id": "data/properties/checked",
                    "type": "boolean",
                    "labelContent": "The Checked Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "placeholder": "Check Me",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "duration": {
                    "$id": "data/properties/duration",
                    "type": "object",
                    "properties": {
                        "min": {
                            "$id": "data/properties/duration/properties/min",
                            "type": "integer",
                            "labelContent": "The Min Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "placeholder": "Min Value",
                            "default": 0,
                            "examples": [
                                5
                            ]
                        },
                        "max": {
                            "$id": "data/properties/duration/properties/max",
                            "type": "integer",
                            "labelContent": "The Max Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "placeholder": "Max Value",
                            "default": 0,
                            "examples": [
                                10
                            ]
                        }
                    }
                },
                "date": {
                    "$id": "data/properties/date",
                    "labelContent": "Date",
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
                    "labelContent": "The Startdate Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "placeholder": "Start Date",
                    "default": "",
                    "examples": [
                        "2007-08-31T16:47+00:00"
                    ]
                },
                "endDateString": {
                    "$id": "data/properties/endDateString",
                    "type": "string",
                    "labelContent": "The Enddate Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "placeholder": "End Date",
                    "default": "",
                    "examples": [
                        "2007-08-31T16:47+00:00"
                    ]
                },
                "dropdown": {
                    "$id": "data/properties/dropdown",
                    "type": "array",
                    "arrayType": "dropdown",
                    "items": {
                        "$id": "/properties/dropdown/items",
                        "type": "string",
                        "labelContent": "Dropdown",
                        "buttonText": "Select",
                        "placeholder": "Select a value",
                        "data": ["Automatic", "Manual"]
                    }
                },
                "autocomplete": {
                    "$id": "data/properties/autocomplete",
                    "type": "array",
                    "arrayType": "autocomplete",
                    "items": {
                        "$id": "/properties/autocomplete/items",
                        "type": "object",
                        "labelContent": "Autocomplete",
                        "placeholder": "Search something e.g. 'Argentina'",
                        "searchKey": "data.name",
                        "data": [
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
                }
            }
        };

        this.form = {
            "checked": false,
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
            "autocomplete": []
        };
    }
}
