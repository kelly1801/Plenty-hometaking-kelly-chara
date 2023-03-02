### How would i test the app

1 . Test the rendering of the dynamic components: with the render function from React Testing Library to render I would check for example, that the input field and "Shorten" button are present on the page.

2. Test the "Shorten" button: Write a test that checks that the "Shorten" button works correctly. simulating a click on the button and check that the shortened URL is displayed on the page.

3. Test the copy-to-clipboard button: Write a test that checks that the copy-to-clipboard button works correctly. Simulating a click on the button and check that the shortened URL is copied to the clipboard.

4. Test the error handling for invalid URLs: Write a test that checks that the error message is displayed when an invalid URL is entered. Entering an invalid URL and check that the error message is displayed on the page.

5. Test the responsiveness of the componentS: Write tests to check that the container component is displayed correctly on mobile and desktop devices. using Jest's jest-environment-jsdom package to simulate different screen sizes and check that the component's layout is adjusted accordingly.

6. Test the integration with the URL-shortening API: using Jest's mock function to mock the API and simulate different responses.
