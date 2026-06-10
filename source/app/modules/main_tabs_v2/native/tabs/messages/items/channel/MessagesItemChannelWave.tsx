// app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = var7.memo;
    var2 = function MessagesItemChannelWave(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.wavePressed;
            var7 = var1.hasNameplate;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var3 = _closure1_slot2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var10 = 3;
            var6 = var9[var10];
            var6 = var8.bind(var4)(var6);
            var12 = var6.intl;
            var11 = var12.string;
            var6 = var9[var10];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.n8nU4W;
            var6 = var11.bind(var12)(var6);
            var1['text'] = var6;
            var6 = 4;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/semibold', 'aria-hidden': true, 'children': '👋'};
            var9 = {};
            var9['marginTop'] = var10;
            var6['style'] = var9;
            var6 = var3.bind(var4)(var8, var6);
            var1['icon'] = var6;
            var6 = 'secondary';
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = 'secondary-overlay';
case 4:
            var1['variant'] = var6;
            var6 = 'sm';
            var1['size'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();