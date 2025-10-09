// app/modules/conversations/native/useConversationBackgroundColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/useConversationBackgroundColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useIsCustomThemeActive;
            var2 = var1.bind(var2)();
            var1 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 1;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var7 = var4.colors;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.CARD_PRIMARY_BG;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var7.BACKGROUND_FLOATING;
case 4:
            var1['primaryBackground'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3.CARD_SECONDARY_BG;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var2 = var3.BACKGROUND_FLOATING;
case 7:
            var1['secondaryBackground'] = var2;
            return var1;
        }
    };
    var3['useConversationBackgroundColors'] = var2;
    return var1;
})();