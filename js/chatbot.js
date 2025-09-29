
const chatbot = document.getElementById('chatbot');
if (chatbot) {
  const header = document.createElement('div');
  header.id = 'chatbotHeader';
  header.innerText = '💎 AI Chat';
  chatbot.appendChild(header);
  const body = document.createElement('div');
  body.id = 'chatbotBody';
  body.innerHTML = '<p>Welcome! I am your luxury AI assistant. Ask me anything.</p>';
  chatbot.appendChild(body);
  chatbot.style.display = 'block';
}
