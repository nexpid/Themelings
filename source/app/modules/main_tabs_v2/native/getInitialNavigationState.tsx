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
            var13 = arg1;
            var1 = arg2;
            var11 = arguments[3];
            var6 = undefined;
            if(!(var11 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot5;
            var3 = var4.getChannelId;
            var1 = var3.bind(var4)(var13);
case 4:
            var3 = var2 != var1;
            var12 = undefined;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var1;
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getChatLayout;
            var1 = var1.bind(var3)();
            var3 = var1.isChatLockedOpen;
            var1 = arg3;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var2 != var12)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 12:
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
            var15 = {};
            var14 = 'guilds';
            var15['name'] = var14;
            var14 = {};
            var14['guildId'] = var13;
            var14['channelId'] = var12;
            var15['params'] = var14;
            var14 = new Array(1);
            var14[0] = var15;
            var7['routes'] = var14;
            var7['index'] = var10;
            var9['state'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var10 = 'channel';
            var9['name'] = var10;
            var10 = {};
            var10['guildId'] = var13;
            var10['channelId'] = var12;
            var9['params'] = var10;
            var7[1] = var9;
            var7 = var8.bind(var6)(var7);
            var5['routes'] = var7;
            var1[1] = var5;
            _fun0001_ip = 13; continue _fun0001;
case 8:
            var5 = !var3;
            var3 = !var5;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2 != var12;
case 14:
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
            var9['guildId'] = var13;
            var9['channelId'] = var12;
            var9['drawerOpen'] = var11;
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
case 13:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function getInitialMessagesState() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[0];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = false;
case 16:
            var3 = _closure1_slot10;
            var9 = _closure1_slot6;
            var7 = false;
            var10 = undefined;
            var8 = undefined;
            var6 = var5;
            var2 = var10[var3](var9, var8, var7, var6, var5);
            var1 = 1;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function computeInitialNavigationStateWithoutLogging() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getToken;
            var1 = var1.bind(var3)();
            var5 = null;
            if(!(var5 == var1)) { _fun0003_ip = 18; continue _fun0003 }
case 5:
            var3 = {};
            var1 = 'other';
            var3['page'] = var1;
            var1 = new Array(2);
            var1[0] = var3;
            var3 = {};
            var6 = {};
            var4 = 'auth';
            var6['name'] = var4;
            var4 = new Array(1);
            var4[0] = var6;
            var3['routes'] = var4;
            var4 = 0;
            var3['index'] = var4;
            var1[1] = var3;
            return var1;
case 18:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 7;
            var1 = var9[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var1 = var3.getHistory;
            var1 = var1.bind(var3)();
            var7 = var1.location;
            var1 = 8;
            var3 = var9[var1];
            var11 = var8.bind(var4)(var3);
            var10 = var11.matchPath;
            var6 = var7.pathname;
            var3 = {};
            var16 = _closure1_slot7;
            var14 = var16.CHANNEL;
            var17 = 9;
            var12 = var9[var17];
            var12 = var8.bind(var4)(var12);
            var13 = var12.RouteParam;
            var12 = var13.guildId;
            var13 = var12.bind(var13)();
            var12 = var9[var17];
            var12 = var8.bind(var4)(var12);
            var19 = var12.RouteParam;
            var15 = var19.channelId;
            var12 = {};
            var18 = true;
            var12['optional'] = var18;
            var12 = var15.bind(var19)(var12);
            var15 = ':messageId?';
            var12 = var14.bind(var16)(var13, var12, var15);
            var3['path'] = var12;
            var6 = var10.bind(var11)(var6, var3);
            var3 = 10;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var9 = var3.MobileHomeDrawerExperiment;
            var8 = var9.getConfig;
            var3 = {};
            var10 = 'app-start';
            var3['location'] = var10;
            var3 = var8.bind(var9)(var3);
            var3 = var3.landOnHome;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = var5 == var6;
case 19:
            if(!(var5 != var6)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = var7.openChannel;
            var7 = var5 != var8;
            if(!var7) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = var8;
case 23:
            _fun0003_ip = 25; continue _fun0003;
case 21:
            var16 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = var11[var1];
            var10 = var16.bind(var4)(var1);
            var9 = var10.matchPath;
            var1 = _closure1_slot4;
            var8 = var1.lastNonVoiceRoute;
            var1 = {};
            var14 = _closure1_slot7;
            var13 = var14.CHANNEL;
            var12 = var11[var17];
            var12 = var16.bind(var4)(var12);
            var19 = var12.RouteParam;
            var12 = var19.guildId;
            var12 = var12.bind(var19)();
            var11 = var11[var17];
            var11 = var16.bind(var4)(var11);
            var17 = var11.RouteParam;
            var16 = var17.channelId;
            var11 = {};
            var11['optional'] = var18;
            var11 = var16.bind(var17)(var11);
            var11 = var13.bind(var14)(var12, var11, var15);
            var1['path'] = var11;
            var6 = var9.bind(var10)(var8, var1);
            var7 = false;
case 25:
            var8 = var5 == var6;
            var1 = undefined;
            if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var1 = var6.params;
case 26:
            if(!(var5 == var1)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var1 = {};
case 28:
            var6 = var1.channelId;
            var1 = var1.guildId;
            if(!(var5 != var1)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            if(var7) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = _closure1_slot6;
            var7 = var1 !== var5;
case 32:
            var5 = _closure1_slot10;
            var25 = undefined;
            var24 = var1;
            var23 = var6;
            var22 = var7;
            var21 = var3;
            var7 = var25[var5](var24, var23, var22, var21, var20);
            var6 = _closure1_slot2;
            var5 = 2;
            var6 = var6.bind(var4)(var7, var5);
            var5 = 0;
            var7 = var6[var5];
            var5 = 1;
            var6 = var6[var5];
            var5 = 'other';
            if(var7) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var8 = _closure1_slot6;
            var7 = 'guild-channels';
            if(!(var1 === var8)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = 'private-channels';
case 36:
            var5 = var7;
case 34:
            var7 = 'private-channels';
            if(!(var7 !== var5)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var7 = {};
            var7['page'] = var5;
            var7['guildId'] = var1;
            var1 = new Array(2);
            var1[0] = var7;
            var1[1] = var6;
            _fun0003_ip = 40; continue _fun0003;
case 38:
            var7 = {};
            var7['page'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1 = var5;
case 40:
            return var1;
case 30:
            var5 = {};
            var1 = 'private-channels';
            var5['page'] = var1;
            var1 = new Array(2);
            var1[0] = var5;
            var2 = _closure1_slot11;
            var2 = var2.bind(var4)(var3);
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/getInitialNavigationState.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getInitialNavigationState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot12;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 7; continue _fun0004 }
case 41:
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
case 7:
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
        var3 = _closure1_slot12;
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