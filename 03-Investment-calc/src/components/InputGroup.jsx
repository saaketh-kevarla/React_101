import Input from "./Input";

export default function InputGroup({val1,val2,...props}){
    return <div className="input-group">
        <Input val ={val1} h = {props.h1}/>
        <Input  val = {val2} h = {props.h2}/>
    </div>
}