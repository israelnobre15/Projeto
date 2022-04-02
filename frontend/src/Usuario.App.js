import React from 'react';
import MaterialTable from 'material-table';
import api from './axios/axios'
import moment from 'moment';

class EditableUsuario extends React.Component {

    constructor(props) 
    {
        
        super(props);
        this.state = {
            columns: [
                { title: 'Email', field: 'email'},
                { title: 'Nome', field: 'nome' },
                {title: 'Celular', field: 'celular'},
                { 
                    title: 'CPF', 
                    field: 'cpf', 
                },
                {title: 'Endereço', field: 'endereco'},
                {title: 'Salário', field: 'salario'},
                
                {
                    title: 'Status', field: 'status',
                    lookup: {
                        'Usuário ativo': 'Usuário ativo',
                        'Usuário inativo': 'Usuário inativo',
                    },
                },
                { title: 'Idade', field: 'idade', type:'numeric', filtering: false },
                
                {title: 'Nome dependente', field:'nome_dep'},
                { title: 'Possui', field: 'possui', type: 'boolean' },
                {
                    title: 'Data de Nascimento', field: 'dat_nasc', type: 'date', 
                    render: rowData => moment(rowData.dat_nasc).format('DD/MM/YYYY'),
                    filtering: false
                },
            

            ],
            data: [
            ]
        }
    }

    async componentWillMount() {
        try {
            const response = await api.get('/usuario/listar');
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
            if (!newData.email) {
                alert('Email é obrigatório!!!')
                return;
            }
            console.log(newData)
            const response = await api.post('/usuario/cad', newData);
            const data = this.state.data;
            data.push(newData);
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

    async onRowUpdate(newData, oldData) {
        try {
            const response = await api.put('/usuario/atualizar/' + oldData._id, newData);
            const data = this.state.data;
            const index = data.indexOf(oldData);
            data[index] = newData;
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

    async onRowDelete(oldData) {
        try {
            const response = await api.delete('/usuario/deletar/' + oldData._id);
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
                title="Usuário"
                columns={this.state.columns}
                data={this.state.data}
                localization={{
                    body: {
                        addTooltip: 'Novo',
                        deleteTooltip: 'Remover',
                        editTooltip: 'Editar',
                        emptyDataSourceMessage: 'Nenhum registro na lista',
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

function Usuario() {
    return (
        <div className="Usuário">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <header className="App-header">
                <EditableUsuario></EditableUsuario>
            </header>
        </div>
    );
}

export default Usuario;