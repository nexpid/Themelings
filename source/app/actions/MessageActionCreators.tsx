// app/actions/MessageActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var7 = function trackInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.inviteKey;
            var9 = var2.channelId;
            var7 = var2.messageId;
            var10 = var2.location;
            var5 = var2.suggested;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 38; continue _fun0001 }
 36:
            var5 = null;
 38:
            var3 = var2.overrideProperties;
            if(!(var3 === var1)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var3 = {};
 50:
            var6 = _closure1_slot18;
            var4 = var6.getId;
            var15 = var4.bind(var6)();
            var6 = _closure1_slot21;
            var4 = var6.getInvite;
            var13 = var4.bind(var6)(var8);
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 38;
            var4 = var11[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.parseExtraDataFromInviteKey;
            var4 = var4.bind(var6)(var8);
            var11 = null;
            var8 = var11 != var13;
            if(!var8) { _fun0001_ip = 153; continue _fun0001 }
 122:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 39;
            var6 = var14[var6];
            var12 = var12.bind(var1)(var6);
            var6 = var12.isEmbeddedApplicationInvite;
            var8 = var6.bind(var12)(var13);
 153:
            var6 = var11 == var13;
            var14 = undefined;
            if(var6) { _fun0001_ip = 182; continue _fun0001 }
 162:
            var6 = var13.target_application;
            var12 = var11 == var6;
            var14 = undefined;
            if(var12) { _fun0001_ip = 182; continue _fun0001 }
 177:
            var14 = var6.id;
 182:
            var6 = var11 != var14;
            if(!var6) { _fun0001_ip = 192; continue _fun0001 }
 189:
            var6 = var8;
 192:
            if(!var6) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 33;
            var8 = var17[var6];
            var12 = var16.bind(var1)(var8);
            var8 = var12.trackAppEmbedLinkSent;
            var6 = var17[var6];
            var6 = var16.bind(var1)(var6);
            var6 = var6.LinkType;
            var6 = var6.ACTIVITY_INVITE;
            var6 = var8.bind(var12)(var14, var6, var15);
 249:
            var8 = _closure1_slot19;
            var6 = var8.getChannel;
            var6 = var6.bind(var8)(var9);
            if(!(var11 == var6)) { _fun0001_ip = 518; continue _fun0001 }
 270:
            var8 = {};
            var9 = var11 != var13;
            if(!var9) { _fun0001_ip = 298; continue _fun0001 }
 279:
            var14 = var13.state;
            var12 = _closure1_slot33;
            var12 = var12.RESOLVED;
            var9 = var14 === var12;
 298:
            if(!var9) { _fun0001_ip = 311; continue _fun0001 }
 301:
            var12 = var13.inviter;
            var9 = var11 != var12;
 311:
            if(!var9) { _fun0001_ip = 1094; continue _fun0001 }
 317:
            var9 = var13.inviter;
            var9 = var9.id;
            var8['invite_inviter_id'] = var9;
            var9 = var13.target_application;
            if(!(var11 != var9)) { _fun0001_ip = 361; continue _fun0001 }
 344:
            var9 = var13.target_application;
            var9 = var9.id;
            var8['application_id'] = var9;
 361:
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
            var12 = _closure1_slot2;
            var8 = 31;
            var8 = var12[var8];
            var12 = var9.bind(var1)(var8);
            var9 = var12.trackWithMetadata;
            var8 = _closure1_slot28;
            var8 = var8.INVITE_SENT;
            var8 = var9.bind(var12)(var8, var14);
            _fun0001_ip = 1094; continue _fun0001;
 518:
            var8 = var6.isMultiUserDM;
            var8 = var8.bind(var6)();
            if(var8) { _fun0001_ip = 558; continue _fun0001 }
 531:
            var8 = var6.isPrivate;
            var8 = var8.bind(var6)();
            var14 = null;
            if(var8) { _fun0001_ip = 568; continue _fun0001 }
 546:
            var8 = _closure1_slot31;
            var14 = var8.SERVER_INVITE;
            _fun0001_ip = 568; continue _fun0001;
 558:
            var8 = _closure1_slot31;
            var14 = var8.GDM_INVITE;
 568:
            var8 = {};
            var9 = var14;
            if(!(var11 != var13)) { _fun0001_ip = 845; continue _fun0001 }
 580:
            var15 = var13.state;
            var12 = _closure1_slot33;
            var12 = var12.RESOLVED;
            var9 = var14;
            if(!(var15 === var12)) { _fun0001_ip = 845; continue _fun0001 }
 605:
            var12 = var13.channel;
            var9 = var14;
            if(!(var11 != var12)) { _fun0001_ip = 845; continue _fun0001 }
 620:
            var12 = var13.channel;
            var15 = var12.id;
            var8['invite_channel_id'] = var15;
            var16 = var13.guild;
            var17 = var11 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 655; continue _fun0001 }
 650:
            var15 = var16.id;
 655:
            var8['invite_guild_id'] = var15;
            var15 = var12.type;
            var8['invite_channel_type'] = var15;
            var15 = var13.inviter;
            if(!(var11 != var15)) { _fun0001_ip = 699; continue _fun0001 }
 682:
            var15 = var13.inviter;
            var15 = var15.id;
            var8['invite_inviter_id'] = var15;
 699:
            var15 = var13.target_application;
            if(!(var11 != var15)) { _fun0001_ip = 726; continue _fun0001 }
 709:
            var13 = var13.target_application;
            var13 = var13.id;
            var8['application_id'] = var13;
 726:
            var15 = _closure1_slot17;
            var13 = var15.getLastActiveStream;
            var16 = var13.bind(var15)();
            var9 = var14;
            if(!(var11 != var16)) { _fun0001_ip = 845; continue _fun0001 }
 747:
            var13 = var16.channelId;
            var12 = var12.id;
            var9 = var14;
            if(!(var13 === var12)) { _fun0001_ip = 845; continue _fun0001 }
 764:
            var12 = _closure1_slot31;
            var12 = var12.STREAM;
            var13 = var16.ownerId;
            var8['destination_user_id'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 40;
            var13 = var15[var13];
            var15 = var14.bind(var1)(var13);
            var14 = var15.getStreamerApplication;
            var13 = _closure1_slot23;
            var14 = var14.bind(var15)(var16, var13);
            var15 = var11 != var14;
            var13 = null;
            if(!var15) { _fun0001_ip = 836; continue _fun0001 }
 831:
            var13 = var14.id;
 836:
            var8['application_id'] = var13;
            var9 = var12;
 845:
            if(!(var11 != var5)) { _fun0001_ip = 919; continue _fun0001 }
 849:
            var11 = var5.isAffinitySuggestion;
            var8['is_suggested'] = var11;
            var11 = var5.rowNum;
            var8['row_num'] = var11;
            var11 = var5.numTotal;
            var8['num_total'] = var11;
            var11 = var5.numAffinityConnections;
            var8['num_affinity_connections'] = var11;
            var5 = var5.isFiltered;
            var8['is_filtered'] = var5;
 919:
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
            var3 = 31;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.trackWithMetadata;
            var2 = _closure1_slot28;
            var2 = var2.INVITE_SENT;
            var2 = var3.bind(var4)(var2, var5);
 1094:
            return var1;
        }
    };
    var _closure1_slot54 = var7;
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
    var2 = var2.GuildTemplateStates;
    var _closure1_slot45 = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FileUploadErrorTypes;
    var _closure1_slot46 = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var2 = var2.MediaPlayerManager;
    var _closure1_slot47 = var2;
    var2 = 28;
    var10 = var6[var2];
    var12 = var9.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'MessageActionCreators';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot48 = var10;
    var2 = var6[var2];
    var10 = var9.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var15 = 'MessageQueue';
    var16 = var9;
    var2 = new var16[var10](var15, var14);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot49 = var2;
    var2 = false;
    var _closure1_slot50 = var2;
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
    var _closure1_slot51 = var2;
    var2 = {};
    var10 = var8.EMAIL_VERIFICATION_REQUIRED;
    var9 = {};
    var11 = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    var9['messageName'] = var11;
    var11 = function messageGetter() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 43;
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
        var1 = 43;
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
        var6 = 44;
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
        var1 = 43;
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
        var1 = 43;
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
        var1 = 43;
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
        var1 = 43;
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
        var1 = 43;
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
    var _closure1_slot52 = var2;
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
            var2 = 45;
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
            var2 = 31;
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
            var4 = _closure1_slot53;
            var3 = var4.receiveMessage;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 46;
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
        var1 = 46;
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
        var4 = _closure1_slot53;
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
        var1 = 46;
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
        var4 = _closure1_slot53;
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
            var3 = _closure1_slot52;
            var3 = var8 in var3;
            if(var3) { _fun0004_ip = 279; continue _fun0004 }
 139:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 43;
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
            var9 = 44;
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
            var7 = _closure1_slot52;
            var3 = var7[var8];
            var4 = var3.messageName;
            var8 = var7[var8];
            var7 = var8.messageGetter;
            var5 = var7.bind(var8)();
            _fun0004_ip = 797; continue _fun0004;
 312:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 43;
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
            var3 = 43;
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
            var3 = 43;
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
            var3 = 43;
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
            var3 = 43;
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
            var11 = 44;
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
            var3 = 43;
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
            var3 = _closure1_slot53;
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
            var6 = arg1;
            var5 = arg2;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 47;
            var3 = var3[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var3);
            var7 = var8.isEligibleForSensitiveContentGoreExperiment;
            var3 = 'ExplicitMediaClydeError';
            var3 = var7.bind(var8)(var3);
            var _closure2_slot0 = var3;
            var7 = _closure1_slot19;
            var3 = var7.getChannel;
            var13 = var3.bind(var7)(var6);
            var3 = null;
            if(!(var3 != var13)) { _fun0005_ip = 406; continue _fun0005 }
 77:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 48;
            var7 = var12[var7];
            var9 = var11.bind(var1)(var7);
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 43;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    if(var2) { _fun0006_ip = 74; continue _fun0006 }
 61:
                    var2 = var3.PoyOY2;
                    var2 = var4.bind(var5)(var2);
                    _fun0006_ip = 85; continue _fun0006;
 74:
                    var3 = var3.mktny8;
                    var2 = var4.bind(var5)(var3);
 85:
                    var1['message'] = var2;
                    var2 = 'BOT_DM_EXPLICIT_CONTENT';
                    var1['messageName'] = var2;
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var8, var7);
            var9 = var10.with;
            var8 = {'isDM': false, 'isGDM': true};
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 43;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    if(var2) { _fun0007_ip = 74; continue _fun0007 }
 61:
                    var2 = var3.PoyOY2;
                    var2 = var4.bind(var5)(var2);
                    _fun0007_ip = 85; continue _fun0007;
 74:
                    var3 = var3.mktny8;
                    var2 = var4.bind(var5)(var3);
 85:
                    var1['message'] = var2;
                    var2 = 'BOT_GDM_EXPLICIT_CONTENT';
                    var1['messageName'] = var2;
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8, var7);
            var7 = var8.otherwise;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 43;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    if(var2) { _fun0008_ip = 74; continue _fun0008 }
 61:
                    var2 = var3.bNMQVF;
                    var2 = var4.bind(var5)(var2);
                    _fun0008_ip = 85; continue _fun0008;
 74:
                    var3 = var3.i4AbAQ;
                    var2 = var4.bind(var5)(var3);
 85:
                    var1['message'] = var2;
                    var2 = 'BOT_GUILD_EXPLICIT_CONTENT';
                    var1['messageName'] = var2;
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4);
            var16 = var4.message;
            var15 = var4.messageName;
            var4 = 49;
            var4 = var12[var4];
            var7 = var11.bind(var1)(var4);
            var4 = var7.createNonce;
            var7 = var4.bind(var7)();
            var8 = _closure1_slot53;
            var4 = var8.sendBotMessage;
            var18 = var8;
            var17 = var6;
            var14 = var7;
            var4 = var18[var4](var17, var16, var15, var14, var13);
            var10 = 50;
            var4 = var12[var10];
            var9 = var11.bind(var1)(var4);
            var8 = var9.trackMediaRedactionAction;
            var4 = {};
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.TrackMediaRedactionActionType;
            var10 = var10.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
            var4['action'] = var10;
            var4['messageId'] = var7;
            var4['channelId'] = var6;
            var10 = arg3;
            var4['context'] = var10;
            var4 = var8.bind(var9)(var4);
            var3 = var3 != var5;
            if(!var3) { _fun0005_ip = 348; continue _fun0005 }
 337:
            var8 = var5.length;
            var4 = 0;
            var3 = var8 > var4;
 348:
            if(!var3) { _fun0005_ip = 406; continue _fun0005 }
 351:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
            var2['type'] = var8;
            var2['messageId'] = var7;
            var2['channelId'] = var6;
            var2['attachments'] = var5;
            var2 = var3.bind(var4)(var2);
 406:
            return var1;
        }
    };
    var2['sendExplicitMediaClydeError'] = var8;
    var8 = function truncateMessages(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 45;
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
        var1 = 45;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var7 = _closure1_slot53;
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
            if(var2) { _fun0009_ip = 94; continue _fun0009 }
 61:
            var7 = _closure1_slot53;
            var3 = var7.fetchMessages;
            var2 = {};
            var2['channelId'] = var5;
            var2['limit'] = var4;
            var2['jump'] = var6;
            var2 = var3.bind(var7)(var2);
            _fun0009_ip = 152; continue _fun0009;
 94:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 45;
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
 152:
            var1 = undefined;
            return var1;
        }
    };
    var2['jumpToPresent'] = var8;
    var8 = function trackJump(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 31;
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var13 = var1.channelId;
            var12 = var1.messageId;
            var11 = var1.flash;
            var2 = undefined;
            if(!(var11 === var2)) { _fun0010_ip = 27; continue _fun0010 }
 25:
            var11 = false;
 27:
            var10 = var1.offset;
            var7 = var1.context;
            var3 = var1.extraProperties;
            if(!(var3 === var2)) { _fun0010_ip = 50; continue _fun0010 }
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
            if(!(var2 === var1)) { _fun0010_ip = 123; continue _fun0010 }
 91:
            var2 = _closure1_slot53;
            var1 = var2.trackJump;
            var18 = var2;
            var17 = var13;
            var16 = var12;
            var15 = var7;
            var14 = var3;
            var1 = var18[var1](var17, var16, var15, var14, var13);
 123:
            var1 = _closure1_slot47;
            var3 = null;
            var1 = var3 == var1;
            if(var1) { _fun0010_ip = 153; continue _fun0010 }
 139:
            var2 = _closure1_slot47;
            var2 = var2.pauseAllMediaPlayers;
            var1 = var3 == var2;
 153:
            if(var1) { _fun0010_ip = 170; continue _fun0010 }
 156:
            var2 = _closure1_slot47;
            var1 = var2.pauseAllMediaPlayers;
            var1 = var1.bind(var2)();
 170:
            var3 = _closure1_slot53;
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
        var3 = _closure1_slot53;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var2 = var1.body;
                var2 = var2.length;
                var4 = 0;
                if(!(!(var2 > var4))) { _fun0011_ip = 23; continue _fun0011 }
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var5 = this;
            var13 = var1.channelId;
            var _closure2_slot0 = var13;
            var11 = var1.before;
            var _closure2_slot1 = var11;
            var10 = var1.after;
            var _closure2_slot2 = var10;
            var9 = var1.limit;
            var _closure2_slot3 = var9;
            var12 = var1.jump;
            var _closure2_slot4 = var12;
            var14 = var1.focus;
            var7 = var1.isPreload;
            var3 = var1.skipLocalFetch;
            var17 = var1.truncate;
            var _closure2_slot5 = var17;
            var4 = var1.forICYMI;
            var _closure2_slot6 = var4;
            var1 = var1.avoidInitialScroll;
            var _closure2_slot7 = var1;
            var1 = undefined;
            var _closure2_slot10 = var1;
            var _closure2_slot11 = var1;
            var8 = _closure1_slot19;
            var4 = var8.getChannel;
            var15 = var4.bind(var8)(var13);
            var8 = _closure1_slot7;
            var4 = var8.isConnectedOrOverlay;
            var4 = var4.bind(var8)();
            var _closure2_slot8 = var4;
            var4 = global;
            var16 = var4.Date;
            var8 = var16.now;
            var8 = var8.bind(var16)();
            var _closure2_slot9 = var8;
            var8 = null;
            if(!(var8 != var15)) { _fun0012_ip = 199; continue _fun0012 }
 177:
            var16 = var15.type;
            var15 = _closure1_slot30;
            var15 = var15.GUILD_STORE;
            if(!(var16 !== var15)) { _fun0012_ip = 749; continue _fun0012 }
 199:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 53;
            var15 = var18[var15];
            var15 = var16.bind(var1)(var15);
            var15 = var15.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var13 !== var15)) { _fun0012_ip = 747; continue _fun0012 }
 232:
            var16 = _closure1_slot48;
            var15 = var16.log;
            var19 = var4.JSON;
            var18 = var19.stringify;
            var23 = var18.bind(var19)(var12);
            var4 = var4.HermesInternal;
            var21 = var4.concat;
            var30 = 'Fetching messages for ';
            var28 = ' between ';
            var26 = ' and ';
            var24 = '. jump=';
            var29 = var13;
            var27 = var10;
            var25 = var11;
            var4 = var30[var21](var29, var28, var27, var26, var25, var24, var23, var22);
            var4 = var15.bind(var16)(var4);
            var16 = _closure1_slot53;
            var15 = var16._tryFetchMessagesCached;
            var4 = {};
            var4['channelId'] = var13;
            var4['before'] = var11;
            var4['after'] = var10;
            var4['limit'] = var9;
            var4['jump'] = var12;
            var4['focus'] = var14;
            var4['truncate'] = var17;
            var4 = var15.bind(var16)(var4);
            if(var4) { _fun0012_ip = 747; continue _fun0012 }
 369:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 54;
            var4 = var16[var4];
            var4 = var15.bind(var1)(var4);
            var15 = var4.fetchMessages;
            var4 = var15.recordStart;
            var4 = var4.bind(var15)();
            var15 = var8 != var12;
            var4 = undefined;
            if(!var15) { _fun0012_ip = 417; continue _fun0012 }
 414:
            var4 = var12;
 417:
            var12 = var8 == var4;
            if(!var12) { _fun0012_ip = 428; continue _fun0012 }
 424:
            var12 = var8 != var14;
 428:
            if(!var12) { _fun0012_ip = 446; continue _fun0012 }
 431:
            var12 = {};
            var29 = var12;
            var28 = var14;
            var14 = copyDataProperties(var29, var28);
            var4 = var12;
 446:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 55;
            var16 = var15[var12];
            var17 = var14.bind(var1)(var16);
            var16 = var17.getOrCreate;
            var17 = var16.bind(var17)(var13);
            var16 = var17.loadStart;
            var17 = var16.bind(var17)(var4);
            var12 = var15[var12];
            var16 = var14.bind(var1)(var12);
            var12 = var16.commit;
            var12 = var12.bind(var16)(var17);
            var12 = 45;
            var12 = var15[var12];
            var15 = var14.bind(var1)(var12);
            var14 = var15.dispatch;
            var12 = {};
            var16 = 'LOAD_MESSAGES';
            var12['type'] = var16;
            var12 = var14.bind(var15)(var12);
            var12 = var8 == var4;
            var8 = undefined;
            if(var12) { _fun0012_ip = 558; continue _fun0012 }
 553:
            var8 = var4.messageId;
 558:
            _closure2_slot10 = var8;
            var4 = _closure1_slot51;
            var12 = var4.prototype;
            var12 = Object.create(var12, {constructor: {value: var4}});
            var30 = var12;
            var4 = new var30[var4](var29);
            var4 = var4 instanceof Object ? var4 : var12;
            _closure2_slot11 = var4;
            if(var3) { _fun0012_ip = 621; continue _fun0012 }
 593:
            var3 = var5.fetchLocalMessages;
            var30 = var5;
            var29 = var13;
            var28 = var11;
            var27 = var10;
            var26 = var9;
            var25 = var4;
            var3 = var30[var3](var29, var28, var27, var26, var25, var24);
 621:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 51;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            var12 = _closure1_slot29;
            var6 = var12.MESSAGES;
            var6 = var6.bind(var12)(var13);
            var3['url'] = var6;
            var6 = {};
            var6['before'] = var11;
            var6['after'] = var10;
            var6['limit'] = var9;
            var6['around'] = var8;
            var6['preload'] = var7;
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
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                        if(var2) { _fun0013_ip = 96; continue _fun0013 }
 46:
                        var4 = var11.length;
                        var1 = _closure2_slot3;
                        var1 = var4 === var1;
                        if(!var1) { _fun0013_ip = 93; continue _fun0013 }
 62:
                        var4 = var10;
                        if(var4) { _fun0013_ip = 90; continue _fun0013 }
 68:
                        var6 = _closure2_slot1;
                        var6 = var7 == var6;
                        if(!var6) { _fun0013_ip = 87; continue _fun0013 }
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
                        if(var4) { _fun0013_ip = 129; continue _fun0013 }
 107:
                        var1 = var9;
                        if(!var1) { _fun0013_ip = 126; continue _fun0013 }
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
                        if(!(var7 != var1)) { _fun0013_ip = 390; continue _fun0013 }
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
                        if(!(var12 < var1)) { _fun0013_ip = 306; continue _fun0013 }
 304:
                        var2 = false;
 306:
                        var1 = var11.length;
                        var1 = var1 - var12;
                        if(!(var1 < var7)) { _fun0013_ip = 321; continue _fun0013 }
 319:
                        var4 = false;
 321:
                        var8 = var2;
                        var6 = var4;
                        if(!var4) { _fun0013_ip = 390; continue _fun0013 }
 330:
                        var7 = var11.length;
                        var1 = 0;
                        var8 = var2;
                        var6 = var4;
                        if(!(var7 > var1)) { _fun0013_ip = 390; continue _fun0013 }
 347:
                        var12 = _closure1_slot24;
                        var7 = var12.lastMessageId;
                        var3 = _closure2_slot0;
                        var3 = var7.bind(var12)(var3);
                        var1 = var11[var1];
                        var1 = var1.id;
                        var8 = var2;
                        var6 = var4;
                        if(!(var1 === var3)) { _fun0013_ip = 390; continue _fun0013 }
 385:
                        var6 = false;
                        var8 = var2;
 390:
                        var3 = _closure1_slot48;
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
                        var1 = 45;
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
                        if(var6) { _fun0013_ip = 608; continue _fun0013 }
 586:
                        var8 = _closure1_slot7;
                        var7 = var8.lastTimeConnectedChanged;
                        var8 = var7.bind(var8)();
                        var7 = _closure2_slot9;
                        var6 = var8 >= var7;
 608:
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
                var5 = _closure1_slot48;
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
                var1 = 45;
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
 747:
            return var1;
 749:
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 645; continue _fun0014 }
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
                    if(!(var5 != var7)) { _fun0014_ip = 126; continue _fun0014 }
 106:
                    if(!(var5 != var9)) { _fun0014_ip = 126; continue _fun0014 }
 110:
                    var7 = _closure2_slot1;
                    if(!(var5 == var7)) { _fun0014_ip = 126; continue _fun0014 }
 118:
                    var7 = _closure2_slot2;
                    if(!(var5 != var7)) { _fun0014_ip = 173; continue _fun0014 }
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
                    _fun0014_ip = 639; continue _fun0014;
 173:
                    var7 = var6.ready;
                    if(!var7) { _fun0014_ip = 238; continue _fun0014 }
 182:
                    var6 = var6.cached;
                    if(var6) { _fun0014_ip = 238; continue _fun0014 }
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
                    _fun0014_ip = 639; continue _fun0014;
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
                    if(var6) { _fun0014_ip = 642; continue _fun0014 }
 287:
                    if(!(var5 == var2)) { _fun0014_ip = 338; continue _fun0014 }
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
                    _fun0014_ip = 639; continue _fun0014;
 338:
                    var10 = _closure1_slot48;
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
                    if(var5) { _fun0014_ip = 639; continue _fun0014 }
 475:
                    var5 = var2.messages;
                    var6 = var5.length;
                    var5 = 0;
                    if(!(var6 > var5)) { _fun0014_ip = 639; continue _fun0014 }
 495:
                    var5 = var2.messages;
                    var6 = var5.length;
                    var5 = _closure2_slot3;
                    var7 = var6 >= var5;
                    if(!var7) { _fun0014_ip = 541; continue _fun0014 }
 517:
                    var6 = var2.connectionId;
                    var10 = _closure1_slot7;
                    var5 = var10.lastTimeConnectedChanged;
                    var5 = var5.bind(var10)();
                    var7 = var6 === var5;
 541:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 45;
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
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 469; continue _fun0015 }
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
                    if(!(var7 != var3)) { _fun0015_ip = 466; continue _fun0015 }
 90:
                    if(!(var7 != var9)) { _fun0015_ip = 466; continue _fun0015 }
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
                    if(var3) { _fun0015_ip = 466; continue _fun0015 }
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
                    if(var6) { _fun0015_ip = 463; continue _fun0015 }
 193:
                    if(!(var7 != var3)) { _fun0015_ip = 466; continue _fun0015 }
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
                    if(var11) { _fun0015_ip = 256; continue _fun0015 }
 251:
                    var6 = var10.id;
 256:
                    _closure4_slot1 = var6;
                    if(!(var7 != var6)) { _fun0015_ip = 287; continue _fun0015 }
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
                    _fun0015_ip = 293; continue _fun0015;
 287:
                    var7 = var3.messages;
 293:
                    var10 = _closure1_slot48;
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
                    if(!(var5 !== var6)) { _fun0015_ip = 466; continue _fun0015 }
 370:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 45;
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
                    _fun0015_ip = 466; continue _fun0015;
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
            if(var2) { _fun0016_ip = 925; continue _fun0016 }
 74:
            var2 = var8.ready;
            if(!var2) { _fun0016_ip = 925; continue _fun0016 }
 86:
            var14 = null;
            var9 = var14 == var6;
            var3 = undefined;
            var2 = undefined;
            if(var9) { _fun0016_ip = 104; continue _fun0016 }
 99:
            var2 = var6.messageId;
 104:
            if(!(var14 == var2)) { _fun0016_ip = 311; continue _fun0016 }
 111:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0016_ip = 125; continue _fun0016 }
 120:
            var2 = var10.messageId;
 125:
            if(!(var14 == var2)) { _fun0016_ip = 311; continue _fun0016 }
 132:
            if(!(var14 != var13)) { _fun0016_ip = 152; continue _fun0016 }
 136:
            var2 = var8.hasBeforeCached;
            var2 = var2.bind(var8)(var13);
            if(var2) { _fun0016_ip = 246; continue _fun0016 }
 152:
            var9 = var14 == var15;
            if(var9) { _fun0016_ip = 175; continue _fun0016 }
 159:
            var2 = var8.hasAfterCached;
            var2 = var2.bind(var8)(var15);
            var9 = !var2;
 175:
            var2 = !var9;
            if(var9) { _fun0016_ip = 244; continue _fun0016 }
 181:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 45;
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
 244:
            _fun0016_ip = 309; continue _fun0016;
 246:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 45;
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
 309:
            return var2;
 311:
            var9 = var14 == var6;
            var2 = undefined;
            if(var9) { _fun0016_ip = 325; continue _fun0016 }
 320:
            var2 = var6.messageId;
 325:
            if(!(var14 != var2)) { _fun0016_ip = 353; continue _fun0016 }
 329:
            var11 = var8.has;
            var9 = var6.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0016_ip = 860; continue _fun0016 }
 353:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0016_ip = 367; continue _fun0016 }
 362:
            var2 = var10.messageId;
 367:
            var12 = var6;
            if(!(var14 != var2)) { _fun0016_ip = 413; continue _fun0016 }
 374:
            var11 = var8.has;
            var9 = var10.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0016_ip = 795; continue _fun0016 }
 398:
            var2 = {};
            var19 = var2;
            var18 = var10;
            var9 = copyDataProperties(var19, var18);
            var12 = var2;
 413:
            var9 = var14 == var12;
            var2 = undefined;
            if(var9) { _fun0016_ip = 427; continue _fun0016 }
 422:
            var2 = var12.messageId;
 427:
            var2 = var14 != var2;
            var11 = 0;
            if(!var2) { _fun0016_ip = 481; continue _fun0016 }
 436:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 56;
            var2 = var13[var2];
            var13 = var9.bind(var3)(var2);
            var9 = var13.extractTimestamp;
            var15 = var14 == var12;
            var2 = undefined;
            if(var15) { _fun0016_ip = 476; continue _fun0016 }
 471:
            var2 = var12.messageId;
 476:
            var11 = var9.bind(var13)(var2);
 481:
            var2 = var8.first;
            var13 = var2.bind(var8)();
            var2 = var8.last;
            var9 = var2.bind(var8)();
            var2 = var8.hasMoreBefore;
            var2 = !var2;
            if(!var2) { _fun0016_ip = 517; continue _fun0016 }
 513:
            var2 = var14 != var13;
 517:
            if(!var2) { _fun0016_ip = 560; continue _fun0016 }
 520:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 56;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var13.id;
            var15 = var16.bind(var17)(var15);
            var2 = var15 >= var11;
 560:
            if(var2) { _fun0016_ip = 625; continue _fun0016 }
 563:
            var8 = var8.hasMoreAfter;
            var8 = !var8;
            if(!var8) { _fun0016_ip = 579; continue _fun0016 }
 575:
            var8 = var14 != var9;
 579:
            if(!var8) { _fun0016_ip = 622; continue _fun0016 }
 582:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 56;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var9.id;
            var15 = var16.bind(var17)(var15);
            var8 = var15 <= var11;
 622:
            var2 = var8;
 625:
            if(var2) { _fun0016_ip = 728; continue _fun0016 }
 628:
            var8 = var14 != var13;
            if(!var8) { _fun0016_ip = 639; continue _fun0016 }
 635:
            var8 = var14 != var9;
 639:
            if(!var8) { _fun0016_ip = 682; continue _fun0016 }
 642:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 56;
            var14 = var16[var14];
            var15 = var15.bind(var3)(var14);
            var14 = var15.extractTimestamp;
            var13 = var13.id;
            var13 = var14.bind(var15)(var13);
            var8 = var13 < var11;
 682:
            if(!var8) { _fun0016_ip = 725; continue _fun0016 }
 685:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 56;
            var13 = var15[var13];
            var14 = var14.bind(var3)(var13);
            var13 = var14.extractTimestamp;
            var9 = var9.id;
            var9 = var13.bind(var14)(var9);
            var8 = var9 > var11;
 725:
            var2 = var8;
 728:
            if(!var2) { _fun0016_ip = 793; continue _fun0016 }
 731:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 45;
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
 793:
            return var2;
 795:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 45;
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
 860:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 45;
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
 925:
            var1 = false;
            return var1;
        }
    };
    var2['_tryFetchMessagesCached'] = var8;
    var8 = function sendMessage(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0017_ip = 30; continue _fun0017 }
 28:
            var4 = true;
 30:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0017_ip = 40; continue _fun0017 }
 38:
            var3 = {};
 40:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 441; continue _fun0018 }
 12:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var2 = _closure2_slot1;
                        var2 = var2.reaction;
                        if(var2) { _fun0018_ip = 420; continue _fun0018 }
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
                        if(var5) { _fun0018_ip = 417; continue _fun0018 }
 82:
                        var5 = null;
                        if(!(var5 == var2)) { _fun0018_ip = 382; continue _fun0018 }
 91:
                        var6 = _closure2_slot3;
                        var11 = var6.nonce;
                        if(!(var5 == var11)) { _fun0018_ip = 135; continue _fun0018 }
 105:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 49;
                        var5 = var9[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.createNonce;
                        var11 = var5.bind(var6)();
 135:
                        var5 = {};
                        var18 = _closure2_slot3;
                        var19 = var5;
                        var6 = copyDataProperties(var19, var18);
                        var6 = 'nonce';
                        var5[var6] = var11;
                        _closure2_slot3 = var5;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 61;
                        var5 = var9[var5];
                        var9 = var6.bind(var7)(var5);
                        var6 = var9.backgroundify;
                        var5 = function() {
                            var5 = _closure1_slot53;
                            var4 = var5._sendMessage;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var6 = var6.bind(var9)(var5, var7);
                        _closure4_slot0 = var6;
                        var9 = _closure1_slot10;
                        var5 = var9.recordMessageSendAttempt;
                        var10 = _closure2_slot0;
                        var5 = var5.bind(var9)(var10, var11);
                        var9 = _closure1_slot22;
                        var5 = var9.isReady;
                        var5 = var5.bind(var9)(var10);
                        if(var5) { _fun0018_ip = 375; continue _fun0018 }
 245:
                        var5 = _closure2_slot2;
                        if(!var5) { _fun0018_ip = 286; continue _fun0018 }
 252:
                        var9 = _closure2_slot0;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 53;
                        var5 = var11[var5];
                        var5 = var10.bind(var7)(var5);
                        var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(var9 === var5)) { _fun0018_ip = 292; continue _fun0018 }
 286:
                        var5 = var6.bind(var7)();
                        _fun0018_ip = 373; continue _fun0018;
 292:
                        var12 = _closure1_slot49;
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
                                var3 = _closure1_slot49;
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
 373:
                        _fun0018_ip = 379; continue _fun0018;
 375:
                        var5 = var6.bind(var7)();
 379:
                        return var5;
 382:
                        var7 = _closure1_slot53;
                        var6 = var7.sendMessage;
                        var18 = _closure2_slot1;
                        var17 = _closure2_slot2;
                        var16 = _closure2_slot3;
                        var20 = var7;
                        var19 = var2;
                        var3 = var20[var6](var19, var18, var17, var16, var15);
                        return var3;
 417:
                        return var2;
 420:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
 441:
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0019_ip = 141; continue _fun0019 }
 12:
            var1 = {};
            var4 = {};
            var6 = var3.channel;
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            var7 = var2 != var6;
            var5 = undefined;
            if(!var7) { _fun0019_ip = 43; continue _fun0019 }
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
            if(var3) { _fun0019_ip = 134; continue _fun0019 }
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
            _fun0019_ip = 143; continue _fun0019;
 141:
            var1 = {};
 143:
            return var1;
        }
    };
    var2['getSendMessageOptionsForReply'] = var8;
    var8 = function getSendMessageOptionsForConfettiPotion(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
            if(!(var1 != var5)) { _fun0020_ip = 104; continue _fun0020 }
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
            if(var1) { _fun0020_ip = 108; continue _fun0020 }
 104:
            var1 = {};
            _fun0020_ip = 135; continue _fun0020;
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
 135:
            return var1;
        }
    };
    var2['getSendMessageOptionsForConfettiPotion'] = var8;
    var8 = function getSendMessageOptionsForStickers(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arg1;
            var1 = var2.isGif;
            var2 = var2.stickers;
            var3 = null;
            if(!(var3 != var2)) { _fun0021_ip = 44; continue _fun0021 }
 21:
            var4 = var2.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0021_ip = 44; continue _fun0021 }
 32:
            if(var1) { _fun0021_ip = 44; continue _fun0021 }
 35:
            var1 = {};
            var1['stickerIds'] = var2;
            _fun0021_ip = 46; continue _fun0021;
 44:
            var1 = {};
 46:
            return var1;
        }
    };
    var2['getSendMessageOptionsForStickers'] = var8;
    var8 = function getSendMessageOptionsForScheduledMessage(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var2 = var1.scheduledTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0022_ip = 24; continue _fun0022 }
 15:
            var1 = {};
            var1['scheduledTimestamp'] = var2;
            _fun0022_ip = 26; continue _fun0022;
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
        var6 = _closure1_slot53;
        var4 = var6.getSendMessageOptionsForReply;
        var3 = var5.pendingReply;
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot53;
        var4 = var6.getSendMessageOptionsForConfettiPotion;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot53;
        var4 = var6.getSendMessageOptionsForStickers;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var4 = _closure1_slot53;
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
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var6 = arg4;
            var10 = arg5;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 63;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = arg2;
            var9 = var4.bind(var1)(var2);
            var7 = null;
            var2 = var9;
            if(!(var7 != var10)) { _fun0023_ip = 76; continue _fun0023 }
 48:
            var4 = global;
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var5 = '';
            var4 = '\n';
            var2 = var8.bind(var5)(var10, var4, var9);
 76:
            var5 = _closure1_slot53;
            var4 = var5._sendMessage;
            var3 = {};
            var3['content'] = var2;
            var2 = false;
            var3['tts'] = var2;
            var2 = new Array(0);
            var3['validNonShortcutEmojis'] = var2;
            var2 = new Array(0);
            var3['invalidEmojis'] = var2;
            var2 = {};
            var8 = arg3;
            var2['location'] = var8;
            var7 = var7 != var6;
            var1 = undefined;
            if(!var7) { _fun0023_ip = 138; continue _fun0023 }
 135:
            var1 = var6;
 138:
            var2['suggestedInvite'] = var1;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendInvite'] = var8;
    var8 = function sendActivityBookmark(arg1, arg2, arg3, arg4) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var6 = arg4;
            var5 = _closure1_slot53;
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
            var1 = null;
            var7 = var1 != var6;
            var1 = undefined;
            if(!var7) { _fun0024_ip = 73; continue _fun0024 }
 70:
            var1 = var6;
 73:
            var2['suggestedInvite'] = var1;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendActivityBookmark'] = var8;
    var8 = function sendStickers(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var6 = arguments[2];
            var1 = arguments[3];
            var2 = arguments[4];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0025_ip = 19; continue _fun0025 }
 15:
            var6 = '';
 19:
            if(!(var1 === var3)) { _fun0025_ip = 25; continue _fun0025 }
 23:
            var1 = {};
 25:
            if(!(var2 === var3)) { _fun0025_ip = 31; continue _fun0025 }
 29:
            var2 = false;
 31:
            var5 = _closure1_slot53;
            var4 = var5._sendMessage;
            var3 = {};
            var3['content'] = var6;
            var6 = new Array(0);
            var3['invalidEmojis'] = var6;
            var6 = new Array(0);
            var3['validNonShortcutEmojis'] = var6;
            var3['tts'] = var2;
            var2 = {};
            var9 = var2;
            var8 = var1;
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
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var9;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0026_ip = 27; continue _fun0026 }
 25:
            var2 = {};
 27:
            var6 = var2.messageReference;
            var7 = var2.allowedMentions;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 51;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var8 = _closure1_slot29;
            var5 = var8.MESSAGES_GREET;
            var5 = var5.bind(var8)(var10);
            var2['url'] = var5;
            var5 = {};
            var8 = new Array(1);
            var8[0] = var9;
            var5['sticker_ids'] = var8;
            var5['allowed_mentions'] = var7;
            var5['message_reference'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
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
                var8 = _closure1_slot53;
                var7 = var8.receiveMessage;
                var2 = var1.body;
                var2 = var7.bind(var8)(var9, var2);
                var2 = 45;
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
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot48;
                    var4 = var5.log;
                    var3 = 'Failed to send greeting';
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0027_ip = 75; continue _fun0027 }
 42:
                    var6 = _closure1_slot53;
                    var5 = var6.sendClydeError;
                    var4 = _closure2_slot0;
                    var3 = var1.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
 75:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 45;
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
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arguments[2];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0028_ip = 11; continue _fun0028 }
 9:
            var1 = {};
 11:
            var5 = _closure1_slot53;
            var4 = var5._sendMessage;
            var3 = {'content': '', 'tts': false};
            var2 = new Array(0);
            var3['validNonShortcutEmojis'] = var2;
            var2 = new Array(0);
            var3['invalidEmojis'] = var2;
            var2 = {};
            var9 = var2;
            var8 = var1;
            var1 = copyDataProperties(var9, var8);
            var6 = arg2;
            var1 = 'poll';
            var2[var1] = var6;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var2['sendPollMessage'] = var8;
    var8 = function validateMessage(arg1, arg2, arg3) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var3 = arg1;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0029_ip = 131; continue _fun0029 }
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
            if(var2) { _fun0029_ip = 131; continue _fun0029 }
 66:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 43;
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
            _fun0029_ip = 199; continue _fun0029;
 131:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 43;
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
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0030_ip = 1836; continue _fun0030 }
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
                    if(!(var13 == var4)) { _fun0030_ip = 1797; continue _fun0030 }
 138:
                    var5 = _closure2_slot1;
                    var30 = var5.content;
                    _closure4_slot0 = var30;
                    var36 = var5.invalidEmojis;
                    var16 = var5.validNonShortcutEmojis;
                    _closure4_slot1 = var16;
                    var5 = var5.tts;
                    var33 = var11 !== var5;
                    if(!var33) { _fun0030_ip = 183; continue _fun0030 }
 180:
                    var33 = var5;
 183:
                    var16 = _closure2_slot2;
                    var5 = var16.activityAction;
                    var29 = var16.location;
                    _closure4_slot2 = var29;
                    var18 = var16.suggestedInvite;
                    _closure4_slot3 = var18;
                    var25 = var16.stickerIds;
                    _closure4_slot4 = var25;
                    var19 = var16.confettiPotionData;
                    var32 = var16.messageReference;
                    _closure4_slot5 = var32;
                    var31 = var16.allowedMentions;
                    var26 = var16.poll;
                    _closure4_slot6 = var26;
                    var24 = var16.contentInventoryEntry;
                    _closure4_slot7 = var24;
                    var18 = var16.attachments;
                    var22 = var16.attachmentsToUpload;
                    var10 = var16.onAttachmentUploadError;
                    var27 = var16.flags;
                    var28 = var13 != var27;
                    var16 = 0;
                    var38 = 0;
                    if(!var28) { _fun0030_ip = 301; continue _fun0030 }
 298:
                    var38 = var27;
 301:
                    var28 = _closure1_slot1;
                    var34 = _closure1_slot2;
                    var27 = 66;
                    var27 = var34[var27];
                    var27 = var28.bind(var11)(var27);
                    var34 = var27.bind(var11)(var30);
                    var28 = _closure1_slot3;
                    var27 = 2;
                    var34 = var28.bind(var11)(var34, var27);
                    var27 = var34[var16];
                    var28 = 1;
                    var28 = var34[var28];
                    var34 = var30;
                    var30 = var38;
                    if(!var27) { _fun0030_ip = 408; continue _fun0030 }
 359:
                    _closure4_slot0 = var28;
                    var35 = _closure1_slot0;
                    var37 = _closure1_slot2;
                    var27 = 67;
                    var27 = var37[var27];
                    var37 = var35.bind(var11)(var27);
                    var35 = var37.addFlag;
                    var27 = _closure1_slot34;
                    var27 = var27.SUPPRESS_NOTIFICATIONS;
                    var30 = var35.bind(var37)(var38, var27);
                    var34 = var28;
 408:
                    var28 = false;
                    var15 = false;
                    var27 = _closure2_slot2;
                    var27 = var27.messageReference;
                    var37 = var13 == var27;
                    var35 = undefined;
                    if(var37) { _fun0030_ip = 436; continue _fun0030 }
 431:
                    var35 = var27.type;
 436:
                    var27 = _closure1_slot40;
                    var27 = var27.FORWARD;
                    var27 = var35 === var27;
                    _closure4_slot8 = var27;
                    var35 = '';
                    if(!(var35 === var34)) { _fun0030_ip = 536; continue _fun0030 }
 462:
                    if(!(var13 == var5)) { _fun0030_ip = 536; continue _fun0030 }
 466:
                    if(!(var13 == var25)) { _fun0030_ip = 536; continue _fun0030 }
 470:
                    if(!(var13 == var26)) { _fun0030_ip = 536; continue _fun0030 }
 474:
                    if(!(var13 == var24)) { _fun0030_ip = 536; continue _fun0030 }
 478:
                    if(var27) { _fun0030_ip = 536; continue _fun0030 }
 481:
                    if(!(var13 != var18)) { _fun0030_ip = 494; continue _fun0030 }
 485:
                    var27 = var18.length;
                    if(!(var16 === var27)) { _fun0030_ip = 536; continue _fun0030 }
 494:
                    var27 = var22;
                    if(!(var13 != var27)) { _fun0030_ip = 513; continue _fun0030 }
 501:
                    var27 = var22;
                    var27 = var27.length;
                    if(!(!(var27 > var16))) { _fun0030_ip = 534; continue _fun0030 }
 513:
                    var27 = global;
                    var35 = var27.Promise;
                    var27 = var35.resolve;
                    var27 = var27.bind(var35)();
                    return var27;
 534:
                    var15 = true;
 536:
                    if(!(var13 == var32)) { _fun0030_ip = 552; continue _fun0030 }
 540:
                    var27 = _closure1_slot36;
                    var37 = var27.DEFAULT;
                    _fun0030_ip = 562; continue _fun0030;
 552:
                    var27 = _closure1_slot36;
                    var37 = var27.REPLY;
 562:
                    _closure4_slot9 = var37;
                    var27 = _closure2_slot2;
                    var27 = var27.nonce;
                    if(!(var13 == var27)) { _fun0030_ip = 610; continue _fun0030 }
 580:
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var35 = 49;
                    var35 = var39[var35];
                    var38 = var38.bind(var11)(var35);
                    var35 = var38.createNonce;
                    var27 = var35.bind(var38)();
 610:
                    var23 = var27;
                    _closure4_slot10 = var27;
                    _closure4_slot11 = var27;
                    var35 = _closure1_slot1;
                    var38 = _closure1_slot2;
                    var27 = 46;
                    var27 = var38[var27];
                    var35 = var35.bind(var11)(var27);
                    var27 = {};
                    var38 = _closure2_slot0;
                    var27['channelId'] = var38;
                    var27['content'] = var34;
                    var27['tts'] = var33;
                    var27['type'] = var37;
                    var27['messageReference'] = var32;
                    var27['allowedMentions'] = var31;
                    var37 = undefined;
                    if(!(var16 !== var30)) { _fun0030_ip = 683; continue _fun0030 }
 680:
                    var37 = var30;
 683:
                    var27['flags'] = var37;
                    var37 = var23;
                    var27['nonce'] = var37;
                    var38 = _closure1_slot0;
                    var39 = _closure1_slot2;
                    var37 = 68;
                    var37 = var39[var37];
                    var38 = var38.bind(var11)(var37);
                    var37 = var38.createPollServerDataFromCreateRequest;
                    var37 = var37.bind(var38)(var26);
                    var27['poll'] = var37;
                    var20 = var35.bind(var11)(var27);
                    var27 = _closure2_slot2;
                    var27 = var27.eagerDispatch;
                    if(!(var28 !== var27)) { _fun0030_ip = 867; continue _fun0030 }
 750:
                    var28 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    var27 = 69;
                    var27 = var35[var27];
                    var37 = var28.bind(var11)(var27);
                    var35 = var37.updateComboOnMessageSend;
                    var28 = _closure2_slot0;
                    var27 = var20;
                    var27 = var27.id;
                    var27 = var35.bind(var37)(var28, var27);
                    if(!(var13 != var25)) { _fun0030_ip = 837; continue _fun0030 }
 798:
                    var28 = var20;
                    var35 = var25.map;
                    var27 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.getStickerById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var37 = var35.bind(var25)(var27);
                    var35 = var37.filter;
                    var27 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var27 = var35.bind(var37)(var27);
                    var28['sticker_items'] = var27;
 837:
                    var39 = _closure1_slot53;
                    var38 = var39.receiveMessage;
                    var43 = _closure2_slot0;
                    var42 = var20;
                    var40 = _closure2_slot2;
                    var41 = true;
                    var44 = var39;
                    var27 = var44[var38](var43, var42, var41, var40, var39);
 867:
                    var27 = _closure1_slot50;
                    if(var27) { _fun0030_ip = 956; continue _fun0030 }
 874:
                    if(!(var13 != var36)) { _fun0030_ip = 956; continue _fun0030 }
 878:
                    var27 = var36.length;
                    if(!(var27 > var16)) { _fun0030_ip = 956; continue _fun0030 }
 887:
                    var27 = true;
                    _closure1_slot50 = var27;
                    var28 = _closure1_slot26;
                    var27 = var28.getCurrentUser;
                    var35 = var27.bind(var28)();
                    var28 = _closure1_slot53;
                    var27 = var28.validateMessage;
                    var37 = _closure2_slot0;
                    var27 = var27.bind(var28)(var36, var35, var37);
                    var36 = var27.errorMessage;
                    var35 = var27.errorMessageName;
                    var28 = _closure1_slot53;
                    var27 = var28.sendBotMessage;
                    var27 = var27.bind(var28)(var37, var36, var35);
 956:
                    var27 = {};
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot2;
                    var28 = 70;
                    var28 = var36[var28];
                    var28 = var35.bind(var11)(var28);
                    var28 = var28.MessageDataType;
                    var28 = var28.SEND;
                    var27['type'] = var28;
                    var28 = {};
                    var35 = _closure2_slot0;
                    var28['channelId'] = var35;
                    var28['content'] = var34;
                    var34 = var23;
                    var28['nonce'] = var34;
                    var28['tts'] = var33;
                    var28['message_reference'] = var32;
                    var28['allowed_mentions'] = var31;
                    var28['flags'] = var30;
                    var28['analyticsLocation'] = var29;
                    var27['message'] = var28;
                    var14 = var27;
                    _closure4_slot13 = var27;
                    if(!(var13 != var5)) { _fun0030_ip = 1227; continue _fun0030 }
 1058:
                    var28 = var13 == var5;
                    var27 = undefined;
                    if(var28) { _fun0030_ip = 1079; continue _fun0030 }
 1067:
                    var28 = var5.activity;
                    var27 = var28.session_id;
 1079:
                    var30 = var5.type;
                    var28 = _closure1_slot44;
                    var29 = var28.JOIN_REQUEST;
                    var28 = var27;
                    if(!(var30 !== var29)) { _fun0030_ip = 1122; continue _fun0030 }
 1101:
                    var28 = var27;
                    if(!(var13 == var28)) { _fun0030_ip = 1122; continue _fun0030 }
 1108:
                    var29 = _closure1_slot18;
                    var27 = var29.getSessionId;
                    var28 = var27.bind(var29)();
 1122:
                    if(!(var13 != var28)) { _fun0030_ip = 1227; continue _fun0030 }
 1126:
                    var27 = {};
                    var29 = var5.type;
                    var27['type'] = var29;
                    var27['session_id'] = var28;
                    var28 = var5.activity;
                    var5 = var28.party;
                    var5 = var13 != var5;
                    if(!var5) { _fun0030_ip = 1176; continue _fun0030 }
 1161:
                    var29 = var28.party;
                    var29 = var29.id;
                    var5 = var13 != var29;
 1176:
                    if(!var5) { _fun0030_ip = 1196; continue _fun0030 }
 1179:
                    var5 = var28.party;
                    var5 = var5.id;
                    var27['party_id'] = var5;
 1196:
                    var5 = var14;
                    var29 = var5.message;
                    var28 = var28.application_id;
                    var29['application_id'] = var28;
                    var5 = var5.message;
                    var5['activity'] = var27;
 1227:
                    if(!(var13 != var26)) { _fun0030_ip = 1245; continue _fun0030 }
 1231:
                    var5 = var14;
                    var5 = var5.message;
                    var5['poll'] = var26;
 1245:
                    if(!(var13 != var25)) { _fun0030_ip = 1263; continue _fun0030 }
 1249:
                    var5 = var14;
                    var5 = var5.message;
                    var5['sticker_ids'] = var25;
 1263:
                    var25 = _closure1_slot11;
                    var5 = var25.isEnabled;
                    var5 = var5.bind(var25)();
                    if(!var5) { _fun0030_ip = 1298; continue _fun0030 }
 1280:
                    var5 = var14;
                    var25 = var5.message;
                    var5 = true;
                    var25['has_poggermode_enabled'] = var5;
 1298:
                    if(!(var13 != var24)) { _fun0030_ip = 1316; continue _fun0030 }
 1302:
                    var5 = var14;
                    var5 = var5.message;
                    var5['content_inventory_entry'] = var24;
 1316:
                    if(!(var13 != var19)) { _fun0030_ip = 1377; continue _fun0030 }
 1320:
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
 1377:
                    var5 = var13 != var18;
                    if(!var5) { _fun0030_ip = 1393; continue _fun0030 }
 1384:
                    var19 = var18.length;
                    var5 = var19 > var16;
 1393:
                    if(!var5) { _fun0030_ip = 1410; continue _fun0030 }
 1396:
                    var5 = var14;
                    var5 = var5.message;
                    var5['attachments'] = var18;
 1410:
                    var5 = var22;
                    if(!(var13 != var5)) { _fun0030_ip = 1610; continue _fun0030 }
 1420:
                    var5 = var22;
                    var5 = var5.length;
                    if(!(var5 > var16)) { _fun0030_ip = 1610; continue _fun0030 }
 1435: // try_start_0
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
                    if(!var21) { _fun0030_ip = 1506; continue _fun0030 }
 1504:
                    var20 = undefined;
 1506:
                    var5['shouldUploadFailureSendNotification'] = var20;
                    var5 = var18.bind(var19)(var5);
                    SaveGenerator(address=1520);
 1518:
                    return var5;
 1520:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=17);
                    if(var18) { _fun0030_ip = 1652; continue _fun0030 }
 1529:
                    var17 = var5;
                    if(!(var13 != var5)) { _fun0030_ip = 1649; continue _fun0030 }
 1536:
                    var12 = var17.attachments;
                    var17 = var17.uploader;
                    _closure4_slot12 = var17;
                    if(!var15) { _fun0030_ip = 1574; continue _fun0030 }
 1555:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0030_ip = 1646; continue _fun0030 }
 1562:
                    var15 = var12;
                    var15 = var15.length;
                    if(!(var16 !== var15)) { _fun0030_ip = 1646; continue _fun0030 }
 1574:
                    var15 = var12;
                    if(!(var13 != var15)) { _fun0030_ip = 1610; continue _fun0030 }
 1581:
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
 1610: // try_end0
                    var12 = global;
                    var15 = var12.Promise;
                    var12 = var15.prototype;
                    var14 = Object.create(var12, {constructor: {value: var15}});
                    var43 = function(arg1, arg2) {
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
                        var9 = _closure1_slot49;
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
                            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                                var3 = arg1;
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var4 = var1.bind(var2)();
                                var2 = _closure5_slot2;
                                var15 = var4 - var2;
                                var2 = var3.ok;
                                if(var2) { _fun0031_ip = 1211; continue _fun0031 }
 48:
                                var9 = _closure1_slot48;
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
                                if(var12) { _fun0031_ip = 103; continue _fun0031 }
 98:
                                var2 = var11.code;
 103:
                                var6['code'] = var2;
                                var2 = var3.err;
                                var6['error'] = var2;
                                var2 = 'Failed to send message';
                                var2 = var8.bind(var9)(var2, var6);
                                var2 = var3.hasErr;
                                if(var2) { _fun0031_ip = 720; continue _fun0031 }
 141:
                                var6 = var3.status;
                                var2 = 400;
                                var8 = var6 >= var2;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0031_ip = 749; continue _fun0031 }
 166:
                                var9 = var3.status;
                                var8 = 500;
                                var8 = var9 < var8;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0031_ip = 749; continue _fun0031 }
 191:
                                var8 = var3.body;
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0031_ip = 749; continue _fun0031 }
 206:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.SLOWMODE_RATE_LIMITED;
                                if(!(var9 !== var8)) { _fun0031_ip = 579; continue _fun0031 }
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
                                if(var8) { _fun0031_ip = 483; continue _fun0031 }
 285:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(var9 !== var8)) { _fun0031_ip = 434; continue _fun0031 }
 312:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot27;
                                var8 = var8.EXPLICIT_CONTENT;
                                if(!(var9 !== var8)) { _fun0031_ip = 417; continue _fun0031 }
 336:
                                var8 = _closure4_slot6;
                                var8 = var7 != var8;
                                if(var8) { _fun0031_ip = 354; continue _fun0031 }
 350:
                                var8 = _closure4_slot8;
 354:
                                if(var8) { _fun0031_ip = 365; continue _fun0031 }
 357:
                                var9 = _closure4_slot7;
                                var8 = var7 != var9;
 365:
                                var11 = undefined;
                                var2 = false;
                                if(var8) { _fun0031_ip = 749; continue _fun0031 }
 375:
                                var13 = _closure1_slot53;
                                var12 = var13.sendClydeError;
                                var9 = _closure2_slot0;
                                var8 = var3.body;
                                var8 = var8.code;
                                var8 = var12.bind(var13)(var9, var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0031_ip = 749; continue _fun0031;
 417:
                                var8 = _closure1_slot46;
                                var11 = var8.EXPLICIT_CONTENT;
                                var2 = false;
                                _fun0031_ip = 749; continue _fun0031;
 434:
                                var9 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var8 = 45;
                                var8 = var12[var8];
                                var12 = var9.bind(var5)(var8);
                                var9 = var12.dispatch;
                                var8 = {};
                                var13 = 'POGGERMODE_TEMPORARILY_DISABLED';
                                var8['type'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var11 = undefined;
                                var2 = false;
                                _fun0031_ip = 749; continue _fun0031;
 483:
                                var9 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var8 = 45;
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
                                _fun0031_ip = 749; continue _fun0031;
 579:
                                var8 = var3.body;
                                var14 = var8.retry_after;
                                var8 = var7 != var14;
                                if(!var8) { _fun0031_ip = 603; continue _fun0031 }
 597:
                                var9 = 0;
                                var8 = var14 > var9;
 603:
                                var11 = undefined;
                                var2 = false;
                                if(!var8) { _fun0031_ip = 749; continue _fun0031 }
 613:
                                var16 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var8 = 45;
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
                                _fun0031_ip = 749; continue _fun0031;
 720:
                                var6 = var3.err;
                                var8 = var6.code;
                                var2 = false;
                                var6 = 'ABORTED';
                                var11 = undefined;
                                if(!(var6 === var8)) { _fun0031_ip = 749; continue _fun0031 }
 745:
                                var2 = true;
                                var11 = undefined;
 749:
                                if(var2) { _fun0031_ip = 1164; continue _fun0031 }
 755:
                                var6 = _closure4_slot12;
                                if(!(var7 != var6)) { _fun0031_ip = 852; continue _fun0031 }
 766:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 45;
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
                                if(var6) { _fun0031_ip = 951; continue _fun0031 }
 861:
                                var6 = _closure1_slot46;
                                var6 = var6.EXPLICIT_CONTENT;
                                if(!(var11 === var6)) { _fun0031_ip = 951; continue _fun0031 }
 875:
                                var12 = _closure1_slot53;
                                var9 = var12.sendExplicitMediaClydeError;
                                var8 = _closure2_slot0;
                                var6 = var3.body;
                                var13 = var7 == var6;
                                var7 = undefined;
                                if(var13) { _fun0031_ip = 912; continue _fun0031 }
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
                                var6 = 45;
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
                                if(var11) { _fun0031_ip = 1073; continue _fun0031 }
 1068:
                                var9 = var3.status;
 1073:
                                var6['failureCode'] = var9;
                                var11 = var3.hasErr;
                                var9 = undefined;
                                if(!var11) { _fun0031_ip = 1100; continue _fun0031 }
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
                                    var6 = _closure1_slot48;
                                    var4 = var6.log;
                                    var3 = var5.nonce;
                                    var2 = 'Cancelling pending message';
                                    var2 = var4.bind(var6)(var2, var3);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 45;
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
                                _fun0031_ip = 1197; continue _fun0031;
 1164:
                                var9 = _closure1_slot53;
                                var8 = var9.deleteMessage;
                                var7 = _closure2_slot0;
                                var6 = _closure4_slot11;
                                var2 = true;
                                var2 = var8.bind(var9)(var7, var6, var2);
 1197:
                                var2 = _closure5_slot1;
                                var2 = var2.bind(var5)(var3);
                                _fun0031_ip = 2545; continue _fun0031;
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
                                var12 = _closure1_slot53;
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
                                if(!(var9 != var5)) { _fun0031_ip = 1486; continue _fun0031 }
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
                                if(!(var9 != var5)) { _fun0031_ip = 1625; continue _fun0031 }
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
                                if(!(var6 === var5)) { _fun0031_ip = 2108; continue _fun0031 }
 1667:
                                var5 = var3.body;
                                var17 = var5.id;
                                var13 = _closure2_slot0;
                                var5 = _closure4_slot5;
                                var5 = var9 == var5;
                                var11 = undefined;
                                if(var5) { _fun0031_ip = 1704; continue _fun0031 }
 1694:
                                var5 = _closure4_slot5;
                                var11 = var5.message_id;
 1704:
                                var6 = _closure1_slot13;
                                var5 = var6.getPendingReplyActionSource;
                                var6 = var5.bind(var6)(var13);
                                var5 = 'message_swipe';
                                if(!(var5 !== var6)) { _fun0031_ip = 1936; continue _fun0031 }
 1734:
                                var5 = 'message_shortcut';
                                if(!(var5 === var6)) { _fun0031_ip = 2108; continue _fun0031 }
 1747:
                                var6 = _closure1_slot19;
                                var5 = var6.getChannel;
                                var18 = var5.bind(var6)(var13);
                                var6 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 42;
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
                                if(var16) { _fun0031_ip = 1821; continue _fun0031 }
 1816:
                                var15 = var18.guild_id;
 1821:
                                var5['guild_id'] = var15;
                                var5['original_message_id'] = var11;
                                var15 = 'reply';
                                var5['action'] = var15;
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var19 = 31;
                                var15 = var15[var19];
                                var20 = var16.bind(var2)(var15);
                                var16 = var20.collectGuildAnalyticsMetadata;
                                var21 = var9 == var18;
                                var15 = undefined;
                                if(var21) { _fun0031_ip = 1878; continue _fun0031 }
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
                                _fun0031_ip = 2108; continue _fun0031;
 1936:
                                var5 = var9 != var11;
                                var16 = null;
                                if(!var5) { _fun0031_ip = 1961; continue _fun0031 }
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
                                var5 = 42;
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
                                if(var17) { _fun0031_ip = 2048; continue _fun0031 }
 2043:
                                var13 = var15.guild_id;
 2048:
                                var5['guild_id'] = var13;
                                var13 = 'reply';
                                var5['swipe_action'] = var13;
                                var13 = var9 != var14;
                                if(!var13) { _fun0031_ip = 2097; continue _fun0031 }
 2068:
                                var15 = var14.id;
                                var17 = var9 == var16;
                                var14 = undefined;
                                if(var17) { _fun0031_ip = 2093; continue _fun0031 }
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
                                var6 = 45;
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
                                if(!var12) { _fun0031_ip = 2364; continue _fun0031 }
 2360:
                                var5 = _closure4_slot2;
 2364:
                                var11['location'] = var5;
                                var5 = _closure4_slot3;
                                var11['suggested'] = var5;
                                var5 = function trackCodedLinks(arg1) {
                                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                                        var3 = arg1;
                                        var4 = var3.content;
                                        var1 = var3.channelId;
                                        var _closure7_slot0 = var1;
                                        var1 = var3.messageId;
                                        var _closure7_slot1 = var1;
                                        var1 = var3.location;
                                        var _closure7_slot2 = var1;
                                        var5 = var3.suggested;
                                        var1 = undefined;
                                        if(!(var5 === var1)) { _fun0032_ip = 51; continue _fun0032 }
 49:
                                        var5 = null;
 51:
                                        var _closure7_slot3 = var5;
                                        var3 = var3.overrideProperties;
                                        if(!(var3 === var1)) { _fun0032_ip = 67; continue _fun0032 }
 65:
                                        var3 = {};
 67:
                                        var _closure7_slot4 = var3;
                                        var _closure7_slot5 = var1;
                                        var6 = _closure1_slot18;
                                        var5 = var6.getId;
                                        var5 = var5.bind(var6)();
                                        _closure7_slot5 = var5;
                                        var5 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var3 = 29;
                                        var3 = var6[var3];
                                        var3 = var5.bind(var1)(var3);
                                        var4 = var3.bind(var1)(var4);
                                        var3 = var4.forEach;
                                        var2 = function(arg1) {
                                            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                                                var1 = arg1;
                                                var8 = var1.type;
                                                var4 = var1.code;
                                                var7 = var1.url;
                                                var5 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var6 = 30;
                                                var3 = var1[var6];
                                                var1 = undefined;
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.INVITE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1367; continue _fun0033 }
 62:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.TEMPLATE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1243; continue _fun0033 }
 98:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.BUILD_OVERRIDE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 134:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.MANUAL_BUILD_OVERRIDE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 170:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EVENT;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 206:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.CHANNEL_LINK;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 242:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_PROFILE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1154; continue _fun0033 }
 278:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1111; continue _fun0033 }
 314:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1023; continue _fun0033 }
 350:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.ACTIVITY_BOOKMARK;
                                                if(!(var8 !== var3)) { _fun0033_ip = 907; continue _fun0033 }
 386:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(var8 !== var3)) { _fun0033_ip = 841; continue _fun0033 }
 422:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.GUILD_PRODUCT;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 458:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.SERVER_SHOP;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 494:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.QUESTS_EMBED;
                                                if(!(var8 !== var3)) { _fun0033_ip = 747; continue _fun0033 }
 530:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_OAUTH2_LINK;
                                                if(!(var8 !== var3)) { _fun0033_ip = 636; continue _fun0033 }
 563:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.COLLECTIBLES_SHOP;
                                                if(!(var8 !== var3)) { _fun0033_ip = 1428; continue _fun0033 }
 599:
                                                var3 = global;
                                                var5 = var3.Error;
                                                var3 = var3.HermesInternal;
                                                var6 = var3.concat;
                                                var3 = 'Unknown coded link type: ';
                                                var3 = var6.bind(var3)(var8);
                                                var3 = var5.bind(var1)(var3);
                                                throw var3;
 636:
                                                var5 = _closure1_slot1;
                                                var9 = _closure1_slot2;
                                                var3 = 31;
                                                var3 = var9[var3];
                                                var8 = var5.bind(var1)(var3);
                                                var6 = var8.trackWithMetadata;
                                                var3 = _closure1_slot28;
                                                var5 = var3.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                var3 = {};
                                                var3['application_id'] = var4;
                                                var3 = var6.bind(var8)(var5, var3);
                                                var5 = _closure1_slot0;
                                                var3 = 33;
                                                var6 = var9[var3];
                                                var8 = var5.bind(var1)(var6);
                                                var6 = var8.trackAppEmbedLinkSent;
                                                var3 = var9[var3];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.LinkType;
                                                var5 = var3.OAUTH;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var8)(var4, var5, var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 747:
                                                var9 = _closure1_slot0;
                                                var10 = _closure1_slot2;
                                                var3 = 36;
                                                var3 = var10[var3];
                                                var6 = var9.bind(var1)(var3);
                                                var5 = var6.trackQuestEvent;
                                                var3 = {};
                                                var3['questId'] = var4;
                                                var8 = _closure1_slot28;
                                                var8 = var8.QUEST_LINK_SHARED;
                                                var3['event'] = var8;
                                                var8 = true;
                                                var3['trackGuildAndChannelMetadata'] = var8;
                                                var8 = 37;
                                                var8 = var10[var8];
                                                var8 = var9.bind(var1)(var8);
                                                var8 = var8.QuestContent;
                                                var8 = var8.QUESTS_EMBED;
                                                var3['sourceQuestContent'] = var8;
                                                var3 = var5.bind(var6)(var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 841:
                                                var5 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var3 = 33;
                                                var6 = var9[var3];
                                                var8 = var5.bind(var1)(var6);
                                                var6 = var8.trackAppEmbedLinkSent;
                                                var3 = var9[var3];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.LinkType;
                                                var5 = var3.ACTIVITY_INVITE;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var8)(var4, var5, var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 907:
                                                var6 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var3 = 35;
                                                var3 = var9[var3];
                                                var5 = var6.bind(var1)(var3);
                                                var3 = var5.extractActivityBookmarkParams;
                                                var3 = var3.bind(var5)(var7);
                                                var5 = 33;
                                                var7 = var9[var5];
                                                var8 = var6.bind(var1)(var7);
                                                var7 = var8.trackAppEmbedLinkSent;
                                                var5 = var9[var5];
                                                var5 = var6.bind(var1)(var5);
                                                var5 = var5.LinkType;
                                                var6 = var5.ACTIVITY;
                                                var5 = var3.referrerId;
                                                var9 = null;
                                                if(!(var9 == var5)) { _fun0033_ip = 996; continue _fun0033 }
 989:
                                                var5 = _closure7_slot5;
 996:
                                                var11 = var3.customId;
                                                var15 = var8;
                                                var14 = var4;
                                                var13 = var6;
                                                var12 = var5;
                                                var3 = var15[var7](var14, var13, var12, var11, var10);
                                                _fun0033_ip = 1428; continue _fun0033;
 1023:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 34;
                                                var3 = var6[var3];
                                                var5 = var5.bind(var1)(var3);
                                                var3 = var5.parseStorefrontSkuCodedLink;
                                                var3 = var3.bind(var5)(var4);
                                                var5 = null;
                                                if(!(var5 != var3)) { _fun0033_ip = 1428; continue _fun0033 }
 1063:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var5 = 32;
                                                var5 = var7[var5];
                                                var7 = var6.bind(var1)(var5);
                                                var6 = var7.trackAppDirectoryProfileEmbed;
                                                var5 = var3.applicationId;
                                                var3 = 'storefront_sku';
                                                var3 = var6.bind(var7)(var5, var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 1111:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var6[var3];
                                                var6 = var5.bind(var1)(var3);
                                                var5 = var6.trackAppDirectoryProfileEmbed;
                                                var3 = 'storefront';
                                                var3 = var5.bind(var6)(var4, var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 1154:
                                                var5 = _closure1_slot0;
                                                var8 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var8[var3];
                                                var6 = var5.bind(var1)(var3);
                                                var3 = var6.trackAppDirectoryProfileEmbed;
                                                var3 = var3.bind(var6)(var4);
                                                var3 = 33;
                                                var6 = var8[var3];
                                                var7 = var5.bind(var1)(var6);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = var8[var3];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.LinkType;
                                                var5 = var3.APP_DISCOVERY;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0033_ip = 1428; continue _fun0033;
 1243:
                                                var5 = _closure1_slot9;
                                                var3 = var5.getGuildTemplate;
                                                var8 = var3.bind(var5)(var4);
                                                var3 = null;
                                                if(!(var3 != var8)) { _fun0033_ip = 1365; continue _fun0033 }
 1264:
                                                var5 = var8.state;
                                                var3 = _closure1_slot45;
                                                var3 = var3.RESOLVING;
                                                if(!(var5 !== var3)) { _fun0033_ip = 1365; continue _fun0033 }
 1283:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var3 = 31;
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
                                                _fun0033_ip = 1428; continue _fun0033;
 1365:
                                                return var1;
 1367:
                                                var3 = _closure1_slot54;
                                                var2 = {};
                                                var2['inviteKey'] = var4;
                                                var5 = _closure7_slot0;
                                                var2['channelId'] = var5;
                                                var5 = _closure7_slot1;
                                                var2['messageId'] = var5;
                                                var5 = _closure7_slot2;
                                                var2['location'] = var5;
                                                var5 = _closure7_slot3;
                                                var2['suggested'] = var5;
                                                var4 = _closure7_slot4;
                                                var2['overrideProperties'] = var4;
                                                var2 = var3.bind(var1)(var2);
 1428:
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
                                if(!var5) { _fun0031_ip = 2420; continue _fun0031 }
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
                                    var1 = 41;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.findGiftCodes;
                                    var3 = arg1;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                                            var4 = _closure1_slot19;
                                            var3 = var4.getChannel;
                                            var2 = _closure7_slot0;
                                            var6 = var3.bind(var4)(var2);
                                            var2 = null;
                                            if(!(var2 != var6)) { _fun0034_ip = 145; continue _fun0034 }
 30:
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var2 = 31;
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
                                if(!(var9 != var5)) { _fun0031_ip = 2536; continue _fun0031 }
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
                    var44 = var14;
                    var12 = new var44[var15](var43, var42);
                    var12 = var12 instanceof Object ? var12 : var14;
                    return var12;
 1646:
                    return var11;
 1649:
                    return var11;
 1652:
                    return var5;
 1655: // catch_target0
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
                    if(var16) { _fun0030_ip = 1751; continue _fun0030 }
 1742:
                    var16 = var7;
                    var15 = var16.msg;
 1751:
                    var5['errorMessage'] = var15;
                    var5 = var12.bind(var14)(var5);
                    var12 = var10;
                    var12 = var13 == var12;
                    var5 = var12;
                    if(var12) { _fun0030_ip = 1792; continue _fun0030 }
 1774:
                    var43 = var9;
                    var42 = var8;
                    var41 = var7;
                    var40 = var6;
                    var44 = undefined;
                    var5 = var44[var10](var43, var42, var41, var40, var39);
 1792:
                    var5 = undefined;
                    return var5;
 1797:
                    var6 = _closure1_slot49;
                    var5 = var6.info;
                    var3 = 'Converting channel to a private channel';
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var4 = _closure1_slot49;
                        var3 = var4.info;
                        var2 = 'Finished converting channel to a private channel';
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure1_slot53;
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
 1836:
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
        var1 = 45;
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
    var8 = function updateEditMessage(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 45;
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
        var1 = 45;
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
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var2 = var2.content;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0035_ip = 536; continue _fun0035 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var11 = _closure2_slot1;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot20;
                    var2 = var5.getEditActionSource;
                    var5 = var2.bind(var5)(var6);
                    var2 = 'message_swipe';
                    if(!(var2 === var5)) { _fun0035_ip = 161; continue _fun0035 }
 59:
                    var5 = _closure1_slot19;
                    var2 = var5.getChannel;
                    var12 = var2.bind(var5)(var6);
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 42;
                    var2 = var8[var2];
                    var9 = var5.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot28;
                    var5 = var2.MESSAGE_SWIPE_ACTION_SENT;
                    var2 = {};
                    var2['message_id'] = var11;
                    var2['channel_id'] = var6;
                    var11 = null;
                    var13 = var11 == var12;
                    var11 = undefined;
                    if(var13) { _fun0035_ip = 135; continue _fun0035 }
 130:
                    var11 = var12.guild_id;
 135:
                    var2['guild_id'] = var11;
                    var11 = 'edit';
                    var2['swipe_action'] = var11;
                    var11 = true;
                    var2['is_own_message'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
 161:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 81;
                    var2 = var8[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address=196);
 194:
                    return var2;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0035_ip = 533; continue _fun0035 }
 205:
                    var11 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var6 = _closure1_slot22;
                    var5 = var6.getMessage;
                    var12 = var5.bind(var6)(var11, var9);
                    var6 = null;
                    var8 = var6 != var12;
                    var5 = undefined;
                    if(!var8) { _fun0035_ip = 382; continue _fun0035 }
 243:
                    var13 = var12.type;
                    var8 = _closure1_slot36;
                    var8 = var8.REPLY;
                    var5 = undefined;
                    if(!(var13 === var8)) { _fun0035_ip = 382; continue _fun0035 }
 264:
                    var14 = _closure1_slot14;
                    var13 = var14.getMessageByReference;
                    var8 = var12.messageReference;
                    var8 = var13.bind(var14)(var8);
                    var14 = var8.state;
                    var13 = _closure1_slot15;
                    var13 = var13.LOADED;
                    var5 = undefined;
                    if(!(var14 === var13)) { _fun0035_ip = 382; continue _fun0035 }
 306:
                    var13 = var12.mentions;
                    var12 = var13.includes;
                    var8 = var8.message;
                    var8 = var8.author;
                    var8 = var8.id;
                    var8 = var12.bind(var13)(var8);
                    var5 = undefined;
                    if(var8) { _fun0035_ip = 382; continue _fun0035 }
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
                    var5 = var8;
 382:
                    var12 = _closure1_slot22;
                    var8 = var12.getMessage;
                    var13 = var8.bind(var12)(var11, var9);
                    var6 = var6 != var13;
                    if(!var6) { _fun0035_ip = 426; continue _fun0035 }
 405:
                    var12 = var13.hasFlag;
                    var8 = _closure1_slot34;
                    var8 = var8.CROSSPOSTED;
                    var6 = var12.bind(var13)(var8);
 426:
                    var8 = {};
                    var8['channelId'] = var11;
                    var8['messageId'] = var9;
                    var7 = _closure2_slot2;
                    var8['content'] = var7;
                    var8['isCrossposted'] = var6;
                    var8['allowed_mentions'] = var5;
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
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                            var8 = arg1;
                            var1 = var8.hasErr;
                            var9 = !var1;
                            if(!var9) { _fun0036_ip = 66; continue _fun0036 }
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
                            if(!var9) { _fun0036_ip = 202; continue _fun0036 }
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
                            var1 = 45;
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
                            var1 = 82;
                            var3 = var12[var1];
                            var1 = undefined;
                            var3 = var11.bind(var1)(var3);
                            var5 = var3.AccessibilityAnnouncer;
                            var4 = var5.announce;
                            var3 = 43;
                            var6 = var12[var3];
                            var6 = var11.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var3 = var12[var3];
                            var3 = var11.bind(var1)(var3);
                            var3 = var3.t;
                            if(var10) { _fun0036_ip = 327; continue _fun0036 }
 284:
                            if(var9) { _fun0036_ip = 307; continue _fun0036 }
 287:
                            var9 = var3.0x1HBA;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0036_ip = 345; continue _fun0036;
 307:
                            var9 = var3.Hym4i4;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0036_ip = 345; continue _fun0036;
 327:
                            var3 = var3.Atp7FB;
                            var3 = var6.bind(var7)(var3);
                            var3 = var4.bind(var5)(var3);
 345:
                            var7 = _closure1_slot53;
                            var6 = var7.endEditMessage;
                            var4 = _closure2_slot0;
                            var9 = var8.hasErr;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 376; continue _fun0036 }
 373:
                            var3 = var8;
 376:
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure1_slot53;
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
 533:
                    return var2;
 536:
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
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0037_ip = 168; continue _fun0037 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 81;
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
                    if(var4) { _fun0037_ip = 165; continue _fun0037 }
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
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0038_ip = 163; continue _fun0038 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 81;
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
                    if(var4) { _fun0038_ip = 160; continue _fun0038 }
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
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0039_ip = 27; continue _fun0039 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0040_ip = 191; continue _fun0040 }
 12:
                        var3 = function dispatchDelete() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 45;
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
                                var1 = 82;
                                var2 = var8[var1];
                                var1 = undefined;
                                var2 = var7.bind(var1)(var2);
                                var4 = var2.AccessibilityAnnouncer;
                                var3 = var4.announce;
                                var2 = 43;
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
                        if(var2) { _fun0040_ip = 180; continue _fun0040 }
 34:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 81;
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
                        if(var5) { _fun0040_ip = 177; continue _fun0040 }
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
                        _fun0040_ip = 186; continue _fun0040;
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
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var5 = this;
            var3 = var1.loggingName;
            var2 = null;
            if(!(var2 != var3)) { _fun0041_ip = 94; continue _fun0041 }
 18:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 31;
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
        var1 = 45;
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
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var5 = arg1;
                var2 = var5.status;
                var1 = 429;
                if(!(var1 !== var2)) { _fun0042_ip = 82; continue _fun0042 }
 18:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 43;
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
                _fun0042_ip = 189; continue _fun0042;
 82:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 43;
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
                var1 = 83;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 43;
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
    var _closure1_slot53 = var2;
    var4 = 84;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/MessageActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();