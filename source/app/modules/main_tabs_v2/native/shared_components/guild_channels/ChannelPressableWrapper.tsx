// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelPressableWrapper(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var8 = var1.layout;
            var5 = var1.launchpad;
            var7 = var1.isThread;
            var6 = var1.panelVariant;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getLayoutStyles;
            var5 = var2.bind(var3)(var8, var5);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var5.layout;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.margin;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var6 = var5.marginPanels;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var6 = var5.marginThread;
case 9:
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
            var5[1] = var6;
            var1['style'] = var5;
            var5 = arg1;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelPressableWrapper'] = var2;
    return var1;
})();