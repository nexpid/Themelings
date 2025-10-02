// app/modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var1 = var8.length;
            var6 = 1;
            var5 = var1 - var6;
            var3 = global;
            var2 = 2;
            var4 = 0;
            if(!(var4 <= var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var3.Math;
            var9 = var10.floor;
            var1 = var4 + var5;
            var1 = var1 / var2;
            var10 = var9.bind(var10)(var1);
            var1 = var8[var10];
            var9 = var1.start;
            if(!(var7 >= var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var1.end;
            if(!(!(var7 <= var9))) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var9 = var1.start;
            if(!(!(var7 < var9))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var10 + var6;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var5 = var10 - var6;
            var9 = var4;
case 9:
            var4 = var9;
            if(var4 <= var5) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            var2 = null;
            return var2;
case 6:
            return var1;
        }
    };
    var3['findActiveCaption'] = var2;
    return var1;
})();