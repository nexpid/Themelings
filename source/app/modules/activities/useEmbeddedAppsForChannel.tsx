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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function useEmbeddedApps(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var4) { _fun0004_ip = 201; continue _fun0004 }
 124:
            var11 = _closure1_slot8;
            var4 = var6.value;
            var4 = var4.userIds;
            var12 = var11.bind(var9)(var4);
            var11 = var12.bind(var9)();
            var4 = var11.done;
            if(var4) { _fun0004_ip = 186; continue _fun0004 }
 156:
            var13 = var11.value;
            var4 = var3.add;
            var4 = var4.bind(var3)(var13);
            var13 = var12.bind(var9)();
            var4 = var13.done;
            var11 = var13;
            if(!var4) { _fun0004_ip = 156; continue _fun0004 }
 186:
            var11 = var10.bind(var9)();
            var4 = var11.done;
            var6 = var11;
            if(!var4) { _fun0004_ip = 124; continue _fun0004 }
 201:
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
 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot3;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0005_ip = 82; continue _fun0005 }
 37:
                    var9 = var3.value;
                    var7 = var1.push;
                    var8 = _closure1_slot5;
                    var2 = var8.getUser;
                    var2 = var2.bind(var8)(var9);
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0005_ip = 37; continue _fun0005 }
 82:
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
 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 32; continue _fun0006 }
 9:
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = var4.id;
                        var1 = var2.bind(var3)(var1, var4);
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                        if(var2) { _fun0007_ip = 147; continue _fun0007 }
 63:
                        var13 = var7.value;
                        var12 = _closure3_slot0;
                        var2 = var12.get;
                        var13 = var2.bind(var12)(var13);
                        var12 = var6;
                        if(!(var1 != var13)) { _fun0007_ip = 129; continue _fun0007 }
 89:
                        var2 = _closure2_slot1;
                        var12 = var6;
                        if(!(var1 != var2)) { _fun0007_ip = 129; continue _fun0007 }
 100:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var10)(var13);
                        var12 = var2;
                        if(!(var1 != var2)) { _fun0007_ip = 129; continue _fun0007 }
 116:
                        var13 = var3.push;
                        var13 = var13.bind(var3)(var2);
                        var12 = var2;
 129:
                        var13 = var9.bind(var10)();
                        var2 = var13.done;
                        var6 = var12;
                        var7 = var13;
                        if(!var2) { _fun0007_ip = 63; continue _fun0007 }
 147:
                        var2 = var1 == var4;
                        var1 = null;
                        if(var2) { _fun0007_ip = 177; continue _fun0007 }
 156:
                        var2 = {};
                        var2['embeddedActivity'] = var5;
                        var2['application'] = var4;
                        var2['userParticipantAvatarUrls'] = var3;
                        var1 = var2;
 177:
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
 0:
                var1 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var1)) { _fun0008_ip = 43; continue _fun0008 }
 13:
                var1 = _closure2_slot0;
                var1 = var1.id;
                if(!(var3 != var1)) { _fun0008_ip = 43; continue _fun0008 }
 26:
                var1 = _closure2_slot0;
                var3 = var1.id;
                var1 = '';
                if(!(var1 === var3)) { _fun0008_ip = 52; continue _fun0008 }
 43:
                var1 = _closure1_slot7;
                _fun0008_ip = 79; continue _fun0008;
 52:
                var4 = _closure1_slot6;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
 79:
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
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 22; continue _fun0009 }
 13:
                var1 = _closure1_slot7;
                _fun0009_ip = 44; continue _fun0009;
 22:
                var4 = _closure1_slot6;
                var3 = var4.getEmbeddedActivitiesForGuild;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 44:
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
 0:
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
                    if(!(var3 != var5)) { _fun0010_ip = 106; continue _fun0010 }
 56:
                    var7 = _closure3_slot0;
                    var4 = var7.get;
                    var4 = var4.bind(var7)(var5);
                    if(!(var3 == var4)) { _fun0010_ip = 81; continue _fun0010 }
 77:
                    var4 = new Array(0);
 81:
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var6);
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
 106:
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
 0:
                    var6 = arg1;
                    var _closure4_slot0 = var6;
                    var5 = _closure1_slot4;
                    var4 = var5.findActivity;
                    var8 = null;
                    var7 = var8 == var6;
                    var1 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0011_ip = 70; continue _fun0011 }
 35:
                    var7 = var6.embeddedActivity;
                    var9 = var7.userIds;
                    var7 = var9.values;
                    var9 = var7.bind(var9)();
                    var7 = var9.next;
                    var7 = var7.bind(var9)();
                    var3 = var7.value;
 70:
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.application_id;
                            var1 = _closure4_slot0;
                            var4 = null;
                            var6 = var4 == var1;
                            var1 = undefined;
                            if(var6) { _fun0012_ip = 50; continue _fun0012 }
 27:
                            var3 = _closure4_slot0;
                            var3 = var3.application;
                            var4 = var4 == var3;
                            var1 = undefined;
                            if(var4) { _fun0012_ip = 50; continue _fun0012 }
 45:
                            var1 = var3.id;
 50:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var7 = var4.bind(var5)(var3, var2);
                    var5 = _closure3_slot0;
                    var4 = var5.set;
                    var2 = var8 == var6;
                    var3 = undefined;
                    if(var2) { _fun0011_ip = 123; continue _fun0011 }
 104:
                    var2 = var6.application;
                    var8 = var8 == var2;
                    var3 = undefined;
                    if(var8) { _fun0011_ip = 123; continue _fun0011 }
 118:
                    var3 = var2.id;
 123:
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