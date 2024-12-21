-- Définir le schéma à utiliser
SET SEARCH_PATH = "Tabib";


----------------- Table N°1 : "Tabib"."utilisateur" ----------------

DROP TABLE IF EXISTS "utilisateur" ;
CREATE TABLE "utilisateur" 
(
"id_utilisateur" VARCHAR(50) ,
CONSTRAINT "PK_utilisateur" PRIMARY KEY("id_utilisateur"),
"nom_utilisateur" VARCHAR(30) not null,
"prenom" VARCHAR(30) not null,
"genre" VARCHAR(1) not null,
constraint "check_genre_utilisateur" check("genre" in("F","M")), 
"email" VARCHAR(50) not null unique,
"mot_de_passe" VARCHAR(25) not null ,
constraint "check_motDePasse_utilisateur" check(length("mot_de_passe") between 10 and 25)
);



----------------- Table N°2 : "Tabib"."telephone" ----------------

DROP TABLE IF EXISTS "telephone" ;
CREATE TABLE "telephone"
(
"num_telephone" varchar(13) ,
CONSTRAINT "PK_telephone" PRIMARY KEY("num_telephone"),
"id_utilisateur" VARCHAR(50) not null,
constraint "FG_telephone" foreign key("id_utilisateur") references "utilisateur"("id_utilisateur")
);

----------------- Table N°3 : "Tabib"."localisation ----------------
DROP TABLE IF EXISTS "localisation" ;
CREATE TABLE "localisation"
(
"num_rue" int,
"nom_rue" varchar(50),
"code_postal" varchar(5),
CONSTRAINT "PK_localisation" PRIMARY KEY("num_rue","nom_rue","code_postal"),
"latitude" numeric(9,6) not null,
"longitude" numeric(9,6) not null
);

----------------- Table N°4 : "Tabib"."medecin" ----------------

DROP TABLE IF EXISTS "medecin" ;
CREATE TABLE "medecin"
(
"id_medecin" VARCHAR(50),
CONSTRAINT "PK_medecin" PRIMARY KEY("id_medecin"),
constraint "FG1_medecin" foreign key("id_medecin") references "utilisateur"("id_utilisateur"),
"specialite" varchar(30) not null,
"annee_experience" int not null,
"teleconsultation_possible" boolean default false,
"num_rue" int not null,
constraint "FG2_medecin" foreign key("num_rue") references "localisation"("num_rue"),
"nom_rue" varchar(50) not null,
constraint "FG3_medecin" foreign key("nom_rue") references "localisation"("nom_rue"),
"code_postal" varchar(5) not null,
constraint "FG4_medecin" foreign key("code_postal") references "localisation"("code_postal")
);


----------------- Table N°5 : "Tabib"."patient" ----------------

DROP TABLE IF EXISTS "patient" ;
CREATE TABLE "patient"
(
"id_patient" VARCHAR(50),
CONSTRAINT "PK_patient" PRIMARY KEY("id_patient"),
constraint "FG_patient" foreign key("id_patient") references "utilisateur"("id_utilisateur"),
"date_de_naissance" date not null 
);


----------------- Table N°6 : "Tabib"."langue" ----------------

DROP TABLE IF EXISTS "langue" ;
CREATE TABLE "langue"
(
"code_langue" VARCHAR(3),
CONSTRAINT "PK_langue" PRIMARY KEY("code_langue"),
"nom_langue" VARCHAR(25) not null,
);


----------------- Table N°7 : "Tabib"."assurance" ----------------

DROP TABLE IF EXISTS "assurance" ;
CREATE TABLE "assurance"
(
"id_assurance" int,
CONSTRAINT "PK_assurance" PRIMARY KEY("id_assurance"),
"nom_assurance" VARCHAR(35) not null,
);


----------------- Table N°8 : "Tabib"."creneau" ----------------

DROP TABLE IF EXISTS "creneau" ;
CREATE TABLE "creneau"
(
"id_creneau" int,
CONSTRAINT "PK_creneau" PRIMARY KEY("id_creneau"),
"date_creneau" date not null ,
"heure_debut" time not null,
"heure_fin" time not null,
"est_dispo" boolean default true,
"type" varchar(16) not null check("type" in ("téléconsultation","présentiel"),
"lien_teleconsultation" varchar(60)
);


----------------- Table N°9 : "Tabib"."evaluation" ----------------

DROP TABLE IF EXISTS "evaluation" ;
CREATE TABLE "evaluation"
(
"id_evaluation" int,
CONSTRAINT "PK_evaluation" PRIMARY KEY("id_evaluation"),
"note" int not null,
constraint "check_evaluation_note" check(note between 0 and 5)
"date_evaluation" date default CURRENT_DATE(),
"commentaire" varchar(120),
"id_medecin" VARCHAR(50) not null,
"id_patient" VARCHAR(50) not null,
constraint "FG1_medecin" foreign key("id_medecin") references "medecin"("id_medecin"),
constraint "FG2_medecin" foreign key("id_patient") references "patient"("id_patient")
);


----------------- Table N°10 : "Tabib"."rendez_vous" ----------------

DROP TABLE IF EXISTS "rendez_vous" ;
CREATE TABLE "rendez_vous"
(
"id_medecin" VARCHAR(50),
"id_patient" VARCHAR(50),
"id_creneau" int,
CONSTRAINT "PK_rendez_vous" PRIMARY KEY("id_medecin","id_patient","id_creneau"),
constraint "FG1_rendez_vous" foreign key("id_medecin") references "medecin"("id_medecin"),
constraint "FG2_rendez_vous" foreign key("id_patient") references "patient"("id_patient"),
constraint "FG3_rendez_vous" foreign key("id_creneau") references "creneau"("id_creneau")
);


----------------- Table N°11 : "Tabib"."langue_parlee" ----------------

DROP TABLE IF EXISTS "langue_parlee" ;
CREATE TABLE "langue_parlee"
(
"id_medecin" VARCHAR(50),
"code_langue" VARCHAR(3),
CONSTRAINT "PK_langue_parlee" PRIMARY KEY("id_medecin","code_langue"),
constraint "FG1_langue_parlee" foreign key("id_medecin") references "medecin"("id_medecin"),
constraint "FG2_langue_parlee" foreign key("code_langue") references "langue"("code_langue")
);


----------------- Table N°12 : "Tabib"."assurance_medecin" ----------------

DROP TABLE IF EXISTS "assurance_medecin" ;
CREATE TABLE "assurance_medecin"
(
"id_medecin" VARCHAR(50),
"id_assurance" int,
CONSTRAINT "PK_assurance_medecin" PRIMARY KEY("id_medecin","id_assurance"),
constraint "FG1_assurance_medecin" foreign key("id_medecin") references "medecin"("id_medecin"),
constraint "FG2_assurance_medecin" foreign key("id_assurance") references "assurance"("id_assurance")
);