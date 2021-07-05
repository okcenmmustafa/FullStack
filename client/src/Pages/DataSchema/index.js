import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Image } from "antd";
const DataSchema = () => {
  const lineNumbers=true;
  return (
    <div className="container mx-auto p-4">
      <div className="demo">

       {/* // Image of Schema of Database  */}

        <h1>Schema of the Database</h1>
        <Image width={1000} src="./Images/DataSchema.jpg" />
        <br />
        <h1>SQL to Create Database</h1>
        
       {/* // Database creation code  */}
        <CopyBlock
          language="SQL"
          text={`
                                                                                                    CREATE DATABASE \`KanonTask\`
                                                                                                    GO
                                                                                                    USE [KanonTask]
                                                                                                    GO
                                                                                                    CREATE TABLE \`GameTypes\` (
                                                                                                        \`id\` INT,
                                                                                                        \`name\` VARCHAR(20),
                                                                                                        PRIMARY KEY (\`id\`)
                                                                                                    );
                                                                                                    
                                                                                                    CREATE TABLE \`Games\` (
                                                                                                        \`id\` INT NOT NULL AUTO_INCREMENT,
                                                                                                        \`GameTypeId\` INT(11) NOT NULL,
                                                                                                        \`name\` VARCHAR(20),
                                                                                                        PRIMARY KEY (\`id\`,\`GameTypeId\`)
                                                                                                    );
                                                                                                    
                                                                                                    CREATE TABLE \`Countries\` (
                                                                                                        \`id\` INT NOT NULL AUTO_INCREMENT,
                                                                                                        \`GameId\` INT(11) NOT NULL,
                                                                                                        \`name\` VARCHAR(20),
                                                                                                        PRIMARY KEY (\`id\`,\`GameId\`)
                                                                                                    );
                                                                                                    CREATE TABLE \`Player\` (
                                                                                                        \`id\` INT NOT NULL AUTO_INCREMENT,
                                                                                                        \`CountryId\` INT(11) NOT NULL,
                                                                                                        \`name\` VARCHAR(20),
                                                                                                        \`wallet\` INT(20) NOT NULL,
                                                                                                        PRIMARY KEY (\`id\`,\`CountryId\`)
                                                                                                    );
                                                                                                    CREATE TABLE \`PlayerFavGame\` (
                                                                                                        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
                                                                                                        \`PlayerId\` INT(11) NOT NULL,
                                                                                                        \`GameId\` INT(11),
                                                                                                        PRIMARY KEY (\`id\`,\`PlayerId\`,\`GameId\`)
        );
          
                  `}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
               {/* // SQL query to get all players that have games of type “SLOT” as their
          favorite games  */}

        <h1>
          SQL query to get all players that have games of type “SLOT” as their
          favorite games
        </h1>
        <CopyBlock
          language="SQL"
          text={`
                                                                                            SELECT * FROM Players AS p
                                                                                            LEFT JOIN Countries AS c ON p.CountryId = c.Id
                                                                                            WHERE EXISTS (
                                                                                                SELECT * FROM PlayerFavoriteGames AS fg
                                                                                                INNER JOIN Games AS g ON fg.GameId = g.Id
                                                                                                LEFT JOIN GameTypes AS gt ON g.GameTypeId = gt.Id
                                                                                                WHERE p.Id = fg.PlayerId AND 
                                                                                                    gt.Name = N'SLOT' ) )  )`}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
};

export default DataSchema;
