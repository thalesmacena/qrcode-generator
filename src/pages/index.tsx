import Header from '@/components/Header';
import InputLogo from '@/components/InputLogo';
import InputRange from '@/components/InputRange';
import InputText from '@/components/InputText/InputText';
import { Container, Content, QR, QRSection } from '@/styles/pages/Home';
import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [size] = useState<number>(250);
  const [option, setOption] = useState('Texto-Plano');
  const [content, setContent] = useState<string>(
    'https://github.com/thalesmacena/qrcode-generator'
  );

  const onChangeValue = (event) => {
    if (event.target.value === 'JSON') {
      setOption('JSON');
    } else {
      setOption('Texto-Plano');
    }
  };

  return (
    <>
      <Head>
        <title>QR Code Generator</title>
      </Head>
      <Container>
        <Header title={option} />
        <Content>
          <div>
            <InputText
              content={content}
              option={option}
              setContent={setContent}
            />
            <InputRange
              onChangeFunction={onChangeValue}
              defaultValue={option}
            />
          </div>
          <QRSection>
            <h1>QR Code</h1>
            <QR level="Q" style={{ width: size }} value={content} />
            <InputLogo name="logo" />
          </QRSection>
        </Content>
      </Container>
    </>
  );
};

export default Home;
