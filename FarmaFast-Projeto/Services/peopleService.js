'use strict';
import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
});
class PeopleService {
    constructor() {
    }

    ListAll() {

        api.get('/people', (req, res) => {
            const content = readFile()
            res.send(content)
        }).then(res => console.log(res));
    };

    ListById(id) {
        api.get('/people/' + id, (req, res) => {
            const content = readFile()
            res.send(content)
        }).then(res => console.log(res));
    };

    Save(data) {
        api.post('/people/', data)
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };

    Update(id) {
        api.put('people' + id, { data })
            .then(res => this.setState({ UpdateAt: response.data.UpdateAt }));
    };


    Remove() {
        api.delete(('people' + id, (req, res) => {
            const { id } = req.params
            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)
            currentContent.splice(selectedItem, 1)
            writeFile(currentContent)
            res.send(true)
        })).then(res => console.log(res));
    }
};

export default PeopleService; 