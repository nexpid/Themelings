// app/modules/polls/chat/useFormattedExpirationLabel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var2 = function formatExpirationLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.bind(var1)();
            if(!(!(var8 <= var5))) { _fun0001_ip = 292; continue _fun0001 }
 38:
            var4 = var8.diff;
            var3 = 'days';
            var6 = var4.bind(var8)(var5, var3);
            var7 = 1;
            if(!(!(var6 > var7))) { _fun0001_ip = 228; continue _fun0001 }
 64:
            var4 = var8.diff;
            var3 = 'hours';
            var9 = var4.bind(var8)(var5, var3);
            if(!(!(var9 > var7))) { _fun0001_ip = 164; continue _fun0001 }
 84:
            var4 = var8.diff;
            var3 = 'minutes';
            var10 = var4.bind(var8)(var5, var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var7];
            var5 = var4.bind(var1)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var3[var7];
            var3 = var4.bind(var1)(var3);
            var3 = var3.t;
            var4 = var3.3SLXAw;
            var3 = {};
            var3['minutes'] = var10;
            var3 = var5.bind(var8)(var4, var3);
            return var3;
 164:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var7];
            var5 = var4.bind(var1)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var3[var7];
            var3 = var4.bind(var1)(var3);
            var3 = var3.t;
            var4 = var3.BWqf0d;
            var3 = {};
            var3['hours'] = var9;
            var3 = var5.bind(var8)(var4, var3);
            return var3;
 228:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var7];
            var4 = var3.bind(var1)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var7];
            var2 = var3.bind(var1)(var2);
            var2 = var2.t;
            var3 = var2.dex68f;
            var2 = {};
            var2['days'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 292:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/polls/chat/useFormattedExpirationLabel.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useFormattedExpirationLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 13; continue _fun0002 }
 9:
            var1 = undefined;
            return var1;
 13:
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['formatExpirationLabel'] = var2;
    return var1;
})();