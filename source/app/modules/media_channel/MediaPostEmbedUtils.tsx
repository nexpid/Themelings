// app/modules/media_channel/MediaPostEmbedUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getMediaPostEmbedChannelPath(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 81; continue _fun0001 }
 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 7;
            var3 = var3[var7];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.parseURLSafely;
            var6 = var3.bind(var5)(var6);
            if(!(var2 != var6)) { _fun0001_ip = 81; continue _fun0001 }
 49:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.remainingPathFromDiscordHostMatch;
            var3 = var3.bind(var5)(var6);
            if(!(var2 == var3)) { _fun0001_ip = 85; continue _fun0001 }
 81:
            var2 = undefined;
            return var2;
 85:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.tryParseChannelPath;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot5 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_channel/MediaPostEmbedUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getMediaPostEmbedCommonData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.mediaPostEmbedData;
            var13 = var1.guild;
            var10 = var1.parentChannel;
            var14 = var1.postThread;
            var18 = var1.user;
            var5 = var1.selectedGuildId;
            var12 = var1.canAccess;
            var9 = undefined;
            if(!(var12 === var9)) { _fun0002_ip = 51; continue _fun0002 }
 49:
            var12 = false;
 51:
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 777; continue _fun0002 }
 60:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var6 = var4.bind(var9)(var2);
            var4 = var6.getThumbnailImage;
            var2 = var3.thumbnail;
            var15 = var4.bind(var6)(var2);
            var7 = !var12;
            if(!var7) { _fun0002_ip = 114; continue _fun0002 }
 106:
            var7 = var3.has_media_attachment;
 114:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var20 = 4;
            var4 = var2[var20];
            var4 = var8.bind(var9)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var2[var20];
            var2 = var8.bind(var9)(var2);
            var2 = var2.t;
            if(var12) { _fun0002_ip = 176; continue _fun0002 }
 161:
            var8 = var2.ReFzYW;
            var17 = var4.bind(var6)(var8);
            _fun0002_ip = 189; continue _fun0002;
 176:
            var2 = var2.UsZEBA;
            var17 = var4.bind(var6)(var2);
 189:
            var2 = var1 != var18;
            var11 = undefined;
            if(!var2) { _fun0002_ip = 241; continue _fun0002 }
 198:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var8 = var4.bind(var9)(var2);
            var6 = var8.getName;
            var4 = var3.guild_id;
            var2 = var3.channel_id;
            var11 = var6.bind(var8)(var4, var2, var18);
 241:
            var2 = var1 == var18;
            var8 = undefined;
            if(var2) { _fun0002_ip = 279; continue _fun0002 }
 250:
            var6 = var18.getAvatarURL;
            var2 = var1 == var13;
            var4 = undefined;
            if(var2) { _fun0002_ip = 270; continue _fun0002 }
 265:
            var4 = var13.id;
 270:
            var2 = 40;
            var8 = var6.bind(var18)(var4, var2);
 279:
            var2 = var1 != var8;
            if(!var2) { _fun0002_ip = 295; continue _fun0002 }
 286:
            var4 = var3.guild_id;
            var2 = var5 === var4;
 295:
            if(var2) { _fun0002_ip = 366; continue _fun0002 }
 298:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var5 = var4.bind(var9)(var2);
            var4 = var5.getGuildIconURL;
            var2 = {};
            var6 = var3.guild_id;
            var2['id'] = var6;
            var6 = var3.guild_icon;
            var2['icon'] = var6;
            var6 = 40;
            var2['size'] = var6;
            var6 = false;
            var2['canAnimate'] = var6;
            var8 = var4.bind(var5)(var2);
 366:
            var2 = var3.thumbnail;
            var5 = var1 == var2;
            var4 = false;
            var6 = false;
            if(var5) { _fun0002_ip = 414; continue _fun0002 }
 383:
            var18 = var2.height;
            var5 = var2.width;
            var2 = var1 != var18;
            if(!var2) { _fun0002_ip = 404; continue _fun0002 }
 400:
            var2 = var1 != var5;
 404:
            if(!var2) { _fun0002_ip = 411; continue _fun0002 }
 407:
            var2 = var18 >= var5;
 411:
            var6 = var2;
 414:
            if(!var6) { _fun0002_ip = 420; continue _fun0002 }
 417:
            var6 = !var7;
 420:
            var5 = var3.thumbnail;
            var18 = var1 == var5;
            var2 = undefined;
            if(var18) { _fun0002_ip = 441; continue _fun0002 }
 435:
            var2 = var5.filename;
 441:
            var5 = var1 != var2;
            if(!var5) { _fun0002_ip = 496; continue _fun0002 }
 448:
            var18 = var3.thumbnail;
            var19 = var1 == var18;
            var2 = undefined;
            if(var19) { _fun0002_ip = 493; continue _fun0002 }
 463:
            var21 = var18.filename;
            var18 = var1 == var21;
            var2 = undefined;
            if(var18) { _fun0002_ip = 493; continue _fun0002 }
 478:
            var19 = var21.startsWith;
            var18 = _closure1_slot5;
            var2 = var19.bind(var21)(var18);
 493:
            var5 = var2;
 496:
            var2 = {};
            var19 = var3.title;
            var21 = var1 != var19;
            var18 = '';
            if(!var21) { _fun0002_ip = 517; continue _fun0002 }
 514:
            var18 = var19;
 517:
            var2['title'] = var18;
            var18 = var3.description;
            var2['subtitle'] = var18;
            var2['ctaText'] = var17;
            var2['coverImage'] = var15;
            var15 = undefined;
            if(!var7) { _fun0002_ip = 600; continue _fun0002 }
 546:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var9)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var9)(var16);
            var16 = var16.t;
            var16 = var16.YonliY;
            var15 = var17.bind(var18)(var16);
 600:
            var2['coverImageOverlayText'] = var15;
            var15 = var3.parent_channel_id;
            var2['parentChannelId'] = var15;
            var15 = var3.channel_id;
            var2['threadId'] = var15;
            var2['postThread'] = var14;
            var14 = var3.message_id;
            var2['messageId'] = var14;
            var2['canAccess'] = var12;
            var12 = var3.guild_id;
            var2['guildId'] = var12;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0002_ip = 671; continue _fun0002 }
 666:
            var12 = var13.name;
 671:
            if(!(var1 == var12)) { _fun0002_ip = 681; continue _fun0002 }
 675:
            var12 = var3.guild_name;
 681:
            var2['guildName'] = var12;
            var13 = var1 == var3;
            var12 = undefined;
            if(var13) { _fun0002_ip = 701; continue _fun0002 }
 695:
            var12 = var3.author_id;
 701:
            var2['authorId'] = var12;
            var2['authorName'] = var11;
            var11 = var1 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 725; continue _fun0002 }
 720:
            var9 = var10.name;
 725:
            var2['channelName'] = var9;
            var2['avatarUrl'] = var8;
            var2['shouldShowBlurredThumbnailImage'] = var7;
            var2['shouldContainMediaWithBackground'] = var6;
            var2['shouldSpoiler'] = var5;
            var2['obscureAwaitingScan'] = var4;
            var4 = var3.flags;
            var2['flags'] = var4;
            var3 = var3.content_scan_version;
            var2['contentScanVersion'] = var3;
            return var2;
 777:
            return var1;
        }
    };
    var3['getMediaPostEmbedCommonData'] = var5;
    var5 = function getMediaPostEmbedChannelId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 47; continue _fun0003 }
 23:
            var1 = var3.threadId;
            if(!(var4 == var1)) { _fun0003_ip = 38; continue _fun0003 }
 33:
            var1 = var3.channelId;
 38:
            var3 = var3.messageId;
            if(!(var1 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
 47:
            return var2;
 49:
            return var1;
        }
    };
    var3['getMediaPostEmbedChannelId'] = var5;
    var3['getMediaPostEmbedChannelPath'] = var4;
    var2 = function canUseMediaPostEmbed(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg2;
            var5 = _closure1_slot3;
            var4 = var5.getGuild;
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0004_ip = 112; continue _fun0004 }
 29:
            if(!(var2 != var3)) { _fun0004_ip = 112; continue _fun0004 }
 33:
            var6 = var4.features;
            var5 = var6.has;
            var2 = _closure1_slot4;
            var2 = var2.CREATOR_MONETIZABLE;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0004_ip = 88; continue _fun0004 }
 62:
            var5 = var4.features;
            var4 = var5.has;
            var1 = _closure1_slot4;
            var1 = var1.CREATOR_MONETIZABLE_PROVISIONAL;
            var2 = var4.bind(var5)(var1);
 88:
            var1 = var3.isMediaChannel;
            var3 = var1.bind(var3)();
            var1 = true;
            var1 = var1 === var3;
            if(!var1) { _fun0004_ip = 110; continue _fun0004 }
 107:
            var1 = var2;
 110:
            return var1;
 112:
            var1 = false;
            return var1;
        }
    };
    var3['canUseMediaPostEmbed'] = var2;
    return var1;
})();