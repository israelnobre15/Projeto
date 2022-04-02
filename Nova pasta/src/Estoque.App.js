import React from 'react';
import MaterialTable from 'material-table';
import api from './axios/axios'
import moment from 'moment';

class EditableEstoque extends React.Component {

    constructor(props) 
    {
        
        super(props);
        this.state = {
            columns: [
                { title: 'Quantidade de estoque', field: 'qnt_stq'},
                {
                    title: 'Proxima entrega', field: 'prox_etg', type: 'date', 
                    render: rowData => moment(rowData.prox_etg).format('DD/MM/YYYY'),
                    filtering: false
                },
                {title: 'Nome do produto', field: 'nomeprod'},
                {
                    title: 'Ultima entrega', field: 'ult_etg', type: 'date', 
                    render: rowData => moment(rowData.ult_etg).format('DD/MM/YYYY'),
                    filtering: false
                },
                {
                    title: 'Data de fabricação', field: 'dat_fabric', type: 'date', 
                    render: rowData => moment(rowData.data_nasc).format('DD/MM/YYYY'),
                    filtering: false
                }
            

            ],
            data: [
            ]
        }
    }

    async componentWillMount() {
        try {
            const response = await api.get('/estoque/buscar');
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
            console.log(newData)
            const response = await api.post('/estoque/addprod', newData);
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
            const response = await api.put('/estoque/atualizar/' + oldData._id, newData);
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
            const response = await api.delete('/estoque/deletar/' + oldData._id);
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
                title="Estoque"
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

function Estoque() {
    return (
        <div className="Estoque">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <header className="App-header">
                <EditableEstoque></EditableEstoque>
            </header>
        </div>
    );
}

export default Estoque;