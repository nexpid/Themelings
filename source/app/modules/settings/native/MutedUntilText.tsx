// app/modules/settings/native/MutedUntilText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var9 = 0;
    var5 = var7[var9];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var8 = 1;
    var2 = var7[var8];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot2 = var2;
    var2 = {};
    var2['SERVER'] = var9;
    var5 = 'SERVER';
    var2[var9] = var5;
    var2['CHANNEL'] = var8;
    var5 = 'CHANNEL';
    var2[var8] = var5;
    var5 = 2;
    var2['DM'] = var5;
    var8 = 'DM';
    var2[var5] = var8;
    var9 = 3;
    var2['CATEGORY'] = var9;
    var8 = 'CATEGORY';
    var2[var9] = var8;
    var _closure1_slot3 = var2;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'lineHeight': 18, 'marginBottom': 8, 'marginTop': 8, 'paddingHorizontal': 16};
    var5['formHintText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/native/MutedUntilText.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MutedUntilText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.muteConfig;
            var6 = var1.type;
            var2 = _closure1_slot4;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var11)) { _fun0001_ip = 46; continue _fun0001 }
 33:
            var3 = var11.end_time;
            if(!(var2 == var3)) { _fun0001_ip = 414; continue _fun0001 }
 46:
            var3 = _closure1_slot3;
            var3 = var3.SERVER;
            if(!(var3 !== var6)) { _fun0001_ip = 290; continue _fun0001 }
 63:
            var3 = _closure1_slot3;
            var3 = var3.CHANNEL;
            if(!(var3 !== var6)) { _fun0001_ip = 231; continue _fun0001 }
 80:
            var3 = _closure1_slot3;
            var3 = var3.DM;
            if(!(var3 !== var6)) { _fun0001_ip = 172; continue _fun0001 }
 94:
            var3 = _closure1_slot3;
            var3 = var3.CATEGORY;
            if(!(var3 !== var6)) { _fun0001_ip = 110; continue _fun0001 }
 108:
            return var2;
 110:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 3;
            var7 = var10[var3];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.6+wqqq;
            var9 = var7.bind(var8)(var3);
            _fun0001_ip = 347; continue _fun0001;
 172:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 3;
            var7 = var12[var3];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.jxF9en;
            var9 = var7.bind(var8)(var3);
            _fun0001_ip = 347; continue _fun0001;
 231:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 3;
            var7 = var12[var3];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.utURT0;
            var9 = var7.bind(var8)(var3);
            _fun0001_ip = 347; continue _fun0001;
 290:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 3;
            var7 = var12[var3];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3./b/DU1;
            var9 = var7.bind(var8)(var3);
 347:
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 4;
            var3 = var10[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.Text;
            var3 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            var10 = var5.formHintText;
            var3['style'] = var10;
            var3['children'] = var9;
            var3 = var8.bind(var4)(var7, var3);
            return var3;
 414:
            var3 = _closure1_slot3;
            var3 = var3.SERVER;
            if(!(var3 !== var6)) { _fun0001_ip = 580; continue _fun0001 }
 431:
            var3 = _closure1_slot3;
            var3 = var3.CHANNEL;
            if(!(var3 !== var6)) { _fun0001_ip = 545; continue _fun0001 }
 445:
            var3 = _closure1_slot3;
            var3 = var3.DM;
            if(!(var3 !== var6)) { _fun0001_ip = 510; continue _fun0001 }
 459:
            var3 = _closure1_slot3;
            var3 = var3.CATEGORY;
            if(!(var3 !== var6)) { _fun0001_ip = 475; continue _fun0001 }
 473:
            return var2;
 475:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2.N2NXMT;
            _fun0001_ip = 613; continue _fun0001;
 510:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2.c4aY0N;
            _fun0001_ip = 613; continue _fun0001;
 545:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2.N/kd4+;
            _fun0001_ip = 613; continue _fun0001;
 580:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2.MQfdKy;
 613:
            var3 = _closure1_slot2;
            var10 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 4;
            var1 = var13[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            var5 = var5.formHintText;
            var1['style'] = var5;
            var9 = 3;
            var5 = var13[var9];
            var5 = var10.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.format;
            var5 = {};
            var12 = global;
            var14 = var12.Date;
            var16 = var11.end_time;
            var12 = var14.prototype;
            var12 = Object.create(var12, {constructor: {value: var14}});
            var17 = var12;
            var11 = new var17[var14](var16, var15);
            var12 = var11 instanceof Object ? var11 : var12;
            var11 = var12.toLocaleString;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.intl;
            var10 = var9.currentLocale;
            var9 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
            var9 = var11.bind(var12)(var10, var9);
            var5['endTime'] = var9;
            var9 = function endTimeHook(arg1) {
                var5 = _closure1_slot2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'control-brand-foreground'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = 'muted';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var5['endTimeHook'] = var9;
            var5 = var6.bind(var7)(var8, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MuteSettingType'] = var2;
    return var1;
})();