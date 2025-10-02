// app/modules/accept_invite/native/AcceptInviteManager.tsx
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
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
    var4 = var4.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteStates;
    var _closure1_slot11 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AcceptInviteManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
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
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = false;
                var1['_isRegistration'] = var3;
                var3 = {};
                var4 = function DISPLAYED_INVITE_SHOW(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleShowInvite;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['DISPLAYED_INVITE_SHOW'] = var4;
                var4 = function DISPLAYED_INVITE_CLEAR() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleClearInvite;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['DISPLAYED_INVITE_CLEAR'] = var4;
                var4 = function DEFERRED_INVITE_SHOW() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleShowDeferredInvite;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['DEFERRED_INVITE_SHOW'] = var4;
                var4 = function REGISTER_SUCCESS() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleRegisterSuccess;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['REGISTER_SUCCESS'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.code;
                        var3 = var1.deeplinkAttemptId;
                        var2 = _closure1_slot8;
                        var1 = var2.isAuthenticated;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2['_deferredCode'] = var4;
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var1 = var2._handleInvite;
                        var1 = var1.bind(var2)(var4, var3);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleShowInvite'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['_deferredCode'] = var1;
                    var1 = false;
                    var2['_isRegistration'] = var1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['_handleClearInvite'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2._deferredCode;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var1 = _closure3_slot0;
                        var4 = var1._handleInvite;
                        var3 = var1._deferredCode;
                        var3 = var4.bind(var1)(var3);
                        var1['_deferredCode'] = var2;
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleShowDeferredInvite'] = var3;
                var3 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var3 = _closure1_slot9;
                    var2 = var3.addConditionalChangeListener;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot9;
                            var3 = var4.getInvite;
                            var1 = _closure4_slot0;
                            var7 = var3.bind(var4)(var1);
                            var9 = null;
                            var1 = var9 == var7;
                            if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var4 = var7.state;
                            var3 = _closure1_slot11;
                            var3 = var3.RESOLVED;
                            var3 = var4 !== var3;
                            if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var5 = var7.state;
                            var4 = _closure1_slot11;
                            var4 = var4.EXPIRED;
                            var3 = var5 !== var4;
case 16:
                            if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var5 = var7.state;
                            var4 = _closure1_slot11;
                            var4 = var4.BANNED;
                            var3 = var5 !== var4;
case 18:
                            if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var5 = var7.state;
                            var4 = _closure1_slot11;
                            var4 = var4.ERROR;
                            var3 = var5 !== var4;
case 20:
                            var1 = var3;
case 14:
                            if(var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var3 = var7.channel;
                            if(!(var9 == var3)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var3 = var7.guild;
                            if(!(var9 == var3)) { _fun0005_ip = 24; continue _fun0005 }
case 26:
                            var3 = var7.inviter;
                            if(!(var9 == var3)) { _fun0005_ip = 27; continue _fun0005 }
case 24:
                            var12 = _closure4_slot0;
                            var3 = _closure3_slot0;
                            var11 = var3._isRegistration;
                            var3 = _closure4_slot1;
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var5 = 9;
                            var5 = var4[var5];
                            var14 = undefined;
                            var10 = var6.bind(var14)(var5);
                            var5 = var10.hideActionSheet;
                            var5 = var5.bind(var10)();
                            var5 = 10;
                            var5 = var4[var5];
                            var10 = var6.bind(var14)(var5);
                            var6 = var10.pushLazy;
                            var13 = _closure1_slot0;
                            var5 = 12;
                            var5 = var4[var5];
                            var13 = var13.bind(var14)(var5);
                            var5 = 11;
                            var5 = var4[var5];
                            var4 = var4.paths;
                            var5 = var13.bind(var14)(var5, var4);
                            var4 = {};
                            var4['code'] = var12;
                            var4['isRegistration'] = var11;
                            var4['deeplinkAttemptId'] = var3;
                            var3 = _closure1_slot10;
                            var3 = var6.bind(var10)(var5, var4, var3);
                            var1 = false;
                            _fun0005_ip = 22; continue _fun0005;
case 27:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 13;
                            var3 = var4[var3];
                            var4 = undefined;
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.acceptFriendInvite;
                            var3 = {};
                            var8 = _closure4_slot1;
                            var9 = var9 != var8;
                            var8 = 'Accept Invite';
                            if(!var9) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                            var8 = 'Deep Link';
case 28:
                            var3['location'] = var8;
                            var3 = var5.bind(var6)(var7, var3);
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 14;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.wait;
                            var2 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 15;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.clearDisplayedInvite;
                                var1 = var1.bind(var2)();
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var1 = false;
case 22:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleInvite'] = var3;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = true;
                    var2['_isRegistration'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['_handleRegisterSuccess'] = var2;
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
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/accept_invite/native/AcceptInviteManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();