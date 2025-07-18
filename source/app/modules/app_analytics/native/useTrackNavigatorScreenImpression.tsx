// app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackNavigatorScreenImpression(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.impressionName;
            var3 = var1.impressionProperties;
            var2 = 'function';
            var1 = typeof var3;
            var4 = var3;
            if(!(var2 === var1)) { _fun0001_ip = 45; continue _fun0001 }
 29:
            var1 = arg2;
            var2 = var1.params;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
 45:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 0;
            var2 = var8[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var7 = _closure1_slot0;
            var6 = 1;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ImpressionTypes;
            var6 = var6.PAGE;
            var2['type'] = var6;
            var2['name'] = var5;
            var2['properties'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['useTrackNavigatorScreenImpression'] = var2;
    return var1;
})();