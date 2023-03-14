{\rtf1\ansi\ansicpg936\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function calculate() \{\
  // 
\f1 \'bb\'f1\'c8\'a1\'ca\'e4\'c8\'eb\'d6\'b5
\f0 \
  var totalWeight = parseFloat(document.getElementById("total-weight").value);\
  var frontAxlePosition = parseFloat(document.getElementById("front-axle-position").value);\
  var rearAxlePosition = parseFloat(document.getElementById("rear-axle-position").value);\
  var cgPosition = parseFloat(document.getElementById("cg-position").value);\
\
  // 
\f1 \'bc\'c6\'cb\'e3\'c7\'b0\'ba\'f3\'d6\'e1\'d4\'d8\'ba\'c9
\f0 \
  var wheelbase = rearAxlePosition - frontAxlePosition;\
  var frontAxleLoad = totalWeight * (wheelbase - cgPosition + frontAxlePosition) / wheelbase;\
  var rearAxleLoad = totalWeight * (cgPosition - frontAxlePosition) / wheelbase;\
\
  // 
\f1 \'cf\'d4\'ca\'be\'bd\'e1\'b9\'fb
\f0 \
  document.getElementById("result").innerHTML = "
\f1 \'c7\'b0\'d6\'e1\'d4\'d8\'ba\'c9\'a3\'ba
\f0 " + frontAxleLoad.toFixed(2) + "kg
\f1 \'a3\'ac\'ba\'f3\'d6\'e1\'d4\'d8\'ba\'c9\'a3\'ba
\f0 " + rearAxleLoad.toFixed(2) + "kg
\f1 \'a1\'a3
\f0 ";\
\}\
}