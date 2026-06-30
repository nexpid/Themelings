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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GuildFeatures;
    var _closure1_slot15 = var8;
    var8 = var4.InviteStates;
    var _closure1_slot16 = var8;
    var8 = var4.JoinGuildSources;
    var _closure1_slot17 = var8;
    var8 = var4.Permissions;
    var _closure1_slot18 = var8;
    var4 = var4.Routes;
    var _closure1_slot19 = var4;
    var4 = 25;
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
                var1 = _closure1_slot20;
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
                var1['_deferredFromDeeplink'] = var3;
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
                        var6 = var1.code;
                        var5 = var1.deeplinkAttemptId;
                        var7 = var1.fromDeeplink;
                        var4 = var1.invite_instance_id;
                        var2 = _closure1_slot8;
                        var1 = var2.isAuthenticated;
                        var1 = var1.bind(var2)();
                        var3 = _closure3_slot0;
                        if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                        var3['_deferredCode'] = var6;
                        var1 = true;
                        var1 = var1 === var7;
                        var3['_deferredFromDeeplink'] = var1;
                        _fun0003_ip = 10; continue _fun0003;
case 7:
                        var2 = var3._handleInvite;
                        var1 = true;
                        var9 = var1 === var7;
                        var12 = var3;
                        var11 = var6;
                        var10 = var5;
                        var8 = var4;
                        var1 = var12[var2](var11, var10, var9, var8, var7);
case 10:
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
                    var2['_deferredFromDeeplink'] = var1;
                    var2['_isRegistration'] = var1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot14;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['_handleClearInvite'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1._deferredCode;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2 = _closure3_slot0;
                        var6 = var2._handleInvite;
                        var5 = var2._deferredCode;
                        var4 = var2._deferredFromDeeplink;
                        var3 = undefined;
                        var3 = var6.bind(var2)(var5, var3, var4);
                        var2['_deferredCode'] = var1;
                        var1 = false;
                        var2['_deferredFromDeeplink'] = var1;
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleShowDeferredInvite'] = var3;
                var3 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = arguments[2];
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var1 = undefined;
                        if(!(var3 === var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var3 = false;
case 13:
                        var _closure4_slot2 = var3;
                        var3 = arguments[3];
                        var _closure4_slot3 = var3;
                        var4 = _closure1_slot12;
                        var3 = var4.addConditionalChangeListener;
                        var2 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var5 = _closure1_slot12;
                                var4 = var5.getInvite;
                                var3 = _closure4_slot0;
                                var7 = var4.bind(var5)(var3);
                                var9 = null;
                                if(!(var9 != var7)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                                var4 = var7.state;
                                var3 = _closure1_slot16;
                                var3 = var3.RESOLVED;
                                if(!(var4 !== var3)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                                var4 = var7.state;
                                var3 = _closure1_slot16;
                                var3 = var3.EXPIRED;
                                if(!(var4 !== var3)) { _fun0006_ip = 17; continue _fun0006 }
case 19:
                                var4 = var7.state;
                                var3 = _closure1_slot16;
                                var3 = var3.BANNED;
                                if(!(var4 !== var3)) { _fun0006_ip = 17; continue _fun0006 }
case 20:
                                var4 = var7.state;
                                var3 = _closure1_slot16;
                                var3 = var3.ERROR;
                                if(!(var4 !== var3)) { _fun0006_ip = 17; continue _fun0006 }
case 15:
                                var3 = true;
                                return var3;
case 17:
                                var3 = var7.channel;
                                if(!(var9 == var3)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                                var3 = var7.guild;
                                if(!(var9 == var3)) { _fun0006_ip = 21; continue _fun0006 }
case 23:
                                var3 = var7.inviter;
                                if(!(var9 == var3)) { _fun0006_ip = 24; continue _fun0006 }
case 21:
                                var3 = function handleExistingMemberDeepLink(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var9 = arg1;
                                        var4 = var9.state;
                                        var2 = _closure1_slot16;
                                        var2 = var2.RESOLVED;
                                        if(!(var4 === var2)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 13;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.isStreamInvite;
                                        var4 = var4.bind(var5)(var9);
                                        if(var4) { _fun0007_ip = 25; continue _fun0007 }
case 27:
                                        var4 = var9.guild;
                                        var10 = null;
                                        var5 = var10 == var4;
                                        var8 = undefined;
                                        if(var5) { _fun0007_ip = 20; continue _fun0007 }
case 28:
                                        var8 = var4.id;
case 20:
                                        var7 = var9.target_channel_id;
                                        if(!(var10 != var8)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                                        if(!(var10 != var7)) { _fun0007_ip = 29; continue _fun0007 }
case 31:
                                        var5 = _closure1_slot11;
                                        var4 = var5.getGuild;
                                        var4 = var4.bind(var5)(var8);
                                        if(!(var10 != var4)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                                        var4 = var9.roles;
                                        if(!(var10 != var4)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                                        var4 = var9.roles;
                                        var5 = var4.length;
                                        var4 = 0;
                                        if(!(var5 > var4)) { _fun0007_ip = 34; continue _fun0007 }
case 36:
                                        var4 = global;
                                        var6 = var4.Set;
                                        var5 = _closure1_slot10;
                                        var4 = var5.getSelfMember;
                                        var5 = var4.bind(var5)(var8);
                                        var11 = var10 == var5;
                                        var4 = undefined;
                                        if(var11) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                                        var4 = var5.roles;
case 37:
                                        if(!(var10 == var4)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                                        var4 = new Array(0);
case 39:
                                        var5 = var6.prototype;
                                        var5 = Object.create(var5, {constructor: {value: var6}});
                                        var15 = var5;
                                        var14 = var4;
                                        var4 = new var15[var6](var14, var13);
                                        var4 = var4 instanceof Object ? var4 : var5;
                                        var _closure6_slot0 = var4;
                                        var5 = var9.roles;
                                        var4 = var5.some;
                                        var1 = function(arg1) {
                                            var3 = _closure6_slot0;
                                            var2 = var3.has;
                                            var1 = arg1;
                                            var1 = var1.id;
                                            var1 = var2.bind(var3)(var1);
                                            var1 = !var1;
                                            return var1;
                                        };
                                        var1 = var4.bind(var5)(var1);
                                        if(var1) { _fun0007_ip = 41; continue _fun0007 }
case 34:
                                        var4 = _closure1_slot9;
                                        var1 = var4.getChannel;
                                        var6 = var1.bind(var4)(var7);
                                        var5 = _closure1_slot13;
                                        var4 = var5.can;
                                        var1 = _closure1_slot18;
                                        var1 = var1.VIEW_CHANNEL;
                                        var1 = var4.bind(var5)(var1, var6);
                                        var4 = !var1;
                                        var1 = !var4;
                                        if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 15;
                                        var4 = var6[var4];
                                        var6 = var5.bind(var2)(var4);
                                        var5 = var6.transitionTo;
                                        var4 = _closure1_slot19;
                                        var3 = var4.CHANNEL;
                                        var9 = var9.target_message_id;
                                        var10 = var10 != var9;
                                        var2 = undefined;
                                        if(!var10) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                                        var2 = var9;
case 44:
                                        var4 = var3.bind(var4)(var8, var7, var2);
                                        var1 = true;
                                        var3 = {'navigationReplace': true, 'openChannel': true};
                                        var3 = var5.bind(var6)(var4, var3);
case 42:
                                        return var1;
case 41:
                                        var1 = false;
                                        return var1;
case 32:
                                        var1 = false;
                                        return var1;
case 29:
                                        var1 = false;
                                        return var1;
case 25:
                                        var1 = false;
                                        return var1;
                                    }
                                };
                                var5 = undefined;
                                var3 = var3.bind(var5)(var7);
                                if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                                var3 = _closure4_slot2;
                                if(!var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                                var4 = var7.state;
                                var3 = _closure1_slot16;
                                var3 = var3.RESOLVED;
                                if(!(var4 === var3)) { _fun0006_ip = 48; continue _fun0006 }
case 50:
                                var3 = var7.guild;
                                var3 = var9 == var3;
                                if(var3) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 13;
                                var4 = var10[var4];
                                var6 = var6.bind(var5)(var4);
                                var4 = var6.isGroupDMInvite;
                                var3 = var4.bind(var6)(var7);
case 51:
                                if(var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 13;
                                var4 = var10[var4];
                                var6 = var6.bind(var5)(var4);
                                var4 = var6.isStreamInvite;
                                var3 = var4.bind(var6)(var7);
case 53:
                                if(var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 13;
                                var4 = var10[var4];
                                var6 = var6.bind(var5)(var4);
                                var4 = var6.isGuildScheduledEventInviteEmbed;
                                var3 = var4.bind(var6)(var7);
case 55:
                                if(var3) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 13;
                                var4 = var10[var4];
                                var6 = var6.bind(var5)(var4);
                                var4 = var6.isRoleSubscriptionInvite;
                                var3 = var4.bind(var6)(var7);
case 57:
                                var10 = undefined;
                                if(var3) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                                var4 = var7.guild;
                                var4 = var4.features;
                                var3 = var9 == var4;
                                var10 = var4;
case 59:
                                if(var3) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                                var6 = var10.includes;
                                var4 = _closure1_slot15;
                                var4 = var4.DISCOVERABLE;
                                var4 = var6.bind(var10)(var4);
                                var3 = !var4;
case 61:
                                var3 = !var3;
                                if(!var3) { _fun0006_ip = 63; continue _fun0006 }
case 41:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 14;
                                var4 = var10[var4];
                                var10 = var6.bind(var5)(var4);
                                var6 = var10.getMobileLurkerServerPreview;
                                var4 = 'AcceptInviteManager';
                                var4 = var6.bind(var10)(var4);
                                var3 = var4.enabled;
case 63:
                                if(var3) { _fun0006_ip = 64; continue _fun0006 }
case 48:
                                var14 = _closure4_slot0;
                                var3 = _closure3_slot0;
                                var13 = var3._isRegistration;
                                var12 = _closure4_slot1;
                                var3 = _closure4_slot3;
                                var10 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var6 = 16;
                                var6 = var4[var6];
                                var11 = var10.bind(var5)(var6);
                                var6 = var11.hideActionSheet;
                                var6 = var6.bind(var11)();
                                var6 = 17;
                                var6 = var4[var6];
                                var11 = var10.bind(var5)(var6);
                                var10 = var11.pushLazy;
                                var15 = _closure1_slot0;
                                var6 = 19;
                                var6 = var4[var6];
                                var15 = var15.bind(var5)(var6);
                                var6 = 18;
                                var6 = var4[var6];
                                var4 = var4.paths;
                                var6 = var15.bind(var5)(var6, var4);
                                var4 = {};
                                var4['code'] = var14;
                                var4['isRegistration'] = var13;
                                var4['deeplinkAttemptId'] = var12;
                                var4['inviteInstanceId'] = var3;
                                var3 = _closure1_slot14;
                                var3 = var10.bind(var11)(var6, var4, var3);
                                _fun0006_ip = 65; continue _fun0006;
case 64:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 21;
                                var3 = var6[var3];
                                var6 = var4.bind(var5)(var3);
                                var4 = var6.wait;
                                var3 = function() {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 22;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    var1 = var2.clearDisplayedInvite;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var3 = var4.bind(var6)(var3);
                                var4 = var7.target_channel_id;
                                var6 = var9 != var4;
                                var3 = undefined;
                                if(!var6) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                                var3 = var4;
case 66:
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 23;
                                var4 = var10[var4];
                                var12 = var6.bind(var5)(var4);
                                var11 = var12.startLurking;
                                var4 = var7.guild;
                                var10 = var4.id;
                                var6 = {};
                                var4 = var3;
                                if(!(var9 == var4)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                                var14 = var7.channel;
                                var15 = var9 == var14;
                                var13 = undefined;
                                if(var15) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                                var13 = var14.id;
case 70:
                                var4 = var13;
case 68:
                                var6['channelId'] = var4;
                                var4 = var9 != var3;
                                var3 = undefined;
                                if(!var4) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                                var4 = var7.target_message_id;
                                var13 = var9 != var4;
                                var3 = undefined;
                                if(!var13) { _fun0006_ip = 72; continue _fun0006 }
case 74:
                                var3 = var4;
case 72:
                                var6['messageId'] = var3;
                                var3 = _closure1_slot17;
                                var3 = var3.DISCOVERABLE_GUILD_INVITE_LURKER;
                                var6['joinSource'] = var3;
                                var4 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var3 = 24;
                                var3 = var13[var3];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.DEEPLINK;
                                var4 = new Array(1);
                                var4[0] = var3;
                                var18 = {};
                                var20 = var12;
                                var19 = var10;
                                var17 = var6;
                                var16 = var4;
                                var3 = var20[var11](var19, var18, var17, var16, var15);
                                _fun0006_ip = 65; continue _fun0006;
case 46:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 21;
                                var3 = var6[var3];
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.wait;
                                var3 = function() {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 22;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    var1 = var2.clearDisplayedInvite;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var3 = var4.bind(var5)(var3);
                                _fun0006_ip = 65; continue _fun0006;
case 24:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 20;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.acceptFriendInvite;
                                var3 = {};
                                var8 = _closure4_slot1;
                                var9 = var9 != var8;
                                var8 = 'Accept Invite';
                                if(!var9) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                                var8 = 'Deep Link';
case 75:
                                var3['location'] = var8;
                                var3 = var5.bind(var6)(var7, var3);
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 21;
                                var2 = var5[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.wait;
                                var1 = function() {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 22;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    var1 = var2.clearDisplayedInvite;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
case 65:
                                var1 = false;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/accept_invite/native/AcceptInviteManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();