// app/modules/billing/hooks/useFPDurationLeft.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function roundFPCountdownUnits(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = {};
            var7 = arg1;
            var8 = var3;
            var1 = copyDataProperties(var8, var7);
            var1 = var3.seconds;
            var4 = 0;
            if(!(var1 > var4)) { _fun0001_ip = 49; continue _fun0001 }
 24:
            var2 = var3.minutes;
            var1 = 1;
            var1 = var2 + var1;
            var3['minutes'] = var1;
            var3['seconds'] = var4;
 49:
            var2 = var3.minutes;
            var1 = 60;
            if(!(var1 === var2)) { _fun0001_ip = 87; continue _fun0001 }
 62:
            var2 = var3.hours;
            var1 = 1;
            var1 = var2 + var1;
            var3['hours'] = var1;
            var3['minutes'] = var4;
 87:
            var2 = var3.hours;
            var1 = 24;
            if(!(var1 === var2)) { _fun0001_ip = 125; continue _fun0001 }
 100:
            var2 = var3.days;
            var1 = 1;
            var1 = var2 + var1;
            var3['days'] = var1;
            var3['hours'] = var4;
 125:
            var1 = var3.days;
            if(!(!(var1 > var4))) { _fun0001_ip = 322; continue _fun0001 }
 138:
            var1 = var3.hours;
            if(!(!(var1 > var4))) { _fun0001_ip = 247; continue _fun0001 }
 148:
            var1 = var3.minutes;
            if(!(!(var1 > var4))) { _fun0001_ip = 187; continue _fun0001 }
 158:
            var2 = var3.seconds;
            var1 = var3;
            if(!(var2 > var4)) { _fun0001_ip = 185; continue _fun0001 }
 171:
            var1 = {'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 0};
 185:
            return var1;
 187:
            var2 = var3.minutes;
            var1 = 45;
            var1 = var2 > var1;
            var6 = 0;
            if(!var1) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var6 = 1;
 208:
            var1 = {};
            var1['days'] = var4;
            var1['hours'] = var6;
            var5 = 1;
            var2 = 0;
            if(!(var5 !== var6)) { _fun0001_ip = 235; continue _fun0001 }
 229:
            var2 = var3.minutes;
 235:
            var1['minutes'] = var2;
            var1['seconds'] = var4;
            return var1;
 247:
            var2 = var3.minutes;
            var1 = 45;
            if(!(!(var2 > var1))) { _fun0001_ip = 268; continue _fun0001 }
 260:
            var2 = var3.hours;
            _fun0001_ip = 281; continue _fun0001;
 268:
            var5 = var3.hours;
            var1 = 1;
            var2 = var5 + var1;
 281:
            var1 = 11;
            if(!(!(var2 > var1))) { _fun0001_ip = 306; continue _fun0001 }
 288:
            var1 = {'days': 0, 'hours': null, 'minutes': 0, 'seconds': 0};
            var1['hours'] = var2;
            _fun0001_ip = 320; continue _fun0001;
 306:
            var1 = {'days': 1, 'hours': 0, 'minutes': 0, 'seconds': 0};
 320:
            return var1;
 322:
            var1 = {'days': null, 'hours': 0, 'minutes': 0, 'seconds': 0};
            var2 = var3.hours;
            if(!(!(var2 > var4))) { _fun0001_ip = 354; continue _fun0001 }
 346:
            var2 = var3.days;
            _fun0001_ip = 367; continue _fun0001;
 354:
            var4 = var3.days;
            var3 = 1;
            var2 = var4 + var3;
 367:
            var1['days'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = {};
    var8 = 0;
    var4['SHORT_TIME_LEFT'] = var8;
    var1 = 'SHORT_TIME_LEFT';
    var4[var8] = var1;
    var8 = 1;
    var4['LONG_TIME_LEFT'] = var8;
    var1 = 'LONG_TIME_LEFT';
    var4[var8] = var1;
    var8 = 2;
    var4['ENDS_IN'] = var8;
    var1 = 'ENDS_IN';
    var4[var8] = var1;
    var8 = 3;
    var4['SHORT_TIME'] = var8;
    var1 = 'SHORT_TIME';
    var4[var8] = var1;
    var1 = 4;
    var4['CREDITS_ENDS_IN'] = var1;
    var8 = 'CREDITS_ENDS_IN';
    var4[var1] = var8;
    var _closure1_slot3 = var4;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/billing/hooks/useFPDurationLeft.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useFPDurationLeft(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var11 = arg2;
            var6 = arg1;
            var4 = undefined;
            var3 = undefined;
            var5 = undefined;
            var1 = undefined;
            var7 = _closure1_slot3;
            var7 = var7.SHORT_TIME_LEFT;
            if(!(var7 !== var11)) { _fun0002_ip = 553; continue _fun0002 }
 34:
            var7 = _closure1_slot3;
            var7 = var7.LONG_TIME_LEFT;
            if(!(var7 !== var11)) { _fun0002_ip = 455; continue _fun0002 }
 51:
            var7 = _closure1_slot3;
            var7 = var7.ENDS_IN;
            if(!(var7 !== var11)) { _fun0002_ip = 354; continue _fun0002 }
 68:
            var7 = _closure1_slot3;
            var7 = var7.CREDITS_ENDS_IN;
            if(!(var7 !== var11)) { _fun0002_ip = 253; continue _fun0002 }
 85:
            var7 = _closure1_slot3;
            var7 = var7.SHORT_TIME;
            if(!(var7 !== var11)) { _fun0002_ip = 158; continue _fun0002 }
 99:
            var7 = global;
            var9 = var7.Error;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var8 = 'Unknown messageType (';
            var7 = ') when rendering time left';
            var13 = var10.bind(var8)(var11, var7);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var14 = var8;
            var7 = new var14[var9](var13, var12);
            var7 = var7 instanceof Object ? var7 : var8;
            throw var7;
 158:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 0;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.fYmir6;
            var7['days'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.C3RO+v;
            var7['hours'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.r77oHR;
            var7['minutes'] = var8;
            var3 = var7;
            _fun0002_ip = 649; continue _fun0002;
 253:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 0;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.xQ3zuL;
            var7['days'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.SFU7QE;
            var7['hours'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Y4FNdH;
            var7['minutes'] = var8;
            var3 = var7;
            _fun0002_ip = 649; continue _fun0002;
 354:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 0;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.rLqNaW;
            var7['days'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.d1LvCA;
            var7['hours'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Z2LX7O;
            var7['minutes'] = var8;
            var3 = var7;
            _fun0002_ip = 649; continue _fun0002;
 455:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 0;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.UD5nn5;
            var7['days'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Hg8FeX;
            var7['hours'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.XSbQZW;
            var7['minutes'] = var8;
            var3 = var7;
            _fun0002_ip = 649; continue _fun0002;
 553:
            var7 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 0;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11./wnvqK;
            var7['days'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Jsq0XF;
            var7['hours'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.SBd+Bg;
            var7['minutes'] = var8;
            var3 = var7;
 649:
            var7 = _closure1_slot4;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 1;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var6;
            var6 = var8.toDate;
            var8 = var6.bind(var8)();
            var6 = 60000;
            var6 = var9.bind(var4)(var8, var6);
            var5 = var7.bind(var4)(var6);
            var1 = '';
 707: // try_start_0
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.unitsAsStrings;
            var1 = var6.bind(var7)(var5, var3);
 739: // try_end0
            _fun0002_ip = 780; continue _fun0002;
 741: // catch_target0
            CatchBlockStart(arg_register=2);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.captureMessage;
            var2 = 'Error trying to format string for fractional nitro duration pill';
            var2 = var3.bind(var4)(var2);
 780:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['CountDownMessageTypes'] = var4;
    var3['roundFPCountdownUnits'] = var2;
    return var1;
})();