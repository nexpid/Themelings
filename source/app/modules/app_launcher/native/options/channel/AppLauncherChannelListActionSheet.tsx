// app/modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function ChannelIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var10 = var1.size;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 19:
            var10 = 'sm';
 23:
            var5 = var1.wrapperSize;
            if(!(var5 === var4)) { _fun0001_ip = 36; continue _fun0001 }
 33:
            var5 = 32;
 36:
            var1 = _closure1_slot8;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 6;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var9 = var1.TextIcon;
            var2 = null;
            if(!(var2 != var12)) { _fun0001_ip = 165; continue _fun0001 }
 79:
            var11 = _closure1_slot5;
            var3 = var11.getGuild;
            var1 = var12.getGuildId;
            var1 = var1.bind(var12)();
            var11 = var3.bind(var11)(var1);
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 7;
            var1 = var13[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getChannelIconComponentWithGuild;
            var1 = var1.bind(var3)(var12, var11);
            if(!(var2 == var1)) { _fun0001_ip = 162; continue _fun0001 }
 139:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var1 = var2.TextIcon;
 162:
            var9 = var1;
 165:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = _closure1_slot6;
            var7 = {};
            var7['size'] = var10;
            var10 = 'interactive-normal';
            var7['color'] = var10;
            var7 = var8.bind(var4)(var9, var7);
            var1['icon'] = var7;
            var6 = var6.channelIconWrapper;
            var1['wrapperStyle'] = var6;
            var1['wrapperSize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 5;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var10['tintColor'] = var13;
    var5['channelIcon'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_MOD_SUBTLE;
    var10['backgroundColor'] = var11;
    var5['channelIconWrapper'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AppLauncherChannelListActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.onChannelPress;
            var _closure2_slot0 = var1;
            var14 = var2.onActionSheetDismiss;
            var _closure2_slot1 = var14;
            var1 = var2.channel;
            var _closure2_slot2 = var1;
            var10 = var2.option;
            var _closure2_slot3 = var10;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var2 = '';
            var2 = var3.bind(var5)(var2);
            var12 = _closure1_slot3;
            var4 = undefined;
            var6 = 2;
            var2 = var12.bind(var4)(var2, var6);
            var8 = 0;
            var9 = var2[var8];
            var _closure2_slot4 = var9;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot5 = var2;
            var13 = var5.useRef;
            var2 = null;
            var13 = var13.bind(var5)(var2);
            var _closure2_slot6 = var13;
            var15 = var5.useState;
            var2 = new Array(0);
            var2 = var15.bind(var5)(var2);
            var2 = var12.bind(var4)(var2, var6);
            var12 = var2[var8];
            var _closure2_slot7 = var12;
            var2 = var2[var3];
            var _closure2_slot8 = var2;
            var6 = var12.length;
            var3 = var5.useEffect;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var1;
            var2[2] = var10;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.queryApplicationCommandChannelResults;
                var2 = {};
                var6 = _closure2_slot4;
                var2['query'] = var6;
                var6 = _closure2_slot2;
                var2['channel'] = var6;
                var6 = _closure2_slot3;
                var6 = var6.channelTypes;
                var2['channelTypes'] = var6;
                var6 = null;
                var2['limit'] = var6;
                var6 = true;
                var2['allowSnowflake'] = var6;
                var2 = var4.bind(var5)(var2);
                var3 = _closure2_slot8;
                var2 = var2.channels;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = function handleChannelPress(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var4 = _closure2_slot0;
                var3 = {};
                var3['channel'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.hideActionSheet;
                var3 = 'AppLauncherChannelListActionSheet';
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var _closure2_slot9 = var1;
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AppLauncherCommandOptionActionSheet;
            var1 = {};
            var1['onDismiss'] = var14;
            var1['option'] = var10;
            var14 = _closure1_slot6;
            var10 = 12;
            var5 = var5[var10];
            var5 = var9.bind(var4)(var5);
            var9 = var5.AppLauncherListSearchBar;
            var5 = {};
            var15 = function onChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot5;
                    var1 = var3.toLowerCase;
                    var3 = var1.bind(var3)();
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 67; continue _fun0003 }
 42:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
 67:
                    return var1;
                }
            };
            var5['onChange'] = var15;
            var9 = var14.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            if(!(var8 !== var6)) { _fun0002_ip = 356; continue _fun0002 }
 299:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.AppLauncherList;
            var6 = {};
            var6['ref'] = var13;
            var6['data'] = var12;
            var11 = function renderItem(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var _closure3_slot0 = var1;
                var7 = var2.index;
                var5 = _closure1_slot6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 13;
                var2 = var10[var2];
                var4 = undefined;
                var2 = var9.bind(var4)(var2);
                var3 = var2.TableRow;
                var2 = {};
                var8 = function onPress() {
                    var3 = _closure2_slot9;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['channel'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var8;
                var11 = _closure1_slot6;
                var8 = 14;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var10 = var8.Text;
                var9 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                var8 = 1;
                var12 = var1.name;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var2['label'] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot9;
                var6 = {};
                var6['channel'] = var1;
                var6 = var10.bind(var4)(var9, var6);
                var2['icon'] = var6;
                var6 = 0;
                var6 = var6 === var7;
                var2['start'] = var6;
                var6 = _closure2_slot7;
                var6 = var6.length;
                var6 = var6 - var8;
                var6 = var7 === var6;
                var2['end'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6['renderItem'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0002_ip = 391; continue _fun0002;
 356:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.AppLauncherListEmptyState;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 391:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = 'AppLauncherChannelListActionSheet';
    var3['APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY'] = var4;
    var3['ChannelIcon'] = var2;
    return var1;
})();