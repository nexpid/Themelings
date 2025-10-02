// app/modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherChannelOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.style;
            var9 = var1.option;
            var _closure2_slot0 = var9;
            var2 = var1.initialValue;
            var _closure2_slot1 = var2;
            var14 = var1.onChannelPress;
            var _closure2_slot2 = var14;
            var2 = var1.onActionSheetDismiss;
            var _closure2_slot3 = var2;
            var2 = var1.channel;
            var _closure2_slot4 = var2;
            var5 = var1.autoFocus;
            var8 = var1.hasError;
            var1 = var1.onPress;
            var _closure2_slot5 = var1;
            var13 = _closure1_slot4;
            var2 = var13.useState;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'channelMention';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = _closure2_slot1;
                    var1 = var2.channelId;
case 2:
                    return var1;
                }
            };
            var3 = var2.bind(var13)(var1);
            var2 = _closure1_slot3;
            var4 = undefined;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var3[var1];
            var _closure2_slot6 = var1;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot7 = var2;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var2 = var12[var2];
            var16 = var3.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot6;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var15.bind(var16)(var10, var2, var3);
            var _closure2_slot8 = var10;
            var3 = var13.useEffect;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var1;
            var2[2] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var3 = _closure2_slot8;
                    var2 = var4 == var3;
case 5:
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure2_slot7;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var1['channel'] = var4;
                    var1 = var2.bind(var3)(var1);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var13)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var11;
            var1['option'] = var9;
            var1['hasError'] = var8;
            var8 = null;
            var9 = var8 != var10;
            var1['selected'] = var9;
            var9 = var8 != var10;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var10.name;
case 9:
            var1['selectedItemName'] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 6;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ChannelIcon;
            var7 = {};
            var7['channel'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['leading'] = var7;
            var6 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 11:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var3 = var8[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var8[var2];
                    var9 = var3.bind(var1)(var2);
                    var2 = 8;
                    var4 = var8[var2];
                    var2 = var8.paths;
                    var4 = var9.bind(var1)(var4, var2);
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['option'] = var8;
                    var8 = _closure2_slot4;
                    var2['channel'] = var8;
                    var8 = function onChannelPress(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.channel;
                            var5 = _closure2_slot7;
                            var1 = null;
                            var6 = var1 == var4;
                            var1 = undefined;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var3 = var4.id;
case 13:
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure2_slot2;
                            var2 = {};
                            var2['channel'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2['onChannelPress'] = var8;
                    var7 = _closure2_slot3;
                    var2['onActionSheetDismiss'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var1['autoFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();