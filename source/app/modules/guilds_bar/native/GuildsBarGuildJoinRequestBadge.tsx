// app/modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'bottom': 4294967293, 'right': 4294967293, 'height': 22, 'width': 22, 'borderColor': null, 'borderWidth': 3, 'borderRadius': 11, 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_TERTIARY;
    var9['borderColor'] = var10;
    var4['badgeImageContainer'] = var9;
    var9 = {'height': 16, 'width': 16};
    var10 = 5;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DARK_1_LIGHT_08;
    var9['opacity'] = var10;
    var4['badgeImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildsBarGuildJoinRequestBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.style;
            var2 = var1.joinRequestState;
            var1 = _closure1_slot5;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 6;
            var1 = var1[var4];
            var1 = var3.bind(var5)(var1);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.REJECTED;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var3.bind(var5)(var1);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.SUBMITTED;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var3.bind(var5)(var1);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.STARTED;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var3.bind(var5)(var1);
            var1 = var1.GuildJoinRequestApplicationStatuses;
            var1 = var1.APPROVED;
            var9 = null;
            if(!(var1 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
case 8:
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = 'none';
            var2['pointerEvents'] = var7;
            var11 = var8.badgeImageContainer;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 11;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['source'] = var9;
            var8 = var8.badgeImage;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();