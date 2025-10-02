// app/modules/panels/isChannelFocused.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getFocusedChannelId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var2);
            var2 = var6.getRootNavigationRef;
            var6 = var2.bind(var6)();
            var2 = 5;
            var2 = var5[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.getChatLayout;
            var2 = var2.bind(var4)();
            var4 = var2.isChatLockedOpen;
            var5 = null;
            if(!(var5 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.isReady;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var6.getCurrentRoute;
            var8 = var2.bind(var6)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 3;
            var2 = var2[var9];
            var6 = var6.bind(var3)(var2);
            var2 = var6.coerceChannelRoute;
            var2 = var2.bind(var6)(var8);
            if(!(var5 == var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var7 = var7.bind(var3)(var6);
            var6 = var7.coerceGuildsRoute;
            var6 = var6.bind(var7)(var8);
            if(!(var5 == var6)) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            return var3;
case 9:
            var7 = var6.params;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var7.channelId;
case 10:
            return var6;
case 5:
            var2 = var2.params;
            var2 = var2.channelId;
            return var2;
case 2:
            var2 = _closure1_slot5;
            if(!(var5 === var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var6 = 2;
            var6 = var2[var6];
            var6 = var7.bind(var3)(var6);
            var9 = var6.bind(var3)();
            var6 = _closure1_slot0;
            var7 = 3;
            var2 = var2[var7];
            var8 = var6.bind(var3)(var2);
            var6 = var8.coerceMainRoute;
            var10 = var5 == var9;
            var2 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var9.routes;
            var11 = var5 == var10;
            var2 = undefined;
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var12 = var5 == var9;
            var11 = undefined;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var9.index;
case 17:
            var12 = var5 != var11;
            var9 = 0;
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var11;
case 19:
            var2 = var10[var9];
case 14:
            var9 = var6.bind(var8)(var2);
            var6 = var5 != var9;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var7];
            var8 = var8.bind(var3)(var6);
            if(var4) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var8.coerceChannelRoute;
            var10 = var9.state;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var11 = var10.routes;
            var10 = var5 == var11;
            var4 = undefined;
            if(var10) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var10 = var9.state;
            var13 = var5 == var10;
            var12 = undefined;
            if(var13) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var12 = var10.index;
case 28:
            var13 = var5 != var12;
            var10 = 0;
            if(!var13) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = var12;
case 30:
            var4 = var11[var10];
case 25:
            var4 = var6.bind(var8)(var4);
            var6 = var5 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 32:
            var6 = var4.params;
            var10 = var5 == var6;
            var4 = undefined;
            if(var10) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var4 = var6.channelId;
case 33:
            var2 = var4;
            _fun0001_ip = 21; continue _fun0001;
case 23:
            var6 = var8.coerceTabsRoute;
            var10 = var9.state;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var10 = var10.routes;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 35; continue _fun0001 }
case 37:
            var9 = var9.state;
            var12 = var5 == var9;
            var11 = undefined;
            if(var12) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var11 = var9.index;
case 38:
            var12 = var5 != var11;
            var9 = 0;
            if(!var12) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var9 = var11;
case 40:
            var4 = var10[var9];
case 35:
            var8 = var6.bind(var8)(var4);
            var4 = var5 != var8;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 21; continue _fun0001 }
case 42:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var7 = var6.bind(var3)(var4);
            var6 = var7.coerceGuildsRoute;
            var9 = var8.state;
            var10 = var5 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = var9.routes;
            var10 = var5 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 43; continue _fun0001 }
case 45:
            var8 = var8.state;
            var11 = var5 == var8;
            var10 = undefined;
            if(var11) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var10 = var8.index;
case 46:
            var11 = var5 != var10;
            var8 = 0;
            if(!var11) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var8 = var10;
case 48:
            var4 = var9[var8];
case 43:
            var4 = var6.bind(var7)(var4);
            var6 = var5 != var4;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 21; continue _fun0001 }
case 50:
            var4 = var4.params;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var3 = var4.channelId;
case 51:
            var2 = var3;
case 21:
            _closure1_slot5 = var2;
case 12:
            var1 = _closure1_slot5;
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function isChannelFocused() {
        var2 = _closure1_slot6;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot4 = var6;
    var6 = null;
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/panels/isChannelFocused.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getFocusedChannelId'] = var5;
    var3['isChannelFocused'] = var4;
    var2 = function useIsChannelFocused() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var1 = function() {
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var7 = var4.bind(var5)(var1);
        var6 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var7 = var6.bind(var4)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot0 = var6;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 5;
        var3 = var7[var3];
        var3 = var6.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var6 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = _closure1_slot7;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getRootNavigationRef;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var3 = null;
                if(!(var3 == var5)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                return var2;
case 53:
                var4 = function handleStateChange() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot1 = var4;
                var3 = var5.addListener;
                var2 = 'state';
                var2 = var3.bind(var5)(var2, var4);
                var1 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot1;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useIsChannelFocused'] = var2;
    return var1;
})();