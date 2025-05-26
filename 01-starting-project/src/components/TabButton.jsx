export default function TabButton({onSelect,children}){
    
    return (
        //adding event to an element
        <li><button onClick={onSelect}>{children}</button></li>
    )
}