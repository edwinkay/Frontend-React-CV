type HomeProps = {
    children: JSX.Element | JSX.Element[]
}

const Home = ({children}:HomeProps) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default Home
