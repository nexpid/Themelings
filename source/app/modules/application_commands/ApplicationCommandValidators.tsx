// app/modules/application_commands/ApplicationCommandValidators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function validateNumericOptionRange(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.minValue;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 28; continue _fun0001 }
 18:
            var1 = var2.minValue;
            if(!(!(var4 < var1))) { _fun0001_ip = 48; continue _fun0001 }
 28:
            var1 = var2.maxValue;
            if(!(var3 != var1)) { _fun0001_ip = 91; continue _fun0001 }
 38:
            var1 = var2.maxValue;
            if(!(var4 > var1)) { _fun0001_ip = 91; continue _fun0001 }
 48:
            var1 = var2.maxValue;
            if(!(var3 != var1)) { _fun0001_ip = 71; continue _fun0001 }
 58:
            var1 = var2.minValue;
            if(!(var3 == var1)) { _fun0001_ip = 264; continue _fun0001 }
 71:
            var1 = var2.minValue;
            if(!(var3 == var1)) { _fun0001_ip = 183; continue _fun0001 }
 81:
            var1 = var2.maxValue;
            if(!(var3 == var1)) { _fun0001_ip = 102; continue _fun0001 }
 91:
            var1 = {};
            var3 = true;
            var1['success'] = var3;
            return var1;
 102:
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
 183:
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
 264:
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
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var4 = 2;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.SUB_COMMAND;
    var8 = function() {
        var1 = {};
        var2 = false;
        var1['success'] = var2;
        return var1;
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.SUB_COMMAND_GROUP;
    var8 = function() {
        var1 = {};
        var2 = false;
        var1['success'] = var2;
        return var1;
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.BOOLEAN;
    var8 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 === var3)) { _fun0002_ip = 82; continue _fun0002 }
 16:
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
 82:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.STRING;
    var8 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!(var3 !== var5)) { _fun0003_ip = 129; continue _fun0003 }
 93:
            var3 = 'text';
            if(!(var3 !== var5)) { _fun0003_ip = 112; continue _fun0003 }
 101:
            var3 = {};
            var5 = false;
            var3['success'] = var5;
            return var3;
 112:
            var5 = var1.text;
            var3 = var5.trim;
            var6 = var3.bind(var5)();
            _fun0003_ip = 135; continue _fun0003;
 129:
            var6 = var1.surrogate;
 135:
            var1 = var2.choices;
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 883; continue _fun0003 }
 150:
            var1 = var2.autocomplete;
            if(!var1) { _fun0003_ip = 207; continue _fun0003 }
 159:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceStringValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0003_ip = 872; continue _fun0003 }
 207:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0003_ip = 230; continue _fun0003 }
 217:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0003_ip = 850; continue _fun0003 }
 230:
            if(!(var3 != var6)) { _fun0003_ip = 861; continue _fun0003 }
 237:
            var8 = {};
            var5 = _closure1_slot0;
            var1 = _closure1_slot3;
            var11 = 5;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.e+9/SU;
            var8['exactRangeErrorMessage'] = var9;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.IE1sTk;
            var8['rangeErrorMessage'] = var9;
            var9 = var1[var11];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.rXAFQE;
            var8['minErrorMessage'] = var9;
            var1 = var1[var11];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.ycEPx8;
            var8['maxErrorMessage'] = var1;
            var1 = var2.minLength;
            if(!(var7 !== var1)) { _fun0003_ip = 383; continue _fun0003 }
 368:
            var5 = var6.length;
            var1 = var2.minLength;
            if(!(!(var5 < var1))) { _fun0003_ip = 408; continue _fun0003 }
 383:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0003_ip = 490; continue _fun0003 }
 393:
            var5 = var6.length;
            var1 = var2.maxLength;
            if(!(var5 > var1)) { _fun0003_ip = 490; continue _fun0003 }
 408:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0003_ip = 447; continue _fun0003 }
 418:
            var1 = var2.minLength;
            if(!(var7 !== var1)) { _fun0003_ip = 447; continue _fun0003 }
 428:
            var5 = var2.minLength;
            var1 = var2.maxLength;
            if(!(var5 !== var1)) { _fun0003_ip = 763; continue _fun0003 }
 447:
            var1 = var2.maxLength;
            if(!(var7 !== var1)) { _fun0003_ip = 470; continue _fun0003 }
 457:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0003_ip = 668; continue _fun0003 }
 470:
            var1 = var2.minLength;
            if(!(var7 === var1)) { _fun0003_ip = 586; continue _fun0003 }
 480:
            var1 = var2.maxLength;
            if(!(var7 === var1)) { _fun0003_ip = 504; continue _fun0003 }
 490:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            _fun0003_ip = 839; continue _fun0003;
 504:
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
            _fun0003_ip = 839; continue _fun0003;
 586:
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
            _fun0003_ip = 839; continue _fun0003;
 668:
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
            _fun0003_ip = 839; continue _fun0003;
 763:
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
 839:
            var5 = var1.success;
            if(var5) { _fun0003_ip = 850; continue _fun0003 }
 848:
            return var1;
 850:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
 861:
            var1 = {};
            var5 = false;
            var1['success'] = var5;
            return var1;
 872:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
 883:
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
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.INTEGER;
    var8 = function(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!(var5 === var8)) { _fun0004_ip = 112; continue _fun0004 }
 97:
            var5 = var1.text;
            var1 = var5.trim;
            var6 = var1.bind(var5)();
 112:
            if(!(var3 != var6)) { _fun0004_ip = 487; continue _fun0004 }
 119:
            var5 = var6.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0004_ip = 487; continue _fun0004 }
 133:
            var1 = var2.choices;
            if(!(var3 == var1)) { _fun0004_ip = 436; continue _fun0004 }
 146:
            var1 = var2.autocomplete;
            if(!var1) { _fun0004_ip = 203; continue _fun0004 }
 155:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceNumberValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0004_ip = 425; continue _fun0004 }
 203:
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
            if(!(var3 != var10)) { _fun0004_ip = 411; continue _fun0004 }
 265:
            var5 = var1.isNaN;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0004_ip = 411; continue _fun0004 }
 282:
            var8 = var1.Number;
            var5 = var8.isInteger;
            var5 = var5.bind(var8)(var10);
            if(!var5) { _fun0004_ip = 411; continue _fun0004 }
 302:
            var5 = var1.Number;
            var1 = var5.isSafeInteger;
            var1 = var1.bind(var5)(var10);
            if(!var1) { _fun0004_ip = 411; continue _fun0004 }
 322:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 5;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var15 = var5.8Y5zsr;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var14 = var5.CyRLmJ;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.t;
            var13 = var1.VD3Q+f;
            var18 = undefined;
            var17 = var10;
            var16 = var2;
            var1 = var18[var9](var17, var16, var15, var14, var13, var12);
            _fun0004_ip = 423; continue _fun0004;
 411:
            var5 = {};
            var8 = false;
            var5['success'] = var8;
            var1 = var5;
 423:
            return var1;
 425:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
 436:
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
 487:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.NUMBER;
    var8 = function(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(!(var5 === var8)) { _fun0005_ip = 112; continue _fun0005 }
 97:
            var5 = var1.text;
            var1 = var5.trim;
            var6 = var1.bind(var5)();
 112:
            if(!(var3 != var6)) { _fun0005_ip = 469; continue _fun0005 }
 119:
            var5 = var6.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0005_ip = 469; continue _fun0005 }
 133:
            var1 = var2.choices;
            if(!(var3 == var1)) { _fun0005_ip = 418; continue _fun0005 }
 146:
            var1 = var2.autocomplete;
            if(!var1) { _fun0005_ip = 203; continue _fun0005 }
 155:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 3;
            var1 = var8[var1];
            var9 = var5.bind(var7)(var1);
            var8 = var9.findAutocompleteChoiceNumberValue;
            var5 = var2.name;
            var1 = arg3;
            var1 = var8.bind(var9)(var1, var5, var6);
            if(!(var3 == var1)) { _fun0005_ip = 407; continue _fun0005 }
 203:
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
            if(var5) { _fun0005_ip = 393; continue _fun0005 }
 272:
            var5 = var1.Number;
            var5 = var5.MAX_SAFE_INTEGER;
            if(!(!(var10 > var5))) { _fun0005_ip = 393; continue _fun0005 }
 288:
            var1 = var1.Number;
            var1 = var1.MIN_SAFE_INTEGER;
            if(!(!(var10 < var1))) { _fun0005_ip = 393; continue _fun0005 }
 304:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 5;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var15 = var5.8Y5zsr;
            var5 = var12[var1];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var14 = var5.CyRLmJ;
            var1 = var12[var1];
            var1 = var11.bind(var7)(var1);
            var1 = var1.t;
            var13 = var1.VD3Q+f;
            var18 = undefined;
            var17 = var10;
            var16 = var2;
            var1 = var18[var9](var17, var16, var15, var14, var13, var12);
            _fun0005_ip = 405; continue _fun0005;
 393:
            var5 = {};
            var8 = false;
            var5['success'] = var8;
            var1 = var5;
 405:
            return var1;
 407:
            var1 = {};
            var5 = true;
            var1['success'] = var5;
            return var1;
 418:
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
 469:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.USER;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0006_ip = 40; continue _fun0006 }
 16:
            var2 = {};
            var4 = var1.type;
            var3 = 'userMention';
            var3 = var3 === var4;
            var2['success'] = var3;
            return var2;
 40:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0006_ip = 175; continue _fun0006 }
 84:
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
            if(var4) { _fun0006_ip = 158; continue _fun0006 }
 153:
            var3 = var2.type;
 158:
            var2 = 'userMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
 175:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.CHANNEL;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0007_ip = 38; continue _fun0007 }
 16:
            var2 = {};
            var4 = var1.type;
            var3 = 'channelMention';
            var3 = var3 === var4;
            var2['success'] = var3;
            return var2;
 38:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0007_ip = 159; continue _fun0007 }
 82:
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
            if(var4) { _fun0007_ip = 144; continue _fun0007 }
 139:
            var3 = var2.type;
 144:
            var2 = 'channelMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
 159:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.ROLE;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0008_ip = 39; continue _fun0008 }
 16:
            var2 = {};
            var4 = _closure1_slot6;
            var3 = undefined;
            var3 = var4.bind(var3)(var1);
            var2['success'] = var3;
            return var2;
 39:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isSnowflake;
            var4 = var1.text;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0008_ip = 172; continue _fun0008 }
 83:
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
            if(var4) { _fun0008_ip = 157; continue _fun0008 }
 152:
            var3 = var2.type;
 157:
            var2 = 'roleMention';
            var2 = var2 === var3;
            var1['success'] = var2;
            return var1;
 172:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandOptionType;
    var9 = var8.MENTIONABLE;
    var8 = function(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'text';
            if(!(var2 !== var3)) { _fun0009_ip = 57; continue _fun0009 }
 16:
            var2 = {};
            var4 = var1.type;
            var3 = 'userMention';
            var3 = var3 === var4;
            if(var3) { _fun0009_ip = 50; continue _fun0009 }
 36:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
 50:
            var2['success'] = var3;
            return var2;
 57:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 7;
            var2 = var5[var2];
            var6 = undefined;
            var5 = var3.bind(var6)(var2);
            var3 = var5.isSnowflake;
            var2 = var1.text;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0009_ip = 193; continue _fun0009 }
 101:
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
            if(!var2) { _fun0009_ip = 186; continue _fun0009 }
 156:
            var7 = var5.type;
            var3 = 'userMention';
            var3 = var3 === var7;
            if(var3) { _fun0009_ip = 183; continue _fun0009 }
 174:
            var4 = _closure1_slot6;
            var3 = var4.bind(var6)(var5);
 183:
            var2 = var3;
 186:
            var1['success'] = var2;
            return var1;
 193:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var9] = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationCommandOptionType;
    var8 = var4.ATTACHMENT;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'text';
            if(!(var1 === var2)) { _fun0010_ip = 116; continue _fun0010 }
 16:
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
            if(!var2) { _fun0010_ip = 109; continue _fun0010 }
 94:
            var4 = var4.filename;
            var3 = var3.text;
            var2 = var4 === var3;
 109:
            var1['success'] = var2;
            return var1;
 116:
            var1 = {};
            var2 = false;
            var1['success'] = var2;
            return var1;
        }
    };
    var2[var8] = var4;
    var4 = function isValidRoleMention(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'roleMention';
            var1 = var1 === var2;
            if(var1) { _fun0011_ip = 55; continue _fun0011 }
 19:
            var4 = var3.type;
            var2 = 'textMention';
            var2 = var2 === var4;
            if(!var2) { _fun0011_ip = 52; continue _fun0011 }
 37:
            var4 = var3.text;
            var3 = '@everyone';
            var2 = var3 === var4;
 52:
            var1 = var2;
 55:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandValidators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();