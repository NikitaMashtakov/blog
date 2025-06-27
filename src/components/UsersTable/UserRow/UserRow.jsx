import { useSelector } from 'react-redux';
import { ROLE } from './../../../constants';
import { Icon } from './../../Icon/Icon';
import { selectRoles } from '../../../selectors/selectRoles';
import styled from 'styled-components';

export const UserRow = ({ login, registeredAt, roleId }) => {
  const roles = useSelector(selectRoles);

  const onRoleChange = () => {};
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
        <Icon id="fa-floppy-o" />
      </td>

      <td>
        <Icon id="fa-trash-o" />
      </td>
    </tr>
  );
};
