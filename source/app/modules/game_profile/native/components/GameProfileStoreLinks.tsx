// app/modules/game_profile/native/components/GameProfileStoreLinks.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileStoreLinks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileStoreLinks(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.application;
            var4 = var1.supplementalGameData;
            var2 = var1.trackAction;
            var _closure2_slot0 = var2;
            var8 = var1.websiteButtons;
            var _closure2_slot1 = var8;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var3 = var9.bind(var5)(var1);
            var1 = 4;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.openURL;
            var1 = var3.bind(var5)(var1);
            var _closure2_slot2 = var1;
            var1 = null;
            var9 = var1 == var4;
            var3 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.name;
case 2:
            if(!(var1 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var1 == var7;
            var4 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var7.name;
case 6:
            var3 = var4;
case 4:
            _closure2_slot3 = var3;
            var7 = var8.length;
            var4 = 0;
            if(!(var4 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var1 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var3 = var8.length;
            var7 = 1;
            if(!(var7 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot4;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 5;
            var3 = var15[var3];
            var3 = var14.bind(var5)(var3);
            var9 = var3.Button;
            var3 = {'variant': 'secondary', 'size': 'md'};
            var11 = 6;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11["/hMurx"];
            var11 = var12.bind(var13)(var11);
            var3['text'] = var11;
            var11 = function onPress() {
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var7 = undefined;
                var3 = var9.bind(var7)(var1);
                var2 = var3.showActionSheet;
                var1 = {};
                var4 = 8;
                var6 = var8[var4];
                var6 = var9.bind(var7)(var6);
                var6 = var6.ACTION_SHEET_KEY;
                var1['key'] = var6;
                var6 = _closure1_slot4;
                var5 = _closure1_slot1;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = {};
                var9 = _closure2_slot3;
                var4['gameName'] = var9;
                var9 = _closure2_slot1;
                var4['websiteButtons'] = var9;
                var8 = _closure2_slot0;
                var4['trackAction'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var1['content'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['onPress'] = var11;
            var3 = var10.bind(var5)(var9, var3);
            return var3;
case 11:
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var8, var7);
            var7 = var3[var4];
            _closure2_slot4 = var7;
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {'variant': 'secondary', 'size': 'md'};
            var8 = var7.title;
            var2['text'] = var8;
            var7 = var7.icon;
            var2['icon'] = var7;
            var6 = function onPress() {
                var4 = _closure2_slot0;
                var1 = _closure2_slot4;
                var3 = var1.action;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot4;
                var2 = var2.url;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();