// app/modules/messages/native/renderer/transformMessageComponents.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var10 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = function transformToRowGeneratedComponent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var22 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var22;
            var _closure2_slot1 = var6;
            var8 = function getChildComponent(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var2 = var4.bind(var2)(var3, var1);
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0002_ip = 37; continue _fun0002 }
 34:
                    var1 = var2;
 37:
                    return var1;
                }
            };
            var _closure2_slot7 = var8;
            var5 = var22.message;
            var _closure2_slot2 = var5;
            var4 = var22.interaction;
            var13 = var22.guildId;
            var11 = var22.shouldDisableInteractiveComponents;
            var17 = var22.shouldObscureSpoiler;
            var _closure2_slot3 = var17;
            var16 = var22.enabledContentHarmTypeFlags;
            var _closure2_slot4 = var16;
            var1 = var22.shouldShowMosaicMediaDescriptions;
            var _closure2_slot5 = var1;
            var3 = var22.shouldAgeVerify;
            var _closure2_slot6 = var3;
            var14 = var22.colors;
            var9 = var22.markdownConfigs;
            var15 = var6.type;
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 4;
            var12 = var7[var10];
            var7 = undefined;
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.ACTION_ROW;
            if(!(var12 !== var15)) { _fun0001_ip = 2663; continue _fun0001 }
 155:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.BUTTON;
            if(!(var12 !== var15)) { _fun0001_ip = 2496; continue _fun0001 }
 191:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.STRING_SELECT;
            if(!(var12 !== var15)) { _fun0001_ip = 2358; continue _fun0001 }
 227:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.USER_SELECT;
            if(!(var12 !== var15)) { _fun0001_ip = 2212; continue _fun0001 }
 263:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.ROLE_SELECT;
            if(!(var12 !== var15)) { _fun0001_ip = 2212; continue _fun0001 }
 299:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.MENTIONABLE_SELECT;
            if(!(var12 !== var15)) { _fun0001_ip = 2212; continue _fun0001 }
 335:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CHANNEL_SELECT;
            if(!(var12 !== var15)) { _fun0001_ip = 2212; continue _fun0001 }
 371:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SECTION;
            if(!(var12 !== var15)) { _fun0001_ip = 2061; continue _fun0001 }
 407:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.TEXT_DISPLAY;
            if(!(var12 !== var15)) { _fun0001_ip = 2011; continue _fun0001 }
 443:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.THUMBNAIL;
            if(!(var12 !== var15)) { _fun0001_ip = 1542; continue _fun0001 }
 479:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.MEDIA_GALLERY;
            if(!(var12 !== var15)) { _fun0001_ip = 1444; continue _fun0001 }
 515:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.FILE;
            if(!(var12 !== var15)) { _fun0001_ip = 1013; continue _fun0001 }
 551:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SEPARATOR;
            if(!(var12 !== var15)) { _fun0001_ip = 1011; continue _fun0001 }
 587:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.TEXT_INPUT;
            if(!(var12 !== var15)) { _fun0001_ip = 1007; continue _fun0001 }
 623:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CONTENT_INVENTORY_ENTRY;
            if(!(var12 !== var15)) { _fun0001_ip = 938; continue _fun0001 }
 659:
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var10];
            var12 = var18.bind(var7)(var12);
            var12 = var12.ComponentType;
            var12 = var12.CONTAINER;
            if(!(var12 !== var15)) { _fun0001_ip = 696; continue _fun0001 }
 692:
            var12 = null;
            return var12;
 696:
            var12 = {};
            var33 = var12;
            var32 = var6;
            var15 = copyDataProperties(var33, var32);
            var19 = var6.components;
            var18 = var19.map;
            var15 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var19 = var18.bind(var19)(var15);
            var18 = var19.filter;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 3;
            var15 = var21[var15];
            var15 = var20.bind(var7)(var15);
            var15 = var15.isNotNullish;
            var18 = var18.bind(var19)(var15);
            var15 = 'components';
            var12[var15] = var18;
            var18 = var6.accentColor;
            var15 = null;
            var18 = var15 != var18;
            var19 = null;
            if(!var18) { _fun0001_ip = 808; continue _fun0001 }
 793:
            var20 = _closure1_slot3;
            var18 = var6.accentColor;
            var19 = var20.bind(var7)(var18);
 808:
            var18 = 'accentColor';
            var12[var18] = var19;
            var19 = var6.spoiler;
            var18 = 'isSpoiler';
            var12[var18] = var19;
            var18 = var6.spoiler;
            var19 = null;
            if(!var18) { _fun0001_ip = 900; continue _fun0001 }
 843:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 6;
            var20 = var24[var18];
            var20 = var23.bind(var7)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var24[var18];
            var18 = var23.bind(var7)(var18);
            var18 = var18.t;
            var18 = var18.C8ci39;
            var19 = var20.bind(var21)(var18);
 900:
            var18 = 'spoilerDescription';
            var12[var18] = var19;
            var14 = var14.embedBackgroundColor;
            var18 = var15 != var14;
            var15 = null;
            if(!var18) { _fun0001_ip = 927; continue _fun0001 }
 924:
            var15 = var14;
 927:
            var14 = 'themedBackgroundColor';
            var12[var14] = var15;
            return var12;
 938:
            var12 = {};
            var14 = var6.type;
            var12['type'] = var14;
            var14 = var6.id;
            var12['id'] = var14;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 15;
            var14 = var18[var14];
            var18 = var15.bind(var7)(var14);
            var15 = var18.transformToRowGeneratedContentInventoryEntryComponent;
            var14 = {};
            var14['component'] = var6;
            var14['message'] = var5;
            var14 = var15.bind(var18)(var14);
            var12['contentInventoryEntry'] = var14;
            return var12;
 1007:
            var12 = null;
            return var12;
 1011:
            return var6;
 1013:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 11;
            var12 = var15[var12];
            var15 = var14.bind(var7)(var12);
            var14 = var15.getUnfurledMediaItemObscurityProps;
            var12 = {};
            var26 = 'file';
            var12['type'] = var26;
            var18 = var6.file;
            var12['mediaItem'] = var18;
            var20 = var6.spoiler;
            var18 = null;
            var19 = var18 != var20;
            if(!var19) { _fun0001_ip = 1078; continue _fun0001 }
 1075:
            var19 = var20;
 1078:
            var12['isSpoilered'] = var19;
            var19 = var5.author;
            var19 = var19.bot;
            var12['isAuthorBot'] = var19;
            var12['shouldObscureSpoiler'] = var17;
            var12['shouldAgeVerify'] = var3;
            var12['enabledContentHarmTypeFlags'] = var16;
            var12 = var14.bind(var15)(var12);
            var24 = var12.isSpoiler;
            var23 = var12.spoilerDescription;
            var21 = var12.isObscured;
            var19 = var12.obscureDescription;
            var20 = var12.obscureAwaitingScan;
            var15 = var21;
            if(!var21) { _fun0001_ip = 1159; continue _fun0001 }
 1156:
            var15 = var3;
 1159:
            var14 = var21;
            if(!var14) { _fun0001_ip = 1195; continue _fun0001 }
 1165:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var12 = 13;
            var12 = var27[var12];
            var25 = var25.bind(var7)(var12);
            var12 = var25.isVerifiedTeen;
            var14 = var12.bind(var25)();
 1195:
            var12 = {};
            var33 = var12;
            var32 = var6;
            var25 = copyDataProperties(var33, var32);
            var27 = _closure1_slot9;
            var25 = var6.file;
            var25 = var27.bind(var7)(var25, var22);
            var12[var26] = var25;
            var26 = var6.name;
            if(!(var18 == var26)) { _fun0001_ip = 1294; continue _fun0001 }
 1237:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var25 = 6;
            var27 = var30[var25];
            var27 = var29.bind(var7)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var25 = var30[var25];
            var25 = var29.bind(var7)(var25);
            var25 = var25.t;
            var25 = var25.GnuJ5u;
            var26 = var27.bind(var28)(var25);
 1294:
            var25 = 'name';
            var12[var25] = var26;
            var26 = _closure1_slot1;
            var27 = _closure1_slot2;
            var25 = 14;
            var25 = var27[var25];
            var26 = var26.bind(var7)(var25);
            var25 = var26.filesize;
            var27 = var6.size;
            var28 = var18 != var27;
            var18 = 0;
            if(!var28) { _fun0001_ip = 1346; continue _fun0001 }
 1343:
            var18 = var27;
 1346:
            var25 = var25.bind(var26)(var18);
            var18 = 'size';
            var12[var18] = var25;
            var18 = 'isSpoiler';
            var12[var18] = var24;
            var18 = 'spoilerDescription';
            var12[var18] = var23;
            var18 = 'isObscure';
            var12[var18] = var21;
            var18 = 'isObscureAwaitingScan';
            var12[var18] = var20;
            var18 = 'obscureDescription';
            var12[var18] = var19;
            var18 = 'verifyAge';
            var12[var18] = var15;
            var18 = 'obscureHideControls';
            var12[var18] = var14;
            if(var15) { _fun0001_ip = 1433; continue _fun0001 }
 1430:
            var15 = var14;
 1433:
            var14 = 'obscureIsOpaque';
            var12[var14] = var15;
            return var12;
 1444:
            var15 = var6.items;
            var14 = var15.map;
            var12 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var11 = arg1;
                    var2 = _closure1_slot8;
                    var1 = var11.media;
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
                    if(!(var6 !== var4)) { _fun0003_ip = 127; continue _fun0003 }
 83:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var4 = var10.bind(var8)(var4);
                    var4 = var4.MediaGalleryItemType;
                    var10 = var4.VIDEO;
                    var4 = 'generic';
                    if(!(var6 === var10)) { _fun0003_ip = 124; continue _fun0003 }
 120:
                    var4 = 'video';
 124:
                    var3 = var4;
 127:
                    var1['type'] = var3;
                    var3 = var11.media;
                    var1['mediaItem'] = var3;
                    var10 = var11.spoiler;
                    var4 = null;
                    var3 = var4 != var10;
                    if(!var3) { _fun0003_ip = 160; continue _fun0003 }
 157:
                    var3 = var10;
 160:
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
                    var16 = var1.isSpoiler;
                    var15 = var1.spoilerDescription;
                    var14 = var1.isObscured;
                    var12 = var1.obscureDescription;
                    var13 = var1.obscureAwaitingScan;
                    var10 = var14;
                    if(!var14) { _fun0003_ip = 261; continue _fun0003 }
 257:
                    var10 = _closure2_slot6;
 261:
                    var7 = var14;
                    if(!var7) { _fun0003_ip = 297; continue _fun0003 }
 267:
                    var2 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var1 = 13;
                    var1 = var17[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.isVerifiedTeen;
                    var7 = var1.bind(var2)();
 297:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.MediaGalleryItemType;
                    var1 = var1.VIDEO;
                    var17 = undefined;
                    if(!(var6 === var1)) { _fun0003_ip = 435; continue _fun0003 }
 332:
                    var1 = var11.media;
                    var18 = var1.proxyUrl;
                    var2 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var1 = 20;
                    var1 = var19[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.toURLSafe;
                    var18 = var1.bind(var2)(var18);
                    var2 = var4 == var18;
                    var1 = null;
                    if(var2) { _fun0003_ip = 420; continue _fun0003 }
 384:
                    var21 = var18.searchParams;
                    var20 = var21.set;
                    var19 = 'format';
                    var2 = 'webp';
                    var2 = var20.bind(var21)(var19, var2);
                    var2 = var18.toString;
                    var1 = var2.bind(var18)();
 420:
                    var2 = var4 == var1;
                    var17 = var1;
                    var1 = null;
                    if(var2) { _fun0003_ip = 1002; continue _fun0003 }
 435:
                    var2 = {};
                    var26 = var2;
                    var25 = var11;
                    var18 = copyDataProperties(var26, var25);
                    var19 = _closure1_slot9;
                    var18 = var11.media;
                    var11 = _closure2_slot0;
                    var18 = var19.bind(var8)(var18, var11);
                    var11 = 'media';
                    var2[var11] = var18;
                    var11 = 'mediaType';
                    var2[var11] = var6;
                    var11 = 'videoPreviewUrl';
                    var2[var11] = var17;
                    var11 = 'isSpoiler';
                    var2[var11] = var16;
                    var11 = 'spoilerDescription';
                    var2[var11] = var15;
                    var11 = 'isObscure';
                    var2[var11] = var14;
                    var11 = 'isObscureAwaitingScan';
                    var2[var11] = var13;
                    var11 = 'obscureDescription';
                    var2[var11] = var12;
                    var11 = 'verifyAge';
                    var2[var11] = var10;
                    var11 = 'obscureHideControls';
                    var2[var11] = var7;
                    if(var10) { _fun0003_ip = 569; continue _fun0003 }
 566:
                    var10 = var7;
 569:
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
                    if(!(var6 !== var7)) { _fun0003_ip = 681; continue _fun0003 }
 624:
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
                    _fun0003_ip = 736; continue _fun0003;
 681:
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
 736:
                    var7 = 'descriptionHint';
                    var2[var7] = var10;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.MediaGalleryItemType;
                    var7 = var7.VIDEO;
                    if(!(var6 !== var7)) { _fun0003_ip = 837; continue _fun0003 }
 780:
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
                    _fun0003_ip = 892; continue _fun0003;
 837:
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
 892:
                    var7 = 'accessibilityRole';
                    var2[var7] = var10;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.MediaGalleryItemType;
                    var5 = var5.VIDEO;
                    var4 = null;
                    if(!(var6 === var5)) { _fun0003_ip = 990; continue _fun0003 }
 936:
                    var5 = _closure2_slot2;
                    var26 = var5.id;
                    var3 = _closure2_slot1;
                    var24 = var3.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var27 = '';
                    var25 = '_MediaGallery(';
                    var23 = ')_';
                    var22 = arg2;
                    var4 = var27[var8](var26, var25, var24, var23, var22, var21);
 990:
                    var3 = 'portalId';
                    var2[var3] = var4;
                    var1 = var2;
 1002:
                    return var1;
                }
            };
            var15 = var14.bind(var15)(var12);
            var14 = var15.filter;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 3;
            var12 = var19[var12];
            var12 = var18.bind(var7)(var12);
            var12 = var12.isNotNullish;
            var18 = var14.bind(var15)(var12);
            var15 = var18.length;
            var14 = 0;
            var12 = null;
            if(!(var14 !== var15)) { _fun0001_ip = 1540; continue _fun0001 }
 1516:
            var14 = {};
            var33 = var14;
            var32 = var6;
            var15 = copyDataProperties(var33, var32);
            var15 = 'items';
            var14[var15] = var18;
            var12 = var14;
 1540:
            return var12;
 1542:
            var14 = _closure1_slot8;
            var12 = var6.media;
            var20 = var14.bind(var7)(var12);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 11;
            var12 = var21[var12];
            var15 = var19.bind(var7)(var12);
            var14 = var15.getUnfurledMediaItemObscurityProps;
            var12 = {};
            var18 = 12;
            var18 = var21[var18];
            var18 = var19.bind(var7)(var18);
            var18 = var18.MediaGalleryItemType;
            var19 = var18.IMAGE;
            var18 = 'generic';
            if(!(var20 === var19)) { _fun0001_ip = 1621; continue _fun0001 }
 1617:
            var18 = 'image';
 1621:
            var12['type'] = var18;
            var18 = var6.media;
            var12['mediaItem'] = var18;
            var19 = var6.spoiler;
            var18 = null;
            var18 = var18 != var19;
            if(!var18) { _fun0001_ip = 1654; continue _fun0001 }
 1651:
            var18 = var19;
 1654:
            var12['isSpoilered'] = var18;
            var18 = var5.author;
            var18 = var18.bot;
            var12['isAuthorBot'] = var18;
            var12['shouldObscureSpoiler'] = var17;
            var12['shouldAgeVerify'] = var3;
            var12['enabledContentHarmTypeFlags'] = var16;
            var12 = var14.bind(var15)(var12);
            var20 = var12.isSpoiler;
            var19 = var12.spoilerDescription;
            var18 = var12.isObscured;
            var16 = var12.obscureDescription;
            var17 = var12.obscureAwaitingScan;
            var14 = var18;
            if(!var18) { _fun0001_ip = 1735; continue _fun0001 }
 1732:
            var14 = var3;
 1735:
            var12 = var18;
            if(!var12) { _fun0001_ip = 1771; continue _fun0001 }
 1741:
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 13;
            var3 = var21[var3];
            var15 = var15.bind(var7)(var3);
            var3 = var15.isVerifiedTeen;
            var12 = var3.bind(var15)();
 1771:
            var3 = {};
            var33 = var3;
            var32 = var6;
            var15 = copyDataProperties(var33, var32);
            var21 = _closure1_slot9;
            var15 = var6.media;
            var21 = var21.bind(var7)(var15, var22);
            var15 = 'media';
            var3[var15] = var21;
            var15 = 'isSpoiler';
            var3[var15] = var20;
            var15 = 'spoilerDescription';
            var3[var15] = var19;
            var15 = 'isObscure';
            var3[var15] = var18;
            var15 = 'isObscureAwaitingScan';
            var3[var15] = var17;
            var15 = 'obscureDescription';
            var3[var15] = var16;
            var15 = 'verifyAge';
            var3[var15] = var14;
            var15 = 'obscureHideControls';
            var3[var15] = var12;
            if(var14) { _fun0001_ip = 1881; continue _fun0001 }
 1878:
            var14 = var12;
 1881:
            var12 = 'obscureIsOpaque';
            var3[var12] = var14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 6;
            var14 = var17[var12];
            var14 = var16.bind(var7)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var12];
            var14 = var16.bind(var7)(var14);
            var14 = var14.t;
            var14 = var14.IPzNKC;
            var15 = var15.bind(var18)(var14);
            var14 = 'descriptionHint';
            var3[var14] = var15;
            var14 = var17[var12];
            var14 = var16.bind(var7)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var17[var12];
            var12 = var16.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.fKyfcX;
            var14 = var14.bind(var15)(var12);
            var12 = 'accessibilityRole';
            var3[var12] = var14;
            return var3;
 2011:
            var3 = {};
            var33 = var3;
            var32 = var6;
            var12 = copyDataProperties(var33, var32);
            var15 = _closure1_slot10;
            var14 = var9.textDisplayComponent;
            var12 = var5.id;
            var9 = var6.content;
            var12 = var15.bind(var7)(var14, var12, var9);
            var9 = 'content';
            var3[var9] = var12;
            return var3;
 2061:
            var3 = var6.accessory;
            var15 = var8.bind(var7)(var3);
            var3 = null;
            var8 = var3 == var15;
            if(var8) { _fun0001_ip = 2210; continue _fun0001 }
 2084:
            var8 = {};
            var33 = var8;
            var32 = var6;
            var9 = copyDataProperties(var33, var32);
            var14 = var6.components;
            var12 = var14.map;
            var9 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var17 = var12.bind(var14)(var9);
            var16 = var17.filter;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 3;
            var9 = var14[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.isNotNullish;
            var16 = var16.bind(var17)(var9);
            var9 = 'components';
            var8[var9] = var16;
            var9 = 'accessory';
            var8[var9] = var15;
            var9 = 5;
            var9 = var14[var9];
            var12 = var12.bind(var7)(var9);
            var9 = var12.getLayoutComponentErrorText;
            var12 = var9.bind(var12)(var4, var5, var6);
            var9 = 'errorText';
            var8[var9] = var12;
            var3 = var8;
 2210:
            return var3;
 2212:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 9;
            var3 = var14[var3];
            var12 = var9.bind(var7)(var3);
            var8 = var12.getInitialSnowflakeSelectOptions;
            var3 = var5.id;
            var12 = var8.bind(var12)(var6, var3, var13);
            var3 = {};
            var33 = var3;
            var32 = var6;
            var8 = copyDataProperties(var33, var32);
            var8 = 7;
            var8 = var14[var8];
            var15 = var9.bind(var7)(var8);
            var8 = var15.getActionComponentState;
            var15 = var8.bind(var15)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var15;
            var8 = 10;
            var8 = var14[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.transformSearchableSelectOptions;
            var9 = var8.bind(var9)(var12, var13);
            var8 = 'selectedOptions';
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
 2358:
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
            var33 = var3;
            var32 = var6;
            var8 = copyDataProperties(var33, var32);
            var8 = 7;
            var8 = var13[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getActionComponentState;
            var9 = var8.bind(var9)(var4, var6, var11);
            var8 = 'state';
            var3[var8] = var9;
            var8 = 'selectedOptions';
            var3[var8] = var12;
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
 2496:
            var8 = var6.style;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var9.bind(var7)(var3);
            var3 = var3.ButtonStyle;
            var3 = var3.PREMIUM;
            if(!(var8 !== var3)) { _fun0001_ip = 2541; continue _fun0001 }
 2534:
            var9 = var6.label;
            _fun0001_ip = 2598; continue _fun0001;
 2541:
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
 2598:
            var3 = {};
            var33 = var3;
            var32 = var6;
            var8 = copyDataProperties(var33, var32);
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
 2663:
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
            var33 = var1;
            var32 = var6;
            var2 = copyDataProperties(var33, var32);
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
 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 119; continue _fun0004 }
 9:
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 119; continue _fun0004 }
 20:
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
 119:
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
            var2 = var1.3aednJ;
            var1 = {};
            var5 = arg1;
            var5 = var5.placeholder;
            var1['placeholder'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var2 = function getUnfurledMediaItemType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.width;
            var2 = var1.height;
            var7 = var1.contentType;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 109; continue _fun0005 }
 25:
            var1 = 0;
            if(!(var4 > var1)) { _fun0005_ip = 109; continue _fun0005 }
 31:
            if(!(var3 != var2)) { _fun0005_ip = 109; continue _fun0005 }
 35:
            if(!(var2 > var1)) { _fun0005_ip = 109; continue _fun0005 }
 39:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 16;
            var2 = var2[var5];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isImageContentType;
            var6 = var2.bind(var4)(var7);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            if(var6) { _fun0005_ip = 182; continue _fun0005 }
 86:
            var5 = var4[var5];
            var6 = var2.bind(var3)(var5);
            var5 = var6.isVideoContentType;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0005_ip = 148; continue _fun0005 }
 109:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 12;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            var5 = var5.MediaGalleryItemType;
            var5 = var5.VISUAL_PLACEHOLDER;
            return var5;
 148:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.VIDEO;
            return var1;
 182:
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
 0:
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
            var8 = 17;
            var8 = var12[var8];
            var10 = var11.bind(var5)(var8);
            var9 = var10.hasFlag;
            var8 = var7.flags;
            var7 = 18;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.UnfurledMediaItemFlags;
            var7 = var7.IS_ANIMATED;
            var8 = var9.bind(var10)(var8, var7);
            var7 = 'srcIsAnimated';
            var1[var7] = var8;
            var7 = var2.shouldShowMedia;
            if(var7) { _fun0006_ip = 149; continue _fun0006 }
 135:
            var7 = 0;
            var1['height'] = var7;
            var1['width'] = var7;
 149:
            if(!(var6 === var4)) { _fun0006_ip = 252; continue _fun0006 }
 153:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 19;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.getImageSrc;
            var5 = var1.proxyUrl;
            var8 = var1.width;
            var9 = null;
            var10 = var9 != var8;
            var3 = 0;
            if(!var10) { _fun0006_ip = 204; continue _fun0006 }
 201:
            var3 = var8;
 204:
            var8 = var1.height;
            var9 = var9 != var8;
            var4 = 0;
            if(!var9) { _fun0006_ip = 221; continue _fun0006 }
 218:
            var4 = var8;
 221:
            var2 = var2.shouldAutoPlayGifs;
            var13 = !var2;
            var17 = var7;
            var16 = var5;
            var15 = var3;
            var14 = var4;
            var2 = var17[var6](var16, var15, var14, var13, var12);
            var1['proxyUrl'] = var2;
 252:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function renderMarkdownText(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(!(var4 == var1)) { _fun0007_ip = 140; continue _fun0007 }
 71:
            var7 = {};
            var12 = var2.parserState;
            var13 = var7;
            var2 = copyDataProperties(var13, var12);
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
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
 140:
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
    var5 = 21;
    var5 = var7[var5];
    var9 = var10.bind(var1)(var5);
    var5 = {'max': inf, 'maxAge': null, 'updateAgeOnGet': true};
    var8 = 22;
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
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/transformMessageComponents.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function transformMessageComponents(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!(var6 == var3)) { _fun0008_ip = 126; continue _fun0008 }
 121:
            var3 = var4.message;
 126:
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