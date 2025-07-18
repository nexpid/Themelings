// app/modules/holidays/HolidayEventsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Soundpacks;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function HolidayEventsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = var1.updateRingtone;
                var3['NOTIFICATIONS_SET_DISABLED_SOUNDS'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.isDesktopOnly;
                        var2 = !var2;
                        if(!var2) { _fun0003_ip = 66; continue _fun0003 }
 37:
                        var3 = _closure3_slot0;
                        var2 = var3.updateSoundpack;
                        var2 = var2.bind(var3)();
                        var2 = var3.updateRingtone;
                        var2 = var2.bind(var3)();
 66:
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.subscribe;
            var2 = var3.handleExperimentUpdated;
            var2 = var4.bind(var5)(var2);
            var3['subscription'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var3 = var2.subscription;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 25; continue _fun0004 }
 15:
                var1 = var3.call;
                var1 = var1.bind(var3)(var2);
 25:
                var1 = undefined;
                var2['subscription'] = var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateSoundpack';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot8;
                var1 = var2.getSoundpack;
                var4 = var1.bind(var2)();
                var1 = var2.getLastSoundpackExperimentId;
                var3 = var1.bind(var2)();
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 7;
                var2 = var9[var7];
                var1 = undefined;
                var2 = var8.bind(var1)(var2);
                var2 = var2.experiment;
                var2 = var2.definition;
                var5 = var2.id;
                var2 = 8;
                var2 = var9[var2];
                var8 = var8.bind(var1)(var2);
                var2 = var8.isEligible;
                var2 = var2.bind(var8)();
                if(var2) { _fun0005_ip = 160; continue _fun0005 }
 93:
                var11 = null;
                if(!(var11 == var3)) { _fun0005_ip = 113; continue _fun0005 }
 99:
                var8 = _closure1_slot9;
                var8 = var8.CLASSIC;
                if(!(var4 !== var8)) { _fun0005_ip = 160; continue _fun0005 }
 113:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 9;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.setSoundpack;
                var8 = _closure1_slot9;
                var8 = var8.CLASSIC;
                var8 = var9.bind(var10)(var8, var11);
                _fun0005_ip = 283; continue _fun0005;
 160:
                if(!var2) { _fun0005_ip = 192; continue _fun0005 }
 163:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var1)(var8);
                var9 = var8.soundpack;
                var8 = null;
                var2 = var8 != var9;
 192:
                if(!var2) { _fun0005_ip = 199; continue _fun0005 }
 195:
                var2 = var5 !== var3;
 199:
                if(!var2) { _fun0005_ip = 229; continue _fun0005 }
 202:
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var8.bind(var1)(var3);
                var3 = var3.soundpack;
                var2 = var4 !== var3;
 229:
                if(!var2) { _fun0005_ip = 283; continue _fun0005 }
 232:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 9;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.setSoundpack;
                var6 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var1)(var2);
                var2 = var2.soundpack;
                var2 = var3.bind(var4)(var2, var5);
 283:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'updateRingtone';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isEligible;
                var2 = var2.bind(var4)();
                if(var2) { _fun0006_ip = 82; continue _fun0006 }
 38:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var5 = var6.setIncomingRingtone;
                var4 = 'call_ringing';
                var2 = 'call_ringing.mp3';
                var2 = var5.bind(var6)(var4, var2);
                _fun0006_ip = 185; continue _fun0006;
 82:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var5 = _closure1_slot8;
                var2 = var5.getSoundpack;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var1)(var2);
                var5 = var2.call_ringing;
                var4 = null;
                if(!(var4 != var5)) { _fun0006_ip = 185; continue _fun0006 }
 133:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setIncomingRingtone;
                var3 = var2.call_ringing;
                var2 = '.mp3';
                var3 = var3 + var2;
                var2 = 'call_ringing';
                var2 = var4.bind(var5)(var2, var3);
 185:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/holidays/HolidayEventsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();