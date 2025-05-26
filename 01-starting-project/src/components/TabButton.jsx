export default function TabButton({onSelect,children,isSelected}){
    console.log('TabButton is executing');
    return (
        //adding event to an element
        <li><button className = {isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    )
}