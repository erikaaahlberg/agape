-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 19, 2018 at 08:40 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `agape`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL,
  `date` varchar(100) NOT NULL,
  `time` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `firstName`, `lastName`, `email`, `phone`, `category`, `description`, `date`, `time`) VALUES
(1, 'erika', '', 'erika.ahlberg@live.se', 730376509, '', '', '2018/11/30', '13.00'),
(2, 'erika', '', 'erika@hot', 97234023, '', '', '2018/11/30', '13.00'),
(3, 'erika', '', 'erika@hot', 97234023, '', '', '2018/11/30', '13.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
