// app/modules/safety_flows/usePendingParentRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserLinkStatus;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/usePendingParentRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useDerivedPendingRequests(arg1, arg2) {
        var5 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 5;
        var7 = var9[var3];
        var4 = undefined;
        var12 = var6.bind(var4)(var7);
        var11 = var12.useStateFromStores;
        var7 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var7;
        var7 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getLinkedUsers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var11.bind(var12)(var10, var7);
        var _closure2_slot2 = var7;
        var3 = var9[var3];
        var9 = var6.bind(var4)(var3);
        var6 = var9.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var1 = var2.id;
case 36:
                return var1;
            }
        };
        var6 = var6.bind(var9)(var4, var3);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var1 = _closure2_slot0;
                return var1;
case 38:
                var2 = global;
                var4 = var2.Map;
                var5 = _closure2_slot0;
                var3 = var5.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.parent_id;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var32 = var3.bind(var5)(var1);
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var33 = var3;
                var1 = new var33[var4](var32, var31);
                var14 = var1 instanceof Object ? var1 : var3;
                var1 = new Array(0);
                var4 = var2.Object;
                var3 = var4.values;
                var2 = _closure2_slot2;
                var13 = var3.bind(var4)(var2);
                var2 = var13.length;
                var12 = 0;
                var2 = var12 < var2;
                var10 = null;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var29 = var13[var12];
                var21 = var8;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                if(!(var10 != var29)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var22 = var29.link_status;
                var2 = _closure1_slot6;
                var2 = var2.PENDING;
                var21 = var8;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                if(!(var22 === var2)) { _fun0005_ip = 42; continue _fun0005 }
case 20:
                var22 = var29.requestor_id;
                var2 = _closure2_slot3;
                var21 = var8;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                if(!(var22 !== var2)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
                var23 = _closure1_slot5;
                var22 = var23.getUser;
                var2 = var29.user_id;
                var22 = var22.bind(var23)(var2);
                var23 = var14.get;
                var2 = var29.user_id;
                var2 = var23.bind(var14)(var2);
                var28 = var1.push;
                var27 = {};
                var23 = var29.user_id;
                var27['parent_id'] = var23;
                var23 = var10 == var22;
                var25 = undefined;
                if(var23) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var25 = var22.username;
case 45:
                var26 = var25;
                if(!(var10 == var25)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var24 = var10 == var2;
                var23 = undefined;
                if(var24) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var23 = var2.parent_username;
case 49:
                var26 = var23;
case 47:
                var23 = var26;
                if(!(var10 == var26)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var23 = var29.user_id;
case 51:
                var27['parent_username'] = var23;
                var24 = var10 == var22;
                var23 = undefined;
                if(var24) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var23 = var22.avatar;
case 53:
                var24 = var23;
                if(!(var10 == var23)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var31 = var10 == var2;
                var30 = undefined;
                if(var31) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var30 = var2.parent_avatar;
case 57:
                var24 = var30;
case 55:
                var31 = var10 != var24;
                var30 = null;
                if(!var31) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var30 = var24;
case 59:
                var27['parent_avatar'] = var30;
                var29 = var29.created_at;
                var27['created_at'] = var29;
                var27 = var28.bind(var1)(var27);
                var21 = var26;
                var20 = var25;
                var19 = var24;
                var18 = var23;
                var17 = var22;
                var16 = var2;
case 42:
                var12 = var12 + 1;
                var2 = var13.length;
                var8 = var21;
                var7 = var20;
                var6 = var19;
                var5 = var18;
                var4 = var17;
                var3 = var16;
                if(var12 < var2) { _fun0005_ip = 41; continue _fun0005 }
case 40:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDerivedPendingRequests'] = var4;
    var4 = function usePendingRequestListController(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var13 = var2.pendingRequests;
            var _closure2_slot0 = var13;
            var17 = var2.linkedUsersProcessed;
            var2 = var2.onActionError;
            var _closure2_slot1 = var2;
            var11 = undefined;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var11;
            var _closure2_slot8 = var11;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var5 = var3.bind(var11)(var2);
            var2 = var5.useHasMaxConnections;
            var8 = var2.bind(var5)();
            var6 = _closure1_slot3;
            var5 = var6.useState;
            var2 = null;
            var5 = var5.bind(var6)(var2);
            var2 = _closure1_slot2;
            var20 = 2;
            var2 = var2.bind(var11)(var5, var20);
            var15 = 0;
            var7 = var2[var15];
            var18 = 1;
            var2 = var2[var18];
            var _closure2_slot2 = var2;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var11)(var2);
            var3 = var4.useFamilyCenterActions;
            var2 = {};
            var5 = function onSuccess() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['onSuccess'] = var5;
            var5 = function onError() {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2['onError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.acceptLinkRequest;
            var _closure2_slot3 = var3;
            var2 = var4.declineLinkRequest;
            var _closure2_slot4 = var2;
            var6 = var4.isAcceptLoading;
            var5 = var4.isDeclineLoading;
            var4 = var6;
            if(var4) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var4 = var5;
case 61:
            _closure2_slot5 = var4;
            var21 = _closure1_slot3;
            var12 = var21.useState;
            var9 = function() {
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var9 = var12.bind(var21)(var9);
            var19 = _closure1_slot2;
            var9 = var19.bind(var11)(var9, var20);
            var10 = var9[var15];
            _closure2_slot6 = var10;
            var9 = var9[var18];
            _closure2_slot7 = var9;
            var12 = var21.useCallback;
            var10 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var1)(var2);
                        if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 31:
                        var2 = global;
                        var2 = var2.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var6 = var4;
                        var5 = var1;
                        var2 = new var6[var2](var5, var4);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var4 = var2.add;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 35:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var12 = var12.bind(var21)(var10, var9);
            _closure2_slot8 = var12;
            var10 = var21.useCallback;
            var9 = new Array(3);
            var9[0] = var4;
            var9[1] = var12;
            var9[2] = var3;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var4 = _closure2_slot8;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var2)(var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var2)(var3);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var21)(var3, var9);
            var10 = var21.useCallback;
            var9 = new Array(3);
            var9[0] = var4;
            var9[1] = var12;
            var9[2] = var2;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var4 = _closure2_slot8;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var2)(var3);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)(var3);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var21)(var2, var9);
            var9 = var21.useState;
            var9 = var9.bind(var21)(var13);
            var10 = var19.bind(var11)(var9, var20);
            var9 = var10[var15];
            var10 = var10[var18];
            var12 = var21.useState;
            var12 = var12.bind(var21)(var13);
            var12 = var19.bind(var11)(var12, var20);
            var14 = var12[var15];
            var12 = var12[var18];
            var16 = var21.useState;
            var16 = var16.bind(var21)(var17);
            var16 = var19.bind(var11)(var16, var20);
            var15 = var16[var15];
            var16 = var16[var18];
            if(!var17) { _fun0006_ip = 40; continue _fun0006 }
case 65:
            if(var15) { _fun0006_ip = 40; continue _fun0006 }
case 66:
            var15 = true;
            var15 = var16.bind(var11)(var15);
            var15 = var12.bind(var11)(var13);
            var15 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure1_slot7;
                    var6 = undefined;
                    var2 = arg1;
                    var8 = var5.bind(var6)(var2);
                    var7 = var8.bind(var6)();
                    var5 = var7.done;
                    if(var5) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var10 = var7.value;
                    var11 = _closure2_slot6;
                    var9 = var11.has;
                    var5 = var10.parent_id;
                    var5 = var9.bind(var11)(var5);
                    if(!var5) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var9 = var4.set;
                    var5 = var10.parent_id;
                    var5 = var9.bind(var4)(var5, var10);
case 69:
                    var9 = var8.bind(var6)();
                    var5 = var9.done;
                    var7 = var9;
                    if(!var5) { _fun0010_ip = 68; continue _fun0010 }
case 67:
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.parent_id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0010_ip = 72; continue _fun0010 }
case 71:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var15 = var10.bind(var11)(var15);
            _fun0006_ip = 73; continue _fun0006;
case 40:
            if(!(var13 !== var14)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var12 = var12.bind(var11)(var13);
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var1 = global;
                    var4 = var1.Map;
                    var3 = var5.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.parent_id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var10 = var3.bind(var5)(var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0011_ip = 67; continue _fun0011 }
case 75:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.parent_id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0011_ip = 75; continue _fun0011 }
case 67:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1);
case 73:
            var1 = {};
            var1['seenRequests'] = var9;
            var1['hasMaxConnections'] = var8;
            var1['actioningUserId'] = var7;
            var1['isAcceptLoading'] = var6;
            var1['isDeclineLoading'] = var5;
            var1['actionsDisabled'] = var4;
            var1['handleAccept'] = var3;
            var1['handleDecline'] = var2;
            return var1;
        }
    };
    var3['usePendingRequestListController'] = var4;
    var2 = function usePendingRequestResolution(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var7 = var3.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getLinkedUsers;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var1 = var2.link_status;
case 76:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var3, var1);
            var _closure2_slot1 = var1;
            var11 = _closure1_slot3;
            var3 = var11.useState;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var1 = _closure1_slot6;
                    var3 = var1.ACTIVE;
                    var1 = 'connected';
                    if(!(var5 !== var3)) { _fun0014_ip = 30; continue _fun0014 }
case 34:
                    var5 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                    var5 = _closure2_slot1;
                    var2 = _closure1_slot6;
                    var4 = var2.PENDING;
                    var2 = 'declined';
                    if(!(var5 === var4)) { _fun0014_ip = 80; continue _fun0014 }
case 78:
                    var2 = null;
case 80:
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            var2 = var3.bind(var11)(var2);
            var10 = _closure1_slot2;
            var9 = 2;
            var2 = var10.bind(var4)(var2, var9);
            var7 = 0;
            var3 = var2[var7];
            var8 = 1;
            var2 = var2[var8];
            var5 = var11.useState;
            var5 = var5.bind(var11)(var1);
            var5 = var10.bind(var4)(var5, var9);
            var7 = var5[var7];
            var5 = var5[var8];
            if(!(var1 !== var7)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var5 = var5.bind(var4)(var1);
            var5 = _closure1_slot6;
            var5 = var5.ACTIVE;
            if(!(var1 !== var5)) { _fun0012_ip = 21; continue _fun0012 }
case 83:
            var5 = _closure1_slot6;
            var5 = var5.PENDING;
            if(!(var1 !== var5)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var5 = null;
            var1 = var5 != var1;
            if(var1) { _fun0012_ip = 86; continue _fun0012 }
case 87:
            var5 = var5 != var7;
            if(!var5) { _fun0012_ip = 88; continue _fun0012 }
case 89:
            var6 = _closure1_slot6;
            var6 = var6.ACTIVE;
            var5 = var7 !== var6;
case 88:
            var1 = var5;
case 86:
            if(!var1) { _fun0012_ip = 81; continue _fun0012 }
case 90:
            var1 = 'declined';
            var1 = var2.bind(var4)(var1);
            _fun0012_ip = 81; continue _fun0012;
case 84:
            var1 = null;
            var1 = var2.bind(var4)(var1);
            _fun0012_ip = 81; continue _fun0012;
case 21:
            var1 = 'connected';
            var1 = var2.bind(var4)(var1);
case 81:
            var1 = 'connected';
            var2 = var1 === var3;
            var1 = 'declined';
            var3 = var1 === var3;
            var1 = {};
            var1['isConnected'] = var2;
            var1['isDeclined'] = var3;
            if(var2) { _fun0012_ip = 91; continue _fun0012 }
case 92:
            var2 = var3;
case 91:
            var1['isResolved'] = var2;
            return var1;
        }
    };
    var3['usePendingRequestResolution'] = var2;
    return var1;
})();