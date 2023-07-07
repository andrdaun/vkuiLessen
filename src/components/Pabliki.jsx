const Manager = ({manager}) => {
    return manager.map(manager => {
        const managerGroup = `${manager.name}`;

        return <div style={{display: "flex", padding: "5px"}}>
            <img src={manager.photo_100} alt={managerGroup}/>
            <span>
                {managerGroup}
            </span>
        </div>
    })
}

export default Manager;