import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header, RepositoryInfo, Issues } from "./styles";

import logoImg from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="GITHUB" />
          <div>
            <strong>repository/test</strong>
            <p>Exemplo of description for repository</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`Test Issue`}>
          <div>
            <strong>Test Name</strong>
            <p>Test Descr</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

        <Link to={`Test Issue`}>
          <div>
            <strong>Test Name</strong>
            <p>Test Descr</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
