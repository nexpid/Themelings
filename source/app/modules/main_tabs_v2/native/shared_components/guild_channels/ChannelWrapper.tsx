// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx
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
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelWrapper(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var9 = var1.channel;
            var7 = var1.layout;
            var12 = var1.fontScale;
            var5 = var1.launchpad;
            var6 = var1.panelVariant;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 3;
            var2 = var2[var10];
            var11 = var3.bind(var4)(var2);
            var3 = var11.getScaledChannelRowHeight;
            var8 = null;
            var13 = var8 == var9;
            var2 = undefined;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var9.isThread;
            var2 = var13.bind(var9)();
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = !var5;
case 6:
            var12 = var3.bind(var11)(var12, var7, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var10];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getLayoutStyles;
            var7 = var2.bind(var3)(var7, var5);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = new Array(3);
            var10 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
            var5[0] = var10;
            var10 = {};
            if(!(var8 != var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var9.isThread;
            var11 = var11.bind(var9)();
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var11 = var7.layout;
            var11 = var11.margin;
            var13 = var11.marginVertical;
            var11 = 2;
            var11 = var11 * var13;
            _fun0001_ip = 11; continue _fun0001;
case 10:
            var13 = var7.layout;
            var13 = var13.marginThread;
            var14 = var13.marginVertical;
            var13 = 2;
            var11 = var13 * var14;
case 11:
            var11 = var12 - var11;
            var10['minHeight'] = var11;
            var5[1] = var10;
            if(!(var8 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var9.isThread;
            var8 = var8.bind(var9)();
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var8 = var7.container;
            if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var8.padding;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var6 = var8.paddingPanels;
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 14:
            var7 = var7.container;
            var6 = var7.paddingThread;
case 18:
            var5[2] = var6;
            var1['style'] = var5;
            var5 = arg1;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelWrapper'] = var2;
    return var1;
})();