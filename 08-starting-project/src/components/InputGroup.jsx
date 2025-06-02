import Input from "./Input";

export default function InputGroup({val1,val2}){
    return <div className="input-group">
        <Input val ={val1} />
        <Input  val = {val2}/>
    </div>
}