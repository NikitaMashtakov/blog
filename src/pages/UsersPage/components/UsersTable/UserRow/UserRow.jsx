import { Icon, Loader } from 'components';
import { useState } from 'react';
import { useServerRequest } from 'hooks';
import PropTypes from 'prop-types';
import { PROP_TYPE } from 'constants';

export const UserRow = ({ id, login, registeredAt, roleId, roles, onDeleteUser }) => {
  const requestServer = useServerRequest();
  const [role, setRole] = useState(roleId);
  const [newRole, setNewRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onRoleChange = ({ target }) => {
    const value = Number(target.value);
    if (roleId === value) {
      setNewRole(null);
      return;
    }
    setNewRole(value);
  };

  const onSaveRole = (userId, newUserRole) => {
    if (newRole) {
      setIsLoading(true);
      setTimeout(() => {
        requestServer('updateUserRole', userId, newUserRole).then(({ res }) => {
          setNewRole(null);
          setRole(res);
          setIsLoading(false);
        });
      }, 1000);
    }
  };

  return (
    <tr>
      <td>{login}</td>
      <td>{registeredAt}</td>
      <td>
        <select onChange={onRoleChange} defaultValue={roleId}>
          {roles.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </td>

      <td>
        {isLoading ? (
          <Loader />
        ) : (
          <Icon
            id="fa-floppy-o"
            visible={role !== newRole && newRole !== null}
            onClick={() => onSaveRole(id, newRole)}
          />
        )}
      </td>

      <td>
        <Icon id="fa-trash-o" onClick={() => onDeleteUser(id)} />
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE.isRequired,
  roles: PROP_TYPE.ROLES.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
