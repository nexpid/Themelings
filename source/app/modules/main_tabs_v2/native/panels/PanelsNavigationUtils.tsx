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
            var10 = 0;
            var3 = var1[var10];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var7 = null;
            if(!(var7 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.getState;
            var11 = var3.bind(var4)();
            if(!(var7 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 1;
            var3 = var3[var9];
            var6 = var5.bind(var1)(var3);
            var5 = var6.coerceMainRoute;
            var3 = var11.routes;
            var3 = var3[var10];
            var3 = var5.bind(var6)(var3);
            if(!(var7 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = var3.state;
            if(!(var7 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var5 = var6.index;
            if(!(var10 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var12 = var8.bind(var1)(var5);
            var8 = var12.coerceChannelRoute;
            var5 = var6.routes;
            var5 = var5[var9];
            var5 = var8.bind(var12)(var5);
            if(!(var7 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var12 = var8.bind(var1)(var5);
            var8 = var12.coerceTabsRoute;
            var5 = var6.routes;
            var5 = var5[var10];
            var13 = var8.bind(var12)(var5);
            if(!(var7 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var12 = var8.bind(var1)(var5);
            var8 = var12.coerceGuildsRoute;
            var14 = var13.state;
            var15 = var7 == var14;
            var5 = undefined;
            if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var14.routes;
            var15 = var13.state;
            var16 = var7 == var15;
            var13 = undefined;
            if(var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var15.index;
case 12:
            var5 = var14[var13];
case 10:
            var5 = var8.bind(var12)(var5);
            if(!(var7 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 14:
            var5 = {};
            var19 = var5;
            var18 = var6;
            var7 = copyDataProperties(var19, var18);
            var7 = var6.index;
            var7 = var7 - var9;
            var8 = 'index';
            var5[var8] = var7;
            var7 = var6.routes;
            var10 = var7[var10];
            var7 = new Array(1);
            var7[0] = var10;
            var12 = var6.routes;
            var10 = var12.slice;
            var6 = 2;
            var18 = var10.bind(var12)(var6);
            var19 = var7;
            var17 = var9;
            var10 = arraySpread(var19, var18, var17);
            var10 = 'routes';
            var5[var10] = var7;
            var3['state'] = var5;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = var11.routes;
            var3 = var5.slice;
            var18 = var3.bind(var5)(var9);
            var19 = var7;
            var3 = arraySpread(var19, var18, var17);
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var19 = var2;
            var18 = var11;
            var11 = copyDataProperties(var19, var18);
            var2[var10] = var7;
            var7 = var7.length;
            var7 = var7 - var9;
            var2[var8] = var7;
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
            var10 = 0;
            var3 = var1[var10];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var13 = null;
            if(!(var13 != var4)) { _fun0002_ip = 15; continue _fun0002 }
case 3:
            var3 = var4.getState;
            var11 = var3.bind(var4)();
            if(!(var13 != var11)) { _fun0002_ip = 15; continue _fun0002 }
case 4:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 1;
            var3 = var3[var9];
            var6 = var5.bind(var1)(var3);
            var5 = var6.coerceMainRoute;
            var3 = var11.routes;
            var3 = var3[var10];
            var3 = var5.bind(var6)(var3);
            if(!(var13 != var3)) { _fun0002_ip = 15; continue _fun0002 }
case 5:
            var6 = var3.state;
            if(!(var13 != var6)) { _fun0002_ip = 15; continue _fun0002 }
case 6:
            var5 = var11.index;
            if(!(var10 === var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = var6.index;
            if(!(var10 !== var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var8 = var7.bind(var1)(var5);
            var7 = var8.coerceChannelRoute;
            var5 = var6.routes;
            var5 = var5[var9];
            var5 = var7.bind(var8)(var5);
            if(!(var13 != var5)) { _fun0002_ip = 20; continue _fun0002 }
case 16:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var8 = var7.bind(var1)(var5);
            var7 = var8.coerceTabsRoute;
            var5 = var6.routes;
            var5 = var5[var10];
            var12 = var7.bind(var8)(var5);
            if(!(var13 != var12)) { _fun0002_ip = 15; continue _fun0002 }
case 21:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var8 = var7.bind(var1)(var5);
            var7 = var8.coerceGuildsRoute;
            var14 = var12.state;
            var15 = var13 == var14;
            var5 = undefined;
            if(var15) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var14 = var14.routes;
            var15 = var12.state;
            var16 = var13 == var15;
            var12 = undefined;
            if(var16) { _fun0002_ip = 24; continue _fun0002 }
case 10:
            var12 = var15.index;
case 24:
            var5 = var14[var12];
case 22:
            var14 = var7.bind(var8)(var5);
            if(!(var13 != var14)) { _fun0002_ip = 15; continue _fun0002 }
case 25:
            var5 = {};
            var20 = var5;
            var19 = var6;
            var7 = copyDataProperties(var20, var19);
            var7 = var6.index;
            var7 = var7 + var9;
            var8 = 'index';
            var5[var8] = var7;
            var7 = var6.routes;
            var10 = var7[var10];
            var7 = new Array(2);
            var7[0] = var10;
            var10 = {};
            var12 = 'channel';
            var10['name'] = var12;
            var15 = var14.params;
            var16 = var13 == var15;
            var12 = undefined;
            if(var16) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var12 = var15.channelId;
case 26:
            if(!(var13 == var12)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var15 = 3;
            var15 = var17[var15];
            var16 = var16.bind(var1)(var15);
            var15 = var16.v4;
            var17 = var15.bind(var16)();
            var15 = global;
            var15 = var15.HermesInternal;
            var16 = var15.concat;
            var15 = 'channel-';
            var12 = var16.bind(var15)(var17);
case 28:
            var10['key'] = var12;
            var12 = {};
            var16 = var14.params;
            var17 = var13 == var16;
            var15 = undefined;
            if(var17) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var15 = var16.channelId;
case 30:
            var12['channelId'] = var15;
            var14 = var14.params;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = var14.guildId;
case 32:
            var12['guildId'] = var13;
            var10['params'] = var12;
            var7[1] = var10;
            var10 = var6.routes;
            var6 = var10.slice;
            var19 = var6.bind(var10)(var9);
            var6 = 2;
            var20 = var7;
            var18 = var6;
            var10 = arraySpread(var20, var19, var18);
            var10 = 'routes';
            var5[var10] = var7;
            var3['state'] = var5;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = var11.routes;
            var3 = var5.slice;
            var19 = var3.bind(var5)(var9);
            var20 = var7;
            var18 = var9;
            var3 = arraySpread(var20, var19, var18);
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var20 = var2;
            var19 = var11;
            var11 = copyDataProperties(var20, var19);
            var2[var10] = var7;
            var7 = var7.length;
            var7 = var7 - var9;
            var2[var8] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 15:
            return var1;
case 20:
            return var1;
case 18:
            return var1;
        }
    };
    var3['convertLandscapeToPortraitScreens'] = var2;
    return var1;
})();