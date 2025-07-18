// app/modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function fade(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg2;
            var5 = global;
            var4 = var5.Math;
            var3 = var4.round;
            var7 = 100;
            var1 = arg1;
            var1 = var7 * var1;
            var8 = var3.bind(var4)(var1);
            var6 = var5.Math;
            var4 = var6.round;
            var3 = _closure1_slot9;
            var3 = var7 * var3;
            var4 = var4.bind(var6)(var3);
            var9 = var5.Math;
            var6 = var9.round;
            var3 = _closure1_slot8;
            var3 = var7 * var3;
            var6 = var6.bind(var9)(var3);
            var3 = 0;
            if(!(var8 > var3)) { _fun0002_ip = 92; continue _fun0002 }
 88:
            if(!(!(var6 >= var4))) { _fun0002_ip = 167; continue _fun0002 }
 92:
            if(!(var8 < var3)) { _fun0002_ip = 100; continue _fun0002 }
 96:
            if(!(!(var6 <= var4))) { _fun0002_ip = 167; continue _fun0002 }
 100:
            var6 = var6 + var8;
            var6 = var6 / var7;
            _closure1_slot8 = var6;
            var7 = _closure1_slot7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var9[var6];
            var10 = undefined;
            var9 = var8.bind(var10)(var6);
            var8 = _closure1_slot8;
            var6 = 0.5;
            var6 = var9.bind(var10)(var8, var3, var6);
            var7['volume'] = var6;
            _fun0002_ip = 204; continue _fun0002;
 167:
            var6 = var5.clearInterval;
            var5 = _closure1_slot10;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var3 = var3 === var4;
            if(!var3) { _fun0002_ip = 197; continue _fun0002 }
 191:
            var4 = null;
            var3 = var4 != var2;
 197:
            if(!var3) { _fun0002_ip = 204; continue _fun0002 }
 200:
            var1 = var2.bind(var1)();
 204:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function fadeOut(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot10;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 41; continue _fun0003 }
 22:
            var1 = global;
            var5 = var1.clearInterval;
            var4 = _closure1_slot10;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
 41:
            var1 = 0;
            _closure1_slot9 = var1;
            var4 = _closure1_slot17;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var _closure2_slot1 = var4;
            var4 = global;
            var5 = var4.setInterval;
            var4 = function() {
                var4 = _closure1_slot12;
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = 100;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot10 = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function fadeIn() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot10;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 34; continue _fun0004 }
 15:
            var1 = global;
            var5 = var1.clearInterval;
            var4 = _closure1_slot10;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
 34:
            var4 = _closure1_slot7;
            var1 = var4.loop;
            var1 = var1.bind(var4)();
            var1 = 0.5;
            _closure1_slot9 = var1;
            var4 = _closure1_slot17;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var _closure2_slot0 = var4;
            var4 = global;
            var5 = var4.setInterval;
            var4 = function() {
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 100;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot10 = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function handlePauseMusic() {
        var3 = _closure1_slot13;
        var2 = _closure1_slot7;
        var4 = var2.pause;
        var2 = var4.bind;
        var1 = _closure1_slot7;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function handleStopMusic() {
        var3 = _closure1_slot13;
        var2 = _closure1_slot7;
        var4 = var2.stop;
        var2 = var4.bind;
        var1 = _closure1_slot7;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getVolumeChangeAmount() {
        var2 = _closure1_slot9;
        var1 = _closure1_slot8;
        var2 = var2 - var1;
        var1 = 0.2;
        var1 = var1 * var2;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createSound;
    var8 = 'vibing_wumpus';
    var8 = var9.bind(var10)(var8, var8, var4);
    var _closure1_slot7 = var8;
    var _closure1_slot8 = var4;
    var _closure1_slot9 = var4;
    var4 = null;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function InappropriateConversationsManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot14;
                var2['VIBING_WUMPUS_PLAY_MUSIC'] = var4;
                var4 = _closure1_slot16;
                var2['VIBING_WUMPUS_STOP_MUSIC'] = var4;
                var3 = _closure1_slot15;
                var2['VIBING_WUMPUS_PAUSE_MUSIC'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();