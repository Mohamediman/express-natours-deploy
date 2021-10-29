import React, { Fragment } from 'react';

const EmailWelcome = () => {
  return (
    <Fragment>
      <p>Hi, Welcome to Natours, we're glad to have you 🎉🙏</p>
      <p>
        We're all a big familiy here, so make sure to upload your user photo so
        we get to know you a bit better!
      </p>
      <table className="btn btn-primary" role="presentation">
        <tbody>
          <tr>
            <td align="left">
              <table role="presentation">
                <tbody>
                  <tr>
                    <td>
                      <a href="undefined" target="_blank">
                        Upload user photo
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        If you need any help with booking your next tour, please don't hesitate
        to contact me!
      </p>
      <p>- Mohamed Iman, General Manager</p>
    </Fragment>
  );
};

export default EmailWelcome;
