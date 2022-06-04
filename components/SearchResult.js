import React from 'react';
import Parser from 'html-react-parser';

function SearchResult({results}) {
    return (
        <div className={"w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52"}>
            <p className={"text-gray-600 text-sm mb-5 mt-3"}>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>

            {results.items.map(result =>(
                <div key={result.link} className={"max-w-xl mb-8"}>
                    <div className={"group"}>
                        <a className={"text-sm truncate"} href={result.link}>{result.displayLink}</a>
                        <a className={"group-hover:underline decoration-blue-800 underline-offset-4"} href={result.link}>
                            <h2 className={"truncate text-xl font-medium text-blue-800"}>{result.title}</h2></a>
                    </div>
                    <p>{Parser(result.htmlSnippet)}</p>
                </div>
                ))}

        </div>
    );
}

export default SearchResult;