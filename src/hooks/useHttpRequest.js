import { useState, useCallback } from "react";

const useHttpRequest = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig, handleData) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method,
				headers: requestConfig.headers,
				body: JSON.stringify(requestConfig.body),
			});

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();
			console.log(error);
			handleData(data);
			console.log(error);
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	}, []);
	return { isLoading, error, sendRequest };
};

export default useHttpRequest;
