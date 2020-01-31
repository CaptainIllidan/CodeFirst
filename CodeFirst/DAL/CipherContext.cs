using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Web.Mvc;
using CodeFirst.Models;

namespace CodeFirst.DAL
{
    public class CipherContext : DbContext
    {
        public CipherContext() : base("CipherContext")
        {
            
        }
        public DbSet<Cipher> Ciphers { get; set; }
        public DbSet<Message> Messages { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}