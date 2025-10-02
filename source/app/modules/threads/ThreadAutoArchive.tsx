// app/modules/threads/ThreadAutoArchive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var5 = function getAutoArchiveOptions() {
        var2 = {};
        var10 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 2;
        var3 = var6[var7];
        var5 = undefined;
        var3 = var10.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var6[var7];
        var3 = var10.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.cs8A1d;
        var3 = var4.bind(var8)(var3);
        var2['label'] = var3;
        var4 = _closure1_slot1;
        var3 = 1;
        var1 = var6[var3];
        var1 = var4.bind(var5)(var1);
        var1 = var1.Minutes;
        var1 = var1.HOUR;
        var2['value'] = var1;
        var1 = new Array(4);
        var1[0] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.zFKbrK;
        var8 = var9.bind(var11)(var8);
        var2['label'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Minutes;
        var8 = var8.DAY;
        var2['value'] = var8;
        var1[1] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var11 = var8.intl;
        var9 = var11.string;
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.TmPIZW;
        var8 = var9.bind(var11)(var8);
        var2['label'] = var8;
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.Minutes;
        var9 = var8.DAY;
        var8 = 3;
        var8 = var8 * var9;
        var2['value'] = var8;
        var1[2] = var2;
        var2 = {};
        var8 = var6[var7];
        var8 = var10.bind(var5)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var6[var7];
        var7 = var10.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7./7i2en;
        var7 = var8.bind(var9)(var7);
        var2['label'] = var7;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.Minutes;
        var3 = var3.WEEK;
        var2['value'] = var3;
        var1[3] = var2;
        return var1;
    };
    var _closure1_slot4 = var5;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = var4.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var9[var11];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Minutes;
    var4 = var4.HOUR;
    var4 = var11 * var4;
    var6 = new Array(4);
    var6[0] = var4;
    var4 = var9[var11];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Minutes;
    var4 = var4.DAY;
    var4 = var11 * var4;
    var6[1] = var4;
    var4 = var9[var11];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Minutes;
    var10 = var4.DAY;
    var4 = 3;
    var10 = var4 * var10;
    var6[2] = var10;
    var10 = var9[var11];
    var10 = var7.bind(var1)(var10);
    var10 = var10.Minutes;
    var10 = var10.WEEK;
    var10 = var11 * var10;
    var6[3] = var10;
    var4 = var9[var4];
    var7 = var7.bind(var1)(var4);
    var4 = function() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var3 = var2.bind(var1)();
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.value;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = var7.bind(var1)(var4);
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/threads/ThreadAutoArchive.tsx';
    var7 = var8.bind(var9)(var7);
    var3['AUTO_ARCHIVE_OPTION_VALUES'] = var6;
    var3['getAutoArchiveOptions'] = var5;
    var3['getAutoArchiveDurations'] = var4;
    var4 = function getAutoArchiveDurationText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot4;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var3 = var6.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var3.bind(var6)(var1);
            var3 = null;
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var6.label;
case 2:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.duration;
            var2 = 'minutes';
            var3 = var3.bind(var4)(var5, var2);
            var2 = var3.humanize;
            var1 = var2.bind(var3)();
case 4:
            return var1;
        }
    };
    var3['getAutoArchiveDurationText'] = var4;
    var2 = function getAutoArchiveDuration(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var4.defaultAutoArchiveDuration;
case 8:
            var1 = var3;
case 6:
            if(!(var2 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = _closure1_slot3;
case 10:
            return var1;
        }
    };
    var3['getAutoArchiveDuration'] = var2;
    return var1;
})();