import { ThemeContext } from '@/contexts/ThemeContext';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/pt';
import { ContainerInputText } from './styles';

interface IInputText {
  option: string;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const InputText = ({ option, content, setContent }: IInputText) => {
  const { theme } = useContext(ThemeContext);
  const [inputTheme, setInputTheme] = useState('dark_vscode_tribute');

  useEffect(() => {
    if (theme === 'dark') {
      setInputTheme('dark_vscode_tribute');
    } else {
      setInputTheme('light_mitsuketa_tribute');
    }
  }, [theme]);

  const JsonSample = useMemo(() => {
    return {
      name: 'John Doe',
      email: 'john@example.com'
    };
  }, []);

  const handleJson = useCallback(
    (value) => {
      if (value.jsObject) {
        setContent(JSON.stringify(value.jsObject));
      }
    },
    [setContent]
  );

  const handlePlainText = useCallback(
    (e) => {
      setContent(e.target.value);
    },
    [setContent]
  );

  return (
    <ContainerInputText>
      {option === 'JSON' ? (
        <JSONInput
          placeholder={JsonSample}
          theme={inputTheme}
          locale={locale}
          onChange={handleJson}
          width={400}
          height={300}
        />
      ) : (
        <textarea
          maxLength={7089}
          minLength={1}
          onInput={handlePlainText}
          value={content}
        />
      )}
    </ContainerInputText>
  );
};

export default InputText;
