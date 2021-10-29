import React from 'react';

const EmailFooter = () => {
  return (
    <div className="footer">
      <table AriaRole="presentation">
        <tbody>
          <tr>
            <td className="content-block">
              <span className="apple-link">
                {' '}
                Natours Inc, 123 Nowhere Road, San Francisco CA 99999
              </span>
              <br /> Don't like these emails? <a href="#">Unsubscribe</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailFooter;
