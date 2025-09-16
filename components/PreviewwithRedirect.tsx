type PreviewProps = {
  url: string;
};

function PreviewWithRedirect({ url }: PreviewProps) {
  return (
    <div className="pb-2 bg-gray-50 rounded-lg shadow-md">
      {/* The iframe container */}
      <div className="w-full h-[300px] border border-gray-300 rounded-md overflow-hidden">
        <iframe
          src={url}
          className="w-full h-full border-none"
          title="Website Preview"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-4 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200 hover:bg-blue-700"
        >
          View Full Site
        </a>
      </div>
    </div>
  );
}

export default PreviewWithRedirect;
