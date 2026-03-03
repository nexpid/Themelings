// app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function getFallbackDoubleTapDisambiguatedEmoji() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getByName;
            var1 = 'heart';
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function reactionEmojiFromProtoValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.emojiName;
            var1 = var2.emojiId;
            var4 = var2.animated;
            var2 = null;
            var6 = var2 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = var1.value;
case 4:
            var6 = var2 == var5;
            var5 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var1.value;
case 8:
            var6 = '0';
            var5 = undefined;
            if(!(var6 !== var7)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
            var5 = var1.value;
case 6:
            var6 = var2 == var8;
            var1 = undefined;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var8.value;
case 11:
            var1 = var2 == var1;
            var7 = undefined;
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = var2 == var8;
            var6 = undefined;
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = var8.value;
case 15:
            var1 = '0';
            var7 = undefined;
            if(!(var1 !== var6)) { _fun0002_ip = 13; continue _fun0002 }
case 17:
            if(!(var2 == var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var9 = var6.bind(var3)(var1);
            var6 = var9.convertNameToSurrogate;
            var1 = var8.value;
            var1 = var6.bind(var9)(var1);
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var9 = var2 == var8;
            var6 = undefined;
            if(var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var8.value;
case 21:
            var1 = var6;
case 20:
            var7 = var1;
case 13:
            var1 = {};
            var8 = var2 != var7;
            var6 = '';
            if(!var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var6 = var7;
case 23:
            var1['name'] = var6;
            var1['id'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = var4.value;
case 25:
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var2 = var3;
case 27:
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function disambiguatedEmojiFromProtoValue(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.emojiName;
            var3 = var2.emojiId;
            var2 = null;
            var5 = var2 == var3;
            var6 = undefined;
            var4 = undefined;
            if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = var3.value;
case 29:
            var4 = var2 == var4;
            var7 = undefined;
            if(var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var4 = var2 == var3;
            var5 = undefined;
            if(var4) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var5 = var3.value;
case 33:
            var4 = '0';
            var7 = undefined;
            if(!(var4 !== var5)) { _fun0003_ip = 31; continue _fun0003 }
case 35:
            var7 = var3.value;
case 31:
            var4 = var2 == var1;
            var3 = undefined;
            if(var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var3 = var1.value;
case 36:
            var3 = var2 == var3;
            var5 = undefined;
            if(var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = var2 == var1;
            var4 = undefined;
            if(var3) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var4 = var1.value;
case 40:
            var3 = '0';
            var5 = undefined;
            if(!(var3 !== var4)) { _fun0003_ip = 38; continue _fun0003 }
case 42:
            var5 = var1.value;
case 38:
            var3 = var2 != var7;
            var1 = null;
            if(!var3) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var4 = _closure1_slot5;
            var3 = var4.getCustomEmojiById;
            var1 = var3.bind(var4)(var7);
case 43:
            if(!(var2 == var1)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getByName;
            var2 = var3.bind(var4)(var5);
case 47:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var1 = function _initializeDoubleTapEmojiAndUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var2 = _closure1_slot6;
                    var2 = var2.settings;
                    var3 = var2.textAndImages;
                    var4 = null;
                    var8 = var4 == var3;
                    var2 = undefined;
                    var5 = undefined;
                    if(var8) { _fun0004_ip = 34; continue _fun0004 }
case 51:
                    var5 = var3.defaultReactionEmoji;
case 34:
                    var3 = var4 == var5;
                    var8 = undefined;
                    if(var3) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var3 = var5.disableDoubleTap;
                    var9 = var4 == var3;
                    var8 = undefined;
                    if(var9) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                    var8 = var3.value;
case 52:
                    var3 = var4 != var8;
                    if(!var3) { _fun0004_ip = 55; continue _fun0004 }
case 36:
                    var3 = var8;
case 55:
                    if(var3) { _fun0004_ip = 56; continue _fun0004 }
case 39:
                    var8 = var4 == var5;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 57; continue _fun0004 }
case 41:
                    var8 = var5.emojiId;
                    var9 = var4 == var8;
                    var3 = undefined;
                    if(var9) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var3 = var8.value;
case 57:
                    if(!(var4 == var3)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var8 = var4 == var5;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 61:
                    var5 = var5.emojiName;
                    var8 = var4 == var5;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 62:
                    var3 = var5.value;
case 46:
                    if(!(var4 != var3)) { _fun0004_ip = 63; continue _fun0004 }
case 59:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.maybeShowDoubleTapReminderToast;
                    var3 = var3.bind(var4)(var7);
                    _fun0004_ip = 56; continue _fun0004;
case 63:
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 24;
                    var4 = var3[var4];
                    var8 = var9.bind(var2)(var4);
                    var5 = var8.UNSAFE_isDismissibleContentDismissed;
                    var4 = 25;
                    var3 = var3[var4];
                    var3 = var9.bind(var2)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
                    var3 = var5.bind(var8)(var3);
                    if(var3) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 15;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var9 = var5.DoubleTapExpandExperiment;
                    var8 = var9.getConfig;
                    var5 = {};
                    var10 = 'initializeDoubleTapEmojiAndUpsell';
                    var5['location'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var3 = var5.enabled;
case 64:
                    if(var3) { _fun0004_ip = 56; continue _fun0004 }
case 66:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 28;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.DoubleTapReactionEmoji;
                    var5 = var8.updateSetting;
                    var3 = {};
                    var9 = var7.id;
                    var3['emojiId'] = var9;
                    var9 = var7.name;
                    var3['emojiName'] = var9;
                    var9 = var7.animated;
                    var3['animated'] = var9;
                    var9 = false;
                    var3['disableDoubleTap'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=395);
case 67:
                    return var3;
case 68:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = 29;
                    var8 = var6[var8];
                    var9 = var5.bind(var2)(var8);
                    var8 = var9.requestMarkDismissibleContentAsShown;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.DOUBLE_TAP_TO_REACT_UPSELL;
                    var4 = var8.bind(var9)(var4);
                    var4 = 26;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.showChatInputBanner;
                    var4 = arg2;
                    var4 = var5.bind(var6)(var7, var4);
                    _fun0004_ip = 56; continue _fun0004;
case 69:
                    return var3;
case 56:
                    return var2;
case 49:
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
    var7 = 30;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getFallbackDoubleTapDisambiguatedEmoji'] = var6;
    var3['reactionEmojiFromProtoValue'] = var5;
    var3['disambiguatedEmojiFromProtoValue'] = var4;
    var4 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            if(var6) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var13 = var5.defaultReactionEmoji;
case 71:
            var6 = var4 == var13;
            var5 = undefined;
            if(var6) { _fun0005_ip = 54; continue _fun0005 }
case 73:
            var6 = var13.disableDoubleTap;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 54; continue _fun0005 }
case 74:
            var5 = var6.value;
case 54:
            var6 = true;
            if(!(var6 !== var5)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var5 = var10.getGuildId;
            var12 = var5.bind(var10)();
            var7 = _closure1_slot8;
            var5 = var7.getCurrentUser;
            var5 = var5.bind(var7)();
            var7 = var4 != var12;
            var8 = null;
            if(!var7) { _fun0005_ip = 77; continue _fun0005 }
case 15:
            var11 = var4 == var5;
            var7 = undefined;
            if(var11) { _fun0005_ip = 78; continue _fun0005 }
case 57:
            var7 = var5.id;
case 78:
            var7 = var4 != var7;
            var8 = null;
            if(!var7) { _fun0005_ip = 77; continue _fun0005 }
case 79:
            var11 = _closure1_slot7;
            var7 = var11.getMember;
            var5 = var5.id;
            var8 = var7.bind(var11)(var12, var5);
case 77:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 12;
            var5 = var11[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.isMemberCommunicationDisabled;
            var5 = var5.bind(var7)(var8);
            var8 = _closure1_slot1;
            var7 = 13;
            var7 = var11[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.bind(var1)(var10);
            if(!var7) { _fun0005_ip = 75; continue _fun0005 }
case 80:
            var7 = var10.isArchivedLockedThread;
            var7 = var7.bind(var10)();
            if(var7) { _fun0005_ip = 75; continue _fun0005 }
case 81:
            var8 = var9.state;
            var7 = _closure1_slot11;
            var7 = var7.SEND_FAILED;
            if(!(var8 !== var7)) { _fun0005_ip = 75; continue _fun0005 }
case 65:
            var8 = var9.type;
            var7 = _closure1_slot12;
            var7 = var7.THREAD_STARTER_MESSAGE;
            if(!(var8 !== var7)) { _fun0005_ip = 75; continue _fun0005 }
case 82:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 14;
            var7 = var11[var7];
            var12 = var8.bind(var1)(var7);
            var11 = var12.hasFlag;
            var8 = var9.flags;
            var7 = _closure1_slot10;
            var7 = var7.EPHEMERAL;
            var7 = var11.bind(var12)(var8, var7);
            if(var7) { _fun0005_ip = 75; continue _fun0005 }
case 83:
            if(var5) { _fun0005_ip = 75; continue _fun0005 }
case 84:
            var7 = _closure1_slot18;
            var5 = var13;
            if(!(var4 == var13)) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var5 = {};
case 85:
            var14 = var7.bind(var1)(var5);
            var _closure2_slot0 = var14;
            if(!(var4 != var13)) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var5 = var14.id;
            var7 = var4 == var5;
            var8 = var14;
            var5 = false;
            if(!var7) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var11 = var14.name;
            var7 = '';
            var8 = var14;
            var5 = false;
            if(!(var7 === var11)) { _fun0005_ip = 89; continue _fun0005 }
case 87:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 15;
            var7 = var12[var7];
            var7 = var11.bind(var1)(var7);
            var12 = var7.DoubleTapExpandExperiment;
            var11 = var12.getConfig;
            var7 = {};
            var14 = 'handleAddDefaultDoubleTapReaction';
            var7['location'] = var14;
            var7 = var11.bind(var12)(var7);
            var7 = var7.enabled;
            if(var7) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            return var1;
case 91:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 11;
            var7 = var12[var7];
            var12 = var11.bind(var1)(var7);
            var11 = var12.convertNameToSurrogate;
            var7 = 'heart';
            var12 = var11.bind(var12)(var7);
            var11 = '';
            var7 = null;
            if(!(var11 !== var12)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var11 = {};
            var11['name'] = var12;
            var11['id'] = var1;
            var12 = false;
            var11['animated'] = var12;
            var7 = var11;
case 93:
            if(!(var4 != var7)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            _closure2_slot0 = var7;
            var8 = var7;
            var5 = true;
case 89:
            var11 = var9.reactions;
            var7 = var11.some;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.emojiEquals;
                    var3 = var2.emoji;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0006_ip = 8; continue _fun0006 }
case 33:
                    var1 = var2.me;
case 8:
                    return var1;
                }
            };
            var6 = var7.bind(var11)(var6);
            if(var6) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            if(var5) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var7 = _closure1_slot19;
            var6 = var13;
            if(!(var4 == var6)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var6 = {};
case 101:
            var12 = var7.bind(var1)(var6);
            _fun0005_ip = 103; continue _fun0005;
case 99:
            var6 = _closure1_slot17;
            var12 = var6.bind(var1)();
case 103:
            if(!(var4 == var12)) { _fun0005_ip = 104; continue _fun0005 }
case 105:
            if(var5) { _fun0005_ip = 75; continue _fun0005 }
case 106:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 19;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.showDoubleTapErrorToast;
            var5 = {};
            var14 = var4 == var13;
            var11 = undefined;
            if(var14) { _fun0005_ip = 107; continue _fun0005 }
case 108:
            var13 = var13.emojiName;
            var14 = var4 == var13;
            var11 = undefined;
            if(var14) { _fun0005_ip = 107; continue _fun0005 }
case 109:
            var11 = var13.value;
case 107:
            var5['emojiName'] = var11;
            var5 = var6.bind(var7)(var5);
            _fun0005_ip = 75; continue _fun0005;
case 104:
            if(!(var4 != var12)) { _fun0005_ip = 110; continue _fun0005 }
case 111:
            var7 = {};
            var7['emoji'] = var12;
            var7['channel'] = var10;
            var5 = _closure1_slot15;
            var5 = var5.REACTION;
            var7['intention'] = var5;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 20;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getEmojiUnavailableReason;
            var7 = var5.bind(var6)(var7);
            var5 = _closure1_slot14;
            var5 = var5.PREMIUM_LOCKED;
            if(!(var7 !== var5)) { _fun0005_ip = 112; continue _fun0005 }
case 113:
            if(!(var4 == var7)) { _fun0005_ip = 114; continue _fun0005 }
case 110:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 17;
            var11 = var6[var4];
            var13 = var5.bind(var1)(var11);
            var11 = var13.triggerHapticFeedback;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.HapticFeedbackTypes;
            var4 = var4.IMPACT_LIGHT;
            var4 = var11.bind(var13)(var4);
            var4 = 18;
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
            var4 = 24;
            var4 = var6[var4];
            var14 = var5.bind(var1)(var4);
            var13 = var14.UNSAFE_markDismissibleContentAsDismissed;
            var4 = 25;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var11 = var4.DOUBLE_TAP_TO_REACT_REMINDER;
            var4 = {};
            var15 = _closure1_slot13;
            var15 = var15.INDIRECT_ACTION;
            var4['dismissAction'] = var15;
            var4 = var13.bind(var14)(var11, var4);
            var4 = 26;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.hideChatInputBanner;
            var4 = var4.bind(var5)();
            _fun0005_ip = 75; continue _fun0005;
case 114:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
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
case 112:
            var5 = _closure1_slot4;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 22;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 21;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 23;
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
case 97:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var3 = var7[var2];
            var4 = var6.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.HapticFeedbackTypes;
            var2 = var2.IMPACT_LIGHT;
            var2 = var3.bind(var4)(var2);
            var5 = 18;
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
case 95:
            return var1;
case 75:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var4;
    var4 = function areEmojisEqual(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0007_ip = 115; continue _fun0007 }
case 116:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0007_ip = 117; continue _fun0007 }
case 115:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 9; continue _fun0007 }
case 118:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
case 9:
            _fun0007_ip = 31; continue _fun0007;
case 117:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
case 31:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var4;
    var4 = function markDoubleTapDismissed(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 24;
        var1 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var1);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 25;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot5;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = var3.isFavoriteEmojiWithoutFetchingLatest;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0008_ip = 34; continue _fun0008 }
case 119:
            var2 = var3.isFrequentlyUsedReactionEmojiWithoutFetchingLatest;
            var1 = var2.bind(var3)(var4);
case 34:
            return var1;
        }
    };
    var3['canUpsellDoubleTapForEmoji'] = var2;
    return var1;
})();