// app/modules/rtc/SecureFramesPlatformUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var2 = var5.bind(var1)(var2);
    var7 = var2.SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = var7;
    var7 = var2.SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var7;
    var2 = var2.SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ME;
    var _closure1_slot8 = var7;
    var2 = var2.Routes;
    var _closure1_slot9 = var2;
    var2 = {};
    var7 = function openSecureFramesStreamVerification(arg1, arg2) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 6;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 8;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot6;
        var2 = {};
        var7 = arg1;
        var2['streamKey'] = var7;
        var7 = arg2;
        var2['channelId'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['openSecureFramesStreamVerification'] = var7;
    var7 = function openSecureFramesUserVerificationModal(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg3;
            var1 = undefined;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0001_ip = 102; continue _fun0001 }
 12:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 4;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var7 = _closure1_slot0;
            var4 = 6;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 5;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = {};
            var7 = arg1;
            var3['userId'] = var7;
            var7 = arg2;
            var3['channelId'] = var7;
            var2 = _closure1_slot7;
            var2 = var5.bind(var6)(var4, var3, var2);
 102:
            return var1;
        }
    };
    var2['openSecureFramesUserVerificationModal'] = var7;
    var7 = function openSecureFramesUpdateConfirmation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var10 = var3.title;
            var9 = var3.subtitle;
            var7 = var3.confirmText;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 86; continue _fun0002 }
 28:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 9;
            var5 = var11[var4];
            var5 = var8.bind(var1)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var11[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.cY+Ooa;
            var7 = var5.bind(var6)(var4);
 86:
            var3 = var3.onConfirm;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.confirm;
            var3 = {};
            var3['title'] = var10;
            var3['body'] = var9;
            var3['confirmText'] = var7;
            var7 = _closure1_slot0;
            var6 = 9;
            var9 = var8[var6];
            var9 = var7.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.ETE/oK;
            var6 = var9.bind(var10)(var6);
            var3['cancelText'] = var6;
            var6 = 11;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ButtonColors;
            var6 = var6.RED;
            var3['confirmColor'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 19; continue _fun0003 }
 6:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['openSecureFramesUpdateConfirmation'] = var7;
    var4 = function handleSecureFramesUserVerificationLink(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.userId;
            var7 = var1.fingerprint;
            var3 = _closure1_slot4;
            var1 = var3.getChannelId;
            var9 = var1.bind(var3)();
            var3 = _closure1_slot3;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var9);
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            var8 = undefined;
            if(var5) { _fun0004_ip = 68; continue _fun0004 }
 58:
            var5 = var4.getGuildId;
            var8 = var5.bind(var4)();
 68:
            if(!(var3 == var8)) { _fun0004_ip = 76; continue _fun0004 }
 72:
            var8 = _closure1_slot8;
 76:
            if(!(var3 != var9)) { _fun0004_ip = 87; continue _fun0004 }
 80:
            if(!(var3 == var4)) { _fun0004_ip = 228; continue _fun0004 }
 87:
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 10;
            var3 = var14[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.show;
            var3 = {};
            var13 = _closure1_slot0;
            var6 = 9;
            var11 = var14[var6];
            var11 = var13.bind(var1)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var6];
            var11 = var13.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.5ICxEx;
            var11 = var12.bind(var15)(var11);
            var3['title'] = var11;
            var11 = var14[var6];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var14[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.v1eXp6;
            var6 = var11.bind(var12)(var6);
            var3['body'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0004_ip = 351; continue _fun0004;
 228:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 12;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var11 = _closure1_slot9;
            var4 = var11.CHANNEL;
            var4 = var4.bind(var11)(var8, var9);
            var4 = var6.bind(var1)(var4);
            var4 = 7;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var11 = _closure1_slot0;
            var4 = 6;
            var4 = var3[var4];
            var11 = var11.bind(var1)(var4);
            var4 = 13;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var11.bind(var1)(var4, var3);
            var3 = _closure1_slot5;
            var2 = {};
            var2['userId'] = var10;
            var2['channelId'] = var9;
            var2['guildId'] = var8;
            var2['fingerprint'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
 351:
            return var1;
        }
    };
    var2['handleSecureFramesUserVerificationLink'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/SecureFramesPlatformUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();