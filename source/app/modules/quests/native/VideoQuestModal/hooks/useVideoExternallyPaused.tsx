// app/modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var3 = var9[var3];
            var7 = undefined;
            var5 = var8.bind(var7)(var3);
            var3 = var5.useActiveContextMenu;
            var5 = var3.bind(var5)();
            var3 = 2;
            var3 = var9[var3];
            var6 = var8.bind(var7)(var3);
            var3 = var6.useOpenModalKey;
            var6 = var3.bind(var6)();
            var3 = 3;
            var3 = var9[var3];
            var11 = var8.bind(var7)(var3);
            var10 = var11.getVideoQuestModalKey;
            var3 = arg1;
            var3 = var10.bind(var11)(var3);
            var3 = var6 !== var3;
            var6 = 4;
            var6 = var9[var6];
            var11 = var8.bind(var7)(var6);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot2;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getKey;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var11)(var6, var2);
            var2 = 5;
            var2 = var9[var2];
            var10 = var8.bind(var7)(var2);
            var2 = var10.useAlertStore;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.alerts;
                return var1;
            };
            var1 = var2.bind(var10)(var1);
            var2 = var1.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = 6;
            var1 = var9[var1];
            var7 = var8.bind(var7)(var1);
            var1 = var7.isIOS;
            var1 = var1.bind(var7)();
            if(!var1) { _fun0001_ip = 203; continue _fun0001 }
 200:
            var1 = var4;
 203:
            if(var1) { _fun0001_ip = 212; continue _fun0001 }
 206:
            var4 = null;
            var1 = var4 != var6;
 212:
            if(var1) { _fun0001_ip = 221; continue _fun0001 }
 215:
            var4 = null;
            var1 = var4 != var5;
 221:
            if(var1) { _fun0001_ip = 227; continue _fun0001 }
 224:
            var1 = var3;
 227:
            if(var1) { _fun0001_ip = 233; continue _fun0001 }
 230:
            var1 = var2;
 233:
            return var1;
        }
    };
    var3['useVideoExternallyPaused'] = var2;
    return var1;
})();