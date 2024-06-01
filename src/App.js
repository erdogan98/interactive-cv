import Skills from './pages/Skills';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skills" component={Skills} />
            </Switch>
        </Router>
    );
};

export default App;
