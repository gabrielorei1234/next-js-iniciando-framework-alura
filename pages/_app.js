import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageprops }) {
    return (
        <>
            <GlobalStyle/>
                <Component {...pageprops} />            
        </>
    )
}

export default MyApp;