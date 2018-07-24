/*
 Navicat Premium Data Transfer

 Source Server         : qas
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost
 Source Database       : coll_project

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : utf-8

 Date: 07/23/2018 23:14:16 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `coll_projects`
-- ----------------------------
DROP TABLE IF EXISTS `coll_projects`;
CREATE TABLE `coll_projects` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(500) DEFAULT NULL,
  `project_descrpt` text,
  `p_project` int(20) DEFAULT NULL,
  `cp_type` int(20) DEFAULT NULL,
  `importance` varchar(50) DEFAULT NULL,
  `creator` int(20) DEFAULT NULL,
  `pm` int(20) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `progress` smallint(10) DEFAULT NULL,
  `status` tinyint(5) DEFAULT NULL,
  `dof` datetime DEFAULT NULL COMMENT '完成日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `member_types`
-- ----------------------------
DROP TABLE IF EXISTS `member_types`;
CREATE TABLE `member_types` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `member_type` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `member_types`
-- ----------------------------
BEGIN;
INSERT INTO `member_types` VALUES ('1', 'pm', '2018-07-20 21:58:02'), ('2', 'pms', '2018-07-20 21:58:21'), ('3', 'npms', '2018-07-20 21:58:34');
COMMIT;

-- ----------------------------
--  Table structure for `people`
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `chinese_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `english_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `people`
-- ----------------------------
BEGIN;
INSERT INTO `people` VALUES ('1', '张三', 'Echo Zhang', 'http://imgtu.5011.net/uploads/content/20170213/3107011486958361.jpg'), ('2', '王五', 'Michael Wang', 'http://imgtu.5011.net/uploads/content/20170213/2414271486958361.jpg'), ('3', '郑六', 'Micheall zheng', 'http://imgtu.5011.net/uploads/content/20170213/7520491486958361.jpg'), ('4', '李四', 'Alex Li', 'http://imgtu.5011.net/uploads/content/20170213/1638981486958361.jpg');
COMMIT;

-- ----------------------------
--  Table structure for `project_attachment`
-- ----------------------------
DROP TABLE IF EXISTS `project_attachment`;
CREATE TABLE `project_attachment` (
  `id` int(20) DEFAULT NULL,
  `project_id` int(20) DEFAULT NULL,
  `attachment_path` varchar(200) DEFAULT NULL,
  `attachment_name` varchar(200) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_comments`
-- ----------------------------
DROP TABLE IF EXISTS `project_comments`;
CREATE TABLE `project_comments` (
  `id` int(20) DEFAULT NULL,
  `comment` text,
  `created_date` datetime DEFAULT NULL,
  `creator_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_has_label`
-- ----------------------------
DROP TABLE IF EXISTS `project_has_label`;
CREATE TABLE `project_has_label` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `project_id` int(20) DEFAULT NULL,
  `project_label_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_has_status`
-- ----------------------------
DROP TABLE IF EXISTS `project_has_status`;
CREATE TABLE `project_has_status` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `project_id` int(50) DEFAULT NULL,
  `system_status_id` int(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_has_sys_label`
-- ----------------------------
DROP TABLE IF EXISTS `project_has_sys_label`;
CREATE TABLE `project_has_sys_label` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `project_id` int(20) DEFAULT NULL,
  `system_label_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_has_tasks`
-- ----------------------------
DROP TABLE IF EXISTS `project_has_tasks`;
CREATE TABLE `project_has_tasks` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `project_id` int(20) DEFAULT NULL,
  `coll_task_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_has_workinghours`
-- ----------------------------
DROP TABLE IF EXISTS `project_has_workinghours`;
CREATE TABLE `project_has_workinghours` (
  `id` int(20) DEFAULT NULL,
  `project_id` int(20) DEFAULT NULL,
  `working_hour_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_label`
-- ----------------------------
DROP TABLE IF EXISTS `project_label`;
CREATE TABLE `project_label` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `project_label`
-- ----------------------------
BEGIN;
INSERT INTO `project_label` VALUES ('1', '自定义标签1', '2018-07-20 22:00:48'), ('2', '自定义标签2', '2018-07-20 22:04:38'), ('3', '自定义标签3', '2018-07-20 22:04:51'), ('4', '自定义标签4', '2018-07-20 22:05:01'), ('5', '自定义标签5', '2018-07-20 22:05:13'), ('6', '自定义标签6', '2018-07-20 22:05:25');
COMMIT;

-- ----------------------------
--  Table structure for `project_members`
-- ----------------------------
DROP TABLE IF EXISTS `project_members`;
CREATE TABLE `project_members` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `project_id` int(20) DEFAULT NULL,
  `members_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `type_id` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `project_revised_history`
-- ----------------------------
DROP TABLE IF EXISTS `project_revised_history`;
CREATE TABLE `project_revised_history` (
  `id` int(20) DEFAULT NULL,
  `project_id` int(20) DEFAULT NULL,
  `cotent` varchar(200) DEFAULT NULL,
  `people_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `projects_has_comments`
-- ----------------------------
DROP TABLE IF EXISTS `projects_has_comments`;
CREATE TABLE `projects_has_comments` (
  `id` int(20) DEFAULT NULL,
  `project_id` int(20) DEFAULT NULL,
  `comment_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `system_label`
-- ----------------------------
DROP TABLE IF EXISTS `system_label`;
CREATE TABLE `system_label` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `bg_color` varchar(50) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `system_label`
-- ----------------------------
BEGIN;
INSERT INTO `system_label` VALUES ('1', '系统标签1', '#ffffff', '2018-07-20 22:05:52'), ('2', '系统标签2', '#cccccc', '2018-07-20 22:06:06'), ('3', '系统标签3', '#999999', '2018-07-20 22:06:20'), ('4', '系统标签4', '#666666', '2018-07-20 22:06:57');
COMMIT;

-- ----------------------------
--  Table structure for `system_status`
-- ----------------------------
DROP TABLE IF EXISTS `system_status`;
CREATE TABLE `system_status` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `bg_color` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `system_status`
-- ----------------------------
BEGIN;
INSERT INTO `system_status` VALUES ('1', '开发中', '#fffff', '2018-07-20 22:07:21'), ('2', 'qas测试', '#5fdgse', '2018-07-20 22:09:40'), ('3', 'adf', '#sdfads', '2018-07-20 22:09:55'), ('4', 'azxcvzcv', '#455435', '2018-07-20 22:10:12');
COMMIT;

-- ----------------------------
--  Table structure for `working_hours`
-- ----------------------------
DROP TABLE IF EXISTS `working_hours`;
CREATE TABLE `working_hours` (
  `id` int(20) DEFAULT NULL,
  `holder_id` int(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `duration` float(20,10) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `confirm` tinyint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
