// app/modules/premium/gifting/shared/FriendAnniversaryUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
            var9 = _closure1_slot3;
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
            var7 = _closure1_slot3;
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
    var _closure1_slot2 = var1;
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
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/shared/FriendAnniversaryUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 7;
    var3['FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS'] = var4;
    var4 = function isFriendAnniversary(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var11 = arg1;
            var10 = global;
            var1 = var10.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var18 = var2;
            var1 = new var18[var1](var17);
            var9 = var1 instanceof Object ? var1 : var2;
            var1 = var9.getFullYear;
            var8 = var1.bind(var9)();
            var7 = new Array(3);
            var1 = -1;
            var7[0] = var1;
            var6 = 0;
            var7[1] = var6;
            var1 = 1;
            var7[2] = var1;
            var1 = var7.length;
            var1 = var6 < var1;
            var4 = undefined;
            var3 = 7;
            var2 = 0;
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var13 = var7[var2];
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var14 = var1[var6];
            var15 = var12.bind(var4)(var14);
            var14 = var15.setYear;
            var13 = var8 + var13;
            var15 = var14.bind(var15)(var11, var13);
            var1 = var1[var6];
            var12 = var12.bind(var4)(var1);
            var1 = var12.isSameDay;
            var1 = var1.bind(var12)(var15, var11);
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var13 = var10.Math;
            var12 = var13.abs;
            var14 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var14 = var14.bind(var4)(var1);
            var1 = var14.differenceInDays;
            var1 = var1.bind(var14)(var9, var15);
            var1 = var12.bind(var13)(var1);
            if(!(var1 <= var3)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var1 = true;
            return var1;
case 38:
            var2 = var2 + 1;
            var1 = var7.length;
            if(var2 < var1) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var1 = false;
            return var1;
        }
    };
    var3['isFriendAnniversary'] = var4;
    var4 = function yearsSince(arg1) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.round;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 0;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.differenceInMonths;
        var1 = var1.Date;
        var4 = var1.prototype;
        var4 = Object.create(var4, {constructor: {value: var1}});
        var9 = var4;
        var1 = new var9[var1](var8);
        var4 = var1 instanceof Object ? var1 : var4;
        var1 = arg1;
        var4 = var5.bind(var6)(var4, var1);
        var1 = 12;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['yearsSince'] = var4;
    var4 = function categorizeFriendAnniversariesByAffinity(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var13 = arg2;
            var4 = global;
            var2 = var4.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var19 = var3;
            var2 = new var19[var2](var18);
            var3 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var3;
            var2 = var4.Set;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var19 = var6;
            var2 = new var19[var2](var18);
            var2 = var2 instanceof Object ? var2 : var6;
            var _closure2_slot1 = var2;
            var6 = arg3;
            if(var6) { _fun0005_ip = 22; continue _fun0005 }
case 41:
            var6 = _closure1_slot2;
            var12 = undefined;
            var11 = var6.bind(var12)(var5);
            var7 = var11.bind(var12)();
            var6 = var7.done;
            var10 = 0.5;
            var9 = null;
            var8 = 0.7;
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var14 = var7.value;
            var15 = var13.bind(var12)(var14);
            var6 = var9 != var15;
            if(!var6) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var6 = var15 > var8;
case 44:
            if(!var6) { _fun0005_ip = 46; continue _fun0005 }
case 39:
            var6 = var3.add;
            var6 = var6.bind(var3)(var14);
case 46:
            var6 = var9 != var15;
            if(!var6) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = var15 > var10;
case 47:
            if(!var6) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var6 = var2.add;
            var6 = var6.bind(var2)(var14);
case 49:
            var14 = var11.bind(var12)();
            var6 = var14.done;
            var7 = var14;
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 51:
            _fun0005_ip = 43; continue _fun0005;
case 22:
            var7 = var4.Math;
            var6 = var7.ceil;
            var8 = var5.length;
            var4 = 2;
            var4 = var8 / var4;
            var7 = var6.bind(var7)(var4);
            var6 = var5.slice;
            var4 = 0;
            var7 = var6.bind(var5)(var4, var7);
            var6 = var7.forEach;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var4 = var5.forEach;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
case 42:
            var1 = {};
            var1['highestAffinity'] = var3;
            var1['highAffinity'] = var2;
            return var1;
        }
    };
    var3['categorizeFriendAnniversariesByAffinity'] = var4;
    var2 = function pruneTimestampMap(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var1 = {};
            var5 = var9;
            for(var2 in var5)
case 52:
            {
case 53:
                var11 = var2;
                var10 = var9[var11];
                var12 = var8 - var10;
                if(!(var12 <= var7)) { _fun0006_ip = 52; continue _fun0006 }
case 2:
                var1[var11] = var10;
                _fun0006_ip = 52; continue _fun0006;
            }
case 54:
            return var1;
        }
    };
    var3['pruneTimestampMap'] = var2;
    return var1;
})();