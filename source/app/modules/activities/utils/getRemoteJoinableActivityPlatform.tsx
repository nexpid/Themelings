// app/modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityFlags;
    var _closure1_slot3 = var7;
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getRemoteJoinableActivityPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getRemoteJoinableActivityPlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var8 = undefined;
            var4 = var4.bind(var8)(var1);
            var1 = var4.getIsRemoteJoinGameInviteEnabled;
            var4 = var1.bind(var4)();
            var1 = null;
            if(var4) { _fun0001_ip = 45; continue _fun0001 }
 43:
            return var1;
 45:
            if(!(var1 != var2)) { _fun0001_ip = 476; continue _fun0001 }
 52:
            var5 = var2.application_id;
            if(!(var1 != var5)) { _fun0001_ip = 474; continue _fun0001 }
 65:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var9 = 5;
            var4 = var4[var9];
            var10 = var6.bind(var8)(var4);
            var6 = var10.hasFlag;
            var2 = var2.flags;
            var11 = var1 != var2;
            var4 = 0;
            if(!var11) { _fun0001_ip = 108; continue _fun0001 }
 105:
            var4 = var2;
 108:
            var2 = _closure1_slot3;
            var2 = var2.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var2 = var6.bind(var10)(var4, var2);
            if(!var2) { _fun0001_ip = 474; continue _fun0001 }
 130:
            var4 = _closure1_slot2;
            var2 = var4.getRemoteApplicationActivity;
            var4 = var2.bind(var4)(var5);
            var5 = var1 == var4;
            var2 = null;
            if(var5) { _fun0001_ip = 472; continue _fun0001 }
 159:
            var11 = var4.platform;
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 2;
            var5 = var10[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.isContextlessEmbeddedActivity;
            var5 = var5.bind(var6)(var4);
            var5 = !var5;
            if(!var5) { _fun0001_ip = 385; continue _fun0001 }
 205:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var13 = 3;
            var6 = var6[var13];
            var10 = var10.bind(var8)(var6);
            var6 = var10.isAndroid;
            var6 = var6.bind(var10)();
            if(var6) { _fun0001_ip = 368; continue _fun0001 }
 240:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var13];
            var10 = var10.bind(var8)(var6);
            var6 = var10.isIOS;
            var6 = var6.bind(var10)();
            if(var6) { _fun0001_ip = 352; continue _fun0001 }
 270:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var13];
            var10 = var10.bind(var8)(var6);
            var6 = var10.isDesktop;
            var6 = var6.bind(var10)();
            var6 = !var6;
            if(!var6) { _fun0001_ip = 333; continue _fun0001 }
 303:
            var12 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var13];
            var12 = var12.bind(var8)(var10);
            var10 = var12.isWeb;
            var10 = var10.bind(var12)();
            var6 = !var10;
 333:
            if(var6) { _fun0001_ip = 350; continue _fun0001 }
 336:
            var10 = _closure1_slot4;
            var10 = var10.DESKTOP;
            var6 = var11 !== var10;
 350:
            _fun0001_ip = 366; continue _fun0001;
 352:
            var10 = _closure1_slot4;
            var10 = var10.IOS;
            var6 = var11 !== var10;
 366:
            _fun0001_ip = 382; continue _fun0001;
 368:
            var10 = _closure1_slot4;
            var10 = var10.ANDROID;
            var6 = var11 !== var10;
 382:
            var5 = var6;
 385:
            var2 = null;
            if(!var5) { _fun0001_ip = 472; continue _fun0001 }
 390:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var6 = var6.bind(var8)(var5);
            var5 = var6.hasFlag;
            var8 = var4.flags;
            var9 = var1 != var8;
            var7 = 0;
            if(!var9) { _fun0001_ip = 430; continue _fun0001 }
 427:
            var7 = var8;
 430:
            var3 = _closure1_slot3;
            var3 = var3.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var5 = var5.bind(var6)(var7, var3);
            var3 = null;
            if(!var5) { _fun0001_ip = 469; continue _fun0001 }
 451:
            var4 = var4.platform;
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 469; continue _fun0001 }
 466:
            var3 = var4;
 469:
            var2 = var3;
 472:
            return var2;
 474:
            return var1;
 476:
            return var1;
        }
    };
    var3['getRemoteJoinableActivityPlatform'] = var2;
    return var1;
})();