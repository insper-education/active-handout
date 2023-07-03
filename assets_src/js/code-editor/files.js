export function initFiles(fileContents) {
  return Object.fromEntries(
    fileContents.map((fileContent) => {
      const code = fileContent.textContent;
      const filename = fileContent.getAttribute("data-filename");
      
      return [filename, { code }];
    })
  );
}