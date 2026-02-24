// app/modules/search/tokens/SearchTokens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
    var1 = function getMonths() {
        var1 = global;
        var3 = var1.Set;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.months;
        var4 = var1.bind(var2)();
        var2 = var4.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function getWeekdays() {
        var1 = global;
        var3 = var1.Set;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.weekdays;
        var4 = var1.bind(var2)();
        var2 = var4.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function getYears() {
        var1 = global;
        var2 = var1.Date;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var8 = var3;
        var2 = new var8[var2](var7);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.getFullYear;
        var2 = var2.bind(var3)();
        var3 = var1.Set;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.range;
        var1 = 1;
        var2 = var2 + var1;
        var1 = 2015;
        var4 = var4.bind(var5)(var1, var2);
        var2 = var4.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function makeDateRange(arg1, arg2) {
        var3 = arg1;
        var1 = new Array(2);
        var1[0] = var3;
        var2 = var3.clone;
        var5 = var2.bind(var3)();
        var4 = var5.add;
        var3 = 1;
        var2 = arg2;
        var2 = var4.bind(var5)(var3, var2);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function makeDate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 0;
case 2:
            var2 = _closure1_slot29;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var1 = var5.bind(var3)(var1);
            var5 = var1.bind(var3)();
            var1 = var5.startOf;
            var5 = var1.bind(var5)(var4);
            var1 = var5.add;
            var1 = var1.bind(var5)(var6, var4);
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function parseDate(arg1, arg2, arg3) {
        var4 = _closure1_slot29;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var2 = arg1;
        var1 = arg2;
        var2 = var5.bind(var3)(var2, var1);
        var1 = var2.local;
        var2 = var1.bind(var2)();
        var1 = arg3;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function getShortcuts() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 13;
        var4 = var8[var3];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.HYiVEQ;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var3 = _closure1_slot30;
            var2 = undefined;
            var1 = 'day';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.cu86KC;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var4 = _closure1_slot30;
            var3 = undefined;
            var2 = 'day';
            var1 = -1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.FvBj/6;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var3 = _closure1_slot30;
            var2 = undefined;
            var1 = 'week';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.20uWCw;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var3 = _closure1_slot30;
            var2 = undefined;
            var1 = 'month';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[var5] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.dXC/hn;
        var3 = var4.bind(var5)(var3);
        var2 = function() {
            var3 = _closure1_slot30;
            var2 = undefined;
            var1 = 'year';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function buildKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = ':';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function buildFilterRegex(arg1) {
        var1 = global;
        var4 = var1.RegExp;
        var3 = _closure1_slot33;
        var2 = undefined;
        var1 = arg1;
        var6 = var3.bind(var2)(var1);
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var5 = 'i';
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot34 = var1;
    var8 = function isValidUserAutocomplete(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.getMatch;
            var1 = 1;
            var3 = var2.bind(var5)(var1);
            var6 = function extractId(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var4 = var2 != var3;
                    var1 = null;
                    if(!var4) { _fun0003_ip = 4; continue _fun0003 }
case 2:
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = var3.id;
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var4 = _closure1_slot20;
            var1 = var4.test;
            var1 = var1.bind(var4)(var3);
            var4 = var3;
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = _closure1_slot15;
            if(!(var3 !== var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var5.getMatch;
            var9 = 4;
            var3 = var1.bind(var5)(var9);
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = _closure1_slot11;
            var7 = var8.findByTag;
            var3 = var5.getMatch;
            var1 = 2;
            var3 = var3.bind(var5)(var1);
            var10 = var5.getMatch;
            var1 = 3;
            var1 = var10.bind(var5)(var1);
            var3 = var7.bind(var8)(var3, var1);
            var1 = undefined;
            var1 = var6.bind(var1)(var3);
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var8 = _closure1_slot11;
            var7 = var8.findByTag;
            var3 = var5.getMatch;
            var3 = var3.bind(var5)(var9);
            var7 = var7.bind(var8)(var3);
            var3 = undefined;
            var1 = var6.bind(var3)(var7);
case 13:
            _fun0002_ip = 14; continue _fun0002;
case 9:
            var3 = _closure1_slot11;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var1 = var6.bind(var2)(var3);
case 14:
            var4 = var1;
case 7:
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var5.setData;
            var2 = 'userId';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
case 15:
            return var1;
        }
    };
    var _closure1_slot35 = var8;
    var1 = function dateValidator(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var1 = var5.getFullMatch;
            var2 = var1.bind(var5)();
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = var2.toLowerCase;
            var12 = var1.bind(var2)();
            var1 = _closure1_slot32;
            var9 = undefined;
            var1 = var1.bind(var9)();
            var6 = var1[var12];
            var2 = null;
            if(!(var2 == var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = _closure1_slot26;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = _closure1_slot27;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = _closure1_slot28;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            var11 = _closure1_slot31;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = _closure1_slot17;
            var1 = 'day';
            var7 = var11.bind(var9)(var12, var3, var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var7 = var3.bind(var9)(var7, var1);
            var1 = 0;
            var1 = var7[var1];
            var3 = 1;
            var3 = var7[var3];
            _fun0004_ip = 25; continue _fun0004;
case 23:
            var10 = 'YYYY';
            var7 = 'year';
            var11 = var11.bind(var9)(var12, var10, var7);
            var10 = _closure1_slot3;
            var7 = 2;
            var11 = var10.bind(var9)(var11, var7);
            var7 = 0;
            var1 = var11[var7];
            var7 = 1;
            var3 = var11[var7];
            _fun0004_ip = 25; continue _fun0004;
case 21:
            var11 = _closure1_slot31;
            var10 = 'dddd';
            var7 = 'day';
            var11 = var11.bind(var9)(var12, var10, var7);
            var10 = _closure1_slot3;
            var7 = 2;
            var11 = var10.bind(var9)(var11, var7);
            var7 = 0;
            var1 = var11[var7];
            var7 = 1;
            var3 = var11[var7];
            _fun0004_ip = 25; continue _fun0004;
case 19:
            var11 = _closure1_slot31;
            var10 = 'MMMM';
            var7 = 'month';
            var11 = var11.bind(var9)(var12, var10, var7);
            var10 = _closure1_slot3;
            var7 = 2;
            var11 = var10.bind(var9)(var11, var7);
            var7 = 0;
            var1 = var11[var7];
            var7 = 1;
            var3 = var11[var7];
            _fun0004_ip = 25; continue _fun0004;
case 17:
            var7 = var6.bind(var9)();
            var6 = _closure1_slot3;
            var4 = 2;
            var7 = var6.bind(var9)(var7, var4);
            var4 = 0;
            var1 = var7[var4];
            var4 = 1;
            var3 = var7[var4];
case 25:
            var4 = var1.isValid;
            var4 = var4.bind(var1)();
            var4 = !var4;
            var9 = var1;
            if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var3.isValid;
            var1 = var1.bind(var3)();
            var4 = !var1;
case 26:
            var1 = !var4;
            if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var7 = 'before';
            var6 = null;
            var4 = var9;
            if(!(var7 !== var8)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var7 = 'after';
            var6 = var9;
            var4 = var3;
            if(!(var7 === var8)) { _fun0004_ip = 30; continue _fun0004 }
case 32:
            var6 = var3;
            var4 = null;
case 30:
            var3 = var5.setData;
            var2 = 'start';
            var2 = var3.bind(var5)(var2, var6);
            var3 = var5.setData;
            var2 = 'end';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
case 28:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var7 = function isValidChannelAutocomplete(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.getMatch;
            var9 = 1;
            var2 = var1.bind(var5)(var9);
            var6 = _closure1_slot20;
            var1 = var6.test;
            var1 = var1.bind(var6)(var2);
            if(var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var1 = var2.startsWith;
            var7 = '"';
            var1 = var1.bind(var2)(var7);
            if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var6 = var2.endsWith;
            var1 = var6.bind(var2)(var7);
case 35:
            var7 = var2;
            if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 12:
            var6 = var2.substring;
            var1 = var2.length;
            var1 = var1 - var9;
            var10 = var6.bind(var2)(var9, var1);
            var9 = var10.replaceAll;
            var6 = /\\(.)/g;
            var1 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var9.bind(var10)(var6, var1);
case 37:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var6 = undefined;
            var9 = var9.bind(var6)(var1);
            var1 = var9.isGuildLikeSearchContext;
            var1 = var1.bind(var9)(var4);
            if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var9 = var4.type;
            var1 = _closure1_slot18;
            var1 = var1.DMS;
            var1 = var9 === var1;
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var8 = _closure1_slot10;
            var8 = var8.hidePersonalInformation;
            var1 = !var8;
case 40:
            if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = function isValidPrivateChannelAutocomplete(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var1 = arg2;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.values;
                    var6 = _closure1_slot4;
                    var1 = var6.getMutablePrivateChannels;
                    var1 = var1.bind(var6)();
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isGroupDM;
                            var1 = var1.bind(var2)();
                            if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.computeChannelName;
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot8;
                            var3 = var4.bind(var5)(var2, var3, var1);
                            var1 = _closure3_slot0;
                            if(!(var1 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
case 44:
                            var1 = var2.isDM;
                            var1 = var1.bind(var2)();
                            if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 20:
                            var1 = false;
                            return var1;
case 47:
                            var1 = var2.getRecipientId;
                            var4 = var1.bind(var2)();
                            var3 = _closure1_slot11;
                            var2 = var3.getUser;
                            var3 = var2.bind(var3)(var4);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 39; continue _fun0007 }
case 48:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getUserTag;
                            var2 = var1.bind(var2)(var3);
                            var1 = _closure3_slot0;
                            var1 = var1 === var2;
                            return var1;
case 39:
                            var1 = false;
                            return var1;
case 46:
                            var1 = true;
                            return var1;
                        }
                    };
                    var6 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 == var6;
                    var3 = undefined;
                    if(var1) { _fun0006_ip = 12; continue _fun0006 }
case 49:
                    var3 = var6.length;
case 12:
                    var1 = 0;
                    var1 = var3 > var1;
                    if(!var1) { _fun0006_ip = 48; continue _fun0006 }
case 50:
                    var4 = var5.setData;
                    var3 = var6.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = 'channelIds';
                    var2 = var4.bind(var5)(var2, var3);
                    var1 = true;
case 48:
                    return var1;
                }
            };
            var1 = var8.bind(var6)(var5, var7);
case 42:
            _fun0005_ip = 51; continue _fun0005;
case 38:
            var4 = var4.guildId;
            var3 = function isValidGuildChannelAutocomplete(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var10 = arg3;
                    var1 = arg2;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot7;
                    var1 = var3.getChannels;
                    var3 = var1.bind(var3)(var10);
                    var1 = _closure1_slot5;
                    var4 = var3[var1];
                    var3 = var4.concat;
                    var6 = _closure1_slot7;
                    var1 = var6.getChannels;
                    var6 = var1.bind(var6)(var10);
                    var1 = _closure1_slot6;
                    var1 = var6[var1];
                    var6 = var3.bind(var4)(var1);
                    var3 = _closure1_slot7;
                    var1 = var3.getTextChannelNameDisambiguations;
                    var1 = var1.bind(var3)(var10);
                    var _closure3_slot1 = var1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.chain;
                    var6 = var1.bind(var4)(var6);
                    var4 = var6.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        return var1;
                    };
                    var7 = var4.bind(var6)(var1);
                    var6 = var7.concat;
                    var1 = null;
                    if(!(var1 == var10)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = new Array(0);
                    _fun0008_ip = 54; continue _fun0008;
case 52:
                    var9 = _closure1_slot4;
                    var8 = var9.getAllThreadsForGuild;
                    var4 = var8.bind(var9)(var10);
case 54:
                    var7 = var6.bind(var7)(var4);
                    var6 = var7.filter;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var1 = var3.id;
                            var5 = var4[var1];
                            var4 = null;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if(var6) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                            var1 = var5.name;
case 55:
                            if(!(var4 == var1)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                            var1 = var3.name;
case 57:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.value;
                    var6 = var4.bind(var6)();
                    var1 = var1 == var6;
                    var3 = undefined;
                    if(var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var3 = var6.length;
case 59:
                    var1 = 0;
                    var1 = var3 > var1;
                    if(!var1) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var4 = var5.setData;
                    var3 = var6.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = 'channelIds';
                    var2 = var4.bind(var5)(var2, var3);
                    var1 = true;
case 61:
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var5, var7, var4);
case 51:
            _fun0005_ip = 63; continue _fun0005;
case 33:
            var4 = var5.setData;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = 'channelIds';
            var2 = var4.bind(var5)(var2, var3);
            var1 = true;
case 63:
            return var1;
        }
    };
    var _closure1_slot37 = var7;
    var1 = function hasValidator(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.ZNR2fi;
            var4 = var4.bind(var9)(var3);
            var3 = 'link';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.20uQR3;
            var4 = var4.bind(var9)(var3);
            var3 = 'embed';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.L4lxyE;
            var4 = var4.bind(var9)(var3);
            var3 = 'poll';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.nrpA5E;
            var4 = var4.bind(var9)(var3);
            var3 = 'snapshot';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.AV/v6i;
            var4 = var4.bind(var9)(var3);
            var3 = 'file';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.XM9XGP;
            var4 = var4.bind(var9)(var3);
            var3 = 'video';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.TNLcpx;
            var4 = var4.bind(var9)(var3);
            var3 = 'image';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.F8Wf0e;
            var4 = var4.bind(var9)(var3);
            var3 = 'sound';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.PJgX2h;
            var3 = var3.bind(var4)(var1);
            var1 = 'sticker';
            var2[var3] = var1;
            var3 = var5.getMatch;
            var1 = 1;
            var1 = var3.bind(var5)(var1);
            var4 = var2[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var2 = '';
            var1 = var2 !== var4;
case 64:
            if(!var1) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var3 = var5.setData;
            var2 = 'has';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
case 66:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function authorTypeValidator(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.tPZo4p;
            var4 = var4.bind(var9)(var3);
            var3 = 'user';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.JL7sRS;
            var4 = var4.bind(var9)(var3);
            var3 = 'bot';
            var2[var4] = var3;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.WjkIKU;
            var3 = var3.bind(var4)(var1);
            var1 = 'webhook';
            var2[var3] = var1;
            var3 = var5.getMatch;
            var1 = 1;
            var1 = var3.bind(var5)(var1);
            var4 = var2[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 60; continue _fun0011 }
case 68:
            var2 = '';
            var1 = var2 !== var4;
case 60:
            if(!var1) { _fun0011_ip = 69; continue _fun0011 }
case 15:
            var3 = var5.setData;
            var2 = 'author_type';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
case 69:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function generateDateAutocompletions() {
        var4 = global;
        var5 = var4.Array;
        var3 = var5.from;
        var1 = _closure1_slot26;
        var6 = undefined;
        var1 = var1.bind(var6)();
        var10 = var3.bind(var5)(var1);
        var1 = new Array(0);
        var9 = 0;
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var8 = var4.Array;
        var7 = var8.from;
        var3 = _closure1_slot27;
        var3 = var3.bind(var6)();
        var10 = var7.bind(var8)(var3);
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var8 = var4.Array;
        var7 = var8.from;
        var3 = _closure1_slot28;
        var3 = var3.bind(var6)();
        var10 = var7.bind(var8)(var3);
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var5 = var4.Object;
        var4 = var5.keys;
        var2 = _closure1_slot32;
        var2 = var2.bind(var6)();
        var10 = var4.bind(var5)(var2);
        var11 = var1;
        var2 = arraySpread(var11, var10, var9);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function getDateAutocompletions(arg1, arg2, arg3) {
        var2 = arg3;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot42;
        var2 = _closure1_slot40;
        var5 = undefined;
        var4 = var2.bind(var5)();
        var3 = arg1;
        var2 = arg2;
        var3 = var6.bind(var5)(var3, var2, var4);
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var9 = var1;
            var8 = var2;
            var3 = copyDataProperties(var9, var8);
            var6 = _closure2_slot0;
            var3 = 'group';
            var1[var3] = var6;
            var5 = var2.text;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var3 = var4.bind(var3)(var6, var2, var5);
            var2 = 'key';
            var1[var2] = var3;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function genericSearch(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = var3.toLocaleLowerCase;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 12;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg3;
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            var5 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = _closure2_slot0;
            var1 = var5.toLocaleLowerCase;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.take;
        var2 = arg2;
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var2 = arg1;
            var1['text'] = var2;
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot42 = var1;
    var6 = function getUserAutocompletions(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var3 = var2.query;
            var5 = var2.searchContext;
            var4 = var2.maxResults;
            var10 = undefined;
            if(!(var4 === var10)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var4 = 10;
case 70:
            var9 = var2.tokens;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var13 = {};
            var2 = var3.trim;
            var6 = var2.bind(var3)();
            var3 = var6.split;
            var2 = '#';
            var2 = var3.bind(var6)(var2);
            var3 = 0;
            var2 = var2[var3];
            var13['query'] = var2;
            var13['limit'] = var4;
            var6 = false;
            var13['request'] = var6;
            var14 = _closure1_slot0;
            var7 = _closure1_slot2;
            var11 = 18;
            var8 = var7[var11];
            var12 = var14.bind(var10)(var8);
            var8 = var12.getBoosterMap;
            var18 = 19;
            var7 = var7[var18];
            var7 = var14.bind(var10)(var7);
            var7 = var7.AutocompleterResultTypes;
            var7 = var7.USER;
            var7 = var8.bind(var12)(var7);
            var13['boosters'] = var7;
            var8 = var5.type;
            var7 = _closure1_slot18;
            var7 = var7.GUILD;
            if(!(var7 !== var8)) { _fun0012_ip = 72; continue _fun0012 }
case 7:
            var7 = _closure1_slot18;
            var7 = var7.GUILD_CHANNEL;
            if(!(var7 !== var8)) { _fun0012_ip = 72; continue _fun0012 }
case 43:
            var7 = _closure1_slot18;
            var7 = var7.THREAD;
            if(!(var7 !== var8)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var7 = _closure1_slot18;
            var7 = var7.CHANNEL;
            if(!(var7 !== var8)) { _fun0012_ip = 74; continue _fun0012 }
case 51:
            var7 = _closure1_slot18;
            var7 = var7.DMS;
            if(!(var7 !== var8)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var7 = new Array(0);
            return var7;
case 75:
            var7 = null;
            if(!(var7 == var9)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
            var9 = new Array(0);
case 77:
            var8 = function getPrivateChannelRecipients(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var _closure3_slot0 = var1;
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var3 = var5.forEach;
                    var1 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.getData;
                            var1 = 'channelIds';
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0014_ip = 58; continue _fun0014 }
case 81:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 58:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var1 = function maybeAddUser(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            var2 = null;
                            var2 = var2 == var1;
                            if(var2) { _fun0015_ip = 56; continue _fun0015 }
case 3:
                            var5 = _closure3_slot0;
                            var4 = var5.has;
                            var3 = var1.id;
                            var2 = var4.bind(var5)(var3);
case 56:
                            if(var2) { _fun0015_ip = 44; continue _fun0015 }
case 82:
                            var4 = _closure3_slot3;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var1);
                            var3 = _closure3_slot0;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var1;
                    var1 = new Array(0);
                    var _closure3_slot3 = var1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var2 = arg1;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                            var2 = var3.isDM;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0016_ip = 85; continue _fun0016 }
case 55:
                            var2 = var3.isGroupDM;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0016_ip = 83; continue _fun0016 }
case 8:
                            var5 = var3.recipients;
                            var4 = var5.forEach;
                            var2 = function(arg1) {
                                var3 = _closure1_slot11;
                                var2 = var3.getUser;
                                var1 = arg1;
                                var3 = var2.bind(var3)(var1);
                                var2 = _closure3_slot2;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var3);
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2);
                            _fun0016_ip = 83; continue _fun0016;
case 85:
                            var2 = var3.getRecipientId;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot11;
                            var1 = var2.getUser;
                            var3 = var1.bind(var2)(var3);
                            var2 = _closure3_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 83:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 79:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var16 = var8.bind(var10)(var9);
            if(!(var7 != var16)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
            var8 = var16.length;
            if(!(!(var8 > var3))) { _fun0012_ip = 88; continue _fun0012 }
case 86:
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = var14[var11];
            var12 = var9.bind(var10)(var8);
            var9 = var12.queryAllUsers;
            var8 = {};
            var21 = var8;
            var20 = var13;
            var15 = copyDataProperties(var21, var20);
            var19 = _closure1_slot0;
            var15 = var14[var11];
            var17 = var19.bind(var10)(var15);
            var15 = var17.getBoosterMap;
            var14 = var14[var18];
            var14 = var19.bind(var10)(var14);
            var14 = var14.AutocompleterResultTypes;
            var14 = var14.USER;
            var15 = var15.bind(var17)(var14);
            var14 = 'boosters';
            var8[var14] = var15;
            var12 = var9.bind(var12)(var8);
            _fun0012_ip = 89; continue _fun0012;
case 88:
            var9 = _closure1_slot11;
            var8 = var9.getCurrentUser;
            var8 = var8.bind(var9)();
            if(!(var7 != var8)) { _fun0012_ip = 90; continue _fun0012 }
case 91:
            var7 = var16.push;
            var7 = var7.bind(var16)(var8);
case 90:
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = var14[var11];
            var9 = var8.bind(var10)(var7);
            var8 = var9.queryUsers;
            var7 = {};
            var21 = var7;
            var20 = var13;
            var15 = copyDataProperties(var21, var20);
            var15 = 'users';
            var7[var15] = var16;
            var17 = _closure1_slot0;
            var15 = var14[var11];
            var16 = var17.bind(var10)(var15);
            var15 = var16.getBoosterMap;
            var14 = var14[var18];
            var14 = var17.bind(var10)(var14);
            var14 = var14.AutocompleterResultTypes;
            var14 = var14.USER;
            var15 = var15.bind(var16)(var14);
            var14 = 'boosters';
            var7[var14] = var15;
            var12 = var8.bind(var9)(var7);
            _fun0012_ip = 89; continue _fun0012;
case 74:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var9 = var8.bind(var10)(var7);
            var8 = var9.queryChannelUsers;
            var7 = {};
            var21 = var7;
            var20 = var13;
            var14 = copyDataProperties(var21, var20);
            var15 = var5.channelId;
            var14 = 'channelId';
            var7[var14] = var15;
            var12 = var8.bind(var9)(var7);
            _fun0012_ip = 89; continue _fun0012;
case 72:
            var7 = var2.length;
            if(!(var3 !== var7)) { _fun0012_ip = 92; continue _fun0012 }
case 93:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var9 = var8.bind(var10)(var7);
            var8 = var9.queryGuildUsers;
            var7 = {};
            var21 = var7;
            var20 = var13;
            var13 = copyDataProperties(var21, var20);
            var14 = var5.guildId;
            var13 = 'guildId';
            var7[var13] = var14;
            var12 = var8.bind(var9)(var7);
case 89:
            var8 = _closure1_slot11;
            var7 = var8.getCurrentUser;
            var9 = var7.bind(var8)();
            _closure2_slot3 = var9;
            var7 = var2.toLowerCase;
            var14 = var7.bind(var2)();
            var13 = var14.replace;
            var8 = /^@/;
            var7 = '';
            var14 = var13.bind(var14)(var8, var7);
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0012_ip = 94; continue _fun0012 }
case 95:
            var2 = var2.length;
            var7 = var2 > var3;
case 94:
            if(!var7) { _fun0012_ip = 96; continue _fun0012 }
case 97:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 13;
            var8 = var16[var2];
            var8 = var15.bind(var10)(var8);
            var13 = var8.intl;
            var8 = var13.string;
            var2 = var16[var2];
            var2 = var15.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.Qf3ptv;
            var8 = var8.bind(var13)(var2);
            var2 = var8.startsWith;
            var2 = var2.bind(var8)(var14);
            if(var2) { _fun0012_ip = 98; continue _fun0012 }
case 99:
            var15 = _closure1_slot15;
            var13 = var15.substr;
            var8 = 1;
            var13 = var13.bind(var15)(var8);
            var8 = var13.startsWith;
            var2 = var8.bind(var13)(var14);
case 98:
            var7 = var2;
case 96:
            _closure2_slot4 = var7;
            var8 = var12.filter;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.record;
                    var4 = _closure1_slot8;
                    var2 = var4.isBlockedOrIgnored;
                    var1 = var3.id;
                    var1 = var2.bind(var4)(var1);
                    if(var1) { _fun0017_ip = 100; continue _fun0017 }
case 101:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0017_ip = 102; continue _fun0017 }
case 34:
                    var4 = var3.id;
                    var6 = _closure2_slot3;
                    var3 = null;
                    var6 = var3 == var6;
                    var3 = undefined;
                    if(var6) { _fun0017_ip = 35; continue _fun0017 }
case 103:
                    var5 = _closure2_slot3;
                    var3 = var5.id;
case 35:
                    var2 = var4 === var3;
case 102:
                    var1 = var2;
case 100:
                    var1 = !var1;
                    return var1;
                }
            };
            var12 = var8.bind(var12)(var2);
            var8 = var12.map;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.record;
                var1 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getUserTag;
                var3 = var3.bind(var4)(var2);
                var1['text'] = var3;
                var1['user'] = var2;
                return var1;
            };
            var2 = var8.bind(var12)(var2);
            if(!var7) { _fun0012_ip = 104; continue _fun0012 }
case 105:
            var8 = var2.unshift;
            var7 = {};
            var12 = _closure1_slot15;
            var7['text'] = var12;
            var7['user'] = var9;
            var7 = var8.bind(var2)(var7);
case 104:
            return var2;
case 92:
            var2 = new Array(0);
            _closure2_slot0 = var2;
            var7 = global;
            var7 = var7.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var22 = var8;
            var7 = new var22[var7](var21);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure2_slot1 = var7;
            var7 = function maybeAddUser(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var2 = null;
                    var2 = var2 == var1;
                    if(var2) { _fun0018_ip = 56; continue _fun0018 }
case 3:
                    var5 = _closure2_slot1;
                    var4 = var5.has;
                    var3 = var1.id;
                    var2 = var4.bind(var5)(var3);
case 56:
                    if(var2) { _fun0018_ip = 10; continue _fun0018 }
case 82:
                    var5 = _closure1_slot8;
                    var4 = var5.isBlockedOrIgnored;
                    var3 = var1.id;
                    var2 = var4.bind(var5)(var3);
case 10:
                    if(var2) { _fun0018_ip = 106; continue _fun0018 }
case 36:
                    var5 = _closure2_slot0;
                    var4 = var5.push;
                    var3 = {};
                    var3['user'] = var1;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 15;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.getUserTag;
                    var6 = var6.bind(var7)(var1);
                    var3['text'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = var3.add;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot2 = var7;
            var9 = _closure1_slot9;
            var8 = var9.getCurrentlySelectedChannelId;
            var7 = var5.guildId;
            var9 = var8.bind(var9)(var7);
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var8 = var8.bind(var10)(var7);
            var7 = var8.getRecentlyTalked;
            var9 = var7.bind(var8)(var9, var4);
            var8 = var9.forEach;
            var7 = function(arg1) {
                var1 = arg1;
                var3 = var1.record;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot13;
            var6 = var7.getRecentMessageAuthorIds;
            var5 = var5.guildId;
            var6 = var6.bind(var7)(var5);
            var5 = var6.forEach;
            var1 = function(arg1) {
                var3 = _closure2_slot2;
                var4 = _closure1_slot11;
                var2 = var4.getUser;
                var1 = arg1;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var1 = var2.slice;
            var1 = var1.bind(var2)(var3, var4);
            return var1;
        }
    };
    var _closure1_slot43 = var6;
    var1 = function streamerModeValidator() {
        var1 = _closure1_slot10;
        var1 = var1.hidePersonalInformation;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function getChannelAutocompletions(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var4 = var1.query;
            var3 = var1.searchContext;
            var6 = var1.maxResults;
            var1 = var4.trim;
            var8 = var1.bind(var4)();
            var1 = var8.startsWith;
            var4 = '"';
            var1 = var1.bind(var8)(var4);
            if(!var1) { _fun0019_ip = 103; continue _fun0019 }
case 107:
            var1 = var8.endsWith;
            var1 = var1.bind(var8)(var4);
            if(var1) { _fun0019_ip = 108; continue _fun0019 }
case 103:
            var1 = var8.startsWith;
            var1 = var1.bind(var8)(var4);
            var7 = var8;
            if(!var1) { _fun0019_ip = 14; continue _fun0019 }
case 109:
            var4 = var8.substring;
            var1 = 1;
            var9 = var4.bind(var8)(var1);
            var5 = var9.replaceAll;
            var4 = /\\(.)/g;
            var1 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var5.bind(var9)(var4, var1);
            _fun0019_ip = 14; continue _fun0019;
case 108:
            var5 = var8.substring;
            var1 = var8.length;
            var4 = 1;
            var1 = var1 - var4;
            var8 = var5.bind(var8)(var4, var1);
            var5 = var8.replaceAll;
            var4 = /\\(.)/g;
            var1 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var5.bind(var8)(var4, var1);
case 14:
            var1 = 0;
            var4 = var7[var1];
            var1 = '#';
            var5 = var7;
            if(!(var1 === var4)) { _fun0019_ip = 110; continue _fun0019 }
case 40:
            var4 = var7.substring;
            var1 = 1;
            var5 = var4.bind(var7)(var1);
case 110:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 16;
            var7 = var7[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var7);
            var7 = var8.isGuildLikeSearchContext;
            var7 = var7.bind(var8)(var3);
            if(var7) { _fun0019_ip = 111; continue _fun0019 }
case 112:
            var8 = var3.type;
            var7 = _closure1_slot18;
            var7 = var7.DMS;
            if(!(var8 === var7)) { _fun0019_ip = 113; continue _fun0019 }
case 114:
            var1 = _closure1_slot10;
            var1 = var1.hidePersonalInformation;
            if(var1) { _fun0019_ip = 113; continue _fun0019 }
case 115:
            var7 = function getPrivateChannelAutocompletions(arg1, arg2, arg3) {
                var1 = arg1;
                var4 = arg2;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var13 = 18;
                var5 = var9[var13];
                var8 = undefined;
                var11 = var6.bind(var8)(var5);
                var10 = var11.queryGroupDMs;
                var5 = {};
                var5['query'] = var1;
                var5['limit'] = var4;
                var7 = true;
                var5['fuzzy'] = var7;
                var7 = _closure1_slot0;
                var3 = var9[var13];
                var15 = var7.bind(var8)(var3);
                var14 = var15.getBoosterMap;
                var3 = 19;
                var12 = var9[var3];
                var12 = var7.bind(var8)(var12);
                var12 = var12.AutocompleterResultTypes;
                var12 = var12.GROUP_DM;
                var12 = var14.bind(var15)(var12);
                var5['boosters'] = var12;
                var11 = var10.bind(var11)(var5);
                var5 = var9[var13];
                var12 = var6.bind(var8)(var5);
                var10 = var12.queryDMChannels;
                var5 = {};
                var5['query'] = var1;
                var5['limit'] = var4;
                var13 = var9[var13];
                var15 = var7.bind(var8)(var13);
                var14 = var15.getBoosterMap;
                var13 = var9[var3];
                var13 = var7.bind(var8)(var13);
                var13 = var13.AutocompleterResultTypes;
                var13 = var13.USER;
                var13 = var14.bind(var15)(var13);
                var5['boosters'] = var13;
                var10 = var10.bind(var12)(var5);
                var5 = 12;
                var5 = var9[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var11.concat;
                var5 = var5.bind(var11)(var10);
                var6 = var6.bind(var8)(var5);
                var5 = var6.sort;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.sortByMatchScore;
                var6 = var5.bind(var6)(var3);
                var5 = var6.map;
                var3 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.record;
                        var2 = var1.comparator;
                        var1 = {};
                        var1['text'] = var2;
                        var1['channel'] = var3;
                        var2 = null;
                        var4 = var2 == var3;
                        var2 = undefined;
                        if(var4) { _fun0020_ip = 116; continue _fun0020 }
case 117:
                        var2 = var3.id;
case 116:
                        var1['key'] = var2;
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.filter;
                var2 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.text;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0021_ip = 84; continue _fun0021 }
case 118:
                        var4 = var2.channel;
                        var1 = var3 != var4;
case 84:
                        if(!var1) { _fun0021_ip = 119; continue _fun0021 }
case 71:
                        var2 = var2.key;
                        var1 = var3 != var2;
case 119:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = var3.value;
                var3 = var2.bind(var3)();
                var1 = var1.length;
                var2 = 0;
                var1 = var3.slice;
                var1 = var1.bind(var3)(var2, var4);
                return var1;
            };
            var1 = false;
            var1 = var7.bind(var4)(var5, var6, var1);
            _fun0019_ip = 120; continue _fun0019;
case 113:
            var1 = new Array(0);
case 120:
            _fun0019_ip = 121; continue _fun0019;
case 111:
            var3 = var3.guildId;
            var2 = function getGuildChannelAutocompletions(arg1, arg2, arg3) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg2;
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 18;
                    var3 = var15[var12];
                    var4 = undefined;
                    var8 = var9.bind(var4)(var3);
                    var6 = var8.queryChannels;
                    var3 = {'query': null, 'type': null, 'guildId': null, 'limit': inf, 'allowEmptyQueries': true, 'allowSnowflake': true, 'includeAllThreads': true};
                    var3['query'] = var5;
                    var10 = _closure1_slot5;
                    var3['type'] = var10;
                    var3['guildId'] = var7;
                    var14 = _closure1_slot0;
                    var10 = var15[var12];
                    var16 = var14.bind(var4)(var10);
                    var13 = var16.getBoosterMap;
                    var11 = 19;
                    var10 = var15[var11];
                    var10 = var14.bind(var4)(var10);
                    var10 = var10.AutocompleterResultTypes;
                    var10 = var10.TEXT_CHANNEL;
                    var10 = var13.bind(var16)(var10);
                    var3['boosters'] = var10;
                    var8 = var6.bind(var8)(var3);
                    var6 = var8.concat;
                    var3 = var15[var12];
                    var10 = var9.bind(var4)(var3);
                    var9 = var10.queryChannels;
                    var3 = {'query': null, 'type': null, 'guildId': null, 'limit': inf, 'allowEmptyQueries': true, 'allowSnowflake': true};
                    var3['query'] = var5;
                    var13 = _closure1_slot6;
                    var3['type'] = var13;
                    var3['guildId'] = var7;
                    var12 = var15[var12];
                    var13 = var14.bind(var4)(var12);
                    var12 = var13.getBoosterMap;
                    var11 = var15[var11];
                    var11 = var14.bind(var4)(var11);
                    var11 = var11.AutocompleterResultTypes;
                    var11 = var11.VOICE_CHANNEL;
                    var11 = var12.bind(var13)(var11);
                    var3['boosters'] = var11;
                    var3 = var9.bind(var10)(var3);
                    var8 = var6.bind(var8)(var3);
                    var6 = var8.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.record;
                        return var1;
                    };
                    var3 = var6.bind(var8)(var3);
                    var6 = var5.length;
                    var5 = 0;
                    if(!(var5 === var6)) { _fun0022_ip = 122; continue _fun0022 }
case 123:
                    var6 = _closure1_slot9;
                    var5 = var6.getChannelId;
                    var5 = var5.bind(var6)(var7);
                    var _closure3_slot0 = var5;
                    var6 = var3.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var6.bind(var3)(var5);
                    var5 = null;
                    if(!(var5 != var6)) { _fun0022_ip = 122; continue _fun0022 }
case 124:
                    var9 = var3.splice;
                    var5 = var3.indexOf;
                    var8 = var5.bind(var3)(var6);
                    var5 = 1;
                    var5 = var9.bind(var3)(var8, var5);
                    var5 = var3.unshift;
                    var5 = var5.bind(var3)(var6);
case 122:
                    var6 = _closure1_slot7;
                    var5 = var6.getTextChannelNameDisambiguations;
                    var5 = var5.bind(var6)(var7);
                    var _closure3_slot1 = var5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var4 = var2.bind(var4)(var3);
                    var3 = var4.take;
                    var2 = arg3;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var4 = _closure3_slot1;
                            var3 = var2.id;
                            var4 = var4[var3];
                            var3 = null;
                            var6 = var3 == var4;
                            var5 = undefined;
                            if(var6) { _fun0023_ip = 82; continue _fun0023 }
case 70:
                            var5 = var4.name;
case 82:
                            if(!(var3 == var5)) { _fun0023_ip = 125; continue _fun0023 }
case 116:
                            var5 = var2.name;
case 125:
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var3 = var4.bind(var3)(var5);
                            var1['text'] = var3;
                            var1['channel'] = var2;
                            var2 = var2.id;
                            var1['key'] = var2;
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var5, var3, var6);
case 121:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function makeSearchTokenConfigs(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var7 = 13;
        var1 = var17[var7];
        var15 = undefined;
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.tPZo4p;
        var1 = var2.bind(var3)(var1);
        var13 = new Array(3);
        var13[0] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.JL7sRS;
        var1 = var2.bind(var3)(var1);
        var13[1] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.WjkIKU;
        var1 = var2.bind(var3)(var1);
        var13[2] = var1;
        var _closure2_slot1 = var13;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.TNLcpx;
        var1 = var2.bind(var3)(var1);
        var10 = new Array(9);
        var10[0] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.XM9XGP;
        var1 = var2.bind(var3)(var1);
        var10[1] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.ZNR2fi;
        var1 = var2.bind(var3)(var1);
        var10[2] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.AV/v6i;
        var1 = var2.bind(var3)(var1);
        var10[3] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.20uQR3;
        var1 = var2.bind(var3)(var1);
        var10[4] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.F8Wf0e;
        var1 = var2.bind(var3)(var1);
        var10[5] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.L4lxyE;
        var1 = var2.bind(var3)(var1);
        var10[6] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.PJgX2h;
        var1 = var2.bind(var3)(var1);
        var10[7] = var1;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var17[var7];
        var1 = var16.bind(var15)(var1);
        var1 = var1.t;
        var1 = var1.nrpA5E;
        var1 = var2.bind(var3)(var1);
        var10[8] = var1;
        var _closure2_slot2 = var10;
        var1 = {};
        var2 = _closure1_slot16;
        var3 = var2.FILTER_FROM;
        var2 = {};
        var18 = _closure1_slot34;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.1TUdFo;
        var5 = var8.bind(var9)(var5);
        var5 = var18.bind(var15)(var5);
        var2['regex'] = var5;
        var5 = _closure1_slot24;
        var5 = var5.FILTER;
        var2['componentType'] = var5;
        var14 = _closure1_slot33;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.1TUdFo;
        var5 = var8.bind(var9)(var5);
        var5 = var14.bind(var15)(var5);
        var2['key'] = var5;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.1TUdFo;
        var5 = var8.bind(var9)(var5);
        var2['plainText'] = var5;
        var9 = _closure1_slot44;
        var2['validator'] = var9;
        var8 = _closure1_slot43;
        var2['getAutocompletions'] = var8;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_USERNAME_FROM;
        var2 = {};
        var5 = _closure1_slot16;
        var11 = var5.FILTER_FROM;
        var5 = new Array(1);
        var5[0] = var11;
        var2['follows'] = var5;
        var5 = _closure1_slot23;
        var2['regex'] = var5;
        var5 = _closure1_slot35;
        var2['validator'] = var5;
        var11 = true;
        var2['mutable'] = var11;
        var12 = _closure1_slot24;
        var12 = var12.ANSWER;
        var2['componentType'] = var12;
        var12 = 'author_id';
        var2['queryKey'] = var12;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_MENTIONS;
        var2 = {};
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var20 = var12.intl;
        var19 = var20.string;
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var12 = var12.t;
        var12 = var12.i96lO+;
        var12 = var19.bind(var20)(var12);
        var12 = var18.bind(var15)(var12);
        var2['regex'] = var12;
        var12 = _closure1_slot24;
        var12 = var12.FILTER;
        var2['componentType'] = var12;
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var20 = var12.intl;
        var19 = var20.string;
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var12 = var12.t;
        var12 = var12.i96lO+;
        var12 = var19.bind(var20)(var12);
        var12 = var14.bind(var15)(var12);
        var2['key'] = var12;
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var20 = var12.intl;
        var19 = var20.string;
        var12 = var17[var7];
        var12 = var16.bind(var15)(var12);
        var12 = var12.t;
        var12 = var12.i96lO+;
        var12 = var19.bind(var20)(var12);
        var2['plainText'] = var12;
        var2['validator'] = var9;
        var2['getAutocompletions'] = var8;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_USERNAME_MENTIONS;
        var2 = {};
        var8 = _closure1_slot16;
        var9 = var8.FILTER_MENTIONS;
        var8 = new Array(1);
        var8[0] = var9;
        var2['follows'] = var8;
        var8 = _closure1_slot23;
        var2['regex'] = var8;
        var2['validator'] = var5;
        var2['mutable'] = var11;
        var5 = _closure1_slot24;
        var5 = var5.ANSWER;
        var2['componentType'] = var5;
        var5 = 'mentions';
        var2['queryKey'] = var5;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_HAS;
        var2 = {};
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.CqCvir;
        var5 = var8.bind(var9)(var5);
        var5 = var18.bind(var15)(var5);
        var2['regex'] = var5;
        var5 = _closure1_slot24;
        var5 = var5.FILTER;
        var2['componentType'] = var5;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.CqCvir;
        var5 = var8.bind(var9)(var5);
        var5 = var14.bind(var15)(var5);
        var2['key'] = var5;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var17[var7];
        var5 = var16.bind(var15)(var5);
        var5 = var5.t;
        var5 = var5.CqCvir;
        var5 = var8.bind(var9)(var5);
        var2['plainText'] = var5;
        var5 = function getAutocompletions(arg1) {
            var1 = arg1;
            var5 = var1.query;
            var4 = var1.maxResults;
            var3 = _closure1_slot42;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4, var2);
            return var1;
        };
        var2['getAutocompletions'] = var5;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_HAS;
        var2 = {};
        var5 = global;
        var21 = var5.RegExp;
        var9 = var10.map;
        var8 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.escape;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var9.bind(var10)(var8);
        var8 = var9.join;
        var12 = '|';
        var19 = var8.bind(var9)(var12);
        var8 = var5.HermesInternal;
        var8 = var8.concat;
        var10 = '(?:\\s*-?(';
        var9 = '))';
        var27 = var8.bind(var10)(var19, var9);
        var8 = var21.prototype;
        var20 = Object.create(var8, {constructor: {value: var21}});
        var8 = 'i';
        var28 = var20;
        var26 = var8;
        var19 = new var28[var21](var27, var26, var25);
        var19 = var19 instanceof Object ? var19 : var20;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_HAS;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var19 = _closure1_slot38;
        var2['validator'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var19 = 'has';
        var2['queryKey'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_FILE_TYPE;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.TMNjFm;
        var19 = var20.bind(var21)(var19);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.TMNjFm;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.TMNjFm;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_FILE_TYPE;
        var2 = {};
        var19 = /(?:\s*([^\s]+))/;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_FILE_TYPE;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var2['mutable'] = var11;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var19 = 'attachment_extensions';
        var2['queryKey'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_FILE_NAME;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.5xtLRC;
        var19 = var20.bind(var21)(var19);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.5xtLRC;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.5xtLRC;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_FILE_NAME;
        var2 = {};
        var19 = /(?:\s*([^\s]+)(?=\s))/;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_FILE_NAME;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var2['mutable'] = var11;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var19 = 'attachment_filename';
        var2['queryKey'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_BEFORE;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.qZ+7BA;
        var19 = var20.bind(var21)(var19);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.qZ+7BA;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.qZ+7BA;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = function getAutocompletions(arg1) {
            var1 = arg1;
            var5 = var1.query;
            var4 = var1.maxResults;
            var3 = _closure1_slot41;
            var1 = _closure1_slot16;
            var2 = var1.FILTER_BEFORE;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4, var2);
            return var1;
        };
        var2['getAutocompletions'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_ON;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.tIxkOo;
        var23 = var20.bind(var21)(var19);
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.h2NzSd;
        var25 = var20.bind(var21)(var19);
        var19 = var5.HermesInternal;
        var21 = var19.concat;
        var28 = '(';
        var24 = ')';
        var27 = var23;
        var26 = var12;
        var19 = var28[var21](var27, var26, var25, var24, var23);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.h2NzSd;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.h2NzSd;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = function getAutocompletions(arg1) {
            var1 = arg1;
            var5 = var1.query;
            var4 = var1.maxResults;
            var3 = _closure1_slot41;
            var1 = _closure1_slot16;
            var2 = var1.FILTER_ON;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4, var2);
            return var1;
        };
        var2['getAutocompletions'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_AFTER;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.KSDx7M;
        var19 = var20.bind(var21)(var19);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.KSDx7M;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.KSDx7M;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = function getAutocompletions(arg1) {
            var1 = arg1;
            var5 = var1.query;
            var4 = var1.maxResults;
            var3 = _closure1_slot41;
            var1 = _closure1_slot16;
            var2 = var1.FILTER_AFTER;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4, var2);
            return var1;
        };
        var2['getAutocompletions'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_BEFORE;
        var2 = {};
        var19 = _closure1_slot21;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_BEFORE;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var2['mutable'] = var11;
        var19 = function validator(arg1) {
            var4 = _closure1_slot36;
            var3 = undefined;
            var2 = arg1;
            var1 = 'before';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['validator'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_ON;
        var2 = {};
        var19 = _closure1_slot21;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_ON;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var2['mutable'] = var11;
        var19 = function validator(arg1) {
            var4 = _closure1_slot36;
            var3 = undefined;
            var2 = arg1;
            var1 = 'on';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['validator'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_AFTER;
        var2 = {};
        var19 = _closure1_slot21;
        var2['regex'] = var19;
        var19 = _closure1_slot16;
        var20 = var19.FILTER_AFTER;
        var19 = new Array(1);
        var19[0] = var20;
        var2['follows'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.ANSWER;
        var2['componentType'] = var19;
        var2['mutable'] = var11;
        var19 = function validator(arg1) {
            var4 = _closure1_slot36;
            var3 = undefined;
            var2 = arg1;
            var1 = 'after';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['validator'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_IN;
        var2 = {};
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.WNpFHa;
        var19 = var20.bind(var21)(var19);
        var19 = var18.bind(var15)(var19);
        var2['regex'] = var19;
        var19 = _closure1_slot24;
        var19 = var19.FILTER;
        var2['componentType'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.WNpFHa;
        var19 = var20.bind(var21)(var19);
        var19 = var14.bind(var15)(var19);
        var2['key'] = var19;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var7];
        var19 = var16.bind(var15)(var19);
        var19 = var19.t;
        var19 = var19.WNpFHa;
        var19 = var20.bind(var21)(var19);
        var2['plainText'] = var19;
        var19 = function validator() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0024_ip = 70; continue _fun0024 }
case 126:
                var4 = _closure1_slot12;
                var3 = var4.getSelectedSearchContext;
                var4 = var3.bind(var4)();
                _fun0024_ip = 117; continue _fun0024;
case 70:
                var4 = _closure2_slot0;
case 117:
                var1 = var1 != var4;
                if(!var1) { _fun0024_ip = 85; continue _fun0024 }
case 58:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.isChannelFilterSupported;
                var1 = var2.bind(var3)(var4);
case 85:
                return var1;
            }
        };
        var2['validator'] = var19;
        var19 = _closure1_slot45;
        var2['getAutocompletions'] = var19;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_IN;
        var2 = {};
        var19 = _closure1_slot14;
        var2['regex'] = var19;
        var2['mutable'] = var11;
        var11 = _closure1_slot16;
        var19 = var11.FILTER_IN;
        var11 = new Array(1);
        var11[0] = var19;
        var2['follows'] = var11;
        var11 = _closure1_slot24;
        var11 = var11.ANSWER;
        var2['componentType'] = var11;
        var11 = function validator(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0025_ip = 70; continue _fun0025 }
case 126:
                var4 = _closure1_slot12;
                var3 = var4.getSelectedSearchContext;
                var5 = var3.bind(var4)();
                _fun0025_ip = 117; continue _fun0025;
case 70:
                var5 = _closure2_slot0;
case 117:
                var1 = var1 != var5;
                if(!var1) { _fun0025_ip = 127; continue _fun0025 }
case 58:
                var4 = _closure1_slot37;
                var3 = undefined;
                var2 = arg1;
                var1 = var4.bind(var3)(var2, var5);
case 127:
                return var1;
            }
        };
        var2['validator'] = var11;
        var11 = 'channel_id';
        var2['queryKey'] = var11;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_PINNED;
        var2 = {};
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var20 = var11.intl;
        var19 = var20.string;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var11 = var11.t;
        var11 = var11.0B74eY;
        var11 = var19.bind(var20)(var11);
        var11 = var18.bind(var15)(var11);
        var2['regex'] = var11;
        var11 = _closure1_slot24;
        var11 = var11.FILTER;
        var2['componentType'] = var11;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var20 = var11.intl;
        var19 = var20.string;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var11 = var11.t;
        var11 = var11.0B74eY;
        var11 = var19.bind(var20)(var11);
        var11 = var14.bind(var15)(var11);
        var2['key'] = var11;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var20 = var11.intl;
        var19 = var20.string;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var11 = var11.t;
        var11 = var11.0B74eY;
        var11 = var19.bind(var20)(var11);
        var2['plainText'] = var11;
        var11 = function getAutocompletions() {
            var2 = {};
            var1 = 'true';
            var2['text'] = var1;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = {};
            var3 = 'false';
            var2['text'] = var3;
            var1[1] = var2;
            return var1;
        };
        var2['getAutocompletions'] = var11;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_PINNED;
        var2 = {};
        var11 = _closure1_slot22;
        var2['regex'] = var11;
        var11 = _closure1_slot24;
        var11 = var11.ANSWER;
        var2['componentType'] = var11;
        var11 = _closure1_slot16;
        var19 = var11.FILTER_PINNED;
        var11 = new Array(1);
        var11[0] = var19;
        var2['follows'] = var11;
        var11 = 'pinned';
        var2['queryKey'] = var11;
        var11 = function validator(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var2 = var5.getMatch;
                var1 = 1;
                var2 = var2.bind(var5)(var1);
                var1 = 'true';
                if(!(var1 !== var2)) { _fun0026_ip = 128; continue _fun0026 }
case 129:
                var1 = 'false';
                var1 = var1 === var2;
                if(!var1) { _fun0026_ip = 130; continue _fun0026 }
case 117:
                var4 = var5.setData;
                var3 = 'pinned';
                var2 = false;
                var2 = var4.bind(var5)(var3, var2);
                var1 = true;
case 130:
                _fun0026_ip = 102; continue _fun0026;
case 128:
                var4 = var5.setData;
                var3 = 'pinned';
                var2 = true;
                var3 = var4.bind(var5)(var3, var2);
                var1 = true;
case 102:
                return var1;
            }
        };
        var2['validator'] = var11;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.FILTER_AUTHOR_TYPE;
        var2 = {};
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var20 = var11.intl;
        var19 = var20.string;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var11 = var11.t;
        var11 = var11.us8IQi;
        var11 = var19.bind(var20)(var11);
        var11 = var18.bind(var15)(var11);
        var2['regex'] = var11;
        var11 = _closure1_slot24;
        var11 = var11.FILTER;
        var2['componentType'] = var11;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var19 = var11.intl;
        var18 = var19.string;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var11 = var11.t;
        var11 = var11.us8IQi;
        var11 = var18.bind(var19)(var11);
        var11 = var14.bind(var15)(var11);
        var2['key'] = var11;
        var11 = var17[var7];
        var11 = var16.bind(var15)(var11);
        var14 = var11.intl;
        var11 = var14.string;
        var7 = var17[var7];
        var7 = var16.bind(var15)(var7);
        var7 = var7.t;
        var7 = var7.us8IQi;
        var7 = var11.bind(var14)(var7);
        var2['plainText'] = var7;
        var7 = function getAutocompletions(arg1) {
            var1 = arg1;
            var5 = var1.query;
            var4 = var1.maxResults;
            var3 = _closure1_slot42;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4, var2);
            return var1;
        };
        var2['getAutocompletions'] = var7;
        var1[var3] = var2;
        var2 = _closure1_slot16;
        var3 = var2.ANSWER_AUTHOR_TYPE;
        var2 = {};
        var7 = var5.RegExp;
        var11 = var13.map;
        var6 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.escape;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var11 = var11.bind(var13)(var6);
        var6 = var11.join;
        var6 = var6.bind(var11)(var12);
        var5 = var5.HermesInternal;
        var5 = var5.concat;
        var27 = var5.bind(var10)(var6, var9);
        var6 = var7.prototype;
        var6 = Object.create(var6, {constructor: {value: var7}});
        var28 = var6;
        var26 = var8;
        var5 = new var28[var7](var27, var26, var25);
        var5 = var5 instanceof Object ? var5 : var6;
        var2['regex'] = var5;
        var5 = _closure1_slot16;
        var6 = var5.FILTER_AUTHOR_TYPE;
        var5 = new Array(1);
        var5[0] = var6;
        var2['follows'] = var5;
        var5 = _closure1_slot39;
        var2['validator'] = var5;
        var4 = _closure1_slot24;
        var4 = var4.ANSWER;
        var2['componentType'] = var4;
        var4 = 'author_type';
        var2['queryKey'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot46 = var1;
    var4 = function isSearchFilterTokenType(arg1) {
        var3 = _closure1_slot19;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot47 = var4;
    var5 = global;
    var14 = var5.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var12[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var13 = var12[var9];
    var13 = var11.bind(var1)(var13);
    var14 = var13.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot5 = var14;
    var13 = var13.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = var13;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 3;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 4;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 5;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 6;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 8;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 9;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.ANSWER_IN_REGEX;
    var _closure1_slot14 = var9;
    var9 = 10;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var10 = var9.ME;
    var _closure1_slot15 = var10;
    var10 = var9.SearchTokenTypes;
    var _closure1_slot16 = var10;
    var10 = var9.SEARCH_DATE_FORMAT;
    var _closure1_slot17 = var10;
    var10 = var9.SearchTypes;
    var _closure1_slot18 = var10;
    var10 = var9.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot19 = var10;
    var9 = var9.ID_REGEX;
    var _closure1_slot20 = var9;
    var14 = var5.RegExp;
    var9 = var14.prototype;
    var10 = Object.create(var9, {constructor: {value: var14}});
    var17 = '(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))';
    var13 = 'i';
    var18 = var10;
    var16 = var13;
    var9 = new var18[var14](var17, var16, var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot21 = var9;
    var10 = var5.RegExp;
    var5 = var10.prototype;
    var9 = Object.create(var5, {constructor: {value: var10}});
    var17 = '\\s*(true|false)';
    var18 = var9;
    var5 = new var18[var10](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot22 = var5;
    var5 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    var _closure1_slot23 = var5;
    var5 = {};
    var9 = 'FILTER';
    var5['FILTER'] = var9;
    var9 = 'ANSWER';
    var5['ANSWER'] = var9;
    var _closure1_slot24 = var5;
    var9 = {};
    var _closure1_slot25 = var9;
    var10 = 21;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/search/tokens/SearchTokens.tsx';
    var10 = var11.bind(var12)(var10);
    var3['default'] = var9;
    var3['isValidUserAutocomplete'] = var8;
    var3['isValidChannelAutocomplete'] = var7;
    var7 = function getRandomDateShortcut() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 12;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.sample;
        var1 = _closure1_slot40;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getRandomDateShortcut'] = var7;
    var3['getUserAutocompletions'] = var6;
    var3['ComponentTypes'] = var5;
    var5 = function buildCrossDMSearchTokensConfig() {
        var3 = _closure1_slot46;
        var2 = {};
        var1 = _closure1_slot18;
        var1 = var1.DMS;
        var2['type'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['buildCrossDMSearchTokensConfig'] = var5;
    var5 = function rebuildSearchTokenConfigs() {
        var1 = global;
        var5 = var1.Object;
        var4 = var5.assign;
        var3 = _closure1_slot25;
        var2 = _closure1_slot46;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['rebuildSearchTokenConfigs'] = var5;
    var3['isSearchFilterTokenType'] = var4;
    var4 = function getSearchTokenFilterAutocompletions(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[1];
            var8 = undefined;
            if(!(var9 === var8)) { _fun0027_ip = 131; continue _fun0027 }
case 3:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot25;
            var1 = var2.bind(var3)(var1);
            var9 = var1.length;
case 131:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure1_slot25;
            var6 = var3.bind(var4)(var2);
            var2 = var6.length;
            var5 = 0;
            var2 = var5 < var2;
            var4 = 17;
            var3 = null;
            if(!var2) { _fun0027_ip = 132; continue _fun0027 }
case 47:
            var13 = var6[var5];
            var2 = var1.length;
            if(!(!(var2 >= var9))) { _fun0027_ip = 132; continue _fun0027 }
case 133:
            var2 = _closure1_slot25;
            var2 = var2[var13];
            var12 = var2.key;
            var2 = _closure1_slot47;
            var2 = var2.bind(var8)(var13);
            if(!var2) { _fun0027_ip = 24; continue _fun0027 }
case 134:
            var2 = var3 != var12;
case 24:
            if(!var2) { _fun0027_ip = 9; continue _fun0027 }
case 135:
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var4];
            var14 = var14.bind(var8)(var11);
            var11 = var10.toLowerCase;
            var11 = var11.bind(var10)();
            var2 = var14.bind(var8)(var11, var12);
case 9:
            if(!var2) { _fun0027_ip = 41; continue _fun0027 }
case 136:
            var11 = var1.push;
            var2 = {};
            var2['token'] = var13;
            var2['text'] = var12;
            var2 = var11.bind(var1)(var2);
case 41:
            var5 = var5 + 1;
            var2 = var6.length;
            if(var5 < var2) { _fun0027_ip = 47; continue _fun0027 }
case 132:
            return var1;
        }
    };
    var3['getSearchTokenFilterAutocompletions'] = var4;
    var2 = function isMeAutcompleteAnswer(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0028_ip = 137; continue _fun0028 }
case 118:
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var3 = var4.replace;
            var2 = /^@/;
            var1 = '';
            var4 = var3.bind(var4)(var2, var1);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Qf3ptv;
            var3 = var3.bind(var5)(var1);
            var1 = var3.startsWith;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0028_ip = 138; continue _fun0028 }
case 139:
            var5 = _closure1_slot15;
            var3 = var5.substring;
            var2 = 1;
            var3 = var3.bind(var5)(var2);
            var2 = var3.startsWith;
            var1 = var2.bind(var3)(var4);
case 138:
            return var1;
case 137:
            var1 = false;
            return var1;
        }
    };
    var3['isMeAutcompleteAnswer'] = var2;
    return var1;
})();