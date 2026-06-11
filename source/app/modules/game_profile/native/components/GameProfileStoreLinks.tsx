// app/modules/game_profile/native/components/GameProfileStoreLinks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function WebsiteGameStoreLinkButton(arg1) {
        var1 = arg1;
        var6 = var1.data;
        var _closure2_slot0 = var6;
        var1 = var1.trackAction;
        var _closure2_slot1 = var1;
        var8 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 5;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = 6;
        var2 = var7[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.openURL;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = _closure1_slot0;
        var1 = 7;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'variant': 'secondary', 'size': 'md'};
        var7 = var6.title;
        var1['text'] = var7;
        var6 = var6.icon;
        var1['icon'] = var6;
        var5 = function onPress() {
            var5 = _closure2_slot1;
            var2 = _closure2_slot0;
            var4 = var2.action;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var3 = _closure2_slot2;
            var2 = var2.url;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileStoreLinks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileStoreLinks(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.game;
            var6 = var1.trackAction;
            var _closure2_slot0 = var6;
            var8 = var1.websiteButtons;
            var _closure2_slot1 = var8;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot6;
            var10 = var1.bind(var5)();
            var1 = null;
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.name;
case 2:
            _closure2_slot2 = var3;
            var4 = var8.length;
            var7 = 0;
            if(!(var7 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var8.length;
            var14 = 1;
            if(!(var14 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var8.length;
            var3 = 2;
            if(!(var3 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot4;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 7;
            var3 = var17[var3];
            var3 = var16.bind(var5)(var3);
            var4 = var3.Button;
            var3 = {'variant': 'secondary', 'size': 'md'};
            var12 = 8;
            var13 = var17[var12];
            var13 = var16.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var17[var12];
            var12 = var16.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12["/hMurx"];
            var12 = var13.bind(var15)(var12);
            var3['text'] = var12;
            var11 = function onPress() {
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var7 = undefined;
                var3 = var9.bind(var7)(var1);
                var2 = var3.showActionSheet;
                var1 = {};
                var4 = 10;
                var6 = var8[var4];
                var6 = var9.bind(var7)(var6);
                var6 = var6.ACTION_SHEET_KEY;
                var1['key'] = var6;
                var6 = _closure1_slot4;
                var5 = _closure1_slot1;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = {};
                var9 = _closure2_slot2;
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
            var13 = var9.bind(var5)(var4, var3);
            var3 = var8[var7];
            var4 = var1 == var3;
            var9 = undefined;
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var3.action;
case 11:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.GameProfileTrackActionActions;
            var4 = var3.XboxGamePassStoreLink;
            var3 = var13;
            if(!(var9 === var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = _closure1_slot5;
            var9 = _closure1_slot3;
            var4 = {};
            var12 = var10.container;
            var4['style'] = var12;
            var16 = _closure1_slot4;
            var15 = _closure1_slot7;
            var12 = {};
            var17 = var8[var7];
            var12['data'] = var17;
            var12['trackAction'] = var6;
            var15 = var16.bind(var5)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var13;
            var4['children'] = var12;
            var3 = var11.bind(var5)(var9, var4);
case 13:
            return var3;
case 9:
            var9 = _closure1_slot5;
            var4 = _closure1_slot3;
            var3 = {};
            var10 = var10.container;
            var3['style'] = var10;
            var11 = _closure1_slot4;
            var13 = _closure1_slot7;
            var10 = {};
            var12 = var8[var7];
            var10['data'] = var12;
            var10['trackAction'] = var6;
            var11 = var11.bind(var5)(var13, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var8[var14];
            var11['data'] = var14;
            var11['trackAction'] = var6;
            var11 = var12.bind(var5)(var13, var11);
            var10[1] = var11;
            var3['children'] = var10;
            var3 = var9.bind(var5)(var4, var3);
            return var3;
case 7:
            var4 = _closure1_slot4;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var8[var7];
            var2['data'] = var7;
            var2['trackAction'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();