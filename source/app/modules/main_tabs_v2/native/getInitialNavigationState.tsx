// app/modules/main_tabs_v2/native/getInitialNavigationState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function wrapRouteForRootNavigator(arg1) {
        var3 = arg1;
        var2 = {};
        var1 = 'main';
        var2['name'] = var1;
        var1 = {};
        var1['routes'] = var3;
        var4 = var3.length;
        var3 = 1;
        var3 = var4 - var3;
        var1['index'] = var3;
        var2['state'] = var1;
        var1 = new Array(1);
        var1[0] = var2;
        return var1;
    };
    var _closure1_slot9 = var5;
    var4 = function getInitialGuildState(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot5;
            var3 = var4.getChannelId;
            var1 = var3.bind(var4)(var12);
case 2:
            var3 = var2 != var1;
            var6 = undefined;
            var11 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var1;
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getChatLayout;
            var1 = var1.bind(var3)();
            var3 = var1.isChatLockedOpen;
            var1 = arg3;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var2 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var1 = new Array(2);
            var5 = true;
            var1[0] = var5;
            var5 = {};
            var10 = 0;
            var5['index'] = var10;
            var8 = _closure1_slot9;
            var9 = {};
            var7 = 'tabs';
            var9['name'] = var7;
            var7 = {};
            var14 = {};
            var13 = 'guilds';
            var14['name'] = var13;
            var13 = {};
            var13['guildId'] = var12;
            var13['channelId'] = var11;
            var14['params'] = var13;
            var13 = new Array(1);
            var13[0] = var14;
            var7['routes'] = var13;
            var7['index'] = var10;
            var9['state'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var10 = 'channel';
            var9['name'] = var10;
            var10 = {};
            var10['guildId'] = var12;
            var10['channelId'] = var11;
            var9['params'] = var10;
            var7[1] = var9;
            var7 = var8.bind(var6)(var7);
            var5['routes'] = var7;
            var1[1] = var5;
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var5 = !var3;
            var3 = !var5;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var2 != var11;
case 11:
            var2 = new Array(2);
            var2[0] = var3;
            var3 = {};
            var8 = 0;
            var3['index'] = var8;
            var5 = _closure1_slot9;
            var7 = {};
            var4 = 'tabs';
            var7['name'] = var4;
            var4 = {};
            var10 = {};
            var9 = 'guilds';
            var10['name'] = var9;
            var9 = {};
            var9['guildId'] = var12;
            var9['channelId'] = var11;
            var10['params'] = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var4['routes'] = var9;
            var4['index'] = var8;
            var7['state'] = var4;
            var4 = new Array(1);
            var4[0] = var7;
            var4 = var5.bind(var6)(var4);
            var3['routes'] = var4;
            var2[1] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function computeInitialNavigationStateWithoutLogging() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getToken;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = {};
            var1 = 'other';
            var4['page'] = var1;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = {};
            var6 = {};
            var5 = 'auth';
            var6['name'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var4['routes'] = var5;
            var5 = 0;
            var4['index'] = var5;
            var1[1] = var4;
            return var1;
case 13:
            var14 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 7;
            var1 = var10[var1];
            var5 = undefined;
            var4 = var14.bind(var5)(var1);
            var1 = var4.getHistory;
            var1 = var1.bind(var4)();
            var6 = var1.location;
            var1 = 8;
            var4 = var10[var1];
            var9 = var14.bind(var5)(var4);
            var8 = var9.matchPath;
            var7 = var6.pathname;
            var4 = {};
            var13 = _closure1_slot7;
            var12 = var13.CHANNEL;
            var16 = 9;
            var11 = var10[var16];
            var11 = var14.bind(var5)(var11);
            var15 = var11.RouteParam;
            var11 = var15.guildId;
            var11 = var11.bind(var15)();
            var10 = var10[var16];
            var10 = var14.bind(var5)(var10);
            var15 = var10.RouteParam;
            var14 = var15.channelId;
            var10 = {};
            var17 = true;
            var10['optional'] = var17;
            var10 = var14.bind(var15)(var10);
            var14 = ':messageId?';
            var10 = var12.bind(var13)(var11, var10, var14);
            var4['path'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            if(!(var3 != var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var6.openChannel;
            var6 = var3 != var7;
            if(!var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = var7;
case 17:
            _fun0002_ip = 19; continue _fun0002;
case 15:
            var15 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = var10[var1];
            var9 = var15.bind(var5)(var1);
            var8 = var9.matchPath;
            var1 = _closure1_slot4;
            var7 = var1.lastNonVoiceRoute;
            var1 = {};
            var13 = _closure1_slot7;
            var12 = var13.CHANNEL;
            var11 = var10[var16];
            var11 = var15.bind(var5)(var11);
            var18 = var11.RouteParam;
            var11 = var18.guildId;
            var11 = var11.bind(var18)();
            var10 = var10[var16];
            var10 = var15.bind(var5)(var10);
            var16 = var10.RouteParam;
            var15 = var16.channelId;
            var10 = {};
            var10['optional'] = var17;
            var10 = var15.bind(var16)(var10);
            var10 = var12.bind(var13)(var11, var10, var14);
            var1['path'] = var10;
            var4 = var8.bind(var9)(var7, var1);
            var6 = false;
case 19:
            var7 = var3 == var4;
            var1 = undefined;
            if(var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = var4.params;
case 20:
            if(!(var3 == var1)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = {};
case 22:
            var4 = var1.channelId;
            var1 = var1.guildId;
            if(!(var3 != var1)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot10;
            if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = _closure1_slot6;
            var6 = var1 !== var7;
case 26:
            var6 = var3.bind(var5)(var1, var4, var6);
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var6 = var4[var3];
            var3 = 1;
            var4 = var4[var3];
            var3 = 'other';
            if(var6) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var7 = _closure1_slot6;
            var6 = 'guild-channels';
            if(!(var1 === var7)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = 'private-channels';
case 30:
            var3 = var6;
case 28:
            var6 = 'private-channels';
            if(!(var6 !== var3)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var6 = {};
            var6['page'] = var3;
            var6['guildId'] = var1;
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var4;
            _fun0002_ip = 34; continue _fun0002;
case 32:
            var6 = {};
            var6['page'] = var3;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var4;
            var1 = var3;
case 34:
            return var1;
case 24:
            var3 = {};
            var1 = 'private-channels';
            var3['page'] = var1;
            var1 = new Array(2);
            var1[0] = var3;
            var4 = _closure1_slot10;
            var3 = _closure1_slot6;
            var2 = false;
            var3 = var4.bind(var5)(var3, var5, var2);
            var2 = 1;
            var2 = var3[var2];
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.ME;
    var _closure1_slot6 = var10;
    var6 = var6.Routes;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var9.bind(var1)(var6);
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var14 = 'getInitialNavigationState';
    var15 = var9;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot8 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/getInitialNavigationState.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getInitialNavigationState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.routes;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['default'] = var6;
    var3['wrapRouteForRootNavigator'] = var5;
    var5 = function getInitialAuthState() {
        var1 = {};
        var3 = {};
        var2 = 'auth';
        var3['name'] = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1['routes'] = var2;
        var2 = 0;
        var1['index'] = var2;
        return var1;
    };
    var3['getInitialAuthState'] = var5;
    var3['getInitialGuildState'] = var4;
    var2 = function computeInitialNavigationState() {
        var3 = _closure1_slot11;
        var1 = undefined;
        var1 = var3.bind(var1)();
        var4 = _closure1_slot8;
        var3 = var4.log;
        var2 = 'Initial State:';
        var2 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['computeInitialNavigationState'] = var2;
    return var1;
})();