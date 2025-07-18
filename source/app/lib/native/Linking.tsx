// app/lib/native/Linking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Linking;
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function openURL(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var2 = true;
 11:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.default;
            var4 = {};
            var4['allowExternal'] = var2;
            var3 = arg1;
            var2 = arg2;
            var2 = var5.bind(var1)(var3, var2, var4);
            return var1;
        }
    };
    var2['openURL'] = var7;
    var7 = function openURLExternally(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var5 = var2.default;
        var4 = {};
        var2 = true;
        var4['forceExternalBrowser'] = var2;
        var3 = arg1;
        var2 = arg2;
        var2 = var5.bind(var1)(var3, var2, var4);
        return var1;
    };
    var2['openURLExternally'] = var7;
    var4 = function performURLNavigation(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.openURL;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.catch;
        var1 = function() {
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['performURLNavigation'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/native/Linking.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();