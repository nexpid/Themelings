// app/modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityFlags;
    var _closure1_slot4 = var7;
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getRemoteJoinableActivityPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getRemoteJoinableActivityPlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.application_id;
            if(!(var1 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var9 = 4;
            var4 = var4[var9];
            var8 = undefined;
            var10 = var6.bind(var8)(var4);
            var6 = var10.hasFlag;
            var2 = var2.flags;
            var11 = var1 != var2;
            var4 = 0;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var2;
case 6:
            var2 = _closure1_slot4;
            var2 = var2.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var2 = var6.bind(var10)(var4, var2);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var4 = _closure1_slot3;
            var2 = var4.getRemoteApplicationActivity;
            var4 = var2.bind(var4)(var5);
            var5 = var1 == var4;
            var2 = null;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 5;
            var5 = var10[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.isContextlessEmbeddedActivity;
            var5 = var5.bind(var6)(var4);
            var2 = null;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var5 = var4.application_id;
            if(!(var1 != var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot2;
            var6 = var10.isConnected;
            var5 = var4.application_id;
            var5 = var6.bind(var10)(var5);
            var2 = null;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 14:
            var10 = var4.platform;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var11 = 3;
            var5 = var5[var11];
            var6 = var6.bind(var8)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var11];
            var6 = var6.bind(var8)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            var6 = !var5;
            var5 = !var6;
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = _closure1_slot5;
            var6 = var6.IOS;
            var5 = var10 === var6;
case 17:
            _fun0001_ip = 19; continue _fun0001;
case 15:
            var6 = _closure1_slot5;
            var6 = var6.ANDROID;
            var5 = var10 === var6;
case 19:
            var2 = null;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var6 = var6.bind(var8)(var5);
            var5 = var6.hasFlag;
            var8 = var4.flags;
            var9 = var1 != var8;
            var7 = 0;
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var8;
case 20:
            var3 = _closure1_slot4;
            var3 = var3.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var5 = var5.bind(var6)(var7, var3);
            var3 = null;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var4.platform;
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var3 = var4;
case 22:
            var2 = var3;
case 9:
            return var2;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['getRemoteJoinableActivityPlatform'] = var2;
    return var1;
})();