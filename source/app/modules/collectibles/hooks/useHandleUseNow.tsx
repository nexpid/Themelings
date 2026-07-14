// app/modules/collectibles/hooks/useHandleUseNow.tsx
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useHandleUseNow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandleUseNow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.product;
            var _closure2_slot0 = var1;
            var10 = var2.onSuccess;
            var _closure2_slot1 = var10;
            var8 = var2.onError;
            var _closure2_slot2 = var8;
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = false;
            var6 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var15 = undefined;
            var2 = 2;
            var6 = var3.bind(var15)(var6, var2);
            var2 = 0;
            var3 = var6[var2];
            var2 = 1;
            var2 = var6[var2];
            var _closure2_slot3 = var2;
            var16 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 5;
            var2 = var6[var2];
            var9 = var16.bind(var15)(var2);
            var2 = var9.useShopProductItems;
            var2 = var2.bind(var9)(var1);
            var14 = var2.firstAvatarDecoration;
            var _closure2_slot4 = var14;
            var13 = var2.firstProfileEffect;
            var _closure2_slot5 = var13;
            var12 = var2.firstNameplate;
            var _closure2_slot6 = var12;
            var11 = var2.firstProfileFrame;
            var _closure2_slot7 = var11;
            var9 = var1.type;
            var2 = 3;
            var6 = var6[var2];
            var6 = var16.bind(var15)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.AVATAR_DECORATION;
            if(!(var6 !== var9)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var16 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var16.bind(var15)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.NAMEPLATE;
            if(!(var6 !== var9)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var16 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var16.bind(var15)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.PROFILE_FRAME;
            if(!(var6 !== var9)) { _fun0004_ip = 40; continue _fun0004 }
case 24:
            var16 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var16.bind(var15)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.PROFILE_EFFECT;
            if(!(var6 !== var9)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var2 = var17[var2];
            var2 = var16.bind(var15)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            var2 = 4;
            var6 = var17[var2];
            var6 = var16.bind(var15)(var6);
            var9 = var6.intl;
            var6 = var9.string;
            var2 = var17[var2];
            var2 = var16.bind(var15)(var2);
            var2 = var2.t;
            var2 = var2.tf1ZZ4;
            var9 = var6.bind(var9)(var2);
            _fun0004_ip = 43; continue _fun0004;
case 41:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var2 = 4;
            var6 = var18[var2];
            var6 = var17.bind(var15)(var6);
            var16 = var6.intl;
            var6 = var16.string;
            var2 = var18[var2];
            var2 = var17.bind(var15)(var2);
            var2 = var2.t;
            var2 = var2.SWm2ai;
            var9 = var6.bind(var16)(var2);
            _fun0004_ip = 43; continue _fun0004;
case 40:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var2 = 4;
            var6 = var18[var2];
            var6 = var17.bind(var15)(var6);
            var16 = var6.intl;
            var6 = var16.string;
            var2 = var18[var2];
            var2 = var17.bind(var15)(var2);
            var2 = var2.t;
            var2 = var2.lOF4zR;
            var9 = var6.bind(var16)(var2);
            _fun0004_ip = 43; continue _fun0004;
case 38:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var2 = 4;
            var6 = var18[var2];
            var6 = var17.bind(var15)(var6);
            var16 = var6.intl;
            var6 = var16.string;
            var2 = var18[var2];
            var2 = var17.bind(var15)(var2);
            var2 = var2.t;
            var2 = var2.gOzMvx;
            var9 = var6.bind(var16)(var2);
            _fun0004_ip = 43; continue _fun0004;
case 36:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var2 = 4;
            var6 = var18[var2];
            var6 = var17.bind(var15)(var6);
            var16 = var6.intl;
            var6 = var16.string;
            var2 = var18[var2];
            var2 = var17.bind(var15)(var2);
            var2 = var2.t;
            var2 = var2.zOA4ax;
            var9 = var6.bind(var16)(var2);
case 43:
            var6 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var5 = var2.type;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 3;
                    var1 = var6[var1];
                    var8 = undefined;
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.CollectiblesItemType;
                    var4 = var1.BUNDLE;
                    var1 = true;
                    if(!(var5 === var4)) { _fun0005_ip = 44; continue _fun0005 }
case 4:
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var12 = var5;
                    var4 = new var12[var4](var11);
                    var6 = var4 instanceof Object ? var4 : var5;
                    var3 = _closure1_slot5;
                    var2 = var2.items;
                    var5 = var3.bind(var8)(var2);
                    var3 = var5.bind(var8)();
                    var2 = var3.done;
                    var1 = true;
                    if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var2 = var3.value;
                    var10 = var6.has;
                    var9 = var2.type;
                    var9 = var10.bind(var6)(var9);
                    var1 = false;
                    if(var9) { _fun0005_ip = 44; continue _fun0005 }
case 46:
                    var9 = var6.add;
                    var2 = var2.type;
                    var2 = var9.bind(var6)(var2);
                    var9 = var5.bind(var8)();
                    var2 = var9.done;
                    var3 = var9;
                    var1 = true;
                    if(!var2) { _fun0005_ip = 45; continue _fun0005 }
case 44:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var1, var2);
            var _closure2_slot8 = var2;
            var1 = {};
            var6 = var7.useCallback;
            var5 = _closure1_slot2;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                        var5 = undefined;
                        var6 = undefined;
                        var4 = _closure2_slot8;
                        if(!var4) { _fun0006_ip = 41; continue _fun0006 }
case 49:
                        var7 = _closure2_slot3;
                        var4 = true;
                        var4 = var7.bind(var5)(var4);
                        var6 = {};
case 50: // try_start_0 // try_start_1
                        var4 = _closure2_slot4;
                        var8 = null;
                        if(!(var8 != var4)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                        var7 = var6;
                        var4 = _closure2_slot4;
                        var7['avatarDecoration'] = var4;
case 51:
                        var4 = _closure2_slot5;
                        if(!(var8 == var4)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                        var4 = _closure2_slot7;
                        if(!(var8 != var4)) { _fun0006_ip = 55; continue _fun0006 }
case 53:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var7 = 6;
                        var7 = var10[var7];
                        var10 = var9.bind(var5)(var7);
                        var9 = var10.getProfileChangesForUpdateRequest;
                        var7 = {};
                        var11 = _closure2_slot5;
                        var12 = var8 != var11;
                        var11 = undefined;
                        if(!var12) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                        var11 = _closure2_slot5;
case 56:
                        var7['pendingProfileEffect'] = var11;
                        var11 = _closure2_slot7;
                        var12 = var8 != var11;
                        var11 = undefined;
                        if(!var12) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                        var11 = _closure2_slot7;
case 58:
                        var7['pendingProfileFrame'] = var11;
                        var9 = var9.bind(var10)(var7);
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 7;
                        var4 = var10[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.saveProfileChanges;
                        var4 = var4.bind(var7)(var9);
                        SaveGenerator(address=197);
case 20:
                        return var4;
case 60:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0006_ip = 61; continue _fun0006 }
case 55:
                        var7 = _closure2_slot6;
                        if(!(var8 != var7)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                        var9 = var6;
                        var7 = _closure2_slot6;
                        var9['nameplate'] = var7;
case 62:
                        var7 = global;
                        var10 = var7.Object;
                        var9 = var10.keys;
                        var7 = var6;
                        var7 = var9.bind(var10)(var7);
                        var9 = var7.length;
                        var7 = 0;
                        if(!(var9 > var7)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var7 = 8;
                        var7 = var10[var7];
                        var9 = var9.bind(var5)(var7);
                        var7 = var9.saveProfileAndAccountChanges;
                        var6 = var7.bind(var9)(var6);
                        SaveGenerator(address=297);
case 66:
                        return var6;
case 67:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0006_ip = 68; continue _fun0006 }
case 64:
                        var7 = _closure2_slot1;
                        if(!(var8 != var7)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                        var7 = _closure2_slot1;
                        var7 = var7.bind(var5)();
case 69: // try_end0
                        _fun0006_ip = 71; continue _fun0006;
case 68: // try_end1
                        var8 = _closure2_slot3;
                        var7 = false;
                        var7 = var8.bind(var5)(var7);
                        return var6;
case 61:
                        var7 = _closure2_slot3;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        return var4;
case 72: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot2;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0006_ip = 71; continue _fun0006 }
case 73:
                        var4 = _closure2_slot2;
                        var2 = var4.bind(var5)(var2);
case 71: // try_end2
                        var4 = _closure2_slot3;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
case 41:
                        return var5;
case 74: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 47:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var15)(var4);
            var4 = new Array(8);
            var4[0] = var2;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var11;
            var4[5] = var10;
            var4[6] = var9;
            var4[7] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var1['handleUseNow'] = var4;
            var1['isApplying'] = var3;
            var1['canUseNow'] = var2;
            return var1;
        }
    };
    var3['useHandleUseNow'] = var2;
    return var1;
})();