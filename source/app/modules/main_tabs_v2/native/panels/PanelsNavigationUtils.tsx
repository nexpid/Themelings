// app/modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function convertPortraitToLandscapeScreens() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var3 = var1[var8];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.getState;
            var9 = var3.bind(var4)();
            if(!(var5 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var12 = 1;
            var3 = var3[var12];
            var7 = var6.bind(var1)(var3);
            var6 = var7.coerceMainRoute;
            var3 = var9.routes;
            var3 = var3[var8];
            var11 = var6.bind(var7)(var3);
            if(!(var5 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = var11.state;
            if(!(var5 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = var6.index;
            if(!(var8 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var10 = var7.bind(var1)(var3);
            var7 = var10.coerceChannelRoute;
            var3 = var6.routes;
            var3 = var3[var12];
            var3 = var7.bind(var10)(var3);
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var10 = var7.bind(var1)(var3);
            var7 = var10.coerceTabsRoute;
            var3 = var6.routes;
            var3 = var3[var8];
            var13 = var7.bind(var10)(var3);
            if(!(var5 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var10 = var7.bind(var1)(var3);
            var7 = var10.coerceGuildsRoute;
            var14 = var13.state;
            var15 = var5 == var14;
            var3 = undefined;
            if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var14.routes;
            var15 = var13.state;
            var16 = var5 == var15;
            var13 = undefined;
            if(var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var15.index;
case 12:
            var3 = var14[var13];
case 10:
            var3 = var7.bind(var10)(var3);
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 14:
            var3 = {};
            var19 = var3;
            var18 = var6;
            var5 = copyDataProperties(var19, var18);
            var5 = var6.index;
            var5 = var5 - var12;
            var7 = 'index';
            var3[var7] = var5;
            var5 = var6.routes;
            var10 = var5[var8];
            var5 = new Array(1);
            var5[0] = var10;
            var13 = var6.routes;
            var10 = var13.slice;
            var6 = 2;
            var18 = var10.bind(var13)(var6);
            var19 = var5;
            var17 = var12;
            var10 = arraySpread(var19, var18, var17);
            var10 = 'routes';
            var3[var10] = var5;
            var11['state'] = var3;
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var19 = var2;
            var18 = var9;
            var9 = copyDataProperties(var19, var18);
            var9 = new Array(1);
            var9[0] = var11;
            var2[var10] = var9;
            var2[var7] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['convertPortraitToLandscapeScreens'] = var4;
    var2 = function convertLandscapeToPortraitScreens() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var3 = var1[var8];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var14 = null;
            if(!(var14 != var4)) { _fun0002_ip = 15; continue _fun0002 }
case 3:
            var3 = var4.getState;
            var9 = var3.bind(var4)();
            if(!(var14 != var9)) { _fun0002_ip = 15; continue _fun0002 }
case 4:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var12 = 1;
            var3 = var3[var12];
            var6 = var5.bind(var1)(var3);
            var5 = var6.coerceMainRoute;
            var3 = var9.routes;
            var3 = var3[var8];
            var11 = var5.bind(var6)(var3);
            if(!(var14 != var11)) { _fun0002_ip = 15; continue _fun0002 }
case 5:
            var6 = var11.state;
            if(!(var14 != var6)) { _fun0002_ip = 15; continue _fun0002 }
case 6:
            var3 = var6.index;
            if(!(var8 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 7:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var7 = var5.bind(var1)(var3);
            var5 = var7.coerceChannelRoute;
            var3 = var6.routes;
            var3 = var3[var12];
            var3 = var5.bind(var7)(var3);
            if(!(var14 != var3)) { _fun0002_ip = 15; continue _fun0002 }
case 8:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var7 = var5.bind(var1)(var3);
            var5 = var7.coerceTabsRoute;
            var3 = var6.routes;
            var3 = var3[var8];
            var10 = var5.bind(var7)(var3);
            if(!(var14 != var10)) { _fun0002_ip = 15; continue _fun0002 }
case 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var7 = var5.bind(var1)(var3);
            var5 = var7.coerceGuildsRoute;
            var13 = var10.state;
            var15 = var14 == var13;
            var3 = undefined;
            if(var15) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = var13.routes;
            var15 = var10.state;
            var16 = var14 == var15;
            var10 = undefined;
            if(var16) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var10 = var15.index;
case 12:
            var3 = var13[var10];
case 10:
            var15 = var5.bind(var7)(var3);
            if(!(var14 != var15)) { _fun0002_ip = 15; continue _fun0002 }
case 14:
            var3 = {};
            var21 = var3;
            var20 = var6;
            var5 = copyDataProperties(var21, var20);
            var5 = var6.index;
            var5 = var5 + var12;
            var7 = 'index';
            var3[var7] = var5;
            var5 = var6.routes;
            var10 = var5[var8];
            var5 = new Array(2);
            var5[0] = var10;
            var10 = {};
            var13 = 'channel';
            var10['name'] = var13;
            var16 = var15.params;
            var17 = var14 == var16;
            var13 = undefined;
            if(var17) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var13 = var16.channelId;
case 16:
            if(!(var14 == var13)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var16 = 3;
            var16 = var18[var16];
            var17 = var17.bind(var1)(var16);
            var16 = var17.v4;
            var18 = var16.bind(var17)();
            var16 = global;
            var16 = var16.HermesInternal;
            var17 = var16.concat;
            var16 = 'channel-';
            var13 = var17.bind(var16)(var18);
case 18:
            var10['key'] = var13;
            var13 = {};
            var17 = var15.params;
            var18 = var14 == var17;
            var16 = undefined;
            if(var18) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var16 = var17.channelId;
case 20:
            var13['channelId'] = var16;
            var15 = var15.params;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var14 = var15.guildId;
case 22:
            var13['guildId'] = var14;
            var10['params'] = var13;
            var5[1] = var10;
            var10 = var6.routes;
            var6 = var10.slice;
            var20 = var6.bind(var10)(var12);
            var6 = 2;
            var21 = var5;
            var19 = var6;
            var10 = arraySpread(var21, var20, var19);
            var10 = 'routes';
            var3[var10] = var5;
            var11['state'] = var3;
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var21 = var2;
            var20 = var9;
            var9 = copyDataProperties(var21, var20);
            var9 = new Array(1);
            var9[0] = var11;
            var2[var10] = var9;
            var2[var7] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 15:
            return var1;
        }
    };
    var3['convertLandscapeToPortraitScreens'] = var2;
    return var1;
})();