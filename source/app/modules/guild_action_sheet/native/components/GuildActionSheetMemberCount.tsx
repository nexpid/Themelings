// app/modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var7 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot4 = var8;
        var4 = var4.jsxs;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var12 = 'center';
        var10 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['wrapper'] = var10;
        var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
        var11 = 4;
        var14 = var6[var11];
        var14 = var13.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.sm;
        var10['borderRadius'] = var14;
        var14 = var6[var11];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.TEXT_STATUS_ONLINE;
        var10['backgroundColor'] = var14;
        var4['online'] = var10;
        var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
        var14 = var6[var11];
        var14 = var13.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.sm;
        var10['borderRadius'] = var14;
        var11 = var6[var11];
        var11 = var13.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.TEXT_STATUS_OFFLINE;
        var10['backgroundColor'] = var11;
        var4['total'] = var10;
        var10 = {};
        var10['textAlignVertical'] = var12;
        var11 = 5;
        var13 = var6[var11];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isAndroid;
        var14 = var13.bind(var14)();
        var13 = undefined;
        if(!var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var13 = 12;
case 2:
        var10['lineHeight'] = var13;
        var4['text'] = var10;
        var10 = {};
        var10['textAlignVertical'] = var12;
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var12 = var11.bind(var12)();
        var11 = undefined;
        if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var11 = 14;
case 4:
        var10['lineHeight'] = var11;
        var4['refreshText'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot6 = var4;
        var4 = var7.memo;
        var2 = function MemberCount(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var7 = var1.type;
                var8 = var1.count;
                var13 = var1.color;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = 'GuildActionSheetMemberCount';
                var10 = var2.bind(var4)(var1);
                var12 = null;
                if(!(var12 != var8)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 7;
                var1 = var1[var11];
                var1 = var2.bind(var4)(var1);
                var5 = var1.intl;
                var3 = var5.format;
                var1 = 'online';
                if(!(var1 !== var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.etqpUG;
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.PIikks;
case 10:
                var1 = {};
                var1['count'] = var8;
                var9 = var3.bind(var5)(var2, var1);
                _fun0002_ip = 11; continue _fun0002;
case 6:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 7;
                var1 = var1[var11];
                var1 = var2.bind(var4)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var1 = 'online';
                if(!(var1 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["5SWsJX"];
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var1 = var5["3DzP7x"];
case 14:
                var9 = var2.bind(var3)(var1);
case 11:
                var1 = _closure1_slot6;
                var11 = var1.bind(var4)();
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var11.wrapper;
                var1['style'] = var5;
                var8 = _closure1_slot4;
                var5 = {};
                var7 = var11[var7];
                var5['style'] = var7;
                var7 = var8.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 8;
                var6 = var14[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var14 = 'text-xs/medium';
                if(!var10) { _fun0002_ip = 5; continue _fun0002 }
case 15:
                var14 = 'text-sm/normal';
case 5:
                var6['variant'] = var14;
                var14 = var12 != var13;
                var12 = 'text-default';
                if(!var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var12 = var13;
case 16:
                var6['color'] = var12;
                var12 = 1;
                var6['lineClamp'] = var12;
                if(var10) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var10 = var11.text;
                _fun0002_ip = 20; continue _fun0002;
case 18:
                var10 = var11.refreshText;
case 20:
                var6['style'] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 9;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();