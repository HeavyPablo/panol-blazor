using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Components.Authorization;
using PanolBlazor.Auth;
using PanolBlazor.Services;

namespace PanolBlazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");

            builder.Services.AddBaseAddressHttpClient();

            ConfigureCommonServices(builder.Services);

            await builder.Build().RunAsync();
        }

        public static void ConfigureCommonServices(IServiceCollection services)
        {
            services.AddAuthorizationCore();
            services.AddScoped<CustomAuthStateProvider>();
            services.AddScoped<AuthenticationStateProvider, CustomAuthStateProvider>(provider => provider.GetRequiredService<CustomAuthStateProvider>());
            services.AddScoped<ILoginService, CustomAuthStateProvider>(provider => provider.GetRequiredService<CustomAuthStateProvider>());
            services.AddOptions();
        }
    }
}
