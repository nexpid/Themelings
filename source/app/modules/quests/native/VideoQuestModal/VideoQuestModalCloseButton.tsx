// app/modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoQuestModalCloseButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.onClose;
            var7 = var1.iconColor;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 55; continue _fun0001 }
 21:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.colors;
            var7 = var2.HEADER_PRIMARY;
 55:
            var5 = var1.style;
            var3 = _closure1_slot3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 2;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'accessibilityLabel': null, 'accessibilityRole': 'button', 'hitSlop': 12};
            var10 = 3;
            var11 = var8[var10];
            var11 = var6.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var8[var10];
            var10 = var6.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.cpT0Cg;
            var10 = var11.bind(var12)(var10);
            var1['accessibilityLabel'] = var10;
            var1['onPress'] = var9;
            var1['style'] = var5;
            var5 = 4;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.XSmallIcon;
            var5 = {};
            var5['color'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();