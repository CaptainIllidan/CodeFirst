using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using CodeFirst.DAL;
using CodeFirst.Models;

namespace CodeFirst.Controllers
{
    public class CipherController : ApiController
    {
        private CipherContext ctx;

        public CipherController()
        {
            ctx = new CipherContext();
        }

        [Route("api/message")]
        [HttpGet]
        public IEnumerable<Message> GetEncodedMessages()
        {
            var messages = ctx.Messages.ToList();
            var cipherDict = GetCiphers().ToDictionary(x => Convert.ToChar(x.OldChar), x => x.NewChar);
            var encodedMessages = new List<Message>();
            foreach (var message in messages)
            {
                var encodedText = new StringBuilder();
                foreach (var symbol in message.Text)
                {
                    var decodedSymbol = cipherDict.ContainsKey(symbol) ? cipherDict[symbol] : symbol.ToString();
                    encodedText.Append(decodedSymbol);
                }
                encodedMessages.Add(new Message
                {
                    MessageId = message.MessageId,
                    ReceiptTime = message.ReceiptTime,
                    Text = encodedText.ToString()
                });
            }

            return encodedMessages;
        }

        [Route("api/message/Create")]
        [HttpPut]
        public IHttpActionResult Create([FromBody]string text)
        {
            var message = new Message {ReceiptTime = DateTime.Now, Text = text};
            ctx.Messages.Add(message);
            ctx.SaveChanges();
            return Json("OK");
        }

        [Route("api/cipher")]
        [HttpGet]
        public IEnumerable<Cipher> GetCiphers()
        {
            return ctx.Ciphers.ToList();
        }
    }
}