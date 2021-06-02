import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { selectors } from '../../redux';
import style from './Filter.module.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// interface Props {
//   value: string;
//   onChangeFilter: (changeFilter: string) => void;
// }

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const onChangeFilter = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );
  //   const onChangeFilter = (e:any) => {
  //   dispatch(changeFilter(e.target.value));
  // }
  return (
    <form className={style.form}>
      <FormControl className={style.FormControl}>
        <InputLabel>Find contacts by name </InputLabel>
        <Input
          className={style.inputFilter}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </FormControl>
    </form>
  );
}
