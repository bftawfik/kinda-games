import { Route, Routes } from "react-router-dom";

const ExternalLink: any = ({
  externalUrl,
}: {
  externalUrl: string | undefined;
}) => {
  externalUrl && (window.location.href = externalUrl);
  return undefined;
};

const Redirect = ({ externalUrl }: { externalUrl: string | undefined }) => {
  return externalUrl ? (
    <Routes>
      <Route path="/" element={<ExternalLink externalUrl={externalUrl} />} />
    </Routes>
  ) : null;
};

export default Redirect;
