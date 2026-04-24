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
    var1 = 3;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx';
    var5 = var6.bind(var7)(var5);
    var3['formatWatchRemainingDurationShort'] = var4;
    var4 = function getMobileVideoQuestWatchCtaText(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var4 = arg2;
            var1 = var9.percentComplete;
            var5 = 0;
            var2 = var1 > var5;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = var3[var5];
            var6 = undefined;
            var8 = var7.bind(var6)(var5);
            var5 = var8.formatWatchTaskRemainingTime;
            var5 = var5.bind(var8)(var9);
            var8 = _closure1_slot2;
            var10 = var8.bind(var6)(var9);
            var8 = 2;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.CONTROL;
            if(!(var3 !== var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T6_LEARN_MORE_BIO;
            if(!(var3 !== var4)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T1_NO_LEFT;
            if(!(var3 !== var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T4_SECONDARY_CTA_T1;
            if(!(var3 !== var4)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T2_SHORT;
            if(!(var3 !== var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T3_WATCH_ONLY;
            if(!(var3 !== var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T5_SECONDARY_CTA_T3;
            if(!(var3 !== var4)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            return var6;
case 13:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var4 = var9[var3];
            var4 = var8.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["6fpk4L"];
            var3 = var4.bind(var7)(var3);
            return var3;
case 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var8 = var7[var3];
            var8 = var4.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.t;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = var4.CHrvqg;
            var3 = {};
            var3['durationShort'] = var10;
            var3 = var8.bind(var9)(var7, var3);
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var7 = var4.pF/deA;
            var4 = {};
            var4['durationShort'] = var10;
            var3 = var8.bind(var9)(var7, var4);
case 18:
            return var3;
case 8:
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var7 = var9[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = var3.Bwc5Dg;
            var2 = {};
            var2['remainTime'] = var5;
            var2 = var7.bind(var8)(var4, var2);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var4 = var3.ch+yrN;
            var3 = {};
            var3['remainTime'] = var5;
            var2 = var7.bind(var8)(var4, var3);
case 21:
            return var2;
case 5:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.GNsKiW;
            var1 = {};
            var1['remainTime'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getMobileVideoQuestWatchCtaText'] = var4;
    var2 = function getMobileVideoQuestWatchCtaAccessibilityLabel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var1 = var8.percentComplete;
            var3 = 0;
            var2 = var1 > var3;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var3];
            var6 = undefined;
            var7 = var7.bind(var6)(var5);
            var5 = var7.getRemainingTaskTime;
            var5 = var5.bind(var7)(var8);
            var11 = var5.minutes;
            var10 = var5.seconds;
            if(!(var11 > var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            if(!(!(var10 > var3))) { _fun0003_ip = 24; continue _fun0003 }
case 22:
            if(!(!(var11 > var3))) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var7 = var9[var3];
            var7 = var5.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var5 = var3["0BZpdi"];
            var3 = {};
            var3['count'] = var10;
            var5 = var7.bind(var8)(var5, var3);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 1;
            var8 = var12[var3];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var12[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var7 = var3.SxnF/O;
            var3 = {};
            var3['count'] = var11;
            var5 = var8.bind(var9)(var7, var3);
case 27:
            _fun0003_ip = 28; continue _fun0003;
case 24:
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 1;
            var8 = var12[var3];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var12[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var7 = var3.lW/66D;
            var3 = {};
            var3['minutes'] = var11;
            var3['seconds'] = var10;
            var5 = var8.bind(var9)(var7, var3);
case 28:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 2;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.CONTROL;
            if(!(var3 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T6_LEARN_MORE_BIO;
            if(!(var3 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T1_NO_LEFT;
            if(!(var3 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T4_SECONDARY_CTA_T1;
            if(!(var3 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T2_SHORT;
            if(!(var3 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 35:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T3_WATCH_ONLY;
            if(!(var3 !== var4)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T5_SECONDARY_CTA_T3;
            if(!(var3 !== var4)) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            return var6;
case 36:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var4 = var9[var3];
            var4 = var8.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["6fpk4L"];
            var3 = var4.bind(var7)(var3);
            return var3;
case 32:
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var7 = var9[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var4 = var3.Bwc5Dg;
            var2 = {};
            var2['remainTime'] = var5;
            var2 = var7.bind(var8)(var4, var2);
            _fun0003_ip = 41; continue _fun0003;
case 39:
            var4 = var3.ch+yrN;
            var3 = {};
            var3['remainTime'] = var5;
            var2 = var7.bind(var8)(var4, var3);
case 41:
            return var2;
case 29:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.GNsKiW;
            var1 = {};
            var1['remainTime'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getMobileVideoQuestWatchCtaAccessibilityLabel'] = var2;
    return var1;
})();