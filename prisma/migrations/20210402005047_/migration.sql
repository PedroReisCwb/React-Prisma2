-- CreateTable
CREATE TABLE [dbo].[Movie] (
    [id] INT NOT NULL IDENTITY(1,1),
    [director] NVARCHAR(1000) NOT NULL,
    [movieName] NVARCHAR(1000) NOT NULL,
    [yearReleased] INT NOT NULL,
    CONSTRAINT [PK__Movie__id] PRIMARY KEY ([id])
);
