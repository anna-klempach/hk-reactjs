import * as renderer from 'react-test-renderer';
import * as React from 'react';
import App from './app';

test('App is initialized', () => {
    const appComponent = renderer.create(<App />);
    const appTree = appComponent.toJSON();
    expect(appTree).toMatchSnapshot();
});
