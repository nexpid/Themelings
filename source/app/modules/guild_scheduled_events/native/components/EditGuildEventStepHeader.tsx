// app/modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 'center';
    var9 = {'alignItems': 'center', 'paddingBottom': 24};
    var4['header'] = var9;
    var9 = {'marginTop': 8, 'marginBottom': 8};
    var4['headerTitle'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['headerSubtitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildEventStepHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.title;
            var10 = var1.subtitle;
            var1 = _closure1_slot5;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var11.header;
            var1['style'] = var5;
            var8 = _closure1_slot3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var12 = 4;
            var5 = var5[var12];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            var13 = var11.headerTitle;
            var5['style'] = var13;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var9 = null;
            var8 = var9 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = '';
            var6 = null;
            if(!(var8 !== var10)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var11 = var11.headerSubtitle;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 2:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();