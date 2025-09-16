// app/actions/MessageActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var7 = function trackInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.inviteKey;
            var9 = var1.channelId;
            var7 = var1.messageId;
            var10 = var1.location;
            var5 = var1.inviteAnalyticsMetadata;
            var3 = var1.overrideProperties;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 44; continue _fun0001 }
 42:
            var3 = {};
 44:
            var6 = _closure1_slot18;
            var4 = var6.getId;
            var15 = var4.bind(var6)();
            var6 = _closure1_slot21;
            var4 = var6.getInvite;
            var13 = var4.bind(var6)(var8);
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 39;
            var4 = var11[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.parseExtraDataFromInviteKey;
            var4 = var4.bind(var6)(var8);
            var12 = null;
            var8 = var12 != var13;
            if(!var8) { _fun0001_ip = 147; continue _fun0001 }
 116:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 40;
            var6 = var14[var6];
            var11 = var11.bind(var1)(var6);
            var6 = var11.isEmbeddedApplicationInvite;
            var8 = var6.bind(var11)(var13);
 147:
            var6 = var12 == var13;
            var14 = undefined;
            if(var6) { _fun0001_ip = 176; continue _fun0001 }
 156:
            var6 = var13.target_application;
            var11 = var12 == var6;
            var14 = undefined;
            if(var11) { _fun0001_ip = 176; continue _fun0001 }
 171:
            var14 = var6.id;
 176:
            var6 = var12 != var14;
            if(!var6) { _fun0001_ip = 186; continue _fun0001 }
 183:
            var6 = var8;
 186:
            if(!var6) { _fun0001_ip = 232; continue _fun0001 }
 189:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 34;
            var6 = var11[var6];
            var11 = var8.bind(var1)(var6);
            var8 = var11.trackAppEmbedLinkSent;
            var6 = _closure1_slot45;
            var6 = var6.ACTIVITY_INVITE;
            var6 = var8.bind(var11)(var14, var6, var15);
 232:
            var8 = _closure1_slot19;
            var6 = var8.getChannel;
            var6 = var6.bind(var8)(var9);
            if(!(var12 == var6)) { _fun0001_ip = 501; continue _fun0001 }
 253:
            var8 = {};
            var9 = var12 != var13;
            if(!var9) { _fun0001_ip = 281; continue _fun0001 }
 262:
            var14 = var13.state;
            var11 = _closure1_slot33;
            var11 = var11.RESOLVED;
            var9 = var14 === var11;
 281:
            if(!var9) { _fun0001_ip = 294; continue _fun0001 }
 284:
            var11 = var13.inviter;
            var9 = var12 != var11;
 294:
            if(!var9) { _fun0001_ip = 1131; continue _fun0001 }
 300:
            var9 = var13.inviter;
            var9 = var9.id;
            var8['invite_inviter_id'] = var9;
            var9 = var13.target_application;
            if(!(var12 != var9)) { _fun0001_ip = 344; continue _fun0001 }
 327:
            var9 = var13.target_application;
            var9 = var9.id;
            var8['application_id'] = var9;
 344:
            var14 = {};
            var20 = var14;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'location';
            var14[var8] = var10;
            var8 = _closure1_slot31;
            var9 = var8.FRIEND_INVITE;
            var8 = 'invite_type';
            var14[var8] = var9;
            var9 = var4.baseCode;
            var8 = 'invite_code';
            var14[var8] = var9;
            var8 = 'message_id';
            var14[var8] = var7;
            var8 = _closure1_slot32;
            var9 = var8.DIRECT_MESSAGE;
            var8 = 'send_type';
            var14[var8] = var9;
            var9 = var4.guildScheduledEventId;
            var8 = 'invite_guild_scheduled_event_id';
            var14[var8] = var9;
            var20 = var14;
            var19 = var3;
            var8 = copyDataProperties(var20, var19);
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 32;
            var8 = var11[var8];
            var11 = var9.bind(var1)(var8);
            var9 = var11.trackWithMetadata;
            var8 = _closure1_slot28;
            var8 = var8.INVITE_SENT;
            var8 = var9.bind(var11)(var8, var14);
            _fun0001_ip = 1131; continue _fun0001;
 501:
            var8 = var6.isMultiUserDM;
            var8 = var8.bind(var6)();
            if(var8) { _fun0001_ip = 541; continue _fun0001 }
 514:
            var8 = var6.isPrivate;
            var8 = var8.bind(var6)();
            var14 = null;
            if(var8) { _fun0001_ip = 551; continue _fun0001 }
 529:
            var8 = _closure1_slot31;
            var14 = var8.SERVER_INVITE;
            _fun0001_ip = 551; continue _fun0001;
 541:
            var8 = _closure1_slot31;
            var14 = var8.GDM_INVITE;
 551:
            var8 = {};
            var9 = var14;
            if(!(var12 != var13)) { _fun0001_ip = 828; continue _fun0001 }
 563:
            var15 = var13.state;
            var11 = _closure1_slot33;
            var11 = var11.RESOLVED;
            var9 = var14;
            if(!(var15 === var11)) { _fun0001_ip = 828; continue _fun0001 }
 588:
            var11 = var13.channel;
            var9 = var14;
            if(!(var12 != var11)) { _fun0001_ip = 828; continue _fun0001 }
 603:
            var11 = var13.channel;
            var15 = var11.id;
            var8['invite_channel_id'] = var15;
            var16 = var13.guild;
            var17 = var12 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 638; continue _fun0001 }
 633:
            var15 = var16.id;
 638:
            var8['invite_guild_id'] = var15;
            var15 = var11.type;
            var8['invite_channel_type'] = var15;
            var15 = var13.inviter;
            if(!(var12 != var15)) { _fun0001_ip = 682; continue _fun0001 }
 665:
            var15 = var13.inviter;
            var15 = var15.id;
            var8['invite_inviter_id'] = var15;
 682:
            var15 = var13.target_application;
            if(!(var12 != var15)) { _fun0001_ip = 709; continue _fun0001 }
 692:
            var13 = var13.target_application;
            var13 = var13.id;
            var8['application_id'] = var13;
 709:
            var15 = _closure1_slot17;
            var13 = var15.getLastActiveStream;
            var16 = var13.bind(var15)();
            var9 = var14;
            if(!(var12 != var16)) { _fun0001_ip = 828; continue _fun0001 }
 730:
            var13 = var16.channelId;
            var11 = var11.id;
            var9 = var14;
            if(!(var13 === var11)) { _fun0001_ip = 828; continue _fun0001 }
 747:
            var11 = _closure1_slot31;
            var11 = var11.STREAM;
            var13 = var16.ownerId;
            var8['destination_user_id'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 41;
            var13 = var15[var13];
            var15 = var14.bind(var1)(var13);
            var14 = var15.getStreamerApplication;
            var13 = _closure1_slot23;
            var14 = var14.bind(var15)(var16, var13);
            var15 = var12 != var14;
            var13 = null;
            if(!var15) { _fun0001_ip = 819; continue _fun0001 }
 814:
            var13 = var14.id;
 819:
            var8['application_id'] = var13;
            var9 = var11;
 828:
            if(!(var12 != var5)) { _fun0001_ip = 956; continue _fun0001 }
 835:
            var11 = var5.suggestionData;
            if(!(var12 != var11)) { _fun0001_ip = 945; continue _fun0001 }
 845:
            var11 = var5.suggestionData;
            var11 = var11.isAffinitySuggestion;
            var8['is_suggested'] = var11;
            var11 = var5.suggestionData;
            var11 = var11.rowNum;
            var8['row_num'] = var11;
            var11 = var5.suggestionData;
            var11 = var11.numTotal;
            var8['num_total'] = var11;
            var11 = var5.suggestionData;
            var11 = var11.numAffinityConnections;
            var8['num_affinity_connections'] = var11;
            var11 = var5.suggestionData;
            var11 = var11.isFiltered;
            var8['is_filtered'] = var11;
 945:
            var5 = var5.source;
            var8['source'] = var5;
 956:
            var5 = {};
            var20 = var5;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'location';
            var5[var8] = var10;
            var8 = 'invite_type';
            var5[var8] = var9;
            var9 = var4.baseCode;
            var8 = 'invite_code';
            var5[var8] = var9;
            var8 = var6.getGuildId;
            var9 = var8.bind(var6)();
            var8 = 'guild_id';
            var5[var8] = var9;
            var8 = var6.id;
            var6 = 'channel_id';
            var5[var6] = var8;
            var6 = 'message_id';
            var5[var6] = var7;
            var6 = _closure1_slot32;
            var7 = var6.DIRECT_MESSAGE;
            var6 = 'send_type';
            var5[var6] = var7;
            var6 = var4.guildScheduledEventId;
            var4 = 'invite_guild_scheduled_event_id';
            var5[var4] = var6;
            var20 = var5;
            var19 = var3;
            var3 = copyDataProperties(var20, var19);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 32;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.trackWithMetadata;
            var2 = _closure1_slot28;
            var2 = var2.INVITE_SENT;
            var2 = var3.bind(var4)(var2, var5);
 1131:
            return var1;
        }
    };
    var _closure1_slot56 = var7;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.hideMessageConfettiBar;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var8 = var6[var2];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ReferencedMessageState;
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var2 = 20;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot23 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot24 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SlowmodeType;
    var _closure1_slot25 = var2;
    var2 = 23;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot26 = var2;
    var2 = 24;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AbortCodes;
    var _closure1_slot27 = var8;
    var10 = var2.AnalyticEvents;
    var _closure1_slot28 = var10;
    var10 = var2.Endpoints;
    var _closure1_slot29 = var10;
    var10 = var2.Permissions;
    var10 = var2.ChannelTypes;
    var _closure1_slot30 = var10;
    var10 = var2.LoggingInviteTypes;
    var _closure1_slot31 = var10;
    var10 = var2.SendTypes;
    var _closure1_slot32 = var10;
    var10 = var2.InviteStates;
    var _closure1_slot33 = var10;
    var10 = var2.MessageFlags;
    var _closure1_slot34 = var10;
    var10 = var2.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot35 = var10;
    var10 = var2.MessageTypes;
    var _closure1_slot36 = var10;
    var10 = var2.AllowedMentionTypes;
    var _closure1_slot37 = var10;
    var10 = var2.HelpdeskArticles;
    var _closure1_slot38 = var10;
    var10 = var2.MarketingURLs;
    var _closure1_slot39 = var10;
    var10 = var2.MessageReferenceTypes;
    var _closure1_slot40 = var10;
    var10 = var2.LOCAL_BOT_ID;
    var _closure1_slot41 = var10;
    var10 = var2.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot42 = var10;
    var10 = var2.MessageStates;
    var _closure1_slot43 = var10;
    var2 = var2.ActivityActionTypes;
    var _closure1_slot44 = var2;
    var2 = 25;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.LinkType;
    var _closure1_slot45 = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildTemplateStates;
    var _closure1_slot46 = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.FileUploadErrorTypes;
    var _closure1_slot47 = var10;
    var2 = var2.MessageSendLocation;
    var _closure1_slot48 = var2;
    var2 = 28;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var2 = var2.MediaPlayerManager;
    var _closure1_slot49 = var2;
    var2 = 29;
    var10 = var6[var2];
    var12 = var9.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'MessageActionCreators';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot50 = var10;
    var2 = var6[var2];
    var10 = var9.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var15 = 'MessageQueue';
    var16 = var9;
    var2 = new var16[var10](var15, var14);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot51 = var2;
    var2 = false;
    var _closure1_slot52 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function RemoteFetch() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['completed'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'markComplete';
        var1['key'] = var5;
        var2 = function value() {
            var2 = true;
            var1 = this;
            var1['completed'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot53 = var2;
    var2 = {};
    var10 = var8.EMAIL_VERIFICATION_REQUIRED;
    var9 = {};
    var11 = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k1Cjqq;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_USER;
    var9 = {};
    var11 = 'BOT_DM_SEND_FAILED_WITH_HELP_LINK';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 44;
        var3 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var9[var1];
        var1 = var2.bind(var8)(var1);
        var1 = var1.t;
        var2 = var1.CTMXwM;
        var1 = {};
        var7 = _closure1_slot1;
        var6 = 45;
        var6 = var9[var6];
        var7 = var7.bind(var8)(var6);
        var6 = var7.getArticleURL;
        var5 = _closure1_slot38;
        var5 = var5.DM_COULD_NOT_BE_DELIVERED;
        var5 = var6.bind(var7)(var5);
        var1['helpUrl'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var10 = var8.RATE_LIMIT_DM_OPEN;
    var9 = {};
    var11 = 'BOT_DM_RATE_LIMITED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.E8nbNT;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var10 = var8.SEND_MESSAGE_TEMPORARILY_DISABLED;
    var9 = {};
    var11 = 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED';
    var9['messageName'] = var11;
    var12 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aRUbam;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var12;
    var2[var10] = var9;
    var10 = var8.SLOWMODE_RATE_LIMITED;
    var9 = {};
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aRUbam;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_GAME_FRIEND_DM;
    var9 = {};
    var11 = 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1./meGhY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var9 = var8.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE;
    var8 = {};
    var10 = 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT';
    var8['messageName'] = var10;
    var10 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 44;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Oc1Zj4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['messageGetter'] = var10;
    var2[var9] = var8;
    var _closure1_slot54 = var2;
    var2 = {};
    var8 = function receiveMessage(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arguments[2];
            var5 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var6 = false;
 14:
            if(!(var5 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
            var5 = {};
 20:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 46;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'MESSAGE_CREATE';
            var2['type'] = var7;
            var7 = arg1;
            var2['channelId'] = var7;
            var7 = arg2;
            var2['message'] = var7;
            var2['optimistic'] = var6;
            var2['sendMessageOptions'] = var5;
            var5 = false;
            var2['isPushNotification'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['receiveMessage'] = var8;
    var8 = function sendBotMessage(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var8 = arg3;
            var1 = null;
            if(!(var1 != var8)) { _fun0003_ip = 77; continue _fun0003 }
 12:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 32;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot28;
            var2 = var1.AUTOMATED_MESSAGE_RECEIVED;
            var1 = {};
            var6 = 'Clyde';
            var1['message_author'] = var6;
            var1['message_name'] = var8;
            var1 = var3.bind(var4)(var2, var1);
 77:
            var4 = _closure1_slot55;
            var3 = var4.receiveMessage;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 47;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var2);
            var6 = var7.createBotMessage;
            var2 = {};
            var9 = arg4;
            var2['messageId'] = var9;
            var2['channelId'] = var5;
            var9 = arg2;
            var2['content'] = var9;
            var2['loggingName'] = var8;
            var2 = var6.bind(var7)(var2);
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var2['sendBotMessage'] = var8;
    var8 = function sendNitroSystemMessage(arg1, arg2, arg3) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 47;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channelId'] = var6;
        var4 = arg3;
        var2['nonce'] = var4;
        var4 = _closure1_slot36;
        var4 = var4.NITRO_NOTIFICATION;
        var2['type'] = var4;
        var4 = arg2;
        var2['content'] = var4;
        var4 = _closure1_slot34;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Nitro Notification', 'discriminator': null, 'avatar': 'nitro', 'bot': true};
        var5 = _closure1_slot41;
        var4['id'] = var5;
        var5 = _closure1_slot42;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot55;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot43;
        var8 = var7.SENT;
        var7 = 'state';
        var2[var7] = var8;
        var7 = 'channel_id';
        var2[var7] = var6;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendNitroSystemMessage'] = var8;
    var8 = function sendGiftingPromptSystemMessage(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 47;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channelId'] = var6;
        var4 = _closure1_slot36;
        var4 = var4.GIFTING_PROMPT;
        var2['type'] = var4;
        var4 = '';
        var2['content'] = var4;
        var4 = _closure1_slot34;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Gifting Prompt', 'discriminator': null, 'avatar': 'gifting_prompt', 'bot': true};
        var5 = _closure1_slot41;
        var4['id'] = var5;
        var5 = _closure1_slot42;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var4 = arg2;
        var2['giftingPrompt'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot55;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot43;
        var8 = var7.SENT;
        var7 = 'state';
        var2[var7] = var8;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendGiftingPromptSystemMessage'] = var8;
    var8 = function sendClydeError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var8 = arguments[1];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var8 = 0;
 14:
            var4 = _closure1_slot19;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var6);
            var3 = null;
            if(!(var3 != var10)) { _fun0004_ip = 814; continue _fun0004 }
 40:
            var3 = _closure1_slot27;
            var3 = var3.SLOWMODE_RATE_LIMITED;
            if(!(var8 !== var3)) { _fun0004_ip = 722; continue _fun0004 }
 57:
            var3 = _closure1_slot27;
            var3 = var3.INVALID_MESSAGE_SEND_USER;
            if(!(var8 !== var3)) { _fun0004_ip = 616; continue _fun0004 }
 74:
            var3 = _closure1_slot27;
            var3 = var3.TOO_MANY_THREADS;
            if(!(var8 !== var3)) { _fun0004_ip = 462; continue _fun0004 }
 91:
            var3 = _closure1_slot27;
            var3 = var3.TOO_MANY_ANNOUNCEMENT_THREADS;
            if(!(var8 !== var3)) { _fun0004_ip = 396; continue _fun0004 }
 108:
            var3 = _closure1_slot27;
            var3 = var3.HARMFUL_LINK_MESSAGE_BLOCKED;
            if(!(var8 !== var3)) { _fun0004_ip = 312; continue _fun0004 }
 125:
            var3 = _closure1_slot54;
            var3 = var8 in var3;
            if(var3) { _fun0004_ip = 279; continue _fun0004 }
 139:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 44;
            var5 = var12[var3];
            var5 = var4.bind(var1)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var3 = var12[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.t;
            var4 = var3.CTMXwM;
            var3 = {};
            var11 = _closure1_slot1;
            var9 = 45;
            var9 = var12[var9];
            var12 = var11.bind(var1)(var9);
            var11 = var12.getArticleURL;
            var9 = _closure1_slot38;
            var9 = var9.DM_COULD_NOT_BE_DELIVERED;
            var9 = var11.bind(var12)(var9);
            var3['helpUrl'] = var9;
            var4 = var5.bind(var7)(var4, var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var5 = 'SEND_FAILED (';
            var3 = ')';
            var3 = var7.bind(var5)(var8, var3);
            var5 = var4;
            var4 = var3;
            _fun0004_ip = 797; continue _fun0004;
 279:
            var7 = _closure1_slot54;
            var3 = var7[var8];
            var4 = var3.messageName;
            var8 = var7[var8];
            var7 = var8.messageGetter;
            var5 = var7.bind(var8)();
            _fun0004_ip = 797; continue _fun0004;
 312:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 44;
            var8 = var11[var3];
            var8 = var7.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var11[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.t;
            var7 = var3.zSG3Q0;
            var3 = {};
            var11 = _closure1_slot39;
            var11 = var11.HARMFUL_LINKS;
            var3['helpUrl'] = var11;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'HARMFUL_LINK_MESSAGE_BLOCKED';
            _fun0004_ip = 797; continue _fun0004;
 396:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 44;
            var7 = var11[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var11[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.aY+lLC;
            var5 = var7.bind(var8)(var3);
            var4 = 'TOO_MANY_ANNOUNCEMENT_THREADS';
            _fun0004_ip = 797; continue _fun0004;
 462:
            var3 = var10.isForumLikeChannel;
            var3 = var3.bind(var10)();
            if(var3) { _fun0004_ip = 547; continue _fun0004 }
 475:
            var3 = var10.isForumPost;
            var3 = var3.bind(var10)();
            if(var3) { _fun0004_ip = 547; continue _fun0004 }
 488:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 44;
            var7 = var11[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var11[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.5EMPAw;
            var7 = var7.bind(var8)(var3);
            _fun0004_ip = 604; continue _fun0004;
 547:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 44;
            var8 = var12[var3];
            var8 = var11.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var12[var3];
            var3 = var11.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3./jUd29;
            var7 = var8.bind(var9)(var3);
 604:
            var4 = 'TOO_MANY_THREADS';
            var5 = var7;
            _fun0004_ip = 797; continue _fun0004;
 616:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 44;
            var8 = var13[var3];
            var8 = var7.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var13[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.t;
            var7 = var3.CTMXwM;
            var3 = {};
            var12 = _closure1_slot1;
            var11 = 45;
            var11 = var13[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot38;
            var11 = var11.DM_COULD_NOT_BE_DELIVERED;
            var11 = var12.bind(var13)(var11);
            var3['helpUrl'] = var11;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'INVALID_MESSAGE_SEND_USER';
            _fun0004_ip = 797; continue _fun0004;
 722:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 44;
            var8 = var11[var3];
            var8 = var7.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var11[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.t;
            var7 = var3.IWntYm;
            var3 = {};
            var10 = var10.rateLimitPerUser;
            var3['seconds'] = var10;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'SLOWMODE_RATE_LIMITED';
 797:
            var3 = _closure1_slot55;
            var2 = var3.sendBotMessage;
            var2 = var2.bind(var3)(var6, var5, var4);
 814:
            return var1;
        }
    };
    var2['sendClydeError'] = var8;
    var8 = function sendExplicitMediaClydeError(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot19;
            var2 = var3.getChannel;
            var13 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var13)) { _fun0005_ip = 369; continue _fun0005 }
 34:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 48;
            var7 = var12[var3];
            var3 = undefined;
            var9 = var11.bind(var3)(var7);
            var8 = var9.match;
            var7 = {};
            var10 = var13.isDM;
            var10 = var10.bind(var13)();
            var7['isDM'] = var10;
            var10 = var13.isGroupDM;
            var10 = var10.bind(var13)();
            var7['isGDM'] = var10;
            var10 = var8.bind(var9)(var7);
            var9 = var10.with;
            var8 = {};
            var7 = true;
            var8['isDM'] = var7;
            var7 = function() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 44;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.mktny8;
                var2 = var3.bind(var4)(var2);
                var1['message'] = var2;
                var2 = 'BOT_DM_EXPLICIT_CONTENT';
                var1['messageName'] = var2;
                return var1;
            };
            var10 = var9.bind(var10)(var8, var7);
            var9 = var10.with;
            var8 = {'isDM': false, 'isGDM': true};
            var7 = function() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 44;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.mktny8;
                var2 = var3.bind(var4)(var2);
                var1['message'] = var2;
                var2 = 'BOT_GDM_EXPLICIT_CONTENT';
                var1['messageName'] = var2;
                return var1;
            };
            var8 = var9.bind(var10)(var8, var7);
            var7 = var8.otherwise;
            var6 = function() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 44;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.i4AbAQ;
                var2 = var3.bind(var4)(var2);
                var1['message'] = var2;
                var2 = 'BOT_GUILD_EXPLICIT_CONTENT';
                var1['messageName'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var16 = var6.message;
            var15 = var6.messageName;
            var6 = 49;
            var6 = var12[var6];
            var7 = var11.bind(var3)(var6);
            var6 = var7.createNonce;
            var6 = var6.bind(var7)();
            var8 = _closure1_slot55;
            var7 = var8.sendBotMessage;
            var18 = var8;
            var17 = var5;
            var14 = var6;
            var7 = var18[var7](var17, var16, var15, var14, var13);
            var10 = 50;
            var7 = var12[var10];
            var9 = var11.bind(var3)(var7);
            var8 = var9.trackMediaRedactionAction;
            var7 = {};
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.TrackMediaRedactionActionType;
            var10 = var10.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
            var7['action'] = var10;
            var7['messageId'] = var6;
            var7['channelId'] = var5;
            var10 = arg3;
            var7['context'] = var10;
            var7 = var8.bind(var9)(var7);
            var2 = var2 != var4;
            if(!var2) { _fun0005_ip = 311; continue _fun0005 }
 300:
            var8 = var4.length;
            var7 = 0;
            var2 = var8 > var7;
 311:
            if(!var2) { _fun0005_ip = 369; continue _fun0005 }
 314:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 46;
            var1 = var7[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
            var1['type'] = var7;
            var1['messageId'] = var6;
            var1['channelId'] = var5;
            var1['attachments'] = var4;
            var1 = var2.bind(var3)(var1);
 369:
            var1 = undefined;
            return var1;
        }
    };
    var2['sendExplicitMediaClydeError'] = var8;
    var8 = function truncateMessages(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'TRUNCATE_MESSAGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['truncateBottom'] = var5;
        var5 = arg3;
        var2['truncateTop'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['truncateMessages'] = var8;
    var8 = function clearChannel(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_MESSAGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearChannel'] = var8;
    var8 = function jumpToPresent(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var7 = _closure1_slot55;
            var6 = var7.trackJump;
            var3 = null;
            var2 = 'Present';
            var2 = var6.bind(var7)(var5, var3, var2);
            var6 = {};
            var2 = true;
            var6['present'] = var2;
            var3 = _closure1_slot22;
            var2 = var3.hasPresent;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0006_ip = 93; continue _fun0006 }
 61:
            var7 = _closure1_slot55;
            var3 = var7.fetchMessages;
            var2 = {};
            var2['channelId'] = var5;
            var2['limit'] = var4;
            var2['jump'] = var6;
            var2 = var3.bind(var7)(var2);
            _fun0006_ip = 150; continue _fun0006;
 93:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 46;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var1['type'] = var7;
            var1['jump'] = var6;
            var1['channelId'] = var5;
            var1['limit'] = var4;
            var1 = var2.bind(var3)(var1);
 150:
            var1 = undefined;
            return var1;
        }
    };
    var2['jumpToPresent'] = var8;
    var8 = function trackJump(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 32;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot28;
        var3 = var2.JUMP;
        var2 = {};
        var6 = arg3;
        var2['context'] = var6;
        var6 = arg1;
        var2['channel_id'] = var6;
        var6 = arg2;
        var2['message_id'] = var6;
        var7 = arg4;
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackJump'] = var8;
    var8 = function jumpToMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var13 = var1.channelId;
            var12 = var1.messageId;
            var11 = var1.flash;
            var2 = undefined;
            if(!(var11 === var2)) { _fun0007_ip = 27; continue _fun0007 }
 25:
            var11 = false;
 27:
            var10 = var1.offset;
            var7 = var1.context;
            var3 = var1.extraProperties;
            if(!(var3 === var2)) { _fun0007_ip = 50; continue _fun0007 }
 48:
            var3 = null;
 50:
            var6 = var1.isPreload;
            var9 = var1.returnMessageId;
            var5 = var1.skipLocalFetch;
            var8 = var1.jumpType;
            var4 = var1.avoidInitialScroll;
            var2 = 'string';
            var1 = typeof var7;
            if(!(var2 === var1)) { _fun0007_ip = 123; continue _fun0007 }
 91:
            var2 = _closure1_slot55;
            var1 = var2.trackJump;
            var18 = var2;
            var17 = var13;
            var16 = var12;
            var15 = var7;
            var14 = var3;
            var1 = var18[var1](var17, var16, var15, var14, var13);
 123:
            var1 = _closure1_slot49;
            var3 = null;
            var1 = var3 == var1;
            if(var1) { _fun0007_ip = 153; continue _fun0007 }
 139:
            var2 = _closure1_slot49;
            var2 = var2.pauseAllMediaPlayers;
            var1 = var3 == var2;
 153:
            if(var1) { _fun0007_ip = 170; continue _fun0007 }
 156:
            var2 = _closure1_slot49;
            var1 = var2.pauseAllMediaPlayers;
            var1 = var1.bind(var2)();
 170:
            var3 = _closure1_slot55;
            var2 = var3.fetchMessages;
            var1 = {};
            var1['channelId'] = var13;
            var7 = _closure1_slot35;
            var1['limit'] = var7;
            var7 = {};
            var7['messageId'] = var12;
            var7['flash'] = var11;
            var7['offset'] = var10;
            var7['returnMessageId'] = var9;
            var7['jumpType'] = var8;
            var1['jump'] = var7;
            var1['isPreload'] = var6;
            var1['skipLocalFetch'] = var5;
            var1['avoidInitialScroll'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['jumpToMessage'] = var8;
    var8 = function focusMessage(arg1) {
        var1 = arg1;
        var6 = var1.channelId;
        var5 = var1.messageId;
        var3 = _closure1_slot55;
        var2 = var3.fetchMessages;
        var1 = {};
        var1['channelId'] = var6;
        var4 = _closure1_slot35;
        var1['limit'] = var4;
        var4 = {};
        var4['messageId'] = var5;
        var1['focus'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['focusMessage'] = var8;
    var8 = function fetchMessage(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var5 = var1.messageId;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 51;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
        var6 = _closure1_slot29;
        var4 = var6.MESSAGES;
        var4 = var4.bind(var6)(var7);
        var1['url'] = var4;
        var4 = {};
        var6 = 1;
        var4['limit'] = var6;
        var4['around'] = var5;
        var1['query'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var2 = var1.body;
                var2 = var2.length;
                var4 = 0;
                if(!(!(var2 > var4))) { _fun0008_ip = 23; continue _fun0008 }
 19:
                var2 = undefined;
                return var2;
 23:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 52;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.createMessageRecord;
                var1 = var1.body;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['fetchMessage'] = var8;
    var8 = function fetchMessages(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = this;
            var14 = var1.channelId;
            var _closure2_slot0 = var14;
            var12 = var1.before;
            var _closure2_slot1 = var12;
            var11 = var1.after;
            var _closure2_slot2 = var11;
            var10 = var1.limit;
            var _closure2_slot3 = var10;
            var13 = var1.jump;
            var _closure2_slot4 = var13;
            var15 = var1.focus;
            var8 = var1.isPreload;
            var3 = var1.skipLocalFetch;
            var18 = var1.truncate;
            var _closure2_slot5 = var18;
            var4 = var1.forICYMI;
            var _closure2_slot6 = var4;
            var4 = var1.avoidInitialScroll;
            var _closure2_slot7 = var4;
            var7 = var1.feature;
            var1 = undefined;
            var _closure2_slot10 = var1;
            var _closure2_slot11 = var1;
            var9 = _closure1_slot19;
            var4 = var9.getChannel;
            var16 = var4.bind(var9)(var14);
            var9 = _closure1_slot7;
            var4 = var9.isConnectedOrOverlay;
            var4 = var4.bind(var9)();
            var _closure2_slot8 = var4;
            var4 = global;
            var17 = var4.Date;
            var9 = var17.now;
            var9 = var9.bind(var17)();
            var _closure2_slot9 = var9;
            var9 = null;
            if(!(var9 != var16)) { _fun0009_ip = 204; continue _fun0009 }
 182:
            var17 = var16.type;
            var16 = _closure1_slot30;
            var16 = var16.GUILD_STORE;
            if(!(var17 !== var16)) { _fun0009_ip = 757; continue _fun0009 }
 204:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 53;
            var16 = var19[var16];
            var16 = var17.bind(var1)(var16);
            var16 = var16.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var14 !== var16)) { _fun0009_ip = 755; continue _fun0009 }
 237:
            var17 = _closure1_slot50;
            var16 = var17.log;
            var20 = var4.JSON;
            var19 = var20.stringify;
            var24 = var19.bind(var20)(var13);
            var4 = var4.HermesInternal;
            var22 = var4.concat;
            var31 = 'Fetching messages for ';
            var29 = ' between ';
            var27 = ' and ';
            var25 = '. jump=';
            var30 = var14;
            var28 = var11;
            var26 = var12;
            var4 = var31[var22](var30, var29, var28, var27, var26, var25, var24, var23);
            var4 = var16.bind(var17)(var4);
            var17 = _closure1_slot55;
            var16 = var17._tryFetchMessagesCached;
            var4 = {};
            var4['channelId'] = var14;
            var4['before'] = var12;
            var4['after'] = var11;
            var4['limit'] = var10;
            var4['jump'] = var13;
            var4['focus'] = var15;
            var4['truncate'] = var18;
            var4 = var16.bind(var17)(var4);
            if(var4) { _fun0009_ip = 755; continue _fun0009 }
 373:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 54;
            var4 = var17[var4];
            var4 = var16.bind(var1)(var4);
            var16 = var4.fetchMessages;
            var4 = var16.recordStart;
            var4 = var4.bind(var16)();
            var16 = var9 != var13;
            var4 = undefined;
            if(!var16) { _fun0009_ip = 421; continue _fun0009 }
 418:
            var4 = var13;
 421:
            var13 = var9 == var4;
            if(!var13) { _fun0009_ip = 432; continue _fun0009 }
 428:
            var13 = var9 != var15;
 432:
            if(!var13) { _fun0009_ip = 450; continue _fun0009 }
 435:
            var13 = {};
            var30 = var13;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            var4 = var13;
 450:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 55;
            var17 = var16[var13];
            var18 = var15.bind(var1)(var17);
            var17 = var18.getOrCreate;
            var18 = var17.bind(var18)(var14);
            var17 = var18.loadStart;
            var18 = var17.bind(var18)(var4);
            var13 = var16[var13];
            var17 = var15.bind(var1)(var13);
            var13 = var17.commit;
            var13 = var13.bind(var17)(var18);
            var13 = 46;
            var13 = var16[var13];
            var16 = var15.bind(var1)(var13);
            var15 = var16.dispatch;
            var13 = {};
            var17 = 'LOAD_MESSAGES';
            var13['type'] = var17;
            var13 = var15.bind(var16)(var13);
            var13 = var9 == var4;
            var9 = undefined;
            if(var13) { _fun0009_ip = 562; continue _fun0009 }
 557:
            var9 = var4.messageId;
 562:
            _closure2_slot10 = var9;
            var4 = _closure1_slot53;
            var13 = var4.prototype;
            var13 = Object.create(var13, {constructor: {value: var4}});
            var31 = var13;
            var4 = new var31[var4](var30);
            var4 = var4 instanceof Object ? var4 : var13;
            _closure2_slot11 = var4;
            if(var3) { _fun0009_ip = 625; continue _fun0009 }
 597:
            var3 = var5.fetchLocalMessages;
            var31 = var5;
            var30 = var14;
            var29 = var12;
            var28 = var11;
            var27 = var10;
            var26 = var4;
            var3 = var31[var3](var30, var29, var28, var27, var26, var25);
 625:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 51;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            var13 = _closure1_slot29;
            var6 = var13.MESSAGES;
            var6 = var6.bind(var13)(var14);
            var3['url'] = var6;
            var6 = {};
            var6['before'] = var12;
            var6['after'] = var11;
            var6['limit'] = var10;
            var6['around'] = var9;
            var6['preload'] = var8;
            var6['feature'] = var7;
            var3['query'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 54;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var7 = var6.fetchMessages;
                var6 = var7.recordEnd;
                var6 = var6.bind(var7)();
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var3 = var2.dispatchMessages;
                var2 = var3.measure;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure3_slot0;
                        var11 = var1.body;
                        var1 = _closure2_slot1;
                        var7 = null;
                        var10 = var7 != var1;
                        var1 = _closure2_slot2;
                        var9 = var7 != var1;
                        var1 = _closure2_slot10;
                        var2 = var7 != var1;
                        if(var2) { _fun0010_ip = 96; continue _fun0010 }
 46:
                        var4 = var11.length;
                        var1 = _closure2_slot3;
                        var1 = var4 === var1;
                        if(!var1) { _fun0010_ip = 93; continue _fun0010 }
 62:
                        var4 = var10;
                        if(var4) { _fun0010_ip = 90; continue _fun0010 }
 68:
                        var6 = _closure2_slot1;
                        var6 = var7 == var6;
                        if(!var6) { _fun0010_ip = 87; continue _fun0010 }
 79:
                        var8 = _closure2_slot2;
                        var6 = var7 == var8;
 87:
                        var4 = var6;
 90:
                        var1 = var4;
 93:
                        var2 = var1;
 96:
                        var1 = _closure2_slot10;
                        var4 = var7 != var1;
                        if(var4) { _fun0010_ip = 129; continue _fun0010 }
 107:
                        var1 = var9;
                        if(!var1) { _fun0010_ip = 126; continue _fun0010 }
 113:
                        var8 = var11.length;
                        var6 = _closure2_slot3;
                        var1 = var8 === var6;
 126:
                        var4 = var1;
 129:
                        var1 = _closure2_slot10;
                        var8 = var2;
                        var6 = var4;
                        if(!(var7 != var1)) { _fun0010_ip = 390; continue _fun0010 }
 146:
                        var1 = global;
                        var13 = var1.Math;
                        var12 = var13.floor;
                        var14 = _closure2_slot3;
                        var1 = 2;
                        var7 = var14 / var1;
                        var7 = var12.bind(var13)(var7);
                        var12 = _closure2_slot10;
                        var15 = new Array(1);
                        var15[0] = var12;
                        var13 = var11.map;
                        var12 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var24 = var13.bind(var11)(var12);
                        var13 = 1;
                        var25 = var15;
                        var23 = var13;
                        var12 = arraySpread(var25, var24, var23);
                        var12 = var15.filter;
                        var3 = function(arg1, arg2, arg3) {
                            var3 = arg3;
                            var2 = var3.indexOf;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = arg2;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var16 = var12.bind(var15)(var3);
                        var15 = var16.sort;
                        var18 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var12 = 56;
                        var17 = var17[var12];
                        var12 = undefined;
                        var12 = var18.bind(var12)(var17);
                        var12 = var12.compare;
                        var16 = var15.bind(var16)(var12);
                        var15 = var16.indexOf;
                        var12 = _closure2_slot10;
                        var12 = var15.bind(var16)(var12);
                        var1 = var14 % var1;
                        var1 = var7 + var1;
                        var1 = var1 - var13;
                        if(!(var12 < var1)) { _fun0010_ip = 306; continue _fun0010 }
 304:
                        var2 = false;
 306:
                        var1 = var11.length;
                        var1 = var1 - var12;
                        if(!(var1 < var7)) { _fun0010_ip = 321; continue _fun0010 }
 319:
                        var4 = false;
 321:
                        var8 = var2;
                        var6 = var4;
                        if(!var4) { _fun0010_ip = 390; continue _fun0010 }
 330:
                        var7 = var11.length;
                        var1 = 0;
                        var8 = var2;
                        var6 = var4;
                        if(!(var7 > var1)) { _fun0010_ip = 390; continue _fun0010 }
 347:
                        var12 = _closure1_slot24;
                        var7 = var12.lastMessageId;
                        var3 = _closure2_slot0;
                        var3 = var7.bind(var12)(var3);
                        var1 = var11[var1];
                        var1 = var1.id;
                        var8 = var2;
                        var6 = var4;
                        if(!(var1 === var3)) { _fun0010_ip = 390; continue _fun0010 }
 385:
                        var6 = false;
                        var8 = var2;
 390:
                        var3 = _closure1_slot50;
                        var2 = var3.log;
                        var25 = var11.length;
                        var12 = _closure2_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var15 = var1.concat;
                        var26 = 'Fetched ';
                        var24 = ' messages for ';
                        var22 = ' isBefore:';
                        var20 = ' isAfter:';
                        var23 = var12;
                        var21 = var10;
                        var19 = var9;
                        var1 = var26[var15](var25, var24, var23, var22, var21, var20, var19, var18);
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure2_slot11;
                        var1 = var2.markComplete;
                        var1 = var1.bind(var2)();
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var13 = 'LOAD_MESSAGES_SUCCESS';
                        var2['type'] = var13;
                        var2['channelId'] = var12;
                        var2['messages'] = var11;
                        var2['isBefore'] = var10;
                        var2['isAfter'] = var9;
                        var2['hasMoreBefore'] = var8;
                        var2['hasMoreAfter'] = var6;
                        var6 = _closure2_slot3;
                        var2['limit'] = var6;
                        var6 = _closure2_slot4;
                        var2['jump'] = var6;
                        var6 = _closure2_slot6;
                        var2['forICYMI'] = var6;
                        var6 = _closure2_slot8;
                        var6 = !var6;
                        if(var6) { _fun0010_ip = 607; continue _fun0010 }
 585:
                        var8 = _closure1_slot7;
                        var7 = var8.lastTimeConnectedChanged;
                        var8 = var7.bind(var8)();
                        var7 = _closure2_slot9;
                        var6 = var8 >= var7;
 607:
                        var2['isStale'] = var6;
                        var6 = _closure2_slot5;
                        var2['truncate'] = var6;
                        var5 = _closure2_slot7;
                        var2['avoidInitialScroll'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
            };
            var2 = function() {
                var5 = _closure1_slot50;
                var3 = var5.log;
                var4 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'Failed to fetch messages for ';
                var2 = var6.bind(var2)(var4);
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'LOAD_MESSAGES_FAILURE';
                var1['type'] = var5;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 755:
            return var1;
 757:
            var1 = false;
            return var1;
        }
    };
    var2['fetchMessages'] = var8;
    var8 = function fetchLocalMessages(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 645; continue _fun0011 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot19;
                    var5 = var6.getBasicChannel;
                    var11 = _closure2_slot0;
                    var9 = var5.bind(var6)(var11);
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 55;
                    var5 = var10[var5];
                    var6 = var7.bind(var3)(var5);
                    var5 = var6.getOrCreate;
                    var6 = var5.bind(var6)(var11);
                    var5 = 57;
                    var5 = var10[var5];
                    var7 = var7.bind(var3)(var5);
                    var5 = var7.database;
                    var7 = var5.bind(var7)();
                    _closure4_slot0 = var7;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0011_ip = 126; continue _fun0011 }
 106:
                    if(!(var5 != var9)) { _fun0011_ip = 126; continue _fun0011 }
 110:
                    var7 = _closure2_slot1;
                    if(!(var5 == var7)) { _fun0011_ip = 126; continue _fun0011 }
 118:
                    var7 = _closure2_slot2;
                    if(!(var5 != var7)) { _fun0011_ip = 173; continue _fun0011 }
 126:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 54;
                    var7 = var11[var7];
                    var12 = var10.bind(var3)(var7);
                    var11 = var12.addLocalMessages;
                    var10 = _closure2_slot0;
                    var7 = -1;
                    var7 = var11.bind(var12)(var10, var7);
                    _fun0011_ip = 639; continue _fun0011;
 173:
                    var7 = var6.ready;
                    if(!var7) { _fun0011_ip = 238; continue _fun0011 }
 182:
                    var6 = var6.cached;
                    if(var6) { _fun0011_ip = 238; continue _fun0011 }
 191:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 54;
                    var6 = var10[var6];
                    var11 = var7.bind(var3)(var6);
                    var10 = var11.addLocalMessages;
                    var7 = _closure2_slot0;
                    var6 = -2;
                    var6 = var10.bind(var11)(var7, var6);
                    _fun0011_ip = 639; continue _fun0011;
 238:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 58;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.tryLoadAsync;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.load;
                        var3 = _closure4_slot0;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot3;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=278);
 276:
                    return var2;
 278:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 642; continue _fun0011 }
 287:
                    if(!(var5 == var2)) { _fun0011_ip = 338; continue _fun0011 }
 291:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 54;
                    var5 = var7[var5];
                    var10 = var6.bind(var3)(var5);
                    var7 = var10.addLocalMessages;
                    var6 = _closure2_slot0;
                    var5 = -3;
                    var5 = var7.bind(var10)(var6, var5);
                    _fun0011_ip = 639; continue _fun0011;
 338:
                    var10 = _closure1_slot50;
                    var7 = var10.log;
                    var5 = var2.messages;
                    var23 = var5.length;
                    var11 = _closure2_slot0;
                    var5 = _closure2_slot4;
                    var19 = var5.completed;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var15 = var6.concat;
                    var24 = 'fetched ';
                    var22 = ' messages from local database (channel_id: ';
                    var20 = ', remote_fetch_completed: ';
                    var18 = ')';
                    var21 = var11;
                    var6 = var24[var15](var23, var22, var21, var20, var19, var18, var17);
                    var6 = var7.bind(var10)(var6);
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 54;
                    var6 = var10[var6];
                    var10 = var7.bind(var3)(var6);
                    var7 = var10.addLocalMessages;
                    var6 = var2.messages;
                    var6 = var6.length;
                    var6 = var7.bind(var10)(var11, var6);
                    var5 = var5.completed;
                    if(var5) { _fun0011_ip = 639; continue _fun0011 }
 475:
                    var5 = var2.messages;
                    var6 = var5.length;
                    var5 = 0;
                    if(!(var6 > var5)) { _fun0011_ip = 639; continue _fun0011 }
 495:
                    var5 = var2.messages;
                    var6 = var5.length;
                    var5 = _closure2_slot3;
                    var7 = var6 >= var5;
                    if(!var7) { _fun0011_ip = 541; continue _fun0011 }
 517:
                    var6 = var2.connectionId;
                    var10 = _closure1_slot7;
                    var5 = var10.lastTimeConnectedChanged;
                    var5 = var5.bind(var10)();
                    var7 = var6 === var5;
 541:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 46;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'LOCAL_MESSAGES_LOADED';
                    var4['type'] = var10;
                    var9 = var9.guild_id;
                    var4['guildId'] = var9;
                    var8 = _closure2_slot0;
                    var4['channelId'] = var8;
                    var8 = var2.users;
                    var4['users'] = var8;
                    var8 = var2.members;
                    var4['members'] = var8;
                    var8 = var2.messages;
                    var4['messages'] = var8;
                    var7 = !var7;
                    var4['stale'] = var7;
                    var4 = var5.bind(var6)(var4);
 639:
                    return var3;
 642:
                    return var2;
 645:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchLocalMessages'] = var8;
    var8 = function fetchNewLocalMessages(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 469; continue _fun0012 }
 12:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var7 = _closure1_slot19;
                    var6 = var7.getBasicChannel;
                    var3 = _closure2_slot0;
                    var9 = var6.bind(var7)(var3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 57;
                    var3 = var7[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.database;
                    var3 = var3.bind(var6)();
                    _closure4_slot0 = var3;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0012_ip = 466; continue _fun0012 }
 90:
                    if(!(var7 != var9)) { _fun0012_ip = 466; continue _fun0012 }
 97:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var11 = 55;
                    var3 = var3[var11];
                    var10 = var6.bind(var2)(var3);
                    var6 = var10.getOrCreate;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var10)(var3);
                    var3 = var3.hasMoreAfter;
                    if(var3) { _fun0012_ip = 466; continue _fun0012 }
 144:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 58;
                    var3 = var10[var3];
                    var10 = var6.bind(var2)(var3);
                    var6 = var10.tryLoadAsync;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.load;
                        var3 = _closure4_slot0;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var3 = var6.bind(var10)(var3);
                    SaveGenerator(address=184);
 182:
                    return var3;
 184:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0012_ip = 463; continue _fun0012 }
 193:
                    if(!(var7 != var3)) { _fun0012_ip = 466; continue _fun0012 }
 200:
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var11 = var10.bind(var2)(var6);
                    var10 = var11.getOrCreate;
                    var6 = _closure2_slot0;
                    var10 = var10.bind(var11)(var6);
                    var6 = var10.last;
                    var10 = var6.bind(var10)();
                    var11 = var7 == var10;
                    var6 = undefined;
                    if(var11) { _fun0012_ip = 256; continue _fun0012 }
 251:
                    var6 = var10.id;
 256:
                    _closure4_slot1 = var6;
                    if(!(var7 != var6)) { _fun0012_ip = 287; continue _fun0012 }
 264:
                    var7 = var3.messages;
                    var6 = var7.filter;
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot1;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var7 = var6.bind(var7)(var5);
                    _fun0012_ip = 293; continue _fun0012;
 287:
                    var7 = var3.messages;
 293:
                    var10 = _closure1_slot50;
                    var6 = var10.log;
                    var5 = var3.messages;
                    var19 = var5.length;
                    var17 = var7.length;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var13 = var5.concat;
                    var20 = 'Fetched ';
                    var18 = ' messages from the cache after foregrounding. ';
                    var16 = ' are new';
                    var5 = var20[var13](var19, var18, var17, var16, var15);
                    var5 = var6.bind(var10)(var5);
                    var6 = var7.length;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0012_ip = 466; continue _fun0012 }
 370:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 46;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'LOCAL_MESSAGES_LOADED';
                    var4['type'] = var10;
                    var9 = var9.guild_id;
                    var4['guildId'] = var9;
                    var8 = _closure2_slot0;
                    var4['channelId'] = var8;
                    var8 = var3.users;
                    var4['users'] = var8;
                    var8 = var3.members;
                    var4['members'] = var8;
                    var4['messages'] = var7;
                    var7 = true;
                    var4['stale'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0012_ip = 466; continue _fun0012;
 463:
                    return var3;
 466:
                    return var2;
 469:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchNewLocalMessages'] = var8;
    var8 = function _tryFetchMessagesCached(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var13 = var1.before;
            var15 = var1.after;
            var5 = var1.limit;
            var6 = var1.jump;
            var10 = var1.focus;
            var4 = var1.truncate;
            var3 = _closure1_slot22;
            var2 = var3.getMessages;
            var8 = var2.bind(var3)(var7);
            var2 = var8.cached;
            if(var2) { _fun0013_ip = 919; continue _fun0013 }
 73:
            var2 = var8.ready;
            if(!var2) { _fun0013_ip = 919; continue _fun0013 }
 85:
            var14 = null;
            var9 = var14 == var6;
            var3 = undefined;
            var2 = undefined;
            if(var9) { _fun0013_ip = 103; continue _fun0013 }
 98:
            var2 = var6.messageId;
 103:
            if(!(var14 == var2)) { _fun0013_ip = 308; continue _fun0013 }
 110:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0013_ip = 124; continue _fun0013 }
 119:
            var2 = var10.messageId;
 124:
            if(!(var14 == var2)) { _fun0013_ip = 308; continue _fun0013 }
 131:
            if(!(var14 != var13)) { _fun0013_ip = 151; continue _fun0013 }
 135:
            var2 = var8.hasBeforeCached;
            var2 = var2.bind(var8)(var13);
            if(var2) { _fun0013_ip = 244; continue _fun0013 }
 151:
            var9 = var14 == var15;
            if(var9) { _fun0013_ip = 174; continue _fun0013 }
 158:
            var2 = var8.hasAfterCached;
            var2 = var2.bind(var8)(var15);
            var9 = !var2;
 174:
            var2 = !var9;
            if(var9) { _fun0013_ip = 242; continue _fun0013 }
 180:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 46;
            var9 = var12[var9];
            var12 = var11.bind(var3)(var9);
            var11 = var12.dispatch;
            var9 = {};
            var16 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var9['type'] = var16;
            var9['channelId'] = var7;
            var9['after'] = var15;
            var9['limit'] = var5;
            var9['truncate'] = var4;
            var9 = var11.bind(var12)(var9);
            var2 = true;
 242:
            _fun0013_ip = 306; continue _fun0013;
 244:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 46;
            var9 = var12[var9];
            var12 = var11.bind(var3)(var9);
            var11 = var12.dispatch;
            var9 = {};
            var15 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var9['type'] = var15;
            var9['channelId'] = var7;
            var9['before'] = var13;
            var9['limit'] = var5;
            var9['truncate'] = var4;
            var9 = var11.bind(var12)(var9);
            var2 = true;
 306:
            return var2;
 308:
            var9 = var14 == var6;
            var2 = undefined;
            if(var9) { _fun0013_ip = 322; continue _fun0013 }
 317:
            var2 = var6.messageId;
 322:
            if(!(var14 != var2)) { _fun0013_ip = 350; continue _fun0013 }
 326:
            var11 = var8.has;
            var9 = var6.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0013_ip = 855; continue _fun0013 }
 350:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0013_ip = 364; continue _fun0013 }
 359:
            var2 = var10.messageId;
 364:
            var12 = var6;
            if(!(var14 != var2)) { _fun0013_ip = 410; continue _fun0013 }
 371:
            var11 = var8.has;
            var9 = var10.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0013_ip = 791; continue _fun0013 }
 395:
            var2 = {};
            var19 = var2;
            var18 = var10;
            var9 = copyDataProperties(var19, var18);
            var12 = var2;
 410:
            var9 = var14 == var12;
            var2 = undefined;
            if(var9) { _fun0013_ip = 424; continue _fun0013 }
 419:
            var2 = var12.messageId;
 424:
            var2 = var14 != var2;
            var11 = 0;
            if(!var2) { _fun0013_ip = 478; continue _fun0013 }
 433:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 56;
            var2 = var13[var2];
            var13 = var9.bind(var3)(var2);
            var9 = var13.extractTimestamp;
            var15 = var14 == var12;
            var2 = undefined;
            if(var15) { _fun0013_ip = 473; continue _fun0013 }
 468:
            var2 = var12.messageId;
 473:
            var11 = var9.bind(var13)(var2);
 478:
            var2 = var8.first;
            var13 = var2.bind(var8)();
            var2 = var8.last;
            var9 = var2.bind(var8)();
            var2 = var8.hasMoreBefore;
            var2 = !var2;
            if(!var2) { _fun0013_ip = 514; continue _fun0013 }
 510:
            var2 = var14 != var13;
 514:
            if(!var2) { _fun0013_ip = 557; continue _fun0013 }
 517:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 56;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var13.id;
            var15 = var16.bind(var17)(var15);
            var2 = var15 >= var11;
 557:
            if(var2) { _fun0013_ip = 622; continue _fun0013 }
 560:
            var8 = var8.hasMoreAfter;
            var8 = !var8;
            if(!var8) { _fun0013_ip = 576; continue _fun0013 }
 572:
            var8 = var14 != var9;
 576:
            if(!var8) { _fun0013_ip = 619; continue _fun0013 }
 579:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 56;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var9.id;
            var15 = var16.bind(var17)(var15);
            var8 = var15 <= var11;
 619:
            var2 = var8;
 622:
            if(var2) { _fun0013_ip = 725; continue _fun0013 }
 625:
            var8 = var14 != var13;
            if(!var8) { _fun0013_ip = 636; continue _fun0013 }
 632:
            var8 = var14 != var9;
 636:
            if(!var8) { _fun0013_ip = 679; continue _fun0013 }
 639:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 56;
            var14 = var16[var14];
            var15 = var15.bind(var3)(var14);
            var14 = var15.extractTimestamp;
            var13 = var13.id;
            var13 = var14.bind(var15)(var13);
            var8 = var13 < var11;
 679:
            if(!var8) { _fun0013_ip = 722; continue _fun0013 }
 682:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 56;
            var13 = var15[var13];
            var14 = var14.bind(var3)(var13);
            var13 = var14.extractTimestamp;
            var9 = var9.id;
            var9 = var13.bind(var14)(var9);
            var8 = var9 > var11;
 722:
            var2 = var8;
 725:
            if(!var2) { _fun0013_ip = 789; continue _fun0013 }
 728:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 46;
            var8 = var11[var8];
            var11 = var9.bind(var3)(var8);
            var9 = var11.dispatch;
            var8 = {};
            var13 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var8['type'] = var13;
            var8['channelId'] = var7;
            var8['jump'] = var12;
            var12 = _closure1_slot35;
            var8['limit'] = var12;
            var8 = var9.bind(var11)(var8);
            var2 = true;
 789:
            return var2;
 791:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 46;
            var2 = var9[var2];
            var9 = var8.bind(var3)(var2);
            var8 = var9.dispatch;
            var2 = {};
            var11 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var2['type'] = var11;
            var2['channelId'] = var7;
            var2['focus'] = var10;
            var2['limit'] = var5;
            var2['truncate'] = var4;
            var2 = var8.bind(var9)(var2);
            var2 = true;
            return var2;
 855:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 46;
            var1 = var8[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var8 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var1['type'] = var8;
            var1['channelId'] = var7;
            var1['jump'] = var6;
            var1['limit'] = var5;
            var1['truncate'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
 919:
            var1 = false;
            return var1;
        }
    };
    var2['_tryFetchMessagesCached'] = var8;
    var8 = function sendMessage(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0014_ip = 27; continue _fun0014 }
 25:
            var3 = true;
 27:
            var _closure2_slot2 = var3;
            var3 = arguments[3];
            var _closure2_slot3 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0015_ip = 446; continue _fun0015 }
 12:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var2 = _closure2_slot1;
                        var2 = var2.reaction;
                        if(var2) { _fun0015_ip = 425; continue _fun0015 }
 37:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 60;
                        var2 = var6[var2];
                        var5 = var5.bind(var7)(var2);
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address=73);
 71:
                        return var2;
 73:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0015_ip = 422; continue _fun0015 }
 82:
                        var5 = null;
                        if(!(var5 == var2)) { _fun0015_ip = 387; continue _fun0015 }
 91:
                        var6 = _closure2_slot3;
                        var12 = var6.nonce;
                        if(!(var5 == var12)) { _fun0015_ip = 135; continue _fun0015 }
 105:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 49;
                        var5 = var9[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.createNonce;
                        var12 = var5.bind(var6)();
 135:
                        var5 = {};
                        var18 = _closure2_slot3;
                        var19 = var5;
                        var6 = copyDataProperties(var19, var18);
                        var6 = 'nonce';
                        var5[var6] = var12;
                        _closure2_slot3 = var5;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 61;
                        var5 = var9[var5];
                        var9 = var6.bind(var7)(var5);
                        var6 = var9.backgroundify;
                        var5 = function() {
                            var5 = _closure1_slot55;
                            var4 = var5._sendMessage;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var6 = var6.bind(var9)(var5, var7);
                        _closure4_slot0 = var6;
                        var11 = _closure1_slot10;
                        var9 = var11.recordMessageSendAttempt;
                        var10 = _closure2_slot0;
                        var5 = _closure2_slot3;
                        var5 = var9.bind(var11)(var10, var12, var5);
                        var9 = _closure1_slot22;
                        var5 = var9.isReady;
                        var5 = var5.bind(var9)(var10);
                        if(var5) { _fun0015_ip = 380; continue _fun0015 }
 250:
                        var5 = _closure2_slot2;
                        if(!var5) { _fun0015_ip = 291; continue _fun0015 }
 257:
                        var9 = _closure2_slot0;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 53;
                        var5 = var11[var5];
                        var5 = var10.bind(var7)(var5);
                        var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(var9 === var5)) { _fun0015_ip = 297; continue _fun0015 }
 291:
                        var5 = var6.bind(var7)();
                        _fun0015_ip = 378; continue _fun0015;
 297:
                        var12 = _closure1_slot51;
                        var11 = var12.info;
                        var15 = _closure2_slot0;
                        var9 = global;
                        var10 = var9.HermesInternal;
                        var14 = var10.concat;
                        var13 = 'Waiting for channel ';
                        var10 = ' to be ready before sending.';
                        var10 = var14.bind(var13)(var15, var10);
                        var10 = var11.bind(var12)(var10);
                        var10 = var9.Promise;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {constructor: {value: var10}});
                        var19 = function(arg1, arg2) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = arg2;
                            var _closure5_slot1 = var2;
                            var4 = _closure1_slot22;
                            var3 = var4.whenReady;
                            var2 = _closure2_slot0;
                            var1 = function() {
                                var3 = _closure1_slot51;
                                var2 = var3.info;
                                var6 = _closure2_slot0;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var4 = 'Channel ';
                                var1 = ' is ready for sending now.';
                                var1 = var5.bind(var4)(var6, var1);
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var5 = var2.bind(var1)();
                                var4 = var5.then;
                                var3 = _closure5_slot0;
                                var2 = _closure5_slot1;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        };
                        var20 = var9;
                        var8 = new var20[var10](var19, var18);
                        var5 = var8 instanceof Object ? var8 : var9;
 378:
                        _fun0015_ip = 384; continue _fun0015;
 380:
                        var5 = var6.bind(var7)();
 384:
                        return var5;
 387:
                        var7 = _closure1_slot55;
                        var6 = var7.sendMessage;
                        var18 = _closure2_slot1;
                        var17 = _closure2_slot2;
                        var16 = _closure2_slot3;
                        var20 = var7;
                        var19 = var2;
                        var3 = var20[var6](var19, var18, var17, var16, var15);
                        return var3;
 422:
                        return var2;
 425:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
 446:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['sendMessage'] = var8;
    var8 = function getSendMessageOptionsForReply(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0016_ip = 141; continue _fun0016 }
 12:
            var1 = {};
            var4 = {};
            var6 = var3.channel;
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            var7 = var2 != var6;
            var5 = undefined;
            if(!var7) { _fun0016_ip = 43; continue _fun0016 }
 40:
            var5 = var6;
 43:
            var4['guild_id'] = var5;
            var5 = var3.channel;
            var5 = var5.id;
            var4['channel_id'] = var5;
            var5 = var3.message;
            var5 = var5.id;
            var4['message_id'] = var5;
            var1['messageReference'] = var4;
            var3 = var3.shouldMention;
            var2 = undefined;
            if(var3) { _fun0016_ip = 134; continue _fun0016 }
 92:
            var3 = {};
            var4 = global;
            var6 = var4.Object;
            var5 = var6.values;
            var4 = _closure1_slot37;
            var4 = var5.bind(var6)(var4);
            var3['parse'] = var4;
            var4 = false;
            var3['replied_user'] = var4;
            var2 = var3;
 134:
            var1['allowedMentions'] = var2;
            _fun0016_ip = 143; continue _fun0016;
 141:
            var1 = {};
 143:
            return var1;
        }
    };
    var2['getSendMessageOptionsForReply'] = var8;
    var8 = function getSendMessageOptionsForConfettiPotion(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var _closure2_slot0 = var2;
            var8 = var1.content;
            var7 = var1.isGif;
            var6 = var1.command;
            var3 = var1.uploads;
            var5 = var1.confettiPotionEmoji;
            var1 = null;
            if(!(var1 != var5)) { _fun0017_ip = 104; continue _fun0017 }
 51:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 62;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var9.bind(var1)(var2);
            var1 = var2.canAddConfettiToMessageOnSend;
            var14 = var2;
            var13 = var8;
            var12 = var7;
            var11 = var6;
            var10 = var3;
            var1 = var14[var1](var13, var12, var11, var10, var9);
            if(var1) { _fun0017_ip = 108; continue _fun0017 }
 104:
            var1 = {};
            _fun0017_ip = 134; continue _fun0017;
 108:
            var2 = {};
            var3 = {};
            var3['emoji'] = var5;
            var4 = function callback() {
                var3 = _closure1_slot12;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3['callback'] = var4;
            var2['confettiPotionData'] = var3;
            var1 = var2;
 134:
            return var1;
        }
    };
    var2['getSendMessageOptionsForConfettiPotion'] = var8;
    var8 = function getSendMessageOptionsForStickers(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var1 = var2.isGif;
            var2 = var2.stickers;
            var3 = null;
            if(!(var3 != var2)) { _fun0018_ip = 44; continue _fun0018 }
 21:
            var4 = var2.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0018_ip = 44; continue _fun0018 }
 32:
            if(var1) { _fun0018_ip = 44; continue _fun0018 }
 35:
            var1 = {};
            var1['stickerIds'] = var2;
            _fun0018_ip = 46; continue _fun0018;
 44:
            var1 = {};
 46:
            return var1;
        }
    };
    var2['getSendMessageOptionsForStickers'] = var8;
    var8 = function getSendMessageOptionsForScheduledMessage(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.scheduledTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0019_ip = 24; continue _fun0019 }
 15:
            var1 = {};
            var1['scheduledTimestamp'] = var2;
            _fun0019_ip = 26; continue _fun0019;
 24:
            var1 = {};
 26:
            return var1;
        }
    };
    var2['getSendMessageOptionsForScheduledMessage'] = var8;
    var8 = function getSendMessageOptions(arg1) {
        var5 = arg1;
        var1 = {};
        var6 = _closure1_slot55;
        var4 = var6.getSendMessageOptionsForReply;
        var3 = var5.pendingReply;
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot55;
        var4 = var6.getSendMessageOptionsForConfettiPotion;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot55;
        var4 = var6.getSendMessageOptionsForStickers;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var4 = _closure1_slot55;
        var3 = var4.getSendMessageOptionsForScheduledMessage;
        var2 = {};
        var9 = var2;
        var8 = var5;
        var5 = copyDataProperties(var9, var8);
        var8 = var3.bind(var4)(var2);
        var9 = var1;
        var2 = copyDataProperties(var9, var8);
        return var1;
    };
    var2['getSendMessageOptions'] = var8;
    var8 = function sendInvite(arg1, arg2, arg3, arg4, arg5) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var7 = arg5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 63;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = arg2;
            var6 = var3.bind(var4)(var1);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0020_ip = 73; continue _fun0020 }
 45:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '\n';
            var1 = var5.bind(var4)(var7, var3, var6);
 73:
            var5 = _closure1_slot55;
            var4 = var5._sendMessage;
            var3 = {};
            var3['content'] = var1;
            var1 = false;
            var3['tts'] = var1;
            var1 = new Array(0);
            var3['validNonShortcutEmojis'] = var1;
            var1 = new Array(0);
            var3['invalidEmojis'] = var1;
            var2 = {};
            var1 = arg3;
            var2['location'] = var1;
            var1 = arg4;
            var2['inviteAnalyticsMetadata'] = var1;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendInvite'] = var8;
    var8 = function sendActivityBookmark(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot55;
        var4 = var5._sendMessage;
        var3 = {};
        var1 = arg2;
        var3['content'] = var1;
        var1 = false;
        var3['tts'] = var1;
        var1 = new Array(0);
        var3['validNonShortcutEmojis'] = var1;
        var1 = new Array(0);
        var3['invalidEmojis'] = var1;
        var2 = {};
        var1 = arg3;
        var2['location'] = var1;
        var1 = arg4;
        var2['inviteAnalyticsMetadata'] = var1;
        var1 = arg1;
        var1 = var4.bind(var5)(var1, var3, var2);
        return var1;
    };
    var2['sendActivityBookmark'] = var8;
    var8 = function sendStickers(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arguments[2];
            var1 = arguments[4];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0021_ip = 16; continue _fun0021 }
 12:
            var2 = '';
 16:
            if(!(var1 === var3)) { _fun0021_ip = 22; continue _fun0021 }
 20:
            var1 = false;
 22:
            var5 = _closure1_slot55;
            var4 = var5._sendMessage;
            var3 = {};
            var3['content'] = var2;
            var2 = new Array(0);
            var3['invalidEmojis'] = var2;
            var2 = new Array(0);
            var3['validNonShortcutEmojis'] = var2;
            var3['tts'] = var1;
            var2 = {};
            var8 = arguments[3];
            var9 = var2;
            var1 = copyDataProperties(var9, var8);
            var6 = arg2;
            var1 = 'stickerIds';
            var2[var1] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendStickers'] = var8;
    var8 = function sendGreetMessage(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var10;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0022_ip = 27; continue _fun0022 }
 25:
            var2 = {};
 27:
            var7 = var2.messageReference;
            var8 = var2.allowedMentions;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 51;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var9 = _closure1_slot29;
            var5 = var9.MESSAGES_GREET;
            var5 = var5.bind(var9)(var11);
            var2['url'] = var5;
            var5 = {};
            var9 = new Array(1);
            var9[0] = var10;
            var5['sticker_ids'] = var9;
            var5['allowed_mentions'] = var8;
            var5['message_reference'] = var7;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var5 = {};
            var6 = _closure1_slot48;
            var6 = var6.GREET;
            var5['location'] = var6;
            var2['context'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 64;
                var5 = var6[var3];
                var3 = undefined;
                var10 = var4.bind(var3)(var5);
                var8 = var10.donateSentMessage;
                var5 = var1.body;
                var7 = var5.content;
                var9 = _closure2_slot0;
                var7 = var8.bind(var10)(var7, var9);
                var8 = _closure1_slot55;
                var7 = var8.receiveMessage;
                var2 = var1.body;
                var2 = var7.bind(var8)(var9, var2);
                var2 = 46;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'STICKER_TRACK_USAGE';
                var2['type'] = var6;
                var6 = _closure2_slot1;
                var5 = new Array(1);
                var5[0] = var6;
                var2['stickerIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot50;
                    var4 = var5.log;
                    var3 = 'Failed to send greeting';
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0023_ip = 75; continue _fun0023 }
 42:
                    var6 = _closure1_slot55;
                    var5 = var6.sendClydeError;
                    var4 = _closure2_slot0;
                    var3 = var1.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
 75:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 46;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MESSAGE_SEND_FAILED';
                    var2['type'] = var5;
                    var5 = var1.body;
                    var5 = var5.id;
                    var2['messageId'] = var5;
                    var5 = _closure2_slot0;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    throw var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['sendGreetMessage'] = var8;
    var8 = function sendPollMessage(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0024_ip = 11; continue _fun0024 }
 9:
            var6 = {};
 11:
            var5 = _closure1_slot55;
            var4 = var5._sendMessage;
            var3 = {'content': '', 'tts': false};
            var2 = new Array(0);
            var3['validNonShortcutEmojis'] = var2;
            var2 = new Array(0);
            var3['invalidEmojis'] = var2;
            var2 = {};
            var10 = var2;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var7 = arg2;
            var6 = 'poll';
            var2[var6] = var7;
            var1 = _closure1_slot48;
            var6 = var1.POLL_CREATION;
            var1 = 'location';
            var2[var1] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendPollMessage'] = var8;
    var8 = function validateMessage(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var3 = arg1;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0025_ip = 131; continue _fun0025 }
 24:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 65;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.canUseAnimatedEmojis;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0025_ip = 131; continue _fun0025 }
 66:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 44;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.V5/GgI;
            var3 = var2.bind(var3)(var1);
            var2 = 'INVALID_ANIMATED_EMOJI_BODY';
            _fun0025_ip = 199; continue _fun0025;
 131:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 44;
            var4 = var8[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Q87rIy;
            var3 = var4.bind(var5)(var1);
            var2 = 'INVALID_EXTERNAL_EMOJI_BODY';
 199:
            var1 = {};
            var1['errorMessage'] = var3;
            var1['errorMessageName'] = var2;
            return var1;
        }
    };
    var2['validateMessage'] = var8;
    var8 = function _sendMessage(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0026_ip = 2089; continue _fun0026 }
 12:
                    var11 = undefined;
                    var _closure4_slot0 = var11;
                    var _closure4_slot1 = var11;
                    var _closure4_slot2 = var11;
                    var _closure4_slot3 = var11;
                    var _closure4_slot4 = var11;
                    var _closure4_slot5 = var11;
                    var _closure4_slot6 = var11;
                    var _closure4_slot7 = var11;
                    var22 = undefined;
                    var10 = undefined;
                    var15 = undefined;
                    var _closure4_slot8 = var11;
                    var _closure4_slot9 = var11;
                    var23 = undefined;
                    var _closure4_slot10 = var11;
                    var _closure4_slot11 = var11;
                    var20 = undefined;
                    var _closure4_slot12 = var11;
                    var14 = undefined;
                    var _closure4_slot13 = var11;
                    var17 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 60;
                    var4 = var13[var4];
                    var5 = var5.bind(var11)(var4);
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var11)(var4);
                    var13 = null;
                    if(!(var13 == var4)) { _fun0026_ip = 2050; continue _fun0026 }
 138:
                    var5 = _closure2_slot1;
                    var32 = var5.content;
                    _closure4_slot0 = var32;
                    var38 = var5.invalidEmojis;
                    var16 = var5.validNonShortcutEmojis;
                    _closure4_slot1 = var16;
                    var5 = var5.tts;
                    var35 = var11 !== var5;
                    if(!var35) { _fun0026_ip = 183; continue _fun0026 }
 180:
                    var35 = var5;
 183:
                    var16 = _closure2_slot2;
                    var5 = var16.activityAction;
                    var31 = var16.location;
                    _closure4_slot2 = var31;
                    var18 = var16.inviteAnalyticsMetadata;
                    _closure4_slot3 = var18;
                    var25 = var16.stickerIds;
                    _closure4_slot4 = var25;
                    var19 = var16.confettiPotionData;
                    var34 = var16.messageReference;
                    _closure4_slot5 = var34;
                    var33 = var16.allowedMentions;
                    var27 = var16.poll;
                    _closure4_slot6 = var27;
                    var26 = var16.sharedCustomTheme;
                    var24 = var16.contentInventoryEntry;
                    _closure4_slot7 = var24;
                    var18 = var16.attachments;
                    var22 = var16.attachmentsToUpload;
                    var10 = var16.onAttachmentUploadError;
                    var28 = var16.announcementSendOptions;
                    var29 = var16.flags;
                    var30 = var13 != var29;
                    var16 = 0;
                    var40 = 0;
                    if(!var30) { _fun0026_ip = 315; continue _fun0026 }
 312:
                    var40 = var29;
 315:
                    var30 = _closure1_slot1;
                    var36 = _closure1_slot2;
                    var29 = 66;
                    var29 = var36[var29];
                    var29 = var30.bind(var11)(var29);
                    var36 = var29.bind(var11)(var32);
                    var30 = _closure1_slot3;
                    var29 = 2;
                    var36 = var30.bind(var11)(var36, var29);
                    var29 = var36[var16];
                    var30 = 1;
                    var30 = var36[var30];
                    var36 = var32;
                    var32 = var40;
                    if(!var29) { _fun0026_ip = 422; continue _fun0026 }
 373:
                    _closure4_slot0 = var30;
                    var37 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var29 = 67;
                    var29 = var39[var29];
                    var39 = var37.bind(var11)(var29);
                    var37 = var39.addFlag;
                    var29 = _closure1_slot34;
                    var29 = var29.SUPPRESS_NOTIFICATIONS;
                    var32 = var37.bind(var39)(var40, var29);
                    var36 = var30;
 422:
                    var30 = false;
                    var15 = false;
                    var29 = _closure2_slot2;
                    var29 = var29.messageReference;
                    var39 = var13 == var29;
                    var37 = undefined;
                    if(var39) { _fun0026_ip = 450; continue _fun0026 }
 445:
                    var37 = var29.type;
 450:
                    var29 = _closure1_slot40;
                    var29 = var29.FORWARD;
                    var29 = var37 === var29;
                    _closure4_slot8 = var29;
                    var37 = '';
                    if(!(var37 === var36)) { _fun0026_ip = 587; continue _fun0026 }
 476:
                    if(!(var13 == var5)) { _fun0026_ip = 587; continue _fun0026 }
 480:
                    if(!(var13 == var25)) { _fun0026_ip = 587; continue _fun0026 }
 484:
                    if(!(var13 == var27)) { _fun0026_ip = 587; continue _fun0026 }
 488:
                    if(!(var13 == var26)) { _fun0026_ip = 587; continue _fun0026 }
 492:
                    if(!(var13 == var24)) { _fun0026_ip = 587; continue _fun0026 }
 496:
                    if(var29) { _fun0026_ip = 587; continue _fun0026 }
 499:
                    if(!(var13 != var18)) { _fun0026_ip = 512; continue _fun0026 }
 503:
                    var29 = var18.length;
                    if(!(var16 === var29)) { _fun0026_ip = 587; continue _fun0026 }
 512:
                    var29 = _closure2_slot1;
                    var29 = var29.components;
                    if(!(var13 != var29)) { _fun0026_ip = 545; continue _fun0026 }
 526:
                    var29 = _closure2_slot1;
                    var29 = var29.components;
                    var29 = var29.length;
                    if(!(var16 === var29)) { _fun0026_ip = 587; continue _fun0026 }
 545:
                    var29 = var22;
                    if(!(var13 != var29)) { _fun0026_ip = 564; continue _fun0026 }
 552:
                    var29 = var22;
                    var29 = var29.length;
                    if(!(!(var29 > var16))) { _fun0026_ip = 585; continue _fun0026 }
 564:
                    var29 = global;
                    var37 = var29.Promise;
                    var29 = var37.resolve;
                    var29 = var29.bind(var37)();
                    return var29;
 585:
                    var15 = true;
 587:
                    if(!(var13 == var34)) { _fun0026_ip = 603; continue _fun0026 }
 591:
                    var29 = _closure1_slot36;
                    var39 = var29.DEFAULT;
                    _fun0026_ip = 613; continue _fun0026;
 603:
                    var29 = _closure1_slot36;
                    var39 = var29.REPLY;
 613:
                    _closure4_slot9 = var39;
                    var29 = _closure2_slot2;
                    var29 = var29.nonce;
                    if(!(var13 == var29)) { _fun0026_ip = 661; continue _fun0026 }
 631:
                    var40 = _closure1_slot0;
                    var41 = _closure1_slot2;
                    var37 = 49;
                    var37 = var41[var37];
                    var40 = var40.bind(var11)(var37);
                    var37 = var40.createNonce;
                    var29 = var37.bind(var40)();
 661:
                    var23 = var29;
                    _closure4_slot10 = var29;
                    _closure4_slot11 = var29;
                    var37 = _closure1_slot1;
                    var40 = _closure1_slot2;
                    var29 = 47;
                    var29 = var40[var29];
                    var37 = var37.bind(var11)(var29);
                    var29 = {};
                    var40 = _closure2_slot0;
                    var29['channelId'] = var40;
                    var29['content'] = var36;
                    var29['tts'] = var35;
                    var29['type'] = var39;
                    var29['messageReference'] = var34;
                    var29['allowedMentions'] = var33;
                    var39 = undefined;
                    if(!(var16 !== var32)) { _fun0026_ip = 734; continue _fun0026 }
 731:
                    var39 = var32;
 734:
                    var29['flags'] = var39;
                    var39 = var23;
                    var29['nonce'] = var39;
                    var40 = _closure1_slot0;
                    var41 = _closure1_slot2;
                    var39 = 68;
                    var39 = var41[var39];
                    var40 = var40.bind(var11)(var39);
                    var39 = var40.createPollServerDataFromCreateRequest;
                    var39 = var39.bind(var40)(var27);
                    var29['poll'] = var39;
                    var29['sharedCustomTheme'] = var26;
                    var20 = var37.bind(var11)(var29);
                    var29 = _closure2_slot2;
                    var29 = var29.eagerDispatch;
                    if(!(var30 !== var29)) { _fun0026_ip = 923; continue _fun0026 }
 806:
                    var30 = _closure1_slot0;
                    var37 = _closure1_slot2;
                    var29 = 69;
                    var29 = var37[var29];
                    var39 = var30.bind(var11)(var29);
                    var37 = var39.updateComboOnMessageSend;
                    var30 = _closure2_slot0;
                    var29 = var20;
                    var29 = var29.id;
                    var29 = var37.bind(var39)(var30, var29);
                    if(!(var13 != var25)) { _fun0026_ip = 893; continue _fun0026 }
 854:
                    var30 = var20;
                    var37 = var25.map;
                    var29 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.getStickerById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var39 = var37.bind(var25)(var29);
                    var37 = var39.filter;
                    var29 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var29 = var37.bind(var39)(var29);
                    var30['sticker_items'] = var29;
 893:
                    var41 = _closure1_slot55;
                    var40 = var41.receiveMessage;
                    var45 = _closure2_slot0;
                    var44 = var20;
                    var42 = _closure2_slot2;
                    var43 = true;
                    var46 = var41;
                    var29 = var46[var40](var45, var44, var43, var42, var41);
 923:
                    var29 = _closure1_slot52;
                    if(var29) { _fun0026_ip = 1012; continue _fun0026 }
 930:
                    if(!(var13 != var38)) { _fun0026_ip = 1012; continue _fun0026 }
 934:
                    var29 = var38.length;
                    if(!(var29 > var16)) { _fun0026_ip = 1012; continue _fun0026 }
 943:
                    var29 = true;
                    _closure1_slot52 = var29;
                    var30 = _closure1_slot26;
                    var29 = var30.getCurrentUser;
                    var37 = var29.bind(var30)();
                    var30 = _closure1_slot55;
                    var29 = var30.validateMessage;
                    var39 = _closure2_slot0;
                    var29 = var29.bind(var30)(var38, var37, var39);
                    var38 = var29.errorMessage;
                    var37 = var29.errorMessageName;
                    var30 = _closure1_slot55;
                    var29 = var30.sendBotMessage;
                    var29 = var29.bind(var30)(var39, var38, var37);
 1012:
                    var29 = {};
                    if(!(var13 == var28)) { _fun0026_ip = 1052; continue _fun0026 }
 1018:
                    var37 = _closure1_slot0;
                    var38 = _closure1_slot2;
                    var30 = 70;
                    var30 = var38[var30];
                    var30 = var37.bind(var11)(var30);
                    var30 = var30.MessageDataType;
                    var30 = var30.SEND;
                    _fun0026_ip = 1084; continue _fun0026;
 1052:
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var37 = 70;
                    var37 = var39[var37];
                    var37 = var38.bind(var11)(var37);
                    var37 = var37.MessageDataType;
                    var30 = var37.SEND_ANNOUNCEMENT;
 1084:
                    var29['type'] = var30;
                    var30 = {};
                    var37 = _closure2_slot0;
                    var30['channelId'] = var37;
                    var30['content'] = var36;
                    var36 = var23;
                    var30['nonce'] = var36;
                    var30['tts'] = var35;
                    var30['message_reference'] = var34;
                    var30['allowed_mentions'] = var33;
                    var30['flags'] = var32;
                    var30['analyticsLocation'] = var31;
                    var29['message'] = var30;
                    var14 = var29;
                    _closure4_slot13 = var29;
                    var29 = _closure2_slot1;
                    var29 = var29.components;
                    if(!(var13 != var29)) { _fun0026_ip = 1183; continue _fun0026 }
 1159:
                    var29 = var14;
                    var30 = var29.message;
                    var29 = _closure2_slot1;
                    var29 = var29.components;
                    var30['components'] = var29;
 1183:
                    if(!(var13 != var28)) { _fun0026_ip = 1253; continue _fun0026 }
 1187:
                    var29 = var14;
                    var31 = var29.message;
                    var30 = var28.createThread;
                    var31['create_thread'] = var30;
                    var31 = var29.message;
                    var30 = var28.threadName;
                    var31['title'] = var30;
                    var29 = var29.message;
                    var30 = var28.publish;
                    var28 = var13 != var30;
                    if(!var28) { _fun0026_ip = 1247; continue _fun0026 }
 1244:
                    var28 = var30;
 1247:
                    var29['publish'] = var28;
 1253:
                    if(!(var13 != var5)) { _fun0026_ip = 1462; continue _fun0026 }
 1260:
                    var29 = var13 == var5;
                    var28 = undefined;
                    if(var29) { _fun0026_ip = 1281; continue _fun0026 }
 1269:
                    var29 = var5.activity;
                    var28 = var29.session_id;
 1281:
                    var31 = var5.type;
                    var29 = _closure1_slot44;
                    var30 = var29.JOIN_REQUEST;
                    var29 = var28;
                    if(!(var31 !== var30)) { _fun0026_ip = 1346; continue _fun0026 }
 1303:
                    var31 = var5.type;
                    var30 = _closure1_slot44;
                    var30 = var30.STREAM_REQUEST;
                    var29 = var28;
                    if(!(var31 !== var30)) { _fun0026_ip = 1346; continue _fun0026 }
 1325:
                    var29 = var28;
                    if(!(var13 == var29)) { _fun0026_ip = 1346; continue _fun0026 }
 1332:
                    var30 = _closure1_slot18;
                    var28 = var30.getSessionId;
                    var29 = var28.bind(var30)();
 1346:
                    if(!(var13 != var29)) { _fun0026_ip = 1462; continue _fun0026 }
 1350:
                    var28 = {};
                    var30 = var5.type;
                    var28['type'] = var30;
                    var28['session_id'] = var29;
                    var29 = var5.targetUserId;
                    var28['target_user_id'] = var29;
                    var29 = var5.activity;
                    var5 = var29.party;
                    var5 = var13 != var5;
                    if(!var5) { _fun0026_ip = 1411; continue _fun0026 }
 1396:
                    var30 = var29.party;
                    var30 = var30.id;
                    var5 = var13 != var30;
 1411:
                    if(!var5) { _fun0026_ip = 1431; continue _fun0026 }
 1414:
                    var5 = var29.party;
                    var5 = var5.id;
                    var28['party_id'] = var5;
 1431:
                    var5 = var14;
                    var30 = var5.message;
                    var29 = var29.application_id;
                    var30['application_id'] = var29;
                    var5 = var5.message;
                    var5['activity'] = var28;
 1462:
                    if(!(var13 != var27)) { _fun0026_ip = 1480; continue _fun0026 }
 1466:
                    var5 = var14;
                    var5 = var5.message;
                    var5['poll'] = var27;
 1480:
                    if(!(var13 != var26)) { _fun0026_ip = 1498; continue _fun0026 }
 1484:
                    var5 = var14;
                    var5 = var5.message;
                    var5['shared_client_theme'] = var26;
 1498:
                    if(!(var13 != var25)) { _fun0026_ip = 1516; continue _fun0026 }
 1502:
                    var5 = var14;
                    var5 = var5.message;
                    var5['sticker_ids'] = var25;
 1516:
                    var25 = _closure1_slot11;
                    var5 = var25.isEnabled;
                    var5 = var5.bind(var25)();
                    if(!var5) { _fun0026_ip = 1551; continue _fun0026 }
 1533:
                    var5 = var14;
                    var25 = var5.message;
                    var5 = true;
                    var25['has_poggermode_enabled'] = var5;
 1551:
                    if(!(var13 != var24)) { _fun0026_ip = 1569; continue _fun0026 }
 1555:
                    var5 = var14;
                    var5 = var5.message;
                    var5['content_inventory_entry'] = var24;
 1569:
                    if(!(var13 != var19)) { _fun0026_ip = 1630; continue _fun0026 }
 1573:
                    var5 = var14;
                    var24 = var5.message;
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var5 = 62;
                    var5 = var26[var5];
                    var25 = var25.bind(var11)(var5);
                    var5 = var25.constructCreateConfettiPotionRequest;
                    var5 = var5.bind(var25)(var19);
                    var24['confetti_potion'] = var5;
                    var5 = var19.callback;
                    var5 = var5.bind(var19)();
 1630:
                    var5 = var13 != var18;
                    if(!var5) { _fun0026_ip = 1646; continue _fun0026 }
 1637:
                    var19 = var18.length;
                    var5 = var19 > var16;
 1646:
                    if(!var5) { _fun0026_ip = 1663; continue _fun0026 }
 1649:
                    var5 = var14;
                    var5 = var5.message;
                    var5['attachments'] = var18;
 1663:
                    var5 = var22;
                    if(!(var13 != var5)) { _fun0026_ip = 1863; continue _fun0026 }
 1673:
                    var5 = var22;
                    var5 = var5.length;
                    if(!(var5 > var16)) { _fun0026_ip = 1863; continue _fun0026 }
 1688: // try_start_0
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var5 = 71;
                    var5 = var19[var5];
                    var19 = var18.bind(var11)(var5);
                    var18 = var19.uploadMessageAttachments;
                    var5 = {};
                    var24 = _closure2_slot0;
                    var5['channelId'] = var24;
                    var5['nonce'] = var23;
                    var5['items'] = var22;
                    var5['message'] = var20;
                    var21 = _closure2_slot2;
                    var21 = var21.doNotNotifyOnError;
                    var21 = !var21;
                    var20 = var21;
                    if(!var21) { _fun0026_ip = 1759; continue _fun0026 }
 1757:
                    var20 = undefined;
 1759:
                    var5['shouldUploadFailureSendNotification'] = var20;
                    var5 = var18.bind(var19)(var5);
                    SaveGenerator(address=1773);
 1771:
                    return var5;
 1773:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=17);
                    if(var18) { _fun0026_ip = 1905; continue _fun0026 }
 1782:
                    var17 = var5;
                    if(!(var13 != var5)) { _fun0026_ip = 1902; continue _fun0026 }
 1789:
                    var12 = var17.attachments;
                    var17 = var17.uploader;
                    _closure4_slot12 = var17;
                    if(!var15) { _fun0026_ip = 1827; continue _fun0026 }
 1808:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0026_ip = 1899; continue _fun0026 }
 1815:
                    var15 = var12;
                    var15 = var15.length;
                    if(!(var16 !== var15)) { _fun0026_ip = 1899; continue _fun0026 }
 1827:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0026_ip = 1863; continue _fun0026 }
 1834:
                    var14 = var14.message;
                    var16 = var12;
                    var15 = var16.map;
                    var12 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 72;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAttachmentPayload;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var12 = var15.bind(var16)(var12);
                    var14['attachments'] = var12;
 1863: // try_end0
                    var12 = global;
                    var15 = var12.Promise;
                    var12 = var15.prototype;
                    var14 = Object.create(var12, {constructor: {value: var15}});
                    var45 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var7 = global;
                        var3 = var7.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var _closure5_slot2 = var1;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 70;
                        var6 = var5[var3];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var6);
                        var6 = var6.length;
                        var _closure5_slot3 = var6;
                        var10 = var7.Math;
                        var9 = var10.floor;
                        var11 = var7.Math;
                        var6 = var11.random;
                        var11 = var6.bind(var11)();
                        var6 = 10000;
                        var6 = var6 * var11;
                        var6 = var9.bind(var10)(var6);
                        var9 = _closure1_slot51;
                        var8 = var9.info;
                        var7 = var7.HermesInternal;
                        var10 = var7.concat;
                        var7 = 'Queueing message to be sent LogId:';
                        var7 = var10.bind(var7)(var6);
                        var7 = var8.bind(var9)(var7);
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.enqueue;
                        var3 = _closure4_slot13;
                        var2 = function(arg1) {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                                var3 = arg1;
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var4 = var1.bind(var2)();
                                var2 = _closure5_slot2;
                                var15 = var4 - var2;
                                var2 = var3.ok;
                                if(var2) { _fun0027_ip = 1211; continue _fun0027 }
 48:
                                var9 = _closure1_slot50;
                                var8 = var9.log;
                                var6 = {};
                                var2 = var3.hasErr;
                                var6['hasErr'] = var2;
                                var2 = var3.status;
                                var6['status'] = var2;
                                var11 = var3.body;
                                var7 = null;
                                var12 = var7 == var11;
                                var5 = undefined;
                                var2 = undefined;
                                if(var12) { _fun0027_ip = 103; continue _fun0027 }
 98:
                                var2 = var11.code;
 103:
                                var6['code'] = var2;
                                var2 = var3.err;
                                var6['error'] = var2;
                                var2 = 'Failed to send message';
                                var2 = var8.bind(var9)(var2, var6);
                                var2 = var3.hasErr;
                                if(var2) { _fun0027_ip = 720; continue _fun0027 }
 141:
                                var6 = var3.status;
                                var2 = 400;
                                var8 = var6 >= var2;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0027_ip = 749; continue _fun0027 }
 166:
                                var9 = var3.status;
                                var8 = 500;
                                var8 = var9 < var8;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0027_ip = 749; continue _fun0027 }
 191:
                                var8 = var3.body;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0027_ip = 749; continue _fun0027 }
 206:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.SLOWMODE_RATE_LIMITED;
                                if(!(var9 !== var8)) { _fun0027_ip = 579; continue _fun0027 }
 233:
                                var9 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var8 = 80;
                                var8 = var12[var8];
                                var8 = var9.bind(var5)(var8);
                                var12 = var8.AUTOMOD_ERROR_CODES;
                                var9 = var12.has;
                                var8 = var3.body;
                                var8 = var8.code;
                                var8 = var9.bind(var12)(var8);
                                if(var8) { _fun0027_ip = 483; continue _fun0027 }
 285:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(var9 !== var8)) { _fun0027_ip = 434; continue _fun0027 }
 312:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.EXPLICIT_CONTENT;
                                if(!(var9 !== var8)) { _fun0027_ip = 417; continue _fun0027 }
 336:
                                var8 = _closure4_slot6;
                                var8 = var7 != var8;
                                if(var8) { _fun0027_ip = 354; continue _fun0027 }
 350:
                                var8 = _closure4_slot8;
 354:
                                if(var8) { _fun0027_ip = 365; continue _fun0027 }
 357:
                                var9 = _closure4_slot7;
                                var8 = var7 != var9;
 365:
                                var11 = undefined;
                                var2 = false;
                                if(var8) { _fun0027_ip = 749; continue _fun0027 }
 375:
                                var13 = _closure1_slot55;
                                var12 = var13.sendClydeError;
                                var9 = _closure2_slot0;
                                var8 = var3.body;
                                var8 = var8.code;
                                var8 = var12.bind(var13)(var9, var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0027_ip = 749; continue _fun0027;
 417:
                                var8 = _closure1_slot47;
                                var11 = var8.EXPLICIT_CONTENT;
                                var2 = false;
                                _fun0027_ip = 749; continue _fun0027;
 434:
                                var9 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var8 = 46;
                                var8 = var12[var8];
                                var12 = var9.bind(var5)(var8);
                                var9 = var12.dispatch;
                                var8 = {};
                                var13 = 'POGGERMODE_TEMPORARILY_DISABLED';
                                var8['type'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0027_ip = 749; continue _fun0027;
 483:
                                var9 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var8 = 46;
                                var8 = var12[var8];
                                var12 = var9.bind(var5)(var8);
                                var9 = var12.dispatch;
                                var8 = {};
                                var13 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                                var8['type'] = var13;
                                var13 = _closure4_slot13;
                                var8['messageData'] = var13;
                                var13 = {};
                                var14 = var3.body;
                                var14 = var14.code;
                                var13['code'] = var14;
                                var14 = var3.body;
                                var14 = var14.message;
                                var13['message'] = var14;
                                var8['errorResponseBody'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0027_ip = 749; continue _fun0027;
 579:
                                var8 = var3.body;
                                var14 = var8.retry_after;
                                var8 = var7 != var14;
                                if(!var8) { _fun0027_ip = 603; continue _fun0027 }
 597:
                                var9 = 0;
                                var8 = var14 > var9;
 603:
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0027_ip = 749; continue _fun0027 }
 613:
                                var16 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var8 = 46;
                                var8 = var17[var8];
                                var12 = var16.bind(var5)(var8);
                                var9 = var12.dispatch;
                                var8 = {};
                                var13 = 'SLOWMODE_SET_COOLDOWN';
                                var8['type'] = var13;
                                var13 = _closure2_slot0;
                                var8['channelId'] = var13;
                                var13 = _closure1_slot25;
                                var13 = var13.SendMessage;
                                var8['slowmodeType'] = var13;
                                var13 = 79;
                                var13 = var17[var13];
                                var13 = var16.bind(var5)(var13);
                                var13 = var13.Millis;
                                var13 = var13.SECOND;
                                var13 = var14 * var13;
                                var8['cooldownMs'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0027_ip = 749; continue _fun0027;
 720:
                                var6 = var3.err;
                                var8 = var6.code;
                                var2 = false;
                                var6 = 'ABORTED';
                                var11 = undefined;
                                if(!(var6 === var8)) { _fun0027_ip = 749; continue _fun0027 }
 745:
                                var2 = true;
                                var11 = undefined;
 749:
                                if(var2) { _fun0027_ip = 1164; continue _fun0027 }
 755:
                                var6 = _closure4_slot12;
                                if(!(var7 != var6)) { _fun0027_ip = 852; continue _fun0027 }
 766:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 46;
                                var6 = var9[var6];
                                var9 = var8.bind(var5)(var6);
                                var8 = var9.dispatch;
                                var6 = {};
                                var12 = 'UPLOAD_FAIL';
                                var6['type'] = var12;
                                var12 = _closure2_slot0;
                                var6['channelId'] = var12;
                                var12 = _closure4_slot12;
                                var12 = var12._file;
                                var6['file'] = var12;
                                var12 = _closure4_slot11;
                                var6['messageId'] = var12;
                                var6['reason'] = var11;
                                var12 = true;
                                var6['noSendFailed'] = var12;
                                var6 = var8.bind(var9)(var6);
 852:
                                var6 = var3.hasErr;
                                if(var6) { _fun0027_ip = 951; continue _fun0027 }
 861:
                                var6 = _closure1_slot47;
                                var6 = var6.EXPLICIT_CONTENT;
                                if(!(var11 === var6)) { _fun0027_ip = 951; continue _fun0027 }
 875:
                                var12 = _closure1_slot55;
                                var9 = var12.sendExplicitMediaClydeError;
                                var8 = _closure2_slot0;
                                var6 = var3.body;
                                var13 = var7 == var6;
                                var7 = undefined;
                                if(var13) { _fun0027_ip = 912; continue _fun0027 }
 906:
                                var7 = var6.attachments;
 912:
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var6 = 50;
                                var6 = var14[var6];
                                var6 = var13.bind(var5)(var6);
                                var6 = var6.TrackMediaRedactionContext;
                                var6 = var6.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                                var6 = var9.bind(var12)(var8, var7, var6);
 951:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 46;
                                var6 = var8[var6];
                                var9 = var7.bind(var5)(var6);
                                var7 = var9.dispatch;
                                var6 = {};
                                var12 = 'MESSAGE_SEND_FAILED';
                                var6['type'] = var12;
                                var2 = _closure4_slot11;
                                var6['messageId'] = var2;
                                var12 = _closure2_slot0;
                                var6['channelId'] = var12;
                                var12 = _closure2_slot2;
                                var12 = var12.doNotNotifyOnError;
                                var12 = !var12;
                                var6['shouldNotify'] = var12;
                                var6['reason'] = var11;
                                var6 = var7.bind(var9)(var6);
                                var7 = _closure1_slot0;
                                var6 = 73;
                                var6 = var8[var6];
                                var8 = var7.bind(var5)(var6);
                                var7 = var8.logMessageSendFailure;
                                var6 = {};
                                var11 = var3.hasErr;
                                var9 = undefined;
                                if(var11) { _fun0027_ip = 1073; continue _fun0027 }
 1068:
                                var9 = var3.status;
 1073:
                                var6['failureCode'] = var9;
                                var11 = var3.hasErr;
                                var9 = undefined;
                                if(!var11) { _fun0027_ip = 1100; continue _fun0027 }
 1089:
                                var11 = var3.err;
                                var9 = var11.message;
 1100:
                                var6['errorMessage'] = var9;
                                var6 = var7.bind(var8)(var6);
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 70;
                                var6 = var8[var6];
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.cancelPendingSendRequests;
                                var2 = _closure2_slot0;
                                var7 = var6.bind(var7)(var2);
                                var6 = var7.forEach;
                                var2 = function(arg1) {
                                    var5 = arg1;
                                    var6 = _closure1_slot50;
                                    var4 = var6.log;
                                    var3 = var5.nonce;
                                    var2 = 'Cancelling pending message';
                                    var2 = var4.bind(var6)(var2, var3);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 46;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.dispatch;
                                    var2 = {};
                                    var6 = 'MESSAGE_SEND_FAILED';
                                    var2['type'] = var6;
                                    var6 = var5.nonce;
                                    var2['messageId'] = var6;
                                    var5 = var5.channelId;
                                    var2['channelId'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var2 = var6.bind(var7)(var2);
                                _fun0027_ip = 1197; continue _fun0027;
 1164:
                                var9 = _closure1_slot55;
                                var8 = var9.deleteMessage;
                                var7 = _closure2_slot0;
                                var6 = _closure4_slot11;
                                var2 = true;
                                var2 = var8.bind(var9)(var7, var6, var2);
 1197:
                                var2 = _closure5_slot1;
                                var2 = var2.bind(var5)(var3);
                                _fun0027_ip = 2545; continue _fun0027;
 1211:
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 64;
                                var5 = var9[var2];
                                var2 = undefined;
                                var11 = var6.bind(var2)(var5);
                                var6 = var11.donateSentMessage;
                                var5 = _closure4_slot0;
                                var14 = _closure2_slot0;
                                var5 = var6.bind(var11)(var5, var14);
                                var12 = _closure1_slot55;
                                var11 = var12.receiveMessage;
                                var25 = var3.body;
                                var5 = {};
                                var13 = {};
                                var13['duration'] = var15;
                                var15 = _closure5_slot3;
                                var13['queueSize'] = var15;
                                var5['sendAnalytics'] = var13;
                                var13 = _closure4_slot6;
                                var5['poll'] = var13;
                                var27 = var12;
                                var26 = var14;
                                var24 = true;
                                var23 = var5;
                                var5 = var27[var11](var26, var25, var24, var23, var22);
                                var6 = _closure1_slot0;
                                var5 = 62;
                                var5 = var9[var5];
                                var9 = var6.bind(var2)(var5);
                                var6 = var9.getSentConfettiPotionEmoji;
                                var5 = var3.body;
                                var5 = var6.bind(var9)(var5);
                                var9 = null;
                                if(!(var9 != var5)) { _fun0027_ip = 1486; continue _fun0027 }
 1361:
                                var14 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var6 = 74;
                                var6 = var15[var6];
                                var12 = var14.bind(var2)(var6);
                                var11 = var12.fetchConsumableEntitlement;
                                var6 = 75;
                                var6 = var15[var6];
                                var6 = var14.bind(var2)(var6);
                                var6 = var6.CONFETTI_POTION_SKU_ID;
                                var6 = var11.bind(var12)(var6);
                                var6 = 76;
                                var6 = var15[var6];
                                var12 = var14.bind(var2)(var6);
                                var11 = var12.triggerConfettiByEmoji;
                                var6 = {};
                                var16 = var5.name;
                                var6['name'] = var16;
                                var5 = var5.id;
                                var6['id'] = var5;
                                var5 = 77;
                                var5 = var15[var5];
                                var5 = var14.bind(var2)(var5);
                                var5 = var5.ConfettiTriggerAnalyticsLocation;
                                var23 = var5.MessageSent;
                                var27 = var12;
                                var26 = var6;
                                var25 = undefined;
                                var24 = true;
                                var5 = var27[var11](var26, var25, var24, var23, var22);
 1486:
                                var6 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var5 = 56;
                                var5 = var11[var5];
                                var11 = var6.bind(var2)(var5);
                                var6 = var11.cast;
                                var5 = _closure2_slot0;
                                var11 = var6.bind(var11)(var5);
                                var6 = _closure1_slot8;
                                var5 = var6.getRequest;
                                var5 = var5.bind(var6)(var11);
                                if(!(var9 != var5)) { _fun0027_ip = 1625; continue _fun0027 }
 1540:
                                var14 = var5.guildId;
                                var12 = var5.userId;
                                var13 = var5.applicationStatus;
                                var6 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var5 = 78;
                                var5 = var11[var5];
                                var11 = var6.bind(var2)(var5);
                                var6 = var11.trackMemberApplicationInterviewMessage;
                                var5 = {};
                                var5['guildId'] = var14;
                                var14 = _closure2_slot0;
                                var5['channelId'] = var14;
                                var14 = var3.body;
                                var14 = var14.id;
                                var5['messageId'] = var14;
                                var5['joinRequestStatus'] = var13;
                                var5['joinRequestUserId'] = var12;
                                var5 = var6.bind(var11)(var5);
 1625:
                                var11 = _closure1_slot10;
                                var6 = var11.recordMessageSendApiResponse;
                                var5 = _closure4_slot10;
                                var5 = var6.bind(var11)(var5);
                                var6 = _closure4_slot9;
                                var5 = _closure1_slot36;
                                var5 = var5.REPLY;
                                if(!(var6 === var5)) { _fun0027_ip = 2108; continue _fun0027 }
 1667:
                                var5 = var3.body;
                                var17 = var5.id;
                                var13 = _closure2_slot0;
                                var5 = _closure4_slot5;
                                var5 = var9 == var5;
                                var11 = undefined;
                                if(var5) { _fun0027_ip = 1704; continue _fun0027 }
 1694:
                                var5 = _closure4_slot5;
                                var11 = var5.message_id;
 1704:
                                var6 = _closure1_slot13;
                                var5 = var6.getPendingReplyActionSource;
                                var6 = var5.bind(var6)(var13);
                                var5 = 'message_swipe';
                                if(!(var5 !== var6)) { _fun0027_ip = 1936; continue _fun0027 }
 1734:
                                var5 = 'message_shortcut';
                                if(!(var5 === var6)) { _fun0027_ip = 2108; continue _fun0027 }
 1747:
                                var6 = _closure1_slot19;
                                var5 = var6.getChannel;
                                var18 = var5.bind(var6)(var13);
                                var6 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 43;
                                var5 = var12[var5];
                                var14 = var6.bind(var2)(var5);
                                var12 = var14.track;
                                var5 = _closure1_slot28;
                                var6 = var5.MESSAGE_SHORTCUT_ACTION_SENT;
                                var5 = {};
                                var5['message_id'] = var17;
                                var5['channel_id'] = var13;
                                var16 = var9 == var18;
                                var15 = undefined;
                                if(var16) { _fun0027_ip = 1821; continue _fun0027 }
 1816:
                                var15 = var18.guild_id;
 1821:
                                var5['guild_id'] = var15;
                                var5['original_message_id'] = var11;
                                var15 = 'reply';
                                var5['action'] = var15;
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var19 = 32;
                                var15 = var15[var19];
                                var20 = var16.bind(var2)(var15);
                                var16 = var20.collectGuildAnalyticsMetadata;
                                var21 = var9 == var18;
                                var15 = undefined;
                                if(var21) { _fun0027_ip = 1878; continue _fun0027 }
 1873:
                                var15 = var18.guild_id;
 1878:
                                var25 = var16.bind(var20)(var15);
                                var26 = var5;
                                var15 = copyDataProperties(var26, var25);
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var15 = var15[var19];
                                var16 = var16.bind(var2)(var15);
                                var15 = var16.collectChannelAnalyticsMetadata;
                                var25 = var15.bind(var16)(var18);
                                var26 = var5;
                                var15 = copyDataProperties(var26, var25);
                                var5 = var12.bind(var14)(var6, var5);
                                _fun0027_ip = 2108; continue _fun0027;
 1936:
                                var5 = var9 != var11;
                                var16 = null;
                                if(!var5) { _fun0027_ip = 1961; continue _fun0027 }
 1945:
                                var6 = _closure1_slot22;
                                var5 = var6.getMessage;
                                var16 = var5.bind(var6)(var13, var11);
 1961:
                                var6 = _closure1_slot19;
                                var5 = var6.getChannel;
                                var15 = var5.bind(var6)(var13);
                                var6 = _closure1_slot26;
                                var5 = var6.getCurrentUser;
                                var14 = var5.bind(var6)();
                                var6 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var5 = 43;
                                var5 = var11[var5];
                                var12 = var6.bind(var2)(var5);
                                var11 = var12.track;
                                var5 = _closure1_slot28;
                                var6 = var5.MESSAGE_SWIPE_ACTION_SENT;
                                var5 = {};
                                var5['message_id'] = var17;
                                var5['channel_id'] = var13;
                                var17 = var9 == var15;
                                var13 = undefined;
                                if(var17) { _fun0027_ip = 2048; continue _fun0027 }
 2043:
                                var13 = var15.guild_id;
 2048:
                                var5['guild_id'] = var13;
                                var13 = 'reply';
                                var5['swipe_action'] = var13;
                                var13 = var9 != var14;
                                if(!var13) { _fun0027_ip = 2097; continue _fun0027 }
 2068:
                                var15 = var14.id;
                                var17 = var9 == var16;
                                var14 = undefined;
                                if(var17) { _fun0027_ip = 2093; continue _fun0027 }
 2082:
                                var16 = var16.author;
                                var14 = var16.id;
 2093:
                                var13 = var15 === var14;
 2097:
                                var5['is_own_message'] = var13;
                                var5 = var11.bind(var12)(var6, var5);
 2108:
                                var12 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var6 = 46;
                                var5 = var11[var6];
                                var15 = var12.bind(var2)(var5);
                                var14 = var15.dispatch;
                                var13 = {};
                                var5 = 'SLOWMODE_RESET_COOLDOWN';
                                var13['type'] = var5;
                                var5 = _closure1_slot25;
                                var5 = var5.SendMessage;
                                var13['slowmodeType'] = var5;
                                var5 = _closure2_slot0;
                                var13['channelId'] = var5;
                                var13 = var14.bind(var15)(var13);
                                var13 = var11[var6];
                                var15 = var12.bind(var2)(var13);
                                var14 = var15.dispatch;
                                var13 = {};
                                var16 = 'EMOJI_TRACK_USAGE';
                                var13['type'] = var16;
                                var16 = _closure4_slot1;
                                var13['emojiUsed'] = var16;
                                var13 = var14.bind(var15)(var13);
                                var13 = var11[var6];
                                var15 = var12.bind(var2)(var13);
                                var14 = var15.dispatch;
                                var13 = {};
                                var16 = 'STICKER_TRACK_USAGE';
                                var13['type'] = var16;
                                var16 = _closure4_slot4;
                                var13['stickerIds'] = var16;
                                var13 = var14.bind(var15)(var13);
                                var11 = var11[var6];
                                var13 = var12.bind(var2)(var11);
                                var12 = var13.dispatch;
                                var11 = {};
                                var14 = 'LOCAL_MESSAGE_CREATE';
                                var11['type'] = var14;
                                var14 = {};
                                var14['channel_id'] = var5;
                                var16 = _closure1_slot26;
                                var15 = var16.getCurrentUser;
                                var15 = var15.bind(var16)();
                                var14['author'] = var15;
                                var11['message'] = var14;
                                var11 = var12.bind(var13)(var11);
                                var11 = {};
                                var12 = _closure4_slot0;
                                var11['content'] = var12;
                                var11['channelId'] = var5;
                                var5 = var3.body;
                                var5 = var5.id;
                                var11['messageId'] = var5;
                                var5 = _closure4_slot2;
                                var12 = var9 != var5;
                                var14 = 'chat_input';
                                var5 = var14;
                                if(!var12) { _fun0027_ip = 2364; continue _fun0027 }
 2360:
                                var5 = _closure4_slot2;
 2364:
                                var11['location'] = var5;
                                var5 = _closure4_slot3;
                                var11['inviteAnalyticsMetadata'] = var5;
                                var5 = function trackCodedLinks(arg1) {
                                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                                        var1 = arg1;
                                        var4 = var1.content;
                                        var3 = var1.channelId;
                                        var _closure7_slot0 = var3;
                                        var3 = var1.messageId;
                                        var _closure7_slot1 = var3;
                                        var3 = var1.location;
                                        var _closure7_slot2 = var3;
                                        var3 = var1.inviteAnalyticsMetadata;
                                        var _closure7_slot3 = var3;
                                        var3 = var1.overrideProperties;
                                        var1 = undefined;
                                        if(!(var3 === var1)) { _fun0028_ip = 61; continue _fun0028 }
 59:
                                        var3 = {};
 61:
                                        var _closure7_slot4 = var3;
                                        var _closure7_slot5 = var1;
                                        var6 = _closure1_slot18;
                                        var5 = var6.getId;
                                        var5 = var5.bind(var6)();
                                        _closure7_slot5 = var5;
                                        var5 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var3 = 30;
                                        var3 = var6[var3];
                                        var3 = var5.bind(var1)(var3);
                                        var4 = var3.bind(var1)(var4);
                                        var3 = var4.forEach;
                                        var2 = function(arg1) {
                                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                                                var1 = arg1;
                                                var7 = var1.type;
                                                var4 = var1.code;
                                                var8 = var1.url;
                                                var5 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var6 = 31;
                                                var3 = var1[var6];
                                                var1 = undefined;
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.INVITE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1330; continue _fun0029 }
 62:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.TEMPLATE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1206; continue _fun0029 }
 98:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.BUILD_OVERRIDE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 134:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.MANUAL_BUILD_OVERRIDE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 170:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EVENT;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 206:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.CHANNEL_LINK;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 242:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_PROFILE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1128; continue _fun0029 }
 278:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1085; continue _fun0029 }
 314:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(var7 !== var3)) { _fun0029_ip = 997; continue _fun0029 }
 350:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.ACTIVITY_BOOKMARK;
                                                if(!(var7 !== var3)) { _fun0029_ip = 892; continue _fun0029 }
 386:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(var7 !== var3)) { _fun0029_ip = 837; continue _fun0029 }
 422:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.GUILD_PRODUCT;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 458:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.SERVER_SHOP;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 494:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.QUESTS_EMBED;
                                                if(!(var7 !== var3)) { _fun0029_ip = 736; continue _fun0029 }
 530:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_OAUTH2_LINK;
                                                if(!(var7 !== var3)) { _fun0029_ip = 636; continue _fun0029 }
 563:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.COLLECTIBLES_SHOP;
                                                if(!(var7 !== var3)) { _fun0029_ip = 1391; continue _fun0029 }
 599:
                                                var3 = global;
                                                var5 = var3.Error;
                                                var3 = var3.HermesInternal;
                                                var6 = var3.concat;
                                                var3 = 'Unknown coded link type: ';
                                                var3 = var6.bind(var3)(var7);
                                                var3 = var5.bind(var1)(var3);
                                                throw var3;
 636:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var6[var3];
                                                var9 = var5.bind(var1)(var3);
                                                var7 = var9.trackWithMetadata;
                                                var3 = _closure1_slot28;
                                                var5 = var3.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                var3 = {};
                                                var3['application_id'] = var4;
                                                var3 = var7.bind(var9)(var5, var3);
                                                var5 = _closure1_slot0;
                                                var3 = 34;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot45;
                                                var5 = var3.OAUTH;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 736:
                                                var9 = _closure1_slot0;
                                                var10 = _closure1_slot2;
                                                var3 = 37;
                                                var3 = var10[var3];
                                                var6 = var9.bind(var1)(var3);
                                                var5 = var6.trackQuestEvent;
                                                var3 = {};
                                                var3['questId'] = var4;
                                                var7 = _closure1_slot28;
                                                var7 = var7.QUEST_LINK_SHARED;
                                                var3['event'] = var7;
                                                var7 = {};
                                                var3['properties'] = var7;
                                                var7 = true;
                                                var3['trackGuildAndChannelMetadata'] = var7;
                                                var7 = 38;
                                                var7 = var10[var7];
                                                var7 = var9.bind(var1)(var7);
                                                var7 = var7.QuestContent;
                                                var7 = var7.QUESTS_EMBED;
                                                var3['sourceQuestContent'] = var7;
                                                var3 = var5.bind(var6)(var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 837:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 34;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot45;
                                                var5 = var3.ACTIVITY_INVITE;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 892:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var3 = 36;
                                                var3 = var7[var3];
                                                var5 = var6.bind(var1)(var3);
                                                var3 = var5.extractActivityBookmarkParams;
                                                var3 = var3.bind(var5)(var8);
                                                var5 = 34;
                                                var5 = var7[var5];
                                                var8 = var6.bind(var1)(var5);
                                                var7 = var8.trackAppEmbedLinkSent;
                                                var5 = _closure1_slot45;
                                                var6 = var5.ACTIVITY;
                                                var5 = var3.referrerId;
                                                var9 = null;
                                                if(!(var9 == var5)) { _fun0029_ip = 970; continue _fun0029 }
 963:
                                                var5 = _closure7_slot5;
 970:
                                                var11 = var3.customId;
                                                var15 = var8;
                                                var14 = var4;
                                                var13 = var6;
                                                var12 = var5;
                                                var3 = var15[var7](var14, var13, var12, var11, var10);
                                                _fun0029_ip = 1391; continue _fun0029;
 997:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 35;
                                                var3 = var6[var3];
                                                var5 = var5.bind(var1)(var3);
                                                var3 = var5.parseStorefrontSkuCodedLink;
                                                var3 = var3.bind(var5)(var4);
                                                var5 = null;
                                                if(!(var5 != var3)) { _fun0029_ip = 1391; continue _fun0029 }
 1037:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var5 = 33;
                                                var5 = var7[var5];
                                                var7 = var6.bind(var1)(var5);
                                                var6 = var7.trackAppDirectoryProfileEmbed;
                                                var5 = var3.applicationId;
                                                var3 = 'storefront_sku';
                                                var3 = var6.bind(var7)(var5, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 1085:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 33;
                                                var3 = var6[var3];
                                                var6 = var5.bind(var1)(var3);
                                                var5 = var6.trackAppDirectoryProfileEmbed;
                                                var3 = 'storefront';
                                                var3 = var5.bind(var6)(var4, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 1128:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 33;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var3 = var7.trackAppDirectoryProfileEmbed;
                                                var3 = var3.bind(var7)(var4);
                                                var3 = 34;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot45;
                                                var5 = var3.APP_DISCOVERY;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 1206:
                                                var5 = _closure1_slot9;
                                                var3 = var5.getGuildTemplate;
                                                var8 = var3.bind(var5)(var4);
                                                var3 = null;
                                                if(!(var3 != var8)) { _fun0029_ip = 1328; continue _fun0029 }
 1227:
                                                var5 = var8.state;
                                                var3 = _closure1_slot46;
                                                var3 = var3.RESOLVING;
                                                if(!(var5 !== var3)) { _fun0029_ip = 1328; continue _fun0029 }
 1246:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackWithMetadata;
                                                var3 = _closure1_slot28;
                                                var5 = var3.GUILD_TEMPLATE_LINK_SENT;
                                                var3 = {};
                                                var3['guild_template_code'] = var4;
                                                var9 = var8.name;
                                                var3['guild_template_name'] = var9;
                                                var9 = var8.description;
                                                var3['guild_template_description'] = var9;
                                                var8 = var8.sourceGuildId;
                                                var3['guild_template_guild_id'] = var8;
                                                var3 = var6.bind(var7)(var5, var3);
                                                _fun0029_ip = 1391; continue _fun0029;
 1328:
                                                return var1;
 1330:
                                                var3 = _closure1_slot56;
                                                var2 = {};
                                                var2['inviteKey'] = var4;
                                                var5 = _closure7_slot0;
                                                var2['channelId'] = var5;
                                                var5 = _closure7_slot1;
                                                var2['messageId'] = var5;
                                                var5 = _closure7_slot2;
                                                var2['location'] = var5;
                                                var5 = _closure7_slot3;
                                                var2['inviteAnalyticsMetadata'] = var5;
                                                var4 = _closure7_slot4;
                                                var2['overrideProperties'] = var4;
                                                var2 = var3.bind(var1)(var2);
 1391:
                                                return var1;
                                            }
                                        };
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    }
                                };
                                var5 = var5.bind(var2)(var11);
                                var13 = _closure4_slot0;
                                var12 = _closure2_slot0;
                                var5 = var3.body;
                                var11 = var5.id;
                                var5 = _closure4_slot2;
                                var5 = var9 != var5;
                                if(!var5) { _fun0027_ip = 2420; continue _fun0027 }
 2416:
                                var14 = _closure4_slot2;
 2420:
                                var5 = _closure2_slot2;
                                var5 = var5.isGiftLinkSentOnBehalfOfUser;
                                var5 = !var5;
                                var10 = function trackGiftCodes(arg1, arg2, arg3, arg4, arg5) {
                                    var1 = arg2;
                                    var _closure7_slot0 = var1;
                                    var1 = arg3;
                                    var _closure7_slot1 = var1;
                                    var1 = arg4;
                                    var _closure7_slot2 = var1;
                                    var1 = arg5;
                                    var _closure7_slot3 = var1;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 42;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.findGiftCodes;
                                    var3 = arg1;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                                            var4 = _closure1_slot19;
                                            var3 = var4.getChannel;
                                            var2 = _closure7_slot0;
                                            var6 = var3.bind(var4)(var2);
                                            var2 = null;
                                            if(!(var2 != var6)) { _fun0030_ip = 145; continue _fun0030 }
 30:
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var2 = 32;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var4 = var4.bind(var2)(var3);
                                            var3 = var4.trackWithMetadata;
                                            var1 = _closure1_slot28;
                                            var2 = var1.GIFT_CODE_SENT;
                                            var1 = {};
                                            var7 = _closure7_slot2;
                                            var1['location'] = var7;
                                            var7 = arg1;
                                            var1['gift_code'] = var7;
                                            var7 = var6.getGuildId;
                                            var7 = var7.bind(var6)();
                                            var1['guild_id'] = var7;
                                            var7 = var6.id;
                                            var1['channel_id'] = var7;
                                            var6 = var6.type;
                                            var1['channel_type'] = var6;
                                            var6 = _closure7_slot1;
                                            var1['message_id'] = var6;
                                            var5 = _closure7_slot3;
                                            var1['automatic_send'] = var5;
                                            var1 = var3.bind(var4)(var2, var1);
 145:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var22 = !var5;
                                var27 = undefined;
                                var26 = var13;
                                var25 = var12;
                                var24 = var11;
                                var23 = var14;
                                var5 = var27[var10](var26, var25, var24, var23, var22, var21);
                                var5 = _closure4_slot12;
                                if(!(var9 != var5)) { _fun0027_ip = 2536; continue _fun0027 }
 2467:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var6];
                                var6 = var5.bind(var2)(var4);
                                var5 = var6.dispatch;
                                var4 = {};
                                var9 = 'UPLOAD_COMPLETE';
                                var4['type'] = var9;
                                var8 = _closure2_slot0;
                                var4['channelId'] = var8;
                                var7 = _closure4_slot12;
                                var7 = var7._file;
                                var4['file'] = var7;
                                var7 = false;
                                var4['aborted'] = var7;
                                var4 = var5.bind(var6)(var4);
 2536:
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var2)(var3);
 2545:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    };
                    var46 = var14;
                    var12 = new var46[var15](var45, var44);
                    var12 = var12 instanceof Object ? var12 : var14;
                    return var12;
 1899:
                    return var11;
 1902:
                    return var11;
 1905:
                    return var5;
 1908: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var17 = var5.file;
                    var9 = var17;
                    var16 = var5.code;
                    var8 = var16;
                    var15 = var5.reason;
                    var7 = var15;
                    var6 = var5.responseBody;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 73;
                    var5 = var14[var5];
                    var14 = var12.bind(var11)(var5);
                    var12 = var14.logMessageSendFailure;
                    var5 = {};
                    var17 = var17.items;
                    var5['fileItems'] = var17;
                    var5['failureCode'] = var16;
                    var16 = var13 == var15;
                    var15 = undefined;
                    if(var16) { _fun0026_ip = 2004; continue _fun0026 }
 1995:
                    var16 = var7;
                    var15 = var16.msg;
 2004:
                    var5['errorMessage'] = var15;
                    var5 = var12.bind(var14)(var5);
                    var12 = var10;
                    var12 = var13 == var12;
                    var5 = var12;
                    if(var12) { _fun0026_ip = 2045; continue _fun0026 }
 2027:
                    var45 = var9;
                    var44 = var8;
                    var43 = var7;
                    var42 = var6;
                    var46 = undefined;
                    var5 = var46[var10](var45, var44, var43, var42, var41);
 2045:
                    var5 = undefined;
                    return var5;
 2050:
                    var6 = _closure1_slot51;
                    var5 = var6.info;
                    var3 = 'Converting channel to a private channel';
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var4 = _closure1_slot51;
                        var3 = var4.info;
                        var2 = 'Finished converting channel to a private channel';
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure1_slot55;
                        var4 = var5._sendMessage;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var1, var3, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var2;
 2089:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['_sendMessage'] = var8;
    var8 = function startEditMessage(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MESSAGE_START_EDIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['messageId'] = var5;
        var5 = arg3;
        var2['content'] = var5;
        var5 = arg4;
        var2['source'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['startEditMessage'] = var8;
    var8 = function startEditMessageRecord(arg1, arg2, arg3) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var4 = arg3;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 67;
            var5 = var5[var3];
            var3 = undefined;
            var10 = var8.bind(var3)(var5);
            var9 = var10.hasFlag;
            var8 = var6.flags;
            var5 = _closure1_slot34;
            var5 = var5.IS_COMPONENTS_V2;
            var5 = var9.bind(var10)(var8, var5);
            if(!var5) { _fun0031_ip = 98; continue _fun0031 }
 66:
            var9 = var6.components;
            var8 = var9.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 81;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ComponentType;
                var1 = var1.TEXT_DISPLAY;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var8.bind(var9)(var5);
            var9 = var8.length;
            var5 = 0;
            if(!(!(var9 > var5))) { _fun0031_ip = 168; continue _fun0031 }
 98:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 46;
            var5 = var10[var5];
            var10 = var9.bind(var3)(var5);
            var9 = var10.dispatch;
            var5 = {};
            var11 = 'MESSAGE_START_EDIT';
            var5['type'] = var11;
            var5['channelId'] = var7;
            var11 = var6.id;
            var5['messageId'] = var11;
            var11 = var6.content;
            var5['content'] = var11;
            var5['source'] = var4;
            var5 = var9.bind(var10)(var5);
            return var3;
 168:
            var5 = var8.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.content;
                return var1;
            };
            var8 = var5.bind(var8)(var2);
            var5 = var8.join;
            var2 = '\n';
            var5 = var5.bind(var8)(var2);
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 46;
            var1 = var8[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var8 = 'MESSAGE_START_EDIT';
            var1['type'] = var8;
            var1['channelId'] = var7;
            var6 = var6.id;
            var1['messageId'] = var6;
            var1['content'] = var5;
            var1['source'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['startEditMessageRecord'] = var8;
    var8 = function updateEditMessage(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MESSAGE_UPDATE_EDIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['textValue'] = var5;
        var5 = arg3;
        var2['richValue'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateEditMessage'] = var8;
    var8 = function endEditMessage(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MESSAGE_END_EDIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['response'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['endEditMessage'] = var8;
    var8 = function editMessage(arg1, arg2, arg3) {
        var2 = arg3;
        var3 = arg1;
        var _closure2_slot0 = var3;
        var3 = arg2;
        var _closure2_slot1 = var3;
        var3 = var2.content;
        var _closure2_slot2 = var3;
        var2 = var2.components;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0032_ip = 545; continue _fun0032 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var11 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = _closure1_slot20;
                    var2 = var6.getEditActionSource;
                    var6 = var2.bind(var6)(var7);
                    var2 = 'message_swipe';
                    if(!(var2 === var6)) { _fun0032_ip = 161; continue _fun0032 }
 59:
                    var6 = _closure1_slot19;
                    var2 = var6.getChannel;
                    var12 = var2.bind(var6)(var7);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 43;
                    var2 = var8[var2];
                    var9 = var6.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot28;
                    var6 = var2.MESSAGE_SWIPE_ACTION_SENT;
                    var2 = {};
                    var2['message_id'] = var11;
                    var2['channel_id'] = var7;
                    var11 = null;
                    var13 = var11 == var12;
                    var11 = undefined;
                    if(var13) { _fun0032_ip = 135; continue _fun0032 }
 130:
                    var11 = var12.guild_id;
 135:
                    var2['guild_id'] = var11;
                    var11 = 'edit';
                    var2['swipe_action'] = var11;
                    var11 = true;
                    var2['is_own_message'] = var11;
                    var2 = var8.bind(var9)(var6, var2);
 161:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 82;
                    var2 = var8[var2];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var6)(var7);
                    SaveGenerator(address=196);
 194:
                    return var2;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0032_ip = 542; continue _fun0032 }
 205:
                    var11 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var7 = _closure1_slot22;
                    var6 = var7.getMessage;
                    var12 = var6.bind(var7)(var11, var9);
                    var7 = null;
                    var8 = var7 != var12;
                    var6 = undefined;
                    if(!var8) { _fun0032_ip = 382; continue _fun0032 }
 243:
                    var13 = var12.type;
                    var8 = _closure1_slot36;
                    var8 = var8.REPLY;
                    var6 = undefined;
                    if(!(var13 === var8)) { _fun0032_ip = 382; continue _fun0032 }
 264:
                    var14 = _closure1_slot14;
                    var13 = var14.getMessageByReference;
                    var8 = var12.messageReference;
                    var8 = var13.bind(var14)(var8);
                    var14 = var8.state;
                    var13 = _closure1_slot15;
                    var13 = var13.LOADED;
                    var6 = undefined;
                    if(!(var14 === var13)) { _fun0032_ip = 382; continue _fun0032 }
 306:
                    var13 = var12.mentions;
                    var12 = var13.includes;
                    var8 = var8.message;
                    var8 = var8.author;
                    var8 = var8.id;
                    var8 = var12.bind(var13)(var8);
                    var6 = undefined;
                    if(var8) { _fun0032_ip = 382; continue _fun0032 }
 343:
                    var8 = {};
                    var12 = global;
                    var14 = var12.Object;
                    var13 = var14.values;
                    var12 = _closure1_slot37;
                    var12 = var13.bind(var14)(var12);
                    var8['parse'] = var12;
                    var12 = false;
                    var8['replied_user'] = var12;
                    var6 = var8;
 382:
                    var12 = _closure1_slot22;
                    var8 = var12.getMessage;
                    var13 = var8.bind(var12)(var11, var9);
                    var7 = var7 != var13;
                    if(!var7) { _fun0032_ip = 426; continue _fun0032 }
 405:
                    var12 = var13.hasFlag;
                    var8 = _closure1_slot34;
                    var8 = var8.CROSSPOSTED;
                    var7 = var12.bind(var13)(var8);
 426:
                    var8 = {};
                    var8['channelId'] = var11;
                    var8['messageId'] = var9;
                    var9 = _closure2_slot2;
                    var8['content'] = var9;
                    var8['isCrossposted'] = var7;
                    var8['allowed_mentions'] = var6;
                    var5 = _closure2_slot3;
                    var8['components'] = var5;
                    _closure4_slot0 = var8;
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 70;
                    var5 = var11[var9];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.enqueue;
                    var5 = {};
                    var10 = _closure1_slot0;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.MessageDataType;
                    var9 = var9.EDIT;
                    var5['type'] = var9;
                    var5['message'] = var8;
                    var4 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var8 = arg1;
                            var1 = var8.hasErr;
                            var9 = !var1;
                            if(!var9) { _fun0033_ip = 66; continue _fun0033 }
 15:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 80;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.AUTOMOD_ERROR_CODES;
                            var2 = var3.has;
                            var1 = var8.body;
                            var1 = var1.code;
                            var9 = var2.bind(var3)(var1);
 66:
                            if(!var9) { _fun0033_ip = 202; continue _fun0033 }
 72:
                            var4 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 70;
                            var2 = var5[var2];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.MessageDataType;
                            var2 = var2.EDIT;
                            var4['type'] = var2;
                            var2 = _closure4_slot0;
                            var4['message'] = var2;
                            var2 = _closure1_slot1;
                            var1 = 46;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'MESSAGE_EDIT_FAILED_AUTOMOD';
                            var1['type'] = var5;
                            var1['messageData'] = var4;
                            var4 = {};
                            var5 = var8.body;
                            var5 = var5.code;
                            var4['code'] = var5;
                            var5 = var8.body;
                            var5 = var5.message;
                            var4['message'] = var5;
                            var1['errorResponseBody'] = var4;
                            var1 = var2.bind(var3)(var1);
 202:
                            var10 = var8.hasErr;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 83;
                            var3 = var12[var1];
                            var1 = undefined;
                            var3 = var11.bind(var1)(var3);
                            var5 = var3.AccessibilityAnnouncer;
                            var4 = var5.announce;
                            var3 = 44;
                            var6 = var12[var3];
                            var6 = var11.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var3 = var12[var3];
                            var3 = var11.bind(var1)(var3);
                            var3 = var3.t;
                            if(var10) { _fun0033_ip = 327; continue _fun0033 }
 284:
                            if(var9) { _fun0033_ip = 307; continue _fun0033 }
 287:
                            var9 = var3.0x1HBA;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0033_ip = 345; continue _fun0033;
 307:
                            var9 = var3.Hym4i4;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0033_ip = 345; continue _fun0033;
 327:
                            var3 = var3.Atp7FB;
                            var3 = var6.bind(var7)(var3);
                            var3 = var4.bind(var5)(var3);
 345:
                            var7 = _closure1_slot55;
                            var6 = var7.endEditMessage;
                            var4 = _closure2_slot0;
                            var9 = var8.hasErr;
                            var3 = undefined;
                            if(var9) { _fun0033_ip = 376; continue _fun0033 }
 373:
                            var3 = var8;
 376:
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure1_slot55;
                            var3 = var4.focusMessage;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var2['channelId'] = var6;
                            var5 = _closure2_slot1;
                            var2['messageId'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 542:
                    return var2;
 545:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['editMessage'] = var8;
    var8 = function suppressEmbeds(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0034_ip = 168; continue _fun0034 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 82;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
 55:
                    return var2;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0034_ip = 165; continue _fun0034 }
 63:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 51;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var11 = _closure1_slot29;
                    var10 = var11.MESSAGE;
                    var9 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var7 = var10.bind(var11)(var9, var7);
                    var4['url'] = var7;
                    var7 = {};
                    var8 = _closure1_slot34;
                    var8 = var8.SUPPRESS_EMBEDS;
                    var7['flags'] = var8;
                    var4['body'] = var7;
                    var7 = true;
                    var4['oldFormErrors'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 165:
                    return var2;
 168:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['suppressEmbeds'] = var8;
    var8 = function patchMessageAttachments(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0035_ip = 163; continue _fun0035 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 82;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
 55:
                    return var2;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0035_ip = 160; continue _fun0035 }
 63:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 51;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var11 = _closure1_slot29;
                    var10 = var11.MESSAGE;
                    var9 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var7 = var10.bind(var11)(var9, var7);
                    var4['url'] = var7;
                    var7 = {};
                    var8 = _closure2_slot2;
                    var7['attachments'] = var8;
                    var4['body'] = var7;
                    var7 = true;
                    var4['oldFormErrors'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 160:
                    return var2;
 163:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['patchMessageAttachments'] = var8;
    var8 = function deleteMessage(arg1, arg2) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0036_ip = 27; continue _fun0036 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0037_ip = 191; continue _fun0037 }
 12:
                        var3 = function dispatchDelete() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 46;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'MESSAGE_DELETE';
                            var2['type'] = var5;
                            var6 = _closure2_slot1;
                            var2['id'] = var6;
                            var5 = _closure2_slot0;
                            var2['channelId'] = var5;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.then;
                            var2 = function() {
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 83;
                                var2 = var8[var1];
                                var1 = undefined;
                                var2 = var7.bind(var1)(var2);
                                var4 = var2.AccessibilityAnnouncer;
                                var3 = var4.announce;
                                var2 = 44;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.RYMs7u;
                                var2 = var5.bind(var6)(var2);
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var _closure4_slot0 = var3;
                        var2 = _closure2_slot2;
                        if(var2) { _fun0037_ip = 180; continue _fun0037 }
 34:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 82;
                        var2 = var6[var2];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var2);
                        var5 = var6.unarchiveThreadIfNecessary;
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=78);
 76:
                        return var2;
 78:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0037_ip = 177; continue _fun0037 }
 84:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 51;
                        var5 = var10[var5];
                        var5 = var6.bind(var7)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.del;
                        var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var11 = _closure1_slot29;
                        var10 = var11.MESSAGE;
                        var9 = _closure2_slot0;
                        var8 = _closure2_slot1;
                        var8 = var10.bind(var11)(var9, var8);
                        var5['url'] = var8;
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.then;
                        var4 = function() {
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        _fun0037_ip = 186; continue _fun0037;
 177:
                        return var2;
 180:
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 186:
                        var2 = undefined;
                        return var2;
 191:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['deleteMessage'] = var8;
    var8 = function dismissAutomatedMessage(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = arg1;
            var5 = this;
            var3 = var1.loggingName;
            var2 = null;
            if(!(var2 != var3)) { _fun0038_ip = 94; continue _fun0038 }
 18:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 32;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var4);
            var4 = var6.trackWithMetadata;
            var2 = _closure1_slot28;
            var3 = var2.AUTOMATED_MESSAGE_DISMISSED;
            var2 = {};
            var7 = var1.loggingName;
            var2['message_name'] = var7;
            var7 = var1.author;
            var7 = var7.username;
            var2['message_author'] = var7;
            var2 = var4.bind(var6)(var3, var2);
 94:
            var4 = var5.deleteMessage;
            var3 = var1.channel_id;
            var2 = var1.id;
            var1 = true;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['dismissAutomatedMessage'] = var8;
    var8 = function revealMessage(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MESSAGE_REVEAL';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['messageId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['revealMessage'] = var8;
    var8 = function crosspostMessage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 51;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {'url': null, 'oldFormErrors': true, 'failImmediatelyWhenRateLimited': true, 'rejectWithError': false};
        var7 = _closure1_slot29;
        var6 = var7.MESSAGE_CROSSPOST;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.catch;
        var1 = function(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var5 = arg1;
                var2 = var5.status;
                var1 = 429;
                if(!(var1 !== var2)) { _fun0039_ip = 82; continue _fun0039 }
 18:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 44;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.z2gyND;
                var6 = var2.bind(var3)(var1);
                _fun0039_ip = 189; continue _fun0039;
 82:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 44;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.77cuq6;
                var1 = {};
                var7 = global;
                var8 = var7.Math;
                var7 = var8.floor;
                var5 = var5.body;
                var9 = var5.retry_after;
                var5 = 60;
                var5 = var9 / var5;
                var5 = var7.bind(var8)(var5);
                var1['retryAfter'] = var5;
                var6 = var3.bind(var4)(var2, var1);
 189:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 84;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 44;
                var7 = var9[var5];
                var7 = var8.bind(var1)(var7);
                var11 = var7.intl;
                var10 = var11.string;
                var7 = var9[var5];
                var7 = var8.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.Vd1hs7;
                var7 = var10.bind(var11)(var7);
                var2['title'] = var7;
                var2['body'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.BddRzc;
                var5 = var6.bind(var7)(var5);
                var2['confirmText'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['crosspostMessage'] = var8;
    var2['trackInvite'] = var7;
    var _closure1_slot55 = var2;
    var4 = 85;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/MessageActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();