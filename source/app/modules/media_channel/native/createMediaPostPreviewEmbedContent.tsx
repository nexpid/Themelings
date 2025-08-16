// app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.processColor;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Colors;
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createMediaPostPreviewEmbedContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arguments[1];
            var9 = undefined;
            if(!(var7 === var9)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var7 = false;
 11:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 8;
            var1 = var1[var5];
            var4 = var2.bind(var9)(var1);
            var2 = var4.getMediaPostEmbedChannelId;
            var1 = arg1;
            var6 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 1628; continue _fun0001 }
 57:
            var4 = _closure1_slot10;
            var2 = var4.getEmbedFetchState;
            var4 = var2.bind(var4)(var6);
            var2 = _closure1_slot11;
            var2 = var2.FETCHED;
            if(!(var4 === var2)) { _fun0001_ip = 1626; continue _fun0001 }
 89:
            var4 = _closure1_slot10;
            var2 = var4.getMediaPostEmbed;
            var2 = var2.bind(var4)(var6);
            var4 = var1 == var2;
            var14 = undefined;
            if(var4) { _fun0001_ip = 121; continue _fun0001 }
 115:
            var14 = var2.media;
 121:
            if(!(var1 != var14)) { _fun0001_ip = 1624; continue _fun0001 }
 128:
            var6 = _closure1_slot7;
            var4 = var6.getGuild;
            var2 = var14.guild_id;
            var13 = var4.bind(var6)(var2);
            var6 = _closure1_slot9;
            var4 = var6.getUser;
            var2 = var14.author_id;
            var12 = var4.bind(var6)(var2);
            var6 = _closure1_slot6;
            var4 = var6.getChannel;
            var2 = var14.parent_channel_id;
            var11 = var4.bind(var6)(var2);
            var4 = var6.getChannel;
            var2 = var14.channel_id;
            var10 = var4.bind(var6)(var2);
            var4 = _closure1_slot8;
            var2 = var4.getGuildId;
            var8 = var2.bind(var4)();
            var6 = var1 != var11;
            if(!var6) { _fun0001_ip = 255; continue _fun0001 }
 224:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 9;
            var2 = var15[var2];
            var4 = var4.bind(var9)(var2);
            var2 = var4.canViewChannel;
            var6 = var2.bind(var4)(var11);
 255:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var5 = var4.bind(var9)(var2);
            var4 = var5.getMediaPostEmbedCommonData;
            var2 = {};
            var2['mediaPostEmbedData'] = var14;
            var2['guild'] = var13;
            var2['parentChannel'] = var11;
            var2['postThread'] = var10;
            var2['user'] = var12;
            var2['selectedGuildId'] = var8;
            var2['canAccess'] = var6;
            var6 = var4.bind(var5)(var2);
            if(!(var1 != var6)) { _fun0001_ip = 1622; continue _fun0001 }
 325:
            var2 = var6.authorName;
            if(!(var1 != var2)) { _fun0001_ip = 575; continue _fun0001 }
 338:
            var2 = var6.channelName;
            if(!(var1 != var2)) { _fun0001_ip = 575; continue _fun0001 }
 351:
            if(!(var1 != var12)) { _fun0001_ip = 575; continue _fun0001 }
 358:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var5 = var4.bind(var9)(var2);
            var4 = var5.getUserAuthor;
            var2 = var6.postThread;
            var5 = var4.bind(var5)(var12, var2);
            var4 = var1 == var5;
            var2 = undefined;
            if(var4) { _fun0001_ip = 411; continue _fun0001 }
 405:
            var2 = var5.colorString;
 411:
            var2 = var1 != var2;
            var11 = undefined;
            if(!var2) { _fun0001_ip = 444; continue _fun0001 }
 420:
            var4 = _closure1_slot4;
            var8 = var1 == var5;
            var2 = undefined;
            if(var8) { _fun0001_ip = 439; continue _fun0001 }
 433:
            var2 = var5.colorString;
 439:
            var11 = var4.bind(var9)(var2);
 444:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var5 = var10[var2];
            var5 = var4.bind(var9)(var5);
            var8 = var5.intl;
            var5 = var8.formatToParts;
            var2 = var10[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.t;
            var4 = var2.mCytFh;
            var2 = {};
            var10 = var6.authorName;
            var2['username'] = var10;
            var10 = {};
            var13 = 'bindUserMenu';
            var10['action'] = var13;
            var12 = var12.id;
            var10['userId'] = var12;
            var10['linkColor'] = var11;
            var10['roleColor'] = var11;
            var11 = var6.threadId;
            var10['messageChannelId'] = var11;
            var2['usernameOnClick'] = var10;
            var10 = var6.channelName;
            var2['channelName'] = var10;
            var5 = var5.bind(var8)(var4, var2);
            _fun0001_ip = 647; continue _fun0001;
 575:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var8 = var11[var2];
            var8 = var4.bind(var9)(var8);
            var10 = var8.intl;
            var8 = var10.formatToParts;
            var2 = var11[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.t;
            var4 = var2.p4VdWF;
            var2 = {};
            var11 = var6.guildName;
            var2['guildName'] = var11;
            var5 = var8.bind(var10)(var4, var2);
 647:
            var4 = var6.canAccess;
            var2 = false;
            if(!(var2 !== var4)) { _fun0001_ip = 680; continue _fun0001 }
 659:
            var4 = _closure1_slot4;
            var2 = _closure1_slot12;
            var2 = var2.BRAND_500;
            var4 = var4.bind(var9)(var2);
            _fun0001_ip = 699; continue _fun0001;
 680:
            var8 = _closure1_slot4;
            var2 = _closure1_slot12;
            var2 = var2.TEAL_430;
            var4 = var8.bind(var9)(var2);
 699:
            var2 = var6.coverImage;
            var8 = var1 != var2;
            if(!var8) { _fun0001_ip = 749; continue _fun0001 }
 712:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var11 = var10.bind(var9)(var2);
            var10 = var11.isAnimatedImageUrl;
            var2 = var6.coverImage;
            var8 = var10.bind(var11)(var2);
 749:
            var2 = var6.coverImage;
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 771; continue _fun0001 }
 762:
            var10 = var6.shouldShowBlurredThumbnailImage;
            var2 = !var10;
 771:
            if(!var2) { _fun0001_ip = 777; continue _fun0001 }
 774:
            var2 = var8;
 777:
            if(!var2) { _fun0001_ip = 783; continue _fun0001 }
 780:
            var2 = var7;
 783:
            if(!var2) { _fun0001_ip = 827; continue _fun0001 }
 786:
            var10 = var6.coverImage;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var7 = '';
            var2 = '?format=webp';
            var2 = var8.bind(var7)(var10, var2);
            var6['coverImage'] = var2;
 827:
            var2 = var6.shouldShowBlurredThumbnailImage;
            if(var2) { _fun0001_ip = 1537; continue _fun0001 }
 839:
            var8 = _closure1_slot5;
            var7 = var8.get;
            var2 = 'obscure_blur_effect_explicit_content_enabled';
            var11 = var7.bind(var8)(var2);
            if(var11) { _fun0001_ip = 882; continue _fun0001 }
 862:
            var8 = _closure1_slot5;
            var7 = var8.get;
            var2 = 'obscure_blur_effect_gore_content_enabled';
            var11 = var7.bind(var8)(var2);
 882:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 14;
            var2 = var2[var8];
            var10 = var7.bind(var9)(var2);
            var7 = var10.isPendingScanVersion;
            var2 = var6.contentScanVersion;
            var12 = var7.bind(var10)(var2);
            var10 = var11;
            if(!var11) { _fun0001_ip = 952; continue _fun0001 }
 925:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var7 = var7.bind(var9)(var2);
            var2 = var7.shouldAgeVerifyForExplicitMedia;
            var10 = var2.bind(var7)();
 952:
            var8 = var11;
            if(!var8) { _fun0001_ip = 988; continue _fun0001 }
 958:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var2 = var13[var2];
            var7 = var7.bind(var9)(var2);
            var2 = var7.isVerifiedTeen;
            var8 = var2.bind(var7)();
 988:
            var2 = var6.shouldContainMediaWithBackground;
            if(!var2) { _fun0001_ip = 1010; continue _fun0001 }
 997:
            var2 = var6.coverImage;
            if(!(var1 == var2)) { _fun0001_ip = 1252; continue _fun0001 }
 1010:
            var2 = {};
            var21 = var2;
            var20 = var6;
            var7 = copyDataProperties(var21, var20);
            var7 = 'footer';
            var2[var7] = var5;
            var15 = var6.shouldSpoiler;
            var13 = '';
            var7 = true;
            var14 = var13;
            if(!(var7 === var15)) { _fun0001_ip = 1115; continue _fun0001 }
 1050:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 10;
            var15 = var18[var7];
            var15 = var17.bind(var9)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var7 = var18[var7];
            var7 = var17.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.F+x38P;
            var15 = var15.bind(var16)(var7);
            var7 = var15.toUpperCase;
            var14 = var7.bind(var15)();
 1115:
            var7 = 'spoiler';
            var2[var7] = var14;
            if(!var11) { _fun0001_ip = 1182; continue _fun0001 }
 1127:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 10;
            var14 = var17[var7];
            var14 = var16.bind(var9)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var7 = var17[var7];
            var7 = var16.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.SpxcUV;
            var13 = var14.bind(var15)(var7);
 1182:
            var7 = 'obscure';
            var2[var7] = var13;
            var7 = 'obscureAwaitingScan';
            var2[var7] = var12;
            var7 = 'verifyAge';
            var2[var7] = var10;
            var7 = 'obscureHideControls';
            var2[var7] = var8;
            var13 = var10;
            if(var10) { _fun0001_ip = 1227; continue _fun0001 }
 1224:
            var13 = var8;
 1227:
            var7 = 'obscureIsOpaque';
            var2[var7] = var13;
            var7 = 'ctaButtonColor';
            var2[var7] = var4;
            _fun0001_ip = 1535; continue _fun0001;
 1252:
            var7 = {};
            var21 = var7;
            var20 = var6;
            var13 = copyDataProperties(var21, var20);
            var13 = 'footer';
            var7[var13] = var5;
            var16 = var6.shouldSpoiler;
            var13 = '';
            var14 = true;
            var15 = var13;
            if(!(var14 === var16)) { _fun0001_ip = 1357; continue _fun0001 }
 1292:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 10;
            var16 = var19[var14];
            var16 = var18.bind(var9)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.F+x38P;
            var16 = var16.bind(var17)(var14);
            var14 = var16.toUpperCase;
            var15 = var14.bind(var16)();
 1357:
            var14 = 'spoiler';
            var7[var14] = var15;
            if(!var11) { _fun0001_ip = 1424; continue _fun0001 }
 1369:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 10;
            var14 = var17[var11];
            var14 = var16.bind(var9)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var17[var11];
            var11 = var16.bind(var9)(var11);
            var11 = var11.t;
            var11 = var11.SpxcUV;
            var13 = var14.bind(var15)(var11);
 1424:
            var11 = 'obscure';
            var7[var11] = var13;
            var11 = 'obscureAwaitingScan';
            var7[var11] = var12;
            var11 = 'verifyAge';
            var7[var11] = var10;
            var11 = 'obscureHideControls';
            var7[var11] = var8;
            if(var10) { _fun0001_ip = 1466; continue _fun0001 }
 1463:
            var10 = var8;
 1466:
            var8 = 'obscureIsOpaque';
            var7[var8] = var10;
            var8 = 'ctaButtonColor';
            var7[var8] = var4;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 16;
            var8 = var11[var8];
            var11 = var10.bind(var9)(var8);
            var10 = var11.getBackgroundImageUrl;
            var8 = var6.coverImage;
            var10 = var10.bind(var11)(var8);
            var8 = 'backgroundImage';
            var7[var8] = var10;
            var2 = var7;
 1535:
            return var2;
 1537:
            var2 = {};
            var21 = var2;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var7 = _closure1_slot3;
            var6 = var7.resolveAssetSource;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var3 = var8.bind(var9)(var3);
            var3 = var6.bind(var7)(var3);
            var6 = var3.uri;
            var3 = 'blurredCoverImage';
            var2[var3] = var6;
            var3 = 'footer';
            var2[var3] = var5;
            var3 = 'ctaButtonColor';
            var2[var3] = var4;
            return var2;
 1622:
            return var1;
 1624:
            return var1;
 1626:
            return var1;
 1628:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();