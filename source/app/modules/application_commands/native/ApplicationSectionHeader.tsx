// app/modules/application_commands/native/ApplicationSectionHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot5 = var5;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'height': 32, 'backgroundColor': null, 'paddingHorizontal': 16};
    var2 = 32;
    var11 = 5;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_SURFACE_RAISED;
    var10['backgroundColor'] = var13;
    var5['applicationHeaderWrapper'] = var10;
    var10 = {'width': 16, 'height': 16, 'borderRadius': null, 'marginRight': 8};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var5['applicationIcon'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/native/ApplicationSectionHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.section;
            var _closure2_slot0 = var2;
            var3 = var3.guildId;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot7;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var2 = var4.botId;
case 4:
                    if(!(var3 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                    var2 = undefined;
                    return var2;
case 6:
                    var4 = _closure1_slot4;
                    var3 = var4.getMember;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.botId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var3, var1);
            var3 = 7;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getApplicationCommandsIconSource;
            var11 = var3.bind(var5)(var2, var1);
            var5 = null;
            var7 = var5 == var1;
            var3 = undefined;
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var1.nick;
case 7:
            if(!(var5 == var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var5 == var2;
            var9 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var2.name;
case 11:
            _fun0001_ip = 13; continue _fun0001;
case 9:
            var9 = var1.nick;
case 13:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var12.applicationHeaderWrapper;
            var1['style'] = var7;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 8;
            var10 = var14[var7];
            var10 = var8.bind(var4)(var10);
            var13 = var10.intl;
            var10 = var13.formatToPlainString;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.Ocw/sM;
            var7 = {};
            var7['applicationName'] = var9;
            var7 = var10.bind(var13)(var8, var7);
            var1['accessibilityLabel'] = var7;
            var7 = var5 != var11;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = _closure1_slot5;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 9;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var12 = var12.applicationIcon;
            var5['style'] = var12;
            var5['source'] = var11;
            var7 = var10.bind(var4)(var8, var5);
case 14:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'eyebrow', 'color': 'interactive-normal'};
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['APPLICATION_SECTION_HEADER_HEIGHT'] = var2;
    return var1;
})();