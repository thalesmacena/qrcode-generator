/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form } from './styles';

interface IInputProps {
  onChangeFunction: (event) => void;
  defaultValue: string;
}

const InputRange = ({ onChangeFunction, defaultValue }: IInputProps) => {
  return (
    <Form onChange={onChangeFunction}>
      <div>
        <input
          type="radio"
          value="Texto-Plano"
          name="option"
          id="Texto-Plano"
          defaultChecked={defaultValue === 'Texto-Plano'}
        />
        <label htmlFor="Texto-Plano">Texto Plano</label>
      </div>
      <div>
        <input
          type="radio"
          value="JSON"
          name="option"
          id="JSON"
          defaultChecked={defaultValue === 'JSON'}
        />
        <label htmlFor="JSON">Json</label>
      </div>
    </Form>
  );
};

export default InputRange;
