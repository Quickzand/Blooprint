CREATE TABLE hotspots (
id INTEGER, 
locationName TEXT,
address TEXT,
coordinate TEXT,
locationType TEXT,
email TEXT,
phone TEXT,
website TEXT,
PRIMARY KEY (id) 
)


DELIMITER $
CREATE PROCEDURE addHotspot
(
IN locationName TEXT,
IN locationName TEXT,
IN address TEXT,
IN coordinate TEXT,
IN locationType TEXT,
IN email TEXT,
IN phone TEXT,
IN website TEXT
)
BEGIN
  SET @tempID = NULL;
  SELECT MAX(ID) INTO @tempID from stories;
  IF @tempID IS NULL THEN
	  SET @tempID = 1;
  ELSE
	  SET @tempID = @tempID + 1;
	END IF;
INSERT INTO stories VALUES (@tempID,img,NOW(),UID);
  END;
  $
