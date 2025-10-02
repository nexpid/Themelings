// app/modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var10 = var4.StyleSheet;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 'top';
    var9[var10] = var12;
    var10 = 'bottom';
    var9[var10] = var12;
    var12 = 'center';
    var10 = 'justifyContent';
    var9[var10] = var12;
    var4['indicatorContainer'] = var9;
    var9 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginLeft': 4294967292};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['indicator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/StaticChannelIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.unread;
            var9 = var1.resolvedUnreadSetting;
            var8 = var1.style;
            var1 = _closure1_slot6;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var4 = var6.useToken;
            var1 = _closure1_slot4;
            var1 = var1.ALL_MESSAGES;
            if(!(var9 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.CHANNELS_DEFAULT;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 4;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.colors;
            var1 = var9.INTERACTIVE_ACTIVE;
case 4:
            var10 = var4.bind(var6)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var7.indicatorContainer;
            var2['style'] = var6;
            var6 = {};
            var9 = var7.indicator;
            var7 = new Array(3);
            var7[0] = var9;
            var9 = {};
            var9['backgroundColor'] = var10;
            var7[1] = var9;
            var7[2] = var8;
            var6['style'] = var7;
            var6 = var4.bind(var5)(var3, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();