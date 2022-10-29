import axios from "axios";
import React from "react";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

const readFile = () => {
    const content = fs.readFileSync('http://localhost:3000', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('http://localhost:3000', updateFile, 'utf-8')
}

class CompaniesService {

    get() {

        api.get('companies', (req, res) => {
            const content = readFile()
            res.send(content)
        }).then(res => showResponse(res));
    }

    post() {

        api.post('companies', (req, res) => {
            const { name, cnpj, password, repeatpassword } = req.body
            const currentContent = readFile()
            const id = Math.random().toString(32).substring(2, 9)
            currentContent.push({ id, name, cnpj, password, repeatpassword })
            writeFile(currentContent)
            res.send({ id, name, cnpj, password, repeatpassword })
        }).then(res => showResponse(res));
    }


    put() {
        api.put(('companies/{id}', (req, res) => {
            const { id } = req.params

            const { name, cnpj, password, repeatpassword } = req.body

            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)

            const { id: cId, name: cName, cnpj: cCnpj, password: cPassword, repeatpassword: cRepeatpassword } = currentContent[selectedItem]

            const newObject = {
                id: cId,
                name: name ? name : cName,
                cnpj: cCnpj ? cnpj : cCnpj,
                password: password ? password : cPassword,
                repeatpassword: repeatpassword ? repeatpassword : cRepeatpassword,
            }

            currentContent[selectedItem] = newObject
            writeFile(currentContent)

            res.send(newObject)
        })).then(res => showResponse(res));
    }

    delete() {
        api.delete(('companies/:id', (req, res) => {
            const { id } = req.params
            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)
            currentContent.splice(selectedItem, 1)
            writeFile(currentContent)
            res.send(true)
        })).then(res => showResponse(res));

    };

}

