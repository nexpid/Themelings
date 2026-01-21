// app/modules/messages/native/renderer/transformMessageComponents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = function transformToRowGeneratedComponent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var22 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var22;
            var _closure2_slot1 = var6;
            var8 = function getChildComponent(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var2 = var4.bind(var2)(var3, var1);
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var _closure2_slot7 = var8;
            var5 = var22.message;
            var _closure2_slot2 = var5;
            var4 = var22.interaction;
            var15 = var22.guildId;
            var11 = var22.shouldDisableInteractiveComponents;
            var17 = var22.shouldObscureSpoiler;
            var _closure2_slot3 = var17;
            var16 = var22.enabledContentHarmTypeFlags;
            var _closure2_slot4 = var16;
            var1 = var22.shouldShowMosaicMediaDescriptions;
            var _closure2_slot5 = var1;
            var12 = var22.shouldAgeVerify;
            var _closure2_slot6 = var12;
            var13 = var22.colors;
            var9 = var22.markdownConfigs;
            var14 = var6.type;
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 5;
            var3 = var3[var10];
            var7 = undefined;
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ACTION_ROW;
            if(!(var3 !== var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var14)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SECTION;
            if(!(var3 !== var14)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_DISPLAY;
            if(!(var3 !== var14)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.THUMBNAIL;
            if(!(var3 !== var14)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MEDIA_GALLERY;
            if(!(var3 !== var14)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE;
            if(!(var3 !== var14)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SEPARATOR;
            if(!(var3 !== var14)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
            if(!(var3 !== var14)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTENT_INVENTORY_ENTRY;
            if(!(var3 !== var14)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTAINER;
            if(!(var3 !== var14)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.LABEL;
            if(!(var3 !== var14)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE_UPLOAD;
            if(!(var3 !== var14)) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHECKPOINT_CARD;
            if(!(var3 !== var14)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.RADIO_GROUP;
            if(!(var3 !== var14)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var18.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHECKBOX_GROUP;
            if(!(var3 !== var14)) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var14.bind(var7)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHECKBOX;
case 38:
            var3 = null;
            return var3;
case 36:
            var24 = var6.checkpointData;
            var14 = _closure1_slot4;
            var3 = _closure1_slot3;
            var19 = var14.bind(var7)(var6, var3);
            var20 = global;
            var3 = var20.Intl;
            var26 = var3.NumberFormat;
            var14 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 7;
            var3 = var23[var21];
            var3 = var14.bind(var7)(var3);
            var3 = var3.intl;
            var34 = var3.currentLocale;
            var3 = var26.prototype;
            var18 = Object.create(var3, {constructor: {value: var26}});
            var33 = {'notation': 'compact', 'compactDisplay': 'short'};
            var35 = var18;
            var3 = new var35[var26](var34, var33, var32);
            var28 = var3 instanceof Object ? var3 : var18;
            var3 = 17;
            var3 = var23[var3];
            var3 = var14.bind(var7)(var3);
            var26 = var3.CheckpointExperiment;
            var18 = var26.getConfig;
            var3 = {};
            var25 = 'transformMessageComponents';
            var3['location'] = var25;
            var3 = var18.bind(var26)(var3);
            var18 = var3.enabled;
            var3 = 18;
            var3 = var23[var3];
            var3 = var14.bind(var7)(var3);
            var23 = var3.CheckpointCardExperiment;
            var14 = var23.getConfig;
            var3 = {};
            var3['location'] = var25;
            var3 = var14.bind(var23)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = {};
            var23 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var10];
            var14 = var23.bind(var7)(var14);
            var14 = var14.ComponentType;
            var14 = var14.UNKNOWN;
            var3['type'] = var14;
            var14 = var6.id;
            var3['id'] = var14;
            _fun0001_ip = 43; continue _fun0001;
case 41:
            var14 = {};
            var34 = var14;
            var33 = var19;
            var19 = copyDataProperties(var34, var33);
            var19 = {};
            var34 = var19;
            var33 = var24;
            var23 = copyDataProperties(var34, var33);
            var25 = var24.cardId;
            var23 = var25.toString;
            var25 = var23.bind(var25)();
            var23 = 'cardId';
            var19[var23] = var25;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 19;
            var25 = var25[var23];
            var27 = var26.bind(var7)(var25);
            var26 = var27.getCardAssetUrl;
            var25 = var24.cardId;
            var26 = var26.bind(var27)(var25);
            var25 = 'cardAssetUrl';
            var19[var25] = var26;
            var25 = var5.author;
            var26 = var25.id;
            var25 = 'authorId';
            var19[var25] = var26;
            var27 = var28.format;
            var30 = var24.powerLevel;
            var26 = null;
            var31 = var26 != var30;
            var25 = 0;
            if(!var31) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var25 = var30;
case 44:
            var27 = var27.bind(var28)(var25);
            var25 = 'powerLevel';
            var19[var25] = var27;
            var28 = var20.Math;
            var27 = var28.min;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var23];
            var25 = var25.bind(var7)(var20);
            var20 = var25.getCheckpointPowerBarUnits;
            var30 = var24.powerLevelPercentile;
            var31 = var26 != var30;
            var29 = 0;
            if(!var31) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var29 = var30;
case 46:
            var25 = var20.bind(var25)(var29);
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 20;
            var20 = var30[var20];
            var29 = var29.bind(var7)(var20);
            var20 = var29.isIOS;
            var29 = var20.bind(var29)();
            var20 = 10;
            if(!var29) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var20 = 9;
case 48:
            var25 = var27.bind(var28)(var25, var20);
            var20 = 'powerLevelUnits';
            var19[var20] = var25;
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var23 = var20[var23];
            var28 = var27.bind(var7)(var23);
            var25 = var28.getVoiceDurationString;
            var23 = var24.totalVoiceMinutes;
            var25 = var25.bind(var28)(var23);
            var23 = 'voiceString';
            var19[var23] = var25;
            var28 = var24.numEmojisSent;
            var25 = var28.toLocaleString;
            var23 = var20[var21];
            var23 = var27.bind(var7)(var23);
            var23 = var23.intl;
            var23 = var23.currentLocale;
            var25 = var25.bind(var28)(var23);
            var23 = 'reactionString';
            var19[var23] = var25;
            var25 = var24.numMessagesSent;
            var23 = var25.toLocaleString;
            var20 = var20[var21];
            var20 = var27.bind(var7)(var20);
            var20 = var20.intl;
            var20 = var20.currentLocale;
            var23 = var23.bind(var25)(var20);
            var20 = 'messagesString';
            var19[var20] = var23;
            var20 = var24.topEmoji;
            var20 = var26 != var20;
            var23 = undefined;
            if(!var20) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var20 = {};
            var33 = var24.topEmoji;
            var34 = var20;
            var25 = copyDataProperties(var34, var33);
            var25 = var24.topEmoji;
            var25 = var25.emojiId;
            var26 = var26 == var25;
            var25 = undefined;
            if(!var26) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 21;
            var26 = var28[var26];
            var27 = var27.bind(var7)(var26);
            var26 = var27.convertSurrogateToName;
            var24 = var24.topEmoji;
            var24 = var24.emojiName;
            var25 = var26.bind(var27)(var24);
case 52:
            var24 = 'emojiSurrogateName';
            var20[var24] = var25;
            var23 = var20;
case 50:
            var20 = 'topEmoji';
            var19[var20] = var23;
            var20 = undefined;
            if(!var18) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var18 = {};
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = var26[var21];
            var21 = var23.bind(var7)(var21);
            var24 = var21.intl;
            var23 = var24.string;
            var25 = _closure1_slot1;
            var21 = 22;
            var21 = var26[var21];
            var21 = var25.bind(var7)(var21);
            var21 = var21.r8GEbK;
            var21 = var23.bind(var24)(var21);
            var18['ariaDescription'] = var21;
            var20 = var18;
case 54:
            var18 = 'clickable';
            var19[var18] = var20;
            var18 = 'checkpointData';
            var14[var18] = var19;
            var3 = var14;
case 43:
            return var3;
case 33:
            var3 = null;
            return var3;
case 31:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var14 = copyDataProperties(var34, var33);
            var19 = var6.components;
            var18 = var19.map;
            var14 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var19 = var18.bind(var19)(var14);
            var18 = var19.filter;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 4;
            var14 = var21[var14];
            var14 = var20.bind(var7)(var14);
            var14 = var14.isNotNullish;
            var18 = var18.bind(var19)(var14);
            var14 = 'components';
            var3[var14] = var18;
            var18 = var6.accentColor;
            var14 = null;
            var18 = var14 != var18;
            var19 = null;
            if(!var18) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var20 = _closure1_slot5;
            var18 = var6.accentColor;
            var19 = var20.bind(var7)(var18);
case 56:
            var18 = 'accentColor';
            var3[var18] = var19;
            var19 = var6.spoiler;
            var18 = 'isSpoiler';
            var3[var18] = var19;
            var18 = var6.spoiler;
            var19 = null;
            if(!var18) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 7;
            var20 = var24[var18];
            var20 = var23.bind(var7)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var24[var18];
            var18 = var23.bind(var7)(var18);
            var18 = var18.t;
            var18 = var18.C8ci33;
            var19 = var20.bind(var21)(var18);
case 58:
            var18 = 'spoilerDescription';
            var3[var18] = var19;
            var13 = var13.embedBackgroundColor;
            var18 = var14 != var13;
            var14 = null;
            if(!var18) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var14 = var13;
case 60:
            var13 = 'themedBackgroundColor';
            var3[var13] = var14;
            return var3;
case 29:
            var3 = {};
            var13 = var6.type;
            var3['type'] = var13;
            var13 = var6.id;
            var3['id'] = var13;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 16;
            var13 = var18[var13];
            var18 = var14.bind(var7)(var13);
            var14 = var18.transformToRowGeneratedContentInventoryEntryComponent;
            var13 = {};
            var13['component'] = var6;
            var13['message'] = var5;
            var13 = var14.bind(var18)(var13);
            var3['contentInventoryEntry'] = var13;
            return var3;
case 27:
            var3 = null;
            return var3;
case 25:
            return var6;
case 23:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 12;
            var3 = var14[var3];
            var18 = var13.bind(var7)(var3);
            var14 = var18.getUnfurledMediaItemObscurityProps;
            var3 = {};
            var25 = 'file';
            var3['type'] = var25;
            var13 = var6.file;
            var3['mediaItem'] = var13;
            var20 = var6.spoiler;
            var13 = null;
            var19 = var13 != var20;
            if(!var19) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var19 = var20;
case 62:
            var3['isSpoilered'] = var19;
            var19 = var5.author;
            var19 = var19.bot;
            var3['isAuthorBot'] = var19;
            var3['shouldObscureSpoiler'] = var17;
            var3['shouldAgeVerify'] = var12;
            var3['enabledContentHarmTypeFlags'] = var16;
            var3 = var14.bind(var18)(var3);
            var23 = var3.isSpoiler;
            var21 = var3.spoilerDescription;
            var14 = var3.isObscured;
            var19 = var3.obscureDescription;
            var20 = var3.obscureAwaitingScan;
            var18 = var14;
            if(!var14) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var3 = 14;
            var3 = var26[var3];
            var24 = var24.bind(var7)(var3);
            var3 = var24.isVerifiedTeen;
            var18 = var3.bind(var24)();
case 64:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var24 = copyDataProperties(var34, var33);
            var26 = _closure1_slot11;
            var24 = var6.file;
            var24 = var26.bind(var7)(var24, var22);
            var3[var25] = var24;
            var25 = var6.name;
            if(!(var13 == var25)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 7;
            var26 = var29[var24];
            var26 = var28.bind(var7)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var24 = var29[var24];
            var24 = var28.bind(var7)(var24);
            var24 = var24.t;
            var24 = var24.GnuJ5u;
            var25 = var26.bind(var27)(var24);
case 66:
            var24 = 'name';
            var3[var24] = var25;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var24 = 15;
            var24 = var26[var24];
            var25 = var25.bind(var7)(var24);
            var24 = var25.filesize;
            var26 = var6.size;
            var27 = var13 != var26;
            var13 = 0;
            if(!var27) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var13 = var26;
case 68:
            var24 = var24.bind(var25)(var13);
            var13 = 'size';
            var3[var13] = var24;
            var13 = 'isSpoiler';
            var3[var13] = var23;
            var13 = 'spoilerDescription';
            var3[var13] = var21;
            var13 = 'isObscure';
            var3[var13] = var14;
            var13 = 'isObscureAwaitingScan';
            var3[var13] = var20;
            var13 = 'obscureDescription';
            var3[var13] = var19;
            var19 = var14;
            if(!var19) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var19 = var12;
case 70:
            var13 = 'verifyAge';
            var3[var13] = var19;
            var13 = 'obscureHideControls';
            var3[var13] = var18;
            var13 = 'obscureIsOpaque';
            var3[var13] = var14;
            return var3;
case 21:
            var14 = var6.items;
            var13 = var14.map;
            var3 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var2 = _closure1_slot10;
                    var1 = var7.media;
                    var8 = undefined;
                    var6 = var2.bind(var8)(var1);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var10 = var4.bind(var8)(var1);
                    var2 = var10.getUnfurledMediaItemObscurityProps;
                    var1 = {};
                    var9 = 13;
                    var3 = var3[var9];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.MediaGalleryItemType;
                    var4 = var3.IMAGE;
                    var3 = 'image';
                    if(!(var6 !== var4)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var4 = var11.bind(var8)(var4);
                    var4 = var4.MediaGalleryItemType;
                    var11 = var4.VIDEO;
                    var4 = 'generic';
                    if(!(var6 === var11)) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var4 = 'video';
case 74:
                    var3 = var4;
case 72:
                    var1['type'] = var3;
                    var3 = var7.media;
                    var1['mediaItem'] = var3;
                    var11 = var7.spoiler;
                    var4 = null;
                    var3 = var4 != var11;
                    if(!var3) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                    var3 = var11;
case 76:
                    var1['isSpoilered'] = var3;
                    var11 = _closure2_slot2;
                    var11 = var11.author;
                    var11 = var11.bot;
                    var1['isAuthorBot'] = var11;
                    var11 = _closure2_slot3;
                    var1['shouldObscureSpoiler'] = var11;
                    var11 = _closure2_slot4;
                    var1['enabledContentHarmTypeFlags'] = var11;
                    var11 = _closure2_slot6;
                    var1['shouldAgeVerify'] = var11;
                    var1 = var2.bind(var10)(var1);
                    var15 = var1.isSpoiler;
                    var14 = var1.spoilerDescription;
                    var10 = var1.isObscured;
                    var12 = var1.obscureDescription;
                    var13 = var1.obscureAwaitingScan;
                    var11 = var10;
                    if(!var10) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                    var2 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 14;
                    var1 = var16[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.isVerifiedTeen;
                    var11 = var1.bind(var2)();
case 78:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.MediaGalleryItemType;
                    var1 = var1.VIDEO;
                    var16 = undefined;
                    if(!(var6 === var1)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                    var1 = var7.media;
                    var17 = var1.proxyUrl;
                    var2 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var1 = 27;
                    var1 = var18[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.toURLSafe;
                    var17 = var1.bind(var2)(var17);
                    var2 = var4 == var17;
                    var1 = null;
                    if(var2) { _fun0003_ip = 82; continue _fun0003 }
case 83:
                    var20 = var17.searchParams;
                    var19 = var20.set;
                    var18 = 'format';
                    var2 = 'webp';
                    var2 = var19.bind(var20)(var18, var2);
                    var2 = var17.toString;
                    var1 = var2.bind(var17)();
case 82:
                    var2 = var4 == var1;
                    var16 = var1;
                    var1 = null;
                    if(var2) { _fun0003_ip = 84; continue _fun0003 }
case 80:
                    var2 = {};
                    var25 = var2;
                    var24 = var7;
                    var17 = copyDataProperties(var25, var24);
                    var18 = _closure1_slot11;
                    var17 = var7.media;
                    var7 = _closure2_slot0;
                    var17 = var18.bind(var8)(var17, var7);
                    var7 = 'media';
                    var2[var7] = var17;
                    var7 = 'mediaType';
                    var2[var7] = var6;
                    var7 = 'videoPreviewUrl';
                    var2[var7] = var16;
                    var7 = 'isSpoiler';
                    var2[var7] = var15;
                    var7 = 'spoilerDescription';
                    var2[var7] = var14;
                    var7 = 'isObscure';
                    var2[var7] = var10;
                    var7 = 'isObscureAwaitingScan';
                    var2[var7] = var13;
                    var7 = 'obscureDescription';
                    var2[var7] = var12;
                    var12 = var10;
                    if(!var12) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var12 = _closure2_slot6;
case 85:
                    var7 = 'verifyAge';
                    var2[var7] = var12;
                    var7 = 'obscureHideControls';
                    var2[var7] = var11;
                    var7 = 'obscureIsOpaque';
                    var2[var7] = var10;
                    var10 = _closure2_slot5;
                    var7 = 'showDescription';
                    var2[var7] = var10;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.MediaGalleryItemType;
                    var7 = var7.VIDEO;
                    if(!(var6 !== var7)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 7;
                    var10 = var13[var7];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.IPzNKE;
                    var10 = var10.bind(var11)(var7);
                    _fun0003_ip = 89; continue _fun0003;
case 87:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 7;
                    var11 = var14[var7];
                    var11 = var13.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var7 = var14[var7];
                    var7 = var13.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.BEWw/7;
                    var10 = var11.bind(var12)(var7);
case 89:
                    var7 = 'descriptionHint';
                    var2[var7] = var10;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.MediaGalleryItemType;
                    var7 = var7.VIDEO;
                    if(!(var6 !== var7)) { _fun0003_ip = 39; continue _fun0003 }
case 90:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 7;
                    var10 = var13[var7];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.fKyfca;
                    var10 = var10.bind(var11)(var7);
                    _fun0003_ip = 91; continue _fun0003;
case 39:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 7;
                    var11 = var14[var7];
                    var11 = var13.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var7 = var14[var7];
                    var7 = var13.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7./SCpvi;
                    var10 = var11.bind(var12)(var7);
case 91:
                    var7 = 'accessibilityRole';
                    var2[var7] = var10;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.MediaGalleryItemType;
                    var5 = var5.VIDEO;
                    var4 = null;
                    if(!(var6 === var5)) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                    var5 = _closure2_slot2;
                    var25 = var5.id;
                    var3 = _closure2_slot1;
                    var23 = var3.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var26 = '';
                    var24 = '_MediaGallery(';
                    var22 = ')_';
                    var21 = arg2;
                    var4 = var26[var8](var25, var24, var23, var22, var21, var20);
case 92:
                    var3 = 'portalId';
                    var2[var3] = var4;
                    var1 = var2;
case 84:
                    return var1;
                }
            };
            var14 = var13.bind(var14)(var3);
            var13 = var14.filter;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 4;
            var3 = var19[var3];
            var3 = var18.bind(var7)(var3);
            var3 = var3.isNotNullish;
            var18 = var13.bind(var14)(var3);
            var14 = var18.length;
            var13 = 0;
            var3 = null;
            if(!(var13 !== var14)) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var13 = {};
            var34 = var13;
            var33 = var6;
            var14 = copyDataProperties(var34, var33);
            var14 = 'items';
            var13[var14] = var18;
            var3 = var13;
case 94:
            return var3;
case 19:
            var13 = _closure1_slot10;
            var3 = var6.media;
            var20 = var13.bind(var7)(var3);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 12;
            var3 = var21[var3];
            var14 = var19.bind(var7)(var3);
            var13 = var14.getUnfurledMediaItemObscurityProps;
            var3 = {};
            var18 = 13;
            var18 = var21[var18];
            var18 = var19.bind(var7)(var18);
            var18 = var18.MediaGalleryItemType;
            var19 = var18.IMAGE;
            var18 = 'generic';
            if(!(var20 === var19)) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var18 = 'image';
case 96:
            var3['type'] = var18;
            var18 = var6.media;
            var3['mediaItem'] = var18;
            var19 = var6.spoiler;
            var18 = null;
            var18 = var18 != var19;
            if(!var18) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var18 = var19;
case 98:
            var3['isSpoilered'] = var18;
            var18 = var5.author;
            var18 = var18.bot;
            var3['isAuthorBot'] = var18;
            var3['shouldObscureSpoiler'] = var17;
            var3['shouldAgeVerify'] = var12;
            var3['enabledContentHarmTypeFlags'] = var16;
            var3 = var13.bind(var14)(var3);
            var20 = var3.isSpoiler;
            var19 = var3.spoilerDescription;
            var13 = var3.isObscured;
            var17 = var3.obscureDescription;
            var18 = var3.obscureAwaitingScan;
            var14 = var13;
            if(!var13) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 14;
            var3 = var21[var3];
            var16 = var16.bind(var7)(var3);
            var3 = var16.isVerifiedTeen;
            var14 = var3.bind(var16)();
case 100:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var16 = copyDataProperties(var34, var33);
            var21 = _closure1_slot11;
            var16 = var6.media;
            var21 = var21.bind(var7)(var16, var22);
            var16 = 'media';
            var3[var16] = var21;
            var16 = 'isSpoiler';
            var3[var16] = var20;
            var16 = 'spoilerDescription';
            var3[var16] = var19;
            var16 = 'isObscure';
            var3[var16] = var13;
            var16 = 'isObscureAwaitingScan';
            var3[var16] = var18;
            var16 = 'obscureDescription';
            var3[var16] = var17;
            var16 = var13;
            if(!var16) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var16 = var12;
case 102:
            var12 = 'verifyAge';
            var3[var12] = var16;
            var12 = 'obscureHideControls';
            var3[var12] = var14;
            var12 = 'obscureIsOpaque';
            var3[var12] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 7;
            var13 = var17[var12];
            var13 = var16.bind(var7)(var13);
            var18 = var13.intl;
            var14 = var18.string;
            var13 = var17[var12];
            var13 = var16.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.IPzNKE;
            var14 = var14.bind(var18)(var13);
            var13 = 'descriptionHint';
            var3[var13] = var14;
            var13 = var17[var12];
            var13 = var16.bind(var7)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var17[var12];
            var12 = var16.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.fKyfca;
            var13 = var13.bind(var14)(var12);
            var12 = 'accessibilityRole';
            var3[var12] = var13;
            return var3;
case 17:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var12 = copyDataProperties(var34, var33);
            var14 = _closure1_slot12;
            var13 = var9.textDisplayComponent;
            var12 = var5.id;
            var9 = var6.content;
            var12 = var14.bind(var7)(var13, var12, var9);
            var9 = 'content';
            var3[var9] = var12;
            return var3;
case 15:
            var3 = var6.accessory;
            var14 = var8.bind(var7)(var3);
            var3 = null;
            var8 = var3 == var14;
            if(var8) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var8 = {};
            var34 = var8;
            var33 = var6;
            var9 = copyDataProperties(var34, var33);
            var13 = var6.components;
            var12 = var13.map;
            var9 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var17 = var12.bind(var13)(var9);
            var16 = var17.filter;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 4;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.isNotNullish;
            var16 = var16.bind(var17)(var9);
            var9 = 'components';
            var8[var9] = var16;
            var9 = 'accessory';
            var8[var9] = var14;
            var9 = 6;
            var9 = var13[var9];
            var12 = var12.bind(var7)(var9);
            var9 = var12.getLayoutComponentErrorText;
            var12 = var9.bind(var12)(var4, var5, var6);
            var9 = 'errorText';
            var8[var9] = var12;
            var3 = var8;
case 104:
            return var3;
case 10:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 10;
            var3 = var13[var3];
            var12 = var9.bind(var7)(var3);
            var8 = var12.getInitialSnowflakeSelectOptions;
            var3 = var5.id;
            var12 = var8.bind(var12)(var6, var3, var15);
            var3 = {};
            var34 = var3;
            var33 = var6;
            var8 = copyDataProperties(var34, var33);
            var8 = 8;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.getActionComponentState;
            var14 = var8.bind(var14)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var14;
            var8 = 11;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.transformSearchableSelectOptions;
            var14 = var8.bind(var14)(var12, var15);
            var8 = 'selectedOptions';
            var3[var8] = var14;
            var8 = 6;
            var8 = var13[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSelectPlaceholder;
            var9 = var8.bind(var9)(var6);
            var8 = 'placeholder';
            var3[var8] = var9;
            var9 = _closure1_slot9;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.label;
                return var1;
            };
            var9 = var9.bind(var7)(var6, var12, var8);
            var8 = 'accessibilityLabel';
            var3[var8] = var9;
            return var3;
case 8:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 9;
            var3 = var13[var3];
            var12 = var9.bind(var7)(var3);
            var8 = var12.getInitialStringSelectOptions;
            var3 = var5.id;
            var12 = var8.bind(var12)(var6, var3);
            var8 = var12.map;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = _closure2_slot1;
                var3 = var2.options;
                var2 = var3.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.value;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var8.bind(var12)(var3);
            var3 = {};
            var34 = var3;
            var33 = var6;
            var8 = copyDataProperties(var34, var33);
            var8 = 8;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.getActionComponentState;
            var14 = var8.bind(var14)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var14;
            var8 = 'selectedOptions';
            var3[var8] = var12;
            var8 = 6;
            var8 = var13[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSelectPlaceholder;
            var9 = var8.bind(var9)(var6);
            var8 = 'placeholder';
            var3[var8] = var9;
            var9 = _closure1_slot9;
            var8 = function(arg1) {
                var1 = _closure2_slot1;
                var2 = var1.options;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.label;
                return var1;
            };
            var9 = var9.bind(var7)(var6, var12, var8);
            var8 = 'accessibilityLabel';
            var3[var8] = var9;
            return var3;
case 6:
            var8 = var6.style;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var9.bind(var7)(var3);
            var3 = var3.ButtonStyle;
            var3 = var3.PREMIUM;
            if(!(var8 !== var3)) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var9 = var6.label;
            _fun0001_ip = 108; continue _fun0001;
case 106:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var8 = var13[var3];
            var8 = var12.bind(var7)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var3 = var13[var3];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.CHa0vN;
            var9 = var8.bind(var10)(var3);
case 108:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var8 = copyDataProperties(var34, var33);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 8;
            var8 = var12[var8];
            var10 = var10.bind(var7)(var8);
            var8 = var10.getActionComponentState;
            var10 = var8.bind(var10)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var10;
            var8 = 'label';
            var3[var8] = var9;
            return var3;
case 4:
            var8 = var6.components;
            var3 = var8.map;
            var2 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9 = var3.bind(var8)(var2);
            var2 = var9.filter;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var1 = var3.bind(var7)(var1);
            var1 = var1.isNotNullish;
            var9 = var2.bind(var9)(var1);
            var1 = {};
            var34 = var1;
            var33 = var6;
            var2 = copyDataProperties(var34, var33);
            var2 = 'components';
            var1[var2] = var9;
            var2 = 6;
            var2 = var8[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getLayoutComponentErrorText;
            var3 = var2.bind(var3)(var4, var5, var6);
            var2 = 'errorText';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getSelectAccessibilityLabel(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 109; continue _fun0004 }
case 111:
            var2 = var3.map;
            var1 = arg3;
            var7 = var2.bind(var3)(var1);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.I/ROH+;
            var1 = {};
            var6 = var7.join;
            var5 = ',';
            var5 = var6.bind(var7)(var5);
            var1['selections'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 109:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var2 = undefined;
            var4 = var6.bind(var2)(var1);
            var3 = var4.getSelectPlaceholder;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = 7;
            var3 = var7[var1];
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.3aednA;
            var1 = {};
            var1['placeholder'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = function getUnfurledMediaItemType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.width;
            var2 = var1.height;
            var7 = var1.contentType;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 112; continue _fun0005 }
case 113:
            var1 = 0;
            if(!(var4 > var1)) { _fun0005_ip = 112; continue _fun0005 }
case 114:
            if(!(var3 != var2)) { _fun0005_ip = 112; continue _fun0005 }
case 115:
            if(!(var2 > var1)) { _fun0005_ip = 112; continue _fun0005 }
case 116:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 23;
            var2 = var2[var5];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isImageContentType;
            var6 = var2.bind(var4)(var7);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            if(var6) { _fun0005_ip = 117; continue _fun0005 }
case 118:
            var5 = var4[var5];
            var6 = var2.bind(var3)(var5);
            var5 = var6.isVideoContentType;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0005_ip = 119; continue _fun0005 }
case 112:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 13;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            var5 = var5.MediaGalleryItemType;
            var5 = var5.VISUAL_PLACEHOLDER;
            return var5;
case 119:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.VIDEO;
            return var1;
case 117:
            var1 = 13;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.IMAGE;
            return var1;
        }
    };
    var _closure1_slot10 = var2;
    var1 = function transformUnfurledMediaItem(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = _closure1_slot10;
            var5 = undefined;
            var6 = var1.bind(var5)(var7);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.MediaGalleryItemType;
            var4 = var1.IMAGE;
            var1 = {};
            var16 = var1;
            var15 = var7;
            var8 = copyDataProperties(var16, var15);
            var8 = 24;
            var8 = var12[var8];
            var10 = var11.bind(var5)(var8);
            var9 = var10.hasFlag;
            var8 = var7.flags;
            var7 = 25;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.UnfurledMediaItemFlags;
            var7 = var7.IS_ANIMATED;
            var8 = var9.bind(var10)(var8, var7);
            var7 = 'srcIsAnimated';
            var1[var7] = var8;
            var7 = var2.shouldShowMedia;
            if(var7) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var7 = 0;
            var1['height'] = var7;
            var1['width'] = var7;
case 120:
            if(!(var6 === var4)) { _fun0006_ip = 122; continue _fun0006 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 26;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.getImageSrc;
            var5 = var1.proxyUrl;
            var8 = var1.width;
            var9 = null;
            var10 = var9 != var8;
            var3 = 0;
            if(!var10) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var3 = var8;
case 123:
            var8 = var1.height;
            var9 = var9 != var8;
            var4 = 0;
            if(!var9) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var4 = var8;
case 125:
            var2 = var2.shouldAutoPlayGifs;
            var13 = !var2;
            var17 = var7;
            var16 = var5;
            var15 = var3;
            var14 = var4;
            var2 = var17[var6](var16, var15, var14, var13, var12);
            var1['proxyUrl'] = var2;
case 122:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function renderMarkdownText(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var8 = arg3;
            var13 = var2.type;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var14 = '';
            var3 = '-';
            var11 = arg2;
            var12 = var3;
            var10 = var3;
            var9 = var8;
            var5 = var14[var5](var13, var12, var11, var10, var9, var8);
            var4 = _closure1_slot7;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            var4 = null;
            if(!(var4 == var1)) { _fun0007_ip = 127; continue _fun0007 }
case 128:
            var7 = {};
            var12 = var2.parserState;
            var13 = var7;
            var2 = copyDataProperties(var13, var12);
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var4);
            var4 = var6.parseToAST;
            var2 = true;
            var2 = var4.bind(var6)(var8, var2, var7);
            var4 = _closure1_slot7;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
case 127:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = ['checkpointData'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.processColor;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
    var _closure1_slot6 = var5;
    var5 = 28;
    var5 = var7[var5];
    var9 = var10.bind(var1)(var5);
    var5 = {'max': inf, 'maxAge': null, 'updateAgeOnGet': true};
    var8 = 29;
    var8 = var7[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.Millis;
    var10 = var8.MINUTE;
    var8 = 15;
    var8 = var8 * var10;
    var5['maxAge'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var5;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/transformMessageComponents.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function transformMessageComponents(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var6 = {};
            var1 = 'textDisplayComponent';
            var6['type'] = var1;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var9 = var7.bind(var5)(var3);
            var8 = var9.getInitialParserStateFromMessage;
            var7 = var4.message;
            var3 = _closure1_slot6;
            var3 = var8.bind(var9)(var7, var3);
            var6['parserState'] = var3;
            var3 = {};
            var11 = var3;
            var10 = var4;
            var7 = copyDataProperties(var11, var10);
            var7 = {};
            var7['textDisplayComponent'] = var6;
            var6 = 'markdownConfigs';
            var3[var6] = var7;
            var _closure2_slot0 = var3;
            var6 = var4.message;
            var3 = var6.getContentMessage;
            var3 = var3.bind(var6)();
            var6 = null;
            if(!(var6 == var3)) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var3 = var4.message;
case 129:
            var4 = var3.components;
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getUnfurledMediaItemType'] = var2;
    return var1;
})();