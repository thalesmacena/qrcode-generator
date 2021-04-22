/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useCallback, useState } from 'react';

export default function ImageInput({
  ...rest
}: JSX.IntrinsicElements['input']) {
  const [preview, setPreview] = useState(null);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    try {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    } catch {
      setPreview(null);
    }
  }, []);

  return (
    <>
      {preview && <img src={preview} alt="Preview" />}
      <input id="file" type="file" onChange={handlePreview} {...rest} />
      <label htmlFor="file">
        <strong>Adicionar Logo</strong>
      </label>
    </>
  );
}
