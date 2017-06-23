using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Data.SqlClient;
using System.Data;

/// <summary>
/// Summary description for products
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class products : System.Web.Services.WebService
{

    public products()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }


    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string getProducts()

    {
        {
            Product prod = new Product();
            List<Product> pList = new List<Product>();
            pList= prod.readproductsDB();
            // create a json serializer objetct
            JavaScriptSerializer js = new JavaScriptSerializer();
            // serialize to string
            string jsonString = js.Serialize(pList);
            return jsonString;
        }
    }

    private DataSet GetData(SqlCommand cmd)
    {
        throw new NotImplementedException();
    }
}
