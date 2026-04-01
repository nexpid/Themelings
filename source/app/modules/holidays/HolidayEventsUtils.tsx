// app/modules/holidays/HolidayEventsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var4;
    var6 = function isEligible() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getIsExperimentEligible;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot4;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var6;
    var5 = function useIsEligible() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.useIsExperimentEligible;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot4;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var2 = function isHolidayHappening() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var3 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.startTimeMs;
            var1 = var3 >= var1;
            if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.endTimeMs;
            var1 = var3 <= var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var2 = true;
    var7['value'] = var2;
    var2 = '__esModule';
    var2 = var8.bind(var9)(var3, var2, var7);
    var2 = {};
    var2['isEligible'] = var6;
    var6 = function useHolidaySoundpack() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot3;
            var5 = undefined;
            var2 = var1.bind(var5)();
            var4 = null;
            var1 = null;
            if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var2 = var7.bind(var5)(var2);
            var2 = var2.soundpack;
            var2 = var4 != var2;
            var1 = null;
            if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 5:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var7.bind(var5)(var2);
            var2 = var2.soundpackLabel;
            var2 = var4 != var2;
            var1 = null;
            if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 8:
            var2 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.soundpack;
            var2['soundpack'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.soundpackLabel;
            var2['soundpackLabel'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var2['useHolidaySoundpack'] = var6;
    var2['useIsEligible'] = var5;
    var5 = function getAppSpinnerSources() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot4;
            var4 = undefined;
            var3 = var1.bind(var4)();
            var1 = null;
            if(!var3) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.appSpinnerSources;
case 9:
            return var1;
        }
    };
    var2['getAppSpinnerSources'] = var5;
    var5 = function getLoadingTips() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot4;
            var5 = undefined;
            var2 = var1.bind(var5)();
            var4 = null;
            var1 = null;
            if(!var2) { _fun0006_ip = 11; continue _fun0006 }
case 7:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var2 = var7.bind(var5)(var2);
            var2 = var2.getLoadingTips;
            var4 = var4 == var2;
            var2 = undefined;
            if(var4) { _fun0006_ip = 4; continue _fun0006 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getLoadingTips;
            var2 = var3.bind(var4)();
case 4:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var2['getLoadingTips'] = var5;
    var1 = function getHolidaySoundpack() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot2;
            var4 = undefined;
            var3 = var1.bind(var4)();
            var6 = null;
            var1 = null;
            if(!var3) { _fun0007_ip = 12; continue _fun0007 }
case 7:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 0;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.soundpack;
            var3 = var6 != var3;
            var1 = null;
            if(!var3) { _fun0007_ip = 12; continue _fun0007 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.soundpack;
case 12:
            return var1;
        }
    };
    var2['getHolidaySoundpack'] = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/holidays/HolidayEventsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();