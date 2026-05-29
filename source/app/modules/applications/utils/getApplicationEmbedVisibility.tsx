// app/modules/applications/utils/getApplicationEmbedVisibility.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var1 = 'display';
    var4['DISPLAY'] = var1;
    var1 = 'block_underage';
    var4['BLOCK_UNDERAGE'] = var1;
    var1 = 'block_channel_restriction';
    var4['BLOCK_CHANNEL_RESTRICTION'] = var1;
    var _closure1_slot2 = var4;
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/utils/getApplicationEmbedVisibility.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ApplicationEmbedVisibility'] = var4;
    var2 = function getApplicationEmbedVisibility(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = arg3;
            var2 = null;
            if(!(var2 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var10 = 0;
            var3 = var7[var10];
            var5 = undefined;
            var8 = var6.bind(var5)(var3);
            var4 = var8.contentClassificationToAgeRestriction;
            var3 = {};
            var10 = var7[var10];
            var10 = var6.bind(var5)(var10);
            var10 = var10.ContentClassificationVariant;
            var10 = var10.MINIMAL;
            var3['type'] = var10;
            var3['data'] = var9;
            var4 = var4.bind(var8)(var3);
            var3 = 1;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.AgeRestrictionStatus;
            var3 = var3.ADULT;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = true;
            var3 = arg2;
            if(!(var4 === var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.isPrivate;
            var3 = var3.bind(var1)();
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var1.nsfw;
            if(var1) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var1 = _closure1_slot2;
            var1 = var1.BLOCK_CHANNEL_RESTRICTION;
            _fun0001_ip = 10; continue _fun0001;
case 7:
            var3 = _closure1_slot2;
            var1 = var3.DISPLAY;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 5:
            var2 = _closure1_slot2;
            var1 = var2.BLOCK_UNDERAGE;
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 2:
            var2 = _closure1_slot2;
            var1 = var2.DISPLAY;
case 12:
            return var1;
        }
    };
    var3['getApplicationEmbedVisibility'] = var2;
    return var1;
})();