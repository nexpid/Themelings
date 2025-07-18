// app/modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppReportsUpsellsTableRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.title;
            var11 = var1.disabledTitle;
            var10 = var1.description;
            var5 = var1.variant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 30:
            var5 = 'default';
 34:
            var6 = var1.disabled;
            var8 = var1.onPress;
            var7 = var1.icon;
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var9 = var13;
            if(!var6) { _fun0001_ip = 102; continue _fun0001 }
 90:
            var12 = null;
            var9 = var13;
            if(!(var12 != var11)) { _fun0001_ip = 102; continue _fun0001 }
 99:
            var9 = var11;
 102:
            var1['label'] = var9;
            var9 = null;
            if(var6) { _fun0001_ip = 114; continue _fun0001 }
 111:
            var9 = var10;
 114:
            var1['subLabel'] = var9;
            var1['onPress'] = var8;
            var1['icon'] = var7;
            var1['disabled'] = var6;
            var1['variant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();