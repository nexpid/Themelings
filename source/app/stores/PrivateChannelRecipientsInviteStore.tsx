// app/stores/PrivateChannelRecipientsInviteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot31;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot31;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function reset() {
        var1 = '';
        _closure1_slot21 = var1;
        var1 = 0;
        _closure1_slot22 = var1;
        var1 = new Array(0);
        _closure1_slot23 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot26 = var1;
        var1 = false;
        _closure1_slot20 = var1;
        var3 = null;
        _closure1_slot27 = var3;
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function setLoading(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot25;
            var1 = var1 !== var3;
            if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 40:
            _closure1_slot25 = var3;
            var1 = true;
case 35:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function setQuery(arg1) {
        var2 = arg1;
        _closure1_slot21 = var2;
        var2 = 0;
        _closure1_slot22 = var2;
        var2 = _closure1_slot35;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function performQuery() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot20;
            if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 41:
            var2 = false;
            return var2;
case 36:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var2 = _closure1_slot27;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot21;
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var3 = _closure1_slot17;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var3 = null;
            var5 = var3 == var6;
            var7 = undefined;
            var2 = undefined;
            if(var5) { _fun0006_ip = 15; continue _fun0006 }
case 13:
            var5 = var6.isStaff;
            var2 = var5.bind(var6)();
case 15:
            var10 = var3 != var2;
            if(!var10) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var10 = var2;
case 44:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var6 = var5.bind(var7)(var2);
            var5 = var6.getFrictionlessGDMsEnabled;
            var2 = 'PrivateChannelRecipientsInviteStore';
            var9 = var5.bind(var6)(var2);
            if(!var9) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 17;
            var2 = var6[var2];
            var6 = var5.bind(var7)(var2);
            var5 = var6.requestMembers;
            var2 = _closure1_slot21;
            var2 = var5.bind(var6)(var3, var2);
case 46:
            if(!(var3 == var4)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var6 = new Array(0);
            _fun0006_ip = 50; continue _fun0006;
case 48:
            var6 = var4.recipients;
case 50:
            var2 = _closure1_slot19;
            if(!(var3 != var2)) { _fun0006_ip = 14; continue _fun0006 }
case 51:
            var5 = _closure1_slot19;
            var3 = var5.setQuery;
            var2 = {};
            var8 = _closure1_slot21;
            var2['query'] = var8;
            var8 = undefined;
            if(var9) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var9 = {'friends': true, 'staff': null, 'provisional': false};
            var9['staff'] = var10;
            var8 = var9;
case 52:
            var2['filters'] = var8;
            var2['blacklist'] = var6;
            var6 = _closure1_slot40;
            var6 = var6.bind(var7)();
            var2['boosters'] = var6;
            var2 = var3.bind(var5)(var2);
case 14:
            var2 = false;
            return var2;
case 42:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var3 = _closure1_slot19;
            var2 = var3.clearQuery;
            var2 = var2.bind(var3)();
case 54:
            var2 = function getDefaultResults(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot17;
                    var3 = var4.getCurrentUser;
                    var7 = var3.bind(var4)();
                    var _closure3_slot1 = var7;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.getFrictionlessGDMsEnabled;
                    var3 = 'PrivateChannelRecipientsInviteStore';
                    var4 = var4.bind(var6)(var3);
                    var _closure3_slot2 = var4;
                    var6 = _closure1_slot16;
                    var3 = var6.getFriendIDs;
                    var15 = var3.bind(var6)();
                    var10 = new Array(0);
                    var16 = var10;
                    var14 = 0;
                    var3 = arraySpread(var16, var15, var14);
                    var3 = null;
                    var9 = var10;
                    if(!(var3 != var7)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var6 = var7.isStaff;
                    var6 = var6.bind(var7)();
                    var9 = var10;
                    if(!var6) { _fun0007_ip = 56; continue _fun0007 }
case 58:
                    var11 = _closure1_slot17;
                    var8 = var11.filter;
                    var7 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isStaff;
                            var1 = var1.bind(var2)();
                            if(!var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                            var3 = var2.id;
                            var2 = _closure3_slot1;
                            var2 = var2.id;
                            var1 = var3 !== var2;
case 59:
                            return var1;
                        }
                    };
                    var6 = false;
                    var8 = var8.bind(var11)(var7, var6);
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var13 = var7.bind(var8)(var6);
                    var6 = global;
                    var8 = var6.Array;
                    var7 = var8.from;
                    var11 = var6.Set;
                    var6 = new Array(0);
                    var16 = var6;
                    var15 = var10;
                    var14 = 0;
                    var14 = arraySpread(var16, var15, var14);
                    var16 = var6;
                    var15 = var13;
                    var10 = arraySpread(var16, var15, var14);
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var17 = var10;
                    var16 = var6;
                    var6 = new var17[var11](var16, var15);
                    var6 = var6 instanceof Object ? var6 : var10;
                    var9 = var7.bind(var8)(var6);
case 56:
                    var _closure3_slot3 = var3;
                    var6 = var9;
                    if(!var4) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var4 = global;
                    var10 = var4.Set;
                    var8 = _closure1_slot15;
                    var7 = var8.getGuildIds;
                    var16 = var7.bind(var8)();
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {constructor: {value: var10}});
                    var17 = var8;
                    var7 = new var17[var10](var16, var15);
                    var7 = var7 instanceof Object ? var7 : var8;
                    _closure3_slot3 = var7;
                    var8 = _closure1_slot9;
                    var7 = var8.getUserAffinities;
                    var10 = var7.bind(var8)();
                    var8 = var10.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.otherUserId;
                        return var1;
                    };
                    var10 = var8.bind(var10)(var7);
                    var8 = var10.filter;
                    var7 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            var3 = var2 == var3;
                            var2 = undefined;
                            if(var3) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                            var1 = _closure3_slot1;
                            var2 = var1.id;
case 63:
                            var1 = arg1;
                            var1 = var1 !== var2;
                            return var1;
                        }
                    };
                    var10 = var8.bind(var10)(var7);
                    var8 = var10.filter;
                    var7 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.isBlockedOrIgnored;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var10 = var8.bind(var10)(var7);
                    var8 = var10.filter;
                    var7 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.isFriend;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var11 = var8.bind(var10)(var7);
                    var8 = var4.Array;
                    var7 = var8.from;
                    var10 = var4.Set;
                    var4 = new Array(0);
                    var16 = var4;
                    var15 = var9;
                    var14 = 0;
                    var14 = arraySpread(var16, var15, var14);
                    var16 = var4;
                    var15 = var11;
                    var9 = arraySpread(var16, var15, var14);
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var17 = var9;
                    var16 = var4;
                    var4 = new var17[var10](var16, var15);
                    var4 = var4 instanceof Object ? var4 : var9;
                    var6 = var7.bind(var8)(var4);
case 61:
                    var3 = var3 != var5;
                    if(!var3) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var4 = var5.isGroupDM;
                    var3 = var4.bind(var5)();
case 65:
                    var5 = var6;
                    if(!var3) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var4 = var6.filter;
                    var3 = function(arg1) {
                        var1 = _closure3_slot0;
                        var3 = var1.recipients;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var4.bind(var6)(var3);
case 67:
                    var4 = var5.reduce;
                    var3 = function(arg1, arg2) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot17;
                            var4 = var5.getUser;
                            var3 = arg2;
                            var8 = var4.bind(var5)(var3);
                            var7 = null;
                            if(!(var7 != var8)) { _fun0010_ip = 69; continue _fun0010 }
case 37:
                            var3 = var8.isProvisional;
                            if(var3) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                            var3 = var8.bot;
                            if(!var3) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                            var3 = var8.isStaff;
                            var3 = var3.bind(var8)();
                            if(!var3) { _fun0010_ip = 69; continue _fun0010 }
case 39:
                            var4 = _closure3_slot1;
                            if(!(var7 != var4)) { _fun0010_ip = 69; continue _fun0010 }
case 73:
                            var4 = _closure3_slot1;
                            var3 = var4.isStaff;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0010_ip = 69; continue _fun0010 }
case 71:
                            var3 = {};
                            var3['user'] = var8;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 19;
                            var4 = var6[var4];
                            var9 = undefined;
                            var5 = var5.bind(var9)(var4);
                            var4 = var5.getName;
                            var4 = var4.bind(var5)(var8);
                            var3['comparator'] = var4;
                            var5 = _closure3_slot2;
                            if(!var5) { _fun0010_ip = 74; continue _fun0010 }
case 19:
                            var5 = _closure3_slot3;
                            if(!(var7 != var5)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                            var10 = _closure1_slot16;
                            var6 = var10.isFriend;
                            var5 = var8.id;
                            var5 = var6.bind(var10)(var5);
                            if(var5) { _fun0010_ip = 74; continue _fun0010 }
case 76:
                            var6 = _closure1_slot38;
                            var5 = var8.id;
                            var2 = _closure3_slot3;
                            var2 = var6.bind(var9)(var5, var2);
                            var6 = var2.length;
                            var5 = 0;
                            if(!(var5 === var6)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                            var6 = var8.isStaff;
                            var6 = var6.bind(var8)();
                            if(!var6) { _fun0010_ip = 79; continue _fun0010 }
case 53:
                            var6 = _closure3_slot1;
                            if(!(var7 != var6)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                            var6 = _closure3_slot1;
                            var4 = var6.isStaff;
                            var4 = var4.bind(var6)();
                            if(var4) { _fun0010_ip = 77; continue _fun0010 }
case 79:
                            return var1;
case 77:
                            var4 = var2.length;
                            if(!(var4 > var5)) { _fun0010_ip = 74; continue _fun0010 }
case 81:
                            var3['mutualGuilds'] = var2;
case 74:
                            var2 = var1.push;
                            var2 = var2.bind(var1)(var3);
                            return var1;
case 69:
                            return var1;
                        }
                    };
                    var2 = new Array(0);
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.sort;
                    var1 = _closure1_slot37;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = undefined;
            var2 = var2.bind(var3)(var4);
            _closure1_slot23 = var2;
            var2 = _closure1_slot33;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function updateHasFriends() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = _closure1_slot20;
            if(var1) { _fun0011_ip = 36; continue _fun0011 }
case 41:
            var1 = false;
            return var1;
case 36:
            var2 = _closure1_slot24;
            var4 = _closure1_slot16;
            var1 = var4.getFriendCount;
            var4 = var1.bind(var4)();
            var1 = 0;
            var1 = var4 > var1;
            _closure1_slot24 = var1;
            var1 = var1 !== var2;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function sortUserList(arg1, arg2) {
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 18;
        var2 = var8[var4];
        var7 = undefined;
        var9 = var5.bind(var7)(var2);
        var3 = var9.stripDiacritics;
        var6 = _closure1_slot1;
        var1 = 19;
        var2 = var8[var1];
        var11 = var6.bind(var7)(var2);
        var10 = var11.getName;
        var2 = arg1;
        var2 = var2.user;
        var10 = var10.bind(var11)(var2);
        var2 = var10.toLocaleLowerCase;
        var2 = var2.bind(var10)();
        var3 = var3.bind(var9)(var2);
        var2 = var3.localeCompare;
        var4 = var8[var4];
        var5 = var5.bind(var7)(var4);
        var4 = var5.stripDiacritics;
        var1 = var8[var1];
        var7 = var6.bind(var7)(var1);
        var6 = var7.getName;
        var1 = arg2;
        var1 = var1.user;
        var6 = var6.bind(var7)(var1);
        var1 = var6.toLocaleLowerCase;
        var1 = var1.bind(var6)();
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function getMutualGuildsWithCurrentUser(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var10 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var8 = undefined;
            var1 = var2.bind(var8)(var1);
            var2 = var1.RestrictedGuildIds;
            var1 = var2.getSetting;
            var7 = var1.bind(var2)();
            var1 = new Array(0);
            var3 = _closure1_slot30;
            var2 = arg2;
            var6 = var3.bind(var8)(var2);
            var3 = var6.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var13 = var4.value;
            var2 = var7.includes;
            var2 = var2.bind(var7)(var13);
            var11 = var3;
            if(var2) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var12 = _closure1_slot14;
            var2 = var12.isMember;
            var2 = var2.bind(var12)(var13, var10);
            var11 = var3;
            if(!var2) { _fun0012_ip = 84; continue _fun0012 }
case 86:
            var12 = _closure1_slot15;
            var2 = var12.getGuild;
            var2 = var2.bind(var12)(var13);
            var11 = var2;
            if(!(var5 != var2)) { _fun0012_ip = 84; continue _fun0012 }
case 87:
            var12 = var1.push;
            var12 = var12.bind(var1)(var2);
            var11 = var2;
case 84:
            var12 = var6.bind(var8)();
            var2 = var12.done;
            var3 = var11;
            var4 = var12;
            if(!var2) { _fun0012_ip = 83; continue _fun0012 }
case 82:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function parseUserResults(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = var1.results;
            var2 = _closure1_slot20;
            if(!var2) { _fun0013_ip = 88; continue _fun0013 }
case 89:
            var3 = _closure1_slot21;
            var2 = '';
            if(!(var2 !== var3)) { _fun0013_ip = 88; continue _fun0013 }
case 59:
            var3 = _closure1_slot17;
            var2 = var3.getCurrentUser;
            var14 = var2.bind(var3)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var13 = undefined;
            var5 = var3.bind(var13)(var2);
            var3 = var5.getFrictionlessGDMsEnabled;
            var2 = 'PrivateChannelRecipientsInviteStore';
            var12 = var3.bind(var5)(var2);
            var11 = null;
            var10 = null;
            if(!var12) { _fun0013_ip = 90; continue _fun0013 }
case 15:
            var2 = global;
            var5 = var2.Set;
            var3 = _closure1_slot15;
            var2 = var3.getGuildIds;
            var23 = var2.bind(var3)();
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var24 = var3;
            var2 = new var24[var5](var23, var22);
            var10 = var2 instanceof Object ? var2 : var3;
case 90:
            var2 = new Array(0);
            var3 = _closure1_slot30;
            var9 = var3.bind(var13)(var4);
            var4 = var9.bind(var13)();
            var3 = var4.done;
            var8 = 0;
            var7 = var4;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            if(var3) { _fun0013_ip = 91; continue _fun0013 }
case 92:
            var3 = var7.value;
            var19 = var3.id;
            var3 = var3.comparator;
            if(!(var11 != var14)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
            var17 = var14.id;
            var16 = var5;
            var15 = var4;
            if(!(var19 !== var17)) { _fun0013_ip = 95; continue _fun0013 }
case 93:
            var18 = _closure1_slot17;
            var17 = var18.getUser;
            var18 = var17.bind(var18)(var19);
            var6 = var18;
            var16 = var5;
            var15 = var4;
            if(!(var11 != var18)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
            var17 = var18.isProvisional;
            var6 = var18;
            var16 = var5;
            var15 = var4;
            if(var17) { _fun0013_ip = 95; continue _fun0013 }
case 97:
            var17 = var18.bot;
            if(!var17) { _fun0013_ip = 98; continue _fun0013 }
case 99:
            var17 = var18.isStaff;
            var17 = var17.bind(var18)();
            var6 = var18;
            var16 = var5;
            var15 = var4;
            if(!var17) { _fun0013_ip = 95; continue _fun0013 }
case 100:
            var6 = var18;
            var16 = var5;
            var15 = var4;
            if(!(var11 != var14)) { _fun0013_ip = 95; continue _fun0013 }
case 101:
            var17 = var14.isStaff;
            var17 = var17.bind(var14)();
            var6 = var18;
            var16 = var5;
            var15 = var4;
            if(!var17) { _fun0013_ip = 95; continue _fun0013 }
case 98:
            var17 = {};
            var17['user'] = var18;
            var17['comparator'] = var3;
            var3 = var4;
            if(!var12) { _fun0013_ip = 102; continue _fun0013 }
case 103:
            var3 = var4;
            if(!(var11 != var10)) { _fun0013_ip = 102; continue _fun0013 }
case 104:
            var21 = _closure1_slot16;
            var20 = var21.isFriend;
            var19 = var18.id;
            var19 = var20.bind(var21)(var19);
            var3 = var4;
            if(var19) { _fun0013_ip = 102; continue _fun0013 }
case 105:
            var20 = _closure1_slot38;
            var19 = var18.id;
            var19 = var20.bind(var13)(var19, var10);
            var20 = var19.length;
            if(!(var8 === var20)) { _fun0013_ip = 106; continue _fun0013 }
case 107:
            var20 = var18.isStaff;
            var20 = var20.bind(var18)();
            var6 = var18;
            var16 = var17;
            var15 = var19;
            if(!var20) { _fun0013_ip = 95; continue _fun0013 }
case 108:
            var6 = var18;
            var16 = var17;
            var15 = var19;
            if(!(var11 != var14)) { _fun0013_ip = 95; continue _fun0013 }
case 109:
            var20 = var14.isStaff;
            var20 = var20.bind(var14)();
            var6 = var18;
            var16 = var17;
            var15 = var19;
            if(!var20) { _fun0013_ip = 95; continue _fun0013 }
case 106:
            var20 = var19.length;
            var3 = var19;
            if(!(var20 > var8)) { _fun0013_ip = 102; continue _fun0013 }
case 110:
            var17['mutualGuilds'] = var19;
            var3 = var19;
case 102:
            var19 = var2.push;
            var19 = var19.bind(var2)(var17);
            var15 = var3;
            var6 = var18;
            var16 = var17;
case 95:
            var17 = var9.bind(var13)();
            var3 = var17.done;
            var5 = var16;
            var4 = var15;
            var7 = var17;
            if(!var3) { _fun0013_ip = 92; continue _fun0013 }
case 91:
            _closure1_slot23 = var2;
            var2 = _closure1_slot28;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
case 88:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function getUserBoosterMap() {
        var3 = _closure1_slot13;
        var1 = var3.getFrequentlyWithoutFetchingLatest;
        var4 = var1.bind(var3)();
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot10;
                var1 = var3 instanceof var1;
                if(!var1) { _fun0014_ip = 63; continue _fun0014 }
case 40:
                var2 = var3.isDM;
                var1 = var2.bind(var3)();
case 63:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var1);
        var1 = global;
        var5 = var1.Math;
        var3 = var5.max;
        var6 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure1_slot13;
            var1 = var2.getScoreWithoutFetchingLatest;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var9 = var6.bind(var4)(var1);
        var1 = new Array(0);
        var8 = 0;
        var10 = var1;
        var6 = arraySpread(var10, var9, var8);
        var10 = var3;
        var9 = var1;
        var8 = var5;
        var1 = apply(var10, var9, var8);
        var _closure2_slot0 = var1;
        var1 = {};
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot13;
                var4 = var5.getScoreWithoutFetchingLatest;
                var2 = var3.id;
                var6 = var4.bind(var5)(var2);
                var2 = var3.getRecipientId;
                var3 = var2.bind(var3)();
                var4 = _closure1_slot16;
                var2 = var4.isFriend;
                var2 = var2.bind(var4)(var3);
                var5 = 0;
                if(!var2) { _fun0015_ip = 111; continue _fun0015 }
case 32:
                var5 = 0.2;
case 111:
                var2 = _closure1_slot11;
                var1 = var2.getDMFromUserId;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var1 = var1 != var2;
                var4 = 0;
                if(!var1) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                var4 = 0.1;
case 112:
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var6 = var6 / var1;
                var1 = 1;
                var1 = var1 + var6;
                var1 = var1 + var5;
                var1 = var1 + var4;
                var2[var3] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function createSearchContext() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0016_ip = 114; continue _fun0016 }
case 115:
            var4 = _closure1_slot19;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            var _closure1_slot19 = var2;
case 114:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 21;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getUserSearchContext;
            var2 = _closure1_slot39;
            var1 = 1000;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var11 = function handleModalActionSheetOpen(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var1 = _closure1_slot18;
            if(!(var3 === var1)) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var1 = true;
            _closure1_slot20 = var1;
            var3 = _closure1_slot36;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot41;
            var3 = var3.bind(var1)();
            _closure1_slot19 = var3;
            var3 = null;
            _closure1_slot27 = var3;
            var3 = _closure1_slot34;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
case 116:
            var1 = false;
            return var1;
        }
    };
    var10 = function handleActionSheetDismiss(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var2 = _closure1_slot18;
            if(!(var3 === var2)) { _fun0018_ip = 114; continue _fun0018 }
case 117:
            var2 = _closure1_slot42;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 114:
            var1 = false;
            return var1;
        }
    };
    var7 = function handleClose() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0019_ip = 114; continue _fun0019 }
case 115:
            var4 = _closure1_slot19;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot19 = var2;
case 114:
            var2 = _closure1_slot32;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot42 = var7;
    var1 = function performQueryOnAffinityChange() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = _closure1_slot20;
            var3 = !var1;
            if(var3) { _fun0020_ip = 8; continue _fun0020 }
case 115:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getFrictionlessGDMsEnabled;
            var1 = 'PrivateChannelRecipientsInviteStore';
            var1 = var4.bind(var5)(var1);
            var3 = !var1;
case 8:
            var1 = !var3;
            if(var3) { _fun0020_ip = 118; continue _fun0020 }
case 11:
            var3 = _closure1_slot35;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 118:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var9);
    var12 = 0;
    var9 = var6[var12];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PrivateChannelRecord;
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 10;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot14 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot15 = var9;
    var9 = 13;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot16 = var9;
    var9 = 14;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot17 = var9;
    var9 = 15;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var13 = var9.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot18 = var13;
    var9 = var9.Consents;
    var9 = false;
    var _closure1_slot20 = var9;
    var13 = '';
    var _closure1_slot21 = var13;
    var _closure1_slot22 = var12;
    var12 = new Array(0);
    var _closure1_slot23 = var12;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var9;
    var2 = var2.Set;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var17 = var9;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot26 = var2;
    var2 = null;
    var _closure1_slot27 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function PrivateChannelRecipientsInviteStoreClass() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot29;
                var1 = var1.bind(var3)();
                if(var1) { _fun0021_ip = 119; continue _fun0021 }
case 120:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0021_ip = 121; continue _fun0021;
case 119:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 121:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var12 = var4.waitFor;
            var21 = _closure1_slot11;
            var20 = _closure1_slot12;
            var19 = _closure1_slot8;
            var18 = _closure1_slot13;
            var17 = _closure1_slot14;
            var16 = _closure1_slot15;
            var15 = _closure1_slot16;
            var14 = _closure1_slot9;
            var13 = _closure1_slot17;
            var22 = var4;
            var2 = var22[var12](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
            var5 = var4.syncWith;
            var2 = _closure1_slot17;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot11;
            var3[1] = var2;
            var2 = _closure1_slot35;
            var2 = var5.bind(var4)(var3, var2);
            var5 = var4.syncWith;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot43;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot16;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot36;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getResults';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFriends';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelectedUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot21;
            var1['query'] = var3;
            var3 = _closure1_slot22;
            var1['selectedRow'] = var3;
            var3 = _closure1_slot26;
            var1['selectedUsers'] = var3;
            var3 = _closure1_slot23;
            var1['results'] = var3;
            var3 = _closure1_slot24;
            var1['hasFriends'] = var3;
            var2 = _closure1_slot25;
            var1['isLoading'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'PrivateChannelRecipientsInviteStore';
    var9['displayName'] = var2;
    var2 = 23;
    var2 = var6[var2];
    var16 = var8.bind(var1)(var2);
    var2 = {};
    var12 = function handleConnectionOpen() {
        var2 = _closure1_slot32;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var12;
    var12 = function handleGuildMembersChunkBatch() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = _closure1_slot20;
            var3 = !var1;
            if(var3) { _fun0022_ip = 8; continue _fun0022 }
case 115:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getFrictionlessGDMsEnabled;
            var1 = 'PrivateChannelRecipientsInviteStore';
            var1 = var4.bind(var5)(var1);
            var3 = !var1;
case 8:
            var1 = !var3;
            if(var3) { _fun0022_ip = 5; continue _fun0022 }
case 11:
            var4 = _closure1_slot33;
            var3 = undefined;
            var2 = false;
            var1 = var4.bind(var3)(var2);
case 5:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var12;
    var12 = function handleGuildMembersRequest(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = var1.query;
            var1 = _closure1_slot20;
            var2 = !var1;
            if(var2) { _fun0023_ip = 122; continue _fun0023 }
case 89:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.getFrictionlessGDMsEnabled;
            var1 = 'PrivateChannelRecipientsInviteStore';
            var1 = var5.bind(var6)(var1);
            var2 = !var1;
case 122:
            var1 = !var2;
            if(var2) { _fun0023_ip = 123; continue _fun0023 }
case 39:
            var5 = _closure1_slot21;
            var2 = var5.toLocaleLowerCase;
            var2 = var2.bind(var5)();
            var2 = var4 === var2;
            if(!var2) { _fun0023_ip = 71; continue _fun0023 }
case 124:
            var5 = _closure1_slot33;
            var4 = undefined;
            var3 = true;
            var2 = var5.bind(var4)(var3);
case 71:
            var1 = var2;
case 123:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_REQUEST'] = var12;
    var12 = function handleChannelSelect(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 == var2)) { _fun0024_ip = 72; continue _fun0024 }
case 117:
            var4 = _closure1_slot20;
            var5 = _closure1_slot32;
            var2 = undefined;
            var5 = var5.bind(var2)();
            _closure1_slot20 = var4;
            _closure1_slot27 = var3;
            var1 = _closure1_slot35;
            var1 = var1.bind(var2)();
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var12;
    var2['MODAL_PUSH'] = var11;
    var2['SHOW_ACTION_SHEET'] = var11;
    var11 = function handleInviteOpen(arg1) {
        var1 = true;
        _closure1_slot20 = var1;
        var3 = _closure1_slot36;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot41;
        var3 = var3.bind(var1)();
        _closure1_slot19 = var3;
        var3 = arg1;
        var3 = var3.channelId;
        _closure1_slot27 = var3;
        var3 = _closure1_slot34;
        var2 = '';
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN'] = var11;
    var2['MODAL_POP'] = var10;
    var2['HIDE_ACTION_SHEET'] = var10;
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE'] = var7;
    var7 = function handleQuery(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        _closure1_slot27 = var3;
        var3 = _closure1_slot34;
        var2 = var1.query;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY'] = var7;
    var7 = function handleSelect(arg1) {
        var1 = arg1;
        var2 = var1.row;
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT'] = var7;
    var7 = function handleAddUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot26;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot26;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_ADD_USER'] = var7;
    var7 = function handleRemoveUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot26;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot26;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var17 = var7;
    var15 = var2;
    var2 = new var17[var9](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot28 = var2;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PrivateChannelRecipientsInviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();