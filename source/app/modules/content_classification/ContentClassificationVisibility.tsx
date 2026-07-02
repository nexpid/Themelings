// app/modules/content_classification/ContentClassificationVisibility.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function getContentClassificationVisibility(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var10 = 1;
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
            var3 = 2;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.AgeRestrictionStatus;
            var3 = var3.ADULT;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = true;
            var3 = arg3;
            if(!(var4 === var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.isPrivate;
            var3 = var3.bind(var1)();
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var1.nsfw;
            if(var1) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var1 = _closure1_slot3;
            var1 = var1.BLOCK_CHANNEL_RESTRICTION;
            _fun0001_ip = 10; continue _fun0001;
case 7:
            var3 = _closure1_slot3;
            var1 = var3.DISPLAY;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 5:
            var2 = _closure1_slot3;
            var1 = var2.BLOCK_UNDERAGE;
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.DISPLAY;
case 12:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var6 = var8[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot2 = var5;
    var5 = {};
    var6 = 'display';
    var5['DISPLAY'] = var6;
    var6 = 'block_underage';
    var5['BLOCK_UNDERAGE'] = var6;
    var6 = 'block_channel_restriction';
    var5['BLOCK_CHANNEL_RESTRICTION'] = var6;
    var _closure1_slot3 = var5;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_classification/ContentClassificationVisibility.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ContentClassificationVisibility'] = var5;
    var3['getContentClassificationVisibility'] = var4;
    var2 = function useContentClassificationVisibility(arg1, arg2) {
        var5 = _closure1_slot4;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 3;
        var2 = var4[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var3 = var6.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var1 = var2.nsfwAllowed;
case 13:
                return var1;
            }
        };
        var3 = var3.bind(var6)(var2, var1);
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var2, var1, var3);
        return var1;
    };
    var3['useContentClassificationVisibility'] = var2;
    return var1;
})();