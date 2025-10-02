// app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function reactionEmojiFromProtoValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.emojiName;
            var1 = var2.emojiId;
            var4 = var2.animated;
            var2 = null;
            var6 = var2 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.value;
case 2:
            var6 = var2 == var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var1.value;
case 6:
            var6 = '0';
            var5 = undefined;
            if(!(var6 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var5 = var1.value;
case 4:
            var6 = var2 == var8;
            var1 = undefined;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var8.value;
case 9:
            var1 = var2 == var1;
            var7 = undefined;
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2 == var8;
            var6 = undefined;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var8.value;
case 13:
            var1 = '0';
            var7 = undefined;
            if(!(var1 !== var6)) { _fun0001_ip = 11; continue _fun0001 }
case 15:
            if(!(var2 == var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var9 = var6.bind(var3)(var1);
            var6 = var9.convertNameToSurrogate;
            var1 = var8.value;
            var1 = var6.bind(var9)(var1);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var9 = var2 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = var8.value;
case 19:
            var1 = var6;
case 18:
            var7 = var1;
case 11:
            var1 = {};
            var8 = var2 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var7;
case 21:
            var1['name'] = var6;
            var1['id'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = var4.value;
case 23:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var2 = var3;
case 25:
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function disambiguatedEmojiFromProtoValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.emojiName;
            var3 = var2.emojiId;
            var2 = null;
            var5 = var2 == var3;
            var6 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var4 = var3.value;
case 27:
            var4 = var2 == var4;
            var7 = undefined;
            if(var4) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var4 = var2 == var3;
            var5 = undefined;
            if(var4) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var5 = var3.value;
case 31:
            var4 = '0';
            var7 = undefined;
            if(!(var4 !== var5)) { _fun0002_ip = 29; continue _fun0002 }
case 33:
            var7 = var3.value;
case 29:
            var4 = var2 == var1;
            var3 = undefined;
            if(var4) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var3 = var1.value;
case 34:
            var3 = var2 == var3;
            var5 = undefined;
            if(var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = var2 == var1;
            var4 = undefined;
            if(var3) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var4 = var1.value;
case 38:
            var3 = '0';
            var5 = undefined;
            if(!(var3 !== var4)) { _fun0002_ip = 36; continue _fun0002 }
case 40:
            var5 = var1.value;
case 36:
            var3 = var2 != var7;
            var1 = null;
            if(!var3) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var4 = _closure1_slot5;
            var3 = var4.getCustomEmojiById;
            var1 = var3.bind(var4)(var7);
case 41:
            if(!(var2 == var1)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getByName;
            var2 = var3.bind(var4)(var5);
case 45:
            var1 = var2;
case 43:
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function markDoubleTapDismissed(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 23;
        var1 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var1);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 24;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.DOUBLE_TAP_TO_REACT_UPSELL;
        var1 = {};
        var5 = arg1;
        var1['dismissAction'] = var5;
        var5 = true;
        var1['forceTrack'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = function _initializeDoubleTapEmojiAndUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var _closure4_slot0 = var10;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 26;
                    var3 = var2[var11];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getDoubleTapToReactExperiment;
                    var4 = {};
                    var3 = true;
                    var4['autoTrackExposure'] = var3;
                    var3 = 'EmojiRow';
                    var4 = var5.bind(var6)(var3, var4);
                    var3 = var4.enabled;
                    var6 = var4.upsellType;
                    if(!var3) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var3 = _closure1_slot6;
                    var3 = var3.settings;
                    var3 = var3.textAndImages;
                    var4 = null;
                    var7 = var4 == var3;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var5 = var3.defaultReactionEmoji;
case 51:
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 53; continue _fun0003 }
case 15:
                    var7 = var5.emojiId;
                    var12 = var4 == var7;
                    var3 = undefined;
                    if(var12) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var3 = var7.value;
case 53:
                    if(!(var4 == var3)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var5 = var5.emojiName;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 57; continue _fun0003 }
case 59:
                    var3 = var5.value;
case 57:
                    if(!(var4 != var3)) { _fun0003_ip = 60; continue _fun0003 }
case 55:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.maybeShowDoubleTapReminderToast;
                    var3 = var3.bind(var4)(var10);
                    _fun0003_ip = 49; continue _fun0003;
case 60:
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 23;
                    var4 = var3[var4];
                    var7 = var12.bind(var2)(var4);
                    var4 = var7.UNSAFE_isDismissibleContentDismissed;
                    var5 = 24;
                    var3 = var3[var5];
                    var3 = var12.bind(var2)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
                    var3 = var4.bind(var7)(var3);
                    if(var3) { _fun0003_ip = 49; continue _fun0003 }
case 61:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 28;
                    var3 = var7[var3];
                    var3 = var4.bind(var2)(var3);
                    var7 = var3.DoubleTapReactionEmoji;
                    var4 = var7.updateSetting;
                    var3 = {};
                    var12 = var10.id;
                    var3['emojiId'] = var12;
                    var12 = var10.name;
                    var3['emojiName'] = var12;
                    var12 = var10.animated;
                    var3['animated'] = var12;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=356);
case 62:
                    return var3;
case 63:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.DoubleTapToReactUpsellType;
                    var4 = var4.TOAST;
                    if(!(var6 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.DoubleTapToReactUpsellType;
                    var4 = var4.CHAT_BANNER;
                    if(!(var6 !== var4)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    var4 = global;
                    var7 = var4.setTimeout;
                    var6 = function() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 29;
                        var3 = var9[var1];
                        var1 = undefined;
                        var5 = var8.bind(var1)(var3);
                        var4 = var5.requestMarkDismissibleContentAsShown;
                        var3 = 24;
                        var3 = var9[var3];
                        var3 = var8.bind(var1)(var3);
                        var3 = var3.DismissibleContent;
                        var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var3 = 31;
                        var3 = var9[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openLazy;
                        var3 = 21;
                        var3 = var9[var3];
                        var7 = var8.bind(var1)(var3);
                        var3 = 32;
                        var4 = var9[var3];
                        var3 = var9.paths;
                        var4 = var7.bind(var1)(var4, var3);
                        var3 = {};
                        var7 = _closure4_slot0;
                        var3['emoji'] = var7;
                        var7 = 33;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.ImpressionNames;
                        var7 = var7.DOUBLE_TAP_REACT_UPSELL;
                        var3['impressionName'] = var7;
                        var2 = _closure1_slot19;
                        var3['markAsDismissed'] = var2;
                        var2 = 'DoubleTapToReactActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var4 = 500;
                    var4 = var7.bind(var2)(var6, var4);
                    var4 = undefined;
                    _fun0003_ip = 70; continue _fun0003;
case 68:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 29;
                    var6 = var11[var6];
                    var13 = var7.bind(var2)(var6);
                    var12 = var13.requestMarkDismissibleContentAsShown;
                    var6 = var11[var5];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.DismissibleContent;
                    var6 = var6.DOUBLE_TAP_TO_REACT_UPSELL;
                    var6 = var12.bind(var13)(var6);
                    var6 = 25;
                    var6 = var11[var6];
                    var11 = var7.bind(var2)(var6);
                    var7 = var11.showChatInputBanner;
                    var6 = arg2;
                    var6 = var7.bind(var11)(var10, var6);
                    var4 = undefined;
case 70:
                    _fun0003_ip = 71; continue _fun0003;
case 66:
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 29;
                    var6 = var7[var6];
                    var11 = var12.bind(var2)(var6);
                    var6 = var11.requestMarkDismissibleContentAsShown;
                    var5 = var7[var5];
                    var5 = var12.bind(var2)(var5);
                    var5 = var5.DismissibleContent;
                    var5 = var5.DOUBLE_TAP_TO_REACT_UPSELL;
                    var5 = var6.bind(var11)(var5);
                    var6 = _closure1_slot1;
                    var5 = 30;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.enqueueNotification;
                    var5 = {'type': 'REACTION_USER_EDU', 'key': 'reaction_user_edu'};
                    var5['emoji'] = var10;
                    var9 = function onDismiss() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 30;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.clearNotification;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot19;
                        var2 = _closure1_slot13;
                        var2 = var2.UNKNOWN;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onDismiss'] = var9;
                    var8 = _closure1_slot19;
                    var5['markAsDismissed'] = var8;
                    var8 = 20000;
                    var5['duration'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var4 = undefined;
case 71:
                    return var4;
case 64:
                    return var3;
case 49:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var11 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.MessageFlags;
    var _closure1_slot10 = var10;
    var10 = var7.MessageStates;
    var _closure1_slot11 = var10;
    var7 = var7.MessageTypes;
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.EmojiDisabledReasons;
    var _closure1_slot14 = var10;
    var7 = var7.EmojiIntention;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot16 = var7;
    var7 = 34;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['reactionEmojiFromProtoValue'] = var6;
    var3['disambiguatedEmojiFromProtoValue'] = var5;
    var5 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var10 = arg2;
            var1 = _closure1_slot6;
            var1 = var1.settings;
            var5 = var1.textAndImages;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var13 = undefined;
            if(var6) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var13 = var5.defaultReactionEmoji;
case 72:
            var6 = _closure1_slot17;
            var5 = var13;
            if(!(var4 == var13)) { _fun0004_ip = 74; continue _fun0004 }
case 7:
            var5 = {};
case 74:
            var8 = var6.bind(var1)(var5);
            var _closure2_slot0 = var8;
            if(!(var4 != var13)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var5 = var8.id;
            if(!(var4 == var5)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var6 = var8.name;
            var5 = '';
            if(!(var5 !== var6)) { _fun0004_ip = 75; continue _fun0004 }
case 77:
            var5 = var10.getGuildId;
            var12 = var5.bind(var10)();
            var6 = _closure1_slot8;
            var5 = var6.getCurrentUser;
            var5 = var5.bind(var6)();
            var6 = var4 != var12;
            var7 = null;
            if(!var6) { _fun0004_ip = 59; continue _fun0004 }
case 17:
            var11 = var4 == var5;
            var6 = undefined;
            if(var11) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var6 = var5.id;
case 79:
            var6 = var4 != var6;
            var7 = null;
            if(!var6) { _fun0004_ip = 59; continue _fun0004 }
case 81:
            var11 = _closure1_slot7;
            var6 = var11.getMember;
            var5 = var5.id;
            var7 = var6.bind(var11)(var12, var5);
case 59:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 12;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isMemberCommunicationDisabled;
            var5 = var5.bind(var6)(var7);
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var11[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.bind(var1)(var10);
            if(!var6) { _fun0004_ip = 75; continue _fun0004 }
case 82:
            var6 = var10.isArchivedLockedThread;
            var6 = var6.bind(var10)();
            if(var6) { _fun0004_ip = 75; continue _fun0004 }
case 83:
            var7 = var9.state;
            var6 = _closure1_slot11;
            var6 = var6.SEND_FAILED;
            if(!(var7 !== var6)) { _fun0004_ip = 75; continue _fun0004 }
case 84:
            var7 = var9.type;
            var6 = _closure1_slot12;
            var6 = var6.THREAD_STARTER_MESSAGE;
            if(!(var7 !== var6)) { _fun0004_ip = 75; continue _fun0004 }
case 85:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var12 = var7.bind(var1)(var6);
            var11 = var12.hasFlag;
            var7 = var9.flags;
            var6 = _closure1_slot10;
            var6 = var6.EPHEMERAL;
            var6 = var11.bind(var12)(var7, var6);
            if(var6) { _fun0004_ip = 75; continue _fun0004 }
case 86:
            if(var5) { _fun0004_ip = 75; continue _fun0004 }
case 87:
            var7 = var9.reactions;
            var6 = var7.some;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.emojiEquals;
                    var3 = var2.emoji;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                    var1 = var2.me;
case 88:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var6 = _closure1_slot18;
            var5 = var13;
            if(!(var4 == var5)) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var5 = {};
case 92:
            var12 = var6.bind(var1)(var5);
            if(!(var4 == var12)) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 18;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.showDoubleTapErrorToast;
            var5 = {};
            var14 = var4 == var13;
            var11 = undefined;
            if(var14) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var13 = var13.emojiName;
            var14 = var4 == var13;
            var11 = undefined;
            if(var14) { _fun0004_ip = 96; continue _fun0004 }
case 98:
            var11 = var13.value;
case 96:
            var5['emojiName'] = var11;
            var5 = var6.bind(var7)(var5);
            _fun0004_ip = 75; continue _fun0004;
case 94:
            if(!(var4 != var12)) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            var7 = {};
            var7['emoji'] = var12;
            var7['channel'] = var10;
            var5 = _closure1_slot15;
            var5 = var5.REACTION;
            var7['intention'] = var5;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 19;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getEmojiUnavailableReason;
            var7 = var5.bind(var6)(var7);
            var5 = _closure1_slot14;
            var5 = var5.PREMIUM_LOCKED;
            if(!(var7 !== var5)) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            if(!(var4 == var7)) { _fun0004_ip = 103; continue _fun0004 }
case 99:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 16;
            var11 = var6[var4];
            var13 = var5.bind(var1)(var11);
            var11 = var13.triggerHapticFeedback;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.HapticFeedbackTypes;
            var4 = var4.IMPACT_LIGHT;
            var4 = var11.bind(var13)(var4);
            var4 = 17;
            var11 = var6[var4];
            var15 = var5.bind(var1)(var11);
            var14 = var15.addReaction;
            var13 = var10.id;
            var18 = var9.id;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.ReactionLocations;
            var16 = var4.DOUBLE_TAP;
            var20 = var15;
            var19 = var13;
            var17 = var8;
            var4 = var20[var14](var19, var18, var17, var16, var15);
            var4 = 23;
            var4 = var6[var4];
            var14 = var5.bind(var1)(var4);
            var13 = var14.UNSAFE_markDismissibleContentAsDismissed;
            var4 = 24;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var11 = var4.DOUBLE_TAP_TO_REACT_REMINDER;
            var4 = {};
            var15 = _closure1_slot13;
            var15 = var15.INDIRECT_ACTION;
            var4['dismissAction'] = var15;
            var4 = var13.bind(var14)(var11, var4);
            var4 = 25;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.hideChatInputBanner;
            var4 = var4.bind(var5)();
            _fun0004_ip = 75; continue _fun0004;
case 103:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 18;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showDoubleTapErrorToast;
            var4 = {};
            var11 = var12.name;
            var4['emojiName'] = var11;
            var4['reason'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = undefined;
            return var4;
case 101:
            var5 = _closure1_slot4;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 21;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 20;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 22;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.openAlert;
            var4 = _closure1_slot9;
            var7 = _closure1_slot16;
            var3 = {};
            var12 = var12.name;
            var3['emojiName'] = var12;
            var3 = var7.bind(var1)(var11, var3);
            var3 = var5.bind(var6)(var4, var3);
            var3 = undefined;
            return var3;
case 90:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var4 = var6.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.HapticFeedbackTypes;
            var2 = var2.IMPACT_LIGHT;
            var2 = var3.bind(var4)(var2);
            var5 = 17;
            var2 = var7[var5];
            var4 = var6.bind(var1)(var2);
            var3 = var4.removeReaction;
            var2 = {};
            var10 = var10.id;
            var2['channelId'] = var10;
            var9 = var9.id;
            var2['messageId'] = var9;
            var2['emoji'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.ReactionLocations;
            var5 = var5.DOUBLE_TAP;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = undefined;
            return var2;
case 75:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var5;
    var5 = function areEmojisEqual(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0006_ip = 104; continue _fun0006 }
case 105:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0006_ip = 74; continue _fun0006 }
case 104:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0006_ip = 7; continue _fun0006 }
case 106:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
case 7:
            _fun0006_ip = 29; continue _fun0006;
case 74:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
case 29:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var5;
    var3['markDoubleTapDismissed'] = var4;
    var4 = function initializeDoubleTapEmojiAndUpsell() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initializeDoubleTapEmojiAndUpsell'] = var4;
    var2 = function canUpsellDoubleTapForEmoji(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot5;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = var3.isFavoriteEmojiWithoutFetchingLatest;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0007_ip = 32; continue _fun0007 }
case 107:
            var2 = var3.isFrequentlyUsedReactionEmojiWithoutFetchingLatest;
            var1 = var2.bind(var3)(var4);
case 32:
            return var1;
        }
    };
    var3['canUpsellDoubleTapForEmoji'] = var2;
    return var1;
})();