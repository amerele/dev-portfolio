import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../../layouts";
import Routings from "../../router/Routings";

const RoutesProvider = () => {
  return (
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  );
};
export default RoutesProvider;