// app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handlePushedModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 13; continue _fun0005 }
case 40:
            var3 = var4.navigate;
            var2 = {};
            var5 = 'modal';
            var2['name'] = var5;
            var5 = var6.key;
            var2['key'] = var5;
            var5 = {};
            var5['modal'] = var6;
            var2['params'] = var5;
            var2 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function handlePoppedModal() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.popModal;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function pushFirstOpenModal(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg2;
            var4 = _closure1_slot18;
            var1 = undefined;
            var3 = arg1;
            var6 = var4.bind(var1)(var3);
            var5 = var6.bind(var1)();
            var4 = var5.done;
            var3 = null;
            if(var4) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var7 = var5.value;
            var9 = var3 == var7;
            var4 = undefined;
            if(var9) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var9 = var7.isOpen;
            var9 = var3 == var9;
            var4 = undefined;
            if(var9) { _fun0006_ip = 43; continue _fun0006 }
case 45:
            var10 = var7.isOpen;
            var9 = _closure1_slot14;
            var4 = var10.bind(var7)(var9, var8);
case 43:
            if(!(var3 != var4)) { _fun0006_ip = 46; continue _fun0006 }
case 13:
            if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var9 = var6.bind(var1)();
            var4 = var9.done;
            var5 = var9;
            if(var4) { _fun0006_ip = 41; continue _fun0006 }
case 48:
            _fun0006_ip = 42; continue _fun0006;
case 46:
            var4 = var7.getComponent;
            var6 = var4.bind(var7)();
            var4 = var7.store;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = var4.getProps;
case 49:
            var4 = 'function';
            var3 = typeof var3;
            if(!(var4 !== var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var5 = {};
            _fun0006_ip = 53; continue _fun0006;
case 51:
            var4 = var7.store;
            var3 = var4.getProps;
            var5 = var3.bind(var4)();
case 53:
            var3 = _closure1_slot20;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var4 = var4.bind(var1)(var2);
            var2 = {};
            var7 = var7.key;
            var2['key'] = var7;
            var2 = var4.bind(var1)(var6, var2, var5);
            var2 = var3.bind(var1)(var2);
            return var1;
case 41:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function createPushModalHandler(arg1) {
        var3 = 0;
        var2 = copyRestArgs(var3);
        var _closure2_slot0 = var2;
        var1 = function() {
            var3 = _closure1_slot22;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        return var1;
    };
    var _closure1_slot23 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var _closure1_slot12 = var8;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.UserRequiredActions;
    var _closure1_slot13 = var9;
    var4 = var4.AppContext;
    var4 = var4.APP;
    var _closure1_slot14 = var4;
    var4 = {'key': 'EMAIL_VERIFICATION_MODAL_OPEN', 'store': null, 'closable': false, 'center': true};
    var4['store'] = var8;
    var9 = function isOpen(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg2;
            var5 = null;
            if(!(var5 == var6)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var2 = _closure1_slot12;
            var1 = var2.getAction;
            var6 = var1.bind(var2)();
case 54:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isFullScreenVerification;
            var1 = var1.bind(var3)(var6);
            if(!var1) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var6 = _closure1_slot9;
            var3 = var6.getToken;
            var3 = var3.bind(var6)();
            var1 = var5 != var3;
case 56:
            if(!var1) { _fun0007_ip = 58; continue _fun0007 }
case 13:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isEligibleForSafetyFlowsExperiment;
            var2 = {};
            var5 = 'modal-manager-verification';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 58:
            return var1;
        }
    };
    var4['isOpen'] = var9;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var9;
    var _closure1_slot15 = var4;
    var4 = {'key': 'USER_REQUIRED_ACTION_UPDATE', 'store': null, 'center': true};
    var4['store'] = var8;
    var8 = function isOpen(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg2;
            var1 = null;
            if(!(var1 == var2)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var3 = _closure1_slot12;
            var1 = var3.getAction;
            var2 = var1.bind(var3)();
case 54:
            var1 = _closure1_slot13;
            var1 = var1.AGREEMENTS;
            var1 = var2 === var1;
            return var1;
        }
    };
    var4['isOpen'] = var8;
    var8 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var8;
    var _closure1_slot16 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function DeprecatedModalManager(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var2 = _closure2_slot0;
                var6 = undefined;
                var8 = var8.bind(var6)(var4, var2);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var6)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var6)();
                if(var1) { _fun0009_ip = 13; continue _fun0009 }
case 59:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0009_ip = 60; continue _fun0009;
case 13:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var6)(var4);
                var5 = var5.constructor;
                var1 = var8.bind(var9)(var10, var11, var5);
case 60:
                var1 = var2.bind(var6)(var4, var1);
                var2 = {};
                var5 = _closure1_slot23;
                var8 = _closure1_slot16;
                var4 = _closure1_slot15;
                var8 = var5.bind(var6)(var8, var4);
                var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var8;
                var4 = var5.bind(var6)(var4);
                var2['EMAIL_VERIFICATION_MODAL_OPEN'] = var4;
                var4 = function USER_REQUIRED_ACTION_UPDATE(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.requiredAction;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 11; continue _fun0010 }
case 61:
                        var4 = _closure1_slot22;
                        var5 = _closure1_slot16;
                        var3 = new Array(2);
                        var3[0] = var5;
                        var2 = _closure1_slot15;
                        var3[1] = var2;
                        var2 = var1.requiredAction;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        _fun0010_ip = 62; continue _fun0010;
case 11:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 12;
                        var2 = var2[var5];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.isModalOpen;
                        var6 = 'USER_REQUIRED_ACTION_UPDATE';
                        var2 = var2.bind(var3)(var6);
                        if(!var2) { _fun0010_ip = 58; continue _fun0010 }
case 48:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.popModal;
                        var2 = var2.bind(var3)(var6);
case 58:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var6 = var3.bind(var4)(var2);
                        var2 = var6.isModalOpen;
                        var3 = 'EMAIL_VERIFICATION_MODAL_OPEN';
                        var2 = var2.bind(var6)(var3);
                        if(!var2) { _fun0010_ip = 62; continue _fun0010 }
case 21:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.popModal;
                        var1 = var1.bind(var2)(var3);
case 62:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['USER_REQUIRED_ACTION_UPDATE'] = var4;
                var4 = {'key': 'GUILD_SETTINGS_OPEN', 'store': null, 'closable': false};
                var8 = _closure1_slot8;
                var4['store'] = var8;
                var8 = function getComponent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.default;
                    return var1;
                };
                var4['getComponent'] = var8;
                var4 = var5.bind(var6)(var4);
                var2['GUILD_SETTINGS_OPEN'] = var4;
                var4 = {'key': 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'store': null, 'closable': false};
                var8 = _closure1_slot11;
                var4['store'] = var8;
                var8 = function getComponent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.default;
                    return var1;
                };
                var4['getComponent'] = var8;
                var4 = var5.bind(var6)(var4);
                var2['NOTIFICATION_SETTINGS_MODAL_OPEN'] = var4;
                var4 = {'key': 'CREATE_INVITE_MODAL_OPEN', 'store': null, 'closable': false};
                var8 = _closure1_slot10;
                var4['store'] = var8;
                var7 = function getComponent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.default;
                    return var1;
                };
                var4['getComponent'] = var7;
                var4 = var5.bind(var6)(var4);
                var2['CREATE_INVITE_MODAL_OPEN'] = var4;
                var3 = _closure1_slot21;
                var2['GUILD_SETTINGS_CLOSE'] = var3;
                var2['NOTIFICATION_SETTINGS_MODAL_CLOSE'] = var3;
                var2['PREMIUM_PAYMENT_MODAL_CLOSE'] = var3;
                var2['EMAIL_VERIFICATION_MODAL_CLOSE'] = var3;
                var2['CREATE_INVITE_MODAL_CLOSE'] = var3;
                var2['QUICKSWITCHER_HIDE'] = var3;
                var2['IFE_EXPERIMENT_SEARCH_MODAL_CLOSE'] = var3;
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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();