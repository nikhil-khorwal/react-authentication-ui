import './card.css'

interface Props extends React.PropsWithChildren {

}

const Card = (props: Props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}
export default Card