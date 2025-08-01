// app/modules/explicit_media_redaction/ExplicitMediaStore.tsx
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function reset() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var9 = var8.DAY;
    var8 = 14;
    var8 = var8 * var9;
    var _closure1_slot8 = var8;
    var9 = var2.Object;
    var8 = var9.freeze;
    var2 = new Array(0);
    var2 = var8.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var _closure1_slot10 = var1;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ExplicitMediaStore() {
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
                var1 = _closure1_slot13;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getFpMessageInfo';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelFpInfo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot12;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 24; continue _fun0003 }
 20:
                var1 = _closure1_slot9;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'canSubmitFpReport';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0004_ip = 84; continue _fun0004 }
 23:
                var2 = var4.reportSubmit;
                var2 = !var2;
                if(!var2) { _fun0004_ip = 81; continue _fun0004 }
 35:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 6;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.age;
                var4 = var4.messageId;
                var4 = var5.bind(var6)(var4);
                var3 = _closure1_slot8;
                var2 = var4 < var3;
 81:
                var1 = var2;
 84:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'validContentScanVersion';
        var5['key'] = var7;
        var6 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isEligibleForSensitiveContentGoreExperiment;
                var1 = 'ExplicitMediaStore.validContentScanVersion';
                var2 = var2.bind(var4)(var1);
                var1 = 2;
                if(var2) { _fun0005_ip = 71; continue _fun0005 }
 48:
                var4 = _closure1_slot10;
                var2 = null;
                var4 = var2 != var4;
                var2 = 1;
                if(!var4) { _fun0005_ip = 68; continue _fun0005 }
 64:
                var2 = _closure1_slot10;
 68:
                var1 = var2;
 71:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'FalsePositiveStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout() {
        var2 = _closure1_slot14;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var2 = var1.explicitContentScanVersion;
        _closure1_slot10 = var2;
        var2 = _closure1_slot14;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleFalsePositiveCreate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.messageId;
            var6 = var1.channelId;
            var1 = var1.attachments;
            var2 = {};
            var2['messageId'] = var3;
            var2['channelId'] = var6;
            var2['attachments'] = var1;
            var1 = false;
            var2['reportSubmit'] = var1;
            var4 = _closure1_slot12;
            var8 = var4[var6];
            var4 = null;
            if(!(var4 == var8)) { _fun0006_ip = 62; continue _fun0006 }
 58:
            var8 = _closure1_slot9;
 62:
            var5 = _closure1_slot12;
            var4 = new Array(1);
            var9 = 0;
            var11 = var4;
            var10 = var8;
            var8 = arraySpread(var11, var10, var9);
            var4[var8] = var2;
            var7 = 1;
            var7 = var8 + var7;
            var5[var6] = var4;
            var1 = _closure1_slot11;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_EXPLICIT_CONTENT_FP_CREATE'] = var9;
    var4 = function handleFalsePositiveSubmit(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.messageId;
            var _closure2_slot0 = var3;
            var5 = var1.channelId;
            var4 = _closure1_slot12;
            var7 = var4[var5];
            var4 = null;
            if(!(var4 != var7)) { _fun0007_ip = 91; continue _fun0007 }
 36:
            var4 = _closure1_slot12;
            var6 = var7.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.messageId;
                    var2 = _closure2_slot0;
                    var1 = var3;
                    if(!(var4 === var2)) { _fun0008_ip = 48; continue _fun0008 }
 22:
                    var2 = {};
                    var6 = var2;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var4 = true;
                    var3 = 'reportSubmit';
                    var2[var3] = var4;
                    var1 = var2;
 48:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2);
            var4[var5] = var2;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = var2[var3];
            var9 = var1;
            var4 = copyDataProperties(var9, var8);
            var5 = true;
            var4 = 'reportSubmit';
            var1[var4] = var5;
            var2[var3] = var1;
 91:
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/ExplicitMediaStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();