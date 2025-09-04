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
    var7 = var4.ActivityActionTypes;
    var _closure1_slot3 = var7;
    var4 = var4.ActivityFlags;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getCanJoin.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getCanJoin(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.presenceActivity;
            var10 = var1.currentUserPresenceActivity;
            var5 = var1.currentUserId;
            var2 = var1.message;
            var8 = var1.application;
            var6 = var1.isEmbeddedApplication;
            var4 = var1.isFrameApplication;
            var1 = var1.isGameLaunchable;
            var3 = var2.author;
            var3 = var3.id;
            if(!(var3 !== var5)) { _fun0001_ip = 495; continue _fun0001 }
 67:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 1;
            var9 = var9[var5];
            var5 = undefined;
            var9 = var11.bind(var5)(var9);
            var8 = var8.id;
            var8 = var9.bind(var5)(var7, var2, var8);
            if(var8) { _fun0001_ip = 119; continue _fun0001 }
 107:
            var8 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var8;
 119:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 2;
            var8 = var12[var8];
            var11 = var9.bind(var5)(var8);
            var8 = var11.getPartySize;
            var11 = var8.bind(var11)(var7);
            var8 = 3;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.hasPartySize;
            var8 = var8.bind(var9)(var11);
            if(!var8) { _fun0001_ip = 483; continue _fun0001 }
 179:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 4;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.isPartyFull;
            var8 = var8.bind(var9)(var11);
            if(var8) { _fun0001_ip = 483; continue _fun0001 }
 216:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.getIsInParty;
            var8 = var8.bind(var9)(var10, var7);
            if(var8) { _fun0001_ip = 471; continue _fun0001 }
 254:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.getIsAskToJoin;
            var8 = var8.bind(var9)(var2);
            if(var8) { _fun0001_ip = 459; continue _fun0001 }
 291:
            if(!var6) { _fun0001_ip = 300; continue _fun0001 }
 294:
            if(var4) { _fun0001_ip = 447; continue _fun0001 }
 300:
            var2 = var2.activity;
            var4 = null;
            var8 = var4 == var2;
            var6 = undefined;
            if(var8) { _fun0001_ip = 322; continue _fun0001 }
 317:
            var6 = var2.type;
 322:
            var2 = _closure1_slot3;
            var2 = var2.JOIN;
            if(!(var6 === var2)) { _fun0001_ip = 375; continue _fun0001 }
 336:
            if(!(var4 != var7)) { _fun0001_ip = 375; continue _fun0001 }
 340:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.getRemoteJoinableActivityPlatform;
            var2 = var2.bind(var6)(var7);
            if(!(var4 == var2)) { _fun0001_ip = 431; continue _fun0001 }
 375:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.isPlatformEmbedded;
            if(!var3) { _fun0001_ip = 407; continue _fun0001 }
 404:
            if(var1) { _fun0001_ip = 419; continue _fun0001 }
 407:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            _fun0001_ip = 429; continue _fun0001;
 419:
            var1 = {'canJoin': true, 'remoteJoinPlatform': null};
 429:
            return var1;
 431:
            var1 = {};
            var3 = true;
            var1['canJoin'] = var3;
            var1['remoteJoinPlatform'] = var2;
            return var1;
 447:
            var1 = {'canJoin': true, 'remoteJoinPlatform': null};
            return var1;
 459:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
 471:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
 483:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
 495:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
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
            var3 = 9;
            var3 = var6[var3];
            var4 = var4.bind(var7)(var3);
            var3 = _closure1_slot4;
            var3 = var3.SYNC;
            var3 = var4.bind(var7)(var8, var3);
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0002_ip = 191; continue _fun0002 }
 115:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 8;
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