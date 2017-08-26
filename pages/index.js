import React from 'react';

export default () => (
  <div className="l_root">
    <div className="l_page m_active_page m_text_align">
      <form action="" className="b_form">
        <div className="title">Insert your Github name</div>
        <input placeholder="dvorovenko" type="text" className="text" />
        <button type="submit" className="submit">
          <span dangerouslySetInnerHTML={{__html: "<svg height='32px' version='1.1' viewBox='0 0 32 32' width='32px' xmlns='http://www.w3.org/2000/svg' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns:xlink='http://www.w3.org/1999/xlink'><title/><desc/><defs/><g fill='none' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1'><g fill=''#777777' id='icon-111-search'><path d='M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z' id='search'/></g></g></svg>"}} />
        </button>
      </form>
    </div>
    <style jsx global>{`
      * {
          margin: 0;
          padding: 0;
          border: 0;
      }
      a {
          text-decoration: none;
          color: #0070c9;
      }
      html, body, .l_root {
          width: 100%;
          height: 100%;
          min-width: 800px;
          min-height: 500px;
      }
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          opacity: 0.8;
      }
      ::-moz-placeholder { /* Firefox 19+ */
          opacity: 0.8;
      }
      :-ms-input-placeholder { /* IE 10+ */
          opacity: 0.8;
      }
      :-moz-placeholder { /* Firefox 18- */
          opacity: 0.8;
      }
      .l_root {
          background: #c7c4cb;
          font-family: Helvetica Neue';
          color: #555;
      }
      .l_page {
          width: 100%;
          height: 100%;
          display: none;
          text-align: center;
      }
      .m_active_page {
          display: block;
      }
      .m_text_align {
          text-align: center;
      }
    `}</style>
    <style>{`
      .b_form {
          margin: 15% 0;
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: 0;
      }
      .title {
          color: #333;
          font-size: 36px;
          margin-bottom: 5px;
      }
      .text {
          background-color: #fff;
          border: 1px solid #c7c4cb;
          outline: 0;
          padding: 0 58px 0 20px;
          font-size: 21px;
          height: 52px;
          width: 550px;
          border-radius: 3px;
          overflow: hidden;;
          text-overflow: ellipsis;
      }
      .submit {
          background: transparent;
          height: 52px;
          width: 52px;
          margin: -17px 0 0  -53px;
          display: inline-block;
          vertical-align: middle;
          transition: opacity 0.2s;

      }
      .submit:hover{
          cursor: pointer;
          opacity: 0.7;
      }
      g {
        fill: #000;
      }
    `}
    </style>

  </div>
)