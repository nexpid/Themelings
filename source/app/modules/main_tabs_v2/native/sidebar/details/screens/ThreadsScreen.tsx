// app/modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ThreadsScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.style;
            var11 = var2.channel;
            var _closure2_slot0 = var11;
            var2 = _closure1_slot9;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 8;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCanStartThread;
            var13 = var2.bind(var3)(var11);
            var6 = _closure1_slot1;
            var2 = 9;
            var2 = var14[var2];
            var3 = var6.bind(var4)(var2);
            var2 = {};
            var8 = true;
            var2['includeKeyboardHeight'] = var8;
            var2 = var3.bind(var4)(var2);
            var10 = var2.insets;
            var12 = _closure1_slot3;
            var8 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'Thread Browser Empty State';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var12 = var8.bind(var12)(var2, var3);
            var8 = _closure1_slot3;
            var3 = var8.useCallback;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 76; continue _fun0002 }
 26:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToThread;
                    var1 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.BROWSER;
                    var1['source'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var8 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var15 = var5.container;
            var5 = new Array(2);
            var5[0] = var15;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var5 = 12;
            var5 = var14[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var11;
            var11 = undefined;
            if(!var13) { _fun0001_ip = 216; continue _fun0001 }
 213:
            var11 = var12;
 216:
            var5['onCreateThreadPress'] = var11;
            var5['onThreadPress'] = var8;
            var8 = {};
            var10 = var10.bottom;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 7;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var9 = var10 + var9;
            var8['paddingBottom'] = var9;
            var9 = 16;
            var8['paddingHorizontal'] = var9;
            var5['contentContainerStyle'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SearchTypes;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.OpenThreadAnalyticsLocations;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var10['flex'] = var11;
    var2['container'] = var10;
    var10 = {};
    var11 = 7;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var2['screen'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.searchContext;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var6 = var4.type;
            var3 = _closure1_slot6;
            var3 = var3.CHANNEL;
            if(!(var6 !== var3)) { _fun0003_ip = 60; continue _fun0003 }
 39:
            var7 = var4.type;
            var3 = _closure1_slot6;
            var6 = var3.GUILD_CHANNEL;
            var3 = null;
            if(!(var7 === var6)) { _fun0003_ip = 65; continue _fun0003 }
 60:
            var3 = var4.channelId;
 65:
            _closure2_slot0 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0003_ip = 148; continue _fun0003 }
 128:
            var4 = _closure1_slot8;
            var3 = _closure1_slot10;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 148:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = var8.memo;
    var4 = function() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var3 = var7.useRoute;
            var3 = var3.bind(var7)();
            var3 = var3.params;
            var3 = var3.channelId;
            var _closure2_slot0 = var3;
            var3 = 13;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3, var1);
            var1 = _closure1_slot9;
            var7 = var1.bind(var5)();
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0004_ip = 141; continue _fun0004 }
 111:
            var4 = _closure1_slot8;
            var3 = _closure1_slot10;
            var2 = {};
            var7 = var7.screen;
            var2['style'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 141:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SearchTabsThreadScreen'] = var2;
    return var1;
})();