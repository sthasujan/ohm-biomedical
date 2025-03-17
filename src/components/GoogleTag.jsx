import { Helmet } from "react-helmet-async";

const GoogleTag = () => {
  return (
    <Helmet>
      {/* Google Tag Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16881824298"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16881824298');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTag;
