// app/actions/MessageActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var7 = function trackInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.inviteKey;
            var11 = var1.channelId;
            var9 = var1.messageId;
            var12 = var1.location;
            var5 = var1.inviteAnalyticsMetadata;
            var3 = var1.overrideProperties;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var6 = _closure1_slot18;
            var4 = var6.getId;
            var16 = var4.bind(var6)();
            var6 = _closure1_slot22;
            var4 = var6.getInvite;
            var14 = var4.bind(var6)(var7);
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var10 = 41;
            var4 = var4[var10];
            var6 = var6.bind(var1)(var4);
            var4 = var6.parseExtraDataFromInviteKey;
            var4 = var4.bind(var6)(var7);
            var6 = null;
            var8 = var6 != var14;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var7 = 42;
            var7 = var15[var7];
            var13 = var13.bind(var1)(var7);
            var7 = var13.isEmbeddedApplicationInvite;
            var8 = var7.bind(var13)(var14);
case 4:
            var7 = var6 == var14;
            var15 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var14.target_application;
            var13 = var6 == var7;
            var15 = undefined;
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var15 = var7.id;
case 6:
            var7 = var6 != var15;
            if(!var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var8;
case 9:
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var7 = 34;
            var7 = var13[var7];
            var13 = var8.bind(var1)(var7);
            var8 = var13.trackAppEmbedLinkSent;
            var7 = _closure1_slot46;
            var7 = var7.ACTIVITY_INVITE;
            var7 = var8.bind(var13)(var15, var7, var16);
case 11:
            var8 = _closure1_slot19;
            var7 = var8.getChannel;
            var7 = var7.bind(var8)(var11);
            if(!(var6 == var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = {};
            if(!(var6 != var14)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = var14.state;
            var11 = _closure1_slot34;
            var11 = var11.RESOLVED;
            if(!(var13 === var11)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var11 = var14.inviter;
            if(!(var6 != var11)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var11 = var14.inviter;
            var11 = var11.id;
            var8['invite_inviter_id'] = var11;
            var11 = var14.target_application;
            if(!(var6 != var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var14.target_application;
            var11 = var11.id;
            var8['application_id'] = var11;
case 19:
            var15 = {};
            var21 = var15;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var8 = 'location';
            var15[7] = var12;
            var8 = _closure1_slot32;
            var11 = var8.FRIEND_INVITE;
            var8 = 'invite_type';
            var15[7] = var11;
            var11 = var4.baseCode;
            var8 = 'invite_code';
            var15[7] = var11;
            var8 = 'message_id';
            var15[7] = var9;
            var8 = _closure1_slot33;
            var11 = var8.DIRECT_MESSAGE;
            var8 = 'send_type';
            var15[7] = var11;
            var11 = var4.guildScheduledEventId;
            var8 = 'invite_guild_scheduled_event_id';
            var15[7] = var11;
            var11 = _closure1_slot0;
            var8 = _closure1_slot3;
            var8 = var8[var10];
            var13 = var11.bind(var1)(var8);
            var11 = var13.getInviteInstanceId;
            var8 = var4.baseCode;
            var8 = var11.bind(var13)(var8, var9);
            var13 = var6 != var8;
            var11 = null;
            if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var8;
case 21:
            var8 = 'invite_instance_id';
            var15[7] = var11;
            var21 = var15;
            var20 = var3;
            var8 = copyDataProperties(var21, var20);
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var8 = 35;
            var8 = var13[var8];
            var13 = var11.bind(var1)(var8);
            var11 = var13.trackWithMetadata;
            var8 = _closure1_slot29;
            var8 = var8.INVITE_SENT;
            var8 = var11.bind(var13)(var8, var15);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var8 = var7.isMultiUserDM;
            var8 = var8.bind(var7)();
            if(var8) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var8 = var7.isPrivate;
            var8 = var8.bind(var7)();
            var15 = null;
            if(var8) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = _closure1_slot32;
            var15 = var8.SERVER_INVITE;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var8 = _closure1_slot32;
            var15 = var8.GDM_INVITE;
case 25:
            var8 = {};
            var11 = var15;
            if(!(var6 != var14)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var16 = var14.state;
            var13 = _closure1_slot34;
            var13 = var13.RESOLVED;
            var11 = var15;
            if(!(var16 === var13)) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var13 = var14.channel;
            var11 = var15;
            if(!(var6 != var13)) { _fun0001_ip = 27; continue _fun0001 }
case 30:
            var13 = var14.channel;
            var16 = var13.id;
            var8['invite_channel_id'] = var16;
            var17 = var14.guild;
            var18 = var6 == var17;
            var16 = undefined;
            if(var18) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var16 = var17.id;
case 31:
            var8['invite_guild_id'] = var16;
            var16 = var13.type;
            var8['invite_channel_type'] = var16;
            var16 = var14.inviter;
            if(!(var6 != var16)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var16 = var14.inviter;
            var16 = var16.id;
            var8['invite_inviter_id'] = var16;
case 33:
            var16 = var14.target_application;
            if(!(var6 != var16)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var14 = var14.target_application;
            var14 = var14.id;
            var8['application_id'] = var14;
case 35:
            var16 = _closure1_slot17;
            var14 = var16.getLastActiveStream;
            var17 = var14.bind(var16)();
            var11 = var15;
            if(!(var6 != var17)) { _fun0001_ip = 27; continue _fun0001 }
case 37:
            var14 = var17.channelId;
            var13 = var13.id;
            var11 = var15;
            if(!(var14 === var13)) { _fun0001_ip = 27; continue _fun0001 }
case 38:
            var13 = _closure1_slot32;
            var13 = var13.STREAM;
            var14 = var17.ownerId;
            var8['destination_user_id'] = var14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot3;
            var14 = 43;
            var14 = var16[var14];
            var16 = var15.bind(var1)(var14);
            var15 = var16.getStreamerApplication;
            var14 = _closure1_slot24;
            var15 = var15.bind(var16)(var17, var14);
            var16 = var6 != var15;
            var14 = null;
            if(!var16) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var14 = var15.id;
case 39:
            var8['application_id'] = var14;
            var11 = var13;
case 27:
            if(!(var6 != var5)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var13 = var5.suggestionData;
            if(!(var6 != var13)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var13 = var5.suggestionData;
            var13 = var13.isAffinitySuggestion;
            var8['is_suggested'] = var13;
            var13 = var5.suggestionData;
            var13 = var13.rowNum;
            var8['row_num'] = var13;
            var13 = var5.suggestionData;
            var13 = var13.numTotal;
            var8['num_total'] = var13;
            var13 = var5.suggestionData;
            var13 = var13.numAffinityConnections;
            var8['num_affinity_connections'] = var13;
            var13 = var5.suggestionData;
            var13 = var13.isFiltered;
            var8['is_filtered'] = var13;
case 43:
            var5 = var5.source;
            var8['source'] = var5;
case 41:
            var5 = {};
            var21 = var5;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var8 = 'location';
            var5[7] = var12;
            var8 = 'invite_type';
            var5[7] = var11;
            var11 = var4.baseCode;
            var8 = 'invite_code';
            var5[7] = var11;
            var8 = var7.getGuildId;
            var11 = var8.bind(var7)();
            var8 = 'guild_id';
            var5[7] = var11;
            var8 = var7.id;
            var7 = 'channel_id';
            var5[6] = var8;
            var7 = 'message_id';
            var5[6] = var9;
            var7 = _closure1_slot33;
            var8 = var7.DIRECT_MESSAGE;
            var7 = 'send_type';
            var5[6] = var8;
            var8 = var4.guildScheduledEventId;
            var7 = 'invite_guild_scheduled_event_id';
            var5[6] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.getInviteInstanceId;
            var4 = var4.baseCode;
            var4 = var7.bind(var8)(var4, var9);
            var7 = var6 != var4;
            var6 = null;
            if(!var7) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var6 = var4;
case 45:
            var4 = 'invite_instance_id';
            var5[3] = var6;
            var21 = var5;
            var20 = var3;
            var3 = copyDataProperties(var21, var20);
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 35;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.trackWithMetadata;
            var2 = _closure1_slot29;
            var2 = var2.INVITE_SENT;
            var2 = var3.bind(var4)(var2, var5);
case 15:
            return var1;
        }
    };
    var _closure1_slot57 = var7;
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
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var8 = var6[var2];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ReferencedMessageState;
    var _closure1_slot15 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot23 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var2 = 20;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot24 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot25 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SlowmodeType;
    var _closure1_slot26 = var2;
    var2 = 23;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot27 = var2;
    var2 = 24;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AbortCodes;
    var _closure1_slot28 = var8;
    var10 = var2.AnalyticEvents;
    var _closure1_slot29 = var10;
    var10 = var2.Endpoints;
    var _closure1_slot30 = var10;
    var10 = var2.Permissions;
    var10 = var2.ChannelTypes;
    var _closure1_slot31 = var10;
    var10 = var2.LoggingInviteTypes;
    var _closure1_slot32 = var10;
    var10 = var2.SendTypes;
    var _closure1_slot33 = var10;
    var10 = var2.InviteStates;
    var _closure1_slot34 = var10;
    var10 = var2.MessageFlags;
    var _closure1_slot35 = var10;
    var10 = var2.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot36 = var10;
    var10 = var2.MessageTypes;
    var _closure1_slot37 = var10;
    var10 = var2.AllowedMentionTypes;
    var _closure1_slot38 = var10;
    var10 = var2.HelpdeskArticles;
    var _closure1_slot39 = var10;
    var10 = var2.MarketingURLs;
    var _closure1_slot40 = var10;
    var10 = var2.MessageReferenceTypes;
    var _closure1_slot41 = var10;
    var10 = var2.LOCAL_BOT_ID;
    var _closure1_slot42 = var10;
    var10 = var2.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot43 = var10;
    var10 = var2.MessageStates;
    var _closure1_slot44 = var10;
    var2 = var2.ActivityActionTypes;
    var _closure1_slot45 = var2;
    var2 = 25;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.LinkType;
    var _closure1_slot46 = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildTemplateStates;
    var _closure1_slot47 = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.FileUploadErrorTypes;
    var _closure1_slot48 = var10;
    var2 = var2.MessageSendLocation;
    var _closure1_slot49 = var2;
    var2 = 28;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var2 = var2.MediaPlayerManager;
    var _closure1_slot50 = var2;
    var2 = 29;
    var10 = var6[var2];
    var12 = var9.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'MessageActionCreators';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot51 = var10;
    var2 = var6[var2];
    var10 = var9.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var15 = 'MessageQueue';
    var16 = var9;
    var2 = new var16[var10](var15, var14);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot52 = var2;
    var2 = false;
    var _closure1_slot53 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function RemoteFetch() {
            var3 = this;
            var4 = _closure1_slot6;
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
    var _closure1_slot54 = var2;
    var2 = {};
    var10 = var8.SLOWMODE_RATE_LIMITED;
    var9 = {};
    var11 = 'SLOWMODE_RATE_LIMITED';
    var9['messageName'] = var11;
    var11 = function messageGetter(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.IWntYg;
        var1 = {};
        var5 = arg1;
        var5 = var5.rateLimitPerUser;
        var1['seconds'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS;
    var9 = {};
    var11 = 'INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS';
    var9['messageName'] = var11;
    var11 = function messageGetter(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 47;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var4.bind(var7)(var1);
            var4 = var5.getArticleURL;
            var1 = _closure1_slot39;
            var1 = var1.DM_COULD_NOT_BE_DELIVERED;
            var6 = var4.bind(var5)(var1);
            var4 = var3.rawRecipients;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var4 = new Array(0);
case 47:
            var1 = var3.isDM;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var3 = var4.length;
            var1 = 1;
            if(!(var1 === var3)) { _fun0002_ip = 49; continue _fun0002 }
case 51:
            var3 = var4.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.bot;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0002_ip = 52; continue _fun0002 }
case 49:
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 46;
            var4 = var8[var1];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var3.bind(var7)(var1);
            var1 = var1.t;
            var3 = var1.llTkqr;
            var1 = {};
            var1['helpUrl'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 53; continue _fun0002;
case 52:
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 46;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.SkGL7l;
            var2 = {};
            var2['helpUrl'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 53:
            return var1;
        }
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_USER;
    var9 = {};
    var11 = 'INVALID_MESSAGE_SEND_USER';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 46;
        var3 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var9[var1];
        var1 = var2.bind(var8)(var1);
        var1 = var1.t;
        var2 = var1.SkGL7l;
        var1 = {};
        var7 = _closure1_slot1;
        var6 = 47;
        var6 = var9[var6];
        var7 = var7.bind(var8)(var6);
        var6 = var7.getArticleURL;
        var5 = _closure1_slot39;
        var5 = var5.DM_COULD_NOT_BE_DELIVERED;
        var5 = var6.bind(var7)(var5);
        var1['helpUrl'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.TOO_MANY_THREADS;
    var9 = {};
    var11 = 'TOO_MANY_THREADS';
    var9['messageName'] = var11;
    var11 = function messageGetter(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isForumLikeChannel;
            var1 = var1.bind(var2)();
            if(var1) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var1 = var2.isForumPost;
            var1 = var1.bind(var2)();
            if(var1) { _fun0003_ip = 54; continue _fun0003 }
case 56:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 46;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["5EMPA7"];
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 57; continue _fun0003;
case 54:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 46;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["/jUd2+"];
            var1 = var3.bind(var4)(var2);
case 57:
            return var1;
        }
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.TOO_MANY_ANNOUNCEMENT_THREADS;
    var9 = {};
    var11 = 'TOO_MANY_ANNOUNCEMENT_THREADS';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aY+lLC;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.HARMFUL_LINK_MESSAGE_BLOCKED;
    var9 = {};
    var11 = 'HARMFUL_LINK_MESSAGE_BLOCKED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 46;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.zSG3Qy;
        var1 = {};
        var5 = _closure1_slot40;
        var5 = var5.HARMFUL_LINKS;
        var1['helpUrl'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.HARMFUL_URL_BLOCKED;
    var9 = {};
    var11 = 'HARMFUL_URL_BLOCKED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.WxX2Fd;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.EMAIL_VERIFICATION_REQUIRED;
    var9 = {};
    var11 = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.k1Cjqr;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED;
    var9 = {};
    var11 = 'GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Z5SUuv;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.RATE_LIMIT_DM_OPEN;
    var9 = {};
    var11 = 'BOT_DM_RATE_LIMITED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.E8nbNb;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.SEND_MESSAGE_TEMPORARILY_DISABLED;
    var9 = {};
    var11 = 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aRUbah;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_GAME_FRIEND_DM;
    var9 = {};
    var11 = 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["/meGhR"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE;
    var9 = {};
    var11 = 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Oc1Zjw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.TOTAL_ATTACHMENT_SIZE_TOO_LARGE;
    var9 = {};
    var11 = 'TOTAL_ATTACHMENT_SIZE_TOO_LARGE';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var1 = 46;
        var2 = var8[var1];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var2 = var1.DYFPg2;
        var1 = {};
        var5 = 48;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.MAX_TOTAL_ATTACHMENT_SIZE_MB;
        var1['maxSizeMb'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var10 = var8.CLOUD_UPLOAD_NOT_FOUND;
    var9 = {};
    var11 = 'CLOUD_UPLOAD_NOT_FOUND';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.bQldfH;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[9] = var9;
    var9 = var8.INVALID_PERMISSIONS;
    var8 = {};
    var10 = 'INVALID_PERMISSIONS';
    var8['messageName'] = var10;
    var10 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 46;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.zl4Weq;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['messageGetter'] = var10;
    var2[8] = var8;
    var _closure1_slot55 = var2;
    var2 = {};
    var8 = function receiveMessage(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arguments[2];
            var5 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var6 = false;
case 58:
            if(!(var5 === var1)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var5 = {};
case 60:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 49;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var8 = arg3;
            var1 = null;
            if(!(var1 != var8)) { _fun0005_ip = 62; continue _fun0005 }
case 59:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 35;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot29;
            var2 = var1.AUTOMATED_MESSAGE_RECEIVED;
            var1 = {};
            var6 = 'Clyde';
            var1['message_author'] = var6;
            var1['message_name'] = var8;
            var1 = var3.bind(var4)(var2, var1);
case 62:
            var4 = _closure1_slot56;
            var3 = var4.receiveMessage;
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 50;
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
        var2 = _closure1_slot3;
        var1 = 50;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channelId'] = var6;
        var4 = arg3;
        var2['nonce'] = var4;
        var4 = _closure1_slot37;
        var4 = var4.NITRO_NOTIFICATION;
        var2['type'] = var4;
        var4 = arg2;
        var2['content'] = var4;
        var4 = _closure1_slot35;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Nitro Notification', 'discriminator': null, 'avatar': 'nitro', 'bot': true};
        var5 = _closure1_slot42;
        var4['id'] = var5;
        var5 = _closure1_slot43;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot56;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot44;
        var8 = var7.SENT;
        var7 = 'state';
        var2[6] = var8;
        var7 = 'channel_id';
        var2[6] = var6;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendNitroSystemMessage'] = var8;
    var8 = function sendGiftingPromptSystemMessage(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 50;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channelId'] = var6;
        var4 = _closure1_slot37;
        var4 = var4.GIFTING_PROMPT;
        var2['type'] = var4;
        var4 = '';
        var2['content'] = var4;
        var4 = _closure1_slot35;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Gifting Prompt', 'discriminator': null, 'avatar': 'gifting_prompt', 'bot': true};
        var5 = _closure1_slot42;
        var4['id'] = var5;
        var5 = _closure1_slot43;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var4 = arg2;
        var2['giftingPrompt'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot56;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot44;
        var8 = var7.SENT;
        var7 = 'state';
        var2[6] = var8;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendGiftingPromptSystemMessage'] = var8;
    var8 = function sendGuildBoostUpsellSystemMessage(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 50;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channelId'] = var6;
        var4 = _closure1_slot37;
        var4 = var4.GUILD_BOOST_UPSELL;
        var2['type'] = var4;
        var4 = '';
        var2['content'] = var4;
        var4 = _closure1_slot35;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Guild Boost Upsell', 'discriminator': null, 'avatar': 'guild_boost_upsell', 'bot': true};
        var5 = _closure1_slot42;
        var4['id'] = var5;
        var5 = _closure1_slot43;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var4 = arg2;
        var2['boostingPrompt'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot56;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot44;
        var8 = var7.SENT;
        var7 = 'state';
        var2[6] = var8;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendGuildBoostUpsellSystemMessage'] = var8;
    var8 = function sendClydeError(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var12 = arguments[1];
            var1 = undefined;
            if(!(var12 === var1)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var12 = 0;
case 58:
            var4 = _closure1_slot19;
            var2 = var4.getChannel;
            var7 = var2.bind(var4)(var6);
            var4 = null;
            if(!(var4 != var7)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var2 = _closure1_slot55;
            var2 = var2[var12];
            if(!(var4 == var2)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var9 = _closure1_slot56;
            var8 = var9.sendBotMessage;
            var5 = _closure1_slot0;
            var15 = _closure1_slot3;
            var4 = 46;
            var10 = var15[var4];
            var10 = var5.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var4 = var15[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.t;
            var5 = var4.SkGL7l;
            var4 = {};
            var14 = _closure1_slot1;
            var13 = 47;
            var13 = var15[var13];
            var15 = var14.bind(var1)(var13);
            var14 = var15.getArticleURL;
            var13 = _closure1_slot39;
            var13 = var13.DM_COULD_NOT_BE_DELIVERED;
            var13 = var14.bind(var15)(var13);
            var4['helpUrl'] = var13;
            var5 = var10.bind(var11)(var5, var4);
            var4 = global;
            var4 = var4.HermesInternal;
            var11 = var4.concat;
            var10 = 'SEND_FAILED (';
            var4 = ')';
            var4 = var11.bind(var10)(var12, var4);
            var4 = var8.bind(var9)(var6, var5, var4);
            _fun0006_ip = 63; continue _fun0006;
case 65:
            var5 = _closure1_slot56;
            var4 = var5.sendBotMessage;
            var3 = var2.messageGetter;
            var3 = var3.bind(var2)(var7);
            var2 = var2.messageName;
            var2 = var4.bind(var5)(var6, var3, var2);
case 63:
            return var1;
        }
    };
    var2['sendClydeError'] = var8;
    var8 = function sendExplicitMediaClydeError(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot19;
            var2 = var3.getChannel;
            var13 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var13)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 51;
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
                var7 = _closure1_slot3;
                var2 = 46;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.mktny/;
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
                var7 = _closure1_slot3;
                var2 = 46;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.mktny/;
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
                var7 = _closure1_slot3;
                var2 = 46;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.i4AbAS;
                var2 = var3.bind(var4)(var2);
                var1['message'] = var2;
                var2 = 'BOT_GUILD_EXPLICIT_CONTENT';
                var1['messageName'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var16 = var6.message;
            var15 = var6.messageName;
            var6 = 52;
            var6 = var12[var6];
            var7 = var11.bind(var3)(var6);
            var6 = var7.createNonce;
            var6 = var6.bind(var7)();
            var8 = _closure1_slot56;
            var7 = var8.sendBotMessage;
            var18 = var8;
            var17 = var5;
            var14 = var6;
            var7 = var18[var7](var17, var16, var15, var14, var13);
            var10 = 53;
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
            if(!var2) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var8 = var4.length;
            var7 = 0;
            var2 = var8 > var7;
case 69:
            if(!var2) { _fun0007_ip = 67; continue _fun0007 }
case 71:
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 49;
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
case 67:
            var1 = undefined;
            return var1;
        }
    };
    var2['sendExplicitMediaClydeError'] = var8;
    var8 = function truncateMessages(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 49;
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
        var2 = _closure1_slot3;
        var1 = 49;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var7 = _closure1_slot56;
            var6 = var7.trackJump;
            var3 = null;
            var2 = 'Present';
            var2 = var6.bind(var7)(var5, var3, var2);
            var6 = {};
            var2 = true;
            var6['present'] = var2;
            var3 = _closure1_slot23;
            var2 = var3.hasPresent;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 48:
            var7 = _closure1_slot56;
            var3 = var7.fetchMessages;
            var2 = {};
            var2['channelId'] = var5;
            var2['limit'] = var4;
            var2['jump'] = var6;
            var2 = var3.bind(var7)(var2);
            _fun0008_ip = 72; continue _fun0008;
case 54:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 49;
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
case 72:
            var1 = undefined;
            return var1;
        }
    };
    var2['jumpToPresent'] = var8;
    var8 = function trackJump(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 35;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot29;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var14 = var1.channelId;
            var13 = var1.messageId;
            var12 = var1.flash;
            var2 = undefined;
            if(!(var12 === var2)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var12 = false;
case 73:
            var11 = var1.offset;
            var7 = var1.context;
            var3 = var1.extraProperties;
            if(!(var3 === var2)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            var3 = null;
case 75:
            var6 = var1.isPreload;
            var10 = var1.returnMessageId;
            var5 = var1.skipLocalFetch;
            var9 = var1.jumpType;
            var4 = var1.avoidInitialScroll;
            var8 = var1.onJumpComplete;
            var2 = 'string';
            var1 = typeof var7;
            if(!(var2 === var1)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var2 = _closure1_slot56;
            var1 = var2.trackJump;
            var19 = var2;
            var18 = var14;
            var17 = var13;
            var16 = var7;
            var15 = var3;
            var1 = var19[var1](var18, var17, var16, var15, var14);
case 77:
            var1 = _closure1_slot50;
            var3 = null;
            var1 = var3 == var1;
            if(var1) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var2 = _closure1_slot50;
            var2 = var2.pauseAllMediaPlayers;
            var1 = var3 == var2;
case 79:
            if(var1) { _fun0009_ip = 6; continue _fun0009 }
case 81:
            var2 = _closure1_slot50;
            var1 = var2.pauseAllMediaPlayers;
            var1 = var1.bind(var2)();
case 6:
            var3 = _closure1_slot56;
            var2 = var3.fetchMessages;
            var1 = {};
            var1['channelId'] = var14;
            var7 = _closure1_slot36;
            var1['limit'] = var7;
            var7 = {};
            var7['messageId'] = var13;
            var7['flash'] = var12;
            var7['offset'] = var11;
            var7['returnMessageId'] = var10;
            var7['jumpType'] = var9;
            var7['onJumpComplete'] = var8;
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
        var3 = _closure1_slot56;
        var2 = var3.fetchMessages;
        var1 = {};
        var1['channelId'] = var6;
        var4 = _closure1_slot36;
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
        var2 = arg1;
        var3 = var2.channelId;
        var _closure2_slot0 = var3;
        var2 = var2.messageId;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 54;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
                    var10 = _closure1_slot30;
                    var9 = var10.MESSAGES;
                    var7 = _closure2_slot0;
                    var7 = var9.bind(var10)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var9 = 1;
                    var7['limit'] = var9;
                    var8 = _closure2_slot1;
                    var7['around'] = var8;
                    var2['query'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=120);
case 84:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var4 = var2.body;
                    var4 = var4.length;
                    var6 = 0;
                    if(!(!(var4 > var6))) { _fun0010_ip = 80; continue _fun0010 }
case 88:
                    return var5;
case 80:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 55;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.createMessageRecord;
                    var3 = var2.body;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 86:
                    return var2;
case 82:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchMessage'] = var8;
    var8 = function fetchMessages(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var13 = this;
            var14 = var1.channelId;
            var _closure2_slot0 = var14;
            var12 = var1.before;
            var _closure2_slot1 = var12;
            var11 = var1.after;
            var _closure2_slot2 = var11;
            var10 = var1.limit;
            var _closure2_slot3 = var10;
            var9 = var1.jump;
            var _closure2_slot4 = var9;
            var17 = var1.focus;
            var8 = var1.isPreload;
            var4 = var1.skipLocalFetch;
            var20 = var1.truncate;
            var _closure2_slot5 = var20;
            var3 = var1.forICYMI;
            var _closure2_slot6 = var3;
            var3 = var1.avoidInitialScroll;
            var _closure2_slot7 = var3;
            var7 = var1.feature;
            var15 = var1.fetchKey;
            var _closure2_slot8 = var15;
            var1 = undefined;
            var _closure2_slot11 = var1;
            var _closure2_slot12 = var1;
            var5 = _closure1_slot19;
            var3 = var5.getChannel;
            var18 = var3.bind(var5)(var14);
            var5 = _closure1_slot8;
            var3 = var5.isConnectedOrOverlay;
            var3 = var3.bind(var5)();
            var _closure2_slot9 = var3;
            var5 = global;
            var16 = var5.Date;
            var3 = var16.now;
            var3 = var3.bind(var16)();
            var _closure2_slot10 = var3;
            var16 = null;
            if(!(var16 != var18)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var19 = var18.type;
            var18 = _closure1_slot31;
            var18 = var18.GUILD_STORE;
            if(!(var19 !== var18)) { _fun0011_ip = 91; continue _fun0011 }
case 89:
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var18 = 56;
            var18 = var21[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var14 !== var18)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
            var19 = _closure1_slot51;
            var18 = var19.log;
            var22 = var5.JSON;
            var21 = var22.stringify;
            var26 = var21.bind(var22)(var9);
            var5 = var5.HermesInternal;
            var24 = var5.concat;
            var33 = 'Fetching messages for ';
            var31 = ' between ';
            var29 = ' and ';
            var27 = '. jump=';
            var32 = var14;
            var30 = var11;
            var28 = var12;
            var5 = var33[var24](var32, var31, var30, var29, var28, var27, var26, var25);
            var5 = var18.bind(var19)(var5);
            var19 = _closure1_slot56;
            var18 = var19._tryFetchMessagesCached;
            var5 = {};
            var5['channelId'] = var14;
            var5['before'] = var12;
            var5['after'] = var11;
            var5['limit'] = var10;
            var5['jump'] = var9;
            var5['focus'] = var17;
            var5['truncate'] = var20;
            var5 = var18.bind(var19)(var5);
            if(var5) { _fun0011_ip = 92; continue _fun0011 }
case 94:
            var18 = _closure1_slot1;
            var19 = _closure1_slot3;
            var5 = 57;
            var5 = var19[var5];
            var5 = var18.bind(var1)(var5);
            var20 = var5.fetchMessages;
            var5 = var20.recordStart;
            var5 = var5.bind(var20)();
            var5 = 58;
            var5 = var19[var5];
            var19 = var18.bind(var1)(var5);
            var18 = var19.recordChannelFetchStart;
            var5 = var3;
            if(!(var16 != var15)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
            var5 = var15;
case 95:
            var33 = var19;
            var32 = var14;
            var31 = var5;
            var30 = var12;
            var29 = var11;
            var28 = var10;
            var5 = var33[var18](var32, var31, var30, var29, var28, var27);
            var18 = var16 != var9;
            var5 = undefined;
            if(!var18) { _fun0011_ip = 97; continue _fun0011 }
case 98:
            var5 = var9;
case 97:
            var9 = var16 == var5;
            if(!var9) { _fun0011_ip = 99; continue _fun0011 }
case 100:
            var9 = var16 != var17;
case 99:
            if(!var9) { _fun0011_ip = 101; continue _fun0011 }
case 102:
            var9 = {};
            var32 = var9;
            var31 = var17;
            var17 = copyDataProperties(var32, var31);
            var5 = var9;
case 101:
            var17 = _closure1_slot1;
            var18 = _closure1_slot3;
            var9 = 59;
            var19 = var18[var9];
            var20 = var17.bind(var1)(var19);
            var19 = var20.getOrCreate;
            var20 = var19.bind(var20)(var14);
            var19 = var20.loadStart;
            var20 = var19.bind(var20)(var5);
            var9 = var18[var9];
            var19 = var17.bind(var1)(var9);
            var9 = var19.commit;
            var9 = var9.bind(var19)(var20);
            var9 = 49;
            var9 = var18[var9];
            var18 = var17.bind(var1)(var9);
            var17 = var18.dispatch;
            var9 = {};
            var19 = 'LOAD_MESSAGES';
            var9['type'] = var19;
            var9 = var17.bind(var18)(var9);
            var17 = var16 == var5;
            var9 = undefined;
            if(var17) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var9 = var5.messageId;
case 103:
            _closure2_slot11 = var9;
            var5 = _closure1_slot54;
            var17 = var5.prototype;
            var17 = Object.create(var17, {constructor: {value: var5}});
            var33 = var17;
            var5 = new var33[var5](var32);
            var5 = var5 instanceof Object ? var5 : var17;
            _closure2_slot12 = var5;
            if(var4) { _fun0011_ip = 105; continue _fun0011 }
case 106:
            var4 = var13.fetchLocalMessages;
            if(!(var16 != var15)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var3 = var15;
case 107:
            var33 = var13;
            var32 = var14;
            var31 = var3;
            var30 = var12;
            var29 = var11;
            var28 = var10;
            var27 = var5;
            var3 = var33[var4](var32, var31, var30, var29, var28, var27, var26);
case 105:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 54;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            var13 = _closure1_slot30;
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
                var5 = _closure1_slot3;
                var2 = 57;
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
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var9 = var1.body;
                        var1 = _closure2_slot1;
                        var4 = null;
                        var12 = var4 != var1;
                        var1 = _closure2_slot2;
                        var11 = var4 != var1;
                        var1 = _closure2_slot11;
                        var3 = var4 != var1;
                        if(var3) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                        var6 = var9.length;
                        var1 = _closure2_slot3;
                        var1 = var6 === var1;
                        if(!var1) { _fun0012_ip = 54; continue _fun0012 }
case 111:
                        var6 = var12;
                        if(var6) { _fun0012_ip = 51; continue _fun0012 }
case 112:
                        var7 = _closure2_slot1;
                        var7 = var4 == var7;
                        if(!var7) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                        var8 = _closure2_slot2;
                        var7 = var4 == var8;
case 113:
                        var6 = var7;
case 51:
                        var1 = var6;
case 54:
                        var3 = var1;
case 109:
                        var1 = _closure2_slot11;
                        var6 = var4 != var1;
                        if(var6) { _fun0012_ip = 77; continue _fun0012 }
case 115:
                        var1 = var11;
                        if(!var1) { _fun0012_ip = 87; continue _fun0012 }
case 116:
                        var8 = var9.length;
                        var7 = _closure2_slot3;
                        var1 = var8 === var7;
case 87:
                        var6 = var1;
case 77:
                        var1 = _closure2_slot11;
                        var10 = var3;
                        var8 = var6;
                        if(!(var4 != var1)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                        var1 = global;
                        var14 = var1.Math;
                        var13 = var14.floor;
                        var15 = _closure2_slot3;
                        var1 = 2;
                        var7 = var15 / var1;
                        var7 = var13.bind(var14)(var7);
                        var13 = _closure2_slot11;
                        var16 = new Array(1);
                        var16[0] = var13;
                        var14 = var9.map;
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var25 = var14.bind(var9)(var13);
                        var14 = 1;
                        var26 = var16;
                        var24 = var14;
                        var13 = arraySpread(var26, var25, var24);
                        var13 = var16.filter;
                        var5 = function(arg1, arg2, arg3) {
                            var3 = arg3;
                            var2 = var3.indexOf;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = arg2;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var17 = var13.bind(var16)(var5);
                        var16 = var17.sort;
                        var19 = _closure1_slot1;
                        var18 = _closure1_slot3;
                        var13 = 60;
                        var18 = var18[var13];
                        var13 = undefined;
                        var13 = var19.bind(var13)(var18);
                        var13 = var13.compare;
                        var17 = var16.bind(var17)(var13);
                        var16 = var17.indexOf;
                        var13 = _closure2_slot11;
                        var13 = var16.bind(var17)(var13);
                        var1 = var15 % var1;
                        var1 = var7 + var1;
                        var1 = var1 - var14;
                        if(!(var13 < var1)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                        var3 = false;
case 119:
                        var1 = var9.length;
                        var1 = var1 - var13;
                        if(!(var1 < var7)) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                        var6 = false;
case 121:
                        var10 = var3;
                        var8 = var6;
                        if(!var6) { _fun0012_ip = 117; continue _fun0012 }
case 123:
                        var7 = var9.length;
                        var1 = 0;
                        var10 = var3;
                        var8 = var6;
                        if(!(var7 > var1)) { _fun0012_ip = 117; continue _fun0012 }
case 124:
                        var13 = _closure1_slot25;
                        var7 = var13.lastMessageId;
                        var5 = _closure2_slot0;
                        var5 = var7.bind(var13)(var5);
                        var1 = var9[var1];
                        var1 = var1.id;
                        var10 = var3;
                        var8 = var6;
                        if(!(var1 === var5)) { _fun0012_ip = 117; continue _fun0012 }
case 125:
                        var8 = false;
                        var10 = var3;
case 117:
                        var6 = _closure1_slot51;
                        var5 = var6.log;
                        var26 = var9.length;
                        var13 = _closure2_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var16 = var1.concat;
                        var27 = 'Fetched ';
                        var25 = ' messages for ';
                        var23 = ' isBefore:';
                        var21 = ' isAfter:';
                        var24 = var13;
                        var22 = var12;
                        var20 = var11;
                        var1 = var27[var16](var26, var25, var24, var23, var22, var21, var20, var19);
                        var1 = var5.bind(var6)(var1);
                        var5 = _closure2_slot12;
                        var1 = var5.markComplete;
                        var1 = var1.bind(var5)();
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 49;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var14 = 'LOAD_MESSAGES_SUCCESS';
                        var5['type'] = var14;
                        var5['channelId'] = var13;
                        var5['messages'] = var9;
                        var5['isBefore'] = var12;
                        var5['isAfter'] = var11;
                        var5['hasMoreBefore'] = var10;
                        var5['hasMoreAfter'] = var8;
                        var8 = _closure2_slot3;
                        var5['limit'] = var8;
                        var8 = _closure2_slot4;
                        var5['jump'] = var8;
                        var8 = _closure2_slot6;
                        var5['forICYMI'] = var8;
                        var8 = _closure2_slot9;
                        var8 = !var8;
                        if(var8) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                        var11 = _closure1_slot8;
                        var10 = var11.lastTimeConnectedChanged;
                        var11 = var10.bind(var11)();
                        var10 = _closure2_slot10;
                        var8 = var11 >= var10;
case 126:
                        var5['isStale'] = var8;
                        var8 = _closure2_slot5;
                        var5['truncate'] = var8;
                        var8 = _closure2_slot7;
                        var5['avoidInitialScroll'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 58;
                        var3 = var6[var3];
                        var8 = var5.bind(var1)(var3);
                        var7 = var8.recordChannelFetchedNetwork;
                        var6 = _closure2_slot0;
                        var3 = _closure2_slot8;
                        if(!(var4 == var3)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
                        var5 = _closure2_slot10;
                        _fun0012_ip = 130; continue _fun0012;
case 128:
                        var5 = _closure2_slot8;
case 130:
                        var24 = _closure2_slot1;
                        var23 = _closure2_slot2;
                        var22 = _closure2_slot3;
                        var27 = var8;
                        var26 = var6;
                        var25 = var5;
                        var21 = var9;
                        var2 = var27[var7](var26, var25, var24, var23, var22, var21, var20);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
            };
            var2 = function() {
                var5 = _closure1_slot51;
                var3 = var5.log;
                var4 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'Failed to fetch messages for ';
                var2 = var6.bind(var2)(var4);
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 49;
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
case 92:
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var2['fetchMessages'] = var8;
    var8 = function fetchLocalMessages(arg1, arg2, arg3, arg4, arg5, arg6) {
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
        var2 = arg6;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 105; continue _fun0013 }
case 59:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var7 = _closure1_slot19;
                    var5 = var7.getBasicChannel;
                    var11 = _closure2_slot0;
                    var9 = var5.bind(var7)(var11);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 59;
                    var5 = var10[var5];
                    var7 = var8.bind(var3)(var5);
                    var5 = var7.getOrCreate;
                    var7 = var5.bind(var7)(var11);
                    var5 = 61;
                    var5 = var10[var5];
                    var8 = var8.bind(var3)(var5);
                    var5 = var8.database;
                    var8 = var5.bind(var8)();
                    _closure4_slot0 = var8;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0013_ip = 87; continue _fun0013 }
case 131:
                    if(!(var5 != var9)) { _fun0013_ip = 87; continue _fun0013 }
case 132:
                    var8 = _closure2_slot2;
                    if(!(var5 == var8)) { _fun0013_ip = 87; continue _fun0013 }
case 84:
                    var8 = _closure2_slot3;
                    if(!(var5 != var8)) { _fun0013_ip = 133; continue _fun0013 }
case 87:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 57;
                    var8 = var11[var8];
                    var12 = var10.bind(var3)(var8);
                    var11 = var12.addLocalMessages;
                    var10 = _closure2_slot0;
                    var8 = -1;
                    var8 = var11.bind(var12)(var10, var8);
                    _fun0013_ip = 31; continue _fun0013;
case 133:
                    var8 = var7.ready;
                    if(!var8) { _fun0013_ip = 134; continue _fun0013 }
case 135:
                    var7 = var7.cached;
                    if(var7) { _fun0013_ip = 134; continue _fun0013 }
case 82:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 57;
                    var7 = var10[var7];
                    var11 = var8.bind(var3)(var7);
                    var10 = var11.addLocalMessages;
                    var8 = _closure2_slot0;
                    var7 = -2;
                    var7 = var10.bind(var11)(var8, var7);
                    _fun0013_ip = 31; continue _fun0013;
case 134:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 62;
                    var7 = var10[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.tryLoadAsync;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 63;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.load;
                        var3 = _closure4_slot0;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot4;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=278);
case 136:
                    return var2;
case 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0013_ip = 138; continue _fun0013 }
case 139:
                    if(!(var5 == var2)) { _fun0013_ip = 140; continue _fun0013 }
case 141:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 57;
                    var5 = var8[var5];
                    var10 = var7.bind(var3)(var5);
                    var8 = var10.addLocalMessages;
                    var7 = _closure2_slot0;
                    var5 = -3;
                    var5 = var8.bind(var10)(var7, var5);
                    _fun0013_ip = 31; continue _fun0013;
case 140:
                    var10 = _closure1_slot51;
                    var8 = var10.log;
                    var5 = var2.messages;
                    var23 = var5.length;
                    var11 = _closure2_slot0;
                    var5 = _closure2_slot5;
                    var19 = var5.completed;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var15 = var7.concat;
                    var24 = 'fetched ';
                    var22 = ' messages from local database (channel_id: ';
                    var20 = ', remote_fetch_completed: ';
                    var18 = ')';
                    var21 = var11;
                    var7 = var24[var15](var23, var22, var21, var20, var19, var18, var17);
                    var7 = var8.bind(var10)(var7);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 57;
                    var7 = var10[var7];
                    var10 = var8.bind(var3)(var7);
                    var8 = var10.addLocalMessages;
                    var7 = var2.messages;
                    var7 = var7.length;
                    var7 = var8.bind(var10)(var11, var7);
                    var5 = var5.completed;
                    if(var5) { _fun0013_ip = 31; continue _fun0013 }
case 142:
                    var5 = var2.messages;
                    var7 = var5.length;
                    var5 = 0;
                    if(!(var7 > var5)) { _fun0013_ip = 31; continue _fun0013 }
case 102:
                    var5 = var2.messages;
                    var7 = var5.length;
                    var5 = _closure2_slot4;
                    var7 = var7 >= var5;
                    if(!var7) { _fun0013_ip = 143; continue _fun0013 }
case 144:
                    var8 = var2.connectionId;
                    var10 = _closure1_slot8;
                    var5 = var10.lastTimeConnectedChanged;
                    var5 = var5.bind(var10)();
                    var7 = var8 === var5;
case 143:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var8 = 58;
                    var8 = var6[var8];
                    var15 = var5.bind(var3)(var8);
                    var14 = var15.recordChannelFetchedLocal;
                    var8 = _closure2_slot0;
                    var22 = _closure2_slot1;
                    var21 = _closure2_slot2;
                    var20 = _closure2_slot3;
                    var19 = _closure2_slot4;
                    var18 = var2.messages;
                    var24 = var15;
                    var23 = var8;
                    var4 = var24[var14](var23, var22, var21, var20, var19, var18, var17);
                    var4 = 49;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'LOCAL_MESSAGES_LOADED';
                    var4['type'] = var10;
                    var9 = var9.guild_id;
                    var4['guildId'] = var9;
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
case 31:
                    return var3;
case 138:
                    return var2;
case 105:
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
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 145; continue _fun0014 }
case 59:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var6 = _closure1_slot19;
                    var5 = var6.getBasicChannel;
                    var3 = _closure2_slot0;
                    var11 = var5.bind(var6)(var3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 61;
                    var3 = var6[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.database;
                    var3 = var3.bind(var5)();
                    _closure4_slot0 = var3;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0014_ip = 146; continue _fun0014 }
case 51:
                    if(!(var6 != var11)) { _fun0014_ip = 146; continue _fun0014 }
case 78:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var9 = 59;
                    var3 = var3[var9];
                    var8 = var5.bind(var2)(var3);
                    var5 = var8.getOrCreate;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var8)(var3);
                    var3 = var3.hasMoreAfter;
                    if(var3) { _fun0014_ip = 146; continue _fun0014 }
case 147:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 62;
                    var3 = var8[var3];
                    var8 = var5.bind(var2)(var3);
                    var5 = var8.tryLoadAsync;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 63;
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
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=184);
case 135:
                    return var3;
case 148:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 102; continue _fun0014 }
case 149:
                    if(!(var6 != var3)) { _fun0014_ip = 146; continue _fun0014 }
case 150:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.getOrCreate;
                    var5 = _closure2_slot0;
                    var8 = var8.bind(var9)(var5);
                    var5 = var8.last;
                    var8 = var5.bind(var8)();
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0014_ip = 151; continue _fun0014 }
case 152:
                    var5 = var8.id;
case 151:
                    _closure4_slot1 = var5;
                    if(!(var6 != var5)) { _fun0014_ip = 139; continue _fun0014 }
case 153:
                    var6 = var3.messages;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 60;
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
                    var8 = var5.bind(var6)(var4);
                    _fun0014_ip = 154; continue _fun0014;
case 139:
                    var8 = var3.messages;
case 154:
                    var6 = _closure1_slot51;
                    var5 = var6.log;
                    var4 = var3.messages;
                    var19 = var4.length;
                    var17 = var8.length;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var13 = var4.concat;
                    var20 = 'Fetched ';
                    var18 = ' messages from the cache after foregrounding. ';
                    var16 = ' are new';
                    var4 = var20[var13](var19, var18, var17, var16, var15);
                    var4 = var5.bind(var6)(var4);
                    var5 = var8.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0014_ip = 146; continue _fun0014 }
case 155:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 49;
                    var4 = var9[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var12 = 'LOCAL_MESSAGES_LOADED';
                    var4['type'] = var12;
                    var11 = var11.guild_id;
                    var4['guildId'] = var11;
                    var10 = _closure2_slot0;
                    var4['channelId'] = var10;
                    var10 = var3.users;
                    var4['users'] = var10;
                    var10 = var3.members;
                    var4['members'] = var10;
                    var4['messages'] = var8;
                    var8 = true;
                    var4['stale'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 64;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                    var7 = var7.bind(var8)();
                    var4['isForegroundCacheLoad'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0014_ip = 146; continue _fun0014;
case 102:
                    return var3;
case 146:
                    return var2;
case 145:
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var13 = var1.before;
            var15 = var1.after;
            var5 = var1.limit;
            var6 = var1.jump;
            var10 = var1.focus;
            var4 = var1.truncate;
            var3 = _closure1_slot23;
            var2 = var3.getMessages;
            var8 = var2.bind(var3)(var7);
            var2 = var8.cached;
            if(var2) { _fun0015_ip = 156; continue _fun0015 }
case 157:
            var2 = var8.ready;
            if(!var2) { _fun0015_ip = 156; continue _fun0015 }
case 158:
            var14 = null;
            var9 = var14 == var6;
            var3 = undefined;
            var2 = undefined;
            if(var9) { _fun0015_ip = 159; continue _fun0015 }
case 160:
            var2 = var6.messageId;
case 159:
            if(!(var14 == var2)) { _fun0015_ip = 161; continue _fun0015 }
case 132:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0015_ip = 162; continue _fun0015 }
case 163:
            var2 = var10.messageId;
case 162:
            if(!(var14 == var2)) { _fun0015_ip = 161; continue _fun0015 }
case 164:
            if(!(var14 != var13)) { _fun0015_ip = 165; continue _fun0015 }
case 166:
            var2 = var8.hasBeforeCached;
            var2 = var2.bind(var8)(var13);
            if(var2) { _fun0015_ip = 167; continue _fun0015 }
case 165:
            var9 = var14 == var15;
            if(var9) { _fun0015_ip = 168; continue _fun0015 }
case 169:
            var2 = var8.hasAfterCached;
            var2 = var2.bind(var8)(var15);
            var9 = !var2;
case 168:
            var2 = !var9;
            if(var9) { _fun0015_ip = 170; continue _fun0015 }
case 171:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 49;
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
case 170:
            _fun0015_ip = 119; continue _fun0015;
case 167:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 49;
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
case 119:
            return var2;
case 161:
            var9 = var14 == var6;
            var2 = undefined;
            if(var9) { _fun0015_ip = 172; continue _fun0015 }
case 173:
            var2 = var6.messageId;
case 172:
            if(!(var14 != var2)) { _fun0015_ip = 174; continue _fun0015 }
case 175:
            var11 = var8.has;
            var9 = var6.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0015_ip = 176; continue _fun0015 }
case 174:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0015_ip = 177; continue _fun0015 }
case 178:
            var2 = var10.messageId;
case 177:
            var12 = var6;
            if(!(var14 != var2)) { _fun0015_ip = 179; continue _fun0015 }
case 180:
            var11 = var8.has;
            var9 = var10.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0015_ip = 181; continue _fun0015 }
case 182:
            var2 = {};
            var19 = var2;
            var18 = var10;
            var9 = copyDataProperties(var19, var18);
            var12 = var2;
case 179:
            var9 = var14 == var12;
            var2 = undefined;
            if(var9) { _fun0015_ip = 183; continue _fun0015 }
case 184:
            var2 = var12.messageId;
case 183:
            var2 = var14 != var2;
            var11 = 0;
            if(!var2) { _fun0015_ip = 185; continue _fun0015 }
case 186:
            var9 = _closure1_slot1;
            var13 = _closure1_slot3;
            var2 = 60;
            var2 = var13[var2];
            var13 = var9.bind(var3)(var2);
            var9 = var13.extractTimestamp;
            var15 = var14 == var12;
            var2 = undefined;
            if(var15) { _fun0015_ip = 187; continue _fun0015 }
case 188:
            var2 = var12.messageId;
case 187:
            var11 = var9.bind(var13)(var2);
case 185:
            var2 = var8.first;
            var13 = var2.bind(var8)();
            var2 = var8.last;
            var9 = var2.bind(var8)();
            var2 = var8.hasMoreBefore;
            var2 = !var2;
            if(!var2) { _fun0015_ip = 189; continue _fun0015 }
case 190:
            var2 = var14 != var13;
case 189:
            if(!var2) { _fun0015_ip = 191; continue _fun0015 }
case 192:
            var16 = _closure1_slot1;
            var17 = _closure1_slot3;
            var15 = 60;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var13.id;
            var15 = var16.bind(var17)(var15);
            var2 = var15 >= var11;
case 191:
            if(var2) { _fun0015_ip = 193; continue _fun0015 }
case 194:
            var8 = var8.hasMoreAfter;
            var8 = !var8;
            if(!var8) { _fun0015_ip = 195; continue _fun0015 }
case 196:
            var8 = var14 != var9;
case 195:
            if(!var8) { _fun0015_ip = 104; continue _fun0015 }
case 197:
            var16 = _closure1_slot1;
            var17 = _closure1_slot3;
            var15 = 60;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var9.id;
            var15 = var16.bind(var17)(var15);
            var8 = var15 <= var11;
case 104:
            var2 = var8;
case 193:
            if(var2) { _fun0015_ip = 198; continue _fun0015 }
case 199:
            var8 = var14 != var13;
            if(!var8) { _fun0015_ip = 200; continue _fun0015 }
case 201:
            var8 = var14 != var9;
case 200:
            if(!var8) { _fun0015_ip = 202; continue _fun0015 }
case 203:
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var14 = 60;
            var14 = var16[var14];
            var15 = var15.bind(var3)(var14);
            var14 = var15.extractTimestamp;
            var13 = var13.id;
            var13 = var14.bind(var15)(var13);
            var8 = var13 < var11;
case 202:
            if(!var8) { _fun0015_ip = 204; continue _fun0015 }
case 205:
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var13 = 60;
            var13 = var15[var13];
            var14 = var14.bind(var3)(var13);
            var13 = var14.extractTimestamp;
            var9 = var9.id;
            var9 = var13.bind(var14)(var9);
            var8 = var9 > var11;
case 204:
            var2 = var8;
case 198:
            if(!var2) { _fun0015_ip = 206; continue _fun0015 }
case 207:
            var9 = _closure1_slot1;
            var11 = _closure1_slot3;
            var8 = 49;
            var8 = var11[var8];
            var11 = var9.bind(var3)(var8);
            var9 = var11.dispatch;
            var8 = {};
            var13 = 'LOAD_MESSAGES_SUCCESS_CACHED';
            var8['type'] = var13;
            var8['channelId'] = var7;
            var8['jump'] = var12;
            var12 = _closure1_slot36;
            var8['limit'] = var12;
            var8 = var9.bind(var11)(var8);
            var2 = true;
case 206:
            return var2;
case 181:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var2 = 49;
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
case 176:
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 49;
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
case 156:
            var1 = false;
            return var1;
        }
    };
    var2['_tryFetchMessagesCached'] = var8;
    var8 = function sendMessage(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0016_ip = 73; continue _fun0016 }
case 74:
            var3 = true;
case 73:
            var _closure2_slot2 = var3;
            var3 = arguments[3];
            var _closure2_slot3 = var3;
            var3 = _closure1_slot5;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 208; continue _fun0017 }
case 59:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var2 = _closure2_slot1;
                        var2 = var2.reaction;
                        if(var2) { _fun0017_ip = 209; continue _fun0017 }
case 210:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 65;
                        var2 = var6[var2];
                        var5 = var5.bind(var7)(var2);
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address=73);
case 211:
                        return var2;
case 157:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0017_ip = 212; continue _fun0017 }
case 213:
                        var5 = null;
                        if(!(var5 == var2)) { _fun0017_ip = 214; continue _fun0017 }
case 215:
                        var6 = _closure2_slot3;
                        var12 = var6.nonce;
                        if(!(var5 == var12)) { _fun0017_ip = 166; continue _fun0017 }
case 216:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 52;
                        var5 = var9[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.createNonce;
                        var12 = var5.bind(var6)();
case 166:
                        var5 = {};
                        var18 = _closure2_slot3;
                        var19 = var5;
                        var6 = copyDataProperties(var19, var18);
                        var6 = 'nonce';
                        var5[5] = var12;
                        _closure2_slot3 = var5;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var5 = 66;
                        var5 = var9[var5];
                        var9 = var6.bind(var7)(var5);
                        var6 = var9.backgroundify;
                        var5 = function _trySend() {
                            var5 = _closure1_slot56;
                            var4 = var5._sendMessage;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var6 = var6.bind(var9)(var5, var7);
                        _closure4_slot0 = var6;
                        var11 = _closure1_slot11;
                        var9 = var11.recordMessageSendAttempt;
                        var10 = _closure2_slot0;
                        var5 = _closure2_slot3;
                        var5 = var9.bind(var11)(var10, var12, var5);
                        var9 = _closure1_slot23;
                        var5 = var9.isReady;
                        var5 = var5.bind(var9)(var10);
                        if(var5) { _fun0017_ip = 217; continue _fun0017 }
case 218:
                        var5 = _closure2_slot2;
                        if(!var5) { _fun0017_ip = 141; continue _fun0017 }
case 219:
                        var9 = _closure2_slot0;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 56;
                        var5 = var11[var5];
                        var5 = var10.bind(var7)(var5);
                        var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(var9 === var5)) { _fun0017_ip = 18; continue _fun0017 }
case 141:
                        var5 = var6.bind(var7)();
                        _fun0017_ip = 220; continue _fun0017;
case 18:
                        var12 = _closure1_slot52;
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
                            var4 = _closure1_slot23;
                            var3 = var4.whenReady;
                            var2 = _closure2_slot0;
                            var1 = function() {
                                var3 = _closure1_slot52;
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
case 220:
                        _fun0017_ip = 221; continue _fun0017;
case 217:
                        var5 = var6.bind(var7)();
case 221:
                        return var5;
case 214:
                        var7 = _closure1_slot56;
                        var6 = var7.sendMessage;
                        var18 = _closure2_slot1;
                        var17 = _closure2_slot2;
                        var16 = _closure2_slot3;
                        var20 = var7;
                        var19 = var2;
                        var3 = var20[var6](var19, var18, var17, var16, var15);
                        return var3;
case 212:
                        return var2;
case 209:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
case 208:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 != var2)) { _fun0018_ip = 222; continue _fun0018 }
case 59:
            var1 = {};
            var4 = {};
            var6 = var2.channel;
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            var7 = var3 != var6;
            var5 = undefined;
            if(!var7) { _fun0018_ip = 223; continue _fun0018 }
case 64:
            var5 = var6;
case 223:
            var4['guild_id'] = var5;
            var5 = var2.channel;
            var5 = var5.id;
            var4['channel_id'] = var5;
            var5 = var2.message;
            var5 = var5.id;
            var4['message_id'] = var5;
            var1['messageReference'] = var4;
            var4 = var2.shouldMention;
            var3 = undefined;
            if(var4) { _fun0018_ip = 224; continue _fun0018 }
case 225:
            var4 = {};
            var5 = global;
            var7 = var5.Object;
            var6 = var7.values;
            var5 = _closure1_slot38;
            var5 = var6.bind(var7)(var5);
            var4['parse'] = var5;
            var5 = false;
            var4['replied_user'] = var5;
            var3 = var4;
case 224:
            var1['allowedMentions'] = var3;
            var2 = var2.mediaMention;
            var1['mediaMention'] = var2;
            _fun0018_ip = 226; continue _fun0018;
case 222:
            var1 = {};
case 226:
            return var1;
        }
    };
    var2['getSendMessageOptionsForReply'] = var8;
    var8 = function getSendMessageOptionsForStickers(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isGif;
            var2 = var2.stickers;
            var3 = null;
            if(!(var3 != var2)) { _fun0019_ip = 110; continue _fun0019 }
case 227:
            var4 = var2.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0019_ip = 110; continue _fun0019 }
case 68:
            if(var1) { _fun0019_ip = 110; continue _fun0019 }
case 210:
            var1 = {};
            var1['stickerIds'] = var2;
            _fun0019_ip = 76; continue _fun0019;
case 110:
            var1 = {};
case 76:
            return var1;
        }
    };
    var2['getSendMessageOptionsForStickers'] = var8;
    var8 = function getSendMessageOptionsForScheduledMessage(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.scheduledTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0020_ip = 228; continue _fun0020 }
case 229:
            var1 = {};
            var1['scheduledTimestamp'] = var2;
            _fun0020_ip = 230; continue _fun0020;
case 228:
            var1 = {};
case 230:
            return var1;
        }
    };
    var2['getSendMessageOptionsForScheduledMessage'] = var8;
    var8 = function getSendMessageOptionsForAlsoForwardToChannel(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.alsoForwardToChannelId;
        var1['alsoForwardToChannelId'] = var2;
        return var1;
    };
    var2['getSendMessageOptionsForAlsoForwardToChannel'] = var8;
    var8 = function getSendMessageOptions(arg1) {
        var5 = arg1;
        var1 = {};
        var6 = _closure1_slot56;
        var4 = var6.getSendMessageOptionsForReply;
        var3 = var5.pendingReply;
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot56;
        var4 = var6.getSendMessageOptionsForStickers;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot56;
        var4 = var6.getSendMessageOptionsForScheduledMessage;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var4 = _closure1_slot56;
        var3 = var4.getSendMessageOptionsForAlsoForwardToChannel;
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
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var7 = arg5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 67;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = arg2;
            var6 = var3.bind(var4)(var1);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0021_ip = 157; continue _fun0021 }
case 231:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '\n';
            var1 = var5.bind(var4)(var7, var3, var6);
case 157:
            var5 = _closure1_slot56;
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
        var5 = _closure1_slot56;
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arguments[2];
            var2 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0022_ip = 55; continue _fun0022 }
case 59:
            var3 = '';
case 55:
            if(!(var2 === var1)) { _fun0022_ip = 232; continue _fun0022 }
case 60:
            var2 = false;
case 232:
            var4 = 'string';
            var1 = typeof var3;
            if(!(var4 !== var1)) { _fun0022_ip = 62; continue _fun0022 }
case 233:
            var1 = {};
            var9 = var1;
            var8 = var3;
            var4 = copyDataProperties(var9, var8);
            var4 = var3.tts;
            var6 = null;
            var5 = var2;
            if(!(var6 != var4)) { _fun0022_ip = 234; continue _fun0022 }
case 235:
            var5 = var4;
case 234:
            var4 = 'tts';
            var1[3] = var5;
            var5 = var1;
            _fun0022_ip = 236; continue _fun0022;
case 62:
            var1 = {};
            var1['content'] = var3;
            var3 = new Array(0);
            var1['invalidEmojis'] = var3;
            var3 = new Array(0);
            var1['validNonShortcutEmojis'] = var3;
            var1['tts'] = var2;
            var5 = var1;
case 236:
            var4 = _closure1_slot56;
            var3 = var4._sendMessage;
            var2 = {};
            var8 = arguments[3];
            var9 = var2;
            var1 = copyDataProperties(var9, var8);
            var6 = arg2;
            var1 = 'stickerIds';
            var2[0] = var6;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var5, var2);
            return var1;
        }
    };
    var2['sendStickers'] = var8;
    var8 = function sendGreetMessage(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var10;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0023_ip = 73; continue _fun0023 }
case 74:
            var2 = {};
case 73:
            var7 = var2.messageReference;
            var8 = var2.allowedMentions;
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 54;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var9 = _closure1_slot30;
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
            var6 = _closure1_slot49;
            var6 = var6.GREET;
            var5['location'] = var6;
            var2['context'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 68;
                var5 = var6[var3];
                var3 = undefined;
                var10 = var4.bind(var3)(var5);
                var8 = var10.donateSentMessage;
                var5 = var1.body;
                var7 = var5.content;
                var9 = _closure2_slot0;
                var7 = var8.bind(var10)(var7, var9);
                var8 = _closure1_slot56;
                var7 = var8.receiveMessage;
                var2 = var1.body;
                var2 = var7.bind(var8)(var9, var2);
                var2 = 49;
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot51;
                    var4 = var5.log;
                    var3 = 'Failed to send greeting';
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0024_ip = 237; continue _fun0024 }
case 3:
                    var6 = _closure1_slot56;
                    var5 = var6.sendClydeError;
                    var4 = _closure2_slot0;
                    var3 = var1.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
case 237:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 49;
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
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0025_ip = 238; continue _fun0025 }
case 239:
            var6 = {};
case 238:
            var5 = _closure1_slot56;
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
            var2[5] = var7;
            var1 = _closure1_slot49;
            var6 = var1.POLL_CREATION;
            var1 = 'location';
            var2[0] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendPollMessage'] = var8;
    var8 = function validateMessage(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0026_ip = 164; continue _fun0026 }
case 228:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 69;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.canUseAnimatedEmojis;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0026_ip = 164; continue _fun0026 }
case 240:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 46;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.V5/GgC;
            var3 = var2.bind(var3)(var1);
            var2 = 'INVALID_ANIMATED_EMOJI_BODY';
            _fun0026_ip = 241; continue _fun0026;
case 164:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 46;
            var4 = var8[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Q87rI/;
            var3 = var4.bind(var5)(var1);
            var2 = 'INVALID_EXTERNAL_EMOJI_BODY';
case 241:
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
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0027_ip = 242; continue _fun0027 }
case 59:
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
                    var _closure4_slot8 = var11;
                    var10 = undefined;
                    var15 = undefined;
                    var _closure4_slot9 = var11;
                    var _closure4_slot10 = var11;
                    var23 = undefined;
                    var _closure4_slot11 = var11;
                    var _closure4_slot12 = var11;
                    var20 = undefined;
                    var _closure4_slot13 = var11;
                    var14 = undefined;
                    var _closure4_slot14 = var11;
                    var17 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var4 = 65;
                    var4 = var13[var4];
                    var5 = var5.bind(var11)(var4);
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var11)(var4);
                    var13 = null;
                    if(!(var13 == var4)) { _fun0027_ip = 243; continue _fun0027 }
case 88:
                    var5 = _closure2_slot1;
                    var33 = var5.content;
                    _closure4_slot0 = var33;
                    var39 = var5.invalidEmojis;
                    var16 = var5.validNonShortcutEmojis;
                    _closure4_slot1 = var16;
                    var5 = var5.tts;
                    var36 = var11 !== var5;
                    if(!var36) { _fun0027_ip = 244; continue _fun0027 }
case 148:
                    var36 = var5;
case 244:
                    var16 = _closure2_slot2;
                    var25 = var16.activityAction;
                    var32 = var16.location;
                    _closure4_slot2 = var32;
                    var5 = var16.inviteAnalyticsMetadata;
                    _closure4_slot3 = var5;
                    var26 = var16.stickerIds;
                    _closure4_slot4 = var26;
                    var35 = var16.messageReference;
                    _closure4_slot5 = var35;
                    var34 = var16.allowedMentions;
                    var28 = var16.poll;
                    _closure4_slot6 = var28;
                    var27 = var16.sharedCustomTheme;
                    var24 = var16.contentInventoryEntry;
                    _closure4_slot7 = var24;
                    var18 = var16.attachments;
                    var5 = var16.attachmentsToUpload;
                    var22 = var5;
                    _closure4_slot8 = var5;
                    var10 = var16.onAttachmentUploadError;
                    var29 = var16.announcementSendOptions;
                    var5 = var16.withCheckpoint;
                    var19 = var16.mediaMention;
                    var30 = var16.flags;
                    var31 = var13 != var30;
                    var16 = 0;
                    var41 = 0;
                    if(!var31) { _fun0027_ip = 245; continue _fun0027 }
case 246:
                    var41 = var30;
case 245:
                    var31 = _closure1_slot1;
                    var37 = _closure1_slot3;
                    var30 = 70;
                    var30 = var37[var30];
                    var30 = var31.bind(var11)(var30);
                    var37 = var30.bind(var11)(var33);
                    var31 = _closure1_slot4;
                    var30 = 2;
                    var37 = var31.bind(var11)(var37, var30);
                    var30 = var37[var16];
                    var31 = 1;
                    var31 = var37[var31];
                    var37 = var33;
                    var40 = var41;
                    if(!var30) { _fun0027_ip = 247; continue _fun0027 }
case 248:
                    _closure4_slot0 = var31;
                    var33 = _closure1_slot0;
                    var38 = _closure1_slot3;
                    var30 = 71;
                    var30 = var38[var30];
                    var38 = var33.bind(var11)(var30);
                    var33 = var38.addFlag;
                    var30 = _closure1_slot35;
                    var30 = var30.SUPPRESS_NOTIFICATIONS;
                    var40 = var33.bind(var38)(var41, var30);
                    var37 = var31;
case 247:
                    var33 = _closure1_slot19;
                    var31 = var33.getChannel;
                    var30 = _closure2_slot0;
                    var41 = var31.bind(var33)(var30);
                    var33 = _closure1_slot21;
                    var31 = var33.getGuild;
                    var38 = var13 == var41;
                    var30 = undefined;
                    if(var38) { _fun0027_ip = 97; continue _fun0027 }
case 185:
                    var30 = var41.guild_id;
case 97:
                    var38 = var31.bind(var33)(var30);
                    var31 = _closure1_slot0;
                    var33 = _closure1_slot3;
                    var30 = 72;
                    var30 = var33[var30];
                    var33 = var31.bind(var11)(var30);
                    var31 = var33.canSendGuildOfficialMessages;
                    var30 = '_sendMessage';
                    var30 = var31.bind(var33)(var38, var41, var30);
                    var33 = var40;
                    if(!var30) { _fun0027_ip = 249; continue _fun0027 }
case 250:
                    var31 = _closure1_slot0;
                    var38 = _closure1_slot3;
                    var30 = 71;
                    var30 = var38[var30];
                    var38 = var31.bind(var11)(var30);
                    var31 = var38.addFlag;
                    var30 = _closure1_slot35;
                    var30 = var30.IS_GUILD_OFFICIAL;
                    var33 = var31.bind(var38)(var40, var30);
case 249:
                    var31 = false;
                    var15 = false;
                    var30 = _closure2_slot2;
                    var30 = var30.messageReference;
                    var40 = var13 == var30;
                    var38 = undefined;
                    if(var40) { _fun0027_ip = 251; continue _fun0027 }
case 252:
                    var38 = var30.type;
case 251:
                    var30 = _closure1_slot41;
                    var30 = var30.FORWARD;
                    var30 = var38 === var30;
                    _closure4_slot9 = var30;
                    var38 = '';
                    if(!(var38 === var37)) { _fun0027_ip = 253; continue _fun0027 }
case 254:
                    if(!(var13 == var25)) { _fun0027_ip = 253; continue _fun0027 }
case 255:
                    if(!(var13 == var26)) { _fun0027_ip = 253; continue _fun0027 }
case 256:
                    if(!(var13 == var28)) { _fun0027_ip = 253; continue _fun0027 }
case 203:
                    if(!(var13 == var27)) { _fun0027_ip = 253; continue _fun0027 }
case 257:
                    if(!(var13 == var24)) { _fun0027_ip = 253; continue _fun0027 }
case 258:
                    if(var30) { _fun0027_ip = 253; continue _fun0027 }
case 259:
                    if(!(var13 != var18)) { _fun0027_ip = 260; continue _fun0027 }
case 261:
                    var30 = var18.length;
                    if(!(var16 === var30)) { _fun0027_ip = 253; continue _fun0027 }
case 260:
                    if(var5) { _fun0027_ip = 253; continue _fun0027 }
case 262:
                    var30 = _closure2_slot1;
                    var30 = var30.components;
                    if(!(var13 != var30)) { _fun0027_ip = 263; continue _fun0027 }
case 264:
                    var30 = _closure2_slot1;
                    var30 = var30.components;
                    var30 = var30.length;
                    if(!(var16 === var30)) { _fun0027_ip = 253; continue _fun0027 }
case 263:
                    var30 = var22;
                    if(!(var13 != var30)) { _fun0027_ip = 34; continue _fun0027 }
case 265:
                    var30 = var22;
                    var30 = var30.length;
                    if(!(!(var30 > var16))) { _fun0027_ip = 266; continue _fun0027 }
case 34:
                    var30 = global;
                    var38 = var30.Promise;
                    var30 = var38.resolve;
                    var30 = var30.bind(var38)();
                    return var30;
case 266:
                    var15 = true;
case 253:
                    if(!(var13 == var35)) { _fun0027_ip = 267; continue _fun0027 }
case 268:
                    var30 = _closure1_slot37;
                    var40 = var30.DEFAULT;
                    _fun0027_ip = 269; continue _fun0027;
case 267:
                    var30 = _closure1_slot37;
                    var40 = var30.REPLY;
case 269:
                    _closure4_slot10 = var40;
                    var30 = _closure2_slot2;
                    var30 = var30.nonce;
                    if(!(var13 == var30)) { _fun0027_ip = 270; continue _fun0027 }
case 271:
                    var41 = _closure1_slot0;
                    var42 = _closure1_slot3;
                    var38 = 52;
                    var38 = var42[var38];
                    var41 = var41.bind(var11)(var38);
                    var38 = var41.createNonce;
                    var30 = var38.bind(var41)();
case 270:
                    var23 = var30;
                    _closure4_slot11 = var30;
                    _closure4_slot12 = var30;
                    var38 = _closure1_slot1;
                    var41 = _closure1_slot3;
                    var30 = 50;
                    var30 = var41[var30];
                    var38 = var38.bind(var11)(var30);
                    var30 = {};
                    var41 = _closure2_slot0;
                    var30['channelId'] = var41;
                    var30['content'] = var37;
                    var30['tts'] = var36;
                    var30['type'] = var40;
                    var30['messageReference'] = var35;
                    var30['allowedMentions'] = var34;
                    var40 = undefined;
                    if(!(var16 !== var33)) { _fun0027_ip = 272; continue _fun0027 }
case 273:
                    var40 = var33;
case 272:
                    var30['flags'] = var40;
                    var40 = var23;
                    var30['nonce'] = var40;
                    var41 = _closure1_slot0;
                    var42 = _closure1_slot3;
                    var40 = 73;
                    var40 = var42[var40];
                    var41 = var41.bind(var11)(var40);
                    var40 = var41.createPollServerDataFromCreateRequest;
                    var40 = var40.bind(var41)(var28);
                    var30['poll'] = var40;
                    var30['sharedCustomTheme'] = var27;
                    var30['mediaMention'] = var19;
                    var20 = var38.bind(var11)(var30);
                    var30 = _closure2_slot2;
                    var30 = var30.eagerDispatch;
                    if(!(var31 !== var30)) { _fun0027_ip = 274; continue _fun0027 }
case 275:
                    var31 = _closure1_slot0;
                    var38 = _closure1_slot3;
                    var30 = 74;
                    var30 = var38[var30];
                    var40 = var31.bind(var11)(var30);
                    var38 = var40.updateComboOnMessageSend;
                    var31 = _closure2_slot0;
                    var30 = var20;
                    var30 = var30.id;
                    var30 = var38.bind(var40)(var31, var30);
                    if(!(var13 != var26)) { _fun0027_ip = 276; continue _fun0027 }
case 277:
                    var31 = var20;
                    var38 = var26.map;
                    var30 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.getStickerById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var40 = var38.bind(var26)(var30);
                    var38 = var40.filter;
                    var30 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var30 = var38.bind(var40)(var30);
                    var31['sticker_items'] = var30;
case 276:
                    var42 = _closure1_slot56;
                    var41 = var42.receiveMessage;
                    var46 = _closure2_slot0;
                    var45 = var20;
                    var43 = _closure2_slot2;
                    var44 = true;
                    var47 = var42;
                    var30 = var47[var41](var46, var45, var44, var43, var42);
case 274:
                    var30 = _closure1_slot53;
                    if(var30) { _fun0027_ip = 278; continue _fun0027 }
case 279:
                    if(!(var13 != var39)) { _fun0027_ip = 278; continue _fun0027 }
case 280:
                    var30 = var39.length;
                    if(!(var30 > var16)) { _fun0027_ip = 278; continue _fun0027 }
case 281:
                    var30 = true;
                    _closure1_slot53 = var30;
                    var31 = _closure1_slot27;
                    var30 = var31.getCurrentUser;
                    var38 = var30.bind(var31)();
                    var31 = _closure1_slot56;
                    var30 = var31.validateMessage;
                    var40 = _closure2_slot0;
                    var30 = var30.bind(var31)(var39, var38, var40);
                    var39 = var30.errorMessage;
                    var38 = var30.errorMessageName;
                    var31 = _closure1_slot56;
                    var30 = var31.sendBotMessage;
                    var30 = var30.bind(var31)(var40, var39, var38);
case 278:
                    var30 = {};
                    if(!(var13 == var29)) { _fun0027_ip = 282; continue _fun0027 }
case 46:
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot3;
                    var31 = 75;
                    var31 = var39[var31];
                    var31 = var38.bind(var11)(var31);
                    var31 = var31.MessageDataType;
                    var31 = var31.SEND;
                    _fun0027_ip = 283; continue _fun0027;
case 282:
                    var39 = _closure1_slot0;
                    var40 = _closure1_slot3;
                    var38 = 75;
                    var38 = var40[var38];
                    var38 = var39.bind(var11)(var38);
                    var38 = var38.MessageDataType;
                    var31 = var38.SEND_ANNOUNCEMENT;
case 283:
                    var30['type'] = var31;
                    var31 = {};
                    var38 = _closure2_slot0;
                    var31['channelId'] = var38;
                    var31['content'] = var37;
                    var37 = var23;
                    var31['nonce'] = var37;
                    var31['tts'] = var36;
                    var31['message_reference'] = var35;
                    var31['allowed_mentions'] = var34;
                    var31['flags'] = var33;
                    var31['analyticsLocation'] = var32;
                    var30['message'] = var31;
                    var14 = var30;
                    _closure4_slot14 = var30;
                    var30 = _closure2_slot1;
                    var30 = var30.components;
                    if(!(var13 != var30)) { _fun0027_ip = 284; continue _fun0027 }
case 285:
                    var30 = var14;
                    var31 = var30.message;
                    var30 = _closure2_slot1;
                    var30 = var30.components;
                    var31['components'] = var30;
case 284:
                    if(!(var13 != var29)) { _fun0027_ip = 286; continue _fun0027 }
case 287:
                    var30 = var14;
                    var32 = var30.message;
                    var31 = var29.createThread;
                    var32['create_thread'] = var31;
                    var32 = var30.message;
                    var31 = var29.threadName;
                    var32['title'] = var31;
                    var30 = var30.message;
                    var31 = var29.publish;
                    var29 = var13 != var31;
                    if(!var29) { _fun0027_ip = 288; continue _fun0027 }
case 289:
                    var29 = var31;
case 288:
                    var30['publish'] = var29;
case 286:
                    if(!(var13 != var25)) { _fun0027_ip = 290; continue _fun0027 }
case 291:
                    var30 = var13 == var25;
                    var29 = undefined;
                    if(var30) { _fun0027_ip = 292; continue _fun0027 }
case 293:
                    var30 = var25.activity;
                    var29 = var30.session_id;
case 292:
                    var32 = var25.type;
                    var30 = _closure1_slot45;
                    var31 = var30.JOIN_REQUEST;
                    var30 = var29;
                    if(!(var32 !== var31)) { _fun0027_ip = 294; continue _fun0027 }
case 295:
                    var32 = var25.type;
                    var31 = _closure1_slot45;
                    var31 = var31.STREAM_REQUEST;
                    var30 = var29;
                    if(!(var32 !== var31)) { _fun0027_ip = 294; continue _fun0027 }
case 296:
                    var30 = var29;
                    if(!(var13 == var30)) { _fun0027_ip = 294; continue _fun0027 }
case 297:
                    var31 = _closure1_slot18;
                    var29 = var31.getSessionId;
                    var30 = var29.bind(var31)();
case 294:
                    if(!(var13 != var30)) { _fun0027_ip = 290; continue _fun0027 }
case 298:
                    var29 = {};
                    var31 = var25.type;
                    var29['type'] = var31;
                    var29['session_id'] = var30;
                    var30 = var25.targetUserId;
                    var29['target_user_id'] = var30;
                    var30 = var25.activity;
                    var25 = var30.party;
                    var25 = var13 != var25;
                    if(!var25) { _fun0027_ip = 299; continue _fun0027 }
case 300:
                    var31 = var30.party;
                    var31 = var31.id;
                    var25 = var13 != var31;
case 299:
                    if(!var25) { _fun0027_ip = 301; continue _fun0027 }
case 302:
                    var25 = var30.party;
                    var25 = var25.id;
                    var29['party_id'] = var25;
case 301:
                    var25 = var14;
                    var31 = var25.message;
                    var30 = var30.application_id;
                    var31['application_id'] = var30;
                    var25 = var25.message;
                    var25['activity'] = var29;
case 290:
                    if(!(var13 != var28)) { _fun0027_ip = 303; continue _fun0027 }
case 304:
                    var25 = var14;
                    var25 = var25.message;
                    var25['poll'] = var28;
case 303:
                    if(!(var13 != var27)) { _fun0027_ip = 305; continue _fun0027 }
case 306:
                    var25 = var14;
                    var25 = var25.message;
                    var25['shared_client_theme'] = var27;
case 305:
                    if(!(var13 != var26)) { _fun0027_ip = 307; continue _fun0027 }
case 308:
                    var25 = var14;
                    var25 = var25.message;
                    var25['sticker_ids'] = var26;
case 307:
                    var26 = _closure1_slot12;
                    var25 = var26.isEnabled;
                    var25 = var25.bind(var26)();
                    if(!var25) { _fun0027_ip = 309; continue _fun0027 }
case 310:
                    var25 = var14;
                    var26 = var25.message;
                    var25 = true;
                    var26['has_poggermode_enabled'] = var25;
case 309:
                    if(!var5) { _fun0027_ip = 311; continue _fun0027 }
case 312:
                    var5 = var14;
                    var25 = var5.message;
                    var5 = true;
                    var25['with_checkpoint'] = var5;
case 311:
                    if(!(var13 != var24)) { _fun0027_ip = 313; continue _fun0027 }
case 314:
                    var5 = var14;
                    var5 = var5.message;
                    var5['content_inventory_entry'] = var24;
case 313:
                    if(!(var13 != var19)) { _fun0027_ip = 315; continue _fun0027 }
case 316:
                    var5 = var14;
                    var5 = var5.message;
                    var5['media_mention'] = var19;
case 315:
                    var5 = var13 != var18;
                    if(!var5) { _fun0027_ip = 317; continue _fun0027 }
case 318:
                    var19 = var18.length;
                    var5 = var19 > var16;
case 317:
                    if(!var5) { _fun0027_ip = 319; continue _fun0027 }
case 320:
                    var5 = var14;
                    var5 = var5.message;
                    var5['attachments'] = var18;
case 319:
                    var5 = var22;
                    if(!(var13 != var5)) { _fun0027_ip = 321; continue _fun0027 }
case 322:
                    var5 = var22;
                    var5 = var5.length;
                    if(!(var5 > var16)) { _fun0027_ip = 321; continue _fun0027 }
case 323: // try_start_0
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var5 = 76;
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
                    if(!var21) { _fun0027_ip = 324; continue _fun0027 }
case 325:
                    var20 = undefined;
case 324:
                    var5['shouldUploadFailureSendNotification'] = var20;
                    var5 = var18.bind(var19)(var5);
                    SaveGenerator(address=1909);
case 326:
                    return var5;
case 327:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=17);
                    if(var18) { _fun0027_ip = 328; continue _fun0027 }
case 329:
                    var17 = var5;
                    if(!(var13 != var5)) { _fun0027_ip = 330; continue _fun0027 }
case 331:
                    var12 = var17.attachments;
                    var17 = var17.uploader;
                    _closure4_slot13 = var17;
                    if(!var15) { _fun0027_ip = 332; continue _fun0027 }
case 333:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0027_ip = 334; continue _fun0027 }
case 335:
                    var15 = var12;
                    var15 = var15.length;
                    if(!(var16 !== var15)) { _fun0027_ip = 334; continue _fun0027 }
case 332:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0027_ip = 321; continue _fun0027 }
case 336:
                    var14 = var14.message;
                    var16 = var12;
                    var15 = var16.map;
                    var12 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 48;
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
case 321: // try_end0
                    var12 = global;
                    var15 = var12.Promise;
                    var12 = var15.prototype;
                    var14 = Object.create(var12, {constructor: {value: var15}});
                    var46 = function(arg1, arg2) {
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
                        var5 = _closure1_slot3;
                        var3 = 75;
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
                        var _closure5_slot4 = var6;
                        var9 = _closure1_slot52;
                        var8 = var9.info;
                        var7 = var7.HermesInternal;
                        var10 = var7.concat;
                        var7 = 'Queueing message to be sent LogId:';
                        var7 = var10.bind(var7)(var6);
                        var7 = var8.bind(var9)(var7);
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.enqueue;
                        var3 = _closure4_slot14;
                        var2 = function(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                var3 = arg1;
                                var _closure6_slot0 = var3;
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var4 = var1.bind(var2)();
                                var2 = _closure5_slot2;
                                var14 = var4 - var2;
                                var2 = var3.ok;
                                if(var2) { _fun0028_ip = 337; continue _fun0028 }
case 338:
                                var10 = _closure1_slot51;
                                var9 = var10.log;
                                var7 = {};
                                var2 = var3.hasErr;
                                var7['hasErr'] = var2;
                                var2 = var3.status;
                                var7['status'] = var2;
                                var11 = var3.body;
                                var8 = null;
                                var12 = var8 == var11;
                                var6 = undefined;
                                var2 = undefined;
                                if(var12) { _fun0028_ip = 115; continue _fun0028 }
case 339:
                                var2 = var11.code;
case 115:
                                var7['code'] = var2;
                                var2 = var3.err;
                                var7['error'] = var2;
                                var2 = 'Failed to send message';
                                var2 = var9.bind(var10)(var2, var7);
                                var2 = var3.hasErr;
                                if(var2) { _fun0028_ip = 340; continue _fun0028 }
case 80:
                                var7 = var3.status;
                                var2 = 400;
                                var9 = var7 >= var2;
                                var11 = undefined;
                                var2 = false;
                                if(!var9) { _fun0028_ip = 341; continue _fun0028 }
case 342:
                                var10 = var3.status;
                                var9 = 500;
                                var9 = var10 < var9;
                                var11 = undefined;
                                var2 = false;
                                if(!var9) { _fun0028_ip = 341; continue _fun0028 }
case 343:
                                var9 = var3.body;
                                var11 = undefined;
                                var2 = false;
                                if(!var9) { _fun0028_ip = 341; continue _fun0028 }
case 344:
                                var9 = var3.body;
                                var10 = var9.code;
                                var9 = _closure1_slot28;
                                var9 = var9.SLOWMODE_RATE_LIMITED;
                                if(!(var10 !== var9)) { _fun0028_ip = 345; continue _fun0028 }
case 346:
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot3;
                                var9 = 81;
                                var9 = var12[var9];
                                var9 = var10.bind(var6)(var9);
                                var12 = var9.AUTOMOD_ERROR_CODES;
                                var10 = var12.has;
                                var9 = var3.body;
                                var9 = var9.code;
                                var9 = var10.bind(var12)(var9);
                                if(var9) { _fun0028_ip = 347; continue _fun0028 }
case 348:
                                var9 = var3.body;
                                var10 = var9.code;
                                var9 = _closure1_slot28;
                                var9 = var9.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(var10 !== var9)) { _fun0028_ip = 349; continue _fun0028 }
case 350:
                                var9 = var3.body;
                                var10 = var9.code;
                                var9 = _closure1_slot28;
                                var9 = var9.EXPLICIT_CONTENT;
                                if(!(var10 !== var9)) { _fun0028_ip = 351; continue _fun0028 }
case 352:
                                var9 = _closure4_slot6;
                                var9 = var8 != var9;
                                if(var9) { _fun0028_ip = 353; continue _fun0028 }
case 354:
                                var9 = _closure4_slot9;
case 353:
                                if(var9) { _fun0028_ip = 355; continue _fun0028 }
case 356:
                                var10 = _closure4_slot7;
                                var9 = var8 != var10;
case 355:
                                var11 = undefined;
                                var2 = false;
                                if(var9) { _fun0028_ip = 341; continue _fun0028 }
case 357:
                                var13 = _closure1_slot56;
                                var12 = var13.sendClydeError;
                                var10 = _closure2_slot0;
                                var9 = var3.body;
                                var9 = var9.code;
                                var9 = var12.bind(var13)(var10, var9);
                                var11 = undefined;
                                var2 = false;
                                _fun0028_ip = 341; continue _fun0028;
case 351:
                                var9 = _closure1_slot48;
                                var11 = var9.EXPLICIT_CONTENT;
                                var2 = false;
                                _fun0028_ip = 341; continue _fun0028;
case 349:
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var9 = 49;
                                var9 = var12[var9];
                                var12 = var10.bind(var6)(var9);
                                var10 = var12.dispatch;
                                var9 = {};
                                var13 = 'POGGERMODE_TEMPORARILY_DISABLED';
                                var9['type'] = var13;
                                var9 = var10.bind(var12)(var9);
                                var11 = undefined;
                                var2 = false;
                                _fun0028_ip = 341; continue _fun0028;
case 347:
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var9 = 49;
                                var9 = var12[var9];
                                var12 = var10.bind(var6)(var9);
                                var10 = var12.dispatch;
                                var9 = {};
                                var13 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                                var9['type'] = var13;
                                var13 = _closure4_slot14;
                                var9['messageData'] = var13;
                                var13 = {};
                                var15 = var3.body;
                                var15 = var15.code;
                                var13['code'] = var15;
                                var15 = var3.body;
                                var15 = var15.message;
                                var13['message'] = var15;
                                var9['errorResponseBody'] = var13;
                                var9 = var10.bind(var12)(var9);
                                var11 = undefined;
                                var2 = false;
                                _fun0028_ip = 341; continue _fun0028;
case 345:
                                var9 = var3.body;
                                var15 = var9.retry_after;
                                var9 = var8 != var15;
                                if(!var9) { _fun0028_ip = 126; continue _fun0028 }
case 251:
                                var10 = 0;
                                var9 = var15 > var10;
case 126:
                                var11 = undefined;
                                var2 = false;
                                if(!var9) { _fun0028_ip = 341; continue _fun0028 }
case 358:
                                var16 = _closure1_slot1;
                                var17 = _closure1_slot3;
                                var9 = 49;
                                var9 = var17[var9];
                                var12 = var16.bind(var6)(var9);
                                var10 = var12.dispatch;
                                var9 = {};
                                var13 = 'SLOWMODE_SET_COOLDOWN';
                                var9['type'] = var13;
                                var13 = _closure2_slot0;
                                var9['channelId'] = var13;
                                var13 = _closure1_slot26;
                                var13 = var13.SendMessage;
                                var9['slowmodeType'] = var13;
                                var13 = 80;
                                var13 = var17[var13];
                                var13 = var16.bind(var6)(var13);
                                var13 = var13.Millis;
                                var13 = var13.SECOND;
                                var13 = var15 * var13;
                                var9['cooldownMs'] = var13;
                                var9 = var10.bind(var12)(var9);
                                var11 = undefined;
                                var2 = false;
                                _fun0028_ip = 341; continue _fun0028;
case 340:
                                var7 = var3.err;
                                var9 = var7.code;
                                var2 = false;
                                var7 = 'ABORTED';
                                var11 = undefined;
                                if(!(var7 === var9)) { _fun0028_ip = 341; continue _fun0028 }
case 359:
                                var2 = true;
                                var11 = undefined;
case 341:
                                if(var2) { _fun0028_ip = 360; continue _fun0028 }
case 361:
                                var7 = _closure4_slot13;
                                if(!(var8 != var7)) { _fun0028_ip = 362; continue _fun0028 }
case 363:
                                var9 = _closure1_slot1;
                                var10 = _closure1_slot3;
                                var7 = 49;
                                var7 = var10[var7];
                                var10 = var9.bind(var6)(var7);
                                var9 = var10.dispatch;
                                var7 = {};
                                var12 = 'UPLOAD_FAIL';
                                var7['type'] = var12;
                                var12 = _closure2_slot0;
                                var7['channelId'] = var12;
                                var12 = _closure4_slot13;
                                var12 = var12._file;
                                var7['file'] = var12;
                                var12 = _closure4_slot12;
                                var7['messageId'] = var12;
                                var7['reason'] = var11;
                                var12 = true;
                                var7['noSendFailed'] = var12;
                                var7 = var9.bind(var10)(var7);
case 362:
                                var7 = var3.hasErr;
                                if(var7) { _fun0028_ip = 364; continue _fun0028 }
case 365:
                                var7 = _closure1_slot48;
                                var7 = var7.EXPLICIT_CONTENT;
                                if(!(var11 === var7)) { _fun0028_ip = 364; continue _fun0028 }
case 366:
                                var12 = _closure1_slot56;
                                var10 = var12.sendExplicitMediaClydeError;
                                var9 = _closure2_slot0;
                                var7 = var3.body;
                                var13 = var8 == var7;
                                var8 = undefined;
                                if(var13) { _fun0028_ip = 367; continue _fun0028 }
case 368:
                                var8 = var7.attachments;
case 367:
                                var13 = _closure1_slot0;
                                var15 = _closure1_slot3;
                                var7 = 53;
                                var7 = var15[var7];
                                var7 = var13.bind(var6)(var7);
                                var7 = var7.TrackMediaRedactionContext;
                                var7 = var7.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                                var7 = var10.bind(var12)(var9, var8, var7);
case 364:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var7 = 49;
                                var7 = var9[var7];
                                var10 = var8.bind(var6)(var7);
                                var8 = var10.dispatch;
                                var7 = {};
                                var12 = 'MESSAGE_SEND_FAILED';
                                var7['type'] = var12;
                                var2 = _closure4_slot12;
                                var7['messageId'] = var2;
                                var12 = _closure2_slot0;
                                var7['channelId'] = var12;
                                var12 = _closure2_slot2;
                                var12 = var12.doNotNotifyOnError;
                                var12 = !var12;
                                var7['shouldNotify'] = var12;
                                var7['reason'] = var11;
                                var7 = var8.bind(var10)(var7);
                                var8 = _closure1_slot0;
                                var7 = 77;
                                var7 = var9[var7];
                                var9 = var8.bind(var6)(var7);
                                var8 = var9.logMessageSendFailure;
                                var7 = {};
                                var11 = var3.hasErr;
                                var10 = undefined;
                                if(var11) { _fun0028_ip = 369; continue _fun0028 }
case 370:
                                var10 = var3.status;
case 369:
                                var7['failureCode'] = var10;
                                var11 = var3.hasErr;
                                var10 = undefined;
                                if(!var11) { _fun0028_ip = 371; continue _fun0028 }
case 372:
                                var11 = var3.err;
                                var10 = var11.message;
case 371:
                                var7['errorMessage'] = var10;
                                var7 = var8.bind(var9)(var7);
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var7 = 75;
                                var7 = var9[var7];
                                var8 = var8.bind(var6)(var7);
                                var7 = var8.cancelPendingSendRequests;
                                var2 = _closure2_slot0;
                                var8 = var7.bind(var8)(var2);
                                var7 = var8.forEach;
                                var2 = function(arg1) {
                                    var5 = arg1;
                                    var6 = _closure1_slot51;
                                    var4 = var6.log;
                                    var3 = var5.nonce;
                                    var2 = 'Cancelling pending message';
                                    var2 = var4.bind(var6)(var2, var3);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var1 = 49;
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
                                var2 = var7.bind(var8)(var2);
                                _fun0028_ip = 373; continue _fun0028;
case 360:
                                var10 = _closure1_slot56;
                                var9 = var10.deleteMessage;
                                var8 = _closure2_slot0;
                                var7 = _closure4_slot12;
                                var2 = true;
                                var2 = var9.bind(var10)(var8, var7, var2);
case 373:
                                var2 = _closure5_slot1;
                                var2 = var2.bind(var6)(var3);
                                _fun0028_ip = 374; continue _fun0028;
case 337:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 68;
                                var6 = var6[var2];
                                var2 = undefined;
                                var10 = var7.bind(var2)(var6);
                                var9 = var10.donateSentMessage;
                                var6 = _closure4_slot0;
                                var13 = _closure2_slot0;
                                var6 = var9.bind(var10)(var6, var13);
                                var12 = _closure1_slot56;
                                var11 = var12.receiveMessage;
                                var25 = var3.body;
                                var9 = {};
                                var6 = {};
                                var6['duration'] = var14;
                                var14 = _closure5_slot3;
                                var6['queueSize'] = var14;
                                var9['sendAnalytics'] = var6;
                                var6 = _closure4_slot6;
                                var9['poll'] = var6;
                                var24 = true;
                                var27 = var12;
                                var26 = var13;
                                var23 = var9;
                                var6 = var27[var11](var26, var25, var24, var23, var22);
                                var6 = _closure2_slot2;
                                var6 = var6.alsoForwardToChannelId;
                                var9 = null;
                                if(!(var9 != var6)) { _fun0028_ip = 375; continue _fun0028 }
case 376:
                                var10 = _closure1_slot1;
                                var13 = _closure1_slot3;
                                var6 = 78;
                                var6 = var13[var6];
                                var12 = var10.bind(var2)(var6);
                                var11 = var12.sendForward;
                                var10 = _closure1_slot0;
                                var6 = 55;
                                var6 = var13[var6];
                                var13 = var10.bind(var2)(var6);
                                var10 = var13.createMessageRecord;
                                var6 = var3.body;
                                var10 = var10.bind(var13)(var6);
                                var6 = _closure2_slot2;
                                var6 = var6.alsoForwardToChannelId;
                                var11 = var11.bind(var12)(var10, var6);
                                var10 = var11.then;
                                var6 = function() {
                                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                        var2 = {};
                                        var1 = _closure6_slot0;
                                        var6 = var1.body;
                                        var3 = null;
                                        var7 = var3 == var6;
                                        var1 = undefined;
                                        var5 = undefined;
                                        if(var7) { _fun0029_ip = 377; continue _fun0029 }
case 73:
                                        var5 = var6.id;
case 377:
                                        var2['referencedMessageId'] = var5;
                                        var5 = _closure6_slot0;
                                        var6 = var5.body;
                                        var7 = var3 == var6;
                                        var5 = undefined;
                                        if(var7) { _fun0029_ip = 235; continue _fun0029 }
case 66:
                                        var5 = var6.guild_id;
case 235:
                                        var2['guildId'] = var5;
                                        var4 = _closure6_slot0;
                                        var4 = var4.body;
                                        var5 = var3 == var4;
                                        var3 = undefined;
                                        if(var5) { _fun0029_ip = 113; continue _fun0029 }
case 213:
                                        var3 = var4.channel_id;
case 113:
                                        var2['channelId'] = var3;
                                        var3 = _closure2_slot2;
                                        var3 = var3.alsoForwardToChannelId;
                                        var2['destinationChannelId'] = var3;
                                        var9 = var2.referencedMessageId;
                                        var8 = var2.guildId;
                                        var7 = var2.channelId;
                                        var6 = var2.destinationChannelId;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var3 = 40;
                                        var3 = var5[var3];
                                        var5 = var4.bind(var1)(var3);
                                        var4 = var5.track;
                                        var2 = _closure1_slot29;
                                        var3 = var2.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT;
                                        var2 = {};
                                        var2['referenced_message_id'] = var9;
                                        var2['guild_id'] = var8;
                                        var2['channel_id'] = var7;
                                        var2['destination_channel_id'] = var6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        return var1;
                                    }
                                };
                                var11 = var10.bind(var11)(var6);
                                var10 = var11.catch;
                                var6 = function(arg1) {
                                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                                        var7 = arg1;
                                        var5 = _closure1_slot51;
                                        var4 = var5.log;
                                        var3 = _closure5_slot4;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'Failed to forward thread message to parent channel LogId:';
                                        var3 = var2.bind(var1)(var3);
                                        var2 = {};
                                        var1 = _closure6_slot0;
                                        var8 = var1.body;
                                        var1 = null;
                                        var9 = var1 == var8;
                                        var1 = undefined;
                                        var6 = undefined;
                                        if(var9) { _fun0030_ip = 114; continue _fun0030 }
case 378:
                                        var6 = var8.id;
case 114:
                                        var2['referencedMessageId'] = var6;
                                        var8 = _closure2_slot0;
                                        var2['channelId'] = var8;
                                        var6 = _closure2_slot2;
                                        var6 = var6.alsoForwardToChannelId;
                                        var2['destinationChannelId'] = var6;
                                        var6 = var7.toString;
                                        var6 = var6.bind(var7)();
                                        var2['error'] = var6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        return var1;
                                    }
                                };
                                var6 = var10.bind(var11)(var6);
case 375:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 60;
                                var6 = var11[var6];
                                var11 = var10.bind(var2)(var6);
                                var10 = var11.cast;
                                var6 = _closure2_slot0;
                                var11 = var10.bind(var11)(var6);
                                var10 = _closure1_slot9;
                                var6 = var10.getRequest;
                                var6 = var6.bind(var10)(var11);
                                if(!(var9 != var6)) { _fun0028_ip = 379; continue _fun0028 }
case 380:
                                var14 = var6.guildId;
                                var12 = var6.userId;
                                var13 = var6.applicationStatus;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var6 = 79;
                                var6 = var11[var6];
                                var11 = var10.bind(var2)(var6);
                                var10 = var11.trackMemberApplicationInterviewMessage;
                                var6 = {};
                                var6['guildId'] = var14;
                                var14 = _closure2_slot0;
                                var6['channelId'] = var14;
                                var14 = var3.body;
                                var14 = var14.id;
                                var6['messageId'] = var14;
                                var6['joinRequestStatus'] = var13;
                                var6['joinRequestUserId'] = var12;
                                var6 = var10.bind(var11)(var6);
case 379:
                                var11 = _closure1_slot11;
                                var10 = var11.recordMessageSendApiResponse;
                                var6 = _closure4_slot11;
                                var6 = var10.bind(var11)(var6);
                                var10 = _closure4_slot10;
                                var6 = _closure1_slot37;
                                var6 = var6.REPLY;
                                if(!(var10 === var6)) { _fun0028_ip = 381; continue _fun0028 }
case 382:
                                var6 = var3.body;
                                var17 = var6.id;
                                var13 = _closure2_slot0;
                                var6 = _closure4_slot5;
                                var6 = var9 == var6;
                                var11 = undefined;
                                if(var6) { _fun0028_ip = 383; continue _fun0028 }
case 384:
                                var6 = _closure4_slot5;
                                var11 = var6.message_id;
case 383:
                                var10 = _closure1_slot13;
                                var6 = var10.getPendingReplyActionSource;
                                var10 = var6.bind(var10)(var13);
                                var6 = 'message_swipe';
                                if(!(var6 !== var10)) { _fun0028_ip = 385; continue _fun0028 }
case 386:
                                var6 = 'message_shortcut';
                                if(!(var6 === var10)) { _fun0028_ip = 381; continue _fun0028 }
case 387:
                                var10 = _closure1_slot19;
                                var6 = var10.getChannel;
                                var18 = var6.bind(var10)(var13);
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var6 = 40;
                                var6 = var12[var6];
                                var14 = var10.bind(var2)(var6);
                                var12 = var14.track;
                                var6 = _closure1_slot29;
                                var10 = var6.MESSAGE_SHORTCUT_ACTION_SENT;
                                var6 = {};
                                var6['message_id'] = var17;
                                var6['channel_id'] = var13;
                                var16 = var9 == var18;
                                var15 = undefined;
                                if(var16) { _fun0028_ip = 388; continue _fun0028 }
case 389:
                                var15 = var18.guild_id;
case 388:
                                var6['guild_id'] = var15;
                                var6['original_message_id'] = var11;
                                var15 = 'reply';
                                var6['action'] = var15;
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot3;
                                var19 = 35;
                                var15 = var15[var19];
                                var20 = var16.bind(var2)(var15);
                                var16 = var20.collectGuildAnalyticsMetadata;
                                var21 = var9 == var18;
                                var15 = undefined;
                                if(var21) { _fun0028_ip = 390; continue _fun0028 }
case 391:
                                var15 = var18.guild_id;
case 390:
                                var25 = var16.bind(var20)(var15);
                                var26 = var6;
                                var15 = copyDataProperties(var26, var25);
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot3;
                                var15 = var15[var19];
                                var16 = var16.bind(var2)(var15);
                                var15 = var16.collectChannelAnalyticsMetadata;
                                var25 = var15.bind(var16)(var18);
                                var26 = var6;
                                var15 = copyDataProperties(var26, var25);
                                var6 = var12.bind(var14)(var10, var6);
                                _fun0028_ip = 381; continue _fun0028;
case 385:
                                var6 = var9 != var11;
                                var16 = null;
                                if(!var6) { _fun0028_ip = 392; continue _fun0028 }
case 393:
                                var10 = _closure1_slot23;
                                var6 = var10.getMessage;
                                var16 = var6.bind(var10)(var13, var11);
case 392:
                                var10 = _closure1_slot19;
                                var6 = var10.getChannel;
                                var15 = var6.bind(var10)(var13);
                                var10 = _closure1_slot27;
                                var6 = var10.getCurrentUser;
                                var14 = var6.bind(var10)();
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 40;
                                var6 = var11[var6];
                                var12 = var10.bind(var2)(var6);
                                var11 = var12.track;
                                var6 = _closure1_slot29;
                                var10 = var6.MESSAGE_SWIPE_ACTION_SENT;
                                var6 = {};
                                var6['message_id'] = var17;
                                var6['channel_id'] = var13;
                                var17 = var9 == var15;
                                var13 = undefined;
                                if(var17) { _fun0028_ip = 394; continue _fun0028 }
case 395:
                                var13 = var15.guild_id;
case 394:
                                var6['guild_id'] = var13;
                                var13 = 'reply';
                                var6['swipe_action'] = var13;
                                var13 = var9 != var14;
                                if(!var13) { _fun0028_ip = 396; continue _fun0028 }
case 397:
                                var15 = var14.id;
                                var17 = var9 == var16;
                                var14 = undefined;
                                if(var17) { _fun0028_ip = 398; continue _fun0028 }
case 399:
                                var16 = var16.author;
                                var14 = var16.id;
case 398:
                                var13 = var15 === var14;
case 396:
                                var6['is_own_message'] = var13;
                                var6 = var11.bind(var12)(var10, var6);
case 381:
                                var12 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 49;
                                var10 = var11[var6];
                                var15 = var12.bind(var2)(var10);
                                var14 = var15.dispatch;
                                var13 = {};
                                var10 = 'SLOWMODE_RESET_COOLDOWN';
                                var13['type'] = var10;
                                var10 = _closure1_slot26;
                                var10 = var10.SendMessage;
                                var13['slowmodeType'] = var10;
                                var10 = _closure2_slot0;
                                var13['channelId'] = var10;
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
                                var14['channel_id'] = var10;
                                var16 = _closure1_slot27;
                                var15 = var16.getCurrentUser;
                                var15 = var15.bind(var16)();
                                var14['author'] = var15;
                                var11['message'] = var14;
                                var11 = var12.bind(var13)(var11);
                                var11 = {};
                                var12 = _closure4_slot0;
                                var11['content'] = var12;
                                var11['channelId'] = var10;
                                var10 = var3.body;
                                var10 = var10.id;
                                var11['messageId'] = var10;
                                var10 = _closure4_slot2;
                                var12 = var9 != var10;
                                var18 = 'chat_input';
                                var10 = var18;
                                if(!var12) { _fun0028_ip = 400; continue _fun0028 }
case 401:
                                var10 = _closure4_slot2;
case 400:
                                var11['location'] = var10;
                                var10 = _closure4_slot3;
                                var11['inviteAnalyticsMetadata'] = var10;
                                var10 = function trackCodedLinks(arg1) {
                                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
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
                                        if(!(var3 === var1)) { _fun0031_ip = 48; continue _fun0031 }
case 402:
                                        var3 = {};
case 48:
                                        var _closure7_slot4 = var3;
                                        var _closure7_slot5 = var1;
                                        var6 = _closure1_slot18;
                                        var5 = var6.getId;
                                        var5 = var5.bind(var6)();
                                        _closure7_slot5 = var5;
                                        var5 = _closure1_slot1;
                                        var6 = _closure1_slot3;
                                        var3 = 30;
                                        var3 = var6[var3];
                                        var3 = var5.bind(var1)(var3);
                                        var4 = var3.bind(var1)(var4);
                                        var3 = var4.forEach;
                                        var2 = function(arg1) {
                                            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                                                var1 = arg1;
                                                var7 = var1.type;
                                                var6 = var1.code;
                                                var5 = var1.url;
                                                var4 = _closure1_slot0;
                                                var1 = _closure1_slot3;
                                                var8 = 31;
                                                var3 = var1[var8];
                                                var1 = undefined;
                                                var4 = var4.bind(var1)(var3);
                                                var3 = var4.isApplicationCodedLink;
                                                var9 = var3.bind(var4)(var7);
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot3;
                                                if(var9) { _fun0032_ip = 360; continue _fun0032 }
case 112:
                                                var11 = 32;
                                                var9 = var3[var11];
                                                var9 = var4.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.INVITE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 403; continue _fun0032 }
case 404:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.TEMPLATE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 405; continue _fun0032 }
case 166:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.BUILD_OVERRIDE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 8:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.EXPERIMENT;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 407:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.MANUAL_BUILD_OVERRIDE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 408:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.EVENT;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 409:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.CHANNEL_LINK;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 71:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 410; continue _fun0032 }
case 411:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.GUILD_PRODUCT;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 214:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.SERVER_SHOP;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 412:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.SOCIAL_LAYER_STOREFRONT;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 413:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.SOCIAL_LAYER_STOREFRONT_APP;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 414:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.QUESTS_EMBED;
                                                if(!(var9 !== var7)) { _fun0032_ip = 415; continue _fun0032 }
case 250:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.GAME_PROFILE;
                                                if(!(var9 !== var7)) { _fun0032_ip = 416; continue _fun0032 }
case 417:
                                                var10 = _closure1_slot0;
                                                var9 = _closure1_slot3;
                                                var9 = var9[var11];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.CodedLinkType;
                                                var9 = var9.COLLECTIBLES_SHOP;
                                                if(!(var9 !== var7)) { _fun0032_ip = 406; continue _fun0032 }
case 418:
                                                var9 = global;
                                                var10 = var9.Error;
                                                var9 = var9.HermesInternal;
                                                var11 = var9.concat;
                                                var9 = 'Unknown coded link type: ';
                                                var9 = var11.bind(var9)(var7);
                                                var9 = var10.bind(var1)(var9);
                                                throw var9;
case 416:
                                                var10 = _closure1_slot0;
                                                var11 = _closure1_slot3;
                                                var9 = 39;
                                                var9 = var11[var9];
                                                var9 = var10.bind(var1)(var9);
                                                var11 = var9.GameProfileShareLinkExperiment;
                                                var10 = var11.getConfig;
                                                var9 = {};
                                                var12 = 'trackCodedLinks';
                                                var9['location'] = var12;
                                                var9 = var10.bind(var11)(var9);
                                                var9 = var9.enabled;
                                                if(!var9) { _fun0032_ip = 406; continue _fun0032 }
case 105:
                                                var10 = _closure1_slot1;
                                                var11 = _closure1_slot3;
                                                var9 = 40;
                                                var9 = var11[var9];
                                                var12 = var10.bind(var1)(var9);
                                                var11 = var12.track;
                                                var9 = _closure1_slot29;
                                                var10 = var9.GAME_PROFILE_LINK_EMBED_SENT;
                                                var9 = {};
                                                var9['game_id'] = var6;
                                                var9 = var11.bind(var12)(var10, var9);
                                                _fun0032_ip = 406; continue _fun0032;
case 415:
                                                var10 = _closure1_slot0;
                                                var11 = _closure1_slot3;
                                                var9 = 36;
                                                var9 = var11[var9];
                                                var13 = var10.bind(var1)(var9);
                                                var12 = var13.getAdMetadataSealed;
                                                var14 = 37;
                                                var9 = var11[var14];
                                                var9 = var10.bind(var1)(var9);
                                                var9 = var9.QuestContent;
                                                var9 = var9.QUESTS_EMBED;
                                                var15 = var12.bind(var13)(var9);
                                                var9 = 38;
                                                var9 = var11[var9];
                                                var11 = var10.bind(var1)(var9);
                                                var10 = var11.trackQuestEvent;
                                                var9 = {};
                                                var9['questId'] = var6;
                                                var12 = _closure1_slot29;
                                                var12 = var12.QUEST_LINK_SHARED;
                                                var9['event'] = var12;
                                                var12 = {};
                                                var13 = null;
                                                var16 = var13 != var15;
                                                if(!var16) { _fun0032_ip = 419; continue _fun0032 }
case 362:
                                                var13 = var15;
case 419:
                                                var12['metadata_sealed'] = var13;
                                                var9['properties'] = var12;
                                                var12 = true;
                                                var9['trackGuildAndChannelMetadata'] = var12;
                                                var13 = _closure1_slot0;
                                                var12 = _closure1_slot3;
                                                var12 = var12[var14];
                                                var12 = var13.bind(var1)(var12);
                                                var12 = var12.QuestContent;
                                                var12 = var12.QUESTS_EMBED;
                                                var9['sourceQuestContent'] = var12;
                                                var9 = var10.bind(var11)(var9);
                                                _fun0032_ip = 406; continue _fun0032;
case 410:
                                                var10 = _closure1_slot0;
                                                var11 = _closure1_slot3;
                                                var9 = 34;
                                                var9 = var11[var9];
                                                var12 = var10.bind(var1)(var9);
                                                var11 = var12.trackAppEmbedLinkSent;
                                                var9 = _closure1_slot46;
                                                var10 = var9.ACTIVITY_INVITE;
                                                var9 = _closure7_slot5;
                                                var9 = var11.bind(var12)(var6, var10, var9);
                                                _fun0032_ip = 406; continue _fun0032;
case 405:
                                                var10 = _closure1_slot10;
                                                var9 = var10.getGuildTemplate;
                                                var13 = var9.bind(var10)(var6);
                                                var9 = null;
                                                if(!(var9 != var13)) { _fun0032_ip = 420; continue _fun0032 }
case 421:
                                                var10 = var13.state;
                                                var9 = _closure1_slot47;
                                                var9 = var9.RESOLVING;
                                                if(!(var10 !== var9)) { _fun0032_ip = 420; continue _fun0032 }
case 422:
                                                var10 = _closure1_slot1;
                                                var11 = _closure1_slot3;
                                                var9 = 35;
                                                var9 = var11[var9];
                                                var12 = var10.bind(var1)(var9);
                                                var11 = var12.trackWithMetadata;
                                                var9 = _closure1_slot29;
                                                var10 = var9.GUILD_TEMPLATE_LINK_SENT;
                                                var9 = {};
                                                var9['guild_template_code'] = var6;
                                                var14 = var13.name;
                                                var9['guild_template_name'] = var14;
                                                var14 = var13.description;
                                                var9['guild_template_description'] = var14;
                                                var13 = var13.sourceGuildId;
                                                var9['guild_template_guild_id'] = var13;
                                                var9 = var11.bind(var12)(var10, var9);
                                                _fun0032_ip = 406; continue _fun0032;
case 420:
                                                return var1;
case 403:
                                                var10 = _closure1_slot57;
                                                var9 = {};
                                                var9['inviteKey'] = var6;
                                                var12 = _closure7_slot0;
                                                var9['channelId'] = var12;
                                                var12 = _closure7_slot1;
                                                var9['messageId'] = var12;
                                                var12 = _closure7_slot2;
                                                var9['location'] = var12;
                                                var12 = _closure7_slot3;
                                                var9['inviteAnalyticsMetadata'] = var12;
                                                var11 = _closure7_slot4;
                                                var9['overrideProperties'] = var11;
                                                var9 = var10.bind(var1)(var9);
                                                _fun0032_ip = 406; continue _fun0032;
case 360:
                                                var3 = var3[var8];
                                                var4 = var4.bind(var1)(var3);
                                                var3 = var4.getApplicationCodedLinkData;
                                                var3 = var3.bind(var4)(var7, var6, var5);
                                                var10 = null;
                                                if(!(var10 != var3)) { _fun0032_ip = 423; continue _fun0032 }
case 424:
                                                var8 = var3.applicationId;
                                                var5 = var3.type;
                                                var7 = _closure1_slot0;
                                                var4 = _closure1_slot3;
                                                var9 = 32;
                                                var4 = var4[var9];
                                                var4 = var7.bind(var1)(var4);
                                                var4 = var4.CodedLinkType;
                                                var4 = var4.APP_DIRECTORY_PROFILE;
                                                if(!(var4 !== var5)) { _fun0032_ip = 305; continue _fun0032 }
case 425:
                                                var7 = _closure1_slot0;
                                                var4 = _closure1_slot3;
                                                var4 = var4[var9];
                                                var4 = var7.bind(var1)(var4);
                                                var4 = var4.CodedLinkType;
                                                var4 = var4.APP_DIRECTORY_STOREFRONT;
                                                if(!(var4 !== var5)) { _fun0032_ip = 426; continue _fun0032 }
case 427:
                                                var7 = _closure1_slot0;
                                                var4 = _closure1_slot3;
                                                var4 = var4[var9];
                                                var4 = var7.bind(var1)(var4);
                                                var4 = var4.CodedLinkType;
                                                var4 = var4.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(var4 !== var5)) { _fun0032_ip = 428; continue _fun0032 }
case 429:
                                                var7 = _closure1_slot0;
                                                var4 = _closure1_slot3;
                                                var4 = var4[var9];
                                                var4 = var7.bind(var1)(var4);
                                                var4 = var4.CodedLinkType;
                                                var4 = var4.ACTIVITY_BOOKMARK;
                                                if(!(var4 !== var5)) { _fun0032_ip = 430; continue _fun0032 }
case 431:
                                                var7 = _closure1_slot0;
                                                var4 = _closure1_slot3;
                                                var4 = var4[var9];
                                                var4 = var7.bind(var1)(var4);
                                                var4 = var4.CodedLinkType;
                                                var4 = var4.APP_OAUTH2_LINK;
                                                if(!(var4 === var5)) { _fun0032_ip = 406; continue _fun0032 }
case 432:
                                                var5 = _closure1_slot0;
                                                var7 = _closure1_slot3;
                                                var4 = 34;
                                                var4 = var7[var4];
                                                var11 = var5.bind(var1)(var4);
                                                var9 = var11.trackAppEmbedLinkSent;
                                                var4 = _closure1_slot46;
                                                var5 = var4.OAUTH;
                                                var4 = _closure7_slot5;
                                                var4 = var9.bind(var11)(var8, var5, var4);
                                                var5 = _closure1_slot1;
                                                var4 = 35;
                                                var4 = var7[var4];
                                                var9 = var5.bind(var1)(var4);
                                                var7 = var9.trackWithMetadata;
                                                var4 = _closure1_slot29;
                                                var5 = var4.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                var4 = {};
                                                var4['application_id'] = var8;
                                                var4 = var7.bind(var9)(var5, var4);
                                                _fun0032_ip = 406; continue _fun0032;
case 430:
                                                var3 = var3.params;
                                                var5 = _closure1_slot0;
                                                var7 = _closure1_slot3;
                                                var4 = 34;
                                                var4 = var7[var4];
                                                var9 = var5.bind(var1)(var4);
                                                var7 = var9.trackAppEmbedLinkSent;
                                                var4 = _closure1_slot46;
                                                var5 = var4.ACTIVITY;
                                                var4 = var3.referrerId;
                                                if(!(var10 == var4)) { _fun0032_ip = 433; continue _fun0032 }
case 434:
                                                var4 = _closure7_slot5;
case 433:
                                                var17 = var3.customId;
                                                var21 = var9;
                                                var20 = var8;
                                                var19 = var5;
                                                var18 = var4;
                                                var3 = var21[var7](var20, var19, var18, var17, var16);
                                                _fun0032_ip = 406; continue _fun0032;
case 428:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var3 = 33;
                                                var3 = var5[var3];
                                                var5 = var4.bind(var1)(var3);
                                                var4 = var5.trackAppDirectoryProfileEmbed;
                                                var3 = 'storefront_sku';
                                                var3 = var4.bind(var5)(var8, var3);
                                                _fun0032_ip = 406; continue _fun0032;
case 426:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var3 = 33;
                                                var3 = var5[var3];
                                                var5 = var4.bind(var1)(var3);
                                                var4 = var5.trackAppDirectoryProfileEmbed;
                                                var3 = 'storefront';
                                                var3 = var4.bind(var5)(var8, var3);
                                                _fun0032_ip = 406; continue _fun0032;
case 305:
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var3 = 33;
                                                var3 = var5[var3];
                                                var7 = var4.bind(var1)(var3);
                                                var3 = var7.trackAppDirectoryProfileEmbed;
                                                var3 = var3.bind(var7)(var8);
                                                var3 = 34;
                                                var3 = var5[var3];
                                                var5 = var4.bind(var1)(var3);
                                                var4 = var5.trackAppEmbedLinkSent;
                                                var2 = _closure1_slot46;
                                                var3 = var2.APP_DISCOVERY;
                                                var2 = _closure7_slot5;
                                                var2 = var4.bind(var5)(var6, var3, var2);
case 406:
                                                return var1;
case 423:
                                                return var1;
                                            }
                                        };
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    }
                                };
                                var10 = var10.bind(var2)(var11);
                                var16 = _closure4_slot0;
                                var15 = _closure2_slot0;
                                var10 = var3.body;
                                var14 = var10.id;
                                var10 = _closure4_slot2;
                                var10 = var9 != var10;
                                var13 = var18;
                                if(!var10) { _fun0028_ip = 435; continue _fun0028 }
case 436:
                                var13 = _closure4_slot2;
case 435:
                                var10 = _closure2_slot2;
                                var11 = var10.isGiftLinkSentOnBehalfOfUser;
                                var11 = !var11;
                                var12 = function trackGiftCodes(arg1, arg2, arg3, arg4, arg5) {
                                    var1 = arg2;
                                    var _closure7_slot0 = var1;
                                    var1 = arg3;
                                    var _closure7_slot1 = var1;
                                    var1 = arg4;
                                    var _closure7_slot2 = var1;
                                    var1 = arg5;
                                    var _closure7_slot3 = var1;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 44;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.findGiftCodes;
                                    var3 = arg1;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                                            var4 = _closure1_slot19;
                                            var3 = var4.getChannel;
                                            var2 = _closure7_slot0;
                                            var6 = var3.bind(var4)(var2);
                                            var2 = null;
                                            if(!(var2 != var6)) { _fun0033_ip = 80; continue _fun0033 }
case 437:
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot3;
                                            var2 = 35;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var4 = var4.bind(var2)(var3);
                                            var3 = var4.trackWithMetadata;
                                            var1 = _closure1_slot29;
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
case 80:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var22 = !var11;
                                var27 = undefined;
                                var26 = var16;
                                var25 = var15;
                                var24 = var14;
                                var23 = var13;
                                var11 = var27[var12](var26, var25, var24, var23, var22, var21);
                                var10 = var10.gifMetadata;
                                if(!(var9 != var10)) { _fun0028_ip = 438; continue _fun0028 }
case 439:
                                var10 = _closure2_slot2;
                                var14 = var10.gifMetadata;
                                var12 = _closure2_slot0;
                                var10 = var3.body;
                                var15 = var10.id;
                                var10 = _closure4_slot2;
                                var10 = var9 != var10;
                                if(!var10) { _fun0028_ip = 440; continue _fun0028 }
case 441:
                                var18 = _closure4_slot2;
case 440:
                                var11 = _closure1_slot19;
                                var10 = var11.getChannel;
                                var16 = var10.bind(var11)(var12);
                                if(!(var9 != var16)) { _fun0028_ip = 438; continue _fun0028 }
case 442:
                                var11 = _closure1_slot1;
                                var17 = _closure1_slot3;
                                var10 = 40;
                                var10 = var17[var10];
                                var13 = var11.bind(var2)(var10);
                                var12 = var13.track;
                                var10 = _closure1_slot29;
                                var11 = var10.MESSAGE_SENT_WITH_GIF;
                                var10 = {};
                                var10['location'] = var18;
                                var10['message_id'] = var15;
                                var15 = var14.gif_provider;
                                var10['gif_provider'] = var15;
                                var15 = var14.load_id;
                                var10['load_id'] = var15;
                                var15 = var14.source_object;
                                var10['source_object'] = var15;
                                var15 = var14.gif_url;
                                var10['gif_url'] = var15;
                                var14 = var14.gif_id;
                                var10['gif_id'] = var14;
                                var15 = _closure1_slot0;
                                var14 = 35;
                                var18 = var17[var14];
                                var20 = var15.bind(var2)(var18);
                                var19 = var20.collectGuildAnalyticsMetadata;
                                var18 = var16.getGuildId;
                                var18 = var18.bind(var16)();
                                var25 = var19.bind(var20)(var18);
                                var26 = var10;
                                var18 = copyDataProperties(var26, var25);
                                var14 = var17[var14];
                                var15 = var15.bind(var2)(var14);
                                var14 = var15.collectChannelAnalyticsMetadata;
                                var25 = var14.bind(var15)(var16);
                                var26 = var10;
                                var14 = copyDataProperties(var26, var25);
                                var10 = var12.bind(var13)(var11, var10);
case 438:
                                var10 = {};
                                var11 = _closure2_slot0;
                                var10['channelId'] = var11;
                                var11 = var3.body;
                                var11 = var11.id;
                                var10['messageId'] = var11;
                                var11 = var3.body;
                                var11 = var11.attachments;
                                if(!(var9 == var11)) { _fun0028_ip = 443; continue _fun0028 }
case 444:
                                var11 = new Array(0);
case 443:
                                var10['attachments'] = var11;
                                var11 = _closure4_slot8;
                                if(!(var9 == var11)) { _fun0028_ip = 445; continue _fun0028 }
case 446:
                                var11 = new Array(0);
                                _fun0028_ip = 447; continue _fun0028;
case 445:
                                var11 = _closure4_slot8;
case 447:
                                var10['attachmentsToUpload'] = var11;
                                var5 = function trackClipsShared(arg1) {
                                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                                        var1 = arg1;
                                        var6 = var1.channelId;
                                        var _closure7_slot0 = var6;
                                        var3 = var1.messageId;
                                        var _closure7_slot1 = var3;
                                        var3 = var1.attachments;
                                        var _closure7_slot2 = var3;
                                        var4 = var1.attachmentsToUpload;
                                        var1 = undefined;
                                        var _closure7_slot3 = var1;
                                        var5 = var3.length;
                                        var3 = var4.length;
                                        if(!(var5 === var3)) { _fun0034_ip = 448; continue _fun0034 }
case 402:
                                        var5 = _closure1_slot19;
                                        var3 = var5.getChannel;
                                        var5 = var3.bind(var5)(var6);
                                        _closure7_slot3 = var5;
                                        var3 = null;
                                        if(!(var3 != var5)) { _fun0034_ip = 448; continue _fun0034 }
case 449:
                                        var3 = var4.forEach;
                                        var2 = function(arg1, arg2) {
                                            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                                                var1 = arg1;
                                                var6 = var1.clip;
                                                var1 = null;
                                                if(!(var1 != var6)) { _fun0035_ip = 450; continue _fun0035 }
case 61:
                                                var2 = _closure1_slot1;
                                                var9 = _closure1_slot3;
                                                var1 = 40;
                                                var1 = var9[var1];
                                                var8 = undefined;
                                                var4 = var2.bind(var8)(var1);
                                                var3 = var4.track;
                                                var1 = _closure1_slot29;
                                                var2 = var1.CLIP_SHARED;
                                                var1 = {};
                                                var7 = _closure1_slot2;
                                                var5 = 45;
                                                var10 = var9[var5];
                                                var11 = var7.bind(var8)(var10);
                                                var10 = var11.getClipBaseProperties;
                                                var12 = var10.bind(var11)(var6);
                                                var13 = var1;
                                                var10 = copyDataProperties(var13, var12);
                                                var5 = var9[var5];
                                                var8 = var7.bind(var8)(var5);
                                                var7 = var8.getClipContextProperties;
                                                var5 = 'trackClipsShared';
                                                var12 = var7.bind(var8)(var5);
                                                var13 = var1;
                                                var5 = copyDataProperties(var13, var12);
                                                var8 = _closure7_slot0;
                                                var7 = 'channel_id';
                                                var1[6] = var8;
                                                var8 = _closure7_slot3;
                                                var7 = var8.getGuildId;
                                                var8 = var7.bind(var8)();
                                                var7 = 'guild_id';
                                                var1[6] = var8;
                                                var7 = _closure7_slot3;
                                                var8 = var7.type;
                                                var7 = 'channel_type';
                                                var1[6] = var8;
                                                var8 = var6.applicationId;
                                                var7 = 'application_id';
                                                var1[6] = var8;
                                                var8 = var6.id;
                                                var7 = 'clip_uuid';
                                                var1[6] = var8;
                                                var7 = var6.remoteClipId;
                                                var6 = 'remote_clip_id';
                                                var1[5] = var7;
                                                var7 = _closure7_slot1;
                                                var6 = 'message_id';
                                                var1[5] = var7;
                                                var6 = _closure7_slot2;
                                                var5 = arg2;
                                                var5 = var6[var5];
                                                var6 = var5.id;
                                                var5 = 'attachment_id';
                                                var1[4] = var6;
                                                var1 = var3.bind(var4)(var2, var1);
case 450:
                                                var1 = undefined;
                                                return var1;
                                            }
                                        };
                                        var2 = var3.bind(var4)(var2);
case 448:
                                        return var1;
                                    }
                                };
                                var5 = var5.bind(var2)(var10);
                                var5 = _closure4_slot13;
                                if(!(var9 != var5)) { _fun0028_ip = 451; continue _fun0028 }
case 452:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var4 = var4[var6];
                                var6 = var5.bind(var2)(var4);
                                var5 = var6.dispatch;
                                var4 = {};
                                var9 = 'UPLOAD_COMPLETE';
                                var4['type'] = var9;
                                var8 = _closure2_slot0;
                                var4['channelId'] = var8;
                                var7 = _closure4_slot13;
                                var7 = var7._file;
                                var4['file'] = var7;
                                var7 = false;
                                var4['aborted'] = var7;
                                var4 = var5.bind(var6)(var4);
case 451:
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var2)(var3);
case 374:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    };
                    var47 = var14;
                    var12 = new var47[var15](var46, var45);
                    var12 = var12 instanceof Object ? var12 : var14;
                    return var12;
case 334:
                    return var11;
case 330:
                    return var11;
case 328:
                    return var5;
case 453: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var17 = var5.file;
                    var9 = var17;
                    var16 = var5.code;
                    var8 = var16;
                    var15 = var5.reason;
                    var7 = var15;
                    var6 = var5.responseBody;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var5 = 77;
                    var5 = var14[var5];
                    var14 = var12.bind(var11)(var5);
                    var12 = var14.logMessageSendFailure;
                    var5 = {};
                    var17 = var17.items;
                    var5['fileItems'] = var17;
                    var5['failureCode'] = var16;
                    var16 = var13 == var15;
                    var15 = undefined;
                    if(var16) { _fun0027_ip = 454; continue _fun0027 }
case 455:
                    var16 = var7;
                    var15 = var16.msg;
case 454:
                    var5['errorMessage'] = var15;
                    var5 = var12.bind(var14)(var5);
                    var12 = var10;
                    var12 = var13 == var12;
                    var5 = var12;
                    if(var12) { _fun0027_ip = 456; continue _fun0027 }
case 457:
                    var46 = var9;
                    var45 = var8;
                    var44 = var7;
                    var43 = var6;
                    var47 = undefined;
                    var5 = var47[var10](var46, var45, var44, var43, var42);
case 456:
                    var5 = undefined;
                    return var5;
case 243:
                    var6 = _closure1_slot52;
                    var5 = var6.info;
                    var3 = 'Converting channel to a private channel';
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var4 = _closure1_slot52;
                        var3 = var4.info;
                        var2 = 'Finished converting channel to a private channel';
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure1_slot56;
                        var4 = var5._sendMessage;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var1, var3, var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 242:
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
        var2 = _closure1_slot3;
        var1 = 49;
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
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var4 = arg3;
            var8 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 71;
            var5 = var5[var3];
            var3 = undefined;
            var10 = var8.bind(var3)(var5);
            var9 = var10.hasFlag;
            var8 = var6.flags;
            var5 = _closure1_slot35;
            var5 = var5.IS_COMPONENTS_V2;
            var5 = var9.bind(var10)(var8, var5);
            if(!var5) { _fun0036_ip = 160; continue _fun0036 }
case 240:
            var9 = var6.components;
            var8 = var9.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 82;
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
            if(!(!(var9 > var5))) { _fun0036_ip = 458; continue _fun0036 }
case 160:
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var5 = 49;
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
case 458:
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
            var8 = _closure1_slot3;
            var1 = 49;
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
        var2 = _closure1_slot3;
        var1 = 49;
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
        var2 = _closure1_slot3;
        var1 = 49;
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
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0037_ip = 459; continue _fun0037 }
case 59:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var11 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = _closure1_slot20;
                    var2 = var6.getEditActionSource;
                    var6 = var2.bind(var6)(var7);
                    var2 = 'message_swipe';
                    if(!(var2 === var6)) { _fun0037_ip = 460; continue _fun0037 }
case 402:
                    var6 = _closure1_slot19;
                    var2 = var6.getChannel;
                    var12 = var2.bind(var6)(var7);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 40;
                    var2 = var8[var2];
                    var9 = var6.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot29;
                    var6 = var2.MESSAGE_SWIPE_ACTION_SENT;
                    var2 = {};
                    var2['message_id'] = var11;
                    var2['channel_id'] = var7;
                    var11 = null;
                    var13 = var11 == var12;
                    var11 = undefined;
                    if(var13) { _fun0037_ip = 166; continue _fun0037 }
case 461:
                    var11 = var12.guild_id;
case 166:
                    var2['guild_id'] = var11;
                    var11 = 'edit';
                    var2['swipe_action'] = var11;
                    var11 = true;
                    var2['is_own_message'] = var11;
                    var2 = var8.bind(var9)(var6, var2);
case 460:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 83;
                    var2 = var8[var2];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var6)(var7);
                    SaveGenerator(address=196);
case 462:
                    return var2;
case 463:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0037_ip = 464; continue _fun0037 }
case 65:
                    var11 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var7 = _closure1_slot23;
                    var6 = var7.getMessage;
                    var12 = var6.bind(var7)(var11, var9);
                    var7 = null;
                    var8 = var7 != var12;
                    var6 = undefined;
                    if(!var8) { _fun0037_ip = 465; continue _fun0037 }
case 408:
                    var13 = var12.type;
                    var8 = _closure1_slot37;
                    var8 = var8.REPLY;
                    var6 = undefined;
                    if(!(var13 === var8)) { _fun0037_ip = 465; continue _fun0037 }
case 153:
                    var14 = _closure1_slot14;
                    var13 = var14.getMessageByReference;
                    var8 = var12.messageReference;
                    var8 = var13.bind(var14)(var8);
                    var14 = var8.state;
                    var13 = _closure1_slot15;
                    var13 = var13.LOADED;
                    var6 = undefined;
                    if(!(var14 === var13)) { _fun0037_ip = 465; continue _fun0037 }
case 119:
                    var13 = var12.mentions;
                    var12 = var13.includes;
                    var8 = var8.message;
                    var8 = var8.author;
                    var8 = var8.id;
                    var8 = var12.bind(var13)(var8);
                    var6 = undefined;
                    if(var8) { _fun0037_ip = 465; continue _fun0037 }
case 466:
                    var8 = {};
                    var12 = global;
                    var14 = var12.Object;
                    var13 = var14.values;
                    var12 = _closure1_slot38;
                    var12 = var13.bind(var14)(var12);
                    var8['parse'] = var12;
                    var12 = false;
                    var8['replied_user'] = var12;
                    var6 = var8;
case 465:
                    var12 = _closure1_slot23;
                    var8 = var12.getMessage;
                    var13 = var8.bind(var12)(var11, var9);
                    var7 = var7 != var13;
                    if(!var7) { _fun0037_ip = 467; continue _fun0037 }
case 468:
                    var12 = var13.hasFlag;
                    var8 = _closure1_slot35;
                    var8 = var8.CROSSPOSTED;
                    var7 = var12.bind(var13)(var8);
case 467:
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
                    var11 = _closure1_slot3;
                    var9 = 75;
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
                        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                            var8 = arg1;
                            var1 = var8.hasErr;
                            var9 = !var1;
                            if(!var9) { _fun0038_ip = 240; continue _fun0038 }
case 229:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 81;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.AUTOMOD_ERROR_CODES;
                            var2 = var3.has;
                            var1 = var8.body;
                            var1 = var1.code;
                            var9 = var2.bind(var3)(var1);
case 240:
                            if(!var9) { _fun0038_ip = 469; continue _fun0038 }
case 470:
                            var4 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 75;
                            var2 = var5[var2];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.MessageDataType;
                            var2 = var2.EDIT;
                            var4['type'] = var2;
                            var2 = _closure4_slot0;
                            var4['message'] = var2;
                            var2 = _closure1_slot1;
                            var1 = 49;
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
case 469:
                            var10 = var8.hasErr;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var1 = 84;
                            var3 = var12[var1];
                            var1 = undefined;
                            var3 = var11.bind(var1)(var3);
                            var5 = var3.AccessibilityAnnouncer;
                            var4 = var5.announce;
                            var3 = 46;
                            var6 = var12[var3];
                            var6 = var11.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var3 = var12[var3];
                            var3 = var11.bind(var1)(var3);
                            var3 = var3.t;
                            if(var10) { _fun0038_ip = 471; continue _fun0038 }
case 17:
                            if(var9) { _fun0038_ip = 472; continue _fun0038 }
case 139:
                            var9 = var3["0x1HBD"];
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0038_ip = 473; continue _fun0038;
case 472:
                            var9 = var3.Hym4ix;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0038_ip = 473; continue _fun0038;
case 471:
                            var3 = var3.Atp7FP;
                            var3 = var6.bind(var7)(var3);
                            var3 = var4.bind(var5)(var3);
case 473:
                            var7 = _closure1_slot56;
                            var6 = var7.endEditMessage;
                            var4 = _closure2_slot0;
                            var9 = var8.hasErr;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 474; continue _fun0038 }
case 155:
                            var3 = var8;
case 474:
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure1_slot56;
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
case 464:
                    return var2;
case 459:
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
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0039_ip = 475; continue _fun0039 }
case 83:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 83;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
case 66:
                    return var2;
case 476:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0039_ip = 477; continue _fun0039 }
case 240:
                    var9 = _closure1_slot23;
                    var6 = var9.getMessage;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var9 = var6.bind(var9)(var5, var4);
                    var4 = null;
                    if(!(var4 != var9)) { _fun0039_ip = 478; continue _fun0039 }
case 404:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 54;
                    var4 = var12[var4];
                    var4 = var11.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var14 = _closure1_slot30;
                    var13 = var14.MESSAGE;
                    var10 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var8 = var13.bind(var14)(var10, var8);
                    var4['url'] = var8;
                    var8 = {};
                    var10 = 71;
                    var10 = var12[var10];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.setFlag;
                    var10 = var9.flags;
                    var7 = _closure1_slot35;
                    var9 = var7.SUPPRESS_EMBEDS;
                    var7 = true;
                    var9 = var11.bind(var12)(var10, var9, var7);
                    var8['flags'] = var9;
                    var4['body'] = var8;
                    var4['oldFormErrors'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
case 478:
                    return var3;
case 477:
                    return var2;
case 475:
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
    var8 = function patchMessageGuildOfficial(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0040_ip = 134; continue _fun0040 }
case 83:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 83;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
case 66:
                    return var2;
case 476:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0040_ip = 479; continue _fun0040 }
case 240:
                    var7 = _closure1_slot23;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var10 = var6.bind(var7)(var5, var4);
                    var4 = null;
                    if(!(var4 != var10)) { _fun0040_ip = 11; continue _fun0040 }
case 404:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var4 = 54;
                    var4 = var13[var4];
                    var4 = var12.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var15 = _closure1_slot30;
                    var14 = var15.MESSAGE;
                    var11 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var7 = var14.bind(var15)(var11, var7);
                    var4['url'] = var7;
                    var7 = {};
                    var11 = 71;
                    var11 = var13[var11];
                    var12 = var12.bind(var3)(var11);
                    var11 = var12.setFlag;
                    var10 = var10.flags;
                    var9 = _closure1_slot35;
                    var9 = var9.IS_GUILD_OFFICIAL;
                    var8 = _closure2_slot2;
                    var8 = var11.bind(var12)(var10, var9, var8);
                    var7['flags'] = var8;
                    var4['body'] = var7;
                    var7 = true;
                    var4['oldFormErrors'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
case 11:
                    return var3;
case 479:
                    return var2;
case 134:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['patchMessageGuildOfficial'] = var8;
    var8 = function patchMessageAttachments(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0041_ip = 480; continue _fun0041 }
case 83:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 83;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
case 66:
                    return var2;
case 476:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0041_ip = 481; continue _fun0041 }
case 234:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 54;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var11 = _closure1_slot30;
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
case 481:
                    return var2;
case 480:
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
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0042_ip = 73; continue _fun0042 }
case 74:
            var3 = false;
case 73:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot5;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0043_ip = 82; continue _fun0043 }
case 59:
                        var3 = function dispatchDelete() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 49;
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
                                var8 = _closure1_slot3;
                                var1 = 84;
                                var2 = var8[var1];
                                var1 = undefined;
                                var2 = var7.bind(var1)(var2);
                                var4 = var2.AccessibilityAnnouncer;
                                var3 = var4.announce;
                                var2 = 46;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.RYMs7s;
                                var2 = var5.bind(var6)(var2);
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var _closure4_slot0 = var3;
                        var2 = _closure2_slot2;
                        if(var2) { _fun0043_ip = 171; continue _fun0043 }
case 68:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 83;
                        var2 = var6[var2];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var2);
                        var5 = var6.unarchiveThreadIfNecessary;
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=78);
case 482:
                        return var2;
case 50:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0043_ip = 483; continue _fun0043 }
case 484:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var5 = 54;
                        var5 = var10[var5];
                        var5 = var6.bind(var7)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.del;
                        var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var11 = _closure1_slot30;
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
                        _fun0043_ip = 9; continue _fun0043;
case 483:
                        return var2;
case 171:
                        var2 = undefined;
                        var2 = var3.bind(var2)();
case 9:
                        var2 = undefined;
                        return var2;
case 82:
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
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var2 = arg1;
            var6 = this;
            var3 = var2.loggingName;
            var1 = null;
            if(!(var1 != var3)) { _fun0044_ip = 485; continue _fun0044 }
case 61:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 35;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.trackWithMetadata;
            var1 = _closure1_slot29;
            var3 = var1.AUTOMATED_MESSAGE_DISMISSED;
            var1 = {};
            var7 = var2.loggingName;
            var1['message_name'] = var7;
            var7 = var2.author;
            var7 = var7.username;
            var1['message_author'] = var7;
            var1 = var4.bind(var5)(var3, var1);
case 485:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 85;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var5 = var7.logGiftIntentMessageDismissed;
            var4 = var2.channel_id;
            var3 = var2.id;
            var3 = var5.bind(var7)(var4, var3);
            var5 = var6.deleteMessage;
            var4 = var2.channel_id;
            var3 = var2.id;
            var2 = true;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['dismissAutomatedMessage'] = var8;
    var8 = function revealMessage(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 49;
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
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0045_ip = 486; continue _fun0045 }
case 83: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 54;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'failImmediatelyWhenRateLimited': true, 'rejectWithError': false};
                    var9 = _closure1_slot30;
                    var8 = var9.MESSAGE_CROSSPOST;
                    var7 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var5 = var8.bind(var9)(var7, var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=102);
case 487:
                    return var2;
case 339:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0045_ip = 49; continue _fun0045 }
case 488: // try_end0
                    return var2;
case 49:
                    return var2;
case 489: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var6 = var2;
                    var3 = var2.status;
                    var2 = 429;
                    if(!(var2 !== var3)) { _fun0045_ip = 490; continue _fun0045 }
case 224:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 46;
                    var3 = var8[var2];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.z2gyNF;
                    var7 = var3.bind(var4)(var2);
                    _fun0045_ip = 491; continue _fun0045;
case 490:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 46;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["77cuqz"];
                    var2 = {};
                    var8 = global;
                    var9 = var8.Math;
                    var8 = var9.floor;
                    var6 = var6.body;
                    var10 = var6.retry_after;
                    var6 = 60;
                    var6 = var10 / var6;
                    var6 = var8.bind(var9)(var6);
                    var2['retryAfter'] = var6;
                    var7 = var4.bind(var5)(var3, var2);
case 491:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 86;
                    var3 = var10[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var6 = 46;
                    var8 = var10[var6];
                    var8 = var9.bind(var2)(var8);
                    var12 = var8.intl;
                    var11 = var12.string;
                    var8 = var10[var6];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.Vd1hs6;
                    var8 = var11.bind(var12)(var8);
                    var3['title'] = var8;
                    var3['body'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.BddRzS;
                    var6 = var7.bind(var8)(var6);
                    var3['confirmText'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 486:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['crosspostMessage'] = var8;
    var2['trackInvite'] = var7;
    var _closure1_slot56 = var2;
    var4 = 87;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/MessageActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();