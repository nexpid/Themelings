// app/modules/application_commands/ApplicationCommandValidators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function isValidRoleMention(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'roleMention';
            var1 = var1 === var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.type;
            var2 = 'textMention';
            var2 = var2 === var4;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.text;
            var3 = '@everyone';
            var2 = var3 === var4;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function validateNumericOptionRange(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.minValue;
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.minValue;
            if(!(!(var4 < var1))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var1 = var2.maxValue;
            if(!(var3 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2.maxValue;
            if(!(var4 > var1)) { _fun0002_ip = 9; continue _fun0002 }
case 8:
            var1 = var2.maxValue;
            if(!(var3 != var1)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2.minValue;
            if(!(var3 == var1)) { _fun0002_ip = 13; continue _fun0002 }
case 11:
            var1 = var2.minValue;
            if(!(var3 == var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var2.maxValue;
            if(!(var3 == var1)) { _fun0002_ip = 16; continue _fun0002 }
case 9:
            var1 = {};
            var3 = true;
            var1['success'] = var3;
            return var1;
case 16:
            var1 = {};
            var3 = false;
            var1['success'] = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 5;
            var4 = var6[var4];
            var8 = undefined;
            var4 = var5.bind(var8)(var4);
            var6 = var4.intl;
            var5 = var6.formatToPlainString;
            var4 = {};
            var7 = _closure1_slot8;
            var3 = var2.maxValue;
            var3 = var7.bind(var8)(var3);
            var4['maximum'] = var3;
            var3 = arg5;
            var3 = var5.bind(var6)(var3, var4);
            var1['error'] = var3;
            return var1;
case 14:
            var1 = {};
            var3 = false;
            var1['success'] = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 5;
            var4 = var6[var4];
            var8 = undefined;
            var4 = var5.bind(var8)(var4);
            var6 = var4.intl;
            var5 = var6.formatToPlainString;
            var4 = {};
            var7 = _closure1_slot8;
            var3 = var2.minValue;
            var3 = var7.bind(var8)(var3);
            var4['minimum'] = var3;
            var3 = arg4;
            var3 = var5.bind(var6)(var3, var4);
            var1['error'] = var3;
            return var1;
case 13:
            var1 = {};
            var3 = false;
            var1['success'] = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 5;
            var3 = var5[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = {};
            var6 = _closure1_slot8;
            var8 = var2.minValue;
            var8 = var6.bind(var7)(var8);
            var3['minimum'] = var8;
            var2 = var2.maxValue;
            var2 = var6.bind(var7)(var2);
            var3['maximum'] = var2;
            var2 = arg3;
            var2 = var4.bind(var5)(var2, var3);
            var1['error'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function localeNumberFormat(arg1) {
        var4 = arg1;
        var3 = var4.toLocaleString;
        var5 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var2);
        var1 = var1.intl;
        var2 = var1.currentLocale;
        var1 = {};
        var5 = false;
        var1['useGrouping'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = 2;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.SUB_COMMAND;
    var8 = function() {
        var1 = {};
        var2 = false;
        var1['success'] = var2;
        return var1;
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.SUB_COMMAND_GROUP;
    var8 = function() {
        var1 = {};
        var2 = false;
        var1['success'] = var2;
        return var1;
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.BOOLEAN;
    var8 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 === var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var1.text;
            var1 = var2.trim;
            var4 = var1.bind(var2)();
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.toChoiceBooleanValue;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            var2 = var2 != var3;
            var1['success'] = var2;
            return var1;
case 17:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.STRING;
    var8 = function(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var3 = 4;
            var3 = var9[var3];
            var7 = undefined;
            var6 = var5.bind(var7)(var3);
            var5 = var2.type;
            var8 = _closure1_slot0;
            var3 = 2;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.STRING;
            var5 = var5 === var3;
            var3 = 'option type must match validator type';
            var3 = var6.bind(var7)(var5, var3);
            var5 = var1.type;
            var3 = 'emoji';
            if(!(var3 !== var5)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = 'text';
            if(!(var3 !== var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = {};
            var5 = false;
            var3['success'] = var5;
            return var3;
case 21:
            var5 = var1.text;
            var3 = var5.trim;
            var6 = var3.bind(var5)();
            _fun0004_ip = 23; continue _fun0004;
case 19:
            var6 = var1.surrogate;
case 23:
            var1 = var2.choices;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = var2.autocomplete;
            if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceStringValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0004_ip = 28; continue _fun0004 }
case 26:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0004_ip = 31; continue _fun0004 }
case 29:
            if(!(var3 != var6)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var8 = {};
            var5 = _closure1_slot0;
            var1 = _closure1_slot3;
            var11 = 5;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.e+9/SY;
            var8['exactRangeErrorMessage'] = var9;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.IE1sTh;
            var8['rangeErrorMessage'] = var9;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.rXAFQD;
            var8['minErrorMessage'] = var9;
            var1 = var1[var11];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.ycEPx/;
            var8['maxErrorMessage'] = var1;
            var1 = var2.minLength;
            if(!(var7 !== var1)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var5 = var6.length;
            var1 = var2.minLength;
            if(!(!(var5 < var1))) { _fun0004_ip = 36; continue _fun0004 }
case 34:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = var6.length;
            var1 = var2.maxLength;
            if(!(var5 > var1)) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var1 = var2.minLength;
            if(!(var7 !== var1)) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var5 = var2.minLength;
            var1 = var2.maxLength;
            if(!(var5 !== var1)) { _fun0004_ip = 42; continue _fun0004 }
case 39:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0004_ip = 45; continue _fun0004 }
case 43:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var1 = var2.maxLength;
            if(!(var7 === var1)) { _fun0004_ip = 48; continue _fun0004 }
case 37:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            _fun0004_ip = 49; continue _fun0004;
case 48:
            var5 = {};
            var9 = false;
            var5['success'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var11];
            var9 = var10.bind(var7)(var9);
            var13 = var9.intl;
            var12 = var13.formatToPlainString;
            var10 = var8.maxErrorMessage;
            var9 = {};
            var15 = _closure1_slot8;
            var14 = var2.maxLength;
            var14 = var15.bind(var7)(var14);
            var9['maximum'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var5['error'] = var9;
            var1 = var5;
            _fun0004_ip = 49; continue _fun0004;
case 46:
            var5 = {};
            var9 = false;
            var5['success'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var11];
            var9 = var10.bind(var7)(var9);
            var13 = var9.intl;
            var12 = var13.formatToPlainString;
            var10 = var8.minErrorMessage;
            var9 = {};
            var15 = _closure1_slot8;
            var14 = var2.minLength;
            var14 = var15.bind(var7)(var14);
            var9['minimum'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var5['error'] = var9;
            var1 = var5;
            _fun0004_ip = 49; continue _fun0004;
case 45:
            var5 = {};
            var9 = false;
            var5['success'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var11];
            var9 = var10.bind(var7)(var9);
            var13 = var9.intl;
            var12 = var13.formatToPlainString;
            var10 = var8.rangeErrorMessage;
            var9 = {};
            var15 = _closure1_slot8;
            var14 = var2.minLength;
            var14 = var15.bind(var7)(var14);
            var9['minimum'] = var14;
            var14 = var2.maxLength;
            var14 = var15.bind(var7)(var14);
            var9['maximum'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var5['error'] = var9;
            var1 = var5;
            _fun0004_ip = 49; continue _fun0004;
case 42:
            var5 = {};
            var9 = false;
            var5['success'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var11];
            var9 = var10.bind(var7)(var9);
            var11 = var9.intl;
            var10 = var11.formatToPlainString;
            var9 = var8.exactRangeErrorMessage;
            var8 = {};
            var13 = _closure1_slot8;
            var12 = var2.minLength;
            var12 = var13.bind(var7)(var12);
            var8['value'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['error'] = var8;
            var1 = var5;
case 49:
            var5 = var1.success;
            if(var5) { _fun0004_ip = 31; continue _fun0004 }
case 50:
            return var1;
case 31:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
case 32:
            var1 = {};
            var5 = false;
            var1['success'] = var5;
            return var1;
case 28:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
case 24:
            var1 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 3;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.findChoiceStringValue;
            var2 = var2.choices;
            var2 = var4.bind(var5)(var2, var6);
            var2 = var3 != var2;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.INTEGER;
    var8 = function(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var3 = 4;
            var3 = var9[var3];
            var7 = undefined;
            var6 = var5.bind(var7)(var3);
            var5 = var2.type;
            var8 = _closure1_slot0;
            var3 = 2;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.INTEGER;
            var5 = var5 === var3;
            var3 = 'option type must match validator type';
            var3 = var6.bind(var7)(var5, var3);
            var8 = var1.type;
            var3 = null;
            var5 = 'text';
            var6 = null;
            if(!(var5 === var8)) { _fun0005_ip = 21; continue _fun0005 }
case 51:
            var5 = var1.text;
            var1 = var5.trim;
            var6 = var1.bind(var5)();
case 21:
            if(!(var3 != var6)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var5 = var6.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0005_ip = 52; continue _fun0005 }
case 54:
            var1 = var2.choices;
            if(!(var3 == var1)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var1 = var2.autocomplete;
            if(!var1) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceNumberValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0005_ip = 59; continue _fun0005 }
case 57:
            var1 = global;
            var8 = var1.Number;
            var9 = _closure1_slot2;
            var10 = _closure1_slot3;
            var5 = 6;
            var5 = var10[var5];
            var10 = var9.bind(var7)(var5);
            var9 = var10.normalizeNumericString;
            var5 = _closure1_slot4;
            var5 = var5.locale;
            var5 = var9.bind(var10)(var5, var6);
            var10 = var8.bind(var7)(var5);
            if(!(var3 != var10)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var5 = var1.isNaN;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0005_ip = 60; continue _fun0005 }
case 62:
            var8 = var1.Number;
            var5 = var8.isInteger;
            var5 = var5.bind(var8)(var10);
            if(!var5) { _fun0005_ip = 60; continue _fun0005 }
case 63:
            var5 = var1.Number;
            var1 = var5.isSafeInteger;
            var1 = var1.bind(var5)(var10);
            if(!var1) { _fun0005_ip = 60; continue _fun0005 }
case 64:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 5;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var15 = var5["8Y5zsp"];
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var14 = var5.CyRLmH;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.t;
            var13 = var1.VD3Q+S;
            var18 = undefined;
            var17 = var10;
            var16 = var2;
            var1 = var18[var9](var17, var16, var15, var14, var13, var12);
            _fun0005_ip = 65; continue _fun0005;
case 60:
            var5 = {};
            var8 = false;
            var5['success'] = var8;
            var1 = var5;
case 65:
            return var1;
case 59:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
case 55:
            var1 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 3;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.findChoiceNumberValue;
            var2 = var2.choices;
            var2 = var4.bind(var5)(var2, var6);
            var2 = var3 != var2;
            var1['success'] = var2;
            return var1;
case 52:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.NUMBER;
    var8 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var3 = 4;
            var3 = var9[var3];
            var7 = undefined;
            var6 = var5.bind(var7)(var3);
            var5 = var2.type;
            var8 = _closure1_slot0;
            var3 = 2;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.NUMBER;
            var5 = var5 === var3;
            var3 = 'option type must match validator type';
            var3 = var6.bind(var7)(var5, var3);
            var8 = var1.type;
            var3 = null;
            var5 = 'text';
            var6 = null;
            if(!(var5 === var8)) { _fun0006_ip = 21; continue _fun0006 }
case 51:
            var5 = var1.text;
            var1 = var5.trim;
            var6 = var1.bind(var5)();
case 21:
            if(!(var3 != var6)) { _fun0006_ip = 66; continue _fun0006 }
case 53:
            var5 = var6.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0006_ip = 66; continue _fun0006 }
case 54:
            var1 = var2.choices;
            if(!(var3 == var1)) { _fun0006_ip = 40; continue _fun0006 }
case 56:
            var1 = var2.autocomplete;
            if(!var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceNumberValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0006_ip = 67; continue _fun0006 }
case 57:
            var1 = global;
            var8 = var1.Number;
            var9 = _closure1_slot2;
            var10 = _closure1_slot3;
            var5 = 6;
            var5 = var10[var5];
            var10 = var9.bind(var7)(var5);
            var9 = var10.normalizeNumericString;
            var5 = _closure1_slot4;
            var5 = var5.locale;
            var5 = var9.bind(var10)(var5, var6);
            var10 = var8.bind(var7)(var5);
            var5 = var1.isNaN;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0006_ip = 38; continue _fun0006 }
case 68:
            var5 = var1.Number;
            var5 = var5.MAX_SAFE_INTEGER;
            if(!(!(var10 > var5))) { _fun0006_ip = 38; continue _fun0006 }
case 69:
            var1 = var1.Number;
            var1 = var1.MIN_SAFE_INTEGER;
            if(!(!(var10 < var1))) { _fun0006_ip = 38; continue _fun0006 }
case 70:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 5;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var15 = var5["8Y5zsp"];
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var14 = var5.CyRLmH;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.t;
            var13 = var1.VD3Q+S;
            var18 = undefined;
            var17 = var10;
            var16 = var2;
            var1 = var18[var9](var17, var16, var15, var14, var13, var12);
            _fun0006_ip = 71; continue _fun0006;
case 38:
            var5 = {};
            var8 = false;
            var5['success'] = var8;
            var1 = var5;
case 71:
            return var1;
case 67:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
case 40:
            var1 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 3;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.findChoiceNumberValue;
            var2 = var2.choices;
            var2 = var4.bind(var5)(var2, var6);
            var2 = var3 != var2;
            var1['success'] = var2;
            return var1;
case 66:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.USER;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0007_ip = 72; continue _fun0007 }
case 18:
            var2 = {};
            var4 = var1.type;
            var3 = 'userMention';
            var3 = var3 === var4;
            var2['success'] = var3;
            return var2;
case 72:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var7 = var4.bind(var3)(var2);
            var6 = var7.resolveApplicationCommandOption;
            var11 = var1.text;
            var4 = {};
            var1 = false;
            var4['allowRoles'] = var1;
            var10 = arg4;
            var9 = arg3;
            var12 = var7;
            var8 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            var1 = {};
            var4 = null;
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var3 = var2.type;
case 75:
            var2 = 'userMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
case 73:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.CHANNEL;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0008_ip = 10; continue _fun0008 }
case 18:
            var2 = {};
            var4 = var1.type;
            var3 = 'channelMention';
            var3 = var3 === var4;
            var2['success'] = var3;
            return var2;
case 10:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0008_ip = 27; continue _fun0008 }
case 17:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var6 = var4.bind(var3)(var2);
            var5 = var6.resolveApplicationCommandOption;
            var4 = var1.text;
            var2 = arg4;
            var1 = arg3;
            var2 = var5.bind(var6)(var4, var2, var1);
            var1 = {};
            var4 = null;
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var3 = var2.type;
case 77:
            var2 = 'channelMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
case 27:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.ROLE;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0009_ip = 79; continue _fun0009 }
case 18:
            var2 = {};
            var4 = _closure1_slot6;
            var3 = undefined;
            var3 = var4.bind(var3)(var1);
            var2['success'] = var3;
            return var2;
case 79:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var7 = var4.bind(var3)(var2);
            var6 = var7.resolveApplicationCommandOption;
            var11 = var1.text;
            var4 = {};
            var1 = false;
            var4['allowUsers'] = var1;
            var10 = arg4;
            var9 = arg3;
            var12 = var7;
            var8 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            var1 = {};
            var4 = null;
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var3 = var2.type;
case 82:
            var2 = 'roleMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
case 80:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.MENTIONABLE;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0010_ip = 84; continue _fun0010 }
case 18:
            var2 = {};
            var4 = var1.type;
            var3 = 'userMention';
            var3 = var3 === var4;
            if(var3) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
case 85:
            var2['success'] = var3;
            return var2;
case 84:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 7;
            var2 = var5[var2];
            var6 = undefined;
            var5 = var3.bind(var6)(var2);
            var3 = var5.isSnowflake;
            var2 = var1.text;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0010_ip = 87; continue _fun0010 }
case 22:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var7 = var3.bind(var6)(var2);
            var5 = var7.resolveApplicationCommandOption;
            var3 = var1.text;
            var2 = arg4;
            var1 = arg3;
            var5 = var5.bind(var7)(var3, var2, var1);
            var1 = {};
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0010_ip = 88; continue _fun0010 }
case 89:
            var7 = var5.type;
            var3 = 'userMention';
            var3 = var3 === var7;
            if(var3) { _fun0010_ip = 14; continue _fun0010 }
case 90:
            var4 = _closure1_slot6;
            var3 = var4.bind(var6)(var5);
case 14:
            var2 = var3;
case 88:
            var1['success'] = var2;
            return var1;
case 87:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[8] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.ATTACHMENT;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'text';
            if(!(var1 === var2)) { _fun0011_ip = 91; continue _fun0011 }
case 18:
            var6 = _closure1_slot5;
            var5 = var6.getUpload;
            var2 = arg2;
            var4 = var2.name;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var2);
            var2 = var7.getCommandAttachmentDraftType;
            var1 = arg5;
            var2 = var2.bind(var7)(var1);
            var1 = arg3;
            var4 = var5.bind(var6)(var1, var4, var2);
            var1 = {};
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0011_ip = 92; continue _fun0011 }
case 93:
            var4 = var4.filename;
            var3 = var3.text;
            var2 = var4 === var3;
case 92:
            var1['success'] = var2;
            return var1;
case 91:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[6] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandValidators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();