using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CodeFirst.Models;

namespace CodeFirst.DAL
{
    public class CipherInitializer : System.Data.Entity.DropCreateDatabaseAlways<CipherContext>
    {
        private const int A_UPPER_POSITION = 'А';
        private const int A_LOWER_POSITION = 'а';
        private const int ALPHABET_LENGTH = 32;
        private const int SHIFT = 10;
        private List<string> GetAlphabet(bool upper)
        {
            List<string> alphabet = new List<string>();
            int charValue = upper ? A_UPPER_POSITION : A_LOWER_POSITION;
            for (int ctr = 0; ctr < ALPHABET_LENGTH; ctr++)
                alphabet.Add(Convert.ToChar(charValue + ctr).ToString());
            alphabet.Add(upper?"Ё":"ё");
            return alphabet;
        }

        private List<Cipher> GetRandomCiphers()
        {
            var alphabet = GetAlphabet(false);
            var alphabetUpper = GetAlphabet(true);
            var shiftedAlphabet = new List<string>();
            var shiftedAlphabetUpper = new List<string>();
            for (int i = SHIFT; i < alphabet.Count; i++)
            {
                shiftedAlphabet.Add(alphabet[i]);
                shiftedAlphabetUpper.Add(alphabetUpper[i]);
            }

            for (int k = 0; k < SHIFT; k++)
            {
                shiftedAlphabet.Add(alphabet[k]);
                shiftedAlphabetUpper.Add(alphabetUpper[k]);
            }

            var ciphers = new List<Cipher>();
            for (int i = 0; i < alphabet.Count; i++)
            {
                ciphers.Add(new Cipher {OldChar = alphabet[i], NewChar = shiftedAlphabet[i]});
                ciphers.Add(new Cipher {OldChar = alphabetUpper[i], NewChar = shiftedAlphabetUpper[i]});
            }

            return ciphers;
        }

        protected override void Seed(CipherContext context)
        {
            var ciphers = GetRandomCiphers();
            ciphers.ForEach(c=> context.Ciphers.Add(c));
            context.SaveChanges();
            context.Messages.Add(new Message() {ReceiptTime = DateTime.Now, Text = "Тестовое сообщение"});
            context.SaveChanges();
        }
    }
}