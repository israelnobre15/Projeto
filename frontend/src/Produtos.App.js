import React from 'react';
import MaterialTable from 'material-table';
import api from './axios/axios'


class EditableProduto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Nome', field: 'nome' },
                {
                    title: 'Peso', field: 'peso',

                },
                { title: 'Preço', field: 'preco'},
                {
                    title: 'Tamanho',
                    field: 'tamanho',

                },
                {
                    title: 'Marca', field: 'marca', 

                },
            ],
            data: [
            ]
        }
    }




    async componentWillMount() {
        try {
            const response = await api.get('/produto/buscar');
            this.setState({ data: response.data })
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    async onRowAdd(newData) {
        try {
            const response = await api.post('/produto/cad', newData);
            const data = this.state.data;
            data.push(newData);
            this.setState({ data: response});
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    async onRowUpdate(newData, oldData) {
        try {
            const response = await api.put('/produto/atualizar/' + oldData._id, newData);
            const data = this.state.data;
            const index = data.indexOf(oldData);
            data[index] = newData;
            this.setState({ data});
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    async onRowDelete(oldData) {
        try {
            const response = await api.delete('/produto/deletar/' + oldData._id);
            let data = this.state.data;
            const index = data.indexOf(oldData);
            data.splice(index, 1);
            this.setState({ data });
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    render() {
        return (
            <MaterialTable
                title="Produtos"
                columns={this.state.columns}
                data={this.state.data}
                localization={{
                    body: {
                        addTooltip: 'Novo',
                        deleteTooltip: 'Remover',
                        editTooltip: 'Editar',
                        emptyDataSourceMessage: 'Nenhum produto existente',
                        editRow: {
                            deleteText: 'Confirma remoção ?',
                            cancelTooltip: 'Cancelar',
                            saveTooltip: 'Salvar'
                        }
                    },
                    header: {
                        actions: 'Ações'
                    },
                    pagination: {
                        labelDisplayedRows: '{from}-{to} de {count}',
                        labelRowsSelect: 'registros',
                        labelRowsPerPage: 'Registros por página:',
                        firstAriaLabel: 'Primeira',
                        firstTooltip: 'Primeira',
                        previousAriaLabel: 'Anterior',
                        previousTooltip: 'Anterior',
                        nextAriaLabel: 'Próxima',
                        nextTooltip: 'Próxima',
                        lastAriaLabel: 'Última',
                        lastTooltip: 'Última'
                    },
                    toolbar: {
                        exportTitle: 'Exportar',
                        exportAriaLabel: 'Exportar',
                        exportName: 'Exportar CSV',
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar'
                    }
                }}
                options={{
                    exportButton: true,
                    filtering: true,
                    pageSize: 10,
                    pageSizeOptions: [5, 10, 20, 100],
                    showTitle: false
                }}
                editable={{
                    onRowAdd: newData => this.onRowAdd(newData),
                    onRowUpdate: (newData, oldData) => this.onRowUpdate(newData, oldData),
                    onRowDelete: oldData => this.onRowDelete(oldData),
                }}
            />
        )
    }
}

function Produto() {
    return (
        <div className="Produtos">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <header className="App-header">
                <EditableProduto></EditableProduto>
            </header>
        </div>
    );
}

export default Produto;