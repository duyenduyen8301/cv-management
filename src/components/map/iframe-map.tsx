interface IframeMapProps {
	title?: string;
}

export default function IframeMap({ title = "Google Maps" }: IframeMapProps) {
	return (
		<div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449821!2d105.80194413492788!3d21.022736016286644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1712229421121!5m2!1sen!2sus"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title={title}
				aria-label={`Map showing ${title}`}
			></iframe>
		</div>
	);
}
