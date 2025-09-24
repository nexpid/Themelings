// app/modules/age_gate/native/components/ExistingUserAgeGateModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function onClose() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.closeAgeGateModal;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function renderHeaderTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function getScreens(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = function generateOnBack(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot6;
                    var4 = var4.NSFW_SERVER_INVITE;
                    if(!(var4 !== var3)) { _fun0002_ip = 184; continue _fun0002 }
 29:
                    var4 = _closure1_slot6;
                    var4 = var4.NSFW_SERVER_INVITE_EMBED;
                    if(!(var4 !== var3)) { _fun0002_ip = 184; continue _fun0002 }
 46:
                    var4 = _closure1_slot6;
                    var4 = var4.JOIN_LARGE_GUILD_UNDERAGE;
                    if(!(var4 !== var3)) { _fun0002_ip = 175; continue _fun0002 }
 60:
                    var4 = _closure1_slot6;
                    var4 = var4.ACCESS_LARGE_GUILD_UNDERAGE;
                    if(!(var4 !== var3)) { _fun0002_ip = 175; continue _fun0002 }
 74:
                    var4 = _closure1_slot6;
                    var4 = var4.LARGE_GUILD;
                    if(!(var4 !== var3)) { _fun0002_ip = 175; continue _fun0002 }
 88:
                    var4 = _closure1_slot6;
                    var4 = var4.NSFW_SERVER;
                    if(!(var4 !== var3)) { _fun0002_ip = 175; continue _fun0002 }
 102:
                    var4 = _closure1_slot6;
                    var4 = var4.NSFW_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 166; continue _fun0002 }
 116:
                    var4 = _closure1_slot6;
                    var4 = var4.NSFW_VOICE_CHANNEL;
                    if(!(var4 !== var3)) { _fun0002_ip = 157; continue _fun0002 }
 130:
                    var2 = _closure1_slot6;
                    var2 = var2.FAMILY_CENTER;
                    if(!(var2 !== var3)) { _fun0002_ip = 148; continue _fun0002 }
 144:
                    var2 = undefined;
                    return var2;
 148:
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.closeAgeGateModal;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var2;
 157:
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 12;
                        var2 = var4[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = var5.popAll;
                        var2 = var2.bind(var5)();
                        var2 = 13;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot8;
                        var3 = var2.AGE_GATE_ACTION;
                        var2 = {};
                        var7 = _closure3_slot0;
                        var2['source'] = var7;
                        var6 = _closure1_slot5;
                        var6 = var6.AGE_GATE_CLOSE;
                        var2['action'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var2;
 166:
                    var2 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getGuildId;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if(!(var2 != var4)) { _fun0003_ip = 56; continue _fun0003 }
 23:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.nsfwReturnToSafety;
                            var2 = var2.bind(var3)(var4);
 56:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.closeAgeGateModal;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    return var2;
 175:
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure1_slot4;
                            var1 = var3.getGuildId;
                            var4 = var1.bind(var3)();
                            var1 = null;
                            if(!(var1 != var4)) { _fun0004_ip = 56; continue _fun0004 }
 23:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.nsfwReturnToSafety;
                            var1 = var1.bind(var3)(var4);
 56:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var3 = var4[var1];
                            var1 = undefined;
                            var6 = var5.bind(var1)(var3);
                            var5 = var6.closeAgeGateModal;
                            var3 = _closure3_slot0;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure1_slot1;
                            var2 = 12;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.popAll;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    return var2;
 184:
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.closeAgeGateModal;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 36; continue _fun0001 }
 29:
            var7 = function() {
                var1 = undefined;
                return var1;
            };
 36:
            var1 = {};
            var3 = _closure1_slot7;
            var11 = var3.AgeGate;
            var3 = {};
            var13 = true;
            var3['fullscreen'] = var13;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = 14;
            var5 = var9[var12];
            var5 = var6.bind(var8)(var5);
            var5 = var5.ImpressionNames;
            var5 = var5.USER_AGE_GATE;
            var3['impressionName'] = var5;
            var5 = {};
            var5['existing_user'] = var13;
            var3['impressionProperties'] = var5;
            var5 = 15;
            var10 = var9[var5];
            var14 = var6.bind(var8)(var10);
            var10 = var14.getHeaderBackButton;
            var10 = var10.bind(var14)(var7);
            var3['headerLeft'] = var10;
            var10 = _closure1_slot11;
            var3['headerTitle'] = var10;
            var14 = function render(arg1, arg2) {
                var5 = _closure2_slot0;
                var2 = function generateOnSuccess(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg2;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot6;
                        var4 = var3.NSFW_SERVER_INVITE;
                        var3 = arg1;
                        if(!(var3 === var4)) { _fun0005_ip = 64; continue _fun0005 }
 29:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.isIOS;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0005_ip = 73; continue _fun0005 }
 64:
                        var1 = function() {
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 10;
                            var3 = var9[var1];
                            var1 = undefined;
                            var4 = var8.bind(var1)(var3);
                            var3 = var4.closeAgeGateModal;
                            var3 = var3.bind(var4)();
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var2 = var9[var2];
                            var4 = var6.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var5 = 'AGE_GATE_AGE_VERIFIED';
                            var2['key'] = var5;
                            var5 = 8;
                            var5 = var9[var5];
                            var5 = var6.bind(var1)(var5);
                            var2['icon'] = var5;
                            var5 = 9;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.gUiIGR;
                            var5 = var6.bind(var7)(var5);
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        _fun0005_ip = 80; continue _fun0005;
 73:
                        var1 = function() {
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var1 = _closure1_slot7;
                            var1 = var1.NSFWGateGuild;
                            var1 = var2.bind(var3)(var1);
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 7;
                            var2 = var9[var1];
                            var1 = undefined;
                            var4 = var7.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var6 = 'AGE_GATE_AGE_VERIFIED';
                            var2['key'] = var6;
                            var6 = 8;
                            var6 = var9[var6];
                            var6 = var7.bind(var1)(var6);
                            var2['icon'] = var6;
                            var8 = _closure1_slot0;
                            var5 = 9;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.gUiIGR;
                            var5 = var6.bind(var7)(var5);
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
 80:
                        return var1;
                    }
                };
                var4 = undefined;
                var1 = arg2;
                var7 = var2.bind(var4)(var5, var1);
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 16;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onSuccess'] = var7;
                var6 = _closure1_slot10;
                var1['onClose'] = var6;
                var1['source'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3['render'] = var14;
            var1[var11] = var3;
            var3 = _closure1_slot7;
            var11 = var3.AgeGateConfirm;
            var3 = {};
            var3['fullscreen'] = var13;
            var3['headerTitle'] = var10;
            var14 = function render(arg1) {
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = arg1;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var6 = _closure2_slot0;
                var5 = 'source';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var14;
            var1[var11] = var3;
            var3 = _closure1_slot7;
            var11 = var3.Pawtect;
            var3 = {};
            var3['fullscreen'] = var13;
            var14 = var9[var5];
            var15 = var6.bind(var8)(var14);
            var14 = var15.getHeaderBackButton;
            var14 = var14.bind(var15)(var7);
            var3['headerLeft'] = var14;
            var12 = var9[var12];
            var12 = var6.bind(var8)(var12);
            var12 = var12.ImpressionNames;
            var12 = var12.USER_AGE_GATE_VERIFY;
            var3['impressionName'] = var12;
            var3['headerTitle'] = var10;
            var12 = function render() {
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var12;
            var1[var11] = var3;
            var3 = _closure1_slot7;
            var11 = var3.Blocked;
            var3 = {};
            var3['fullscreen'] = var13;
            var3['headerTitle'] = var10;
            var12 = {};
            var12['existing_user'] = var13;
            var3['impressionProperties'] = var12;
            var12 = function render(arg1) {
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var12;
            var1[var11] = var3;
            var2 = _closure1_slot7;
            var3 = var2.NSFWGateGuild;
            var2 = {};
            var2['headerTitle'] = var10;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getHeaderBackButton;
            var5 = var5.bind(var6)(var7);
            var2['headerLeft'] = var5;
            var4 = function render() {
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure1_slot10;
                var1['onClose'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var4;
            var1[var3] = var2;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AgeGateAnalyticAction;
    var _closure1_slot5 = var7;
    var4 = var4.AgeGateSource;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExistingUserAgeGateScreens;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/components/ExistingUserAgeGateModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExistingUserAgeGateModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var11 = var1.source;
            var _closure2_slot0 = var11;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useShouldAgeVerifyForAgeGate;
            var6 = var1.bind(var3)();
            var3 = _closure1_slot9;
            var1 = 22;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var8 = new Array(1);
            var8[0] = var11;
            var7 = function() {
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var9.bind(var10)(var7, var8);
            var1['screens'] = var7;
            var7 = _closure1_slot7;
            if(var6) { _fun0006_ip = 123; continue _fun0006 }
 115:
            var6 = var7.AgeGate;
            _fun0006_ip = 129; continue _fun0006;
 123:
            var6 = var7.Pawtect;
 129:
            var1['initialRouteName'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 9;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.13/7kZ;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();