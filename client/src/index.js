import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Material UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getCustomTheme = () => {
    let overwrites = {
        palette: {
            primary2Color: Colors.green900,
            primary1Color: Colors.green700,
            primary3Color: Colors.green400,
            accent1Color: Colors.yellow600,
            accent2Color: Colors.yellow400,
            accent3Color: Colors.yellow300,
            textColor: fade(Colors.darkBlack, 0.87),
            borderColor: Colors.green300,
            pickerHeaderColor: Colors.green700
        },
        tableHeaderColumn: {
            textColor: Colors.green900
        },
        tableHeader: {
            borderColor: Colors.green900
        },
        tableRow: {
            stripeColor: fade(Colors.green200, 0.21),
            selectedColor: Colors.green400,
            textColor: fade(Colors.darkBlack, 0.87),
            hoverColor: Colors.green500,
            borderColor: Colors.green600
        },
        table: {
            backgroundColor: Colors.white
        },
        toggle: {
            thumbOffColor: Colors.grey300,
            trackOffColor: Colors.grey400,
            trackOnColor: fade(Colors.green500, 0.83),
            trackDisabledColor: Colors.grey200,
            thumbOnColor: Colors.green800,
            thumbDisabledColor: Colors.grey500
        },
        badge: {
            color: fade(Colors.lightBlack, 0.54),
            primaryTextColor: Colors.white,
            secondaryTextColor: Colors.white,
            textColor: fade(Colors.lightBlack, 0.54)
        },
        card: {
            titleColor: Colors.green700,
            subtitleColor: fade(Colors.minBlack, 0.26),
            fontWeight: {}
        },
        cardMedia: {
            color: fade(Colors.darkWhite, 0.87)
        },
        cardText: {
            textColor: fade(Colors.lightBlack, 0.54)
        },
        chip: {
            backgroundColor: Colors.green700,
            deleteIconColor: Colors.white,
            textColor: Colors.lightGreen100
        },
        slider: {
            trackSize: {},
            trackColor: Colors.green200,
            trackColorSelected: Colors.green200,
            handleSize: {}
        },
        snackbar: {
            actionColor: Colors.green600
        }
    };

    return getMuiTheme(baseTheme, overwrites);
}

ReactDOM.render(
    <MuiThemeProvider muiTheme={getCustomTheme()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>, 
    document.getElementById('root'));

registerServiceWorker();
