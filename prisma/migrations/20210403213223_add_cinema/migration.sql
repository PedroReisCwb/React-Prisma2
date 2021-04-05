-- CreateTable
CREATE TABLE [dbo].[Cinema] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [adress] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [PK__Cinema__id] PRIMARY KEY ([id])
);
