// app/modules/guild_scheduled_events/utils/getGuildEventImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/utils/getGuildEventImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildEventImageURL(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var2 = var4.image;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = global;
            var2 = var2.window;
            var2 = var2.screen;
            var3 = var2.width;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.getDevicePixelRatio;
            var2 = var2.bind(var5)();
            var6 = var3 * var2;
case 4:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.getBestMediaProxySize;
            var5 = var2.bind(var5)(var6);
            var2 = global;
            var6 = var2.window;
            var6 = var6.GLOBAL_ENV;
            var13 = var6.CDN_HOST;
            if(!(var1 == var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var2.location;
            var7 = var6.protocol;
            var6 = var2.window;
            var6 = var6.GLOBAL_ENV;
            var6 = var6.API_ENDPOINT;
            var6 = var7 + var6;
            var10 = _closure1_slot2;
            var9 = var10.GUILD_EVENT_IMAGE;
            var8 = var4.id;
            var7 = var4.image;
            var3 = 'png';
            var3 = var9.bind(var10)(var8, var7, var3);
            var3 = var6 + var3;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var16 = var4.id;
            var14 = var4.image;
            var4 = var2.HermesInternal;
            var10 = var4.concat;
            var21 = '';
            var20 = 'https:';
            var19 = '//';
            var17 = '/guild-events/';
            var15 = '/';
            var18 = var13;
            var3 = var21[var10](var20, var19, var18, var17, var16, var15, var14, var13);
case 8:
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '?size=';
            var2 = var4.bind(var2)(var5);
            var2 = var3 + var2;
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();