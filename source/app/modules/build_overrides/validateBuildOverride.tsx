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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
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
 0:
            var1 = arg1;
            var10 = arg2;
            var13 = arg3;
            var4 = null;
            if(!(var4 != var1)) { _fun0004_ip = 957; continue _fun0004 }
 18:
            if(!(var4 != var10)) { _fun0004_ip = 957; continue _fun0004 }
 25:
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
            if(!(var5 !== var7)) { _fun0004_ip = 841; continue _fun0004 }
 126:
            if(!(var4 != var3)) { _fun0004_ip = 155; continue _fun0004 }
 130:
            var7 = var1.window;
            var7 = var7.GLOBAL_ENV;
            var7 = var7.RELEASE_CHANNEL;
            if(!(var3 === var7)) { _fun0004_ip = 681; continue _fun0004 }
 155:
            if(!(var4 != var17)) { _fun0004_ip = 408; continue _fun0004 }
 162:
            var11 = var4 == var13;
            var10 = false;
            var7 = false;
            if(var11) { _fun0004_ip = 312; continue _fun0004 }
 176:
            var11 = var17.includes;
            var11 = var11.bind(var17)(var13);
            var7 = true;
            if(var11) { _fun0004_ip = 312; continue _fun0004 }
 191:
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
            if(var11) { _fun0004_ip = 312; continue _fun0004 }
 252:
            var22 = var13.value;
            var11 = var22.split;
            var22 = var11.bind(var22)(var20);
            var11 = _closure1_slot3;
            var22 = var11.bind(var6)(var22, var15);
            var11 = var22[var5];
            var22 = var22[var19];
            if(!(var14 === var22)) { _fun0004_ip = 295; continue _fun0004 }
 289:
            var7 = true;
            if(!(var18 !== var11)) { _fun0004_ip = 312; continue _fun0004 }
 295:
            var22 = var16.bind(var6)();
            var11 = var22.done;
            var13 = var22;
            var7 = false;
            if(!var11) { _fun0004_ip = 252; continue _fun0004 }
 312:
            if(var7) { _fun0004_ip = 408; continue _fun0004 }
 315:
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
 408:
            var10 = var4 != var12;
            var7 = null;
            if(!var10) { _fun0004_ip = 456; continue _fun0004 }
 417:
            var10 = var1.Date;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var25 = var11;
            var24 = var12;
            var10 = new var25[var10](var24, var23);
            var11 = var10 instanceof Object ? var10 : var11;
            var10 = var11.getTime;
            var7 = var10.bind(var11)();
 456:
            if(!(var4 != var7)) { _fun0004_ip = 482; continue _fun0004 }
 460:
            var10 = var1.Date;
            var4 = var10.now;
            var4 = var4.bind(var10)();
            if(!(!(var7 < var4))) { _fun0004_ip = 605; continue _fun0004 }
 482:
            var4 = var9.length;
            if(!(var4 > var5)) { _fun0004_ip = 591; continue _fun0004 }
 491:
            var7 = var9.includes;
            var10 = _closure1_slot4;
            var4 = var10.getId;
            var4 = var4.bind(var10)();
            var4 = var7.bind(var9)(var4);
            if(var4) { _fun0004_ip = 591; continue _fun0004 }
 518:
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
            _fun0004_ip = 603; continue _fun0004;
 591:
            var7 = {};
            var9 = true;
            var7['valid'] = var9;
            var4 = var7;
 603:
            _fun0004_ip = 679; continue _fun0004;
 605:
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
 679:
            return var4;
 681:
            var4 = _closure1_slot6;
            var4 = var4.PTB;
            if(!(var3 !== var4)) { _fun0004_ip = 752; continue _fun0004 }
 695:
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
            _fun0004_ip = 762; continue _fun0004;
 752:
            var1 = var3.toUpperCase;
            var9 = var1.bind(var3)();
 762:
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
 841:
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
 0:
                    var2 = _closure1_slot5;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 'unknown';
                    if(!var3) { _fun0005_ip = 30; continue _fun0005 }
 27:
                    var1 = var2;
 30:
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
 957:
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