import * as React from "react";
import { match} from "react-router-dom";

  type TParams = { id: string };

  interface DetailParams {
    id: string;
  }
  
  interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
  }

class EditContat extends React.Component<DetailsProps, any> {

    constructor(props:any) {
        super(props);
        this.state = { currentEnthusiasm: 1 };
      }

      render(){
        const matcdh:any = this.props.match;
     return <h2>This is a page for pdddroduct with ID: { matcdh.params.id } </h2>;
      }

}


// function EditContat({ match }: RouteComponentProps<TParams>) {
//   return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }



export default EditContat;

