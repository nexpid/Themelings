// app/modules/interactions/InteractionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function markInteractionByNonceCompleted(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var5 = null;
            if(!(var5 != var3)) { _fun0002_ip = 61; continue _fun0002 }
 9:
            var2 = _closure1_slot13;
            var4 = var2[var3];
            if(!(var5 != var4)) { _fun0002_ip = 57; continue _fun0002 }
 24:
            var2 = var4.onSuccess;
            if(!(var5 != var2)) { _fun0002_ip = 44; continue _fun0002 }
 34:
            var2 = var4.onSuccess;
            var2 = var2.bind(var4)();
 44:
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
 57:
            var1 = false;
            return var1;
 61:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function deleteNonce(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot18;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0003_ip = 30; continue _fun0003 }
 20:
            var4 = _closure1_slot18;
            var4 = delete var4[var3];
            _fun0003_ip = 120; continue _fun0003;
 30:
            var4 = _closure1_slot13;
            var4 = var4[var3];
            var5 = _closure1_slot13;
            var5 = delete var5[var3];
            var5 = _closure1_slot15;
            var5 = var5[var3];
            if(!(var2 != var5)) { _fun0003_ip = 66; continue _fun0003 }
 58:
            var2 = _closure1_slot14;
            var2 = delete var2[var5];
 66:
            var2 = _closure1_slot15;
            var2 = delete var2[var3];
            var2 = _closure1_slot18;
            var1 = {};
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var1['insertedAt'] = var6;
            var1['nonce'] = var3;
            var1['messageId'] = var5;
            var1['interaction'] = var4;
            var2[var3] = var1;
 120:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var5 = 5;
    var2 = var8[var5];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var4 = var8[var2];
    var4 = var9.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var5 * var4;
    var _closure1_slot11 = var4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.Millis;
    var5 = var2.SECOND;
    var2 = 10;
    var2 = var2 * var5;
    var _closure1_slot12 = var2;
    var5 = {};
    var _closure1_slot13 = var5;
    var5 = {};
    var _closure1_slot14 = var5;
    var5 = {};
    var _closure1_slot15 = var5;
    var _closure1_slot16 = var1;
    var _closure1_slot17 = var1;
    var5 = {};
    var _closure1_slot18 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function InteractionStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot19;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getInteraction';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot14;
                var1 = arg1;
                var1 = var1.id;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 != var3;
                if(!var4) { _fun0005_ip = 36; continue _fun0005 }
 28:
                var2 = _closure1_slot13;
                var1 = var2[var3];
 36:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMessageInteractionStates';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = {};
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure1_slot13;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var7 = undefined;
                var6 = 2;
                var5 = 1;
                var4 = null;
                var3 = 0;
                if(!var2) { _fun0006_ip = 109; continue _fun0006 }
 54:
                var11 = var9[var3];
                var2 = _closure1_slot8;
                var2 = var2.bind(var7)(var11, var6);
                var12 = var2[var8];
                var2 = var2[var5];
                var11 = _closure1_slot15;
                var11 = var11[var12];
                if(!(var4 != var11)) { _fun0006_ip = 97; continue _fun0006 }
 88:
                var2 = var2.state;
                var1[var11] = var2;
 97:
                var3 = var3 + 1;
                var2 = var9.length;
                if(var3 < var2) { _fun0006_ip = 54; continue _fun0006 }
 109:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'canQueueInteraction';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg2;
                var2 = _closure1_slot14;
                var1 = arg1;
                var6 = var2[var1];
                var4 = null;
                var1 = var4 != var6;
                if(!var1) { _fun0007_ip = 38; continue _fun0007 }
 26:
                var2 = _closure1_slot13;
                var2 = var2[var6];
                var1 = var4 != var2;
 38:
                if(!var1) { _fun0007_ip = 92; continue _fun0007 }
 41:
                var2 = _closure1_slot13;
                var2 = var2[var6];
                var6 = var2.state;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 9;
                var7 = var7[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var7);
                var2 = var2.InteractionState;
                var2 = var2.FAILED;
                var1 = var6 !== var2;
 92:
                if(var1) { _fun0007_ip = 164; continue _fun0007 }
 95:
                var2 = _closure1_slot13;
                var2 = var2[var5];
                var2 = var4 != var2;
                if(!var2) { _fun0007_ip = 161; continue _fun0007 }
 110:
                var4 = _closure1_slot13;
                var4 = var4[var5];
                var4 = var4.state;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.InteractionState;
                var3 = var3.FAILED;
                var2 = var4 !== var3;
 161:
                var1 = var2;
 164:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIFrameModalApplicationId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getIFrameModalKey';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'InteractionStore';
    var10['displayName'] = var5;
    var5 = 13;
    var5 = var8[var5];
    var14 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function handleInit() {
        var2 = {};
        _closure1_slot13 = var2;
        var2 = {};
        _closure1_slot14 = var2;
        var2 = {};
        _closure1_slot15 = var2;
        var2 = {};
        _closure1_slot18 = var2;
        var2 = global;
        var4 = var2.setInterval;
        var3 = _closure1_slot11;
        var1 = undefined;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var9 = var2.bind(var3)();
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = _closure1_slot18;
                var7 = var2.bind(var3)(var1);
                var1 = var7.length;
                var6 = 0;
                var2 = var6 < var1;
                var1 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0008_ip = 125; continue _fun0008 }
 65:
                var10 = var7[var3];
                var2 = _closure1_slot8;
                var2 = var2.bind(var1)(var10, var5);
                var10 = var2[var6];
                var2 = var2[var4];
                var2 = var2.insertedAt;
                var11 = var9 - var2;
                var2 = _closure1_slot12;
                if(!(var11 > var2)) { _fun0008_ip = 113; continue _fun0008 }
 105:
                var2 = _closure1_slot18;
                var2 = delete var2[var10];
 113:
                var3 = var3 + 1;
                var2 = var7.length;
                if(var3 < var2) { _fun0008_ip = 65; continue _fun0008 }
 125:
                return var1;
            }
        };
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var5['LOGOUT'] = var11;
    var11 = function handleInteractionQueue(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.nonce;
            var2 = var1.messageId;
            var9 = var1.data;
            var8 = var1.onCreate;
            var7 = var1.onCancel;
            var6 = var1.onSuccess;
            var5 = var1.onFailure;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 68; continue _fun0009 }
 49:
            var3 = _closure1_slot14;
            var3[var2] = var4;
            var1 = _closure1_slot15;
            var1[var4] = var2;
 68:
            var3 = _closure1_slot13;
            var2 = {};
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var10 = var10[var1];
            var1 = undefined;
            var10 = var11.bind(var1)(var10);
            var10 = var10.InteractionState;
            var10 = var10.QUEUED;
            var2['state'] = var10;
            var2['data'] = var9;
            var2['onCreate'] = var8;
            var2['onCancel'] = var7;
            var2['onSuccess'] = var6;
            var2['onFailure'] = var5;
            var3[var4] = var2;
            return var1;
        }
    };
    var5['INTERACTION_QUEUE'] = var11;
    var11 = function handleInteractionCreate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var4 = var1.interactionId;
            var5 = null;
            if(!(var5 != var3)) { _fun0010_ip = 141; continue _fun0010 }
 21:
            var1 = _closure1_slot13;
            var3 = var1[var3];
            if(!(var5 != var3)) { _fun0010_ip = 137; continue _fun0010 }
 36:
            var8 = var3.state;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 9;
            var6 = var1[var7];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var6 = var6.InteractionState;
            var6 = var6.QUEUED;
            if(!(var8 === var6)) { _fun0010_ip = 137; continue _fun0010 }
 79:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var1)(var2);
            var2 = var2.InteractionState;
            var2 = var2.CREATED;
            var3['state'] = var2;
            var2 = var3.onCreate;
            if(!(var5 != var2)) { _fun0010_ip = 135; continue _fun0010 }
 124:
            var2 = var3.onCreate;
            var2 = var2.bind(var3)(var4);
 135:
            return var1;
 137:
            var1 = false;
            return var1;
 141:
            var1 = false;
            return var1;
        }
    };
    var5['INTERACTION_CREATE'] = var11;
    var11 = function handleInteractionSuccess(arg1) {
        var1 = arg1;
        var3 = var1.nonce;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['INTERACTION_SUCCESS'] = var11;
    var11 = function handleInteractionFailure(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var3 = var1.nonce;
            var8 = var1.errorCode;
            var7 = var1.errorMessage;
            var5 = var1.status;
            var4 = var1.reasonCode;
            var9 = null;
            if(!(var9 != var3)) { _fun0011_ip = 239; continue _fun0011 }
 41:
            var1 = _closure1_slot13;
            var6 = var1[var3];
            if(!(var9 != var6)) { _fun0011_ip = 235; continue _fun0011 }
 59:
            var1 = var6.onFailure;
            if(!(var9 != var1)) { _fun0011_ip = 94; continue _fun0011 }
 69:
            var1 = var6.onFailure;
            var15 = var6;
            var14 = var8;
            var13 = var7;
            var12 = var5;
            var11 = var4;
            var1 = var15[var1](var14, var13, var12, var11, var10);
 94:
            var1 = var6.data;
            var5 = var1.interactionType;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var9.bind(var1)(var4);
            var4 = var4.InteractionTypes;
            var4 = var4.APPLICATION_COMMAND;
            if(!(var5 !== var4)) { _fun0011_ip = 224; continue _fun0011 }
 143:
            var5 = _closure1_slot13;
            var4 = {};
            var14 = var4;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.InteractionState;
            var9 = var6.FAILED;
            var6 = 'state';
            var4[var6] = var9;
            var6 = 'errorCode';
            var4[var6] = var8;
            var6 = 'errorMessage';
            var4[var6] = var7;
            var5[var3] = var4;
            _fun0011_ip = 233; continue _fun0011;
 224:
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)(var3);
 233:
            return var1;
 235:
            var1 = false;
            return var1;
 239:
            var1 = false;
            return var1;
        }
    };
    var5['INTERACTION_FAILURE'] = var11;
    var11 = function handleMessageCreate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var1 = var1.message;
            var2 = var1.nonce;
            var5 = null;
            if(!(var5 != var2)) { _fun0012_ip = 84; continue _fun0012 }
 20:
            var4 = _closure1_slot13;
            var3 = var1.nonce;
            var4 = var4[var3];
            if(!(var5 != var4)) { _fun0012_ip = 80; continue _fun0012 }
 41:
            var3 = var4.onSuccess;
            if(!(var5 != var3)) { _fun0012_ip = 61; continue _fun0012 }
 51:
            var3 = var4.onSuccess;
            var3 = var3.bind(var4)();
 61:
            var3 = _closure1_slot21;
            var2 = var1.nonce;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 80:
            var1 = false;
            return var1;
 84:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_CREATE'] = var11;
    var11 = function handleChannelSelect(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 != var2)) { _fun0013_ip = 167; continue _fun0013 }
 34:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = _closure1_slot13;
            var8 = var2.bind(var3)(var1);
            var1 = var8.length;
            var7 = 0;
            var2 = var7 < var1;
            var1 = undefined;
            var6 = 2;
            var5 = 1;
            var4 = 9;
            var3 = 0;
            if(!var2) { _fun0013_ip = 165; continue _fun0013 }
 84:
            var10 = var8[var3];
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var10, var6);
            var10 = var2[var7];
            var2 = var2[var5];
            var11 = var2.state;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var12.bind(var1)(var2);
            var2 = var2.InteractionState;
            var2 = var2.FAILED;
            if(!(var11 === var2)) { _fun0013_ip = 153; continue _fun0013 }
 144:
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)(var10);
 153:
            var3 = var3 + 1;
            var2 = var8.length;
            if(var3 < var2) { _fun0013_ip = 84; continue _fun0013 }
 165:
            return var1;
 167:
            var1 = false;
            return var1;
        }
    };
    var5['CHANNEL_SELECT'] = var11;
    var11 = function handleIFrameModalCreate(arg1) {
        var2 = arg1;
        var1 = var2.application;
        var3 = var2.nonce;
        var2 = var1.id;
        _closure1_slot17 = var2;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['INTERACTION_IFRAME_MODAL_CREATE'] = var11;
    var11 = function handleIFrameModalClose() {
        var1 = undefined;
        _closure1_slot16 = var1;
        _closure1_slot17 = var1;
        return var1;
    };
    var5['INTERACTION_IFRAME_MODAL_CLOSE'] = var11;
    var11 = function handleIFrameModalKeyCreate(arg1) {
        var1 = arg1;
        var2 = var1.modalKey;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var5['INTERACTION_IFRAME_MODAL_KEY_CREATE'] = var11;
    var11 = function handleInteractionModalCreate(arg1) {
        var1 = arg1;
        var3 = var1.nonce;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['INTERACTION_MODAL_CREATE'] = var11;
    var6 = function handleEmbeddedActivityUpdateV2(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var4 = var2.participants;
            var5 = _closure1_slot9;
            var3 = var5.getSessionId;
            var3 = var3.bind(var5)();
            var _closure2_slot0 = var3;
            var3 = var5.getId;
            var3 = var3.bind(var5)();
            var _closure2_slot1 = var3;
            var3 = var4.find;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.user_id;
                    var1 = _closure2_slot1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0015_ip = 37; continue _fun0015 }
 23:
                    var3 = var3.session_id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
 37:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var4)) { _fun0014_ip = 242; continue _fun0014 }
 71:
            var1 = var4.nonce;
            if(!(var3 != var1)) { _fun0014_ip = 242; continue _fun0014 }
 84:
            var5 = _closure1_slot18;
            var1 = var4.nonce;
            var1 = var5[var1];
            if(!(var3 != var1)) { _fun0014_ip = 115; continue _fun0014 }
 102:
            var5 = var1.messageId;
            var1 = var1.interaction;
            _fun0014_ip = 143; continue _fun0014;
 115:
            var7 = _closure1_slot15;
            var6 = var4.nonce;
            var5 = var7[var6];
            var8 = _closure1_slot13;
            var6 = var4.nonce;
            var1 = var8[var6];
 143:
            var6 = var3 != var1;
            if(!var6) { _fun0014_ip = 154; continue _fun0014 }
 150:
            var6 = var3 != var5;
 154:
            if(!var6) { _fun0014_ip = 242; continue _fun0014 }
 157:
            var7 = _closure1_slot21;
            var6 = var4.nonce;
            var4 = undefined;
            var6 = var7.bind(var4)(var6);
            var3 = var3 != var5;
            if(!var3) { _fun0014_ip = 194; continue _fun0014 }
 181:
            var7 = var1.data;
            var6 = 'channelId';
            var3 = var6 in var7;
 194:
            if(!var3) { _fun0014_ip = 242; continue _fun0014 }
 197:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.deleteMessage;
            var1 = var1.data;
            var2 = var1.channelId;
            var1 = true;
            var1 = var3.bind(var4)(var2, var5, var1);
 242:
            var1 = undefined;
            return var1;
        }
    };
    var5['EMBEDDED_ACTIVITY_UPDATE_V2'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var10](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/interactions/InteractionStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['STALE_INTERACTION_INTERVAL'] = var4;
    var3['STALE_INTERACTION_DURATION'] = var2;
    return var1;
})();