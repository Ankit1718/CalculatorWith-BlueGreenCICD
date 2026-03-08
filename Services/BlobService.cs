using Azure.Storage.Blobs;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;


namespace CalculatorTest.Services
{
    public class BlobService
{
    private readonly BlobContainerClient _container;

    public BlobService(IConfiguration config)
    {
        string connection = config["AzureBlob:ConnectionString"];
        string containerName = config["AzureBlob:ContainerName"];

        BlobServiceClient serviceClient = new BlobServiceClient(connection);

        _container = serviceClient.GetBlobContainerClient(containerName);
    }

    public async Task UploadCalculation(string content)
    {
        string fileName = $"calc-{DateTime.Now.Ticks}.txt";

        var blob = _container.GetBlobClient(fileName);

        using var stream = new MemoryStream(Encoding.UTF8.GetBytes(content));

        await blob.UploadAsync(stream);
    }
  }

}