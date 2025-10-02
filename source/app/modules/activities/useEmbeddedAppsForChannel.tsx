// app/modules/activities/useEmbeddedAppsForChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var4 = function useEmbeddedApps(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var5;
            var3 = var8.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.applicationId;
                return var1;
            };
            var4 = var3.bind(var8)(var2);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var9 = undefined;
            var3 = var6.bind(var9)(var3);
            var7 = var3.bind(var9)(var4);
            var _closure2_slot2 = var7;
            var3 = global;
            var6 = var3.Set;
            var3 = var6.prototype;
            var4 = Object.create(var3, {constructor: {value: var6}});
            var16 = new Array(0);
            var17 = var4;
            var3 = new var17[var6](var16, var15);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure2_slot3 = var3;
            var4 = _closure1_slot8;
            var10 = var4.bind(var9)(var8);
            var6 = var10.bind(var9)();
            var4 = var6.done;
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var11 = _closure1_slot8;
            var4 = var6.value;
            var4 = var4.userIds;
            var12 = var11.bind(var9)(var4);
            var11 = var12.bind(var9)();
            var4 = var11.done;
            if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var13 = var11.value;
            var4 = var3.add;
            var4 = var4.bind(var3)(var13);
            var13 = var12.bind(var9)();
            var4 = var13.done;
            var11 = var13;
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            var11 = var10.bind(var9)();
            var4 = var11.done;
            var6 = var11;
            if(!var4) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 4;
            var4 = var10[var4];
            var10 = var6.bind(var9)(var4);
            var9 = var10.useStateFromStoresArray;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot3;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var9 = var3.value;
                    var7 = var1.push;
                    var8 = _closure1_slot5;
                    var2 = var8.getUser;
                    var2 = var2.bind(var8)(var9);
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 40:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var3, var4);
            var _closure2_slot4 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var2;
                var5 = _closure2_slot4;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = var4.id;
                        var1 = var2.bind(var3)(var1, var4);
case 42:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure2_slot2;
                        var1 = arg2;
                        var4 = var2[var1];
                        var3 = new Array(0);
                        var2 = _closure1_slot8;
                        var1 = var5.userIds;
                        var10 = undefined;
                        var9 = var2.bind(var10)(var1);
                        var6 = var9.bind(var10)();
                        var2 = var6.done;
                        var1 = null;
                        var7 = var6;
                        var6 = undefined;
                        if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var13 = var7.value;
                        var12 = _closure3_slot0;
                        var2 = var12.get;
                        var13 = var2.bind(var12)(var13);
                        var12 = var6;
                        if(!(var1 != var13)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                        var2 = _closure2_slot1;
                        var12 = var6;
                        if(!(var1 != var2)) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var10)(var13);
                        var12 = var2;
                        if(!(var1 != var2)) { _fun0007_ip = 46; continue _fun0007 }
case 49:
                        var13 = var3.push;
                        var13 = var13.bind(var3)(var2);
                        var12 = var2;
case 46:
                        var13 = var9.bind(var10)();
                        var2 = var13.done;
                        var6 = var12;
                        var7 = var13;
                        if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                        var2 = var1 == var4;
                        var1 = null;
                        if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 39:
                        var2 = {};
                        var2['embeddedActivity'] = var5;
                        var2['application'] = var4;
                        var2['userParticipantAvatarUrls'] = var3;
                        var1 = var2;
case 50:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var8 = var7[var5];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NO_ACTIVITIES;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/useEmbeddedAppsForChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useEmbeddedAppsForChannel(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot10;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 4;
        var5 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var5);
        var5 = var6.useStateFromStoresArray;
        var7 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var1)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var1 = _closure2_slot0;
                var1 = var1.id;
                if(!(var3 != var1)) { _fun0008_ip = 51; continue _fun0008 }
case 53:
                var1 = _closure2_slot0;
                var3 = var1.id;
                var1 = '';
                if(!(var1 === var3)) { _fun0008_ip = 54; continue _fun0008 }
case 51:
                var1 = _closure1_slot7;
                _fun0008_ip = 55; continue _fun0008;
case 54:
                var4 = _closure1_slot6;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 55:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2, var1);
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var5;
    var5 = function useEmbeddedAppsByChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var3 = var4[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 56; continue _fun0009 }
case 52:
                var1 = _closure1_slot7;
                _fun0009_ip = 57; continue _fun0009;
case 56:
                var4 = _closure1_slot6;
                var3 = var4.getEmbeddedActivitiesForGuild;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 57:
                return var1;
            }
        };
        var3 = var7.bind(var8)(var6, var3);
        var5 = var5.bind(var4)(var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getEmbeddedActivityLocationChannelId;
                    var2 = var6.embeddedActivity;
                    var2 = var2.location;
                    var5 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0010_ip = 58; continue _fun0010 }
case 28:
                    var7 = _closure3_slot0;
                    var4 = var7.get;
                    var4 = var4.bind(var7)(var5);
                    if(!(var3 == var4)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var4 = new Array(0);
case 59:
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var6);
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
case 58:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEmbeddedAppsByChannel'] = var5;
    var3['useEmbeddedApps'] = var4;
    var2 = function useEmbeddedAppsWithPresence(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 4;
        var4 = var9[var2];
        var7 = undefined;
        var6 = var8.bind(var7)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = var9[var2];
        var2 = var8.bind(var7)(var2);
        var11 = var2.statesWillNeverBeEqual;
        var13 = function() {
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var _closure4_slot0 = var6;
                    var5 = _closure1_slot4;
                    var4 = var5.findActivity;
                    var8 = null;
                    var7 = var8 == var6;
                    var1 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0011_ip = 35; continue _fun0011 }
case 61:
                    var7 = var6.embeddedActivity;
                    var9 = var7.userIds;
                    var7 = var9.values;
                    var9 = var7.bind(var9)();
                    var7 = var9.next;
                    var7 = var7.bind(var9)();
                    var3 = var7.value;
case 35:
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.application_id;
                            var1 = _closure4_slot0;
                            var4 = null;
                            var6 = var4 == var1;
                            var1 = undefined;
                            if(var6) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                            var3 = _closure4_slot0;
                            var3 = var3.application;
                            var4 = var4 == var3;
                            var1 = undefined;
                            if(var4) { _fun0012_ip = 62; continue _fun0012 }
case 64:
                            var1 = var3.id;
case 62:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var7 = var4.bind(var5)(var3, var2);
                    var5 = _closure3_slot0;
                    var4 = var5.set;
                    var2 = var8 == var6;
                    var3 = undefined;
                    if(var2) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var2 = var6.application;
                    var8 = var8 == var2;
                    var3 = undefined;
                    if(var8) { _fun0011_ip = 65; continue _fun0011 }
case 67:
                    var3 = var2.id;
case 65:
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var6 = 'presenceActivity';
                    var2[var6] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var15 = var6;
        var14 = var4;
        var12 = var3;
        var1 = var15[var5](var14, var13, var12, var11, var10);
        return var1;
    };
    var3['useEmbeddedAppsWithPresence'] = var2;
    return var1;
})();