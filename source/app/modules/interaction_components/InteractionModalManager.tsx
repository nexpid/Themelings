// app/modules/interaction_components/InteractionModalManager.tsx
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _handleInteractionModalCreate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 151; continue _fun0002 }
 13:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 9;
                    var5 = var2[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = 8;
                    var5 = var2[var5];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var5, var2);
                    SaveGenerator(address=60);
 58:
                    return var2;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 148; continue _fun0002 }
 66:
                    var5 = var2.openInteractionModal;
                    var5 = var5.bind(var3)(var8);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot10;
                    var5 = var4.OPEN_MODAL;
                    var4 = {};
                    var9 = 'interaction_modal';
                    var4['type'] = var9;
                    var8 = var8.application;
                    var8 = var8.id;
                    var4['application_id'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 148:
                    return var2;
 151:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function InteractionModalManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var2 = undefined;
                var8 = var8.bind(var2)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var2)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)();
                if(var1) { _fun0003_ip = 86; continue _fun0003 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 120; continue _fun0003;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var2)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var4.bind(var2)(var5, var1);
                var _closure3_slot0 = var1;
                var1['iframeModalOpenTimeMs'] = var2;
                var2 = {};
                var4 = function INTERACTION_MODAL_CREATE(arg1) {
                    var3 = function handleInteractionModalCreate() {
                        var1 = undefined;
                        var4 = _closure1_slot12;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    var2 = !var2;
                    return var1;
                };
                var2['INTERACTION_MODAL_CREATE'] = var4;
                var4 = function INTERACTION_IFRAME_MODAL_CREATE(arg1) {
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2['iframeModalOpenTimeMs'] = var1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var3 = var5[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.bind(var1)(var6);
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var7 = 'interaction_iframe_modal';
                    var2['type'] = var7;
                    var6 = var6.application;
                    var6 = var6.id;
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2['INTERACTION_IFRAME_MODAL_CREATE'] = var4;
                var4 = function INTERACTION_IFRAME_MODAL_CLOSE(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.iframeModalOpenTimeMs;
                        var1 = null;
                        var3 = var1 != var4;
                        var1 = undefined;
                        var7 = undefined;
                        if(!var3) { _fun0004_ip = 47; continue _fun0004 }
 26:
                        var3 = global;
                        var5 = var3.Date;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        var7 = var3 - var4;
 47:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot10;
                        var4 = var3.MODAL_DISMISSED;
                        var3 = {};
                        var8 = 'interaction_iframe_modal';
                        var3['type'] = var8;
                        var8 = arg1;
                        var8 = var8.applicationId;
                        var3['application_id'] = var8;
                        var3['duration_open_ms'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['iframeModalOpenTimeMs'] = var1;
                        return var1;
                    }
                };
                var2['INTERACTION_IFRAME_MODAL_CLOSE'] = var4;
                var3 = function RPC_APP_DISCONNECTED(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.application;
                        var5 = _closure1_slot9;
                        var3 = var5.getIFrameModalApplicationId;
                        var4 = var3.bind(var5)();
                        var3 = var5.getIFrameModalKey;
                        var3 = var3.bind(var5)();
                        var2 = var2.id;
                        var2 = var2 === var4;
                        if(!var2) { _fun0005_ip = 57; continue _fun0005 }
 51:
                        var5 = null;
                        var2 = var5 != var4;
 57:
                        if(!var2) { _fun0005_ip = 88; continue _fun0005 }
 60:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.bind(var2)(var4, var3);
 88:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['RPC_APP_DISCONNECTED'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
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
    var4 = 'modules/interaction_components/InteractionModalManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'interaction_iframe_modal';
    var3['INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE'] = var2;
    return var1;
})();