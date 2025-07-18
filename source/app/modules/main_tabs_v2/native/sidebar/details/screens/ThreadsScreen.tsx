// app/modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ThreadsScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.channel;
            var _closure2_slot0 = var14;
            var7 = var2.showFloatingActionButton;
            var2 = _closure1_slot10;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 8;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCanStartThread;
            var6 = var2.bind(var3)(var14);
            var8 = _closure1_slot1;
            var2 = 9;
            var2 = var15[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var9 = true;
            var2['includeKeyboardHeightIOS'] = var9;
            var2 = var3.bind(var4)(var2);
            var12 = var2.insets;
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var14;
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
            var10 = var9.bind(var10)(var2, var3);
            var9 = _closure1_slot3;
            var3 = var9.useCallback;
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
            var11 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot8;
            var5 = 12;
            var5 = var15[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var14;
            var14 = undefined;
            if(!var6) { _fun0001_ip = 205; continue _fun0001 }
 202:
            var14 = var10;
 205:
            var5['onCreateThreadPress'] = var14;
            var5['onThreadPress'] = var11;
            var11 = {};
            var16 = var12.bottom;
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var14 = 7;
            var15 = var15[var14];
            var15 = var17.bind(var4)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var15 = var16 + var15;
            var11['paddingBottom'] = var15;
            var15 = 16;
            var11['paddingHorizontal'] = var15;
            var5['contentContainerStyle'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 293; continue _fun0001 }
 290:
            var6 = var7;
 293:
            if(!var6) { _fun0001_ip = 445; continue _fun0001 }
 299:
            var9 = _closure1_slot8;
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 13;
            var7 = var11[var7];
            var7 = var18.bind(var4)(var7);
            var8 = var7.FloatingActionButton;
            var7 = {};
            var15 = 14;
            var16 = var11[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var11[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBA;
            var15 = var16.bind(var17)(var15);
            var7['accessibilityLabel'] = var15;
            var13 = _closure1_slot1;
            var15 = 15;
            var15 = var11[var15];
            var15 = var13.bind(var4)(var15);
            var7['icon'] = var15;
            var12 = var12.bottom;
            var11 = var11[var14];
            var11 = var13.bind(var4)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var11 = var12 + var11;
            var7['positionBottom'] = var11;
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 445:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var2 = native4;
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
    var5 = var2.jsx;
    var _closure1_slot8 = var5;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 7;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var2['container'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot10 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.searchContext;
            var6 = var2.showFloatingActionButton;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 25; continue _fun0003 }
 23:
            var6 = false;
 25:
            var _closure2_slot0 = var5;
            var7 = var4.type;
            var3 = _closure1_slot6;
            var3 = var3.CHANNEL;
            if(!(var7 !== var3)) { _fun0003_ip = 72; continue _fun0003 }
 51:
            var8 = var4.type;
            var3 = _closure1_slot6;
            var7 = var3.GUILD_CHANNEL;
            var3 = null;
            if(!(var8 === var7)) { _fun0003_ip = 77; continue _fun0003 }
 72:
            var3 = var4.channelId;
 77:
            _closure2_slot0 = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0003_ip = 165; continue _fun0003 }
 140:
            var4 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var2['channel'] = var7;
            var2['showFloatingActionButton'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 165:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = var2.showFloatingActionButton;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 19; continue _fun0004 }
 17:
            var6 = false;
 19:
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var3 = var8.useRoute;
            var3 = var3.bind(var8)();
            var3 = var3.params;
            var3 = var3.channelId;
            _closure2_slot0 = var3;
            var3 = 16;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0004_ip = 147; continue _fun0004 }
 122:
            var4 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var2['channel'] = var7;
            var2['showFloatingActionButton'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 147:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SearchTabsThreadScreen'] = var2;
    return var1;
})();