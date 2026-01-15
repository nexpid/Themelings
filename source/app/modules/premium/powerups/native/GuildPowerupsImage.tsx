// app/modules/premium/powerups/native/GuildPowerupsImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '75%', 'height': '100%', 'alignSelf': 'center', 'resizeMode': 'contain'};
    var4['image'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.imageUrl;
            var3 = var1.isAnimated;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = true;
case 2:
            var8 = var1.style;
            var1 = _closure1_slot5;
            var6 = var1.bind(var5)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var12 = var9.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var11.bind(var12)(var4, var1);
            var4 = 4;
            var4 = var10[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.isAndroid;
            var4 = var4.bind(var9)();
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var10 = var6.image;
            var9 = new Array(2);
            var9[0] = var10;
            var9[1] = var8;
            var1['style'] = var9;
            var1['url'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var6.image;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var8;
            var2['style'] = var6;
            var6 = {};
            var6['uri'] = var7;
            var2['source'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();