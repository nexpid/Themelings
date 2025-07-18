// app/design/components/Illustration/native/index.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var4 = 'design/components/Illustration/native/index.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIllustrationSource(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = 'light';
            if(!(var1 !== var4)) { _fun0001_ip = 78; continue _fun0001 }
 14:
            var1 = 'darker';
            if(!(var1 !== var4)) { _fun0001_ip = 55; continue _fun0001 }
 22:
            var1 = 'midnight';
            var3 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 84; continue _fun0001 }
 32:
            var1 = var2.midnight;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 50; continue _fun0001 }
 44:
            var1 = var2.darker;
 50:
            var3 = var1;
            _fun0001_ip = 84; continue _fun0001;
 55:
            var1 = var2.darker;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 73; continue _fun0001 }
 67:
            var1 = var2.midnight;
 73:
            var3 = var1;
            _fun0001_ip = 84; continue _fun0001;
 78:
            var3 = var2.light;
 84:
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 102; continue _fun0001 }
 90:
            var1 = var2.dark;
            var1 = var1.bind(var2)();
            _fun0001_ip = 108; continue _fun0001;
 102:
            var2 = undefined;
            var1 = var3.bind(var2)();
 108:
            return var1;
        }
    };
    var3['getIllustrationSource'] = var4;
    var2 = function useIllustrationSource(arg1) {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useThemeContext;
        var1 = var1.bind(var2)();
        var2 = var1.theme;
        var1 = arg1;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var3['useIllustrationSource'] = var2;
    return var1;
})();