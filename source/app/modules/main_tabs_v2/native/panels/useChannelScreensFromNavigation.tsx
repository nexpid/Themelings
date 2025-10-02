// app/modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function getActiveTabsRoute(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.state;
            var6 = var2 == var4;
            var5 = undefined;
            var1 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.routes;
            var7 = var3.state;
            var8 = var2 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var7.index;
case 6:
            if(!(var2 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var3.state;
            var9 = var2 == var7;
            var8 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var7.routes;
            var8 = var7.length;
case 10:
            var7 = 1;
            var4 = var8 - var7;
case 8:
            var1 = var6[var4];
case 4:
            if(!(var2 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var3.params;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var6.screen;
case 14:
            if(!(var2 == var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getRootNavigationRef;
            var4 = var4.bind(var6)();
            var2 = var2 == var4;
            var5 = undefined;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var4.isReady;
            var5 = var2.bind(var4)();
case 18:
            var2 = true;
            if(!(var2 !== var5)) { _fun0001_ip = 20; continue _fun0001 }
case 2:
            var2 = undefined;
            return var2;
case 20:
            var2 = var4.getCurrentRoute;
            var2 = var2.bind(var4)();
            return var2;
case 16:
            var2 = {};
            var4 = 'resolved';
            var2['key'] = var4;
            var4 = var3.params;
            var4 = var4.screen;
            var2['name'] = var4;
            var3 = var3.params;
            var3 = var3.params;
            var2['params'] = var3;
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = function resolveBackgroundScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.routes;
            var8 = 0;
            var3 = var1[var8];
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var1 = var1[var7];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.coerceTabsRoute;
            var2 = var1.bind(var2)(var3);
            var6 = null;
            if(!(var6 != var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = _closure1_slot11;
            var3 = var1.bind(var4)(var2);
            if(!(var6 != var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var2 = var2.bind(var4)(var1);
            var1 = var2.coerceGuildsRoute;
            var7 = var1.bind(var2)(var3);
            if(!(var6 != var7)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var7.params;
            var2 = var6 == var1;
            var3 = undefined;
            if(var2) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = var1.guildId;
case 27:
            var1 = var7.params;
            var9 = var6 == var1;
            var2 = undefined;
            if(var9) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var1.channelId;
case 29:
            var9 = var6 != var2;
            var1 = undefined;
            if(!var9) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = var2;
case 31:
            if(!(var6 != var1)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var2 = _closure1_slot9;
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var9 = _closure1_slot5;
            var2 = var9.getChannel;
            var2 = var2.bind(var9)(var1);
            if(!(var6 == var2)) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            var2 = new Array(0);
            return var2;
case 35:
            var2 = {};
            var2['index'] = var8;
            var7 = var7.params;
            var8 = var6 == var7;
            var4 = undefined;
            if(var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var4 = var7.search;
case 38:
            if(!(var6 != var4)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            if(var4) { _fun0002_ip = 42; continue _fun0002 }
case 40:
            var4 = _closure1_slot10;
            var4 = var4.BACKGROUND_SAVED;
            _fun0002_ip = 43; continue _fun0002;
case 42:
            var5 = _closure1_slot10;
            var4 = var5.FALLBACK_RENDERED;
case 43:
            var2['type'] = var4;
            var2['guildId'] = var3;
            var2['channelId'] = var1;
            var1 = false;
            var2['showCreateThread'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
case 33:
            var1 = new Array(0);
            return var1;
case 25:
            var1 = new Array(0);
            return var1;
case 23:
            var1 = new Array(0);
            return var1;
case 21:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function resolveChannelScreens(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var5 = new Array(0);
            var1 = var8.index;
            var4 = 0;
            var1 = var4 <= var1;
            var10 = 8;
            var7 = undefined;
            var9 = null;
            var3 = 0;
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 44:
            var1 = var8.routes;
            var12 = var1[var3];
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var11 = var11.bind(var7)(var1);
            var1 = var11.coerceChannelRoute;
            var12 = var1.bind(var11)(var12);
            if(!(var9 != var12)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var11 = var5.push;
            var1 = {};
            var13 = var5.length;
            var1['index'] = var13;
            var13 = _closure1_slot10;
            var13 = var13.DEFAULT;
            var1['type'] = var13;
            var13 = var12.params;
            var13 = var13.guildId;
            var1['guildId'] = var13;
            var13 = var12.params;
            var13 = var13.channelId;
            var1['channelId'] = var13;
            var12 = var12.params;
            var12 = var12.showCreateThread;
            var1['showCreateThread'] = var12;
            var1 = var11.bind(var5)(var1);
case 45:
            var3 = var3 + 1;
            var1 = var8.index;
            if(var3 <= var1) { _fun0003_ip = 44; continue _fun0003 }
case 18:
            var1 = arg2;
            var1 = var1.isChatLockedOpen;
            if(!var1) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var1 = _closure1_slot12;
            var3 = var1.bind(var7)(var8);
            var _closure2_slot0 = var3;
            var1 = var3.length;
            if(!(!(var1 > var4))) { _fun0003_ip = 49; continue _fun0003 }
case 47:
            var9 = var5.length;
            var1 = var5;
            if(!(!(var9 > var4))) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var6 = _closure1_slot12;
            var1 = var6.bind(var7)(var8);
case 50:
            return var1;
case 49:
            var1 = new Array(0);
            var16 = var1;
            var15 = var3;
            var14 = 0;
            var14 = arraySpread(var16, var15, var14);
            var4 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = var1;
                var4 = var2;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.index;
                var2 = _closure2_slot0;
                var2 = var2.length;
                var3 = var3 + var2;
                var2 = 'index';
                var1[var2] = var3;
                return var1;
            };
            var15 = var4.bind(var5)(var2);
            var16 = var1;
            var2 = arraySpread(var16, var15, var14);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var11 = 0;
    var5 = var8[var11];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var10 = 1;
    var9 = var8[var10];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var9 = 2;
    var5 = var8[var9];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.ME;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.isStaticChannelRoute;
    var _closure1_slot9 = var5;
    var5 = {};
    var5['DEFAULT'] = var11;
    var6 = 'DEFAULT';
    var5[var11] = var6;
    var5['BACKGROUND_SAVED'] = var10;
    var6 = 'BACKGROUND_SAVED';
    var5[var10] = var6;
    var5['FALLBACK_RENDERED'] = var9;
    var6 = 'FALLBACK_RENDERED';
    var5[var9] = var6;
    var _closure1_slot10 = var5;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useChannelScreensFromNavigation(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 9;
        var3 = var5[var3];
        var8 = undefined;
        var3 = var4.bind(var8)(var3);
        var3 = var3.bind(var8)();
        var _closure2_slot1 = var3;
        var5 = _closure1_slot4;
        var6 = var5.useState;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = _closure2_slot0;
                var2 = var3.getState;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                var2 = var1.length;
                var7 = 0;
                if(!(!(var2 > var7))) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                var3 = _closure1_slot7;
                var2 = var3.getGuildId;
                var4 = var2.bind(var3)();
                var3 = _closure1_slot6;
                var2 = var3.getChannelId;
                var2 = var2.bind(var3)();
                var6 = null;
                if(!(var6 != var2)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                var3 = {};
                var3['index'] = var7;
                var7 = _closure1_slot10;
                var7 = var7.FALLBACK_RENDERED;
                var3['type'] = var7;
                if(!(var6 == var4)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                var4 = _closure1_slot8;
case 56:
                var3['guildId'] = var4;
                var3['channelId'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                _fun0004_ip = 27; continue _fun0004;
case 54:
                var2 = new Array(0);
case 27:
                var1 = var2;
case 52:
                return var1;
            }
        };
        var6 = var6.bind(var5)(var4);
        var4 = _closure1_slot3;
        var1 = 2;
        var6 = var4.bind(var8)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot2 = var4;
        var8 = var5.useCallback;
        var6 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var2 = var3.length;
                var1 = 0;
                if(!(!(var2 > var1))) { _fun0005_ip = 60; continue _fun0005 }
case 58:
                var4 = _closure2_slot2;
                var2 = undefined;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var5 = arg1;
                        var2 = var5.length;
                        var4 = 0;
                        var1 = var5;
                        if(!(var4 !== var2)) { _fun0006_ip = 8; continue _fun0006 }
case 61:
                        var2 = var5[var4];
                        var6 = var2.type;
                        var3 = _closure1_slot10;
                        var3 = var3.FALLBACK_RENDERED;
                        var1 = var5;
                        if(!(var6 !== var3)) { _fun0006_ip = 8; continue _fun0006 }
case 62:
                        var3 = {};
                        var7 = var5[var4];
                        var8 = var3;
                        var4 = copyDataProperties(var8, var7);
                        var2 = _closure1_slot10;
                        var4 = var2.FALLBACK_RENDERED;
                        var2 = 'type';
                        var3[var2] = var4;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 8:
                        return var1;
                    }
                };
                var1 = var4.bind(var2)(var1);
                _fun0005_ip = 63; continue _fun0005;
case 60:
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var4 = new Array(0);
        var6 = var8.bind(var5)(var6, var4);
        var _closure2_slot3 = var6;
        var8 = var5.useEffect;
        var4 = new Array(3);
        var4[0] = var7;
        var4[1] = var3;
        var4[2] = var6;
        var3 = function() {
            var5 = _closure1_slot13;
            var3 = _closure2_slot0;
            var1 = var3.getState;
            var4 = var1.bind(var3)();
            var3 = _closure2_slot1;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var2 = _closure2_slot3;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var3 = var8.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var5 = function handleStateChange(arg1) {
                var4 = _closure1_slot13;
                var2 = arg1;
                var2 = var2.data;
                var3 = var2.state;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.getChatLayout;
                var2 = var2.bind(var5)();
                var3 = var4.bind(var1)(var3, var2);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var _closure3_slot0 = var5;
            var4 = _closure2_slot0;
            var3 = var4.addListener;
            var2 = 'state';
            var2 = var3.bind(var4)(var2, var5);
            var1 = function() {
                var4 = _closure2_slot0;
                var3 = var4.removeListener;
                var2 = _closure3_slot0;
                var1 = 'state';
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var6;
    var3['ChannelScreenType'] = var5;
    var3['getActiveTabsRoute'] = var4;
    var2 = function isActiveTabsGuilds(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.routes;
            var1 = 0;
            var4 = var2[var1];
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var1 = var1[var7];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.coerceTabsRoute;
            var4 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 64; continue _fun0007 }
case 9:
            var1 = _closure1_slot11;
            var5 = var1.bind(var6)(var4);
            var1 = var3 != var5;
            if(!var1) { _fun0007_ip = 57; continue _fun0007 }
case 65:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var4 = var4.bind(var6)(var2);
            var2 = var4.coerceGuildsRoute;
            var2 = var2.bind(var4)(var5);
            var1 = var3 != var2;
case 57:
            return var1;
case 64:
            var1 = false;
            return var1;
        }
    };
    var3['isActiveTabsGuilds'] = var2;
    return var1;
})();