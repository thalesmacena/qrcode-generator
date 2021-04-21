import { ThemeContext } from '@/contexts/ThemeContext';
import {
  Container,
  Content,
  DarkSwitch,
  LightSwitch,
  QR
} from '@/styles/pages/Home';
import Head from 'next/head';
import { useContext, useMemo, useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/pt';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [size] = useState<number>(250);
  const [isJson, setIsJson] = useState<boolean>(false);
  const [content, setContent] = useState<string>(
    'https://github.com/thalesmacena/qrcode-generator'
  );

  const JsonSample = useMemo(() => {
    return {
      name: 'John Doe',
      email: 'john@example.com'
    };
  }, []);

  const onChangeValue = (event) => {
    if (event.target.value === 'json') {
      setIsJson(true);
    } else {
      setIsJson(false);
    }
  };

  const handleJson = (value) => {
    if (value.jsObject) {
      setContent(JSON.stringify(value.jsObject));
    }
  };

  const handlePlainText = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Head>
        <title>QR Code Generator</title>
      </Head>
      <Container>
        <header>
          <strong>{isJson ? 'JSON' : 'Texto plano'}</strong>

          {theme === 'light' ? (
            <LightSwitch size={24} onClick={() => toggleTheme()} />
          ) : (
            <DarkSwitch size={24} onClick={() => toggleTheme()} />
          )}
        </header>
        <Content>
          <div>
            <main>
              {isJson ? (
                <JSONInput
                  placeholder={JsonSample}
                  theme={
                    theme === 'dark'
                      ? 'dark_vscode_tribute'
                      : 'light_mitsuketa_tribute'
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
            </main>
            <form onChange={onChangeValue}>
              <div>
                <input
                  type="radio"
                  value="plain-text"
                  name="option"
                  defaultChecked={!isJson}
                />{' '}
                <span>Texto Plano</span>
              </div>
              <div>
                <input
                  type="radio"
                  value="json"
                  name="option"
                  defaultChecked={isJson}
                />{' '}
                <span>Json</span>
              </div>
            </form>
          </div>
          <section>
            <h1>QR Code</h1>
            <QR level="Q" style={{ width: size }} value={content} />
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Home;
