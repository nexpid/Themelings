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
            var6 = var1.presenceActivity;
            var10 = var1.currentUserPresenceActivity;
            var4 = var1.currentUserId;
            var3 = var1.message;
            var8 = var1.application;
            var7 = var1.isEmbeddedApplication;
            var5 = var1.isFrameApplication;
            var1 = var1.isGameLaunchable;
            var2 = var3.author;
            var2 = var2.id;
            if(!(var2 !== var4)) { _fun0001_ip = 490; continue _fun0001 }
 67:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 1;
            var9 = var9[var4];
            var4 = undefined;
            var9 = var11.bind(var4)(var9);
            var8 = var8.id;
            var8 = var9.bind(var4)(var6, var3, var8);
            if(var8) { _fun0001_ip = 123; continue _fun0001 }
 107:
            var8 = {'canJoin': false, 'isRemoteJoin': false};
            return var8;
 123:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 2;
            var8 = var12[var8];
            var11 = var9.bind(var4)(var8);
            var8 = var11.getPartySize;
            var11 = var8.bind(var11)(var6);
            var8 = 3;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.hasPartySize;
            var8 = var8.bind(var9)(var11);
            if(!var8) { _fun0001_ip = 474; continue _fun0001 }
 183:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 4;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.isPartyFull;
            var8 = var8.bind(var9)(var11);
            if(var8) { _fun0001_ip = 474; continue _fun0001 }
 220:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getIsInParty;
            var8 = var8.bind(var9)(var10, var6);
            if(var8) { _fun0001_ip = 474; continue _fun0001 }
 258:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getIsAskToJoin;
            var8 = var8.bind(var9)(var3);
            if(var8) { _fun0001_ip = 474; continue _fun0001 }
 295:
            if(!var7) { _fun0001_ip = 304; continue _fun0001 }
 298:
            if(var5) { _fun0001_ip = 458; continue _fun0001 }
 304:
            var5 = var3.activity;
            var3 = null;
            var8 = var3 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 326; continue _fun0001 }
 321:
            var7 = var5.type;
 326:
            var5 = _closure1_slot3;
            var5 = var5.JOIN;
            if(!(var7 === var5)) { _fun0001_ip = 378; continue _fun0001 }
 340:
            if(!(var3 != var6)) { _fun0001_ip = 378; continue _fun0001 }
 344:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isActivityRemoteJoinable;
            var3 = var3.bind(var5)(var6);
            if(var3) { _fun0001_ip = 442; continue _fun0001 }
 378:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.isPlatformEmbedded;
            if(!var2) { _fun0001_ip = 410; continue _fun0001 }
 407:
            if(var1) { _fun0001_ip = 426; continue _fun0001 }
 410:
            var1 = {'canJoin': false, 'isRemoteJoin': false};
            _fun0001_ip = 440; continue _fun0001;
 426:
            var1 = {'canJoin': true, 'isRemoteJoin': false};
 440:
            _fun0001_ip = 456; continue _fun0001;
 442:
            var1 = {'canJoin': true, 'isRemoteJoin': true};
 456:
            _fun0001_ip = 472; continue _fun0001;
 458:
            var1 = {'canJoin': true, 'isRemoteJoin': false};
 472:
            _fun0001_ip = 488; continue _fun0001;
 474:
            var1 = {'canJoin': false, 'isRemoteJoin': false};
 488:
            return var1;
 490:
            var1 = {'canJoin': false, 'isRemoteJoin': false};
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