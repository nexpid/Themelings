// app/modules/activities/confirmActivityChangeAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/confirmActivityChangeAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function confirmActivityChangeModal(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var5 = arg2;
            var12 = null;
            var1 = var12 != var5;
            var9 = '';
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.computeChannelName;
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var9 = var3.bind(var4)(var5, var2, var1);
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var2 = var5[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var6 = _closure1_slot0;
            var14 = 4;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.XkIWkk;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oC;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var5[var14];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.cY+Oob;
            var7 = var8.bind(var11)(var7);
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
            var6 = var5["5/Xort"];
            var5 = {};
            var15 = var12 == var13;
            var11 = undefined;
            if(var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var13.name;
case 4:
            if(!(var12 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var14];
            var13 = var16.bind(var1)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var12[var14];
            var12 = var16.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12.G99XFs;
            var11 = var13.bind(var15)(var12);
case 6:
            var5['currentApplicationName'] = var11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 5;
            var11 = var13[var11];
            var12 = var12.bind(var1)(var11);
            var11 = var12.isNullOrEmpty;
            var11 = var11.bind(var12)(var9);
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var14];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.OGUjmt;
            var9 = var11.bind(var12)(var10);
case 8:
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