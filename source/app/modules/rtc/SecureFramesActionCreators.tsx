// app/modules/rtc/SecureFramesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function savePersistentCodesEnabled() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _savePersistentCodesEnabled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = var4;
                    var5 = arg2;
                    var2 = undefined;
                    var7 = undefined;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var8 = var8[var3];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'SECURE_FRAMES_SETTINGS_UPDATE';
                    var8['type'] = var12;
                    var8['persistentCodesEnabled'] = var11;
                    var8 = var9.bind(var10)(var8);
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = var5;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = var5;
                    var4 = var4.bind(var2)();
                    _fun0001_ip = 6; continue _fun0001;
case 4: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 7;
                    var4 = var9[var4];
                    var9 = var8.bind(var2)(var4);
                    var8 = var9.ensureCurrentUserPublicKey;
                    var4 = _closure1_slot7;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=139);
case 8:
                    return var4;
case 9:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var9 = var5;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var5.bind(var2)();
case 12: // try_end0
                    _fun0001_ip = 6; continue _fun0001;
case 10:
                    return var4;
case 14: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var13.bind(var2)(var4);
                    var4 = var4.APIError;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var15 = var5;
                    var14 = var9;
                    var4 = new var15[var4](var14, var13);
                    var9 = var4 instanceof Object ? var4 : var5;
                    var4 = _closure1_slot1;
                    var3 = var8[var3];
                    var10 = var4.bind(var2)(var3);
                    var5 = var10.dispatch;
                    var3 = {'type': 'SECURE_FRAMES_SETTINGS_UPDATE', 'persistentCodesEnabled': false};
                    var3 = var5.bind(var10)(var3);
                    var3 = 9;
                    var3 = var8[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var11 = 10;
                    var10 = var8[var11];
                    var10 = var13.bind(var2)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var8 = var8[var11];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.R0RpRU;
                    var8 = var10.bind(var12)(var8);
                    var3['title'] = var8;
                    var8 = var9.getAnyErrorMessage;
                    var9 = var8.bind(var9)();
                    var7 = var9;
                    var8 = null;
                    if(!(var8 == var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = var6[var11];
                    var8 = var10.bind(var2)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var6 = var6[var11];
                    var6 = var10.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.eAn6z8;
                    var6 = var8.bind(var9)(var6);
                    _fun0001_ip = 17; continue _fun0001;
case 15:
                    var6 = var7;
case 17:
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _updatePersistentCodesEnabled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var _closure4_slot0 = var8;
                    var2 = undefined;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var5 = _closure1_slot6;
                    var4 = var5.getVoiceStateForUser;
                    var9 = _closure1_slot4;
                    var3 = var9.getId;
                    var3 = var3.bind(var9)();
                    var3 = var4.bind(var5)(var3);
                    var10 = _closure1_slot5;
                    var9 = var10.getChannel;
                    var4 = null;
                    var11 = var4 == var3;
                    var5 = undefined;
                    if(var11) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = var3.channelId;
case 20:
                    var5 = var9.bind(var10)(var5);
                    var10 = _closure1_slot4;
                    var9 = var10.getSessionId;
                    var10 = var9.bind(var10)();
                    var11 = var4 == var3;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var9 = var3.sessionId;
case 22:
                    var3 = null;
                    if(!(var10 === var9)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var9 = var4 != var5;
                    var3 = null;
                    if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                    var10 = var5.type;
                    var9 = _closure1_slot8;
                    var9 = var9.GUILD_STAGE_VOICE;
                    var3 = null;
                    if(!(var10 !== var9)) { _fun0002_ip = 24; continue _fun0002 }
case 27:
                    var3 = var5.id;
case 24:
                    _closure4_slot2 = var3;
                    if(!(var4 == var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var3 = _closure1_slot9;
                    var3 = var3.bind(var2)(var8);
                    SaveGenerator(address=182);
case 30:
                    return var3;
case 31:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    return var3;
case 28:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.openSecureFramesUpdateConfirmation;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var12 = 10;
                    var11 = var9[var12];
                    var11 = var10.bind(var2)(var11);
                    var13 = var11.intl;
                    var11 = var13.string;
                    var9 = var9[var12];
                    var9 = var10.bind(var2)(var9);
                    var10 = var9.t;
                    if(var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var9 = var10.q29xJy;
                    var9 = var11.bind(var13)(var9);
                    _fun0002_ip = 36; continue _fun0002;
case 34:
                    var10 = var10.DRFN1N;
                    var9 = var11.bind(var13)(var10);
case 36:
                    var3['title'] = var9;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var12];
                    var10 = var13.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var12];
                    var9 = var13.bind(var2)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var8 = var9.E66FQk;
                    var8 = var10.bind(var11)(var8);
                    _fun0002_ip = 39; continue _fun0002;
case 37:
                    var9 = var9.y015ZW;
                    var8 = var10.bind(var11)(var9);
case 39:
                    var3['subtitle'] = var8;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = var8[var12];
                    var9 = var11.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var8[var12];
                    var8 = var11.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.aTuFYW;
                    var8 = var9.bind(var10)(var8);
                    var3['confirmText'] = var8;
                    var8 = _closure1_slot3;
                    var7 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                                var5 = _closure1_slot9;
                                var4 = _closure4_slot0;
                                var3 = undefined;
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 12;
                                    var5 = var4[var2];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var5);
                                    var5 = var6.disconnect;
                                    var5 = var5.bind(var6)();
                                    var2 = var4[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.selectVoiceChannel;
                                    var2 = _closure4_slot2;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var2 = var5.bind(var3)(var4, var2);
                                SaveGenerator(address=42);
case 42:
                                return var2;
case 43:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                                return var3;
case 44:
                                return var2;
case 40:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var7 = var8.bind(var2)(var7);
                    _closure4_slot1 = var7;
                    var6 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3['onConfirm'] = var6;
                    var3 = var4.bind(var5)(var3);
case 32:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelTypes;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function clearUploadedKeyVersions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearUploadedKeyVersions'] = var7;
    var7 = function updatePersistentCodesEnabled() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['updatePersistentCodesEnabled'] = var7;
    var7 = function addUploadedKeyVersion(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD';
        var2['type'] = var5;
        var5 = arg1;
        var2['keyVersion'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['addUploadedKeyVersion'] = var7;
    var7 = function createSecureFramesVerifiedKey(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_VERIFIED_KEY_CREATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var5 = arg2;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['createSecureFramesVerifiedKey'] = var7;
    var7 = function deleteSecureFramesVerifiedKey(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_VERIFIED_KEY_DELETE';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var5 = arg2;
        var2['serializedKey'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['deleteSecureFramesVerifiedKey'] = var7;
    var7 = function deleteSecureFramesUserVerifiedKeys(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['deleteSecureFramesUserVerifiedKeys'] = var7;
    var7 = function createSecureFramesTransientKey(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_TRANSIENT_KEY_CREATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var5 = arg2;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['createSecureFramesTransientKey'] = var7;
    var4 = function deleteSecureFramesTransientKey(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SECURE_FRAMES_TRANSIENT_KEY_DELETE';
        var2['type'] = var5;
        var5 = arg1;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['deleteSecureFramesTransientKey'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/SecureFramesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();