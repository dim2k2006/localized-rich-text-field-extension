import React, { useState, useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import { init, FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import Editor from './Editor';
import './index.css';

enum Locale {
  pl_PL = 'pl-PL',
  en_US = 'en-US',
}

type LocalizedField = {
  [key in Locale]?: string;
};

interface AppProps {
  sdk: FieldExtensionSDK;
}

interface AppProps {
  sdk: FieldExtensionSDK;
}

const App: React.FC<AppProps> = ({ sdk }) => {
  const sdkValue = sdk.field.getValue();
  const initialValue = sdkValue ? sdkValue : {};

  const [value, setValue] = useState<LocalizedField>(initialValue);

  const onSave = useCallback(
    (newValue: LocalizedField) => {
      sdk.field.setValue(newValue);

      setValue(newValue);
    },
    [sdk.field]
  );

  const onChange = useCallback(
    (value: LocalizedField) => {
      onSave(value);
    },
    [onSave]
  );

  useEffect(() => {
    sdk.window.startAutoResizer();

    return () => {
      sdk.window.stopAutoResizer();
    };
  }, [sdk.window]);

  useEffect(() => {
    const detachValueChangeHandler = sdk.field.onValueChanged((newValue: LocalizedField = {}) => {
      setValue(newValue);
    });

    return () => detachValueChangeHandler();
  }, [onSave, sdk.field]);

  return (
    <div className="App">
      {Object.values(Locale).map((localeValue) => {
        const locale = localeValue as Locale;

        console.log('locale:', locale);

        return (
          <div className="App__item" key={locale}>
            <div className="App__locale">{locale}</div>

            <Editor />
          </div>
        );
      })}
    </div>
  );
};

init((sdk) => {
  render(
    <>
      <App sdk={sdk as FieldExtensionSDK} />
    </>,
    document.getElementById('root')
  );
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
