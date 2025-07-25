// app/lib/SearchTokens.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var8 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
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
 0:
            var4 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var6 = 0;
 14:
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
        var4 = var4.HYiVER;
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
        var4 = var4.FvBj//;
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
        var3 = var3.dXC/ho;
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
            var4 = _closure1_slot20;
            var1 = var4.test;
            var1 = var1.bind(var4)(var3);
            var4 = var3;
            if(var1) { _fun0002_ip = 191; continue _fun0002 }
 52:
            var1 = _closure1_slot15;
            if(!(var3 !== var1)) { _fun0002_ip = 168; continue _fun0002 }
 60:
            var1 = var5.getMatch;
            var9 = 4;
            var3 = var1.bind(var5)(var9);
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 133; continue _fun0002 }
 80:
            var8 = _closure1_slot13;
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
            _fun0002_ip = 166; continue _fun0002;
 133:
            var8 = _closure1_slot13;
            var7 = var8.findByTag;
            var3 = var5.getMatch;
            var3 = var3.bind(var5)(var9);
            var7 = var7.bind(var8)(var3);
            var3 = undefined;
            var1 = var6.bind(var3)(var7);
 166:
            _fun0002_ip = 188; continue _fun0002;
 168:
            var3 = _closure1_slot13;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var1 = var6.bind(var2)(var3);
 188:
            var4 = var1;
 191:
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 218; continue _fun0002 }
 200:
            var3 = var5.setData;
            var2 = 'userId';
            var2 = var3.bind(var5)(var2, var4);
            var1 = true;
 218:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
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
            var1 = _closure1_slot32;
            var9 = undefined;
            var1 = var1.bind(var9)();
            var6 = var1[var12];
            var2 = null;
            if(!(var2 == var6)) { _fun0004_ip = 324; continue _fun0004 }
 62:
            var1 = _closure1_slot26;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 275; continue _fun0004 }
 86:
            var1 = _closure1_slot27;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            if(var1) { _fun0004_ip = 226; continue _fun0004 }
 107:
            var1 = _closure1_slot28;
            var3 = var1.bind(var9)();
            var1 = var3.has;
            var1 = var1.bind(var3)(var12);
            var11 = _closure1_slot31;
            if(var1) { _fun0004_ip = 178; continue _fun0004 }
 132:
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
            _fun0004_ip = 354; continue _fun0004;
 275:
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
    var _closure1_slot36 = var1;
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
            if(!var2) { _fun0005_ip = 108; continue _fun0005 }
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
 108:
            var3 = _closure1_slot11;
            var2 = var3.getGuildId;
            var3 = var2.bind(var3)();
            var6 = _closure1_slot9;
            var2 = var6.getCurrentSearchId;
            var9 = var2.bind(var6)();
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 17;
            var6 = var6[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var6);
            var6 = var8.getSearchType;
            var8 = var6.bind(var8)(var9);
            var6 = _closure1_slot18;
            var6 = var6.GUILD;
            if(!(var8 !== var6)) { _fun0005_ip = 270; continue _fun0005 }
 186:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var6 = var10[var6];
            var10 = var9.bind(var2)(var6);
            var9 = var10.getIsSearchDesktopXDMExperimentEnabled;
            var6 = {};
            var11 = 'channelValidator';
            var6['location'] = var11;
            var6 = var9.bind(var10)(var6);
            var7 = _closure1_slot18;
            var7 = var7.DMS;
            var7 = var8 !== var7;
            if(var7) { _fun0005_ip = 249; continue _fun0005 }
 246:
            var7 = !var6;
 249:
            var6 = !var7;
            if(var7) { _fun0005_ip = 268; continue _fun0005 }
 255:
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
                            var1 = 15;
                            var1 = var5[var1];
                            var5 = undefined;
                            var7 = var3.bind(var5)(var1);
                            var6 = var7.computeChannelName;
                            var3 = _closure1_slot13;
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
                            var4 = _closure1_slot13;
                            var3 = var4.getUser;
                            var4 = var3.bind(var4)(var6);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0007_ip = 147; continue _fun0007 }
 106:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 16;
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
                    if(var1) { _fun0006_ip = 80; continue _fun0006 }
 75:
                    var2 = var4.length;
 80:
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0006_ip = 107; continue _fun0006 }
 89:
                    var3 = var5.setData;
                    var2 = 'channels';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = true;
 107:
                    return var1;
                }
            };
            var6 = var7.bind(var2)(var5, var4);
 268:
            return var6;
 270:
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
                    var2 = 14;
                    var3 = var10[var2];
                    var2 = undefined;
                    var11 = var6.bind(var2)(var3);
                    var4 = var11.getCurrentConfig;
                    var3 = {};
                    var12 = 'guildChannelValidator';
                    var3['location'] = var12;
                    var3 = var4.bind(var11)(var3);
                    var3 = var3.enabled;
                    var4 = 12;
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
                    if(!var3) { _fun0008_ip = 197; continue _fun0008 }
 191:
                    var3 = null;
                    if(!(var3 == var9)) { _fun0008_ip = 203; continue _fun0008 }
 197:
                    var3 = new Array(0);
                    _fun0008_ip = 218; continue _fun0008;
 203:
                    var8 = _closure1_slot4;
                    var7 = var8.getAllThreadsForGuild;
                    var3 = var7.bind(var8)(var9);
 218:
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
                    if(var1) { _fun0008_ip = 265; continue _fun0008 }
 260:
                    var2 = var4.length;
 265:
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0008_ip = 292; continue _fun0008 }
 274:
                    var3 = var5.setData;
                    var2 = 'channels';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = true;
 292:
                    return var1;
                }
            };
            var1 = var1.bind(var2)(var5, var4, var3);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function hasValidator(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
    var _closure1_slot38 = var1;
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var8 = var3.query;
            var10 = var3.searchId;
            var2 = var3.maxResults;
            var11 = undefined;
            if(!(var2 === var11)) { _fun0011_ip = 31; continue _fun0011 }
 28:
            var2 = 10;
 31:
            var7 = var3.tokens;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var11;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var4 = var4.bind(var11)(var3);
            var3 = var4.getSearchType;
            var4 = var3.bind(var4)(var10);
            var9 = {};
            var6 = var8.split;
            var3 = '#';
            var3 = var6.bind(var8)(var3);
            var6 = 0;
            var3 = var3[var6];
            var9['query'] = var3;
            var9['limit'] = var2;
            var2 = false;
            var9['request'] = var2;
            var2 = _closure1_slot18;
            var2 = var2.GUILD;
            if(!(var2 !== var4)) { _fun0011_ip = 503; continue _fun0011 }
 134:
            var2 = _closure1_slot18;
            var2 = var2.CHANNEL;
            if(!(var2 !== var4)) { _fun0011_ip = 449; continue _fun0011 }
 151:
            var2 = _closure1_slot18;
            var2 = var2.DMS;
            if(!(var2 !== var4)) { _fun0011_ip = 171; continue _fun0011 }
 165:
            var2 = new Array(0);
            return var2;
 171:
            var2 = null;
            if(!(var2 == var7)) { _fun0011_ip = 181; continue _fun0011 }
 177:
            var7 = new Array(0);
 181:
            var4 = function getPrivateChannelRecipients(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0012_ip = 106; continue _fun0012 }
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
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.getData;
                            var1 = 'channel';
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            if(!(var2 != var1)) { _fun0013_ip = 46; continue _fun0013 }
 24:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var1 = function maybeAddUser(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = arg1;
                            var2 = null;
                            var2 = var2 == var1;
                            if(var2) { _fun0014_ip = 34; continue _fun0014 }
 12:
                            var5 = _closure3_slot0;
                            var4 = var5.has;
                            var3 = var1.id;
                            var2 = var4.bind(var5)(var3);
 34:
                            if(var2) { _fun0014_ip = 73; continue _fun0014 }
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
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getChannel;
                            var2 = arg1;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0015_ip = 118; continue _fun0015 }
 26:
                            var2 = var3.isDM;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0015_ip = 79; continue _fun0015 }
 39:
                            var2 = var3.isGroupDM;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0015_ip = 118; continue _fun0015 }
 52:
                            var5 = var3.recipients;
                            var4 = var5.forEach;
                            var2 = function(arg1) {
                                var3 = _closure1_slot13;
                                var2 = var3.getUser;
                                var1 = arg1;
                                var3 = var2.bind(var3)(var1);
                                var2 = _closure3_slot2;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var3);
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2);
                            _fun0015_ip = 118; continue _fun0015;
 79:
                            var2 = var3.getRecipientId;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot13;
                            var1 = var2.getUser;
                            var3 = var1.bind(var2)(var3);
                            var2 = _closure3_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 118:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
 106:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var14 = var4.bind(var11)(var7);
            if(!(var2 != var14)) { _fun0011_ip = 206; continue _fun0011 }
 197:
            var4 = var14.length;
            if(!(!(var4 > var6))) { _fun0011_ip = 311; continue _fun0011 }
 206:
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 20;
            var4 = var17[var12];
            var8 = var7.bind(var11)(var4);
            var7 = var8.queryAllUsers;
            var4 = {};
            var19 = var4;
            var18 = var9;
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
            _fun0011_ip = 555; continue _fun0011;
 311:
            var8 = _closure1_slot13;
            var4 = var8.getCurrentUser;
            var4 = var4.bind(var8)();
            if(!(var2 != var4)) { _fun0011_ip = 338; continue _fun0011 }
 328:
            var2 = var14.push;
            var2 = var2.bind(var14)(var4);
 338:
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 20;
            var2 = var16[var12];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryUsers;
            var2 = {};
            var19 = var2;
            var18 = var9;
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
            _fun0011_ip = 555; continue _fun0011;
 449:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryChannelUsers;
            var2 = {};
            var19 = var2;
            var18 = var9;
            var12 = copyDataProperties(var19, var18);
            var12 = 'channelId';
            var2[var12] = var10;
            var7 = var4.bind(var8)(var2);
            _fun0011_ip = 555; continue _fun0011;
 503:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var8 = var4.bind(var11)(var2);
            var4 = var8.queryGuildUsers;
            var2 = {};
            var19 = var2;
            var18 = var9;
            var9 = copyDataProperties(var19, var18);
            var9 = 'guildId';
            var2[var9] = var10;
            var7 = var4.bind(var8)(var2);
 555:
            var4 = _closure1_slot13;
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
            if(!var2) { _fun0011_ip = 629; continue _fun0011 }
 620:
            var3 = var3.length;
            var2 = var3 > var6;
 629:
            if(!var2) { _fun0011_ip = 733; continue _fun0011 }
 632:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
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
            if(var3) { _fun0011_ip = 730; continue _fun0011 }
 701:
            var10 = _closure1_slot15;
            var8 = var10.substr;
            var6 = 1;
            var8 = var8.bind(var10)(var6);
            var6 = var8.startsWith;
            var3 = var6.bind(var8)(var9);
 730:
            var2 = var3;
 733:
            _closure2_slot1 = var2;
            var6 = var7.filter;
            var3 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.record;
                    var4 = _closure1_slot8;
                    var2 = var4.isBlockedOrIgnored;
                    var1 = var3.id;
                    var1 = var2.bind(var4)(var1);
                    if(var1) { _fun0016_ip = 81; continue _fun0016 }
 35:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0016_ip = 78; continue _fun0016 }
 45:
                    var4 = var3.id;
                    var6 = _closure2_slot0;
                    var3 = null;
                    var6 = var3 == var6;
                    var3 = undefined;
                    if(var6) { _fun0016_ip = 74; continue _fun0016 }
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
                var3 = 16;
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
            if(!var2) { _fun0011_ip = 799; continue _fun0011 }
 774:
            var3 = var1.unshift;
            var2 = {};
            var5 = _closure1_slot15;
            var2['text'] = var5;
            var2['user'] = var4;
            var2 = var3.bind(var1)(var2);
 799:
            return var1;
        }
    };
    var _closure1_slot42 = var6;
    var1 = function streamerModeValidator() {
        var1 = _closure1_slot12;
        var1 = var1.hidePersonalInformation;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function getInFilterAutocompletions(arg1, arg2, arg3) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var8 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = var8.startsWith;
            var3 = '"';
            var2 = var2.bind(var8)(var3);
            if(!var2) { _fun0017_ip = 43; continue _fun0017 }
 29:
            var2 = var8.endsWith;
            var2 = var2.bind(var8)(var3);
            if(var2) { _fun0017_ip = 109; continue _fun0017 }
 43:
            var2 = var8.startsWith;
            var2 = var2.bind(var8)(var3);
            var7 = var8;
            if(!var2) { _fun0017_ip = 166; continue _fun0017 }
 60:
            var3 = var8.substring;
            var2 = 1;
            var9 = var3.bind(var8)(var2);
            var6 = var9.replaceAll;
            var3 = /\\(.)/g;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var6.bind(var9)(var3, var2);
            _fun0017_ip = 166; continue _fun0017;
 109:
            var6 = var8.substring;
            var2 = var8.length;
            var3 = 1;
            var2 = var2 - var3;
            var8 = var6.bind(var8)(var3, var2);
            var6 = var8.replaceAll;
            var3 = /\\(.)/g;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var7 = var6.bind(var8)(var3, var2);
 166:
            var2 = 0;
            var6 = var7[var2];
            var2 = '#';
            var3 = var7;
            if(!(var2 === var6)) { _fun0017_ip = 197; continue _fun0017 }
 183:
            var6 = var7.substring;
            var2 = 1;
            var3 = var6.bind(var7)(var2);
 197:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 17;
            var6 = var6[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var6);
            var6 = var8.getSearchType;
            var8 = var6.bind(var8)(var5);
            var6 = _closure1_slot18;
            var6 = var6.GUILD;
            if(!(var8 !== var6)) { _fun0017_ip = 328; continue _fun0017 }
 247:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var6 = var10[var6];
            var10 = var9.bind(var2)(var6);
            var9 = var10.getIsSearchDesktopXDMExperimentEnabled;
            var6 = {};
            var11 = 'getInFilterAutocompletions';
            var6['location'] = var11;
            var6 = var9.bind(var10)(var6);
            var7 = _closure1_slot18;
            var7 = var7.DMS;
            if(!(var8 === var7)) { _fun0017_ip = 307; continue _fun0017 }
 304:
            if(var6) { _fun0017_ip = 313; continue _fun0017 }
 307:
            var6 = new Array(0);
            _fun0017_ip = 326; continue _fun0017;
 313:
            var7 = function getInFilterAutocompletionsForDMs(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var5 = arg1;
                    var4 = arg2;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var14 = 20;
                    var2 = var10[var14];
                    var8 = undefined;
                    var12 = var7.bind(var8)(var2);
                    var11 = var12.queryGroupDMs;
                    var3 = {};
                    var3['query'] = var5;
                    var3['limit'] = var4;
                    var2 = true;
                    var3['fuzzy'] = var2;
                    var9 = _closure1_slot0;
                    var2 = var10[var14];
                    var16 = var9.bind(var8)(var2);
                    var15 = var16.getBoosterMap;
                    var2 = 21;
                    var13 = var10[var2];
                    var13 = var9.bind(var8)(var13);
                    var13 = var13.AutocompleterResultTypes;
                    var13 = var13.GROUP_DM;
                    var13 = var15.bind(var16)(var13);
                    var3['boosters'] = var13;
                    var12 = var11.bind(var12)(var3);
                    var3 = var10[var14];
                    var13 = var7.bind(var8)(var3);
                    var11 = var13.queryDMChannels;
                    var3 = {};
                    var3['query'] = var5;
                    var3['limit'] = var4;
                    var14 = var10[var14];
                    var16 = var9.bind(var8)(var14);
                    var15 = var16.getBoosterMap;
                    var14 = var10[var2];
                    var14 = var9.bind(var8)(var14);
                    var14 = var14.AutocompleterResultTypes;
                    var14 = var14.USER;
                    var14 = var15.bind(var16)(var14);
                    var3['boosters'] = var14;
                    var11 = var11.bind(var13)(var3);
                    var3 = 12;
                    var3 = var10[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = var12.concat;
                    var3 = var3.bind(var12)(var11);
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.sort;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.sortByMatchScore;
                    var7 = var3.bind(var7)(var2);
                    var3 = var7.map;
                    var2 = function(arg1) {
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
                    var7 = var3.bind(var7)(var2);
                    var3 = var7.filter;
                    var2 = function(arg1) {
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
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.value;
                    var3 = var2.bind(var3)();
                    var2 = var5.trim;
                    var5 = var2.bind(var5)();
                    var2 = '';
                    if(!(var2 === var5)) { _fun0018_ip = 624; continue _fun0018 }
 309:
                    var5 = _closure1_slot10;
                    var2 = var5.getChannelId;
                    var7 = var2.bind(var5)();
                    var _closure3_slot0 = var7;
                    var5 = _closure1_slot4;
                    var2 = var5.getChannel;
                    var5 = var2.bind(var5)(var7);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0018_ip = 624; continue _fun0018 }
 350:
                    var7 = var5.isPrivate;
                    var7 = var7.bind(var5)();
                    if(!var7) { _fun0018_ip = 624; continue _fun0018 }
 366:
                    var7 = var3.findIndex;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var7.bind(var3)(var6);
                    var7 = -1;
                    if(!(var7 === var6)) { _fun0018_ip = 594; continue _fun0018 }
 397:
                    var7 = var5.isGroupDM;
                    var7 = var7.bind(var5)();
                    if(var7) { _fun0018_ip = 521; continue _fun0018 }
 410:
                    var7 = var5.isDM;
                    var7 = var7.bind(var5)();
                    if(!var7) { _fun0018_ip = 624; continue _fun0018 }
 426:
                    var7 = var5.getRecipientId;
                    var10 = var7.bind(var5)();
                    var9 = _closure1_slot13;
                    var7 = var9.getUser;
                    var9 = var7.bind(var9)(var10);
                    if(!(var2 != var9)) { _fun0018_ip = 624; continue _fun0018 }
 458:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 16;
                    var2 = var10[var2];
                    var7 = var7.bind(var8)(var2);
                    var2 = var7.getUserTag;
                    var9 = var2.bind(var7)(var9);
                    var7 = var3.unshift;
                    var2 = {};
                    var2['text'] = var9;
                    var2['channel'] = var5;
                    var9 = var5.id;
                    var2['key'] = var9;
                    var2 = var7.bind(var3)(var2);
                    _fun0018_ip = 624; continue _fun0018;
 521:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.computeChannelName;
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot8;
                    var7 = var7.bind(var8)(var5, var2, var1);
                    var2 = var3.unshift;
                    var1 = {};
                    var1['text'] = var7;
                    var1['channel'] = var5;
                    var5 = var5.id;
                    var1['key'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0018_ip = 624; continue _fun0018;
 594:
                    var2 = var3[var6];
                    var5 = var3.splice;
                    var1 = 1;
                    var1 = var5.bind(var3)(var6, var1);
                    var1 = var3.unshift;
                    var1 = var1.bind(var3)(var2);
 624:
                    var2 = var3.slice;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var6 = var7.bind(var2)(var3, var4);
 326:
            return var6;
 328:
            var1 = function getInFilterAutocompletionsForGuild(arg1, arg2, arg3) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var6 = arg1;
                    var7 = arg2;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 14;
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
                    if(var5) { _fun0021_ip = 227; continue _fun0021 }
 210:
                    var8 = var9.filter;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isThread;
                        var1 = var1.bind(var2)();
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var8.bind(var9)(var5);
 227:
                    var5 = var6.trim;
                    var6 = var5.bind(var6)();
                    var5 = '';
                    if(!(var5 === var6)) { _fun0021_ip = 324; continue _fun0021 }
 245:
                    var6 = _closure1_slot10;
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
                    if(!(var5 != var6)) { _fun0021_ip = 324; continue _fun0021 }
 287:
                    var9 = var3.splice;
                    var5 = var3.indexOf;
                    var8 = var5.bind(var3)(var6);
                    var5 = 1;
                    var5 = var9.bind(var3)(var8, var5);
                    var5 = var3.unshift;
                    var5 = var5.bind(var3)(var6);
 324:
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
            var1 = var1.bind(var2)(var3, var5, var4);
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var4 = function isSearchFilterTokenType(arg1) {
        var3 = _closure1_slot19;
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
    var7 = var8.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ANSWER_IN_REGEX;
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.ME;
    var _closure1_slot15 = var8;
    var8 = var7.SearchTokenTypes;
    var _closure1_slot16 = var8;
    var8 = var7.SEARCH_DATE_FORMAT;
    var _closure1_slot17 = var8;
    var8 = var7.SearchTypes;
    var _closure1_slot18 = var8;
    var8 = var7.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot19 = var8;
    var7 = var7.ID_REGEX;
    var _closure1_slot20 = var7;
    var12 = var5.RegExp;
    var7 = var12.prototype;
    var8 = Object.create(var7, {constructor: {value: var12}});
    var15 = '(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))';
    var11 = 'i';
    var16 = var8;
    var14 = var11;
    var7 = new var16[var12](var15, var14, var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot21 = var7;
    var8 = var5.RegExp;
    var5 = var8.prototype;
    var7 = Object.create(var5, {constructor: {value: var8}});
    var15 = '\\s*(true|false)';
    var16 = var7;
    var5 = new var16[var8](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var7;
    var _closure1_slot22 = var5;
    var5 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    var _closure1_slot23 = var5;
    var5 = {};
    var7 = 'FILTER';
    var5['FILTER'] = var7;
    var7 = 'ANSWER';
    var5['ANSWER'] = var7;
    var _closure1_slot24 = var5;
    var7 = {};
    var _closure1_slot25 = var7;
    var8 = 24;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/SearchTokens.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var7 = function getRandomDateShortcut() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 12;
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
        var3 = _closure1_slot25;
        var2 = function makeSearchTokenConfigs() {
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 13;
            var1 = var13[var8];
            var11 = undefined;
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.ZNR2fn;
            var1 = var2.bind(var3)(var1);
            var18 = new Array(9);
            var18[0] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.20uQR0;
            var1 = var2.bind(var3)(var1);
            var18[1] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.L4lxyM;
            var1 = var2.bind(var3)(var1);
            var18[2] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.AV/v6u;
            var1 = var2.bind(var3)(var1);
            var18[3] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.XM9XGB;
            var1 = var2.bind(var3)(var1);
            var18[4] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.TNLcp6;
            var1 = var2.bind(var3)(var1);
            var18[5] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.F8Wf0d;
            var1 = var2.bind(var3)(var1);
            var18[6] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.PJgX2t;
            var1 = var2.bind(var3)(var1);
            var18[7] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var13[var8];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1.nrpA5O;
            var1 = var2.bind(var3)(var1);
            var18[8] = var1;
            var _closure3_slot0 = var18;
            var1 = {};
            var5 = _closure1_slot16;
            var3 = var5.FILTER_FROM;
            var2 = {};
            var14 = _closure1_slot34;
            var6 = var13[var8];
            var6 = var12.bind(var11)(var6);
            var10 = var6.intl;
            var9 = var10.string;
            var6 = var13[var8];
            var6 = var12.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.1TUdFh;
            var6 = var9.bind(var10)(var6);
            var6 = var14.bind(var11)(var6);
            var2['regex'] = var6;
            var6 = _closure1_slot24;
            var9 = var6.FILTER;
            var2['componentType'] = var9;
            var10 = _closure1_slot33;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var16 = var9.intl;
            var15 = var16.string;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.1TUdFh;
            var9 = var15.bind(var16)(var9);
            var9 = var10.bind(var11)(var9);
            var2['key'] = var9;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var16 = var9.intl;
            var15 = var16.string;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.1TUdFh;
            var9 = var15.bind(var16)(var9);
            var2['plainText'] = var9;
            var19 = _closure1_slot43;
            var2['validator'] = var19;
            var17 = _closure1_slot42;
            var2['getAutocompletions'] = var17;
            var1[var3] = var2;
            var3 = var5.ANSWER_USERNAME_FROM;
            var2 = {};
            var15 = var5.FILTER_FROM;
            var9 = new Array(1);
            var9[0] = var15;
            var2['follows'] = var9;
            var16 = _closure1_slot23;
            var2['regex'] = var16;
            var15 = _closure1_slot35;
            var2['validator'] = var15;
            var9 = true;
            var2['mutable'] = var9;
            var20 = var6.ANSWER;
            var2['componentType'] = var20;
            var20 = 'author_id';
            var2['queryKey'] = var20;
            var1[var3] = var2;
            var3 = var5.FILTER_MENTIONS;
            var2 = {};
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var20 = var20.t;
            var20 = var20.i96lOz;
            var20 = var21.bind(var22)(var20);
            var20 = var14.bind(var11)(var20);
            var2['regex'] = var20;
            var20 = var6.FILTER;
            var2['componentType'] = var20;
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var20 = var20.t;
            var20 = var20.i96lOz;
            var20 = var21.bind(var22)(var20);
            var20 = var10.bind(var11)(var20);
            var2['key'] = var20;
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var13[var8];
            var20 = var12.bind(var11)(var20);
            var20 = var20.t;
            var20 = var20.i96lOz;
            var20 = var21.bind(var22)(var20);
            var2['plainText'] = var20;
            var2['validator'] = var19;
            var2['getAutocompletions'] = var17;
            var1[var3] = var2;
            var3 = var5.ANSWER_USERNAME_MENTIONS;
            var2 = {};
            var19 = var5.FILTER_MENTIONS;
            var17 = new Array(1);
            var17[0] = var19;
            var2['follows'] = var17;
            var2['regex'] = var16;
            var2['validator'] = var15;
            var2['mutable'] = var9;
            var15 = var6.ANSWER;
            var2['componentType'] = var15;
            var15 = 'mentions';
            var2['queryKey'] = var15;
            var1[var3] = var2;
            var3 = var5.FILTER_HAS;
            var2 = {};
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.CqCvio;
            var15 = var16.bind(var17)(var15);
            var15 = var14.bind(var11)(var15);
            var2['regex'] = var15;
            var15 = var6.FILTER;
            var2['componentType'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.CqCvio;
            var15 = var16.bind(var17)(var15);
            var15 = var10.bind(var11)(var15);
            var2['key'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.CqCvio;
            var15 = var16.bind(var17)(var15);
            var2['plainText'] = var15;
            var15 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot41;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var15;
            var1[var3] = var2;
            var3 = var5.ANSWER_HAS;
            var2 = {};
            var15 = global;
            var19 = var15.RegExp;
            var17 = var18.map;
            var16 = function(arg1) {
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
            var17 = var17.bind(var18)(var16);
            var16 = var17.join;
            var20 = '|';
            var21 = var16.bind(var17)(var20);
            var16 = var15.HermesInternal;
            var18 = var16.concat;
            var17 = '(?:\\s*-?(';
            var16 = '))';
            var26 = var18.bind(var17)(var21, var16);
            var16 = var19.prototype;
            var17 = Object.create(var16, {constructor: {value: var19}});
            var25 = 'i';
            var27 = var17;
            var16 = new var27[var19](var26, var25, var24);
            var16 = var16 instanceof Object ? var16 : var17;
            var2['regex'] = var16;
            var17 = var5.FILTER_HAS;
            var16 = new Array(1);
            var16[0] = var17;
            var2['follows'] = var16;
            var16 = _closure1_slot38;
            var2['validator'] = var16;
            var16 = var6.ANSWER;
            var2['componentType'] = var16;
            var16 = 'has';
            var2['queryKey'] = var16;
            var1[var3] = var2;
            var3 = var5.FILTER_FILE_TYPE;
            var2 = {};
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.TMNjFh;
            var16 = var17.bind(var18)(var16);
            var16 = var14.bind(var11)(var16);
            var2['regex'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.TMNjFh;
            var16 = var17.bind(var18)(var16);
            var16 = var10.bind(var11)(var16);
            var2['key'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.TMNjFh;
            var16 = var17.bind(var18)(var16);
            var2['plainText'] = var16;
            var16 = var6.FILTER;
            var2['componentType'] = var16;
            var1[var3] = var2;
            var3 = var5.ANSWER_FILE_TYPE;
            var2 = {};
            var16 = /(?:\s*([^\s]+))/;
            var2['regex'] = var16;
            var17 = var5.FILTER_FILE_TYPE;
            var16 = new Array(1);
            var16[0] = var17;
            var2['follows'] = var16;
            var2['mutable'] = var9;
            var16 = var6.ANSWER;
            var2['componentType'] = var16;
            var16 = 'attachment_extensions';
            var2['queryKey'] = var16;
            var1[var3] = var2;
            var3 = var5.FILTER_FILE_NAME;
            var2 = {};
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.5xtLRE;
            var16 = var17.bind(var18)(var16);
            var16 = var14.bind(var11)(var16);
            var2['regex'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.5xtLRE;
            var16 = var17.bind(var18)(var16);
            var16 = var10.bind(var11)(var16);
            var2['key'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.5xtLRE;
            var16 = var17.bind(var18)(var16);
            var2['plainText'] = var16;
            var16 = var6.FILTER;
            var2['componentType'] = var16;
            var1[var3] = var2;
            var3 = var5.ANSWER_FILE_NAME;
            var2 = {};
            var16 = /(?:\s*([^\s]+)(?=\s))/;
            var2['regex'] = var16;
            var17 = var5.FILTER_FILE_NAME;
            var16 = new Array(1);
            var16[0] = var17;
            var2['follows'] = var16;
            var2['mutable'] = var9;
            var16 = var6.ANSWER;
            var2['componentType'] = var16;
            var16 = 'attachment_filename';
            var2['queryKey'] = var16;
            var1[var3] = var2;
            var3 = var5.FILTER_BEFORE;
            var2 = {};
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.qZ+7BA;
            var16 = var17.bind(var18)(var16);
            var16 = var14.bind(var11)(var16);
            var2['regex'] = var16;
            var16 = var6.FILTER;
            var2['componentType'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.qZ+7BA;
            var16 = var17.bind(var18)(var16);
            var16 = var10.bind(var11)(var16);
            var2['key'] = var16;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.qZ+7BA;
            var16 = var17.bind(var18)(var16);
            var2['plainText'] = var16;
            var16 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot16;
                var2 = var1.FILTER_BEFORE;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var16;
            var1[var3] = var2;
            var3 = var5.FILTER_ON;
            var2 = {};
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.tIxkOj;
            var19 = var17.bind(var18)(var16);
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var13[var8];
            var16 = var12.bind(var11)(var16);
            var16 = var16.t;
            var16 = var16.h2NzSU;
            var24 = var17.bind(var18)(var16);
            var15 = var15.HermesInternal;
            var17 = var15.concat;
            var27 = '(';
            var23 = ')';
            var26 = var19;
            var25 = var20;
            var15 = var27[var17](var26, var25, var24, var23, var22);
            var15 = var14.bind(var11)(var15);
            var2['regex'] = var15;
            var15 = var6.FILTER;
            var2['componentType'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.h2NzSU;
            var15 = var16.bind(var17)(var15);
            var15 = var10.bind(var11)(var15);
            var2['key'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.h2NzSU;
            var15 = var16.bind(var17)(var15);
            var2['plainText'] = var15;
            var15 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot16;
                var2 = var1.FILTER_ON;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var15;
            var1[var3] = var2;
            var3 = var5.FILTER_AFTER;
            var2 = {};
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.KSDx7O;
            var15 = var16.bind(var17)(var15);
            var15 = var14.bind(var11)(var15);
            var2['regex'] = var15;
            var15 = var6.FILTER;
            var2['componentType'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.KSDx7O;
            var15 = var16.bind(var17)(var15);
            var15 = var10.bind(var11)(var15);
            var2['key'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.KSDx7O;
            var15 = var16.bind(var17)(var15);
            var2['plainText'] = var15;
            var15 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.maxResults;
                var3 = _closure1_slot40;
                var1 = _closure1_slot16;
                var2 = var1.FILTER_AFTER;
                var1 = undefined;
                var1 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var2['getAutocompletions'] = var15;
            var1[var3] = var2;
            var3 = var5.ANSWER_BEFORE;
            var2 = {};
            var15 = _closure1_slot21;
            var2['regex'] = var15;
            var17 = var5.FILTER_BEFORE;
            var16 = new Array(1);
            var16[0] = var17;
            var2['follows'] = var16;
            var16 = var6.ANSWER;
            var2['componentType'] = var16;
            var2['mutable'] = var9;
            var16 = function validator(arg1) {
                var4 = _closure1_slot36;
                var3 = undefined;
                var2 = arg1;
                var1 = 'before';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var16;
            var1[var3] = var2;
            var3 = var5.ANSWER_ON;
            var2 = {};
            var2['regex'] = var15;
            var17 = var5.FILTER_ON;
            var16 = new Array(1);
            var16[0] = var17;
            var2['follows'] = var16;
            var16 = var6.ANSWER;
            var2['componentType'] = var16;
            var2['mutable'] = var9;
            var16 = function validator(arg1) {
                var4 = _closure1_slot36;
                var3 = undefined;
                var2 = arg1;
                var1 = 'on';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var16;
            var1[var3] = var2;
            var3 = var5.ANSWER_AFTER;
            var2 = {};
            var2['regex'] = var15;
            var16 = var5.FILTER_AFTER;
            var15 = new Array(1);
            var15[0] = var16;
            var2['follows'] = var15;
            var15 = var6.ANSWER;
            var2['componentType'] = var15;
            var2['mutable'] = var9;
            var15 = function validator(arg1) {
                var4 = _closure1_slot36;
                var3 = undefined;
                var2 = arg1;
                var1 = 'after';
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['validator'] = var15;
            var1[var3] = var2;
            var3 = var5.FILTER_IN;
            var2 = {};
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.WNpFHR;
            var15 = var16.bind(var17)(var15);
            var15 = var14.bind(var11)(var15);
            var2['regex'] = var15;
            var15 = var6.FILTER;
            var2['componentType'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.WNpFHR;
            var15 = var16.bind(var17)(var15);
            var15 = var10.bind(var11)(var15);
            var2['key'] = var15;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var8];
            var15 = var12.bind(var11)(var15);
            var15 = var15.t;
            var15 = var15.WNpFHR;
            var15 = var16.bind(var17)(var15);
            var2['plainText'] = var15;
            var15 = function validator() {
                var3 = _closure1_slot9;
                var2 = var3.getCurrentSearchId;
                var6 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var2 = undefined;
                var3 = var4.bind(var2)(var1);
                var1 = var3.getSearchType;
                var3 = var1.bind(var3)(var6);
                var1 = 23;
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.isChannelFilterSupported;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var2['validator'] = var15;
            var15 = function getAutocompletions(arg1) {
                var1 = arg1;
                var5 = var1.query;
                var4 = var1.searchId;
                var3 = var1.maxResults;
                var2 = _closure1_slot44;
                var1 = undefined;
                var1 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var2['getAutocompletions'] = var15;
            var1[var3] = var2;
            var3 = var5.ANSWER_IN;
            var2 = {};
            var15 = _closure1_slot14;
            var2['regex'] = var15;
            var2['mutable'] = var9;
            var15 = var5.FILTER_IN;
            var9 = new Array(1);
            var9[0] = var15;
            var2['follows'] = var9;
            var9 = var6.ANSWER;
            var2['componentType'] = var9;
            var9 = _closure1_slot37;
            var2['validator'] = var9;
            var9 = 'channel_id';
            var2['queryKey'] = var9;
            var1[var3] = var2;
            var3 = var5.FILTER_PINNED;
            var2 = {};
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var16 = var9.intl;
            var15 = var16.string;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.0B74eX;
            var9 = var15.bind(var16)(var9);
            var9 = var14.bind(var11)(var9);
            var2['regex'] = var9;
            var9 = var6.FILTER;
            var2['componentType'] = var9;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var15 = var9.intl;
            var14 = var15.string;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.0B74eX;
            var9 = var14.bind(var15)(var9);
            var9 = var10.bind(var11)(var9);
            var2['key'] = var9;
            var9 = var13[var8];
            var9 = var12.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var13[var8];
            var8 = var12.bind(var11)(var8);
            var8 = var8.t;
            var8 = var8.0B74eX;
            var8 = var9.bind(var10)(var8);
            var2['plainText'] = var8;
            var8 = function getAutocompletions() {
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
            var2['getAutocompletions'] = var8;
            var1[var3] = var2;
            var3 = var5.ANSWER_PINNED;
            var2 = {};
            var7 = _closure1_slot22;
            var2['regex'] = var7;
            var6 = var6.ANSWER;
            var2['componentType'] = var6;
            var6 = var5.FILTER_PINNED;
            var5 = new Array(1);
            var5[0] = var6;
            var2['follows'] = var5;
            var5 = 'pinned';
            var2['queryKey'] = var5;
            var4 = function validator(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var5 = arg1;
                    var2 = var5.getMatch;
                    var1 = 1;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'true';
                    if(!(var1 !== var2)) { _fun0023_ip = 58; continue _fun0023 }
 25:
                    var1 = 'false';
                    var1 = var1 === var2;
                    if(!var1) { _fun0023_ip = 56; continue _fun0023 }
 36:
                    var4 = var5.setData;
                    var3 = 'pinned';
                    var2 = false;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = true;
 56:
                    _fun0023_ip = 78; continue _fun0023;
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
            var2['validator'] = var4;
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
    var4 = function getFilterAutocompletions(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var10 = arg1;
            var9 = arguments[1];
            var8 = undefined;
            if(!(var9 === var8)) { _fun0024_ip = 42; continue _fun0024 }
 12:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot25;
            var1 = var2.bind(var3)(var1);
            var9 = var1.length;
 42:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure1_slot25;
            var6 = var3.bind(var4)(var2);
            var2 = var6.length;
            var5 = 0;
            var2 = var5 < var2;
            var4 = 19;
            var3 = null;
            if(!var2) { _fun0024_ip = 204; continue _fun0024 }
 90:
            var13 = var6[var5];
            var2 = var1.length;
            if(!(!(var2 >= var9))) { _fun0024_ip = 204; continue _fun0024 }
 103:
            var2 = _closure1_slot25;
            var2 = var2[var13];
            var12 = var2.key;
            var2 = _closure1_slot45;
            var2 = var2.bind(var8)(var13);
            if(!var2) { _fun0024_ip = 132; continue _fun0024 }
 128:
            var2 = var3 != var12;
 132:
            if(!var2) { _fun0024_ip = 168; continue _fun0024 }
 135:
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var4];
            var14 = var14.bind(var8)(var11);
            var11 = var10.toLowerCase;
            var11 = var11.bind(var10)();
            var2 = var14.bind(var8)(var11, var12);
 168:
            if(!var2) { _fun0024_ip = 192; continue _fun0024 }
 171:
            var11 = var1.push;
            var2 = {};
            var2['token'] = var13;
            var2['text'] = var12;
            var2 = var11.bind(var1)(var2);
 192:
            var5 = var5 + 1;
            var2 = var6.length;
            if(var5 < var2) { _fun0024_ip = 90; continue _fun0024 }
 204:
            return var1;
        }
    };
    var3['getFilterAutocompletions'] = var4;
    var2 = function isMeAutcompleteAnswer(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var2 = arg1;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0025_ip = 161; continue _fun0025 }
 17:
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
            var1 = var1.Qf3ptr;
            var3 = var3.bind(var5)(var1);
            var1 = var3.startsWith;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0025_ip = 159; continue _fun0025 }
 130:
            var5 = _closure1_slot15;
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