// app/modules/activities/confirmActivityChangeAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/confirmActivityChangeAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function confirmActivityChangeModal(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var11 = arg2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 0;
            var2 = var5[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var6 = _closure1_slot0;
            var14 = 1;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.XkIWkp;
            var7 = var8.bind(var9)(var7);
            var2['title'] = var7;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oK;
            var7 = var8.bind(var9)(var7);
            var2['cancelText'] = var7;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.cY+Ooa;
            var7 = var8.bind(var9)(var7);
            var2['confirmText'] = var7;
            var7 = arg3;
            var2['onConfirm'] = var7;
            var7 = arg4;
            var2['onCancel'] = var7;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var5 = var5[var14];
            var5 = var6.bind(var1)(var5);
            var5 = var5.t;
            var6 = var5.5/Xorq;
            var5 = {};
            var9 = null;
            var15 = var9 == var13;
            var12 = undefined;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var13.name;
case 2:
            if(!(var9 == var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = var13[var14];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var13[var14];
            var13 = var17.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.G99XFh;
            var12 = var15.bind(var16)(var13);
case 4:
            var5['currentApplicationName'] = var12;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 2;
            var12 = var15[var12];
            var15 = var13.bind(var1)(var12);
            var13 = var15.isNullOrEmpty;
            var16 = var9 == var11;
            var12 = undefined;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var11.name;
case 6:
            var12 = var13.bind(var15)(var12);
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var9 == var11;
            var9 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var11.name;
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var14];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.OGUjmp;
            var9 = var11.bind(var12)(var10);
case 12:
            var5['currentApplicationChannelName'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();