// app/modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function formatWatchRemainingDurationShort(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.getRemainingTaskTime;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = var1.minutes;
            var9 = 60;
            var3 = var9 * var3;
            var1 = var1.seconds;
            var6 = var3 + var1;
            if(!(!(var6 >= var9))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var4 = var8[var1];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var3.bind(var7)(var1);
            var1 = var1.t;
            var3 = var1.rUfeQx;
            var1 = {};
            var1['count'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.PHhTXX;
            var2 = {};
            var7 = global;
            var8 = var7.Math;
            var7 = var8.round;
            var6 = var6 / var9;
            var6 = var7.bind(var8)(var6);
            var2['count'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx';
    var5 = var6.bind(var7)(var5);
    var3['formatWatchRemainingDurationShort'] = var4;
    var4 = function getVideoQuestWatchCtaText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = var4.percentComplete;
            var1 = 0;
            var1 = var2 > var1;
            var3 = _closure1_slot2;
            var7 = undefined;
            var6 = var3.bind(var7)(var4);
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = var2.CHrvqg;
            var1 = {};
            var1['durationShort'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var3 = var2.pF/deA;
            var2 = {};
            var2['durationShort'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['getVideoQuestWatchCtaText'] = var4;
    var2 = function getVideoQuestWatchCtaAccessibilityLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var1 = var6.percentComplete;
            var3 = 0;
            var1 = var1 > var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = var5.getRemainingTaskTime;
            var4 = var4.bind(var5)(var6);
            var10 = var4.minutes;
            var9 = var4.seconds;
            if(!(var10 > var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            if(!(!(var9 > var3))) { _fun0003_ip = 10; continue _fun0003 }
case 8:
            if(!(!(var10 > var3))) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var5 = var8[var3];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3["0BZpdi"];
            var3 = {};
            var3['count'] = var9;
            var6 = var5.bind(var6)(var4, var3);
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 1;
            var5 = var11[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.SxnF/O;
            var3 = {};
            var3['count'] = var10;
            var6 = var5.bind(var8)(var4, var3);
case 13:
            _fun0003_ip = 14; continue _fun0003;
case 10:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 1;
            var5 = var11[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.lW/66D;
            var3 = {};
            var3['minutes'] = var10;
            var3['seconds'] = var9;
            var6 = var5.bind(var8)(var4, var3);
case 14:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var2.Bwc5Dg;
            var1 = {};
            var1['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var3 = var2.ch+yrN;
            var2 = {};
            var2['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var3['getVideoQuestWatchCtaAccessibilityLabel'] = var2;
    return var1;
})();