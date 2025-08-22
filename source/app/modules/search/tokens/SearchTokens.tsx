// app/modules/search/tokens/SearchTokens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var1 = function getMonths() {
        var1 = global;
        var3 = var1.Set;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
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
    var _closure1_slot25 = var1;
    var1 = function getWeekdays() {
        var1 = global;
        var3 = var1.Set;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
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
    var _closure1_slot26 = var1;
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
        var1 = 11;
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
    var _closure1_slot27 = var1;
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
    var _closure1_slot28 = var1;
    var1 = function makeDate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var6 = 0;
 14:
            var2 = _closure1_slot28;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
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
    var _closure1_slot29 = var1;
    var1 = function parseDate(arg1, arg2, arg3) {
        var4 = _closure1_slot28;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
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
    var _closure1_slot30 = var1;
    var1 = function getShortcuts() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 12;
        var4 = var8[var3];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.HYiVER;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var3 = _closure1_slot29;
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
            var4 = _closure1_slot29;
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
        var4 = var4.FvBj//;
        var5 = var5.bind(var9)(var4);
        var4 = function() {
            var3 = _closure1_slot29;
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
            var3 = _closure1_slot29;
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
        var3 = var3.dXC/ho;
        var3 = var4.bind(var5)(var3);
        var2 = function() {
            var3 = _closure1_slot29;
            var2 = undefined;
            var1 = 'year';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot31 = var1;
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
    var _closure1_slot32 = var1;
    var1 = function buildFilterRegex(arg1) {
        var1 = global;
        var4 = var1.RegExp;
        var3 = _closure1_slot32;
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
    var _closure1_slot33 = var1;
    var1 = function userValidator(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = var5.getMatch;
            var1 = 1;
            var3 = var2.bind(var5)(var1);
            var6 = function extractId(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var2 = null;
                    var4 = var2 != var3;
                    var1 = null;
                    if(!var4) { _fun0003_ip = 31; continue _fun0003 }
 14:
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 28; continue _fun0003 }
 23:
                    var2 = var3.id;
 28:
                    var1 = var2;
 31:
                    return var1;
                }
            };
            var4 = _closure1_slot19;
            var1 = var4.test;
            var1 = var1.bind(var4)(var3);
            var4 = var3;
            if(var1) { _fun0002_ip = 189; continue _fun0002 }
 50:
            var1 = _closure1_slot14;
            if(!(var3 !== var1)) { _fun0002_ip = 166; continue _fun0002 }
 58:
            var1 = var5.getMatch;
            var9 = 4;
            var3 = var1.bind(var5)(var9);
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 131; continue _fun0002 }
 78:
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
            _fun0002_ip = 164; continue _fun0002;
 131:
            var8 = _closure1_slot11;
            var7 = var8.findByTag;
            var3 = var5.getMatch;
            var3 = var3.bind(var5)(var9);
            var7 = var7.bind(var8)(var3);
            var3 = undefined;
            var1 = var6.bind(var3)(var7);
 164:
            _fun0002_ip = 186; continue _fun0002;
 166:
            var3 = _closure1_slot11;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var1 = var6.bind(var2)(var3);
 186:
            var4 = var1;
 189:
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 216; continue _fun0002 }
 198:
            var3 = var5.setData;
            var2 = 'userId';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
 216:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function dateValidator(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var1 = var5.getFullMatch;
            var2 = var1.bind(var5)();
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = var2.toLowerCase;
            var12 = var1.bind(var2)();
            var1 = _closure1_slot31;
            var9 = undefined;
            var1 = var1.bind(var9)();
            var6 = var1[var12];
            var2 = null;
            if(!(var2 == var6)) { _fun0004_ip = 324; continue _fun0004 }
 62:
            var1 = _closure1_slot25;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 275; continue _fun0004 }
 86:
            var1 = _closure1_slot26;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 226; continue _fun0004 }
 107:
            var1 = _closure1_slot27;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            var11 = _closure1_slot30;
            if(var1) { _fun0004_ip = 178; continue _fun0004 }
 132:
            var3 = _closure1_slot16;
            var1 = 'day';
            var7 = var11.bind(var9)(var12, var3, var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var7 = var3.bind(var9)(var7, var1);
            var1 = 0;
            var1 = var7[var1];
            var3 = 1;
            var3 = var7[var3];
            _fun0004_ip = 354; continue _fun0004;
 178:
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
            _fun0004_ip = 354; continue _fun0004;
 226:
            var11 = _closure1_slot30;
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
            _fun0004_ip = 354; continue _fun0004;
 275:
            var11 = _closure1_slot30;
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
            _fun0004_ip = 354; continue _fun0004;
 324:
            var7 = var6.bind(var9)();
            var6 = _closure1_slot3;
            var4 = 2;
            var7 = var6.bind(var9)(var7, var4);
            var4 = 0;
            var1 = var7[var4];
            var4 = 1;
            var3 = var7[var4];
 354:
            var4 = var1.isValid;
            var4 = var4.bind(var1)();
            var4 = !var4;
            var9 = var1;
            if(var4) { _fun0004_ip = 386; continue _fun0004 }
 373:
            var1 = var3.isValid;
            var1 = var1.bind(var3)();
            var4 = !var1;
 386:
            var1 = !var4;
            if(var4) { _fun0004_ip = 458; continue _fun0004 }
 392:
            var7 = 'before';
            var6 = null;
            var4 = var9;
            if(!(var7 !== var8)) { _fun0004_ip = 424; continue _fun0004 }
 405:
            var7 = 'after';
            var6 = var9;
            var4 = var3;
            if(!(var7 === var8)) { _fun0004_ip = 424; continue _fun0004 }
 419:
            var6 = var3;
            var4 = null;
 424:
            var3 = var5.setData;
            var2 = 'start';
            var2 = var3.bind(var5)(var2, var6);
            var3 = var5.setData;
            var2 = 'end';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
 458:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function channelValidator(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var2 = var5.getMatch;
            var7 = 1;
            var6 = var2.bind(var5)(var7);
            var2 = var6.startsWith;
            var4 = '"';
            var2 = var2.bind(var6)(var4);
            if(!var2) { _fun0005_ip = 48; continue _fun0005 }
 37:
            var3 = var6.endsWith;
            var2 = var3.bind(var6)(var4);
 48:
            var4 = var6;
            if(!var2) { _fun0005_ip = 106; continue _fun0005 }
 54:
            var3 = var6.substring;
            var2 = var6.length;
            var2 = var2 - var7;
            var7 = var3.bind(var6)(var7, var2);
            var6 = var7.replaceAll;
            var3 = /\\(.)/g;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var4 = var6.bind(var7)(var3, var2);
 106:
            var3 = _closure1_slot12;
            var2 = var3.getSelectedSearchContext;
            var2 = var2.bind(var3)();
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 315; continue _fun0005 }
 132:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var6 = var6[var3];
            var3 = undefined;
            var8 = var8.bind(var3)(var6);
            var6 = var8.isGuildLikeSearchContext;
            var6 = var6.bind(var8)(var2);
            if(var6) { _fun0005_ip = 296; continue _fun0005 }
 171:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var12 = var9.bind(var3)(var6);
            var8 = var12.getIsSearchDesktopXDMExperimentEnabled;
            var6 = {};
            var11 = 'channelValidator';
            var6['location'] = var11;
            var6 = var8.bind(var12)(var6);
            var8 = 18;
            var8 = var10[var8];
            var10 = var9.bind(var3)(var8);
            var9 = var10.getIsSearchMobileXDMChannelFiltersEnabled;
            var8 = {};
            var8['location'] = var11;
            var8 = var9.bind(var10)(var8);
            var9 = var2.type;
            var7 = _closure1_slot17;
            var7 = var7.DMS;
            var7 = var9 !== var7;
            if(var7) { _fun0005_ip = 277; continue _fun0005 }
 265:
            var6 = !var6;
            if(!var6) { _fun0005_ip = 274; continue _fun0005 }
 271:
            var6 = !var8;
 274:
            var7 = var6;
 277:
            var6 = !var7;
            if(var7) { _fun0005_ip = 294; continue _fun0005 }
 283:
            var7 = function privateChannelValidator(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var2 = arg2;
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.values;
                    var6 = _closure1_slot4;
                    var2 = var6.getMutablePrivateChannels;
                    var2 = var2.bind(var6)();
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var1 = var5[var1];
                            var5 = undefined;
                            var7 = var3.bind(var5)(var1);
                            var6 = var7.computeChannelName;
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot8;
                            var6 = var6.bind(var7)(var4, var3, var1);
                            var3 = _closure3_slot0;
                            if(!(var3 !== var6)) { _fun0007_ip = 151; continue _fun0007 }
 60:
                            var3 = var4.isDM;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0007_ip = 75; continue _fun0007 }
 73:
                            return var5;
 75:
                            var3 = var4.getRecipientId;
                            var6 = var3.bind(var4)();
                            var4 = _closure1_slot11;
                            var3 = var4.getUser;
                            var4 = var3.bind(var4)(var6);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0007_ip = 147; continue _fun0007 }
 106:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 15;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.getUserTag;
                            var2 = var2.bind(var3)(var4);
                            var1 = _closure3_slot0;
                            var1 = var1 === var2;
                            return var1;
 147:
                            var1 = false;
                            return var1;
 151:
                            var1 = true;
                            return var1;
                        }
                    };
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var4;
                    var2 = undefined;
                    if(var1) { _fun0006_ip = 78; continue _fun0006 }
 73:
                    var2 = var4.length;
 78:
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0006_ip = 105; continue _fun0006 }
 87:
                    var3 = var5.setData;
                    var2 = 'channels';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = true;
 105:
                    return var1;
                }
            };
            var6 = var7.bind(var3)(var5, var4);
 294:
            return var6;
 296:
            var2 = var2.guildId;
            var1 = function guildChannelValidator(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = arg1;
                    var9 = arg3;
                    var2 = arg2;
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot7;
                    var2 = var3.getChannels;
                    var3 = var2.bind(var3)(var9);
                    var2 = _closure1_slot5;
                    var4 = var3[var2];
                    var3 = var4.concat;
                    var6 = _closure1_slot7;
                    var2 = var6.getChannels;
                    var6 = var2.bind(var6)(var9);
                    var2 = _closure1_slot6;
                    var2 = var6[var2];
                    var8 = var3.bind(var4)(var2);
                    var3 = _closure1_slot7;
                    var2 = var3.getTextChannelNameDisambiguations;
                    var2 = var2.bind(var3)(var9);
                    var _closure3_slot1 = var2;
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 13;
                    var3 = var10[var2];
                    var2 = undefined;
                    var11 = var6.bind(var2)(var3);
                    var4 = var11.getCurrentConfig;
                    var3 = {};
                    var12 = 'guildChannelValidator';
                    var3['location'] = var12;
                    var3 = var4.bind(var11)(var3);
                    var3 = var3.enabled;
                    var4 = 11;
                    var4 = var10[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.chain;
                    var8 = var4.bind(var6)(var8);
                    var6 = var8.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        return var1;
                    };
                    var6 = var6.bind(var8)(var4);
                    var4 = var6.concat;
                    if(!var3) { _fun0008_ip = 195; continue _fun0008 }
 189:
                    var3 = null;
                    if(!(var3 == var9)) { _fun0008_ip = 201; continue _fun0008 }
 195:
                    var3 = new Array(0);
                    _fun0008_ip = 216; continue _fun0008;
 201:
                    var8 = _closure1_slot4;
                    var7 = var8.getAllThreadsForGuild;
                    var3 = var7.bind(var8)(var9);
 216:
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = arg1;
                            var2 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var1 = var3.id;
                            var5 = var4[var1];
                            var4 = null;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if(var6) { _fun0009_ip = 39; continue _fun0009 }
 34:
                            var1 = var5.name;
 39:
                            if(!(var4 == var1)) { _fun0009_ip = 48; continue _fun0009 }
 43:
                            var1 = var3.name;
 48:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.value;
                    var4 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 == var4;
                    var2 = undefined;
                    if(var1) { _fun0008_ip = 261; continue _fun0008 }
 256:
                    var2 = var4.length;
 261:
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0008_ip = 288; continue _fun0008 }
 270:
                    var3 = var5.setData;
                    var2 = 'channels';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = true;
 288:
                    return var1;
                }
            };
            var1 = var1.bind(var3)(var5, var4, var2);
            return var1;
 315:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function hasValidator(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.ZNR2fn;
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
            var3 = var3.20uQR0;
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
            var3 = var3.L4lxyM;
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
            var3 = var3.nrpA5O;
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
            var3 = var3.AV/v6u;
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
            var3 = var3.XM9XGB;
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
            var3 = var3.TNLcp6;
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
            var3 = var3.F8Wf0d;
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
            var1 = var1.PJgX2t;
            var3 = var3.bind(var4)(var1);
            var1 = 'sticker';
            var2[var3] = var1;
            var3 = var5.getMatch;
            var1 = 1;
            var1 = var3.bind(var5)(var1);
            var4 = var2[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0010_ip = 533; continue _fun0010 }
 525:
            var2 = '';
            var1 = var2 !== var4;
 533:
            if(!var1) { _fun0010_ip = 554; continue _fun0010 }
 536:
            var3 = var5.setData;
            var2 = 'has';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
 554:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function authorTypeValidator(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var9 = var3.intl;
            var4 = var9.string;
            var3 = var8[var1];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.tPZo4u;
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
            var3 = var3.JL7sRU;
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
            var1 = var1.WjkIKS;
            var3 = var3.bind(var4)(var1);
            var1 = 'webhook';
            var2[var3] = var1;
            var3 = var5.getMatch;
            var1 = 1;
            var1 = var3.bind(var5)(var1);
            var4 = var2[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 215; continue _fun0011 }
 207:
            var2 = '';
            var1 = var2 !== var4;
 215:
            if(!var1) { _fun0011_ip = 236; continue _fun0011 }
 218:
            var3 = var5.setData;
            var2 = 'author_type';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
 236:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function generateDateAutocompletions() {
        var4 = global;
        var5 = var4.Array;
        var3 = var5.from;
        var1 = _closure1_slot25;
        var6 = undefined;
        var1 = var1.bind(var6)();
        var10 = var3.bind(var5)(var1);
        var1 = new Array(0);
        var9 = 0;
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var8 = var4.Array;
        var7 = var8.from;
        var3 = _closure1_slot26;
        var3 = var3.bind(var6)();
        var10 = var7.bind(var8)(var3);
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var8 = var4.Array;
        var7 = var8.from;
        var3 = _closure1_slot27;
        var3 = var3.bind(var6)();
        var10 = var7.bind(var8)(var3);
        var11 = var1;
        var9 = arraySpread(var11, var10, var9);
        var5 = var4.Object;
        var4 = var5.keys;
        var2 = _closure1_slot31;
        var2 = var2.bind(var6)();
        var10 = var4.bind(var5)(var2);
        var11 = var1;
        var2 = arraySpread(var11, var10, var9);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function getDateAutocompletions(arg1, arg2, arg3) {
        var2 = arg3;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot41;
        var2 = _closure1_slot39;
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
    var _closure1_slot40 = var1;
    var1 = function genericSearch(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = var3.toLocaleLowerCase;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 11;
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
            var1 = 19;
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
    var _closure1_slot41 = var1;
    var6 = function searchUsers(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arg1;
            var5 = var3.query;
            var9 = var3.searchContext;
            var2 = var3.maxResults;
            var11 = undefined;
            if(!(var2 === var11)) { _fun0012_ip = 31; continue _fun0012 }
 28:
            var2 = 10;
 31:
            var7 = var3.tokens;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var11;
            var10 = {};
            var4 = var5.split;
            var3 = '#';
            var3 = var4.bind(var5)(var3);
            var6 = 0;
            var3 = var3[var6];
            var10['query'] = var3;
            var10['limit'] = var2;
            var2 = false;
            var10['request'] = var2;
            var4 = var9.type;
            var2 = _closure1_slot17;
            var2 = var2.GUILD;
            if(!(var2 !== var4)) { _fun0012_ip = 513; continue _fun0012 }
 107:
            var2 = _closure1_slot17;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var4)) { _fun0012_ip = 513; continue _fun0012 }
 124:
            var2 = _closure1_slot17;
            var2 = var2.THREAD;
            if(!(var2 !== var4)) { _fun0012_ip = 513; continue _fun0012 }
 141:
            var2 = _closure1_slot17;
            var2 = var2.CHANNEL;
            if(!(var2 !== var4)) { _fun0012_ip = 454; continue _fun0012 }
 158:
            var2 = _closure1_slot17;
            var2 = var2.DMS;
            if(!(var2 !== var4)) { _fun0012_ip = 178; continue _fun0012 }
 172:
            var2 = new Array(0);
            return var2;
 178:
            var2 = null;
            if(!(var2 == var7)) { _fun0012_ip = 188; continue _fun0012 }
 184:
            var7 = new Array(0);
 188:
            var4 = function getPrivateChannelRecipients(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0013_ip = 100; continue _fun0013 }
 11:
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
 0:
                            var3 = arg1;
                            var2 = var3.getData;
                            var1 = 'channels';
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0014_ip = 41; continue _fun0014 }
 24:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
 41:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var1 = function maybeAddUser(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var1 = arg1;
                            var2 = null;
                            var2 = var2 == var1;
                            if(var2) { _fun0015_ip = 34; continue _fun0015 }
 12:
                            var5 = _closure3_slot0;
                            var4 = var5.has;
                            var3 = var1.id;
                            var2 = var4.bind(var5)(var3);
 34:
                            if(var2) { _fun0015_ip = 73; continue _fun0015 }
 37:
                            var4 = _closure3_slot3;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var1);
                            var3 = _closure3_slot0;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
 73:
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
 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var2 = arg1;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0016_ip = 116; continue _fun0016 }
 26:
                            var2 = var3.isDM;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0016_ip = 77; continue _fun0016 }
 39:
                            var2 = var3.isGroupDM;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0016_ip = 116; continue _fun0016 }
 52:
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
                            _fun0016_ip = 116; continue _fun0016;
 77:
                            var2 = var3.getRecipientId;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot11;
                            var1 = var2.getUser;
                            var3 = var1.bind(var2)(var3);
                            var2 = _closure3_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 116:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
 100:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var14 = var4.bind(var11)(var7);
            if(!(var2 != var14)) { _fun0012_ip = 211; continue _fun0012 }
 202:
            var4 = var14.length;
            if(!(!(var4 > var6))) { _fun0012_ip = 316; continue _fun0012 }
 211:
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 20;
            var4 = var17[var12];
            var8 = var7.bind(var11)(var4);
            var7 = var8.queryAllUsers;
            var4 = {};
            var19 = var4;
            var18 = var10;
            var13 = copyDataProperties(var19, var18);
            var16 = _closure1_slot0;
            var12 = var17[var12];
            var15 = var16.bind(var11)(var12);
            var13 = var15.getBoosterMap;
            var12 = 21;
            var12 = var17[var12];
            var12 = var16.bind(var11)(var12);
            var12 = var12.AutocompleterResultTypes;
            var12 = var12.USER;
            var13 = var13.bind(var15)(var12);
            var12 = 'boosters';
            var4[var12] = var13;
            var7 = var7.bind(var8)(var4);
            _fun0012_ip = 570; continue _fun0012;
 316:
            var8 = _closure1_slot11;
            var4 = var8.getCurrentUser;
            var4 = var4.bind(var8)();
            if(!(var2 != var4)) { _fun0012_ip = 343; continue _fun0012 }
 333:
            var2 = var14.push;
            var2 = var2.bind(var14)(var4);
 343:
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 20;
            var2 = var16[var12];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryUsers;
            var2 = {};
            var19 = var2;
            var18 = var10;
            var13 = copyDataProperties(var19, var18);
            var13 = 'users';
            var2[var13] = var14;
            var15 = _closure1_slot0;
            var12 = var16[var12];
            var14 = var15.bind(var11)(var12);
            var13 = var14.getBoosterMap;
            var12 = 21;
            var12 = var16[var12];
            var12 = var15.bind(var11)(var12);
            var12 = var12.AutocompleterResultTypes;
            var12 = var12.USER;
            var13 = var13.bind(var14)(var12);
            var12 = 'boosters';
            var2[var12] = var13;
            var7 = var4.bind(var8)(var2);
            _fun0012_ip = 570; continue _fun0012;
 454:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryChannelUsers;
            var2 = {};
            var19 = var2;
            var18 = var10;
            var12 = copyDataProperties(var19, var18);
            var13 = var9.channelId;
            var12 = 'channelId';
            var2[var12] = var13;
            var7 = var4.bind(var8)(var2);
            _fun0012_ip = 570; continue _fun0012;
 513:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryGuildUsers;
            var2 = {};
            var19 = var2;
            var18 = var10;
            var10 = copyDataProperties(var19, var18);
            var10 = var9.guildId;
            var9 = 'guildId';
            var2[var9] = var10;
            var7 = var4.bind(var8)(var2);
 570:
            var4 = _closure1_slot11;
            var2 = var4.getCurrentUser;
            var4 = var2.bind(var4)();
            _closure2_slot0 = var4;
            var2 = var3.toLowerCase;
            var10 = var2.bind(var3)();
            var9 = var10.replace;
            var8 = /^@/;
            var2 = '';
            var9 = var9.bind(var10)(var8, var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0012_ip = 644; continue _fun0012 }
 635:
            var3 = var3.length;
            var2 = var3 > var6;
 644:
            if(!var2) { _fun0012_ip = 748; continue _fun0012 }
 647:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var6 = var12[var3];
            var6 = var10.bind(var11)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var11)(var3);
            var3 = var3.t;
            var3 = var3.Qf3ptr;
            var6 = var6.bind(var8)(var3);
            var3 = var6.startsWith;
            var3 = var3.bind(var6)(var9);
            if(var3) { _fun0012_ip = 745; continue _fun0012 }
 716:
            var10 = _closure1_slot14;
            var8 = var10.substr;
            var6 = 1;
            var8 = var8.bind(var10)(var6);
            var6 = var8.startsWith;
            var3 = var6.bind(var8)(var9);
 745:
            var2 = var3;
 748:
            _closure2_slot1 = var2;
            var6 = var7.filter;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.record;
                    var4 = _closure1_slot8;
                    var2 = var4.isBlockedOrIgnored;
                    var1 = var3.id;
                    var1 = var2.bind(var4)(var1);
                    if(var1) { _fun0017_ip = 81; continue _fun0017 }
 35:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0017_ip = 78; continue _fun0017 }
 45:
                    var4 = var3.id;
                    var6 = _closure2_slot0;
                    var3 = null;
                    var6 = var3 == var6;
                    var3 = undefined;
                    if(var6) { _fun0017_ip = 74; continue _fun0017 }
 65:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
 74:
                    var2 = var4 === var3;
 78:
                    var1 = var2;
 81:
                    var1 = !var1;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var3);
            var3 = var6.map;
            var1 = function(arg1) {
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
            var1 = var3.bind(var6)(var1);
            if(!var2) { _fun0012_ip = 810; continue _fun0012 }
 785:
            var3 = var1.unshift;
            var2 = {};
            var5 = _closure1_slot14;
            var2['text'] = var5;
            var2['user'] = var4;
            var2 = var3.bind(var1)(var2);
 810:
            return var1;
        }
    };
    var _closure1_slot42 = var6;
    var1 = function streamerModeValidator() {
        var1 = _closure1_slot10;
        var1 = var1.hidePersonalInformation;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function getInFilterAutocompletions(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var8 = arg1;
            var2 = arg2;
            var5 = arg3;
            var3 = var8.startsWith;
            var4 = '"';
            var3 = var3.bind(var8)(var4);
            if(!var3) { _fun0018_ip = 43; continue _fun0018 }
 29:
            var3 = var8.endsWith;
            var3 = var3.bind(var8)(var4);
            if(var3) { _fun0018_ip = 107; continue _fun0018 }
 43:
            var3 = var8.startsWith;
            var3 = var3.bind(var8)(var4);
            var7 = var8;
            if(!var3) { _fun0018_ip = 162; continue _fun0018 }
 60:
            var4 = var8.substring;
            var3 = 1;
            var9 = var4.bind(var8)(var3);
            var6 = var9.replaceAll;
            var4 = /\\(.)/g;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var6.bind(var9)(var4, var3);
            _fun0018_ip = 162; continue _fun0018;
 107:
            var6 = var8.substring;
            var3 = var8.length;
            var4 = 1;
            var3 = var3 - var4;
            var8 = var6.bind(var8)(var4, var3);
            var6 = var8.replaceAll;
            var4 = /\\(.)/g;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var6.bind(var8)(var4, var3);
 162:
            var3 = 0;
            var6 = var7[var3];
            var3 = '#';
            var4 = var7;
            if(!(var3 === var6)) { _fun0018_ip = 193; continue _fun0018 }
 179:
            var6 = var7.substring;
            var3 = 1;
            var4 = var6.bind(var7)(var3);
 193:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var6 = var6[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var6);
            var6 = var7.isGuildLikeSearchContext;
            var6 = var6.bind(var7)(var2);
            if(var6) { _fun0018_ip = 351; continue _fun0018 }
 232:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var12 = var9.bind(var3)(var6);
            var7 = var12.getIsSearchDesktopXDMExperimentEnabled;
            var6 = {};
            var11 = 'getInFilterAutocompletions';
            var6['location'] = var11;
            var7 = var7.bind(var12)(var6);
            var6 = 18;
            var6 = var10[var6];
            var10 = var9.bind(var3)(var6);
            var9 = var10.getIsSearchMobileXDMChannelFiltersEnabled;
            var6 = {};
            var6['location'] = var11;
            var6 = var9.bind(var10)(var6);
            var9 = var2.type;
            var8 = _closure1_slot17;
            var8 = var8.DMS;
            if(!(var9 === var8)) { _fun0018_ip = 329; continue _fun0018 }
 323:
            if(var7) { _fun0018_ip = 335; continue _fun0018 }
 326:
            if(var6) { _fun0018_ip = 335; continue _fun0018 }
 329:
            var6 = new Array(0);
            _fun0018_ip = 349; continue _fun0018;
 335:
            var8 = function getInFilterAutocompletionsForDMs(arg1, arg2, arg3) {
                var2 = arg1;
                var4 = arg2;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var13 = 20;
                var5 = var9[var13];
                var8 = undefined;
                var11 = var6.bind(var8)(var5);
                var10 = var11.queryGroupDMs;
                var5 = {};
                var5['query'] = var2;
                var5['limit'] = var4;
                var7 = true;
                var5['fuzzy'] = var7;
                var7 = _closure1_slot0;
                var3 = var9[var13];
                var15 = var7.bind(var8)(var3);
                var14 = var15.getBoosterMap;
                var3 = 21;
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
                var5['query'] = var2;
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
                var5 = 11;
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
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.record;
                        var2 = var1.comparator;
                        var1 = {};
                        var1['text'] = var2;
                        var1['channel'] = var3;
                        var2 = null;
                        var4 = var2 == var3;
                        var2 = undefined;
                        if(var4) { _fun0019_ip = 41; continue _fun0019 }
 36:
                        var2 = var3.id;
 41:
                        var1['key'] = var2;
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.filter;
                var1 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.text;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0020_ip = 26; continue _fun0020 }
 17:
                        var4 = var2.channel;
                        var1 = var3 != var4;
 26:
                        if(!var1) { _fun0020_ip = 38; continue _fun0020 }
 29:
                        var2 = var2.key;
                        var1 = var3 != var2;
 38:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var1);
                var1 = var3.value;
                var3 = var1.bind(var3)();
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var2 = var3.slice;
                var1 = 0;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var7 = false;
            var6 = var8.bind(var3)(var4, var5, var7);
 349:
            return var6;
 351:
            var2 = var2.guildId;
            var1 = function getInFilterAutocompletionsForGuild(arg1, arg2, arg3) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var6 = arg1;
                    var7 = arg2;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 13;
                    var3 = var11[var3];
                    var4 = undefined;
                    var8 = var10.bind(var4)(var3);
                    var5 = var8.getCurrentConfig;
                    var3 = {};
                    var9 = 'getInFilterAutocompletionsForGuild';
                    var3['location'] = var9;
                    var3 = var5.bind(var8)(var3);
                    var5 = var3.enabled;
                    var3 = 20;
                    var8 = var11[var3];
                    var14 = var10.bind(var4)(var8);
                    var9 = var14.queryChannels;
                    var8 = {};
                    var8['query'] = var6;
                    var12 = _closure1_slot5;
                    var8['type'] = var12;
                    var8['guildId'] = var7;
                    var13 = inf;
                    var8['limit'] = var13;
                    var12 = true;
                    var8['allowEmptyQueries'] = var12;
                    var8['includeAllThreads'] = var5;
                    var9 = var9.bind(var14)(var8);
                    var8 = var9.concat;
                    var3 = var11[var3];
                    var11 = var10.bind(var4)(var3);
                    var10 = var11.queryChannels;
                    var3 = {};
                    var3['query'] = var6;
                    var14 = _closure1_slot6;
                    var3['type'] = var14;
                    var3['guildId'] = var7;
                    var3['limit'] = var13;
                    var3['allowEmptyQueries'] = var12;
                    var3 = var10.bind(var11)(var3);
                    var9 = var8.bind(var9)(var3);
                    var8 = var9.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.record;
                        return var1;
                    };
                    var9 = var8.bind(var9)(var3);
                    var3 = var9;
                    if(var5) { _fun0021_ip = 221; continue _fun0021 }
 206:
                    var8 = var9.filter;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isThread;
                        var1 = var1.bind(var2)();
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var8.bind(var9)(var5);
 221:
                    var5 = var6.trim;
                    var6 = var5.bind(var6)();
                    var5 = '';
                    if(!(var5 === var6)) { _fun0021_ip = 317; continue _fun0021 }
 239:
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
                    if(!(var5 != var6)) { _fun0021_ip = 317; continue _fun0021 }
 280:
                    var9 = var3.splice;
                    var5 = var3.indexOf;
                    var8 = var5.bind(var3)(var6);
                    var5 = 1;
                    var5 = var9.bind(var3)(var8, var5);
                    var5 = var3.unshift;
                    var5 = var5.bind(var3)(var6);
 317:
                    var6 = _closure1_slot7;
                    var5 = var6.getTextChannelNameDisambiguations;
                    var5 = var5.bind(var6)(var7);
                    var _closure3_slot1 = var5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var4 = var2.bind(var4)(var3);
                    var3 = var4.take;
                    var2 = arg3;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var2 = arg1;
                            var1 = {};
                            var4 = _closure3_slot1;
                            var3 = var2.id;
                            var4 = var4[var3];
                            var3 = null;
                            var6 = var3 == var4;
                            var5 = undefined;
                            if(var6) { _fun0022_ip = 37; continue _fun0022 }
 32:
                            var5 = var4.name;
 37:
                            if(!(var3 == var5)) { _fun0022_ip = 46; continue _fun0022 }
 41:
                            var5 = var2.name;
 46:
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
            var1 = var1.bind(var3)(var4, var2, var5);
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var4 = function isSearchFilterTokenType(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot45 = var4;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var11 = var10[var7];
    var11 = var9.bind(var1)(var11);
    var12 = var11.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot5 = var12;
    var11 = var11.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = var11;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ANSWER_IN_REGEX;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.ME;
    var _closure1_slot14 = var8;
    var8 = var7.SearchTokenTypes;
    var _closure1_slot15 = var8;
    var8 = var7.SEARCH_DATE_FORMAT;
    var _closure1_slot16 = var8;
    var8 = var7.SearchTypes;
    var _closure1_slot17 = var8;
    var8 = var7.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot18 = var8;
    var7 = var7.ID_REGEX;
    var _closure1_slot19 = var7;
    var12 = var5.RegExp;
    var7 = var12.prototype;
    var8 = Object.create(var7, {constructor: {value: var12}});
    var15 = '(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))';
    var11 = 'i';
    var16 = var8;
    var14 = var11;
    var7 = new var16[var12](var15, var14, var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot20 = var7;
    var8 = var5.RegExp;
    var5 = var8.prototype;
    var7 = Object.create(var5, {constructor: {value: var8}});
    var15 = '\\s*(true|false)';
    var16 = var7;
    var5 = new var16[var8](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var7;
    var _closure1_slot21 = var5;
    var5 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    var _closure1_slot22 = var5;
    var5 = {};
    var7 = 'FILTER';
    var5['FILTER'] = var7;
    var7 = 'ANSWER';
    var5['ANSWER'] = var7;
    var _closure1_slot23 = var5;
    var7 = {};
    var _closure1_slot24 = var7;
    var8 = 24;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/search/tokens/SearchTokens.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var7 = function getRandomDateShortcut() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 11;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.sample;
        var1 = _closure1_slot39;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getRandomDateShortcut'] = var7;
    var3['searchUsers'] = var6;
    var3['ComponentTypes'] = var5;
    var5 = function rebuildSearchTokenConfigs() {
        var1 = global;
        var5 = var1.Object;
        var4 = var5.assign;
        var3 = _closure1_slot24;
        var2 = function makeSearchTokenConfigs() {
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 12;
            var1 = var19[var9];
            var17 = undefined;
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.ZNR2fn;
            var1 = var2.bind(var3)(var1);
            var12 = new Array(9);
            var12[0] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.20uQR0;
            var1 = var2.bind(var3)(var1);
            var12[1] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.L4lxyM;
            var1 = var2.bind(var3)(var1);
            var12[2] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.AV/v6u;
            var1 = var2.bind(var3)(var1);
            var12[3] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.XM9XGB;
            var1 = var2.bind(var3)(var1);
            var12[4] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.TNLcp6;
            var1 = var2.bind(var3)(var1);
            var12[5] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.F8Wf0d;
            var1 = var2.bind(var3)(var1);
            var12[6] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.PJgX2t;
            var1 = var2.bind(var3)(var1);
            var12[7] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.nrpA5O;
            var1 = var2.bind(var3)(var1);
            var12[8] = var1;
            var _closure3_slot0 = var12;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.tPZo4u;
            var1 = var2.bind(var3)(var1);
            var15 = new Array(3);
            var15[0] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.JL7sRU;
            var1 = var2.bind(var3)(var1);
            var15[1] = var1;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var19[var9];
            var1 = var18.bind(var17)(var1);
            var1 = var1.t;
            var1 = var1.WjkIKS;
            var1 = var2.bind(var3)(var1);
            var15[2] = var1;
            var _closure3_slot1 = var15;
            var1 = {};
            var6 = _closure1_slot15;
            var3 = var6.FILTER_FROM;
            var2 = {};
            var20 = _closure1_slot33;
            var4 = var19[var9];
            var4 = var18.bind(var17)(var4);
            var10 = var4.intl;
            var7 = var10.string;
            var4 = var19[var9];
            var4 = var18.bind(var17)(var4);
            var4 = var4.t;
            var4 = var4.1TUdFh;
            var4 = var7.bind(var10)(var4);
            var4 = var20.bind(var17)(var4);
            var2['regex'] = var4;
            var4 = _closure1_slot23;
            var7 = var4.FILTER;
            var2['componentType'] = var7;
            var16 = _closure1_slot32;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var7 = var7.t;
            var7 = var7.1TUdFh;
            var7 = var10.bind(var11)(var7);
            var7 = var16.bind(var17)(var7);
            var2['key'] = var7;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var7 = var7.t;
            var7 = var7.1TUdFh;
            var7 = var10.bind(var11)(var7);
            var2['plainText'] = var7;
            var14 = _closure1_slot43;
            var2['validator'] = var14;
            var11 = _closure1_slot42;
            var2['getAutocompletions'] = var11;
            var1[var3] = var2;
            var3 = var6.ANSWER_USERNAME_FROM;
            var2 = {};
            var10 = var6.FILTER_FROM;
            var7 = new Array(1);
            var7[0] = var10;
            var2['follows'] = var7;
            var10 = _closure1_slot22;
            var2['regex'] = var10;
            var7 = _closure1_slot34;
            var2['validator'] = var7;
            var13 = true;
            var2['mutable'] = var13;
            var21 = var4.ANSWER;
            var2['componentType'] = var21;
            var21 = 'author_id';
            var2['queryKey'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_MENTIONS;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.i96lOz;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.i96lOz;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.i96lOz;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var2['validator'] = var14;
            var2['getAutocompletions'] = var11;
            var1[var3] = var2;
            var3 = var6.ANSWER_USERNAME_MENTIONS;
            var2 = {};
            var14 = var6.FILTER_MENTIONS;
            var11 = new Array(1);
            var11[0] = var14;
            var2['follows'] = var11;
            var2['regex'] = var10;
            var2['validator'] = var7;
            var2['mutable'] = var13;
            var7 = var4.ANSWER;
            var2['componentType'] = var7;
            var7 = 'mentions';
            var2['queryKey'] = var7;
            var1[var3] = var2;
            var3 = var6.FILTER_HAS;
            var2 = {};
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var7 = var7.t;
            var7 = var7.CqCvio;
            var7 = var10.bind(var11)(var7);
            var7 = var20.bind(var17)(var7);
            var2['regex'] = var7;
            var7 = var4.FILTER;
            var2['componentType'] = var7;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var7 = var7.t;
            var7 = var7.CqCvio;
            var7 = var10.bind(var11)(var7);
            var7 = var16.bind(var17)(var7);
            var2['key'] = var7;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var19[var9];
            var7 = var18.bind(var17)(var7);
            var7 = var7.t;
            var7 = var7.CqCvio;
            var7 = var10.bind(var11)(var7);
            var2['plainText'] = var7;
            var7 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot41;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var7;
            var1[var3] = var2;
            var3 = var6.ANSWER_HAS;
            var2 = {};
            var7 = global;
            var23 = var7.RegExp;
            var11 = var12.map;
            var10 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.escape;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var12)(var10);
            var10 = var11.join;
            var14 = '|';
            var21 = var10.bind(var11)(var14);
            var10 = var7.HermesInternal;
            var10 = var10.concat;
            var12 = '(?:\\s*-?(';
            var11 = '))';
            var29 = var10.bind(var12)(var21, var11);
            var10 = var23.prototype;
            var22 = Object.create(var10, {constructor: {value: var23}});
            var10 = 'i';
            var30 = var22;
            var28 = var10;
            var21 = new var30[var23](var29, var28, var27);
            var21 = var21 instanceof Object ? var21 : var22;
            var2['regex'] = var21;
            var22 = var6.FILTER_HAS;
            var21 = new Array(1);
            var21[0] = var22;
            var2['follows'] = var21;
            var21 = _closure1_slot37;
            var2['validator'] = var21;
            var21 = var4.ANSWER;
            var2['componentType'] = var21;
            var21 = 'has';
            var2['queryKey'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_FILE_TYPE;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.TMNjFh;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.TMNjFh;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.TMNjFh;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var1[var3] = var2;
            var3 = var6.ANSWER_FILE_TYPE;
            var2 = {};
            var21 = /(?:\s*([^\s]+))/;
            var2['regex'] = var21;
            var22 = var6.FILTER_FILE_TYPE;
            var21 = new Array(1);
            var21[0] = var22;
            var2['follows'] = var21;
            var2['mutable'] = var13;
            var21 = var4.ANSWER;
            var2['componentType'] = var21;
            var21 = 'attachment_extensions';
            var2['queryKey'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_FILE_NAME;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.5xtLRE;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.5xtLRE;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.5xtLRE;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var1[var3] = var2;
            var3 = var6.ANSWER_FILE_NAME;
            var2 = {};
            var21 = /(?:\s*([^\s]+)(?=\s))/;
            var2['regex'] = var21;
            var22 = var6.FILTER_FILE_NAME;
            var21 = new Array(1);
            var21[0] = var22;
            var2['follows'] = var21;
            var2['mutable'] = var13;
            var21 = var4.ANSWER;
            var2['componentType'] = var21;
            var21 = 'attachment_filename';
            var2['queryKey'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_BEFORE;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.qZ+7BA;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.qZ+7BA;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.qZ+7BA;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot15;
                var2 = var1.FILTER_BEFORE;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_ON;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.tIxkOj;
            var25 = var22.bind(var23)(var21);
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.h2NzSU;
            var27 = var22.bind(var23)(var21);
            var21 = var7.HermesInternal;
            var23 = var21.concat;
            var30 = '(';
            var26 = ')';
            var29 = var25;
            var28 = var14;
            var21 = var30[var23](var29, var28, var27, var26, var25);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.h2NzSU;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.h2NzSU;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot15;
                var2 = var1.FILTER_ON;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_AFTER;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.KSDx7O;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.KSDx7O;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.KSDx7O;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot15;
                var2 = var1.FILTER_AFTER;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var21;
            var1[var3] = var2;
            var3 = var6.ANSWER_BEFORE;
            var2 = {};
            var21 = _closure1_slot20;
            var2['regex'] = var21;
            var23 = var6.FILTER_BEFORE;
            var22 = new Array(1);
            var22[0] = var23;
            var2['follows'] = var22;
            var22 = var4.ANSWER;
            var2['componentType'] = var22;
            var2['mutable'] = var13;
            var22 = function validator(arg1) {
                var4 = _closure1_slot35;
                var3 = undefined;
                var2 = arg1;
                var1 = 'before';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var22;
            var1[var3] = var2;
            var3 = var6.ANSWER_ON;
            var2 = {};
            var2['regex'] = var21;
            var23 = var6.FILTER_ON;
            var22 = new Array(1);
            var22[0] = var23;
            var2['follows'] = var22;
            var22 = var4.ANSWER;
            var2['componentType'] = var22;
            var2['mutable'] = var13;
            var22 = function validator(arg1) {
                var4 = _closure1_slot35;
                var3 = undefined;
                var2 = arg1;
                var1 = 'on';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var22;
            var1[var3] = var2;
            var3 = var6.ANSWER_AFTER;
            var2 = {};
            var2['regex'] = var21;
            var22 = var6.FILTER_AFTER;
            var21 = new Array(1);
            var21[0] = var22;
            var2['follows'] = var21;
            var21 = var4.ANSWER;
            var2['componentType'] = var21;
            var2['mutable'] = var13;
            var21 = function validator(arg1) {
                var4 = _closure1_slot35;
                var3 = undefined;
                var2 = arg1;
                var1 = 'after';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var21;
            var1[var3] = var2;
            var3 = var6.FILTER_IN;
            var2 = {};
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.WNpFHR;
            var21 = var22.bind(var23)(var21);
            var21 = var20.bind(var17)(var21);
            var2['regex'] = var21;
            var21 = var4.FILTER;
            var2['componentType'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.WNpFHR;
            var21 = var22.bind(var23)(var21);
            var21 = var16.bind(var17)(var21);
            var2['key'] = var21;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var19[var9];
            var21 = var18.bind(var17)(var21);
            var21 = var21.t;
            var21 = var21.WNpFHR;
            var21 = var22.bind(var23)(var21);
            var2['plainText'] = var21;
            var21 = function validator() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = _closure1_slot12;
                    var1 = var3.getSelectedSearchContext;
                    var4 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0023_ip = 59; continue _fun0023 }
 26:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.isChannelFilterSupported;
                    var1 = var2.bind(var3)(var4);
 59:
                    return var1;
                }
            };
            var2['validator'] = var21;
            var21 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.searchContext;
                var3 = var1.maxResults;
                var2 = _closure1_slot44;
                var1 = undefined;
                var1 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var2['getAutocompletions'] = var21;
            var1[var3] = var2;
            var3 = var6.ANSWER_IN;
            var2 = {};
            var21 = _closure1_slot13;
            var2['regex'] = var21;
            var2['mutable'] = var13;
            var21 = var6.FILTER_IN;
            var13 = new Array(1);
            var13[0] = var21;
            var2['follows'] = var13;
            var13 = var4.ANSWER;
            var2['componentType'] = var13;
            var13 = _closure1_slot36;
            var2['validator'] = var13;
            var13 = 'channel_id';
            var2['queryKey'] = var13;
            var1[var3] = var2;
            var3 = var6.FILTER_PINNED;
            var2 = {};
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var22 = var13.intl;
            var21 = var22.string;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var13 = var13.t;
            var13 = var13.0B74eX;
            var13 = var21.bind(var22)(var13);
            var13 = var20.bind(var17)(var13);
            var2['regex'] = var13;
            var13 = var4.FILTER;
            var2['componentType'] = var13;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var22 = var13.intl;
            var21 = var22.string;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var13 = var13.t;
            var13 = var13.0B74eX;
            var13 = var21.bind(var22)(var13);
            var13 = var16.bind(var17)(var13);
            var2['key'] = var13;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var22 = var13.intl;
            var21 = var22.string;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var13 = var13.t;
            var13 = var13.0B74eX;
            var13 = var21.bind(var22)(var13);
            var2['plainText'] = var13;
            var13 = function getAutocompletions() {
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
            var2['getAutocompletions'] = var13;
            var1[var3] = var2;
            var3 = var6.ANSWER_PINNED;
            var2 = {};
            var13 = _closure1_slot21;
            var2['regex'] = var13;
            var13 = var4.ANSWER;
            var2['componentType'] = var13;
            var21 = var6.FILTER_PINNED;
            var13 = new Array(1);
            var13[0] = var21;
            var2['follows'] = var13;
            var13 = 'pinned';
            var2['queryKey'] = var13;
            var13 = function validator(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var5 = arg1;
                    var2 = var5.getMatch;
                    var1 = 1;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'true';
                    if(!(var1 !== var2)) { _fun0024_ip = 58; continue _fun0024 }
 25:
                    var1 = 'false';
                    var1 = var1 === var2;
                    if(!var1) { _fun0024_ip = 56; continue _fun0024 }
 36:
                    var4 = var5.setData;
                    var3 = 'pinned';
                    var2 = false;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = true;
 56:
                    _fun0024_ip = 78; continue _fun0024;
 58:
                    var4 = var5.setData;
                    var3 = 'pinned';
                    var2 = true;
                    var3 = var4.bind(var5)(var3, var2);
                    var1 = true;
 78:
                    return var1;
                }
            };
            var2['validator'] = var13;
            var1[var3] = var2;
            var3 = var6.FILTER_AUTHOR_TYPE;
            var2 = {};
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var22 = var13.intl;
            var21 = var22.string;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var13 = var13.t;
            var13 = var13.us8IQk;
            var13 = var21.bind(var22)(var13);
            var13 = var20.bind(var17)(var13);
            var2['regex'] = var13;
            var13 = var4.FILTER;
            var2['componentType'] = var13;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var21 = var13.intl;
            var20 = var21.string;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var13 = var13.t;
            var13 = var13.us8IQk;
            var13 = var20.bind(var21)(var13);
            var13 = var16.bind(var17)(var13);
            var2['key'] = var13;
            var13 = function validator() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getIsSearchAuthorTypeFilterEnabled;
                var1 = {};
                var4 = 'SearchTokens';
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['validator'] = var13;
            var13 = var19[var9];
            var13 = var18.bind(var17)(var13);
            var16 = var13.intl;
            var13 = var16.string;
            var9 = var19[var9];
            var9 = var18.bind(var17)(var9);
            var9 = var9.t;
            var9 = var9.us8IQk;
            var9 = var13.bind(var16)(var9);
            var2['plainText'] = var9;
            var9 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot41;
                var2 = _closure3_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var9;
            var1[var3] = var2;
            var3 = var6.ANSWER_AUTHOR_TYPE;
            var2 = {};
            var9 = var7.RegExp;
            var13 = var15.map;
            var8 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.escape;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var15)(var8);
            var8 = var13.join;
            var8 = var8.bind(var13)(var14);
            var7 = var7.HermesInternal;
            var7 = var7.concat;
            var29 = var7.bind(var12)(var8, var11);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var30 = var8;
            var28 = var10;
            var7 = new var30[var9](var29, var28, var27);
            var7 = var7 instanceof Object ? var7 : var8;
            var2['regex'] = var7;
            var7 = var6.FILTER_AUTHOR_TYPE;
            var6 = new Array(1);
            var6[0] = var7;
            var2['follows'] = var6;
            var5 = _closure1_slot38;
            var2['validator'] = var5;
            var4 = var4.ANSWER;
            var2['componentType'] = var4;
            var4 = 'author_type';
            var2['queryKey'] = var4;
            var1[var3] = var2;
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['rebuildSearchTokenConfigs'] = var5;
    var3['isSearchFilterTokenType'] = var4;
    var4 = function getSearchTokenFilterAutocompletions(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var10 = arg1;
            var9 = arguments[1];
            var8 = undefined;
            if(!(var9 === var8)) { _fun0025_ip = 42; continue _fun0025 }
 12:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot24;
            var1 = var2.bind(var3)(var1);
            var9 = var1.length;
 42:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure1_slot24;
            var6 = var3.bind(var4)(var2);
            var2 = var6.length;
            var5 = 0;
            var2 = var5 < var2;
            var4 = 19;
            var3 = null;
            if(!var2) { _fun0025_ip = 204; continue _fun0025 }
 90:
            var13 = var6[var5];
            var2 = var1.length;
            if(!(!(var2 >= var9))) { _fun0025_ip = 204; continue _fun0025 }
 103:
            var2 = _closure1_slot24;
            var2 = var2[var13];
            var12 = var2.key;
            var2 = _closure1_slot45;
            var2 = var2.bind(var8)(var13);
            if(!var2) { _fun0025_ip = 132; continue _fun0025 }
 128:
            var2 = var3 != var12;
 132:
            if(!var2) { _fun0025_ip = 168; continue _fun0025 }
 135:
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var4];
            var14 = var14.bind(var8)(var11);
            var11 = var10.toLowerCase;
            var11 = var11.bind(var10)();
            var2 = var14.bind(var8)(var11, var12);
 168:
            if(!var2) { _fun0025_ip = 192; continue _fun0025 }
 171:
            var11 = var1.push;
            var2 = {};
            var2['token'] = var13;
            var2['text'] = var12;
            var2 = var11.bind(var1)(var2);
 192:
            var5 = var5 + 1;
            var2 = var6.length;
            if(var5 < var2) { _fun0025_ip = 90; continue _fun0025 }
 204:
            return var1;
        }
    };
    var3['getSearchTokenFilterAutocompletions'] = var4;
    var2 = function isMeAutcompleteAnswer(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var2 = arg1;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0026_ip = 161; continue _fun0026 }
 17:
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var3 = var4.replace;
            var2 = /^@/;
            var1 = '';
            var4 = var3.bind(var4)(var2, var1);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var3 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Qf3ptr;
            var3 = var3.bind(var5)(var1);
            var1 = var3.startsWith;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0026_ip = 159; continue _fun0026 }
 130:
            var5 = _closure1_slot14;
            var3 = var5.substring;
            var2 = 1;
            var3 = var3.bind(var5)(var2);
            var2 = var3.startsWith;
            var1 = var2.bind(var3)(var4);
 159:
            return var1;
 161:
            var1 = false;
            return var1;
        }
    };
    var3['isMeAutcompleteAnswer'] = var2;
    return var1;
})();