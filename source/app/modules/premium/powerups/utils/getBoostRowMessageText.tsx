// app/modules/premium/powerups/utils/getBoostRowMessageText.tsx
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
    var4 = 'modules/premium/powerups/utils/getBoostRowMessageText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getBoostRowMessageText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = var7.phase;
            var1 = 'gave';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'expiring';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'expired';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 0;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.hSXjlI;
            var1 = var2.bind(var3)(var1);
            return var1;
case 4:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var10 = undefined;
            var1 = var2.bind(var10)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var2 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var2.bind(var10)(var1);
            var2 = var1.vct4l8;
            var1 = {};
            var5 = var7.boost;
            var5 = var5.endsAt;
            var8 = null;
            if(!(var8 == var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = global;
            var8 = var8.Date;
            var7 = var7.sortKey;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 2;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.BOOST_EXPIRING_DISPLAY_WINDOW_MS;
            var13 = var7 + var6;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var14 = var7;
            var6 = new var14[var8](var13, var12);
            var5 = var6 instanceof Object ? var6 : var7;
case 8:
            var1['date'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 0;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.plwH8d;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();