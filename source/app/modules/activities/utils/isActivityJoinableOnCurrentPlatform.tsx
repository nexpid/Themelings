// app/modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function getCurrentActivityGamePlatform() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 1;
            var1 = var1[var5];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isMetaQuest;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot4;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3.DESKTOP;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = var3.ANDROID;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var3 = _closure1_slot4;
            var1 = var3.META_QUEST;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var2 = _closure1_slot4;
            var1 = var2.IOS;
case 10:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var2 = function isActivityJoinable(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 3;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var3 = _closure1_slot3;
            var3 = var3.JOIN;
            var3 = var4.bind(var5)(var2, var3);
            var1 = !var3;
case 11:
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var2.type;
            var2 = _closure1_slot5;
            var2 = var2.PLAYING;
            var1 = var3 !== var2;
case 13:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var9 = var6.ActivityFlags;
    var _closure1_slot3 = var9;
    var9 = var6.ActivityGamePlatforms;
    var _closure1_slot4 = var9;
    var6 = var6.ActivityTypes;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function isActivityJoinableOnCurrentPlatform(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot7;
            var3 = undefined;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = false;
            return var1;
case 15:
            var1 = _closure1_slot6;
            var4 = var1.bind(var3)();
            var1 = null;
            var7 = var1 == var2;
            var6 = undefined;
            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var6 = var2.platform;
case 17:
            if(!(var1 == var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = _closure1_slot4;
            var5 = var5.DESKTOP;
            _fun0003_ip = 5; continue _fun0003;
case 19:
            var5 = var2.platform;
case 5:
            if(!(var5 !== var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var1 == var2;
            var3 = undefined;
            if(var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var3 = var2.supported_platforms;
case 23:
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var5 = var3.length;
            var2 = 0;
            var1 = var2 !== var5;
case 25:
            if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 27:
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
case 21:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['getCurrentActivityGamePlatform'] = var4;
    var3['isActivityJoinable'] = var2;
    return var1;
})();