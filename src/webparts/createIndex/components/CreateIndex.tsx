import * as React from 'react';
import styles from './CreateIndex.module.scss';
import { ICreateIndexProps, ICreateIndexState } from '../interfaces';
import { Label, TextField } from '@fluentui/react';
import SimpleReactValidator from 'simple-react-validator';
import { BaseService } from '../services';

export default class CreateIndex extends React.Component<ICreateIndexProps,ICreateIndexState, {}> {
  private _Service: BaseService;
  private validator: SimpleReactValidator;
  public constructor(props: ICreateIndexProps) {
    super(props);
    this.state = {
      currentUserId: "",
      currentUserName: "",
      documentCount: "",
    }
    this._Service = new BaseService(this.props.context, this.props.siteUrl);
  }
  // Validator
  public componentWillMount = () => {
    this.validator = new SimpleReactValidator({
      messages: { required: "This field is mandatory" }
    });
  }
  // On load
  public async componentDidMount() {
    this._Service.getCurrentUser().then((user: any) => {
      this.setState({
        currentUserId: user.Id,
        currentUserName: user.Title
      });
    });
  }
  public render(): React.ReactElement<ICreateIndexProps> {
    return (
      <section className={`${styles.createIndex}`}>
        <div className={styles.border}>
        <div className={styles.alignCenter}>{this.props.webpartHeader}</div>
        <div className={styles.divrow}>
                <div ><Label>Please enter document count to generate multiple indices :</Label></div>
                <div style={{ marginLeft: "20px" }}>
                  <TextField required type='number' min={1}
                    // onChange={this.documentCount}
                    value={this.state.documentCount} ></TextField>
                  <div style={{ color: "#dc3545" }}>
                    {this.validator.message("documentCount", this.state.documentCount, "required")}{" "}</div>
                </div>
              </div>
        </div>
      </section>
    );
  }
}
