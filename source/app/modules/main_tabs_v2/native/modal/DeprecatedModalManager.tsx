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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handlePushedModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var2 != var4)) { _fun0002_ip = 86; continue _fun0002 }
 44:
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
 86:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function createPushModalHandler(arg1) {
        var3 = 0;
        var2 = copyRestArgs(var3);
        var _closure2_slot0 = var2;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var6 = _closure2_slot0;
                var1 = var6.length;
                var5 = 0;
                var4 = var5 < var1;
                var3 = null;
                var1 = undefined;
                if(!var4) { _fun0003_ip = 90; continue _fun0003 }
 28:
                var7 = var6[var5];
                var8 = var3 == var7;
                var4 = undefined;
                if(var8) { _fun0003_ip = 71; continue _fun0003 }
 41:
                var8 = var7.isOpen;
                var8 = var3 == var8;
                var4 = undefined;
                if(var8) { _fun0003_ip = 71; continue _fun0003 }
 56:
                var9 = var7.isOpen;
                var8 = _closure1_slot14;
                var4 = var9.bind(var7)(var8);
 71:
                if(!(var3 != var4)) { _fun0003_ip = 92; continue _fun0003 }
 75:
                if(var4) { _fun0003_ip = 92; continue _fun0003 }
 78:
                var5 = var5 + 1;
                var4 = var6.length;
                if(var5 < var4) { _fun0003_ip = 28; continue _fun0003 }
 90:
                return var1;
 92:
                var4 = var7.getComponent;
                var6 = var4.bind(var7)();
                var4 = var7.store;
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0003_ip = 123; continue _fun0003 }
 117:
                var3 = var4.getProps;
 123:
                var4 = 'function';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0003_ip = 138; continue _fun0003 }
 134:
                var5 = {};
                _fun0003_ip = 154; continue _fun0003;
 138:
                var4 = var7.store;
                var3 = var4.getProps;
                var5 = var3.bind(var4)();
 154:
                var3 = _closure1_slot18;
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
            }
        };
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var9 = function isOpen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.isFullScreenVerification;
            var6 = _closure1_slot12;
            var1 = var6.getAction;
            var1 = var1.bind(var6)();
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0004_ip = 73; continue _fun0004 }
 53:
            var5 = _closure1_slot9;
            var3 = var5.getToken;
            var5 = var3.bind(var5)();
            var3 = null;
            var1 = var3 != var5;
 73:
            if(!var1) { _fun0004_ip = 122; continue _fun0004 }
 76:
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
 122:
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
    var8 = function isOpen() {
        var3 = _closure1_slot12;
        var2 = var3.getAction;
        var2 = var2.bind(var3)();
        var1 = _closure1_slot13;
        var1 = var1.AGREEMENTS;
        var1 = var2 === var1;
        return var1;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0005_ip = 120; continue _fun0005;
 86:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var6)(var4);
                var5 = var5.constructor;
                var1 = var8.bind(var9)(var10, var11, var5);
 120:
                var1 = var2.bind(var6)(var4, var1);
                var2 = {};
                var5 = _closure1_slot20;
                var8 = _closure1_slot16;
                var4 = _closure1_slot15;
                var8 = var5.bind(var6)(var8, var4);
                var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var8;
                var4 = var5.bind(var6)(var4);
                var2['EMAIL_VERIFICATION_MODAL_OPEN'] = var4;
                var4 = function USER_REQUIRED_ACTION_UPDATE(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var6 = _closure1_slot20;
                        var5 = _closure1_slot16;
                        var3 = _closure1_slot15;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var5, var3);
                        var6 = var4.requiredAction;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0006_ip = 60; continue _fun0006 }
 38:
                        var4 = var4.requiredAction;
                        if(!(var5 != var4)) { _fun0006_ip = 191; continue _fun0006 }
 51:
                        var3 = var3.bind(var1)();
                        _fun0006_ip = 191; continue _fun0006;
 60:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 12;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isModalOpen;
                        var6 = 'USER_REQUIRED_ACTION_UPDATE';
                        var3 = var3.bind(var4)(var6);
                        if(!var3) { _fun0006_ip = 126; continue _fun0006 }
 98:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.popModal;
                        var3 = var3.bind(var4)(var6);
 126:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var6 = var4.bind(var1)(var3);
                        var3 = var6.isModalOpen;
                        var4 = 'EMAIL_VERIFICATION_MODAL_OPEN';
                        var3 = var3.bind(var6)(var4);
                        if(!var3) { _fun0006_ip = 191; continue _fun0006 }
 163:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popModal;
                        var2 = var2.bind(var3)(var4);
 191:
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
                var3 = _closure1_slot19;
                var2['GUILD_SETTINGS_CLOSE'] = var3;
                var2['USER_SETTINGS_MODAL_CLOSE'] = var3;
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