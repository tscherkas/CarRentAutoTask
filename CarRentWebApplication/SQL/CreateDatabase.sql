USE master;
GO

CREATE DATABASE CarRentContext;
GO

USE CarRentContext;
GO

IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Cars] (
    [Id] bigint NOT NULL IDENTITY,
    [Manufactorer] nvarchar(max) NULL,
    [Model] nvarchar(max) NULL,
    [Class] nvarchar(max) NULL,
    [ManufactoryYear] int NOT NULL,
    [RegistrationNumber] nvarchar(max) NULL,
    CONSTRAINT [PK_Cars] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Users] (
    [Id] bigint NOT NULL IDENTITY,
    [FirstName] nvarchar(max) NULL,
    [LastName] nvarchar(max) NULL,
    [BirthDate] datetime2 NOT NULL,
    [DriverLicenseNumber] nvarchar(max) NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [CarRequsets] (
    [RequestNumber] bigint NOT NULL IDENTITY,
    [DateStart] datetime2 NOT NULL,
    [DateEnd] datetime2 NOT NULL,
    [CarId] bigint NULL,
    [UserId] bigint NULL,
    [Comment] nvarchar(max) NULL,
    CONSTRAINT [PK_CarRequsets] PRIMARY KEY ([RequestNumber]),
    CONSTRAINT [FK_CarRequsets_Cars_CarId] FOREIGN KEY ([CarId]) REFERENCES [Cars] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_CarRequsets_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_CarRequsets_CarId] ON [CarRequsets] ([CarId]);

GO

CREATE INDEX [IX_CarRequsets_UserId] ON [CarRequsets] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190811100246_InitialCreate', N'2.2.6-servicing-10079');

GO

