-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: administracion
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `idCargo` int NOT NULL AUTO_INCREMENT,
  `nombreCargo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idCargo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (1,'Responsable'),(2,'Administrador'),(3,'Tesorero');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `central`
--

DROP TABLE IF EXISTS `central`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `central` (
  `idCentral` int NOT NULL AUTO_INCREMENT,
  `nombreCentral` varchar(200) NOT NULL,
  PRIMARY KEY (`idCentral`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `central`
--

LOCK TABLES `central` WRITE;
/*!40000 ALTER TABLE `central` DISABLE KEYS */;
INSERT INTO `central` VALUES (1,'Reconquista');
/*!40000 ALTER TABLE `central` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contribuyente`
--

DROP TABLE IF EXISTS `contribuyente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contribuyente` (
  `idContribuyente` int NOT NULL AUTO_INCREMENT,
  `idCentral` int NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `DNI` varchar(10) NOT NULL,
  PRIMARY KEY (`idContribuyente`),
  KEY `idCentral` (`idCentral`),
  CONSTRAINT `contribuyente_ibfk_1` FOREIGN KEY (`idCentral`) REFERENCES `central` (`idCentral`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contribuyente`
--

LOCK TABLES `contribuyente` WRITE;
/*!40000 ALTER TABLE `contribuyente` DISABLE KEYS */;
INSERT INTO `contribuyente` VALUES (1,1,'Fernandez','Febes  ','25672158'),(2,1,'Torales','Elba  ','17644320'),(3,1,'Villalba','Sergio  ','29303627'),(4,1,'Franco','Omar  ','27983161'),(5,1,'Orduña','Juan Orduña (Hijo)','26002893'),(6,1,'Orduña','Juan Orduña (Cacho)','13116002'),(7,1,'Luna','Leandro  ','22586941'),(8,1,'Moreira','Vanina  ','27237188'),(9,1,'Silva','Juan  ','16352952'),(10,1,'Díaz','Marta Díaz (Mimi)','14336532'),(11,1,'Ortiz','Santiago  ','34314706'),(12,1,'Romero','Cristian  ','30788244'),(13,1,'Fernández','Santiago  ','28036704'),(14,1,'Sosa','Delia  ','5668085'),(15,1,'Fernandez','Lucas  ','26513575'),(16,1,'Borda','Luis Borda ','20181146'),(17,1,'Baron','Daniel  ','14113839'),(18,1,'Fernández','Abel  ','10063925'),(19,1,'Hernández','David  ','24492552'),(20,1,'Torres','Francisco  ','11279571'),(21,1,'Cristiani','Carlos  ','26226616'),(22,1,'Gómez','Andres Gómez (Mica)','36196815'),(23,1,'Ru','Ezequiel  ','35752201'),(24,1,'Peña','Clarisa  ','23651017'),(25,1,'Cabrera','Julio  ','36012764'),(26,1,'Cabrera','Daniel  ','13990434'),(27,1,'Vega','Mirta  ','16871524'),(28,1,'Cabrera','Orlando  ','6307202'),(29,1,'Luque','Carmen  ','23582973'),(30,1,'Alvarez','José Alvarez ','33548706'),(31,1,'Esperanza','Fabian  ','23544263'),(32,1,'Esperanza','Armando  ','5531969'),(33,1,'Cabrera','Natalia  ','26002736'),(34,1,'Díaz','Catalina  ','3778284'),(35,1,'Peralta','Ramona  ','16871583'),(36,1,'Fogar','Roxana  ','31000775'),(37,1,'Martínez','Jorge  ','10560641'),(38,1,'Martínez','Priscila  ','34541328'),(39,1,'Benítez','Angela  ','5424513'),(40,1,'Cantero','Elma  ','12305523'),(41,1,'Pavón','Lina  ','12115772'),(42,1,'Orduña','Mario  ','12181309'),(43,1,'Favatier','Belén  ','41864080');
/*!40000 ALTER TABLE `contribuyente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `egreso`
--

DROP TABLE IF EXISTS `egreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `egreso` (
  `idEgreso` int NOT NULL AUTO_INCREMENT,
  `idFilial` varchar(10) NOT NULL,
  `idTipoEgreso` int NOT NULL,
  `cantidad` decimal(20,2) NOT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idEgreso`),
  KEY `idFilial` (`idFilial`),
  KEY `idTipoEgreso` (`idTipoEgreso`),
  CONSTRAINT `egreso_ibfk_1` FOREIGN KEY (`idFilial`) REFERENCES `filial` (`idFilial`),
  CONSTRAINT `egreso_ibfk_2` FOREIGN KEY (`idTipoEgreso`) REFERENCES `tipoegreso` (`idTipoEgreso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `egreso`
--

LOCK TABLES `egreso` WRITE;
/*!40000 ALTER TABLE `egreso` DISABLE KEYS */;
/*!40000 ALTER TABLE `egreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial`
--

DROP TABLE IF EXISTS `filial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filial` (
  `idFilial` varchar(10) NOT NULL,
  `idCentral` int NOT NULL,
  `nombreFilial` varchar(200) NOT NULL,
  PRIMARY KEY (`idFilial`),
  KEY `idCentral` (`idCentral`),
  CONSTRAINT `filial_ibfk_1` FOREIGN KEY (`idCentral`) REFERENCES `central` (`idCentral`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial`
--

LOCK TABLES `filial` WRITE;
/*!40000 ALTER TABLE `filial` DISABLE KEYS */;
INSERT INTO `filial` VALUES ('C-00',1,'Reconquista'),('C-01',1,'Avellaneda'),('C-02',1,'Cañada Ombu'),('C-03',1,'Colonia Duran'),('C-04',1,'Sombrerito'),('C-05',1,'Fortin Olmos'),('C-06',1,'KM 115'),('C-07',1,'Romang'),('C-08',1,'San Manuel'),('C-09',1,'Tacuarendi');
/*!40000 ALTER TABLE `filial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingreso`
--

DROP TABLE IF EXISTS `ingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingreso` (
  `idIngreso` int NOT NULL AUTO_INCREMENT,
  `idTipoIngreso` int NOT NULL,
  `idContribuyente` int NOT NULL,
  `cantidad` decimal(20,2) NOT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `idFilial` varchar(10) NOT NULL,
  PRIMARY KEY (`idIngreso`),
  KEY `idTipoIngreso` (`idTipoIngreso`),
  KEY `idContribuyente` (`idContribuyente`),
  KEY `fk_filial` (`idFilial`),
  CONSTRAINT `fk_filial` FOREIGN KEY (`idFilial`) REFERENCES `filial` (`idFilial`),
  CONSTRAINT `ingreso_ibfk_1` FOREIGN KEY (`idTipoIngreso`) REFERENCES `tipoingreso` (`idTipoIngreso`),
  CONSTRAINT `ingreso_ibfk_2` FOREIGN KEY (`idContribuyente`) REFERENCES `contribuyente` (`idContribuyente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingreso`
--

LOCK TABLES `ingreso` WRITE;
/*!40000 ALTER TABLE `ingreso` DISABLE KEYS */;
INSERT INTO `ingreso` VALUES (1,2,2,10000.00,'2024-04-22 03:00:00','C-01');
/*!40000 ALTER TABLE `ingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoegreso`
--

DROP TABLE IF EXISTS `tipoegreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoegreso` (
  `idTipoEgreso` int NOT NULL AUTO_INCREMENT,
  `nombreTipoEgreso` varchar(100) NOT NULL,
  PRIMARY KEY (`idTipoEgreso`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoegreso`
--

LOCK TABLES `tipoegreso` WRITE;
/*!40000 ALTER TABLE `tipoegreso` DISABLE KEYS */;
INSERT INTO `tipoegreso` VALUES (19,'Conservación y Limpieza'),(20,'Donaciones a terceros'),(21,'Servicios: Luz, Gas, Agua, Tel., Seguros y otros'),(22,'Papelería y Utiles'),(23,'Impuestos, Tasas, Sellados y Aranceles'),(24,'Honorarios'),(25,'Movilidad y Viajes Misioneros'),(26,'Ayuda a Necesitados'),(27,'Viajes Especiales'),(28,'Gastos de Recepcion'),(29,'Alquileres Pagados'),(30,'Material Biblico'),(31,'Utensilios, Blanco y otros enseres'),(32,'Acreedores (cuota por compra o credito M. y U.'),(33,'Muebles y Utiles, instrumentos, instalaciones'),(34,'Materiales en acopio'),(35,'Mejoras (bienes de uso: Inmuebles - edificios)'),(36,'Compra de inmueble (incluye anticipos)'),(37,'Diferencia de Arqueo'),(38,'Total Gastos'),(39,'Transferencia otorgada a SEDE CENTRAL'),(40,'Depositos Bancarios'),(41,'Total fondos transferidos'),(42,'Total Salidas Contabilizadas');
/*!40000 ALTER TABLE `tipoegreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoingreso`
--

DROP TABLE IF EXISTS `tipoingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoingreso` (
  `idTipoIngreso` int NOT NULL,
  `nombreTipoIngreso` varchar(150) NOT NULL,
  PRIMARY KEY (`idTipoIngreso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoingreso`
--

LOCK TABLES `tipoingreso` WRITE;
/*!40000 ALTER TABLE `tipoingreso` DISABLE KEYS */;
INSERT INTO `tipoingreso` VALUES (1,'Saldo Mes Anterior'),(2,'Donaciones Generales Voluntarias'),(3,'Donaciones para Construccion o compra inmuebles'),(4,'Donaciones para Construccion o compra Bs Muebles'),(5,'Donaciones para Pago Impuestos y Servicios Publico'),(6,'Donaciones para Material Bíblico'),(7,'Total de Ofrendas'),(8,'Alquileres Cobrados'),(9,'Diferencia de Arqueo'),(10,'Ventas bienes de uso (incluye anticipos)'),(11,'total de otros ingresos'),(12,'Transferencia recibidas de'),(13,'Extracciones Bancarias'),(14,'Total Transferencias'),(15,'Total ingreso del mes (7+ 11 + 14)'),(19,'Total de Fondos (1 + 18)'),(20,'Total de salidas contabilizadas (42)'),(21,'Saldo de caja que pasa al proximo mes');
/*!40000 ALTER TABLE `tipoingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `idcargo` int NOT NULL,
  `idFilial` varchar(10) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  `localidad` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `idcargo` (`idcargo`),
  KEY `idFilial` (`idFilial`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idcargo`) REFERENCES `cargo` (`idCargo`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`idFilial`) REFERENCES `filial` (`idFilial`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,1,'C-00','Administrador','Admin','13467908','25 De Mayo 4003','Olavarria','chimutin@gmail.com','02284573099','$2a$08$FGv4PaGTn9Jck.qMcrQGTu4jCXwNiDIlTQCgxChX72xw9PPihptNC'),(2,1,'C-00','Aguilar','Ruben','39565597','Calle 52, 1545','Reconquista','rubenaguilar478@gmail.com','3482 - 691433','$2a$08$1jGjn0ldVWgD4dLvzDx4k.JHrVHh2ycXkASOnFblPWoX6LQC1ypS6');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 23:13:16
