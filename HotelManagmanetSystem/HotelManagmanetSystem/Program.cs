﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using HotelManagmanetSystem.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<HotelManagmanetSystemContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("HotelManagmanetSystemContext") ?? throw new InvalidOperationException("Connection string 'HotelManagmanetSystemContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyMethod()
                            .SetIsOriginAllowed(origin => true)
                            .AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
