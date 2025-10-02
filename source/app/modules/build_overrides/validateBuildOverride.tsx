// app/modules/build_overrides/validateBuildOverride.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BUILD_OVERRIDE_TARGET_NAMES;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PublicReleaseChannels;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/build_overrides/validateBuildOverride.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function validateBuildOverride(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = arg2;
            var13 = arg3;
            var4 = null;
            if(!(var4 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            if(!(var4 != var10)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var3 = var1.releaseChannel;
            var12 = var1.expiresAt;
            var9 = var1.validForUserIds;
            var17 = var1.allowedVersions;
            var6 = var1.targetBuildOverride;
            var1 = global;
            var5 = var1.Object;
            var2 = var5.keys;
            var8 = var2.bind(var5)(var6);
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 5;
            var5 = var6[var5];
            var6 = undefined;
            var7 = var7.bind(var6)(var5);
            var5 = var7.intersection;
            var5 = var5.bind(var7)(var8, var10);
            var7 = var5.length;
            var5 = 0;
            if(!(var5 !== var7)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            if(!(var4 != var3)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var7 = var1.window;
            var7 = var7.GLOBAL_ENV;
            var7 = var7.RELEASE_CHANNEL;
            if(!(var3 === var7)) { _fun0004_ip = 43; continue _fun0004 }
case 41:
            if(!(var4 != var17)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var11 = var4 == var13;
            var10 = false;
            var7 = false;
            if(var11) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var11 = var17.includes;
            var11 = var11.bind(var17)(var13);
            var7 = true;
            if(var11) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            var11 = var13.split;
            var20 = '.';
            var13 = var11.bind(var13)(var20);
            var11 = _closure1_slot3;
            var19 = 1;
            var11 = var11.bind(var6)(var13, var19);
            var18 = var11[var5];
            var11 = _closure1_slot7;
            var16 = var11.bind(var6)(var17);
            var13 = var16.bind(var6)();
            var11 = var13.done;
            var15 = 2;
            var14 = '*';
            var7 = false;
            if(var11) { _fun0004_ip = 46; continue _fun0004 }
case 49:
            var22 = var13.value;
            var11 = var22.split;
            var22 = var11.bind(var22)(var20);
            var11 = _closure1_slot3;
            var22 = var11.bind(var6)(var22, var15);
            var11 = var22[var5];
            var22 = var22[var19];
            if(!(var14 === var22)) { _fun0004_ip = 50; continue _fun0004 }
case 25:
            var7 = true;
            if(!(var18 !== var11)) { _fun0004_ip = 46; continue _fun0004 }
case 50:
            var22 = var16.bind(var6)();
            var11 = var22.done;
            var13 = var22;
            var7 = false;
            if(!var11) { _fun0004_ip = 49; continue _fun0004 }
case 46:
            if(var7) { _fun0004_ip = 44; continue _fun0004 }
case 51:
            var7 = {};
            var7['valid'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 4;
            var13 = var15[var10];
            var13 = var11.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var6)(var10);
            var10 = var10.t;
            var11 = var10.GOEF0N;
            var10 = {};
            var16 = var17.join;
            var15 = ', ';
            var15 = var16.bind(var17)(var15);
            var10['releaseChannel'] = var15;
            var10 = var13.bind(var14)(var11, var10);
            var7['reason'] = var10;
            return var7;
case 44:
            var10 = var4 != var12;
            var7 = null;
            if(!var10) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var10 = var1.Date;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var25 = var11;
            var24 = var12;
            var10 = new var25[var10](var24, var23);
            var11 = var10 instanceof Object ? var10 : var11;
            var10 = var11.getTime;
            var7 = var10.bind(var11)();
case 52:
            if(!(var4 != var7)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var10 = var1.Date;
            var4 = var10.now;
            var4 = var4.bind(var10)();
            if(!(!(var7 < var4))) { _fun0004_ip = 56; continue _fun0004 }
case 54:
            var4 = var9.length;
            if(!(var4 > var5)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var7 = var9.includes;
            var10 = _closure1_slot4;
            var4 = var10.getId;
            var4 = var4.bind(var10)();
            var4 = var7.bind(var9)(var4);
            if(var4) { _fun0004_ip = 57; continue _fun0004 }
case 59:
            var4 = {};
            var7 = false;
            var4['valid'] = var7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 4;
            var9 = var12[var7];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.qZgV0d;
            var7 = var9.bind(var10)(var7);
            var4['reason'] = var7;
            _fun0004_ip = 60; continue _fun0004;
case 57:
            var7 = {};
            var9 = true;
            var7['valid'] = var9;
            var4 = var7;
case 60:
            _fun0004_ip = 61; continue _fun0004;
case 56:
            var7 = {};
            var9 = false;
            var7['valid'] = var9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 4;
            var10 = var13[var9];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.8eRE6e;
            var9 = var10.bind(var11)(var9);
            var7['reason'] = var9;
            var4 = var7;
case 61:
            return var4;
case 43:
            var4 = _closure1_slot6;
            var4 = var4.PTB;
            if(!(var3 !== var4)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var4 = var3.charAt;
            var5 = var4.bind(var3)(var5);
            var4 = var5.toUpperCase;
            var7 = var4.bind(var5)();
            var5 = var3.slice;
            var4 = 1;
            var5 = var5.bind(var3)(var4);
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = '';
            var9 = var4.bind(var1)(var7, var5);
            _fun0004_ip = 64; continue _fun0004;
case 62:
            var1 = var3.toUpperCase;
            var9 = var1.bind(var3)();
case 64:
            var1 = {};
            var3 = false;
            var1['valid'] = var3;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var5 = var10[var3];
            var5 = var4.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.GOEF0N;
            var3 = {};
            var3['releaseChannel'] = var9;
            var3 = var5.bind(var7)(var4, var3);
            var1['reason'] = var3;
            return var1;
case 39:
            var1 = {};
            var3 = false;
            var1['valid'] = var3;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var4 = var7[var2];
            var4 = var3.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.wySUzs;
            var2 = {};
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 'unknown';
                    if(!var3) { _fun0005_ip = 3; continue _fun0005 }
case 65:
                    var1 = var2;
case 3:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.join;
            var6 = ', ';
            var6 = var7.bind(var8)(var6);
            var2['requestedTargets'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['reason'] = var2;
            return var1;
case 36:
            var1 = {};
            var2 = false;
            var1['valid'] = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.d34xi4;
            var2 = var3.bind(var4)(var2);
            var1['reason'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();