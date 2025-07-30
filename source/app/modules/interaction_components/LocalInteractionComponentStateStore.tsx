// app/modules/interaction_components/LocalInteractionComponentStateStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function setComponentState(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.get;
            var4 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 54; continue _fun0002 }
 26:
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var4 = var1 instanceof Object ? var1 : var3;
 54:
            var6 = var4.set;
            var3 = arg2;
            var1 = arg3;
            var1 = var6.bind(var4)(var3, var1);
            var3 = _closure1_slot5;
            var1 = var3.set;
            var1 = var1.bind(var3)(var5, var4);
            var1 = _closure1_slot6;
            var1 = var1 + 1;
            _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function deleteStatesForMessageId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot7;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 40; continue _fun0003 }
 26:
            var3 = _closure1_slot8;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var5);
 40:
            var3 = _closure1_slot7;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot5;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            var1 = _closure1_slot6;
            var1 = var1 + 1;
            _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var7 = 0;
    var2 = var5[var7];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var8 = var5[var2];
    var9 = var6.bind(var1)(var8);
    var8 = var9.prototype;
    var10 = Object.create(var8, {constructor: {value: var9}});
    var8 = 196606;
    var14 = var10;
    var13 = var8;
    var9 = new var14[var9](var13, var12);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot5 = var9;
    var _closure1_slot6 = var7;
    var7 = var5[var2];
    var7 = var6.bind(var1)(var7);
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var14 = var9;
    var13 = var8;
    var7 = new var14[var7](var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot7 = var7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var14 = var7;
    var13 = var8;
    var2 = new var14[var2](var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function LocalInteractionComponentStateStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getInteractionComponentStates';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getInteractionComponentStateVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getInteractionComponentState';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0005_ip = 59; continue _fun0005 }
 31:
                var4 = var5.get;
                var3 = arg2;
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0005_ip = 56; continue _fun0005 }
 53:
                var2 = var3;
 56:
                var1 = var2;
 59:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'LocalInteractionComponentStateStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleInit() {
        var3 = _closure1_slot5;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot7;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot8;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = _closure1_slot6;
        var1 = var1 + 1;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleQueueActionComponentState(arg1) {
        var1 = arg1;
        var5 = var1.messageId;
        var8 = var1.nonce;
        var4 = var1.componentId;
        var3 = var1.state;
        var6 = _closure1_slot7;
        var2 = var6.set;
        var2 = var2.bind(var6)(var5, var8);
        var7 = _closure1_slot8;
        var6 = var7.set;
        var2 = {};
        var2['messageId'] = var5;
        var2['componentId'] = var4;
        var2 = var6.bind(var7)(var8, var2);
        var2 = _closure1_slot10;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var2['QUEUE_INTERACTION_COMPONENT_STATE'] = var8;
    var8 = function handleSetInteractionComponentState(arg1) {
        var1 = arg1;
        var5 = var1.rootContainerId;
        var4 = var1.componentId;
        var3 = var1.state;
        var2 = _closure1_slot10;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var2['SET_INTERACTION_COMPONENT_STATE'] = var8;
    var8 = function handleMessageDelete(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.id;
            var4 = _closure1_slot5;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 32; continue _fun0006 }
 28:
            var2 = false;
            return var2;
 32:
            var2 = _closure1_slot11;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var8;
    var8 = function handleMessageUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var1 = var1.message;
            var3 = var1.id;
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 62; continue _fun0007 }
 19:
            var5 = _closure1_slot5;
            var4 = var5.has;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0007_ip = 62; continue _fun0007 }
 44:
            var3 = _closure1_slot11;
            var2 = var1.id;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 62:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var8;
    var8 = function handleInteractionSuccess(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.nonce;
            var3 = null;
            if(!(var3 != var4)) { _fun0008_ip = 88; continue _fun0008 }
 15:
            var5 = _closure1_slot8;
            var1 = var5.get;
            var1 = var1.bind(var5)(var4);
            if(!(var3 != var1)) { _fun0008_ip = 84; continue _fun0008 }
 36:
            var5 = _closure1_slot7;
            var3 = var5.delete;
            var1 = var1.messageId;
            var1 = var3.bind(var5)(var1);
            var3 = _closure1_slot8;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            var1 = _closure1_slot6;
            var1 = var1 + 1;
            _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
 84:
            var1 = false;
            return var1;
 88:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_SUCCESS'] = var8;
    var8 = function handleInteractionFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.nonce;
            var3 = null;
            if(!(var3 != var5)) { _fun0009_ip = 132; continue _fun0009 }
 15:
            var4 = _closure1_slot8;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            if(!(var3 != var1)) { _fun0009_ip = 128; continue _fun0009 }
 36:
            var5 = var1.componentId;
            var4 = var1.messageId;
            var6 = _closure1_slot5;
            var1 = var6.get;
            var1 = var1.bind(var6)(var4);
            if(!(var3 != var1)) { _fun0009_ip = 124; continue _fun0009 }
 65:
            var3 = var1.has;
            var3 = var3.bind(var1)(var5);
            if(!var3) { _fun0009_ip = 124; continue _fun0009 }
 78:
            var3 = var1.delete;
            var3 = var3.bind(var1)(var5);
            var3 = var1.size;
            var1 = 0;
            if(!(var1 === var3)) { _fun0009_ip = 113; continue _fun0009 }
 99:
            var3 = _closure1_slot5;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
 113:
            var1 = _closure1_slot6;
            var1 = var1 + 1;
            _closure1_slot6 = var1;
 124:
            var1 = undefined;
            return var1;
 128:
            var1 = false;
            return var1;
 132:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_FAILURE'] = var8;
    var4 = function handleClearInteractionModalState(arg1) {
        var1 = arg1;
        var4 = var1.customId;
        var3 = _closure1_slot5;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var4);
        var1 = _closure1_slot6;
        var1 = var1 + 1;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLEAR_INTERACTION_MODAL_STATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/LocalInteractionComponentStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();