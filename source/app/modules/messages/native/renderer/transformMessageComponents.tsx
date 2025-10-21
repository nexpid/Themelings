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
            var23 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var23;
            var _closure2_slot1 = var6;
            var8 = function getChildComponent(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
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
            var5 = var23.message;
            var _closure2_slot2 = var5;
            var4 = var23.interaction;
            var15 = var23.guildId;
            var11 = var23.shouldDisableInteractiveComponents;
            var17 = var23.shouldObscureSpoiler;
            var _closure2_slot3 = var17;
            var16 = var23.enabledContentHarmTypeFlags;
            var _closure2_slot4 = var16;
            var1 = var23.shouldShowMosaicMediaDescriptions;
            var _closure2_slot5 = var1;
            var3 = var23.shouldAgeVerify;
            var _closure2_slot6 = var3;
            var13 = var23.colors;
            var9 = var23.markdownConfigs;
            var14 = var6.type;
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 4;
            var12 = var7[var10];
            var7 = undefined;
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.ACTION_ROW;
            if(!(var12 !== var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.BUTTON;
            if(!(var12 !== var14)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.STRING_SELECT;
            if(!(var12 !== var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.USER_SELECT;
            if(!(var12 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.ROLE_SELECT;
            if(!(var12 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.MENTIONABLE_SELECT;
            if(!(var12 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CHANNEL_SELECT;
            if(!(var12 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SECTION;
            if(!(var12 !== var14)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.TEXT_DISPLAY;
            if(!(var12 !== var14)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.THUMBNAIL;
            if(!(var12 !== var14)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.MEDIA_GALLERY;
            if(!(var12 !== var14)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.FILE;
            if(!(var12 !== var14)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SEPARATOR;
            if(!(var12 !== var14)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.TEXT_INPUT;
            if(!(var12 !== var14)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CONTENT_INVENTORY_ENTRY;
            if(!(var12 !== var14)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CONTAINER;
            if(!(var12 !== var14)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.LABEL;
            if(!(var12 !== var14)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.FILE_UPLOAD;
            if(!(var12 !== var14)) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CHECKPOINT_CARD;
            if(!(var12 !== var14)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var12 = null;
            return var12;
case 36:
            var12 = {};
            var14 = var6.type;
            var12['type'] = var14;
            var14 = var6.id;
            var12['id'] = var14;
            var14 = {};
            var12['checkpointData'] = var14;
            return var12;
case 33:
            var12 = null;
            return var12;
case 31:
            var12 = {};
            var34 = var12;
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
            var14 = 3;
            var14 = var21[var14];
            var14 = var20.bind(var7)(var14);
            var14 = var14.isNotNullish;
            var18 = var18.bind(var19)(var14);
            var14 = 'components';
            var12[var14] = var18;
            var18 = var6.accentColor;
            var14 = null;
            var18 = var14 != var18;
            var19 = null;
            if(!var18) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var20 = _closure1_slot3;
            var18 = var6.accentColor;
            var19 = var20.bind(var7)(var18);
case 38:
            var18 = 'accentColor';
            var12[var18] = var19;
            var19 = var6.spoiler;
            var18 = 'isSpoiler';
            var12[var18] = var19;
            var18 = var6.spoiler;
            var19 = null;
            if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 6;
            var20 = var24[var18];
            var20 = var22.bind(var7)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var24[var18];
            var18 = var22.bind(var7)(var18);
            var18 = var18.t;
            var18 = var18.C8ci39;
            var19 = var20.bind(var21)(var18);
case 40:
            var18 = 'spoilerDescription';
            var12[var18] = var19;
            var13 = var13.embedBackgroundColor;
            var18 = var14 != var13;
            var14 = null;
            if(!var18) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = var13;
case 42:
            var13 = 'themedBackgroundColor';
            var12[var13] = var14;
            return var12;
case 29:
            var12 = {};
            var13 = var6.type;
            var12['type'] = var13;
            var13 = var6.id;
            var12['id'] = var13;
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
            var12['contentInventoryEntry'] = var13;
            return var12;
case 27:
            var12 = null;
            return var12;
case 25:
            return var6;
case 23:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var14 = var13.bind(var7)(var12);
            var13 = var14.getUnfurledMediaItemObscurityProps;
            var12 = {};
            var27 = 'file';
            var12['type'] = var27;
            var18 = var6.file;
            var12['mediaItem'] = var18;
            var20 = var6.spoiler;
            var19 = null;
            var18 = var19 != var20;
            if(!var18) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var18 = var20;
case 44:
            var12['isSpoilered'] = var18;
            var18 = var5.author;
            var18 = var18.bot;
            var12['isAuthorBot'] = var18;
            var12['shouldObscureSpoiler'] = var17;
            var12['shouldAgeVerify'] = var3;
            var12['enabledContentHarmTypeFlags'] = var16;
            var12 = var13.bind(var14)(var12);
            var25 = var12.isSpoiler;
            var24 = var12.spoilerDescription;
            var22 = var12.isObscured;
            var20 = var12.obscureDescription;
            var21 = var12.obscureAwaitingScan;
            var14 = var22;
            if(!var22) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var14 = var3;
case 46:
            var18 = var22;
            if(!var22) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var13 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 13;
            var12 = var26[var12];
            var13 = var13.bind(var7)(var12);
            var12 = var13.isVerifiedTeen;
            var18 = var12.bind(var13)();
case 48:
            var13 = var22;
            if(!var13) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var12 = 14;
            var12 = var28[var12];
            var28 = var26.bind(var7)(var12);
            var26 = var28.isFullObscureMediaExperimentEnabled;
            var12 = 'transformToRowGeneratedComponent';
            var13 = var26.bind(var28)(var12);
case 50:
            var12 = {};
            var34 = var12;
            var33 = var6;
            var26 = copyDataProperties(var34, var33);
            var28 = _closure1_slot9;
            var26 = var6.file;
            var26 = var28.bind(var7)(var26, var23);
            var12[var27] = var26;
            var27 = var6.name;
            if(!(var19 == var27)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 6;
            var28 = var31[var26];
            var28 = var30.bind(var7)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var26 = var31[var26];
            var26 = var30.bind(var7)(var26);
            var26 = var26.t;
            var26 = var26.GnuJ5u;
            var27 = var28.bind(var29)(var26);
case 52:
            var26 = 'name';
            var12[var26] = var27;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 15;
            var26 = var28[var26];
            var27 = var27.bind(var7)(var26);
            var26 = var27.filesize;
            var28 = var6.size;
            var29 = var19 != var28;
            var19 = 0;
            if(!var29) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var19 = var28;
case 54:
            var26 = var26.bind(var27)(var19);
            var19 = 'size';
            var12[var19] = var26;
            var19 = 'isSpoiler';
            var12[var19] = var25;
            var19 = 'spoilerDescription';
            var12[var19] = var24;
            var19 = 'isObscure';
            var12[var19] = var22;
            var19 = 'isObscureAwaitingScan';
            var12[var19] = var21;
            var19 = 'obscureDescription';
            var12[var19] = var20;
            var19 = 'verifyAge';
            var12[var19] = var14;
            var19 = 'obscureHideControls';
            var12[var19] = var18;
            if(var14) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var14 = var18;
case 56:
            if(var14) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var14 = var13;
case 58:
            var13 = 'obscureIsOpaque';
            var12[var13] = var14;
            return var12;
case 21:
            var14 = var6.items;
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var12 = arg1;
                    var2 = _closure1_slot8;
                    var1 = var12.media;
                    var8 = undefined;
                    var6 = var2.bind(var8)(var1);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var7 = var4.bind(var8)(var1);
                    var2 = var7.getUnfurledMediaItemObscurityProps;
                    var1 = {};
                    var9 = 12;
                    var3 = var3[var9];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.MediaGalleryItemType;
                    var4 = var3.IMAGE;
                    var3 = 'image';
                    if(!(var6 !== var4)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var4 = var10.bind(var8)(var4);
                    var4 = var4.MediaGalleryItemType;
                    var10 = var4.VIDEO;
                    var4 = 'generic';
                    if(!(var6 === var10)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var4 = 'video';
case 62:
                    var3 = var4;
case 60:
                    var1['type'] = var3;
                    var3 = var12.media;
                    var1['mediaItem'] = var3;
                    var10 = var12.spoiler;
                    var4 = null;
                    var3 = var4 != var10;
                    if(!var3) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var3 = var10;
case 64:
                    var1['isSpoilered'] = var3;
                    var10 = _closure2_slot2;
                    var10 = var10.author;
                    var10 = var10.bot;
                    var1['isAuthorBot'] = var10;
                    var10 = _closure2_slot3;
                    var1['shouldObscureSpoiler'] = var10;
                    var10 = _closure2_slot4;
                    var1['enabledContentHarmTypeFlags'] = var10;
                    var10 = _closure2_slot6;
                    var1['shouldAgeVerify'] = var10;
                    var1 = var2.bind(var7)(var1);
                    var17 = var1.isSpoiler;
                    var16 = var1.spoilerDescription;
                    var15 = var1.isObscured;
                    var13 = var1.obscureDescription;
                    var14 = var1.obscureAwaitingScan;
                    var10 = var15;
                    if(!var15) { _fun0003_ip = 11; continue _fun0003 }
case 66:
                    var10 = _closure2_slot6;
case 11:
                    var11 = var15;
                    if(!var15) { _fun0003_ip = 12; continue _fun0003 }
case 67:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.isVerifiedTeen;
                    var11 = var1.bind(var2)();
case 12:
                    var7 = var15;
                    if(!var7) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    var2 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var1 = 14;
                    var1 = var18[var1];
                    var18 = var2.bind(var8)(var1);
                    var2 = var18.isFullObscureMediaExperimentEnabled;
                    var1 = 'transformToRowGeneratedComponent';
                    var7 = var2.bind(var18)(var1);
case 68:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.MediaGalleryItemType;
                    var1 = var1.VIDEO;
                    var18 = undefined;
                    if(!(var6 === var1)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    var1 = var12.media;
                    var19 = var1.proxyUrl;
                    var2 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var1 = 21;
                    var1 = var20[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.toURLSafe;
                    var19 = var1.bind(var2)(var19);
                    var2 = var4 == var19;
                    var1 = null;
                    if(var2) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var22 = var19.searchParams;
                    var21 = var22.set;
                    var20 = 'format';
                    var2 = 'webp';
                    var2 = var21.bind(var22)(var20, var2);
                    var2 = var19.toString;
                    var1 = var2.bind(var19)();
case 72:
                    var2 = var4 == var1;
                    var18 = var1;
                    var1 = null;
                    if(var2) { _fun0003_ip = 74; continue _fun0003 }
case 70:
                    var2 = {};
                    var27 = var2;
                    var26 = var12;
                    var19 = copyDataProperties(var27, var26);
                    var20 = _closure1_slot9;
                    var19 = var12.media;
                    var12 = _closure2_slot0;
                    var19 = var20.bind(var8)(var19, var12);
                    var12 = 'media';
                    var2[var12] = var19;
                    var12 = 'mediaType';
                    var2[var12] = var6;
                    var12 = 'videoPreviewUrl';
                    var2[var12] = var18;
                    var12 = 'isSpoiler';
                    var2[var12] = var17;
                    var12 = 'spoilerDescription';
                    var2[var12] = var16;
                    var12 = 'isObscure';
                    var2[var12] = var15;
                    var12 = 'isObscureAwaitingScan';
                    var2[var12] = var14;
                    var12 = 'obscureDescription';
                    var2[var12] = var13;
                    var12 = 'verifyAge';
                    var2[var12] = var10;
                    var12 = 'obscureHideControls';
                    var2[var12] = var11;
                    if(var10) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                    var10 = var11;
case 75:
                    if(var10) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                    var10 = var7;
case 77:
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
                    if(!(var6 !== var7)) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 6;
                    var10 = var13[var7];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.IPzNKC;
                    var10 = var10.bind(var11)(var7);
                    _fun0003_ip = 81; continue _fun0003;
case 79:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 6;
                    var11 = var14[var7];
                    var11 = var13.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var7 = var14[var7];
                    var7 = var13.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.BEWw//;
                    var10 = var11.bind(var12)(var7);
case 81:
                    var7 = 'descriptionHint';
                    var2[var7] = var10;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.MediaGalleryItemType;
                    var7 = var7.VIDEO;
                    if(!(var6 !== var7)) { _fun0003_ip = 82; continue _fun0003 }
case 83:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 6;
                    var10 = var13[var7];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.fKyfcX;
                    var10 = var10.bind(var11)(var7);
                    _fun0003_ip = 38; continue _fun0003;
case 82:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 6;
                    var11 = var14[var7];
                    var11 = var13.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var7 = var14[var7];
                    var7 = var13.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7./SCpvr;
                    var10 = var11.bind(var12)(var7);
case 38:
                    var7 = 'accessibilityRole';
                    var2[var7] = var10;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.MediaGalleryItemType;
                    var5 = var5.VIDEO;
                    var4 = null;
                    if(!(var6 === var5)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                    var5 = _closure2_slot2;
                    var27 = var5.id;
                    var3 = _closure2_slot1;
                    var25 = var3.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var28 = '';
                    var26 = '_MediaGallery(';
                    var24 = ')_';
                    var23 = arg2;
                    var4 = var28[var8](var27, var26, var25, var24, var23, var22);
case 84:
                    var3 = 'portalId';
                    var2[var3] = var4;
                    var1 = var2;
case 74:
                    return var1;
                }
            };
            var14 = var13.bind(var14)(var12);
            var13 = var14.filter;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 3;
            var12 = var19[var12];
            var12 = var18.bind(var7)(var12);
            var12 = var12.isNotNullish;
            var18 = var13.bind(var14)(var12);
            var14 = var18.length;
            var13 = 0;
            var12 = null;
            if(!(var13 !== var14)) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var13 = {};
            var34 = var13;
            var33 = var6;
            var14 = copyDataProperties(var34, var33);
            var14 = 'items';
            var13[var14] = var18;
            var12 = var13;
case 86:
            return var12;
case 19:
            var13 = _closure1_slot8;
            var12 = var6.media;
            var20 = var13.bind(var7)(var12);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 11;
            var12 = var21[var12];
            var14 = var19.bind(var7)(var12);
            var13 = var14.getUnfurledMediaItemObscurityProps;
            var12 = {};
            var18 = 12;
            var18 = var21[var18];
            var18 = var19.bind(var7)(var18);
            var18 = var18.MediaGalleryItemType;
            var19 = var18.IMAGE;
            var18 = 'generic';
            if(!(var20 === var19)) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var18 = 'image';
case 88:
            var12['type'] = var18;
            var18 = var6.media;
            var12['mediaItem'] = var18;
            var19 = var6.spoiler;
            var18 = null;
            var18 = var18 != var19;
            if(!var18) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var18 = var19;
case 90:
            var12['isSpoilered'] = var18;
            var18 = var5.author;
            var18 = var18.bot;
            var12['isAuthorBot'] = var18;
            var12['shouldObscureSpoiler'] = var17;
            var12['shouldAgeVerify'] = var3;
            var12['enabledContentHarmTypeFlags'] = var16;
            var12 = var13.bind(var14)(var12);
            var21 = var12.isSpoiler;
            var20 = var12.spoilerDescription;
            var19 = var12.isObscured;
            var17 = var12.obscureDescription;
            var18 = var12.obscureAwaitingScan;
            var13 = var19;
            if(!var19) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var13 = var3;
case 92:
            var14 = var19;
            if(!var19) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 13;
            var3 = var16[var3];
            var12 = var12.bind(var7)(var3);
            var3 = var12.isVerifiedTeen;
            var14 = var3.bind(var12)();
case 94:
            var12 = var19;
            if(!var12) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var16 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 14;
            var3 = var22[var3];
            var22 = var16.bind(var7)(var3);
            var16 = var22.isFullObscureMediaExperimentEnabled;
            var3 = 'transformToRowGeneratedComponent';
            var12 = var16.bind(var22)(var3);
case 96:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var16 = copyDataProperties(var34, var33);
            var22 = _closure1_slot9;
            var16 = var6.media;
            var22 = var22.bind(var7)(var16, var23);
            var16 = 'media';
            var3[var16] = var22;
            var16 = 'isSpoiler';
            var3[var16] = var21;
            var16 = 'spoilerDescription';
            var3[var16] = var20;
            var16 = 'isObscure';
            var3[var16] = var19;
            var16 = 'isObscureAwaitingScan';
            var3[var16] = var18;
            var16 = 'obscureDescription';
            var3[var16] = var17;
            var16 = 'verifyAge';
            var3[var16] = var13;
            var16 = 'obscureHideControls';
            var3[var16] = var14;
            if(var13) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var13 = var14;
case 98:
            if(var13) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var13 = var12;
case 100:
            var12 = 'obscureIsOpaque';
            var3[var12] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 6;
            var13 = var17[var12];
            var13 = var16.bind(var7)(var13);
            var18 = var13.intl;
            var14 = var18.string;
            var13 = var17[var12];
            var13 = var16.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.IPzNKC;
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
            var12 = var12.fKyfcX;
            var13 = var13.bind(var14)(var12);
            var12 = 'accessibilityRole';
            var3[var12] = var13;
            return var3;
case 17:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var12 = copyDataProperties(var34, var33);
            var14 = _closure1_slot10;
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
            if(var8) { _fun0001_ip = 102; continue _fun0001 }
case 103:
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
            var9 = 3;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.isNotNullish;
            var16 = var16.bind(var17)(var9);
            var9 = 'components';
            var8[var9] = var16;
            var9 = 'accessory';
            var8[var9] = var14;
            var9 = 5;
            var9 = var13[var9];
            var12 = var12.bind(var7)(var9);
            var9 = var12.getLayoutComponentErrorText;
            var12 = var9.bind(var12)(var4, var5, var6);
            var9 = 'errorText';
            var8[var9] = var12;
            var3 = var8;
case 102:
            return var3;
case 10:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 9;
            var3 = var13[var3];
            var12 = var9.bind(var7)(var3);
            var8 = var12.getInitialSnowflakeSelectOptions;
            var3 = var5.id;
            var12 = var8.bind(var12)(var6, var3, var15);
            var3 = {};
            var34 = var3;
            var33 = var6;
            var8 = copyDataProperties(var34, var33);
            var8 = 7;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.getActionComponentState;
            var14 = var8.bind(var14)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var14;
            var8 = 10;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.transformSearchableSelectOptions;
            var14 = var8.bind(var14)(var12, var15);
            var8 = 'selectedOptions';
            var3[var8] = var14;
            var8 = 5;
            var8 = var13[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSelectPlaceholder;
            var9 = var8.bind(var9)(var6);
            var8 = 'placeholder';
            var3[var8] = var9;
            var9 = _closure1_slot7;
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
            var3 = 8;
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
            var8 = 7;
            var8 = var13[var8];
            var14 = var9.bind(var7)(var8);
            var8 = var14.getActionComponentState;
            var14 = var8.bind(var14)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var14;
            var8 = 'selectedOptions';
            var3[var8] = var12;
            var8 = 5;
            var8 = var13[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getSelectPlaceholder;
            var9 = var8.bind(var9)(var6);
            var8 = 'placeholder';
            var3[var8] = var9;
            var9 = _closure1_slot7;
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
            if(!(var8 !== var3)) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var9 = var6.label;
            _fun0001_ip = 106; continue _fun0001;
case 104:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 6;
            var8 = var13[var3];
            var8 = var12.bind(var7)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var3 = var13[var3];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.CHa0vL;
            var9 = var8.bind(var10)(var3);
case 106:
            var3 = {};
            var34 = var3;
            var33 = var6;
            var8 = copyDataProperties(var34, var33);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 7;
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
            var1 = 3;
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
            var2 = 5;
            var2 = var8[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getLayoutComponentErrorText;
            var3 = var2.bind(var3)(var4, var5, var6);
            var2 = 'errorText';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getSelectAccessibilityLabel(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 107; continue _fun0004 }
case 109:
            var2 = var3.map;
            var1 = arg3;
            var7 = var2.bind(var3)(var1);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.I/ROHx;
            var1 = {};
            var6 = var7.join;
            var5 = ',';
            var5 = var6.bind(var7)(var5);
            var1['selections'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 107:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var2 = undefined;
            var4 = var6.bind(var2)(var1);
            var3 = var4.getSelectPlaceholder;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = 6;
            var3 = var7[var1];
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.3aednJ;
            var1 = {};
            var1['placeholder'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var2 = function getUnfurledMediaItemType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.width;
            var2 = var1.height;
            var7 = var1.contentType;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 110; continue _fun0005 }
case 111:
            var1 = 0;
            if(!(var4 > var1)) { _fun0005_ip = 110; continue _fun0005 }
case 112:
            if(!(var3 != var2)) { _fun0005_ip = 110; continue _fun0005 }
case 113:
            if(!(var2 > var1)) { _fun0005_ip = 110; continue _fun0005 }
case 114:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 17;
            var2 = var2[var5];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isImageContentType;
            var6 = var2.bind(var4)(var7);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            if(var6) { _fun0005_ip = 115; continue _fun0005 }
case 116:
            var5 = var4[var5];
            var6 = var2.bind(var3)(var5);
            var5 = var6.isVideoContentType;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0005_ip = 117; continue _fun0005 }
case 110:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 12;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            var5 = var5.MediaGalleryItemType;
            var5 = var5.VISUAL_PLACEHOLDER;
            return var5;
case 117:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.VIDEO;
            return var1;
case 115:
            var1 = 12;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.IMAGE;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = function transformUnfurledMediaItem(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = _closure1_slot8;
            var5 = undefined;
            var6 = var1.bind(var5)(var7);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.MediaGalleryItemType;
            var4 = var1.IMAGE;
            var1 = {};
            var16 = var1;
            var15 = var7;
            var8 = copyDataProperties(var16, var15);
            var8 = 18;
            var8 = var12[var8];
            var10 = var11.bind(var5)(var8);
            var9 = var10.hasFlag;
            var8 = var7.flags;
            var7 = 19;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.UnfurledMediaItemFlags;
            var7 = var7.IS_ANIMATED;
            var8 = var9.bind(var10)(var8, var7);
            var7 = 'srcIsAnimated';
            var1[var7] = var8;
            var7 = var2.shouldShowMedia;
            if(var7) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            var7 = 0;
            var1['height'] = var7;
            var1['width'] = var7;
case 118:
            if(!(var6 === var4)) { _fun0006_ip = 120; continue _fun0006 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.getImageSrc;
            var5 = var1.proxyUrl;
            var8 = var1.width;
            var9 = null;
            var10 = var9 != var8;
            var3 = 0;
            if(!var10) { _fun0006_ip = 121; continue _fun0006 }
case 122:
            var3 = var8;
case 121:
            var8 = var1.height;
            var9 = var9 != var8;
            var4 = 0;
            if(!var9) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var4 = var8;
case 123:
            var2 = var2.shouldAutoPlayGifs;
            var13 = !var2;
            var17 = var7;
            var16 = var5;
            var15 = var3;
            var14 = var4;
            var2 = var17[var6](var16, var15, var14, var13, var12);
            var1['proxyUrl'] = var2;
case 120:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
            var4 = _closure1_slot5;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            var4 = null;
            if(!(var4 == var1)) { _fun0007_ip = 125; continue _fun0007 }
case 126:
            var7 = {};
            var12 = var2.parserState;
            var13 = var7;
            var2 = copyDataProperties(var13, var12);
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var4);
            var4 = var6.parseToAST;
            var2 = true;
            var2 = var4.bind(var6)(var8, var2, var7);
            var4 = _closure1_slot5;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
case 125:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.processColor;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
    var _closure1_slot4 = var5;
    var5 = 22;
    var5 = var7[var5];
    var9 = var10.bind(var1)(var5);
    var5 = {'max': inf, 'maxAge': null, 'updateAgeOnGet': true};
    var8 = 23;
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
    var _closure1_slot5 = var5;
    var5 = 25;
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
            var3 = 2;
            var3 = var5[var3];
            var5 = undefined;
            var9 = var7.bind(var5)(var3);
            var8 = var9.getInitialParserStateFromMessage;
            var7 = var4.message;
            var3 = _closure1_slot4;
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
            if(!(var6 == var3)) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var3 = var4.message;
case 127:
            var4 = var3.components;
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot6;
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
            var1 = 3;
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