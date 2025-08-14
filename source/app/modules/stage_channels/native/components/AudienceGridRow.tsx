// app/modules/stage_channels/native/components/AudienceGridRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var2 = function BlankAudience(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.count;
            var1 = new Array(0);
            var5 = 0;
            var7 = var5 < var6;
            var3 = 5;
            var2 = undefined;
            if(!var7) { _fun0001_ip = 76; continue _fun0001 }
 29:
            var8 = var1.push;
            var10 = _closure1_slot4;
            var9 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var3];
            var9 = var9.bind(var2)(var7);
            var7 = {};
            var7 = var10.bind(var2)(var9, var7, var5);
            var7 = var8.bind(var1)(var7);
            var5 = var5 + 1;
            if(var5 < var6) { _fun0001_ip = 29; continue _fun0001 }
 76:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MAX_AUDIENCE_ROW_LIMIT;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot4 = var9;
    var5 = var5.jsxs;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'flex': 1, 'flexDirection': 'row', 'marginVertical': 16, 'paddingHorizontal': 4, 'justifyContent': 'space-between'};
    var5['rowContainer'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot6 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var9 = var1.participants;
            var13 = var1.renderBlankAudience;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 36; continue _fun0002 }
 34:
            var13 = true;
 36:
            var1 = var1.theme;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot6;
            var6 = var1.bind(var4)();
            var8 = 0;
            var10 = 0;
            if(!var13) { _fun0002_ip = 77; continue _fun0002 }
 64:
            var2 = _closure1_slot3;
            var1 = var9.length;
            var10 = var2 - var1;
 77:
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var11 = var6.rowContainer;
            var6 = new Array(2);
            var6[0] = var11;
            var11 = {};
            var12 = 'center';
            if(!var13) { _fun0002_ip = 116; continue _fun0002 }
 110:
            var12 = 'space-between';
 116:
            var11['justifyContent'] = var12;
            var6[1] = var11;
            var1['style'] = var6;
            var6 = var9.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot4;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot1;
                var2['theme'] = var7;
                var6 = _closure2_slot0;
                var2['channel'] = var6;
                var2['participant'] = var1;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var6.bind(var9)(var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!(var10 > var8)) { _fun0002_ip = 179; continue _fun0002 }
 159:
            var9 = _closure1_slot4;
            var8 = _closure1_slot7;
            var7 = {};
            var7['count'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 179:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/components/AudienceGridRow.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BlankAudience'] = var2;
    return var1;
})();