import { colors } from '../../styles/theme';

export default function Button({ children, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>{children}</button>

      <style jsx>
        {`
          button {
            display: flex;
            align-items: center;
            background: ${colors.black};
            border: 0;
            color: ${colors.white};
            cursor: pointer;
            border-radius: 9999px;
            font-size: 16px;
            font-weight: 500;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
          }

          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
