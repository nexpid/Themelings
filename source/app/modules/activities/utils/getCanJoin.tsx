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
case 0:
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
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 1;
            var9 = var9[var5];
            var5 = undefined;
            var9 = var11.bind(var5)(var9);
            var8 = var8.id;
            var8 = var9.bind(var5)(var7, var2, var8);
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var8;
case 4:
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
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 4;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.isPartyFull;
            var8 = var8.bind(var9)(var11);
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.getIsInParty;
            var8 = var8.bind(var9)(var10, var7);
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.getIsAskToJoin;
            var8 = var8.bind(var9)(var2);
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(!var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var2 = var2.activity;
            var4 = null;
            var8 = var4 == var2;
            var6 = undefined;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var2.type;
case 16:
            var2 = _closure1_slot3;
            var2 = var2.JOIN;
            if(!(var6 === var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var4 != var7)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.getRemoteJoinableActivityPlatform;
            var2 = var2.bind(var6)(var7);
            if(!(var4 == var2)) { _fun0001_ip = 21; continue _fun0001 }
case 18:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.platformSupportsActivityJoin;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 22:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            _fun0001_ip = 25; continue _fun0001;
case 24:
            var1 = {'canJoin': true, 'remoteJoinPlatform': null};
case 25:
            return var1;
case 21:
            var1 = {};
            var3 = true;
            var1['canJoin'] = var3;
            var1['remoteJoinPlatform'] = var2;
            return var1;
case 15:
            var1 = {'canJoin': true, 'remoteJoinPlatform': null};
            return var1;
case 11:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
case 9:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
case 6:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
case 2:
            var1 = {'canJoin': false, 'remoteJoinPlatform': null};
            return var1;
        }
    };
    var3['getCanJoin'] = var4;
    var2 = function getCanSync(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
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
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
            if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 8;
            var4 = var9[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.isPlatformEmbedded;
            var6 = !var4;
            var4 = !var6;
            if(var6) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getIsInParty;
            var5 = arg2;
            var5 = var6.bind(var7)(var5, var8);
            var4 = !var5;
case 32:
            var3 = var4;
case 30:
            var2 = var3;
case 28:
            var1 = var2;
case 26:
            return var1;
        }
    };
    var3['getCanSync'] = var2;
    return var1;
})();