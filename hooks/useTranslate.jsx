import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const useTranslate = (sourceText, selectedLanguage) => {
	const [targetText, setTargetText] = useState("");

	useEffect(() => {
		const handleTranslate = async (text) => {
			try {
				const model = genAI.getGenerativeModel({
					model: "gemini-2.0-flash-001",
				});

				const prompt = `You will be provided with a sentence. This sentence: 
        "${text}". 
        Your tasks are:
        - Detect what language the sentence is in.
        - Translate the sentence into ${selectedLanguage}.
        Do not return anything other than the translated sentence.`;

				const result = await model.generateContent(prompt);
				const response = await result.response;
				const translation = response.text();

				setTargetText(translation);
			} catch (error) {
				console.error("Error translating text:", error);
			}
		};

		if (sourceText.trim()) {
			const timeoutId = setTimeout(() => {
				handleTranslate(sourceText);
			}, 500);

			return () => clearTimeout(timeoutId);
		}
	}, [sourceText, selectedLanguage]);

	return targetText;
};

export default useTranslate;
