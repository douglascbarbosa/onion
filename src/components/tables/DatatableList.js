import React from 'react';
import Datatable from './Datatable';
import history from '../../routes/History'

export default class DatatableList extends React.Component{

    afterTableDraw(){
        //Define the edit buttons click!
        let $ = window.$;
        $(`#${ this.props.id } tbody button.update-id`).on('click', this.onClickUpdateTable.bind(this));

        if (this.props.deleteevent){
            $(`#${ this.props.id } tbody button.delete-id`).on('click', this.onClickDeleteTable.bind(this));
        }
        
    }

    getObjDataId(obj){
        let $ = window.$;
        return $($(obj)[0].currentTarget).attr('data-id');
    }

    onClickDeleteTable(obj){
         this.props.deleteevent(this.getObjDataId(obj));
    }

    
    onClickUpdateTable(obj){
        //Halde the edit button click!
//        let $ = window.$;
//        const id = $($(obj)[0].currentTarget).attr('data-id');
        history.push(`/${this.props.formroute}/${this.getObjDataId(obj)}`);
    }  

    getActionsButtons(data){
        let resultButtons = '';
        
        resultButtons = `<button class="btn btn-primary update-id" data-id="${data.id}">Edit </button>`;

        //If the delete handle was defined I'll add the delet button on the action column!
        if (this.props.deleteevent){
            resultButtons += '<button class="btn btn-danger delete-id" data-id="'+ data.id +'">Delete </button>'
        }    

        return resultButtons;
    }

    render(){
        const self = this;
        
        //Addding the button click handler!
        let listOptions = {
            ...this.props.options,
            "aoColumnDefs" : [
                {
                  "aTargets": [2],
                  "mData" : null,
                  "mRender" : function (data, type, full){
                    return self.getActionsButtons(full);
                  }
                }
              ],            
            "drawCallback": this.afterTableDraw.bind(this)
        }
        
        return (
            <Datatable {...this.props} options={listOptions} className="table table-bordered table-hover" deleteevent="" >
                {this.props.children}
            </Datatable>
        )
    }

}