// requiring packages
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStradegy = require('passport-facebook');
const keys = require('./config');
const chalk = require('chalk');

// this will reset everytime you log in with, it's taking the place of the data base that I will use later. 
let user = {};

