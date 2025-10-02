// discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var7 = 0;
    var5 = var6[var7];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot0 = var4;
    var4 = {};
    var4['MANAGED'] = var7;
    var5 = 'MANAGED';
    var4[var7] = var5;
    var5 = 1;
    var4['QUICK'] = var5;
    var7 = 'QUICK';
    var4[var5] = var7;
    var _closure1_slot1 = var4;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CustomLinkType'] = var4;
    var2 = function decodeCustomActivityLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.split;
            var2 = '-';
            var7 = var3.bind(var5)(var2);
            var6 = _closure1_slot0;
            var4 = undefined;
            var3 = 2;
            var4 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var7 = var4[var3];
            var3 = 1;
            var4 = var4[var3];
            var3 = '0';
            if(!(var3 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = '1';
            var6 = null;
            if(!(var3 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var6 = var3.QUICK;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = _closure1_slot1;
            var6 = var2.MANAGED;
case 6:
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = {};
            var3['type'] = var6;
            var3['encodedLinkId'] = var5;
            var3['decodedLinkId'] = var4;
            var2 = var3;
case 8:
            return var2;
case 2:
            return var1;
        }
    };
    var3['decodeCustomActivityLink'] = var2;
    return var1;
})();