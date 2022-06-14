import React, { Fragment } from 'react';

const EmailForgotPassword = () => {
  return (
    <Fragment>
      <p>Hi FirstName, </p>
      <p>
        Forgot your password? Submit a PATCH request with your new password and
        passwordConfirm to: .
      </p>
      <p>(Website for this action not yet implememnted.)</p>
      <table className="btn btn-primary" role="presentation">
        <tbody>
          <tr>
            <td align="left">
              <table role="presentation">
                <tbody>
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        Reset your password
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <p>If you didn't forget your password, please ignore this email!</p>
    </Fragment>
  );
};

export default EmailForgotPassword;
