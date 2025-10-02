// app/modules/app_launcher/native/base_components/RecommendationAppRow.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/RecommendationAppRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RecommendationAppRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.application;
            var8 = var1.onPress;
            var7 = var1.isFirstRow;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var6 = var1.isLastRow;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            var5 = var1.showsPromoted;
            if(!(var5 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = false;
case 6:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 2;
            var2 = var11[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.getApplicationIconSource;
            var2 = {};
            var12 = var10.id;
            var2['id'] = var12;
            var12 = var10.icon;
            var2['icon'] = var12;
            var12 = var10.bot;
            var2['bot'] = var12;
            var12 = true;
            var2['botIconFirst'] = var12;
            var9 = var3.bind(var9)(var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseAppRow;
            var1 = {};
            var1['application'] = var10;
            var1['iconSource'] = var9;
            var1['onPress'] = var8;
            var1['isFirstRow'] = var7;
            var1['isLastRow'] = var6;
            var1['showsPromoted'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();