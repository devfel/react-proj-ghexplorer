import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repositories } from "./styles";

import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Dashboard - Explore GitHub Repositories</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://github.com/devfel.png" alt="Danilo Vieira" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://github.com/devfel.png" alt="Danilo Vieira" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://github.com/devfel.png" alt="Danilo Vieira" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
