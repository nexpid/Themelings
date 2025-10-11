// app/modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot11 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot12 = var7;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNativeForumPostHandlers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.threadId;
            var _closure2_slot0 = var13;
            var12 = var2.reactionType;
            var2 = undefined;
            if(!(var12 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var3);
            var3 = var3.ReactionTypes;
            var12 = var3.NORMAL;
case 2:
            var _closure2_slot1 = var12;
            var _closure2_slot2 = var2;
            var11 = _closure1_slot3;
            var4 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.messageId;
                    var _closure3_slot0 = var3;
                    var7 = var1.mediaItems;
                    var3 = var1.containerRef;
                    var _closure3_slot1 = var3;
                    var3 = var1.initialIndex;
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = 0;
case 4:
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var1;
                    var _closure3_slot4 = var1;
                    var _closure3_slot5 = var1;
                    var _closure3_slot6 = var1;
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var3 = _closure2_slot0;
                    var8 = var5.bind(var6)(var3);
                    _closure3_slot3 = var8;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 10;
                    var5 = var3[var5];
                    var9 = var6.bind(var1)(var5);
                    var5 = null;
                    var6 = var5 != var8;
                    var5 = '[Forum Post Handlers] Thread cannot be null.';
                    var5 = var9.bind(var1)(var6, var5);
                    var5 = _closure1_slot0;
                    var6 = 11;
                    var6 = var3[var6];
                    var11 = var5.bind(var1)(var6);
                    var10 = var11.computeChannelName;
                    var14 = _closure1_slot7;
                    var13 = _closure1_slot6;
                    var12 = false;
                    var16 = var11;
                    var15 = var8;
                    var4 = var16[var10](var15, var14, var13, var12, var11);
                    _closure3_slot4 = var4;
                    var4 = 12;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var4 = var6.getChannelIcon;
                    var4 = var4.bind(var6)(var8);
                    _closure3_slot5 = var4;
                    var6 = var7.map;
                    var4 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var7 = var2.src;
                            var3 = var2.srcIsAnimated;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var12 = undefined;
                            var5 = var5.bind(var12)(var1);
                            var1 = var5.toURLSafe;
                            var5 = var1.bind(var5)(var7);
                            var6 = null;
                            var1 = var6 != var5;
                            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var8 = var1;
                            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var9 = var5.pathname;
                            var3 = var9.toLowerCase;
                            var10 = var3.bind(var9)();
                            var9 = var10.endsWith;
                            var3 = '.avif';
                            var8 = var9.bind(var10)(var3);
case 8:
                            var3 = var7;
                            if(!var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var11 = var5.searchParams;
                            var10 = var11.set;
                            var9 = 'format';
                            var8 = 'webp';
                            var8 = var10.bind(var11)(var9, var8);
                            var8 = var5.toString;
                            var3 = var8.bind(var5)();
                            _fun0003_ip = 10; continue _fun0003;
case 6:
                            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var9 = var5.pathname;
                            var8 = var9.toLowerCase;
                            var10 = var8.bind(var9)();
                            var9 = var10.endsWith;
                            var8 = '.webp';
                            var8 = var9.bind(var10)(var8);
                            if(var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var10 = var5.pathname;
                            var9 = var10.toLowerCase;
                            var11 = var9.bind(var10)();
                            var10 = var11.endsWith;
                            var9 = '.avif';
                            var8 = var10.bind(var11)(var9);
case 14:
                            var1 = var8;
case 12:
                            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var9 = var2.type;
                            var10 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var13 = 14;
                            var8 = var8[var13];
                            var8 = var10.bind(var12)(var8);
                            var8 = var8.ForumPostMediaTypes;
                            var8 = var8.ATTACHMENT;
                            var8 = var9 === var8;
                            if(!var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 15;
                            var9 = var11[var9];
                            var10 = var10.bind(var12)(var9);
                            var9 = var10.isAttachmentUrl;
                            var8 = var9.bind(var10)(var5);
case 18:
                            if(var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var10 = var2.type;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var13];
                            var9 = var11.bind(var12)(var9);
                            var9 = var9.ForumPostMediaTypes;
                            var9 = var9.EMBED;
                            var9 = var10 === var9;
                            if(!var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 15;
                            var10 = var13[var10];
                            var11 = var11.bind(var12)(var10);
                            var10 = var11.isExternalProxiedAttachmentUrl;
                            var9 = var10.bind(var11)(var5);
case 22:
                            var8 = var9;
case 20:
                            var1 = var8;
case 16:
                            var3 = var7;
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 24:
                            var9 = var5.searchParams;
                            var8 = var9.set;
                            var7 = 'animated';
                            var1 = 'true';
                            var1 = var8.bind(var9)(var7, var1);
                            var7 = var5.pathname;
                            var1 = var7.toLowerCase;
                            var8 = var1.bind(var7)();
                            var7 = var8.endsWith;
                            var1 = '.avif';
                            var1 = var7.bind(var8)(var1);
                            if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var9 = var5.searchParams;
                            var8 = var9.set;
                            var7 = 'format';
                            var1 = 'webp';
                            var1 = var8.bind(var9)(var7, var1);
case 25:
                            var1 = var5.toString;
                            var3 = var1.bind(var5)();
case 10:
                            var1 = {};
                            var1['uri'] = var3;
                            var5 = _closure3_slot3;
                            var5 = var5.guild_id;
                            var1['guildId'] = var5;
                            var5 = _closure3_slot0;
                            if(!(var6 == var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                            var4 = _closure1_slot13;
                            _fun0003_ip = 29; continue _fun0003;
case 27:
                            var4 = _closure3_slot0;
case 29:
                            var1['messageId'] = var4;
                            var3 = _closure3_slot3;
                            var3 = var3.id;
                            var1['channelId'] = var3;
                            var3 = var2.mediaIndex;
                            var1['mediaIndex'] = var3;
                            var3 = var2.width;
                            var1['width'] = var3;
                            var3 = var2.height;
                            var1['height'] = var3;
                            var3 = var2.type;
                            var1['accessoryType'] = var3;
                            var2 = var2.attachmentId;
                            var1['attachmentId'] = var2;
                            return var1;
                        }
                    };
                    var4 = var6.bind(var7)(var4);
                    _closure3_slot6 = var4;
                    var4 = 17;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 16;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var5.bind(var1)(var4, var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.openMediaModal;
                            var3 = {};
                            var2 = _closure3_slot2;
                            var3['initialIndex'] = var2;
                            var2 = _closure3_slot6;
                            var3['initialSources'] = var2;
                            var2 = _closure3_slot3;
                            var2 = var2.guild_id;
                            var3['guildId'] = var2;
                            var2 = _closure3_slot3;
                            var2 = var2.id;
                            var3['channelId'] = var2;
                            var2 = _closure3_slot3;
                            var2 = var2.type;
                            var3['channelType'] = var2;
                            var2 = _closure3_slot4;
                            var3['contextName'] = var2;
                            var2 = _closure3_slot5;
                            var3['contextIcon'] = var2;
                            var1 = _closure3_slot1;
                            var5 = var1.current;
                            var1 = null;
                            var6 = var1 != var5;
                            var1 = undefined;
                            var2 = undefined;
                            if(!var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                            var2 = var5;
case 30:
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var9 = var4.bind(var11)(var2, var3);
            var4 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 20;
                    var2 = var7[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
case 32:
                    var11 = _closure1_slot5;
                    var2 = var11.getChannel;
                    var9 = _closure2_slot0;
                    var5 = var2.bind(var11)(var9);
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var2 = var4[var3];
                    var12 = var7.bind(var1)(var2);
                    var2 = null;
                    var10 = var2 != var5;
                    var8 = '[Forum Post Handlers] Thread cannot be null.';
                    var8 = var12.bind(var1)(var10, var8);
                    var10 = var11.getChannel;
                    var8 = var5.parent_id;
                    var10 = var10.bind(var11)(var8);
                    var3 = var4[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var2 != var10;
                    var2 = '[Forum Post Handlers] Parent channel cannot be null.';
                    var2 = var7.bind(var1)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 21;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.trackForumPostClicked;
                    var2 = {};
                    var11 = var10.guild_id;
                    var2['guildId'] = var11;
                    var10 = var10.id;
                    var2['channelId'] = var10;
                    var2['postId'] = var9;
                    var9 = {};
                    var10 = _closure1_slot11;
                    var10 = var10.GUILD_CHANNEL;
                    var9['page'] = var10;
                    var10 = _closure1_slot12;
                    var10 = var10.FORUM_CHANNEL_POST;
                    var9['section'] = var10;
                    var2['location'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToThread;
                    var2 = {};
                    var6 = _closure1_slot14;
                    var6 = var6.FORUM;
                    var2['source'] = var6;
                    var6 = false;
                    var2['navigationReplace'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                }
            };
            var8 = var4.bind(var11)(var2, var3);
            _closure2_slot2 = var8;
            var4 = var11.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var13;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var12 = _closure1_slot5;
                    var1 = var12.getChannel;
                    var5 = _closure2_slot0;
                    var6 = var1.bind(var12)(var5);
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var3 = var8[var2];
                    var1 = undefined;
                    var13 = var4.bind(var1)(var3);
                    var3 = null;
                    var11 = var3 != var6;
                    var9 = '[Forum Post Handlers] Thread cannot be null.';
                    var9 = var13.bind(var1)(var11, var9);
                    var11 = var12.getChannel;
                    var9 = var6.parent_id;
                    var11 = var11.bind(var12)(var9);
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var3 != var11;
                    var2 = '[Forum Post Handlers] Parent channel cannot be null.';
                    var2 = var8.bind(var1)(var4, var2);
                    var4 = _closure1_slot9;
                    var2 = var4.getMessageState;
                    var4 = var2.bind(var4)(var5);
                    var2 = var4.message;
                    var4 = var4.loaded;
                    if(!var4) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    if(!(var3 == var2)) { _fun0006_ip = 36; continue _fun0006 }
case 34:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
                    _fun0006_ip = 37; continue _fun0006;
case 36:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.trackForumPostClicked;
                    var3 = {};
                    var12 = var11.guild_id;
                    var3['guildId'] = var12;
                    var11 = var11.id;
                    var3['channelId'] = var11;
                    var10 = _closure2_slot0;
                    var3['postId'] = var10;
                    var10 = {};
                    var11 = _closure1_slot11;
                    var11 = var11.GUILD_CHANNEL;
                    var10['page'] = var11;
                    var11 = _closure1_slot12;
                    var11 = var11.FORUM_CHANNEL_POST;
                    var10['section'] = var11;
                    var3['location'] = var10;
                    var3 = var8.bind(var9)(var3);
                    var3 = 22;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.transitionToThreadMessage;
                    var3 = var2.id;
                    var2 = {};
                    var7 = _closure1_slot14;
                    var7 = var7.FORUM;
                    var2['source'] = var7;
                    var7 = false;
                    var2['navigationReplace'] = var7;
                    var2 = var4.bind(var5)(var6, var3, var2);
case 37:
                    return var1;
                }
            };
            var2 = var4.bind(var11)(var2, var3);
            var5 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var10 = _closure1_slot5;
                    var3 = var10.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var10)(var1);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var3 = var8[var5];
                    var1 = undefined;
                    var11 = var6.bind(var1)(var3);
                    var7 = null;
                    var9 = var7 != var4;
                    var3 = '[Forum Post Handlers] Thread cannot be null.';
                    var3 = var11.bind(var1)(var9, var3);
                    var9 = var10.getChannel;
                    var3 = var4.parent_id;
                    var3 = var9.bind(var10)(var3);
                    var9 = var8[var5];
                    var11 = var6.bind(var1)(var9);
                    var10 = var7 != var3;
                    var9 = '[Forum Post Handlers] Parent channel cannot be null.';
                    var9 = var11.bind(var1)(var10, var9);
                    var5 = var8[var5];
                    var8 = var6.bind(var1)(var5);
                    var5 = var3.isForumLikeChannel;
                    var6 = var5.bind(var3)();
                    var5 = 'Forum parents must be forum channels';
                    var5 = var8.bind(var1)(var6, var5);
                    var6 = _closure1_slot4;
                    var5 = var6.getContent;
                    var5 = var5.bind(var6)();
                    var5 = var7 != var5;
                    var9 = _closure1_slot7;
                    var8 = var9.getUser;
                    var6 = var4.ownerId;
                    var6 = var8.bind(var9)(var6);
                    if(var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var5 = var7 == var6;
case 38:
                    if(var5) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 23;
                    var5 = var6[var5];
                    var7 = var7.bind(var1)(var5);
                    var5 = var7.dismissKeyboard;
                    var5 = var5.bind(var7)();
                    var5 = _closure1_slot1;
                    var2 = 24;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.bind(var1)(var4, var3);
case 40:
                    return var1;
                }
            };
            var7 = var5.bind(var11)(var3, var4);
            var5 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var12 = var1.reaction;
                    var4 = var1.disableReactionCreates;
                    var3 = var1.disableReactionUpdates;
                    var7 = var1.locationAnalyticsObject;
                    var11 = var1.reactionLocation;
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var16 = _closure2_slot0;
                    var10 = var1.bind(var2)(var16);
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 10;
                    var2 = var14[var9];
                    var1 = undefined;
                    var17 = var13.bind(var1)(var2);
                    var2 = null;
                    var15 = var2 != var10;
                    var5 = '[Forum Post Handlers] Thread cannot be null.';
                    var5 = var17.bind(var1)(var15, var5);
                    var15 = _closure1_slot8;
                    var5 = var15.getMessage;
                    var5 = var5.bind(var15)(var16);
                    var5 = var5.firstMessage;
                    var9 = var14[var9];
                    var14 = var13.bind(var1)(var9);
                    var13 = var2 != var5;
                    var9 = '[Forum Post Handlers] Message cannot be null.';
                    var9 = var14.bind(var1)(var13, var9);
                    if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 42:
                    if(var3) { _fun0008_ip = 12; continue _fun0008 }
case 36:
                    var9 = var2 != var12;
                    if(!var9) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var3 = var12.burst_count;
                    var2 = 0;
                    var9 = var3 > var2;
case 43:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAddOrRemoveReaction;
                    var22 = var5.id;
                    var23 = var4;
                    var21 = var10;
                    var20 = var12;
                    var19 = var9;
                    var18 = var11;
                    var2 = var23[var3](var22, var21, var20, var19, var18, var17);
                    _fun0008_ip = 45; continue _fun0008;
case 12:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewReactions;
                    var2 = {};
                    var9 = var5.id;
                    var2['messageId'] = var9;
                    var8 = _closure2_slot0;
                    var2['channelId'] = var8;
                    var5 = var5.reactions;
                    var2['reactions'] = var5;
                    var5 = {};
                    var5['object'] = var7;
                    var6 = _closure1_slot10;
                    var6 = var6.CANT_ADD_OR_REMOVE;
                    var5['objectType'] = var6;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 45:
                    return var1;
                }
            };
            var6 = var5.bind(var11)(var3, var4);
            var5 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function(arg1) {
                var3 = _closure1_slot8;
                var1 = var3.getMessage;
                var6 = _closure2_slot0;
                var1 = var1.bind(var3)(var6);
                var5 = var1.firstMessage;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var3 = var4[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var3);
                var3 = null;
                var7 = var3 != var5;
                var3 = '[Forum Post Handlers] Message cannot be null.';
                var3 = var8.bind(var1)(var7, var3);
                var3 = _closure1_slot0;
                var2 = 25;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleViewReactions;
                var2 = {};
                var7 = var5.id;
                var2['messageId'] = var7;
                var2['channelId'] = var6;
                var6 = arg1;
                var6 = var6.emoji;
                var2['emoji'] = var6;
                var5 = var5.reactions;
                var2['reactions'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var5.bind(var11)(var3, var4);
            var10 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function() {
                var3 = _closure1_slot8;
                var1 = var3.getMessage;
                var6 = _closure2_slot0;
                var1 = var1.bind(var3)(var6);
                var5 = var1.firstMessage;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var3 = var4[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var3);
                var3 = null;
                var7 = var3 != var5;
                var3 = '[Forum Post Handlers] Message cannot be null.';
                var3 = var8.bind(var1)(var7, var3);
                var3 = _closure1_slot0;
                var2 = 25;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleViewReactions;
                var2 = {};
                var7 = var5.id;
                var2['messageId'] = var7;
                var2['channelId'] = var6;
                var5 = var5.reactions;
                var2['reactions'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var10.bind(var11)(var3, var4);
            var10 = var11.useCallback;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var12;
            var1 = function() {
                var3 = _closure1_slot5;
                var1 = var3.getChannel;
                var11 = _closure2_slot0;
                var7 = var1.bind(var3)(var11);
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 10;
                var3 = var10[var5];
                var1 = undefined;
                var12 = var8.bind(var1)(var3);
                var6 = null;
                var9 = var6 != var7;
                var3 = '[Forum Post Handlers] Thread cannot be null.';
                var3 = var12.bind(var1)(var9, var3);
                var9 = _closure1_slot8;
                var3 = var9.getMessage;
                var3 = var3.bind(var9)(var11);
                var3 = var3.firstMessage;
                var5 = var10[var5];
                var9 = var8.bind(var1)(var5);
                var8 = var6 != var3;
                var5 = '[Forum Post Handlers] Message cannot be null.';
                var5 = var9.bind(var1)(var8, var5);
                var9 = _closure1_slot0;
                var4 = 26;
                var4 = var10[var4];
                var5 = var9.bind(var1)(var4);
                var4 = var5.handleAddOrRemoveReaction;
                var3 = var3.id;
                var8 = _closure2_slot1;
                var2 = 9;
                var2 = var10[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.ReactionTypes;
                var2 = var2.BURST;
                var13 = var8 === var2;
                var17 = var5;
                var16 = var3;
                var15 = var7;
                var14 = null;
                var2 = var17[var4](var16, var15, var14, var13, var12);
                return var1;
            };
            var3 = var10.bind(var11)(var1, var3);
            var1 = {};
            var1['onTapMedia'] = var9;
            var1['onTapPost'] = var8;
            var1['onLongTapPost'] = var7;
            var1['onTapReaction'] = var6;
            var1['onLongTapReaction'] = var5;
            var1['onTapReactionCount'] = var4;
            var1['onTapAddReaction'] = var3;
            var1['onTapMostRecentMessage'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();