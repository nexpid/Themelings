// app/modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyToolsActionSheetWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.headerTitle;
            var11 = var2.hasHeaderBack;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var13 = var2.warningId;
            var12 = var2.warningType;
            var14 = var2.recipientId;
            var6 = var2.children;
            var15 = var2.onClose;
            var _closure2_slot1 = var15;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var5 = undefined;
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var8)(var3, var2);
            var _closure2_slot2 = var2;
            var8 = _closure1_slot3;
            var4 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var15;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 267; continue _fun0001 }
 157:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 4;
            var2 = var15[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {'showGradient': true, 'startExpanded': true};
            var8 = _closure1_slot1;
            var7 = 5;
            var7 = var15[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['recipientId'] = var14;
            var7['warningId'] = var13;
            var7['warningType'] = var12;
            var7['hasBackButton'] = var11;
            var7['title'] = var10;
            var7['channelId'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var2['header'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 267:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();