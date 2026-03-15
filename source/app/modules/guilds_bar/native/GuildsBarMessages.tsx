// app/modules/guilds_bar/native/GuildsBarMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = function onPress() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['onPress'] = var8;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarMessages() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var6 = var2.bind(var4)(var1);
            var1 = 'GuildsBarMessages';
            var10 = var6.bind(var4)(var1);
            var6 = _closure1_slot0;
            var12 = 6;
            var1 = var3[var12];
            var7 = var6.bind(var4)(var1);
            var1 = var7.useGuildsBarAnimatedWrapperStyles;
            var9 = var1.bind(var7)();
            var1 = 7;
            var1 = var3[var1];
            var8 = var6.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var1 = var3.getGuildId;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure1_slot4;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var11 = var7.bind(var8)(var6, var1);
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var3 = 0;
            var1['mentionCount'] = var3;
            var1 = var2.bind(var4)(var1);
            var7 = var1.badge;
            var6 = var1.cutouts;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var1.MOBILE_GUILDBAR_ICON_DEFAULT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = var1.WHITE;
case 6:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['selected'] = var11;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = !var11;
case 7:
            var1['circle'] = var10;
            var10 = false;
            var1['unread'] = var10;
            var1['styles'] = var9;
            var1['cutouts'] = var6;
            var6 = _closure1_slot6;
            var1['config'] = var6;
            var1['overState'] = var4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 10;
            var11 = var9[var10];
            var11 = var6.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var9[var10];
            var10 = var6.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.YUU0RF;
            var10 = var11.bind(var12)(var10);
            var1['label'] = var10;
            var1['externalChildren'] = var7;
            var7 = _closure1_slot5;
            var10 = _closure1_slot1;
            var5 = 11;
            var5 = var9[var5];
            var10 = var10.bind(var4)(var5);
            var5 = {};
            var5 = var7.bind(var4)(var10, var5);
            var1['expandedChildren'] = var5;
            var5 = 12;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ChatIcon;
            var5 = {};
            var5['color'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();