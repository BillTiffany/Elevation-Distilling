import React from "react";
import PropTypes from "prop-types";

const EspressoEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      id="embed"
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FSaltCityVodka%2Fvideos%2F1695013673906176%2F&show_text=false&width=476&t=0"
      width="476"
      height="476"
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="saltcityespresso"
    />
  </div>
);

EspressoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default EspressoEmbed;
