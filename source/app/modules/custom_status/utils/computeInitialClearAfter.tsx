// app/modules/custom_status/utils/computeInitialClearAfter.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ClearAfterValues;
    var _closure1_slot2 = var7;
    var8 = var7.MINUTES_30;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = var7.HOURS_1;
    var4[1] = var8;
    var7 = var7.HOURS_4;
    var4[2] = var7;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/computeInitialClearAfter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function computeInitialClearAfter() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var4 = var3.CustomStatusSetting;
            var3 = var4.getSetting;
            var5 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 355; continue _fun0001 }
 52:
            var6 = var5.expiresAtMs;
            var4 = '';
            if(!(var4 !== var6)) { _fun0001_ip = 355; continue _fun0001 }
 69:
            var4 = global;
            var6 = var4.Number;
            var5 = var5.expiresAtMs;
            var6 = var6.bind(var7)(var5);
            var5 = var4.isNaN;
            var5 = var5.bind(var7)(var6);
            if(var5) { _fun0001_ip = 343; continue _fun0001 }
 105:
            var5 = 0;
            if(!(var5 !== var6)) { _fun0001_ip = 331; continue _fun0001 }
 114:
            var5 = var4.Date;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var13 = var8;
            var5 = new var13[var5](var12);
            var9 = var5 instanceof Object ? var5 : var8;
            var5 = var4.Date;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var13 = var8;
            var12 = var6;
            var5 = new var13[var5](var12, var11);
            var10 = var5 instanceof Object ? var5 : var8;
            var5 = var9.getFullYear;
            var8 = var5.bind(var9)();
            var5 = var10.getFullYear;
            var5 = var5.bind(var10)();
            var5 = var8 === var5;
            if(!var5) { _fun0001_ip = 220; continue _fun0001 }
 196:
            var8 = var9.getMonth;
            var11 = var8.bind(var9)();
            var8 = var10.getMonth;
            var8 = var8.bind(var10)();
            var5 = var11 === var8;
 220:
            if(!var5) { _fun0001_ip = 247; continue _fun0001 }
 223:
            var8 = var9.getDate;
            var9 = var8.bind(var9)();
            var8 = var10.getDate;
            var8 = var8.bind(var10)();
            var5 = var9 === var8;
 247:
            if(var5) { _fun0001_ip = 262; continue _fun0001 }
 250:
            var5 = _closure1_slot2;
            var5 = var5.TODAY;
            return var5;
 262:
            var5 = var4.Number;
            var5 = var5.bind(var7)(var6);
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var4 = var5 - var4;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot3;
            var4 = var5.find;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2 <= var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!(var3 == var2)) { _fun0001_ip = 329; continue _fun0001 }
 319:
            var3 = _closure1_slot2;
            var2 = var3.TODAY;
 329:
            return var2;
 331:
            var2 = _closure1_slot2;
            var2 = var2.DONT_CLEAR;
            return var2;
 343:
            var2 = _closure1_slot2;
            var2 = var2.TODAY;
            return var2;
 355:
            var1 = _closure1_slot2;
            var1 = var1.TODAY;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();