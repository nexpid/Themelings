// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MoreButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.channel;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 50; continue _fun0002 }
 16:
                    var4 = _closure2_slot0;
                    var3 = var4.isDM;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0002_ip = 47; continue _fun0002 }
 33:
                    var5 = _closure2_slot0;
                    var4 = var5.isMultiUserDM;
                    var3 = var4.bind(var5)();
 47:
                    var2 = var3;
 50:
                    if(!var2) { _fun0002_ip = 98; continue _fun0002 }
 53:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 98:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var3.bind(var5)(var1, var2);
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 231; continue _fun0001 }
 61:
            var2 = var4.isDM;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 92; continue _fun0001 }
 74:
            var2 = var4.isGroupDM;
            var2 = var2.bind(var4)();
            var1 = null;
            if(!var2) { _fun0001_ip = 231; continue _fun0001 }
 92:
            var5 = _closure1_slot4;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 3;
            var2 = var11[var2];
            var4 = undefined;
            var3 = var10.bind(var4)(var2);
            var2 = {};
            var14 = _closure1_slot0;
            var6 = 4;
            var6 = var11[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.HeaderIconButton;
            var6 = {};
            var9 = 5;
            var12 = var11[var9];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var11[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.UKOtz8;
            var9 = var12.bind(var13)(var9);
            var6['accessibilityLabel'] = var9;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var6['source'] = var9;
            var6['onPress'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 231:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();