// app/modules/notifications/native/playInAppMessageSound.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isInAppMessageSoundsEnabled;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.InAppNotificationTypes;
    var _closure1_slot4 = var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/native/playInAppMessageSound.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function playInAppMessageSound(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot4;
            var2 = var2.MESSAGE;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isMetaQuest;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = _closure1_slot3;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var5 = _closure1_slot2;
            var2 = var5.isSoundDisabled;
            var4 = 'message1';
            var2 = var2.bind(var5)(var4);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = global;
            var5 = var2.Date;
            var2 = var5.now;
            var2 = var2.bind(var5)();
            var5 = _closure1_slot5;
            var6 = var2 - var5;
            var5 = 1000;
            if(!(!(var6 < var5))) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            _closure1_slot5 = var2;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.playSound;
            var1 = 0.4;
            var1 = var2.bind(var3)(var4, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['playInAppMessageSound'] = var2;
    return var1;
})();