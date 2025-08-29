// app/modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot3 = var8;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['wrapper'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_ONLINE;
    var10['backgroundColor'] = var13;
    var4['online'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_OFFLINE;
    var10['backgroundColor'] = var11;
    var4['total'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function MemberCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.type;
            var5 = var1.count;
            var11 = var1.color;
            var10 = null;
            if(!(var10 != var5)) { _fun0001_ip = 143; continue _fun0001 }
 24:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 5;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.format;
            var2 = 'online';
            if(!(var2 !== var12)) { _fun0001_ip = 99; continue _fun0001 }
 67:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.etqpUF;
            _fun0001_ip = 129; continue _fun0001;
 99:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var6.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.PIikkp;
 129:
            var1 = {};
            var1['count'] = var5;
            var9 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 253; continue _fun0001;
 143:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 5;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = 'online';
            if(!(var1 !== var12)) { _fun0001_ip = 218; continue _fun0001 }
 186:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.5SWsJS;
            _fun0001_ip = 248; continue _fun0001;
 218:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var1 = var4.3DzP7+;
 248:
            var9 = var2.bind(var3)(var1);
 253:
            var1 = _closure1_slot5;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var7.wrapper;
            var1['style'] = var5;
            var8 = _closure1_slot3;
            var5 = {};
            var7 = var7[var12];
            var5['style'] = var7;
            var7 = var8.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 6;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var12 = 'text-xs/medium';
            var6['variant'] = var12;
            var12 = var10 != var11;
            var10 = 'header-secondary';
            if(!var12) { _fun0001_ip = 365; continue _fun0001 }
 362:
            var10 = var11;
 365:
            var6['color'] = var10;
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
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();