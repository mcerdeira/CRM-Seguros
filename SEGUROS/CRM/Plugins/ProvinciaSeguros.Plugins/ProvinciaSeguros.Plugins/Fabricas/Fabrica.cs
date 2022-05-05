using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Dominio;
using System;
using System.Globalization;
using System.Text;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    /// <summary>
    /// La interfáz fábrica contiene la firma de métodos que transformarán objetos del dominio de CRM al dominio de RECTOR.
    /// </summary>
    public abstract class Fabrica
    {
        /// <summary>
        /// Fabrica un objeto de dominio RECTOR a partir de un objeto de dominio CRM.
        /// </summary>
        /// <param name="entidadCrm"></param>
        /// <returns></returns>
        public abstract IEntidadRector Fabricar(Entity entidadCrm);

        public abstract IEntidadRector Fabricar(Entity entidadCrm, string usuario);

        protected string ObtenerValorComoString(object campo)
        {
            if (campo is OptionSetValue)
            {
                return (campo as OptionSetValue).Value.ToString();
            }

            if (campo is EntityReference)
            {
                return (campo as EntityReference).Id.ToString();
            }

            if (campo is DateTime)
            {
                var date = (DateTime)campo;

                return date.Year + "-" + date.Month + "-" + date.Day;
            }

            if (campo is bool)
            {
                return campo.ToString();
            }

            if (campo is string)
            {
                return RemoveDiacritics(campo.ToString());
            }

            return "";
        }

        private string RemoveDiacritics(string text)
        {
            var normalizedString = text.Normalize(NormalizationForm.FormD);
            var stringBuilder = new StringBuilder();

            foreach (var c in normalizedString)
            {
                var unicodeCategory = CharUnicodeInfo.GetUnicodeCategory(c);
                if (unicodeCategory != UnicodeCategory.NonSpacingMark)
                {
                    stringBuilder.Append(c);
                }
            }

            return stringBuilder.ToString().Normalize(NormalizationForm.FormC);
        }
    }
}
