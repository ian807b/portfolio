const driveFileId = '1WeuQ8emhX49AvorTTzXijSDDVlX7lp49';
const resumeFile = `https://drive.google.com/file/d/${driveFileId}/preview`;

document.querySelector('.resume-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.open(resumeFile, '_blank', 'width=800,height=900');
});
