// app/modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var8 = var4.bind(var1)(var7);
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
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['wrapper'] = var4;
    var11 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var4 = 8;
    var12 = 4;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_STATUS_ONLINE;
    var11['backgroundColor'] = var14;
    var7['online'] = var11;
    var11 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STATUS_OFFLINE;
    var11['backgroundColor'] = var12;
    var7['total'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot6 = var7;
    var7 = var8.memo;
    var2 = function MemberCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.type;
            var7 = var1.count;
            var11 = var1.color;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'GuildActionSheetMemberCount';
            var13 = var2.bind(var4)(var1);
            var10 = null;
            if(!(var10 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 6;
            var1 = var1[var9];
            var1 = var2.bind(var4)(var1);
            var5 = var1.intl;
            var3 = var5.format;
            var1 = 'online';
            if(!(var1 !== var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.etqpUG;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.PIikks;
case 6:
            var1 = {};
            var1['count'] = var7;
            var9 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 6;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = 'online';
            if(!(var1 !== var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["5SWsJX"];
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var1 = var5["3DzP7x"];
case 10:
            var9 = var2.bind(var3)(var1);
case 7:
            var1 = _closure1_slot6;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var7.wrapper;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var5 = {};
            var7 = var7[var12];
            var5['style'] = var7;
            var7 = var8.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var12 = 'text-xs/medium';
            if(!var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = 'text-sm/normal';
case 11:
            var6['variant'] = var12;
            var12 = var10 != var11;
            var10 = 'text-default';
            if(!var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var11;
case 13:
            var6['color'] = var10;
            var10 = 1;
            var6['lineClamp'] = var10;
            var10 = {};
            var11 = 'center';
            var10['textAlignVertical'] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();