import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  id: number;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {

  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStorageRepositories = localStorage.getItem('@github-api:repositories');

    if (localStorageRepositories) {
      return JSON.parse(localStorageRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@github-api:repositories', JSON.stringify(repositories));
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca pelo repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no gitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Pesquise por repositórios "
        />
        <button type="submit">Procurar</button>
      </Form>
      {!!inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <>
            <Link key={repository.id} to={`/repositories/${repository.full_name}`}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;