// app/modules/interaction_components/InteractionModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var2['IN_FLIGHT'] = var11;
    var4 = 'IN_FLIGHT';
    var2[var11] = var4;
    var2['ERRORED'] = var10;
    var4 = 'ERRORED';
    var2[var10] = var4;
    var2['SUCCEEDED'] = var9;
    var4 = 'SUCCEEDED';
    var2[var9] = var4;
    var _closure1_slot13 = var2;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function InteractionModalStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'getModalState';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot8;
                var3 = arg1;
                var1 = null;
                if(!(var3 === var4)) { _fun0003_ip = 20; continue _fun0003 }
 16:
                var1 = _closure1_slot9;
 20:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'InteractionModalStore';
    var9['displayName'] = var4;
    var4 = 11;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleInit() {
        var1 = null;
        var _closure1_slot8 = var1;
        var _closure1_slot9 = var1;
        var _closure1_slot10 = var1;
        var _closure1_slot11 = var1;
        var _closure1_slot12 = var1;
        var1 = true;
        return var1;
    };
    var4['LOGOUT'] = var10;
    var10 = function handleInteractionModalCreate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var1 = _closure1_slot12;
            if(!(var3 === var1)) { _fun0004_ip = 79; continue _fun0004 }
 20:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.deleteMessage;
            var4 = _closure1_slot11;
            var3 = _closure1_slot10;
            var1 = true;
            var1 = var5.bind(var6)(var4, var3, var1);
            var1 = null;
            _closure1_slot10 = var1;
            _closure1_slot11 = var1;
            _closure1_slot12 = var1;
 79:
            var1 = false;
            return var1;
        }
    };
    var4['INTERACTION_MODAL_CREATE'] = var10;
    var10 = function handleInteractionIframeModalCreate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var1 = _closure1_slot12;
            if(!(var3 === var1)) { _fun0005_ip = 79; continue _fun0005 }
 20:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.deleteMessage;
            var4 = _closure1_slot11;
            var3 = _closure1_slot10;
            var1 = true;
            var1 = var5.bind(var6)(var4, var3, var1);
            var1 = null;
            _closure1_slot10 = var1;
            _closure1_slot11 = var1;
            _closure1_slot12 = var1;
 79:
            var1 = false;
            return var1;
        }
    };
    var4['INTERACTION_IFRAME_MODAL_CREATE'] = var10;
    var10 = function handleInteractionQueue(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.messageId;
            var2 = var1.nonce;
            var _closure2_slot0 = var2;
            var3 = var1.data;
            var7 = var3.interactionType;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var10 = 5;
            var6 = var6[var10];
            var8 = undefined;
            var6 = var9.bind(var8)(var6);
            var6 = var6.InteractionTypes;
            var6 = var6.APPLICATION_COMMAND;
            if(!(var6 !== var7)) { _fun0006_ip = 278; continue _fun0006 }
 75:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var9.bind(var8)(var6);
            var6 = var6.InteractionTypes;
            var6 = var6.MODAL_SUBMIT;
            if(!(var6 !== var7)) { _fun0006_ip = 112; continue _fun0006 }
 108:
            var6 = false;
            return var6;
 112:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var9 = var7.bind(var8)(var6);
            var7 = _closure1_slot8;
            var6 = null;
            var7 = var6 == var7;
            if(var7) { _fun0006_ip = 163; continue _fun0006 }
 145:
            var10 = _closure1_slot9;
            var6 = _closure1_slot13;
            var6 = var6.ERRORED;
            var7 = var10 === var6;
 163:
            if(var7) { _fun0006_ip = 184; continue _fun0006 }
 166:
            var10 = _closure1_slot9;
            var6 = _closure1_slot13;
            var6 = var6.SUCCEEDED;
            var7 = var10 === var6;
 184:
            var6 = 'cannot submit multiple modals at once';
            var6 = var9.bind(var8)(var7, var6);
            _closure1_slot8 = var2;
            var6 = _closure1_slot13;
            var6 = var6.IN_FLIGHT;
            _closure1_slot9 = var6;
            var6 = global;
            var7 = var6.setTimeout;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var9.bind(var8)(var6);
            var6 = var6.Millis;
            var9 = var6.SECOND;
            var6 = 10;
            var6 = var6 * var9;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var3 = var4 === var3;
                    if(!var3) { _fun0007_ip = 39; continue _fun0007 }
 21:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot13;
                    var4 = var4.IN_FLIGHT;
                    var3 = var5 === var4;
 39:
                    if(!var3) { _fun0007_ip = 79; continue _fun0007 }
 42:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setFailed;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var6);
            var5 = true;
            return var5;
 278:
            _closure1_slot10 = var4;
            var3 = var3.channelId;
            _closure1_slot11 = var3;
            _closure1_slot12 = var2;
            var1 = false;
            return var1;
        }
    };
    var4['INTERACTION_QUEUE'] = var10;
    var10 = function handleInteractionSuccess(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0008_ip = 29; continue _fun0008 }
 18:
            var2 = _closure1_slot8;
            var1 = var3 === var2;
 29:
            if(!var1) { _fun0008_ip = 51; continue _fun0008 }
 32:
            var2 = _closure1_slot13;
            var2 = var2.SUCCEEDED;
            _closure1_slot9 = var2;
            var1 = true;
 51:
            return var1;
        }
    };
    var4['INTERACTION_SUCCESS'] = var10;
    var5 = function handleInteractionFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0009_ip = 29; continue _fun0009 }
 18:
            var2 = _closure1_slot8;
            var1 = var3 === var2;
 29:
            if(!var1) { _fun0009_ip = 51; continue _fun0009 }
 32:
            var2 = _closure1_slot13;
            var2 = var2.ERRORED;
            _closure1_slot9 = var2;
            var1 = true;
 51:
            return var1;
        }
    };
    var4['INTERACTION_FAILURE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/InteractionModalStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['InteractionModalState'] = var2;
    return var1;
})();