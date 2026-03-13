// app/modules/holidays/HolidayEventsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Soundpacks;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function HolidayEventsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = global;
                var4 = var4.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var6 = var4 instanceof Object ? var4 : var5;
                var5 = var6.set;
                var4 = _closure1_slot8;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleExperimentUpdated;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var1['stores'] = var3;
                var3 = {};
                var4 = var1.updateRingtone;
                var3['NOTIFICATIONS_SET_DISABLED_SOUNDS'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.isDesktopOnly;
                        var2 = !var2;
                        if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = _closure3_slot0;
                        var2 = var3.updateSoundpack;
                        var2 = var2.bind(var3)();
                        var2 = var3.updateRingtone;
                        var2 = var2.bind(var3)();
case 9:
                        return var1;
                    }
                };
                var1['handleExperimentUpdated'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'updateSoundpack';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = var2.getSoundpack;
                var4 = var1.bind(var2)();
                var1 = var2.getLastSoundpackExperimentId;
                var3 = var1.bind(var2)();
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 8;
                var2 = var1[var7];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.experiment;
                var9 = null;
                var8 = var9 == var2;
                var5 = undefined;
                if(var8) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = var2.definition;
                var5 = var2.name;
case 11:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 9;
                var2 = var10[var2];
                var8 = var8.bind(var1)(var2);
                var2 = var8.isEligible;
                var2 = var2.bind(var8)();
                if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                if(!(var9 == var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var8 = _closure1_slot10;
                var8 = var8.CLASSIC;
                if(!(var4 !== var8)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 10;
                var8 = var11[var8];
                var11 = var10.bind(var1)(var8);
                var10 = var11.setSoundpack;
                var8 = _closure1_slot10;
                var8 = var8.CLASSIC;
                var8 = var10.bind(var11)(var8, var9);
                _fun0004_ip = 17; continue _fun0004;
case 13:
                if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var1)(var8);
                var8 = var8.soundpack;
                var2 = var9 != var8;
case 18:
                if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var2 = var5 !== var3;
case 20:
                if(!var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var8.bind(var1)(var3);
                var3 = var3.soundpack;
                var2 = var4 !== var3;
case 22:
                if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 24:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 10;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.setSoundpack;
                var6 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var1)(var2);
                var2 = var2.soundpack;
                var2 = var3.bind(var4)(var2, var5);
case 17:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'updateRingtone';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isEligible;
                var2 = var2.bind(var4)();
                if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var5 = var6.setIncomingRingtone;
                var4 = 'call_ringing';
                var2 = 'call_ringing.mp3';
                var2 = var5.bind(var6)(var4, var2);
                _fun0005_ip = 27; continue _fun0005;
case 25:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var5 = _closure1_slot9;
                var2 = var5.getSoundpack;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var1)(var2);
                var5 = var2.call_ringing;
                var4 = null;
                if(!(var4 != var5)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setIncomingRingtone;
                var3 = var2.call_ringing;
                var2 = '.mp3';
                var3 = var3 + var2;
                var2 = 'call_ringing';
                var2 = var4.bind(var5)(var2, var3);
case 27:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/holidays/HolidayEventsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();