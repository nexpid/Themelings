// app/modules/lurker_mode/LurkerPreviewManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var5 = var7[var2];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function LurkerPreviewManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 39:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 40; continue _fun0005;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 40:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = global;
                var5 = var4.Map;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var14 = var6;
                var5 = new var14[var5](var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['timers'] = var5;
                var5 = var4.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var14 = var6;
                var5 = new var14[var5](var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['viewedLurkingGuildIds'] = var5;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var14 = var5;
                var4 = new var14[var4](var13);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['navigatedAwayFromLurkingGuildIds'] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.trackViewedLurkingGuilds;
                    var1 = var1.bind(var2)();
                    var1 = var2.evictOverflowingLurkers;
                    var1 = var1.bind(var2)();
                    var1 = var2.ensureMissingExpiries;
                    var1 = var1.bind(var2)();
                    var1 = var2.expireElapsed;
                    var1 = var1.bind(var2)();
                    var1 = var2.syncTimers;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleStoreChange'] = var4;
                var4 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = global;
                        var5 = var3.Set;
                        var4 = _closure1_slot11;
                        var2 = var4.lurkingGuildIds;
                        var11 = var2.bind(var4)();
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var12 = var4;
                        var2 = new var12[var5](var11, var10);
                        var6 = var2 instanceof Object ? var2 : var4;
                        var7 = var3.Array;
                        var5 = var7.from;
                        var4 = _closure3_slot0;
                        var4 = var4.viewedLurkingGuildIds;
                        var8 = var5.bind(var7)(var4);
                        var4 = var8.length;
                        var5 = 0;
                        var4 = var5 < var4;
                        var7 = 0;
                        if(!var4) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        var10 = var8[var7];
                        var4 = var6.has;
                        var4 = var4.bind(var6)(var10);
                        if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var4 = _closure3_slot0;
                        var9 = var4.viewedLurkingGuildIds;
                        var4 = var9.delete;
                        var4 = var4.bind(var9)(var10);
case 43:
                        var7 = var7 + 1;
                        var4 = var8.length;
                        if(var7 < var4) { _fun0006_ip = 42; continue _fun0006 }
case 41:
                        var7 = var3.Array;
                        var4 = var7.from;
                        var3 = _closure3_slot0;
                        var3 = var3.navigatedAwayFromLurkingGuildIds;
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.length;
                        var3 = var5 < var3;
                        var5 = 0;
                        if(!var3) { _fun0006_ip = 45; continue _fun0006 }
case 16:
                        var8 = var4[var5];
                        var3 = var6.has;
                        var3 = var3.bind(var6)(var8);
                        if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var3 = _closure3_slot0;
                        var7 = var3.navigatedAwayFromLurkingGuildIds;
                        var3 = var7.delete;
                        var3 = var3.bind(var7)(var8);
case 46:
                        var5 = var5 + 1;
                        var3 = var4.length;
                        if(var5 < var3) { _fun0006_ip = 16; continue _fun0006 }
case 45:
                        var4 = _closure1_slot10;
                        var3 = var4.getGuildId;
                        var4 = var3.bind(var4)();
                        var5 = _closure1_slot12;
                        var1 = _closure3_slot0;
                        var3 = var1.viewedLurkingGuildIds;
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var5 = var7.bind(var1)();
                        var3 = var5.done;
                        if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var9 = var5.value;
                        if(!(var9 !== var4)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var3 = _closure3_slot0;
                        var8 = var3.navigatedAwayFromLurkingGuildIds;
                        var3 = var8.add;
                        var3 = var3.bind(var8)(var9);
case 50:
                        var8 = var7.bind(var1)();
                        var3 = var8.done;
                        var5 = var8;
                        if(!var3) { _fun0006_ip = 49; continue _fun0006 }
case 48:
                        var3 = null;
                        var3 = var3 != var4;
                        if(!var3) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                        var5 = var6.has;
                        var3 = var5.bind(var6)(var4);
case 52:
                        if(!var3) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                        var2 = _closure3_slot0;
                        var3 = var2.viewedLurkingGuildIds;
                        var2 = var3.add;
                        var2 = var2.bind(var3)(var4);
case 54:
                        return var1;
                    }
                };
                var1['trackViewedLurkingGuilds'] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot11;
                        var2 = var3.lurkingGuildIds;
                        var4 = var2.bind(var3)();
                        var3 = var4.length;
                        var2 = 3;
                        if(!(!(var3 <= var2))) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getMobileLurkerServerPreview;
                        var1 = 'LurkerPreviewManager.evictOverflowingLurkers';
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.stickyLurk;
                        if(!var1) { _fun0007_ip = 56; continue _fun0007 }
case 58:
                        var1 = var4.length;
                        var3 = var1 - var2;
                        var2 = var4.slice;
                        var1 = 0;
                        var3 = var2.bind(var4)(var1, var3);
                        var2 = _closure3_slot0;
                        var1 = var2.expireLurkerPreviews;
                        var1 = var1.bind(var2)(var3);
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['evictOverflowingLurkers'] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = _closure1_slot11;
                        var3 = var4.lurkingGuildIds;
                        var5 = var3.bind(var4)();
                        var4 = var5.length;
                        var3 = 0;
                        if(!(var3 !== var4)) { _fun0008_ip = 59; continue _fun0008 }
case 33:
                        var6 = _closure1_slot11;
                        var4 = var6.getLurkingPreviewExpirations;
                        var4 = var4.bind(var6)();
                        var _closure4_slot0 = var4;
                        var6 = _closure1_slot10;
                        var4 = var6.getGuildId;
                        var4 = var4.bind(var6)();
                        var _closure4_slot1 = var4;
                        var4 = var5.filter;
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var4 = arg1;
                                var1 = _closure4_slot0;
                                var3 = var1[var4];
                                var1 = null;
                                var1 = var1 == var3;
                                if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 31:
                                var2 = _closure4_slot1;
                                var1 = var4 !== var2;
case 60:
                                if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                                var2 = _closure3_slot0;
                                var3 = var2.viewedLurkingGuildIds;
                                var2 = var3.has;
                                var1 = var2.bind(var3)(var4);
case 61:
                                return var1;
                            }
                        };
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.length;
                        var2 = var3 !== var2;
                        if(!var2) { _fun0008_ip = 63; continue _fun0008 }
case 11:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.getMobileLurkerServerPreview;
                        var3 = 'LurkerPreviewManager.ensureMissingExpiries';
                        var3 = var5.bind(var6)(var3);
                        var2 = var3.stickyLurk;
case 63:
                        if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 64:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'LURKER_PREVIEW_SET_EXPIRY';
                        var1['type'] = var5;
                        var1['guildIds'] = var4;
                        var4 = global;
                        var5 = var4.Date;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = 60000;
                        var4 = var5 + var4;
                        var1['expiresAt'] = var4;
                        var1 = var2.bind(var3)(var1);
case 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['ensureMissingExpiries'] = var4;
                var4 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure1_slot11;
                        var2 = var3.getLurkingPreviewExpirations;
                        var9 = var2.bind(var3)();
                        var3 = _closure1_slot10;
                        var2 = var3.getGuildId;
                        var8 = var2.bind(var3)();
                        var2 = _closure1_slot9;
                        var1 = var2.getGuildId;
                        var7 = var1.bind(var2)();
                        var1 = global;
                        var3 = var1.Date;
                        var2 = var3.now;
                        var6 = var2.bind(var3)();
                        var3 = new Array(0);
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var5 = var1.bind(var2)(var9);
                        var1 = var5.length;
                        var2 = 0;
                        var1 = var2 < var1;
                        var4 = 0;
                        if(!var1) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                        var10 = var5[var4];
                        if(!(var10 !== var8)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                        var1 = var10 !== var7;
                        if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                        var11 = var9[var10];
                        var1 = var11 <= var6;
case 69:
                        if(!var1) { _fun0010_ip = 67; continue _fun0010 }
case 71:
                        var1 = var3.push;
                        var1 = var1.bind(var3)(var10);
case 67:
                        var4 = var4 + 1;
                        var1 = var5.length;
                        if(var4 < var1) { _fun0010_ip = 66; continue _fun0010 }
case 65:
                        var1 = var3.length;
                        if(!(var1 > var2)) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                        var2 = _closure3_slot0;
                        var1 = var2.expireLurkerPreviews;
                        var1 = var1.bind(var2)(var3);
case 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['expireElapsed'] = var4;
                var4 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = _closure1_slot11;
                        var1 = var2.getLurkingPreviewExpirations;
                        var6 = var1.bind(var2)();
                        var _closure4_slot0 = var6;
                        var2 = global;
                        var5 = var2.Array;
                        var4 = var5.from;
                        var1 = _closure3_slot0;
                        var7 = var1.timers;
                        var1 = var7.keys;
                        var1 = var1.bind(var7)();
                        var10 = var4.bind(var5)(var1);
                        var1 = var10.length;
                        var5 = 0;
                        var4 = var5 < var1;
                        var1 = undefined;
                        var9 = null;
                        var8 = 0;
                        var7 = undefined;
                        if(!var4) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                        var14 = var10[var8];
                        var4 = var6[var14];
                        if(!(var9 == var4)) { _fun0011_ip = 73; continue _fun0011 }
case 76:
                        var4 = _closure3_slot0;
                        var12 = var4.timers;
                        var4 = var12.get;
                        var4 = var4.bind(var12)(var14);
                        if(!(var9 != var4)) { _fun0011_ip = 77; continue _fun0011 }
case 69:
                        var12 = var2.clearTimeout;
                        var12 = var12.bind(var1)(var4);
case 77:
                        var12 = _closure3_slot0;
                        var13 = var12.timers;
                        var12 = var13.delete;
                        var12 = var12.bind(var13)(var14);
                        var7 = var4;
case 73:
                        var8 = var8 + 1;
                        var4 = var10.length;
                        if(var8 < var4) { _fun0011_ip = 75; continue _fun0011 }
case 74:
                        var4 = function _loop(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var5 = arg1;
                                var _closure5_slot0 = var5;
                                var1 = _closure3_slot0;
                                var4 = var1.timers;
                                var1 = var4.has;
                                var1 = var1.bind(var4)(var5);
                                if(var1) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                                var1 = _closure4_slot0;
                                var6 = var1[var5];
                                var1 = global;
                                var7 = var1.Date;
                                var4 = var7.now;
                                var4 = var4.bind(var7)();
                                if(!(!(var6 <= var4))) { _fun0012_ip = 79; continue _fun0012 }
case 30:
                                var7 = var1.Date;
                                var4 = var7.now;
                                var4 = var4.bind(var7)();
                                var6 = var6 - var4;
                                var4 = var1.setTimeout;
                                var1 = undefined;
                                var3 = function() {
                                    var2 = _closure3_slot0;
                                    var4 = var2.timers;
                                    var3 = var4.delete;
                                    var1 = _closure5_slot0;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = var2.handleStoreChange;
                                    var1 = var1.bind(var2)();
                                    var1 = undefined;
                                    return var1;
                                };
                                var4 = var4.bind(var1)(var3, var6);
                                var2 = _closure3_slot0;
                                var3 = var2.timers;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var5, var4);
                                return var1;
case 79:
                                var1 = 0;
                                return var1;
case 77:
                                var1 = 0;
                                return var1;
                            }
                        };
                        var3 = var2.Object;
                        var2 = var3.keys;
                        var3 = var2.bind(var3)(var6);
                        var2 = var3.length;
                        var2 = var5 < var2;
                        var5 = 0;
                        if(!var2) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                        var2 = var3[var5];
                        var2 = var4.bind(var1)(var2);
                        var5 = var5 + 1;
                        var2 = var3.length;
                        if(var5 < var2) { _fun0011_ip = 81; continue _fun0011 }
case 80:
                        return var1;
                    }
                };
                var1['syncTimers'] = var4;
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                StartGenerator();
                                var6 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                                var2 = global;
                                var4 = var2.Promise;
                                var3 = var4.all;
                                var5 = var6.map;
                                var2 = function(arg1) {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.stopLurkingForGuild;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var2 = var5.bind(var6)(var2);
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=50);
case 84:
                                return var2;
case 85:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0013_ip = 7; continue _fun0013 }
case 28:
                                var3 = undefined;
                                return var3;
case 7:
                                return var2;
case 82:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['expireLurkerPreviews'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'hasNavigatedAway';
        var5['key'] = var1;
        var1 = function hasNavigatedAway(arg1) {
            var1 = this;
            var3 = var1.navigatedAwayFromLurkingGuildIds;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = '_initialize';
        var5['key'] = var7;
        var7 = function _initialize() {
            var2 = this;
            var5 = _closure1_slot11;
            var4 = var5.addChangeListener;
            var3 = var2.handleStoreChange;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot10;
            var4 = var5.addChangeListener;
            var3 = var2.handleStoreChange;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot9;
            var3 = var4.addChangeListener;
            var1 = var2.handleStoreChange;
            var1 = var3.bind(var4)(var1);
            var1 = var2.handleStoreChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function _terminate() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot11;
                var4 = var5.removeChangeListener;
                var3 = var2.handleStoreChange;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot10;
                var4 = var5.removeChangeListener;
                var3 = var2.handleStoreChange;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot9;
                var4 = var5.removeChangeListener;
                var3 = var2.handleStoreChange;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot12;
                var3 = var2.timers;
                var1 = var3.values;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.bind(var1)();
                var3 = var4.done;
                var5 = global;
                if(var3) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                var7 = var4.value;
                var3 = var5.clearTimeout;
                var3 = var3.bind(var1)(var7);
                var7 = var6.bind(var1)();
                var3 = var7.done;
                var4 = var7;
                if(!var3) { _fun0014_ip = 87; continue _fun0014 }
case 86:
                var4 = var2.timers;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
                var4 = var2.viewedLurkingGuildIds;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
                var3 = var2.navigatedAwayFromLurkingGuildIds;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/lurker_mode/LurkerPreviewManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = 60000;
    var3['LURKER_PREVIEW_PERSIST_MS'] = var4;
    var3['LURKER_PREVIEW_MAX_CONCURRENT'] = var2;
    return var1;
})();