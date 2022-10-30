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
        api.post('/people', data)
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };

    Update() {

        api.put(('people', (req, res) => {
            const { id } = req.params

            const { name, cpf, dtbirth, password, repeatpassword, perfil } = req.body

            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)

            const { id: cId, name: cName, cpf: cCpf, dtbirth: cDtbirth, password: cPassword, repeatpassword: cRepeatpassword, perfil: cPerfil } = currentContent[selectedItem]

            const newObject = {
                id: cId,
                name: name ? name : cName,
                cpf: cpf ? cpf : cCpf,
                dtbirth: dtbirth ? dtbirth : cDtbirth,
                password: password ? password : cPassword,
                repeatpassword: repeatpassword ? repeatpassword : cRepeatpassword,
                perfil: perfil ? perfil : cPerfil
            }

            currentContent[selectedItem] = newObject
            writeFile(currentContent)

            res.send(newObject)
        })).then(res => console.log(res));
    };

    Remove() {
        api.delete(('people/:id', (req, res) => {
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