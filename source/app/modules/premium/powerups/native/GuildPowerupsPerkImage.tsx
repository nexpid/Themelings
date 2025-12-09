// app/modules/premium/powerups/native/GuildPowerupsPerkImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsPerkImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsPerkImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.imageUrl;
            var7 = var1.style;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot3;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 3;
            var1 = var8[var1];
            var2 = var3.bind(var5)(var1);
            var1 = {};
            var1['style'] = var7;
            var9 = {};
            var9['uri'] = var6;
            var1['source'] = var9;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = 2;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['style'] = var7;
            var2['url'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();