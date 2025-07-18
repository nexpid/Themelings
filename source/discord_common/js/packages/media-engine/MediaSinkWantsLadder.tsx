// discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
 342:
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
 0:
                var4 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0004_ip = 19; continue _fun0004 }
 12:
                var4 = _closure1_slot2;
 19:
                var6 = _closure1_slot0;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var4 = var4.videoBudget;
                var5 = var4.width;
                var4 = var4.height;
                var6 = 0;
                if(!(!(var5 <= var6))) { _fun0004_ip = 131; continue _fun0004 }
 61:
                if(!(!(var4 <= var6))) { _fun0004_ip = 131; continue _fun0004 }
 65:
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
 131:
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
 0:
                var2 = arg1;
                var10 = arguments[1];
                var9 = this;
                var8 = undefined;
                if(!(var10 === var8)) { _fun0005_ip = 17; continue _fun0005 }
 15:
                var10 = 0;
 17:
                var7 = 0;
                if(!(!(var2 < var7))) { _fun0005_ip = 149; continue _fun0005 }
 26:
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
                if(var3) { _fun0005_ip = 147; continue _fun0005 }
 81:
                var11 = var5.value;
                var3 = var11.pixelCount;
                var11 = var11.wantValue;
                if(!(var10 > var7)) { _fun0005_ip = 109; continue _fun0005 }
 102:
                var1 = var11;
                if(!(!(var10 < var3))) { _fun0005_ip = 147; continue _fun0005 }
 109:
                var12 = var3 * var2;
                var3 = var9.pixelBudget;
                var1 = var4;
                if(!(!(var12 > var3))) { _fun0005_ip = 147; continue _fun0005 }
 126:
                var12 = var6.bind(var8)();
                var3 = var12.done;
                var5 = var12;
                var4 = var11;
                var1 = var4;
                if(!var3) { _fun0005_ip = 81; continue _fun0005 }
 147:
                return var1;
 149:
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
 0:
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
                if(var1) { _fun0006_ip = 86; continue _fun0006 }
 47:
                var10 = var6.value;
                var1 = var10.wantValue;
                var2 = var5;
                if(!(var9 >= var1)) { _fun0006_ip = 86; continue _fun0006 }
 65:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var6 = var11;
                var5 = var10;
                var2 = var5;
                if(!var1) { _fun0006_ip = 47; continue _fun0006 }
 86:
                var1 = {};
                if(!(var4 == var2)) { _fun0006_ip = 104; continue _fun0006 }
 92:
                var4 = var3.orderedLadder;
                var3 = 0;
                var2 = var4[var3];
 104:
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
 0:
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
 65:
                var6 = var3 * var1;
                var9 = var6 / var2;
                var7 = var5.has;
                var6 = var9 % var3;
                var6 = var7.bind(var5)(var6);
                if(!var6) { _fun0007_ip = 150; continue _fun0007 }
 90:
                var7 = var5.has;
                var6 = var1 % var3;
                var6 = var7.bind(var5)(var6);
                if(!var6) { _fun0007_ip = 150; continue _fun0007 }
 107:
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
 150:
                var1 = var1 + 1;
                if(var1 < var4) { _fun0007_ip = 65; continue _fun0007 }
 157:
                var1 = {};
                var9 = 100;
                var8 = undefined;
                var7 = 25;
                var4 = 10;
                var3 = 0;
                var2 = undefined;
 180:
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
                if(var14) { _fun0007_ip = 290; continue _fun0007 }
 216:
                var23 = var21.value;
                var14 = var23.pixelCount;
                var14 = var14 * var11;
                var16 = var20;
                var19 = var17;
                var18 = var15;
                var2 = var23;
                if(!(!(var14 > var13))) { _fun0007_ip = 290; continue _fun0007 }
 247:
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
                if(!var14) { _fun0007_ip = 216; continue _fun0007 }
 290:
                var14 = var9;
                if(!(var3 !== var16)) { _fun0007_ip = 354; continue _fun0007 }
 297:
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
 354:
                var11 = var11 + 1;
                var9 = var14;
                if(var11 <= var7) { _fun0007_ip = 180; continue _fun0007 }
 367:
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
 0:
                var2 = arg1;
                var1 = 20;
                if(!(!(var2 <= var1))) { _fun0008_ip = 19; continue _fun0008 }
 10:
                var1 = _closure1_slot5;
                _fun0008_ip = 26; continue _fun0008;
 19:
                var1 = _closure1_slot4;
 26:
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
 0:
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
                if(var2) { _fun0009_ip = 160; continue _fun0009 }
 86:
                var10 = var3.value;
                if(!(var4 !== var10)) { _fun0009_ip = 145; continue _fun0009 }
 95:
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
 145:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0009_ip = 86; continue _fun0009 }
 160:
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