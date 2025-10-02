// discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.defaultVideoQualityOptions;
    var _closure1_slot2 = var7;
    var7 = var4.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot3 = var7;
    var7 = var4.VIDEO_QUALITY_FRAMERATE_MUTED_2;
    var _closure1_slot4 = var7;
    var4 = var4.VIDEO_QUALITY_FRAMERATE_MUTED;
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = function MediaSinkWantsLadder() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var4 = _closure1_slot2;
case 36:
                var6 = _closure1_slot0;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var4 = var4.videoBudget;
                var5 = var4.width;
                var4 = var4.height;
                var6 = 0;
                if(!(!(var5 <= var6))) { _fun0004_ip = 38; continue _fun0004 }
case 7:
                if(!(!(var4 <= var6))) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var4 = var5 * var4;
                var3['pixelBudget'] = var4;
                var5 = _closure2_slot0;
                var4 = var5.calculateLadder;
                var2 = var3.pixelBudget;
                var2 = var4.bind(var5)(var2);
                var3['ladder'] = var2;
                var4 = var5.calculateOrderedLadder;
                var2 = var3.ladder;
                var2 = var4.bind(var5)(var2);
                var3['orderedLadder'] = var2;
                return var1;
case 38:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var9 = 'Invalid argument';
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var2 = 'getMaxSinkValue';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var10 = arguments[1];
                var9 = this;
                var8 = undefined;
                if(!(var10 === var8)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var10 = 0;
case 40:
                var7 = 0;
                if(!(!(var2 < var7))) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var1 = var9.orderedLadder;
                var1 = var1[var7];
                var1 = var1.wantValue;
                var4 = _closure1_slot6;
                var3 = var9.orderedLadder;
                var6 = var4.bind(var8)(var3);
                var4 = var6.bind(var8)();
                var3 = var4.done;
                var5 = var4;
                var4 = var1;
                var1 = var4;
                if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var11 = var5.value;
                var3 = var11.pixelCount;
                var11 = var11.wantValue;
                if(!(var10 > var7)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var1 = var11;
                if(!(!(var10 < var3))) { _fun0005_ip = 44; continue _fun0005 }
case 46:
                var12 = var3 * var2;
                var3 = var9.pixelBudget;
                var1 = var4;
                if(!(!(var12 > var3))) { _fun0005_ip = 44; continue _fun0005 }
case 48:
                var12 = var6.bind(var8)();
                var3 = var12.done;
                var5 = var12;
                var4 = var11;
                var1 = var4;
                if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 44:
                return var1;
case 42:
                var1 = global;
                var3 = var1.Error;
                var1 = 'getMaxSinkValue: Requested ';
                var13 = var1 + var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var2 = 'getResolution';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var9 = arg1;
                var3 = this;
                var2 = _closure1_slot6;
                var1 = var3.orderedLadder;
                var8 = undefined;
                var7 = var2.bind(var8)(var1);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var4 = null;
                var6 = var2;
                var5 = null;
                var2 = null;
                if(var1) { _fun0006_ip = 9; continue _fun0006 }
case 49:
                var10 = var6.value;
                var1 = var10.wantValue;
                var2 = var5;
                if(!(var9 >= var1)) { _fun0006_ip = 9; continue _fun0006 }
case 39:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var6 = var11;
                var5 = var10;
                var2 = var5;
                if(!var1) { _fun0006_ip = 49; continue _fun0006 }
case 9:
                var1 = {};
                if(!(var4 == var2)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var4 = var3.orderedLadder;
                var3 = 0;
                var2 = var4[var3];
case 50:
                var3 = var2.width;
                var1['width'] = var3;
                var3 = var2.height;
                var1['height'] = var3;
                var3 = var2.budgetPortion;
                var1['budgetPortion'] = var3;
                var3 = var2.mutedFramerate;
                var1['mutedFramerate'] = var3;
                var2 = var2.framerate;
                var1['framerate'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'calculateLadder';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var13 = arg1;
                var1 = global;
                var3 = var1.Set;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var28 = [0, 4, 8, 10];
                var29 = var2;
                var1 = new var29[var3](var28, var27);
                var5 = var1 instanceof Object ? var1 : var2;
                var12 = new Array(0);
                var11 = 1;
                var4 = 4096;
                var10 = 0;
                var3 = 16;
                var2 = 9;
                var1 = var11;
case 39:
                var6 = var3 * var1;
                var9 = var6 / var2;
                var7 = var5.has;
                var6 = var9 % var3;
                var6 = var7.bind(var5)(var6);
                if(!var6) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var7 = var5.has;
                var6 = var1 % var3;
                var6 = var7.bind(var5)(var6);
                if(!var6) { _fun0007_ip = 52; continue _fun0007 }
case 54:
                var8 = var9 * var1;
                var7 = var12.push;
                var6 = {};
                var6['pixelCount'] = var8;
                var6['width'] = var9;
                var6['height'] = var1;
                var8 = var8 / var13;
                var6['budgetPortion'] = var8;
                var6['wantValue'] = var10;
                var6 = var7.bind(var12)(var6);
case 52:
                var1 = var1 + 1;
                if(var1 < var4) { _fun0007_ip = 39; continue _fun0007 }
case 55:
                var1 = {};
                var9 = 100;
                var8 = undefined;
                var7 = 25;
                var4 = 10;
                var3 = 0;
                var2 = undefined;
case 56:
                var14 = _closure1_slot6;
                var22 = var14.bind(var8)(var12);
                var15 = var22.bind(var8)();
                var14 = var15.done;
                var21 = var15;
                var20 = 0;
                var17 = 0;
                var15 = 0;
                var16 = 0;
                var19 = 0;
                var18 = 0;
                if(var14) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var23 = var21.value;
                var14 = var23.pixelCount;
                var14 = var14 * var11;
                var16 = var20;
                var19 = var17;
                var18 = var15;
                var2 = var23;
                if(!(!(var14 > var13))) { _fun0007_ip = 57; continue _fun0007 }
case 23:
                var20 = var23.width;
                var17 = var23.height;
                var15 = var23.budgetPortion;
                var27 = var22.bind(var8)();
                var14 = var27.done;
                var21 = var27;
                var16 = var20;
                var19 = var17;
                var18 = var15;
                var2 = var23;
                if(!var14) { _fun0007_ip = 58; continue _fun0007 }
case 57:
                var14 = var9;
                if(!(var3 !== var16)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var17 = _closure2_slot0;
                var15 = var17.getMutedFramerate;
                var17 = var15.bind(var17)(var9);
                var15 = {};
                var15['width'] = var16;
                var15['height'] = var19;
                var15['budgetPortion'] = var18;
                var15['mutedFramerate'] = var17;
                var17 = _closure1_slot3;
                var15['framerate'] = var17;
                var1[var9] = var15;
                var14 = var9 - var4;
                var3 = var16;
case 59:
                var11 = var11 + 1;
                var9 = var14;
                if(var11 <= var7) { _fun0007_ip = 56; continue _fun0007 }
case 61:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var7 = 'getMutedFramerate';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = 20;
                if(!(!(var2 <= var1))) { _fun0008_ip = 36; continue _fun0008 }
case 62:
                var1 = _closure1_slot5;
                _fun0008_ip = 43; continue _fun0008;
case 36:
                var1 = _closure1_slot4;
case 43:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'calculateOrderedLadder';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var7 = arg1;
                var1 = new Array(0);
                var3 = _closure1_slot6;
                var4 = global;
                var5 = var4.Object;
                var4 = var5.keys;
                var6 = var4.bind(var5)(var7);
                var5 = var6.map;
                var4 = function(arg1) {
                    var1 = global;
                    var3 = var1.Number;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.sort;
                var2 = function(arg1, arg2) {
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var2 - var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = 0;
                if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 9:
                var10 = var3.value;
                if(!(var4 !== var10)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var9 = var7[var10];
                var8 = var1.push;
                var2 = {};
                var12 = var9.width;
                var11 = var9.height;
                var11 = var12 * var11;
                var2['pixelCount'] = var11;
                var2['wantValue'] = var10;
                var14 = var2;
                var13 = var9;
                var9 = copyDataProperties(var14, var13);
                var2 = var8.bind(var1)(var2);
case 64:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0009_ip = 9; continue _fun0009 }
case 63:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MediaSinkWantsLadder'] = var2;
    return var1;
})();