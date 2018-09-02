import { Component } from '@angular/core';

@Component({
    templateUrl: './poc.component.html',
    styleUrls: [ 'poc.component.scss' ]
})
export class PocComponent {
  selectInputData: string[];
  viewSchema: any = {};
  viewData: any = {};
  personSchema: any;
  geographicalCoordinatesSchema: any;
  veggiesSchema: any;
  personData: any;
  geographicalCoordinatesData: any;
  veggiesData: any;

  constructor() {
    this.selectInputData = ["Person", "Geographical Data", "Veggies"];

    this.personSchema = {
      "$id": "https://example.com/person.schema.json",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Person",
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "description": "The person's first name."
        },
        "lastName": {
          "type": "string",
          "description": "The person's last name."
        },
        "age": {
          "description": "Age in years which must be equal to or greater than zero.",
          "type": "integer",
          "minimum": 0
        }
      }
    };
    this.geographicalCoordinatesSchema = {
      "id": "https://example.com/geographical-location.schema.json",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Longitude and Latitude Values",
      "description": "A geographical coordinate.",
      "required": [ "latitude", "longitude" ],
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "minimum": -90,
          "maximum": 90
        },
        "longitude": {
          "type": "number",
          "minimum": -180,
          "maximum": 180
        }
      }
    };
    this.veggiesSchema = {
      "id": "https://example.com/arrays.schema.json",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "A representation of a person, company, organization, or place",
      "type": "object",
      "properties": {
        "fruits": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "vegetables": {
          "type": "array",
          "items": { "$ref": "#/definitions/veggie" }
        }
      },
      "definitions": {
        "veggie": {
          "type": "object",
          "required": [ "veggieName", "veggieLike" ],
          "properties": {
            "veggieName": {
              "type": "string",
              "description": "The name of the vegetable."
            },
            "veggieLike": {
              "type": "boolean",
              "description": "Do I like this vegetable?"
            }
          }
        }
      }
    };

    this.personData = {
      "firstName": "John",
      "lastName": "Doe",
      "age": 21
    };
    this.geographicalCoordinatesData = {
      "latitude": 48.858093,
      "longitude": 2.294694
    };
    this.veggiesData = {
      "fruits": [ "apple", "orange", "pear" ],
      "vegetables": [
        {
          "veggieName": "potato",
          "veggieLike": true
        },
        {
          "veggieName": "broccoli",
          "veggieLike": false
        }
      ]
    };
  }

  onSelect(e) {
    switch (e.detail.value) {
      case 'Person':
        this.viewSchema = this.personSchema;
        this.viewData = this.personData;
        break;
      case 'Geographical Data':
        this.viewSchema = this.geographicalCoordinatesSchema;
        this.viewData = this.geographicalCoordinatesData;
        break;
      case 'Veggies':
        this.viewSchema = this.veggiesSchema;
        this.viewData = this.veggiesData;
        break;
      default:
        break;
    }
  }

  onFormSubmit(event) {
    console.log(event.detail);
  }
}
