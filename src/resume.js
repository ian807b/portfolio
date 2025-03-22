const driveFileId = '1NZY01mhh4TVuuWbfTU3fL42sFp5Y6jD6';
const resumeFile = `https://drive.google.com/file/d/${driveFileId}/preview`;

document.querySelector('.resume-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.open(resumeFile, '_blank', 'width=800,height=900');
});
