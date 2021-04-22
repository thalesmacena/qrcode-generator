import { ThemeContext } from '@/contexts/ThemeContext';
import { Dispatch, SetStateAction, useContext, useMemo } from 'react';
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

  const JsonSample = useMemo(() => {
    return {
      name: 'John Doe',
      email: 'john@example.com'
    };
  }, []);

  const handleJson = (value) => {
    if (value.jsObject) {
      setContent(JSON.stringify(value.jsObject));
    }
  };

  const handlePlainText = (e) => {
    setContent(e.target.value);
  };

  return (
    <ContainerInputText>
      {option === 'JSON' ? (
        <JSONInput
          placeholder={JsonSample}
          theme={
            theme === 'dark' ? 'dark_vscode_tribute' : 'light_mitsuketa_tribute'
          }
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
