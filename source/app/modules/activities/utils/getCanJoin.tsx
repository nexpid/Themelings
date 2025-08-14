// app/modules/activities/utils/getCanJoin.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.ActivityFlags;
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getCanJoin.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getCanJoin(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.presenceActivity;
            var9 = var2.currentUserPresenceActivity;
            var3 = var2.currentUserId;
            var10 = var2.message;
            var1 = var2.application;
            var7 = var2.isEmbeddedApplication;
            var4 = var2.isFrameApplication;
            var6 = var2.isGameLaunchable;
            var2 = var10.author;
            var2 = var2.id;
            if(!(var2 !== var3)) { _fun0001_ip = 350; continue _fun0001 }
 67:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var8 = undefined;
            var2 = var3.bind(var8)(var2);
            var1 = var1.id;
            var1 = var2.bind(var8)(var11, var10, var1);
            if(var1) { _fun0001_ip = 111; continue _fun0001 }
 107:
            var1 = false;
            return var1;
 111:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var12 = var2.bind(var8)(var1);
            var1 = var12.getPartySize;
            var12 = var1.bind(var12)(var11);
            var1 = 3;
            var1 = var3[var1];
            var2 = var2.bind(var8)(var1);
            var1 = var2.hasPartySize;
            var1 = var1.bind(var2)(var12);
            var1 = !var1;
            if(var1) { _fun0001_ip = 202; continue _fun0001 }
 171:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 4;
            var2 = var13[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.isPartyFull;
            var1 = var2.bind(var3)(var12);
 202:
            var1 = !var1;
            if(!var1) { _fun0001_ip = 348; continue _fun0001 }
 211:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 5;
            var2 = var12[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.getIsInParty;
            var2 = var2.bind(var3)(var9, var11);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 345; continue _fun0001 }
 249:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 6;
            var3 = var11[var3];
            var9 = var9.bind(var8)(var3);
            var3 = var9.getIsAskToJoin;
            var3 = var3.bind(var9)(var10);
            var3 = !var3;
            if(!var3) { _fun0001_ip = 342; continue _fun0001 }
 286:
            var7 = !var7;
            if(var7) { _fun0001_ip = 295; continue _fun0001 }
 292:
            var7 = !var4;
 295:
            var4 = !var7;
            if(!var7) { _fun0001_ip = 339; continue _fun0001 }
 301:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 7;
            var5 = var9[var5];
            var5 = var7.bind(var8)(var5);
            var5 = var5.isPlatformEmbedded;
            var5 = !var5;
            if(var5) { _fun0001_ip = 336; continue _fun0001 }
 333:
            var5 = !var6;
 336:
            var4 = !var5;
 339:
            var3 = var4;
 342:
            var2 = var3;
 345:
            var1 = var2;
 348:
            return var1;
 350:
            var1 = false;
            return var1;
        }
    };
    var3['getCanJoin'] = var4;
    var2 = function getCanSync(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0002_ip = 197; continue _fun0002 }
 15:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var2 = arg4;
            var3 = var2.id;
            var2 = arg3;
            var2 = var4.bind(var7)(var8, var2, var3);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0002_ip = 194; continue _fun0002 }
 70:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var4 = var4.bind(var7)(var3);
            var3 = _closure1_slot3;
            var3 = var3.SYNC;
            var3 = var4.bind(var7)(var8, var3);
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0002_ip = 191; continue _fun0002 }
 115:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 7;
            var4 = var9[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.isPlatformEmbedded;
            var6 = !var4;
            var4 = !var6;
            if(var6) { _fun0002_ip = 188; continue _fun0002 }
 150:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getIsInParty;
            var5 = arg2;
            var5 = var6.bind(var7)(var5, var8);
            var4 = !var5;
 188:
            var3 = var4;
 191:
            var2 = var3;
 194:
            var1 = var2;
 197:
            return var1;
        }
    };
    var3['getCanSync'] = var2;
    return var1;
})();