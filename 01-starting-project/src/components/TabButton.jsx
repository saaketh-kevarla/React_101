export default function TabButton({children,isSelected,...props}){
    console.log('TabButton is executing');
    return (
        //adding event to an element
        <li><button className = {isSelected ? 'active' : undefined} {...props}>{children}</button></li>
    )
}