using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;

/// <summary>
/// Summary description for Product
/// </summary>
public class Product
{
    private int prodId;
    public int ProdId
    {
        get { return prodId; }
        set { prodId = value; }
    }
    private string type;
    public string Type
    {
        get { return type; }
        set { type = value; }
    }
    private string name;
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    private double price;
    public double Price
    {
        get { return price; }
        set { price = value; }
    }
    private string imagePath;
    public string ImagePath
    {
        get { return imagePath; }
        set { imagePath = value; }
    }
 

    public Product()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    public Product(int _prodId, string _type, string _name, double _price, string _imagePath)
    {
        prodId = _prodId;
        type = _type;
        name = _name;
        price = _price;
        imagePath = _imagePath;
        
    }

    public List<Product> readproductsDB()
    {
        // create a new DBServices Object
        DBservices dbs = new DBservices();
        dbs = dbs.ReadFromDataBase("ProductDBConnectionString", "Product");
        

        List<Product> myList = new List<Product>();
        foreach (DataRow row in dbs.dt.Rows)
        {
            //int i = Int32.Parse(row[0].ToString());
            //string s = (string)row[1];
            //string s1 = (string)row[2];
            //double d = Double.Parse(row[3].ToString());
            //string s2 = (string)row[4];

            myList.Add(new Product(Int32.Parse(row[0].ToString()), ((string)row[1]), ((string)row[2]), Double.Parse(row[3].ToString()), ((string)row[4])));
        }
        return myList;
    }    
}