USE [CarRentContext]
GO
SET IDENTITY_INSERT [dbo].[Cars] ON 

INSERT [dbo].[Cars] ([Id], [Manufactorer], [Model], [Class], [ManufactoryYear], [RegistrationNumber]) VALUES (10003, N'Ford', N'Mondeo', N'B-class', 1993, N'2345 AB-7')
INSERT [dbo].[Cars] ([Id], [Manufactorer], [Model], [Class], [ManufactoryYear], [RegistrationNumber]) VALUES (10004, N'Saab', N'9000 2.0 CS', N'C-class', 1992, N'6774 OP-7')
INSERT [dbo].[Cars] ([Id], [Manufactorer], [Model], [Class], [ManufactoryYear], [RegistrationNumber]) VALUES (10006, N'Kia', N'Rio', N'B-class', 2013, N'6435 KO-7')
INSERT [dbo].[Cars] ([Id], [Manufactorer], [Model], [Class], [ManufactoryYear], [RegistrationNumber]) VALUES (10011, N'Opel', N'Omega', N'C-class', 1999, N'6480 AB-7')
SET IDENTITY_INSERT [dbo].[Cars] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [BirthDate], [DriverLicenseNumber]) VALUES (2, N'Bob', N'Copper', CAST(N'1900-01-31T22:10:00.0000000' AS DateTime2), N'7123434')
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [BirthDate], [DriverLicenseNumber]) VALUES (3, N'Victor', N'Ivanov', CAST(N'1900-01-31T22:10:00.0000000' AS DateTime2), N'4134145')
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [BirthDate], [DriverLicenseNumber]) VALUES (4, N'Lena', N'Kann', CAST(N'1900-01-31T22:10:00.0000000' AS DateTime2), N'4624356')
SET IDENTITY_INSERT [dbo].[Users] OFF
