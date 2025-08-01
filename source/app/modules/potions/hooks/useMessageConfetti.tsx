// app/modules/potions/hooks/useMessageConfetti.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
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
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/potions/hooks/useMessageConfetti.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var14 = undefined;
        var3 = var3.bind(var14)(var2);
        var2 = arg1;
        var5 = var3.bind(var14)(var2);
        var6 = var5.update;
        var2 = var5.draw;
        var _closure2_slot0 = var2;
        var7 = var5.emit;
        var _closure2_slot1 = var7;
        var4 = var5.tickRate;
        var3 = var5.improvePerformance;
        var10 = var5.shouldTick;
        var _closure2_slot2 = var10;
        var9 = _closure1_slot4;
        var12 = var9.useMemo;
        var11 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5 = new Array(0);
        var12 = var12.bind(var9)(var11, var5);
        var _closure2_slot3 = var12;
        var11 = var9.useCallback;
        var5 = new Array(2);
        var5[0] = var12;
        var5[1] = var2;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = _closure2_slot3;
            var3['assetMap'] = var2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var5 = var11.bind(var9)(var2, var5);
        var11 = var9.useState;
        var2 = false;
        var13 = var11.bind(var9)(var2);
        var11 = _closure1_slot3;
        var2 = 2;
        var13 = var11.bind(var14)(var13, var2);
        var2 = 0;
        var2 = var13[var2];
        var11 = 1;
        var11 = var13[var11];
        var _closure2_slot4 = var11;
        var11 = var9.useRef;
        var13 = null;
        var11 = var11.bind(var9)(var13);
        var _closure2_slot5 = var11;
        var11 = var9.useRef;
        var11 = var11.bind(var9)(var13);
        var _closure2_slot6 = var11;
        var11 = var9.useRef;
        var8 = _closure1_slot5;
        var8 = var8.lastConfetti;
        var8 = var11.bind(var9)(var8);
        var _closure2_slot7 = var8;
        var11 = var9.useEffect;
        var8 = new Array(2);
        var8[0] = var12;
        var8[1] = var7;
        var7 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = function handleAction() {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var5;
                var2 = function _handleAction() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot2;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0002_ip = 298; continue _fun0002 }
 13:
                                var3 = var2.emoji;
                                var9 = var2.boundingRect;
                                var4 = undefined;
                                SaveGenerator(address=31);
 29:
                                return var4;
 31:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 295; continue _fun0002 }
 40:
                                var8 = var3.id;
                                var7 = null;
                                if(!(var7 == var8)) { _fun0002_ip = 56; continue _fun0002 }
 51:
                                var8 = var3.name;
 56:
                                var5 = var3.id;
                                if(!(var7 != var5)) { _fun0002_ip = 126; continue _fun0002 }
 65:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var5 = 7;
                                var5 = var10[var5];
                                var10 = var6.bind(var4)(var5);
                                var6 = var10.getEmojiURL;
                                var5 = {'id': null, 'animated': false, 'size': 64, 'forcePNG': true};
                                var11 = var3.id;
                                var5['id'] = var11;
                                var10 = var6.bind(var10)(var5);
                                _fun0002_ip = 165; continue _fun0002;
 126:
                                var6 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var5 = 6;
                                var5 = var11[var5];
                                var6 = var6.bind(var4)(var5);
                                var5 = var6.getURL;
                                var3 = var3.name;
                                var10 = var5.bind(var6)(var3);
 165:
                                var6 = _closure2_slot3;
                                var3 = var6.loadRemoteImage;
                                var3 = var3.bind(var6)(var8, var10);
                                SaveGenerator(address=188);
 186:
                                return var3;
 188:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                if(var6) { _fun0002_ip = 292; continue _fun0002 }
 194:
                                var6 = _closure2_slot1;
                                var6 = var6.bind(var4)(var8, var9);
                                var8 = _closure2_slot4;
                                var6 = true;
                                var6 = var8.bind(var4)(var6);
                                var6 = _closure2_slot6;
                                var6 = var6.current;
                                if(!(var7 != var6)) { _fun0002_ip = 250; continue _fun0002 }
 228:
                                var6 = global;
                                var7 = var6.clearTimeout;
                                var6 = _closure2_slot6;
                                var6 = var6.current;
                                var6 = var7.bind(var4)(var6);
 250:
                                var6 = _closure2_slot6;
                                var5 = global;
                                var8 = var5.setTimeout;
                                var7 = function() {
                                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                        var1 = _closure1_slot5;
                                        var4 = var1.lastConfetti;
                                        var3 = null;
                                        var6 = var3 == var4;
                                        var1 = undefined;
                                        var5 = undefined;
                                        if(var6) { _fun0003_ip = 32; continue _fun0003 }
 26:
                                        var5 = var4.triggerTime;
 32:
                                        var3 = var3 == var5;
                                        if(var3) { _fun0003_ip = 70; continue _fun0003 }
 39:
                                        var4 = global;
                                        var6 = var4.Date;
                                        var4 = var6.now;
                                        var4 = var4.bind(var6)();
                                        var5 = var4 - var5;
                                        var4 = 2500;
                                        var3 = var5 > var4;
 70:
                                        if(!var3) { _fun0003_ip = 117; continue _fun0003 }
 73:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var2 = 8;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.dispatch;
                                        var2 = {'type': 'POTIONS_SET_CONFETTI_MODE', 'enabled': false};
                                        var2 = var3.bind(var4)(var2);
 117:
                                        return var1;
                                    }
                                };
                                var5 = 2500;
                                var5 = var8.bind(var4)(var7, var5);
                                var6['current'] = var5;
                                return var4;
 292:
                                return var3;
 295:
                                return var2;
 298:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot1 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var2;
                var3 = _closure2_slot7;
                var3 = var3.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0001_ip = 59; continue _fun0001 }
 42:
                var4 = _closure2_slot7;
                var2 = undefined;
                var4['current'] = var2;
                var2 = var5.bind(var2)(var3);
 59:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'POTIONS_TRIGGER_MESSAGE_CONFETTI';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.unsubscribe;
                    var2 = _closure3_slot0;
                    var1 = 'POTIONS_TRIGGER_MESSAGE_CONFETTI';
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            }
        };
        var7 = var11.bind(var9)(var7, var8);
        var11 = var9.useEffect;
        var8 = function() {
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 89; continue _fun0004 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.dispatch;
                    var2 = {'type': 'POTIONS_SET_CONFETTI_MODE', 'enabled': false};
                    var2 = var4.bind(var5)(var2);
                    var2 = global;
                    var2 = var2.clearTimeout;
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var7 = new Array(0);
        var7 = var11.bind(var9)(var8, var7);
        var8 = var9.useEffect;
        var7 = new Array(2);
        var7[0] = var2;
        var7[1] = var10;
        var1 = function() {
            var6 = function checkIfShouldStillPlay() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
 15:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var3 = _closure2_slot5;
                    var2 = null;
                    var3['current'] = var2;
                    _fun0005_ip = 81; continue _fun0005;
 42:
                    var2 = _closure2_slot5;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = _closure3_slot0;
                    var3 = undefined;
                    var1 = 1000;
                    var1 = var5.bind(var3)(var4, var1);
                    var2['current'] = var1;
 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot0 = var6;
            var3 = _closure2_slot5;
            var2 = global;
            var5 = var2.setTimeout;
            var4 = undefined;
            var2 = 1000;
            var2 = var5.bind(var4)(var6, var2);
            var3['current'] = var2;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 89; continue _fun0006 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.dispatch;
                    var2 = {'type': 'POTIONS_SET_CONFETTI_MODE', 'enabled': false};
                    var2 = var4.bind(var5)(var2);
                    var2 = global;
                    var2 = var2.clearTimeout;
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var1['update'] = var6;
        var1['draw'] = var5;
        var1['tickRate'] = var4;
        var1['improvePerformance'] = var3;
        var1['playing'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();