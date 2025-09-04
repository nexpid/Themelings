// app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function emojiFromProtoValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.emojiName;
            var1 = var1.emojiId;
            var3 = null;
            var4 = var3 == var1;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 33; continue _fun0001 }
 28:
            var2 = var1.value;
 33:
            var4 = var3 == var2;
            var2 = undefined;
            if(var4) { _fun0001_ip = 73; continue _fun0001 }
 42:
            var4 = var3 == var1;
            var7 = undefined;
            if(var4) { _fun0001_ip = 56; continue _fun0001 }
 51:
            var7 = var1.value;
 56:
            var4 = '0';
            var2 = undefined;
            if(!(var4 !== var7)) { _fun0001_ip = 73; continue _fun0001 }
 68:
            var2 = var1.value;
 73:
            var4 = var3 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 87; continue _fun0001 }
 82:
            var1 = var6.value;
 87:
            var1 = var3 == var1;
            var4 = undefined;
            if(var1) { _fun0001_ip = 187; continue _fun0001 }
 96:
            var1 = var3 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var7 = var6.value;
 110:
            var1 = '0';
            var4 = undefined;
            if(!(var1 !== var7)) { _fun0001_ip = 187; continue _fun0001 }
 122:
            if(!(var3 == var2)) { _fun0001_ip = 167; continue _fun0001 }
 126:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var8 = var7.bind(var5)(var1);
            var7 = var8.convertNameToSurrogate;
            var1 = var6.value;
            var1 = var7.bind(var8)(var1);
            _fun0001_ip = 184; continue _fun0001;
 167:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 181; continue _fun0001 }
 176:
            var5 = var6.value;
 181:
            var1 = var5;
 184:
            var4 = var1;
 187:
            var1 = {};
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0001_ip = 203; continue _fun0001 }
 200:
            var3 = var4;
 203:
            var1['name'] = var3;
            var1['id'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function disambiguatedEmojiFromProtoValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.emojiName;
            var3 = var2.emojiId;
            var2 = null;
            var5 = var2 == var3;
            var6 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 33; continue _fun0002 }
 28:
            var4 = var3.value;
 33:
            var4 = var2 == var4;
            var7 = undefined;
            if(var4) { _fun0002_ip = 73; continue _fun0002 }
 42:
            var4 = var2 == var3;
            var5 = undefined;
            if(var4) { _fun0002_ip = 56; continue _fun0002 }
 51:
            var5 = var3.value;
 56:
            var4 = '0';
            var7 = undefined;
            if(!(var4 !== var5)) { _fun0002_ip = 73; continue _fun0002 }
 68:
            var7 = var3.value;
 73:
            var4 = var2 == var1;
            var3 = undefined;
            if(var4) { _fun0002_ip = 87; continue _fun0002 }
 82:
            var3 = var1.value;
 87:
            var3 = var2 == var3;
            var5 = undefined;
            if(var3) { _fun0002_ip = 127; continue _fun0002 }
 96:
            var3 = var2 == var1;
            var4 = undefined;
            if(var3) { _fun0002_ip = 110; continue _fun0002 }
 105:
            var4 = var1.value;
 110:
            var3 = '0';
            var5 = undefined;
            if(!(var3 !== var4)) { _fun0002_ip = 127; continue _fun0002 }
 122:
            var5 = var1.value;
 127:
            var3 = var2 != var7;
            var1 = null;
            if(!var3) { _fun0002_ip = 154; continue _fun0002 }
 136:
            var4 = _closure1_slot5;
            var3 = var4.getCustomEmojiById;
            var1 = var3.bind(var4)(var7);
 154:
            if(!(var2 == var1)) { _fun0002_ip = 204; continue _fun0002 }
 158:
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0002_ip = 201; continue _fun0002 }
 167:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getByName;
            var2 = var3.bind(var4)(var5);
 201:
            var1 = var2;
 204:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = function _initializeDoubleTapEmojiAndUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 277; continue _fun0003 }
 18:
                    var _closure4_slot0 = var9;
                    var _closure4_slot1 = var7;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var2 = var3[var2];
                    var3 = undefined;
                    var10 = var5.bind(var3)(var2);
                    var6 = var10.getDoubleTapToReactExperiment;
                    var5 = {};
                    var2 = true;
                    var5['autoTrackExposure'] = var2;
                    var2 = 'EmojiRow';
                    var5 = var6.bind(var10)(var2, var5);
                    var2 = var5.enabled;
                    var5 = var5.showToast;
                    if(!var2) { _fun0003_ip = 271; continue _fun0003 }
 93:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 20;
                    var2 = var10[var2];
                    var2 = var6.bind(var3)(var2);
                    var10 = var2.DoubleTapReactionEmoji;
                    var6 = var10.updateSetting;
                    var2 = {};
                    var11 = var9.id;
                    var2['emojiId'] = var11;
                    var11 = var9.name;
                    var2['emojiName'] = var11;
                    var2 = var6.bind(var10)(var2);
                    SaveGenerator(address=156);
 154:
                    return var2;
 156:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 274; continue _fun0003 }
 162:
                    if(var5) { _fun0003_ip = 194; continue _fun0003 }
 165:
                    var5 = global;
                    var10 = var5.setTimeout;
                    var6 = function() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 15;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 23;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var7 = _closure4_slot0;
                        var3['emoji'] = var7;
                        var2 = _closure4_slot1;
                        var3['markAsDismissed'] = var2;
                        var2 = 'DoubleTapToReactActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var5 = 500;
                    var5 = var10.bind(var3)(var6, var5);
                    _fun0003_ip = 271; continue _fun0003;
 194:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.enqueueNotification;
                    var4 = {'type': 'REACTION_USER_EDU', 'key': 'reaction_user_edu'};
                    var4['emoji'] = var9;
                    var8 = function onDismiss() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.clearNotification;
                        var3 = var3.bind(var4)();
                        var3 = _closure4_slot1;
                        var2 = _closure1_slot10;
                        var2 = var2.UNKNOWN;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['onDismiss'] = var8;
                    var4['markAsDismissed'] = var7;
                    var7 = 20000;
                    var4['duration'] = var7;
                    var4 = var5.bind(var6)(var4);
 271:
                    return var3;
 274:
                    return var2;
 277:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ContentDismissActionType;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.EmojiDisabledReasons;
    var _closure1_slot11 = var9;
    var6 = var6.EmojiIntention;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot13 = var6;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['emojiFromProtoValue'] = var5;
    var3['disambiguatedEmojiFromProtoValue'] = var4;
    var4 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var1 = _closure1_slot6;
            var1 = var1.settings;
            var4 = var1.textAndImages;
            var5 = null;
            var8 = var5 == var4;
            var1 = undefined;
            var9 = undefined;
            if(var8) { _fun0004_ip = 46; continue _fun0004 }
 40:
            var9 = var4.defaultReactionEmoji;
 46:
            var8 = _closure1_slot14;
            var4 = var9;
            if(!(var5 == var9)) { _fun0004_ip = 59; continue _fun0004 }
 57:
            var4 = {};
 59:
            var8 = var8.bind(var1)(var4);
            var _closure2_slot0 = var8;
            if(!(var5 != var9)) { _fun0004_ip = 531; continue _fun0004 }
 75:
            var4 = var8.id;
            if(!(var5 == var4)) { _fun0004_ip = 100; continue _fun0004 }
 84:
            var10 = var8.name;
            var4 = '';
            if(!(var4 !== var10)) { _fun0004_ip = 531; continue _fun0004 }
 100:
            var10 = _closure1_slot8;
            var4 = var10.getMessage;
            var10 = var4.bind(var10)(var6, var7);
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0004_ip = 149; continue _fun0004 }
 125:
            var12 = var10.reactions;
            var11 = var12.some;
            var10 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.emojiEquals;
                    var3 = var2.emoji;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0005_ip = 62; continue _fun0005 }
 56:
                    var1 = var2.me;
 62:
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var10);
 149:
            if(var4) { _fun0004_ip = 531; continue _fun0004 }
 155:
            var4 = _closure1_slot15;
            if(!(var5 == var9)) { _fun0004_ip = 165; continue _fun0004 }
 163:
            var9 = {};
 165:
            var4 = var4.bind(var1)(var9);
            if(!(var5 == var4)) { _fun0004_ip = 222; continue _fun0004 }
 174:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.showDoubleTapErrorToast;
            var9 = {};
            var12 = var8.name;
            var9['emojiName'] = var12;
            var9 = var10.bind(var11)(var9);
            _fun0004_ip = 531; continue _fun0004;
 222:
            if(!(var5 != var4)) { _fun0004_ip = 318; continue _fun0004 }
 226:
            var10 = {};
            var10['emoji'] = var4;
            var9 = _closure1_slot7;
            var4 = var9.getChannel;
            var4 = var4.bind(var9)(var6);
            var10['channel'] = var4;
            var4 = _closure1_slot12;
            var4 = var4.REACTION;
            var10['intention'] = var4;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 13;
            var4 = var11[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.getEmojiUnavailableReason;
            var4 = var4.bind(var9)(var10);
            var9 = _closure1_slot11;
            var9 = var9.PREMIUM_LOCKED;
            if(!(var4 !== var9)) { _fun0004_ip = 447; continue _fun0004 }
 314:
            if(!(var5 == var4)) { _fun0004_ip = 400; continue _fun0004 }
 318:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var10 = var9[var4];
            var11 = var5.bind(var1)(var10);
            var10 = var11.triggerHapticFeedback;
            var4 = var9[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.HapticFeedbackTypes;
            var4 = var4.IMPACT_LIGHT;
            var4 = var10.bind(var11)(var4);
            var4 = 18;
            var4 = var9[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.addReaction;
            var4 = var4.bind(var5)(var6, var7, var8);
            _fun0004_ip = 531; continue _fun0004;
 400:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showDoubleTapErrorToast;
            var4 = {};
            var7 = var8.name;
            var4['emojiName'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = undefined;
            return var4;
 447:
            var5 = _closure1_slot4;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 15;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 14;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot9;
            var6 = _closure1_slot13;
            var2 = {};
            var8 = var8.name;
            var2['emojiName'] = var8;
            var2 = var6.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2);
            var2 = undefined;
            return var2;
 531:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var4;
    var4 = function areEmojisEqual(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0006_ip = 26; continue _fun0006 }
 17:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0006_ip = 59; continue _fun0006 }
 26:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0006_ip = 57; continue _fun0006 }
 43:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
 57:
            _fun0006_ip = 73; continue _fun0006;
 59:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
 73:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var4;
    var2 = function initializeDoubleTapEmojiAndUpsell() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initializeDoubleTapEmojiAndUpsell'] = var2;
    return var1;
})();