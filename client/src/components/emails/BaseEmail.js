import React, { Fragment } from 'react';
import EmailFooter from './EmailFooter';
import EmailWelcome from './EmailWelcome';
// import EmailForgotPassword from './EmailForgotPassword'

import './EmailStyle.css';

const BaseEmail = () => {
  return (
    <Fragment>
      <html>
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body>
          <table className="body" role="presentation">
            <tbody>
              <tr>
                <td></td>
                <td className="container">
                  <div className="content">
                    <table className="main" role="presentation">
                      <tbody>
                        <tr>
                          <td className="wrapper">
                            <table role="presentation">
                              <tbody>
                                <tr>
                                  <td>
                                    <EmailWelcome />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <EmailFooter />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    </Fragment>
  );
};

export default BaseEmail;
