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
            var1 = 7;
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
    var _closure1_slot11 = var6;
    var5 = function reactionEmojiFromSettingsValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.emojiName;
            var1 = var2.emojiId;
            var3 = var2.animated;
            var2 = null;
            var5 = var2 == var1;
            var9 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 3; continue _fun0002 }
case 4:
            var5 = '0';
            var4 = undefined;
            if(!(var5 !== var1)) { _fun0002_ip = 3; continue _fun0002 }
case 5:
            var4 = var1;
case 3:
            var1 = var2 == var8;
            var6 = undefined;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = '';
            var6 = undefined;
            if(!(var1 !== var8)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var1 = var8;
            if(!(var2 == var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 7;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.convertNameToSurrogate;
            var1 = var5.bind(var7)(var8);
case 9:
            var6 = var1;
case 6:
            var1 = {};
            var7 = var2 != var6;
            var5 = '';
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var6;
case 11:
            var1['name'] = var5;
            var1['id'] = var4;
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = var3;
case 13:
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function disambiguatedEmojiFromSettingsValue(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.emojiName;
            var3 = var2.emojiId;
            var2 = null;
            var4 = var2 == var3;
            var6 = undefined;
            var7 = undefined;
            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = '0';
            var7 = undefined;
            if(!(var4 !== var3)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var7 = var3;
case 15:
            var3 = var2 == var1;
            var5 = undefined;
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 2:
            var3 = '';
            var5 = undefined;
            if(!(var3 !== var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = var1;
case 18:
            var3 = var2 != var7;
            var1 = null;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = _closure1_slot5;
            var3 = var4.getCustomEmojiById;
            var1 = var3.bind(var4)(var7);
case 20:
            if(!(var2 == var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getByName;
            var2 = var3.bind(var4)(var5);
case 24:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.isContentShown;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.EmojiDisabledReasons;
    var _closure1_slot8 = var10;
    var7 = var7.EmojiIntention;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getFallbackDoubleTapDisambiguatedEmoji'] = var6;
    var3['reactionEmojiFromSettingsValue'] = var5;
    var3['disambiguatedEmojiFromSettingsValue'] = var4;
    var4 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var10 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = var4.DoubleTapReactionEmoji;
            var4 = var5.getSetting;
            var14 = var4.bind(var5)();
            var4 = null;
            var6 = var4 == var14;
            var5 = undefined;
            if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var5 = var14.disableDoubleTap;
case 26:
            var13 = true;
            if(!(var13 !== var5)) { _fun0004_ip = 28; continue _fun0004 }
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReactToMessage;
            var5 = var5.bind(var6)(var9, var10);
            if(!var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var6 = _closure1_slot12;
            var5 = var14;
            if(!(var4 == var14)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var5 = {};
case 30:
            var12 = var6.bind(var1)(var5);
            var _closure2_slot0 = var12;
            if(!(var4 != var14)) { _fun0004_ip = 32; continue _fun0004 }
case 24:
            var5 = var12.id;
            var6 = var4 == var5;
            var8 = var12;
            var5 = false;
            if(!var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var7 = var12.name;
            var6 = '';
            var8 = var12;
            var5 = false;
            if(!(var6 === var7)) { _fun0004_ip = 33; continue _fun0004 }
case 32:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 7;
            var6 = var11[var6];
            var11 = var7.bind(var1)(var6);
            var7 = var11.convertNameToSurrogate;
            var6 = 'heart';
            var11 = var7.bind(var11)(var6);
            var7 = '';
            var6 = null;
            if(!(var7 !== var11)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var7 = {};
            var7['name'] = var11;
            var7['id'] = var1;
            var11 = false;
            var7['animated'] = var11;
            var6 = var7;
case 35:
            if(!(var4 != var6)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            _closure2_slot0 = var6;
            var8 = var6;
            var5 = true;
case 33:
            var11 = var9.reactions;
            var7 = var11.some;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.emojiEquals;
                    var3 = var2.emoji;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 39:
                    var1 = var2.me;
case 19:
                    return var1;
                }
            };
            var6 = var7.bind(var11)(var6);
            if(var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            if(var5) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var7 = _closure1_slot13;
            var6 = var14;
            if(!(var4 == var6)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var6 = {};
case 44:
            var12 = var7.bind(var1)(var6);
            _fun0004_ip = 46; continue _fun0004;
case 42:
            var6 = _closure1_slot11;
            var12 = var6.bind(var1)();
case 46:
            if(!(var4 == var12)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 49:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 13;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.showDoubleTapErrorToast;
            var5 = {};
            var15 = var4 == var14;
            var11 = undefined;
            if(var15) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var11 = var14.emojiName;
case 50:
            var5['emojiName'] = var11;
            var5 = var6.bind(var7)(var5);
            _fun0004_ip = 28; continue _fun0004;
case 47:
            if(!(var4 != var12)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var7 = {};
            var7['emoji'] = var12;
            var7['channel'] = var10;
            var5 = _closure1_slot9;
            var5 = var5.REACTION;
            var7['intention'] = var5;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getEmojiUnavailableReason;
            var7 = var5.bind(var6)(var7);
            var5 = _closure1_slot8;
            var5 = var5.PREMIUM_LOCKED;
            if(!(var7 !== var5)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            if(!(var4 == var7)) { _fun0004_ip = 56; continue _fun0004 }
case 52:
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 11;
            var6 = var4[var5];
            var14 = var11.bind(var1)(var6);
            var6 = var14.triggerHapticFeedback;
            var5 = var4[var5];
            var5 = var11.bind(var1)(var5);
            var5 = var5.HapticFeedbackTypes;
            var5 = var5.IMPACT_LIGHT;
            var5 = var6.bind(var14)(var5);
            var5 = 12;
            var6 = var4[var5];
            var16 = var11.bind(var1)(var6);
            var15 = var16.addReaction;
            var14 = var10.id;
            var21 = var9.id;
            var5 = var4[var5];
            var5 = var11.bind(var1)(var5);
            var5 = var5.ReactionLocations;
            var19 = var5.DOUBLE_TAP;
            var23 = var16;
            var22 = var14;
            var20 = var8;
            var5 = var23[var15](var22, var21, var20, var19, var18);
            var6 = 18;
            var5 = var4[var6];
            var17 = var11.bind(var1)(var5);
            var16 = var17.UNSAFE_markDismissibleContentAsDismissed;
            var14 = 19;
            var5 = var4[var14];
            var5 = var11.bind(var1)(var5);
            var5 = var5.DismissibleContent;
            var15 = var5.DOUBLE_TAP_TO_REACT_REMINDER;
            var5 = {};
            var18 = _closure1_slot7;
            var18 = var18.INDIRECT_ACTION;
            var5['dismissAction'] = var18;
            var5 = var16.bind(var17)(var15, var5);
            var5 = _closure1_slot4;
            var4 = var4[var14];
            var4 = var11.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
            var4 = var5.bind(var1)(var4);
            if(!var4) { _fun0004_ip = 28; continue _fun0004 }
case 57:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var6];
            var11 = var5.bind(var1)(var6);
            var6 = var11.UNSAFE_markDismissibleContentAsDismissed;
            var4 = var4[var14];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var5 = var4.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
            var4 = {};
            var14 = _closure1_slot7;
            var14 = var14.INDIRECT_ACTION;
            var4['dismissAction'] = var14;
            var4['forceTrack'] = var13;
            var4 = var6.bind(var11)(var5, var4);
case 28:
            return var1;
case 56:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 13;
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
case 54:
            var5 = _closure1_slot3;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 16;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 15;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.openAlert;
            var4 = _closure1_slot6;
            var7 = _closure1_slot10;
            var3 = {};
            var12 = var12.name;
            var3['emojiName'] = var12;
            var3 = var7.bind(var1)(var11, var3);
            var3 = var5.bind(var6)(var4, var3);
            var3 = undefined;
            return var3;
case 40:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var4 = var6.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.HapticFeedbackTypes;
            var2 = var2.IMPACT_LIGHT;
            var2 = var3.bind(var4)(var2);
            var5 = 12;
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
case 37:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var4;
    var2 = function areEmojisEqual(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0006_ip = 60; continue _fun0006 }
case 58:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0006_ip = 61; continue _fun0006 }
case 15:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
case 61:
            _fun0006_ip = 62; continue _fun0006;
case 60:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
case 62:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var2;
    return var1;
})();