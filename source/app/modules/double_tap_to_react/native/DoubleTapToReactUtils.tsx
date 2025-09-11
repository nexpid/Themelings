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
 0:
            var2 = arg1;
            var8 = var2.emojiName;
            var1 = var2.emojiId;
            var4 = var2.animated;
            var2 = null;
            var6 = var2 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 39; continue _fun0001 }
 34:
            var5 = var1.value;
 39:
            var6 = var2 == var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 79; continue _fun0001 }
 48:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 62; continue _fun0001 }
 57:
            var7 = var1.value;
 62:
            var6 = '0';
            var5 = undefined;
            if(!(var6 !== var7)) { _fun0001_ip = 79; continue _fun0001 }
 74:
            var5 = var1.value;
 79:
            var6 = var2 == var8;
            var1 = undefined;
            if(var6) { _fun0001_ip = 93; continue _fun0001 }
 88:
            var1 = var8.value;
 93:
            var1 = var2 == var1;
            var7 = undefined;
            if(var1) { _fun0001_ip = 193; continue _fun0001 }
 102:
            var1 = var2 == var8;
            var6 = undefined;
            if(var1) { _fun0001_ip = 116; continue _fun0001 }
 111:
            var6 = var8.value;
 116:
            var1 = '0';
            var7 = undefined;
            if(!(var1 !== var6)) { _fun0001_ip = 193; continue _fun0001 }
 128:
            if(!(var2 == var5)) { _fun0001_ip = 173; continue _fun0001 }
 132:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var9 = var6.bind(var3)(var1);
            var6 = var9.convertNameToSurrogate;
            var1 = var8.value;
            var1 = var6.bind(var9)(var1);
            _fun0001_ip = 190; continue _fun0001;
 173:
            var9 = var2 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 187; continue _fun0001 }
 182:
            var6 = var8.value;
 187:
            var1 = var6;
 190:
            var7 = var1;
 193:
            var1 = {};
            var8 = var2 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 209; continue _fun0001 }
 206:
            var6 = var7;
 209:
            var1['name'] = var6;
            var1['id'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 231; continue _fun0001 }
 226:
            var3 = var4.value;
 231:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 241; continue _fun0001 }
 238:
            var2 = var3;
 241:
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var6;
    var5 = function disambiguatedEmojiFromProtoValue(arg1) {
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
            var3 = 12;
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
    var _closure1_slot20 = var5;
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
    var _closure1_slot21 = var4;
    var1 = function _initializeDoubleTapEmojiAndUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 672; continue _fun0003 }
 15:
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
                    if(!var3) { _fun0003_ip = 669; continue _fun0003 }
 86:
                    var3 = _closure1_slot6;
                    var3 = var3.settings;
                    var3 = var3.textAndImages;
                    var4 = null;
                    var7 = var4 == var3;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 119; continue _fun0003 }
 113:
                    var5 = var3.defaultReactionEmoji;
 119:
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 148; continue _fun0003 }
 128:
                    var7 = var5.emojiId;
                    var12 = var4 == var7;
                    var3 = undefined;
                    if(var12) { _fun0003_ip = 148; continue _fun0003 }
 143:
                    var3 = var7.value;
 148:
                    if(!(var4 == var3)) { _fun0003_ip = 185; continue _fun0003 }
 152:
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 181; continue _fun0003 }
 161:
                    var5 = var5.emojiName;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 181; continue _fun0003 }
 176:
                    var3 = var5.value;
 181:
                    if(!(var4 != var3)) { _fun0003_ip = 221; continue _fun0003 }
 185:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.maybeShowDoubleTapReminderToast;
                    var3 = var3.bind(var4)(var10);
                    _fun0003_ip = 669; continue _fun0003;
 221:
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 24;
                    var4 = var3[var4];
                    var7 = var12.bind(var2)(var4);
                    var4 = var7.UNSAFE_isDismissibleContentDismissed;
                    var5 = 25;
                    var3 = var3[var5];
                    var3 = var12.bind(var2)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
                    var3 = var4.bind(var7)(var3);
                    if(var3) { _fun0003_ip = 669; continue _fun0003 }
 282:
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
 354:
                    return var3;
 356:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 666; continue _fun0003 }
 365:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.DoubleTapToReactUpsellType;
                    var4 = var4.TOAST;
                    if(!(var6 !== var4)) { _fun0003_ip = 533; continue _fun0003 }
 401:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.DoubleTapToReactUpsellType;
                    var4 = var4.CHAT_BANNER;
                    if(!(var6 !== var4)) { _fun0003_ip = 465; continue _fun0003 }
 434:
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
                        var3 = 25;
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
                        var3 = 20;
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
                        var2 = _closure1_slot21;
                        var3['markAsDismissed'] = var2;
                        var2 = 'DoubleTapToReactActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var4 = 500;
                    var4 = var7.bind(var2)(var6, var4);
                    var4 = undefined;
                    _fun0003_ip = 528; continue _fun0003;
 465:
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 29;
                    var7 = var6[var7];
                    var11 = var12.bind(var2)(var7);
                    var7 = var11.requestMarkDismissibleContentAsShown;
                    var6 = var6[var5];
                    var6 = var12.bind(var2)(var6);
                    var6 = var6.DismissibleContent;
                    var6 = var6.DOUBLE_TAP_TO_REACT_UPSELL;
                    var6 = var7.bind(var11)(var6);
                    var6 = _closure1_slot10;
                    var6 = var6.bind(var2)(var10);
                    var4 = undefined;
 528:
                    _fun0003_ip = 663; continue _fun0003;
 533:
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
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot15;
                        var2 = var2.UNKNOWN;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onDismiss'] = var9;
                    var8 = _closure1_slot21;
                    var5['markAsDismissed'] = var8;
                    var8 = 20000;
                    var5['duration'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var4 = undefined;
 663:
                    return var4;
 666:
                    return var3;
 669:
                    return var2;
 672:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
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
    var10 = var7.setHideBanner;
    var _closure1_slot9 = var10;
    var7 = var7.setShowBanner;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.MessageFlags;
    var _closure1_slot12 = var10;
    var10 = var7.MessageStates;
    var _closure1_slot13 = var10;
    var7 = var7.MessageTypes;
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.EmojiDisabledReasons;
    var _closure1_slot16 = var10;
    var7 = var7.EmojiIntention;
    var _closure1_slot17 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot18 = var7;
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
 0:
            var6 = arg1;
            var7 = arg2;
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
            var8 = _closure1_slot19;
            var4 = var9;
            if(!(var5 == var9)) { _fun0004_ip = 59; continue _fun0004 }
 57:
            var4 = {};
 59:
            var8 = var8.bind(var1)(var4);
            var _closure2_slot0 = var8;
            if(!(var5 != var9)) { _fun0004_ip = 857; continue _fun0004 }
 75:
            var4 = var8.id;
            if(!(var5 == var4)) { _fun0004_ip = 100; continue _fun0004 }
 84:
            var10 = var8.name;
            var4 = '';
            if(!(var4 !== var10)) { _fun0004_ip = 857; continue _fun0004 }
 100:
            var4 = var7.getGuildId;
            var13 = var4.bind(var7)();
            var10 = _closure1_slot8;
            var4 = var10.getCurrentUser;
            var4 = var4.bind(var10)();
            var10 = var5 != var13;
            var11 = null;
            if(!var10) { _fun0004_ip = 176; continue _fun0004 }
 132:
            var12 = var5 == var4;
            var10 = undefined;
            if(var12) { _fun0004_ip = 146; continue _fun0004 }
 141:
            var10 = var4.id;
 146:
            var10 = var5 != var10;
            var11 = null;
            if(!var10) { _fun0004_ip = 176; continue _fun0004 }
 155:
            var12 = _closure1_slot7;
            var10 = var12.getMember;
            var4 = var4.id;
            var11 = var10.bind(var12)(var13, var4);
 176:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 13;
            var4 = var12[var4];
            var10 = var10.bind(var1)(var4);
            var4 = var10.isMemberCommunicationDisabled;
            var4 = var4.bind(var10)(var11);
            var11 = _closure1_slot1;
            var10 = 14;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.bind(var1)(var7);
            if(!var10) { _fun0004_ip = 857; continue _fun0004 }
 234:
            var10 = var7.isArchivedLockedThread;
            var10 = var10.bind(var7)();
            if(var10) { _fun0004_ip = 857; continue _fun0004 }
 250:
            var11 = var6.state;
            var10 = _closure1_slot13;
            var10 = var10.SEND_FAILED;
            if(!(var11 !== var10)) { _fun0004_ip = 857; continue _fun0004 }
 272:
            var11 = var6.type;
            var10 = _closure1_slot14;
            var10 = var10.THREAD_STARTER_MESSAGE;
            if(!(var11 !== var10)) { _fun0004_ip = 857; continue _fun0004 }
 294:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 15;
            var10 = var12[var10];
            var13 = var11.bind(var1)(var10);
            var12 = var13.hasFlag;
            var11 = var6.flags;
            var10 = _closure1_slot12;
            var10 = var10.EPHEMERAL;
            var10 = var12.bind(var13)(var11, var10);
            if(var10) { _fun0004_ip = 857; continue _fun0004 }
 347:
            if(var4) { _fun0004_ip = 857; continue _fun0004 }
 353:
            var11 = var6.reactions;
            var10 = var11.some;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!var1) { _fun0005_ip = 61; continue _fun0005 }
 55:
                    var1 = var2.me;
 61:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4);
            if(var4) { _fun0004_ip = 857; continue _fun0004 }
 383:
            var4 = _closure1_slot20;
            if(!(var5 == var9)) { _fun0004_ip = 393; continue _fun0004 }
 391:
            var9 = {};
 393:
            var4 = var4.bind(var1)(var9);
            if(!(var5 == var4)) { _fun0004_ip = 450; continue _fun0004 }
 402:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 17;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.showDoubleTapErrorToast;
            var9 = {};
            var12 = var8.name;
            var9['emojiName'] = var12;
            var9 = var10.bind(var11)(var9);
            _fun0004_ip = 857; continue _fun0004;
 450:
            if(!(var5 != var4)) { _fun0004_ip = 534; continue _fun0004 }
 454:
            var10 = {};
            var10['emoji'] = var4;
            var10['channel'] = var7;
            var4 = _closure1_slot17;
            var4 = var4.REACTION;
            var10['intention'] = var4;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 18;
            var4 = var11[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.getEmojiUnavailableReason;
            var4 = var4.bind(var9)(var10);
            var9 = _closure1_slot16;
            var9 = var9.PREMIUM_LOCKED;
            if(!(var4 !== var9)) { _fun0004_ip = 773; continue _fun0004 }
 527:
            if(!(var5 == var4)) { _fun0004_ip = 726; continue _fun0004 }
 534:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 22;
            var10 = var9[var4];
            var11 = var5.bind(var1)(var10);
            var10 = var11.triggerHapticFeedback;
            var4 = var9[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.HapticFeedbackTypes;
            var4 = var4.IMPACT_LIGHT;
            var4 = var10.bind(var11)(var4);
            var4 = 23;
            var10 = var9[var4];
            var11 = var5.bind(var1)(var10);
            var10 = var11.addReaction;
            var7 = var7.id;
            var16 = var6.id;
            var4 = var9[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.ReactionLocations;
            var14 = var4.DOUBLE_TAP;
            var18 = var11;
            var17 = var7;
            var15 = var8;
            var4 = var18[var10](var17, var16, var15, var14, var13);
            var4 = _closure1_slot9;
            var4 = var4.bind(var1)();
            var4 = 24;
            var4 = var9[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.UNSAFE_markDismissibleContentAsDismissed;
            var4 = 25;
            var4 = var9[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var5 = var4.DOUBLE_TAP_TO_REACT_REMINDER;
            var4 = {};
            var9 = _closure1_slot15;
            var9 = var9.INDIRECT_ACTION;
            var4['dismissAction'] = var9;
            var4 = var6.bind(var7)(var5, var4);
            _fun0004_ip = 857; continue _fun0004;
 726:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 17;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showDoubleTapErrorToast;
            var4 = {};
            var7 = var8.name;
            var4['emojiName'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = undefined;
            return var4;
 773:
            var5 = _closure1_slot4;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 20;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 19;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 21;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.openAlert;
            var3 = _closure1_slot11;
            var6 = _closure1_slot18;
            var2 = {};
            var8 = var8.name;
            var2['emojiName'] = var8;
            var2 = var6.bind(var1)(var7, var2);
            var2 = var4.bind(var5)(var3, var2);
            var2 = undefined;
            return var2;
 857:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var5;
    var5 = function areEmojisEqual(arg1, arg2) {
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
    var3['areEmojisEqual'] = var5;
    var3['markDoubleTapDismissed'] = var4;
    var2 = function initializeDoubleTapEmojiAndUpsell() {
        var1 = undefined;
        var4 = _closure1_slot22;
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