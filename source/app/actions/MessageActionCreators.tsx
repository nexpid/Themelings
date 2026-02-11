// app/actions/MessageActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot56;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot56;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var7 = function trackInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.inviteKey;
            var9 = var1.channelId;
            var7 = var1.messageId;
            var10 = var1.location;
            var5 = var1.inviteAnalyticsMetadata;
            var3 = var1.overrideProperties;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = {};
case 36:
            var6 = _closure1_slot17;
            var4 = var6.getId;
            var15 = var4.bind(var6)();
            var6 = _closure1_slot20;
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
            if(!var8) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 40;
            var6 = var14[var6];
            var11 = var11.bind(var1)(var6);
            var6 = var11.isEmbeddedApplicationInvite;
            var8 = var6.bind(var11)(var13);
case 38:
            var6 = var12 == var13;
            var14 = undefined;
            if(var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var6 = var13.target_application;
            var11 = var12 == var6;
            var14 = undefined;
            if(var11) { _fun0004_ip = 40; continue _fun0004 }
case 42:
            var14 = var6.id;
case 40:
            var6 = var12 != var14;
            if(!var6) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var6 = var8;
case 43:
            if(!var6) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 33;
            var6 = var11[var6];
            var11 = var8.bind(var1)(var6);
            var8 = var11.trackAppEmbedLinkSent;
            var6 = _closure1_slot44;
            var6 = var6.ACTIVITY_INVITE;
            var6 = var8.bind(var11)(var14, var6, var15);
case 45:
            var8 = _closure1_slot18;
            var6 = var8.getChannel;
            var6 = var6.bind(var8)(var9);
            if(!(var12 == var6)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var8 = {};
            var9 = var12 != var13;
            if(!var9) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var14 = var13.state;
            var11 = _closure1_slot32;
            var11 = var11.RESOLVED;
            var9 = var14 === var11;
case 49:
            if(!var9) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var11 = var13.inviter;
            var9 = var12 != var11;
case 51:
            if(!var9) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var9 = var13.inviter;
            var9 = var9.id;
            var8['invite_inviter_id'] = var9;
            var9 = var13.target_application;
            if(!(var12 != var9)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = var13.target_application;
            var9 = var9.id;
            var8['application_id'] = var9;
case 55:
            var14 = {};
            var20 = var14;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'location';
            var14[var8] = var10;
            var8 = _closure1_slot30;
            var9 = var8.FRIEND_INVITE;
            var8 = 'invite_type';
            var14[var8] = var9;
            var9 = var4.baseCode;
            var8 = 'invite_code';
            var14[var8] = var9;
            var8 = 'message_id';
            var14[var8] = var7;
            var8 = _closure1_slot31;
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
            var8 = 31;
            var8 = var11[var8];
            var11 = var9.bind(var1)(var8);
            var9 = var11.trackWithMetadata;
            var8 = _closure1_slot27;
            var8 = var8.INVITE_SENT;
            var8 = var9.bind(var11)(var8, var14);
            _fun0004_ip = 53; continue _fun0004;
case 47:
            var8 = var6.isMultiUserDM;
            var8 = var8.bind(var6)();
            if(var8) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var8 = var6.isPrivate;
            var8 = var8.bind(var6)();
            var14 = null;
            if(var8) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var8 = _closure1_slot30;
            var14 = var8.SERVER_INVITE;
            _fun0004_ip = 59; continue _fun0004;
case 57:
            var8 = _closure1_slot30;
            var14 = var8.GDM_INVITE;
case 59:
            var8 = {};
            var9 = var14;
            if(!(var12 != var13)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var15 = var13.state;
            var11 = _closure1_slot32;
            var11 = var11.RESOLVED;
            var9 = var14;
            if(!(var15 === var11)) { _fun0004_ip = 61; continue _fun0004 }
case 63:
            var11 = var13.channel;
            var9 = var14;
            if(!(var12 != var11)) { _fun0004_ip = 61; continue _fun0004 }
case 64:
            var11 = var13.channel;
            var15 = var11.id;
            var8['invite_channel_id'] = var15;
            var16 = var13.guild;
            var17 = var12 == var16;
            var15 = undefined;
            if(var17) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var15 = var16.id;
case 65:
            var8['invite_guild_id'] = var15;
            var15 = var11.type;
            var8['invite_channel_type'] = var15;
            var15 = var13.inviter;
            if(!(var12 != var15)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var15 = var13.inviter;
            var15 = var15.id;
            var8['invite_inviter_id'] = var15;
case 67:
            var15 = var13.target_application;
            if(!(var12 != var15)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var13 = var13.target_application;
            var13 = var13.id;
            var8['application_id'] = var13;
case 69:
            var15 = _closure1_slot16;
            var13 = var15.getLastActiveStream;
            var16 = var13.bind(var15)();
            var9 = var14;
            if(!(var12 != var16)) { _fun0004_ip = 61; continue _fun0004 }
case 71:
            var13 = var16.channelId;
            var11 = var11.id;
            var9 = var14;
            if(!(var13 === var11)) { _fun0004_ip = 61; continue _fun0004 }
case 72:
            var11 = _closure1_slot30;
            var11 = var11.STREAM;
            var13 = var16.ownerId;
            var8['destination_user_id'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 41;
            var13 = var15[var13];
            var15 = var14.bind(var1)(var13);
            var14 = var15.getStreamerApplication;
            var13 = _closure1_slot22;
            var14 = var14.bind(var15)(var16, var13);
            var15 = var12 != var14;
            var13 = null;
            if(!var15) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var13 = var14.id;
case 73:
            var8['application_id'] = var13;
            var9 = var11;
case 61:
            if(!(var12 != var5)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var11 = var5.suggestionData;
            if(!(var12 != var11)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
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
case 77:
            var5 = var5.source;
            var8['source'] = var5;
case 75:
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
            var6 = _closure1_slot31;
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
            var2 = _closure1_slot27;
            var2 = var2.INVITE_SENT;
            var2 = var3.bind(var4)(var2, var5);
case 53:
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
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var8 = var6[var2];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ReferencedMessageState;
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
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
    var2 = 19;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot23 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SlowmodeType;
    var _closure1_slot24 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot25 = var2;
    var2 = 23;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AbortCodes;
    var _closure1_slot26 = var8;
    var10 = var2.AnalyticEvents;
    var _closure1_slot27 = var10;
    var10 = var2.Endpoints;
    var _closure1_slot28 = var10;
    var10 = var2.Permissions;
    var10 = var2.ChannelTypes;
    var _closure1_slot29 = var10;
    var10 = var2.LoggingInviteTypes;
    var _closure1_slot30 = var10;
    var10 = var2.SendTypes;
    var _closure1_slot31 = var10;
    var10 = var2.InviteStates;
    var _closure1_slot32 = var10;
    var10 = var2.MessageFlags;
    var _closure1_slot33 = var10;
    var10 = var2.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot34 = var10;
    var10 = var2.MessageTypes;
    var _closure1_slot35 = var10;
    var10 = var2.AllowedMentionTypes;
    var _closure1_slot36 = var10;
    var10 = var2.HelpdeskArticles;
    var _closure1_slot37 = var10;
    var10 = var2.MarketingURLs;
    var _closure1_slot38 = var10;
    var10 = var2.MessageReferenceTypes;
    var _closure1_slot39 = var10;
    var10 = var2.LOCAL_BOT_ID;
    var _closure1_slot40 = var10;
    var10 = var2.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot41 = var10;
    var10 = var2.MessageStates;
    var _closure1_slot42 = var10;
    var2 = var2.ActivityActionTypes;
    var _closure1_slot43 = var2;
    var2 = 24;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.LinkType;
    var _closure1_slot44 = var2;
    var2 = 25;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildTemplateStates;
    var _closure1_slot45 = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.FileUploadErrorTypes;
    var _closure1_slot46 = var10;
    var2 = var2.MessageSendLocation;
    var _closure1_slot47 = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var2 = var2.MediaPlayerManager;
    var _closure1_slot48 = var2;
    var2 = 28;
    var10 = var6[var2];
    var12 = var9.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'MessageActionCreators';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot49 = var10;
    var2 = var6[var2];
    var10 = var9.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var15 = 'MessageQueue';
    var16 = var9;
    var2 = new var16[var10](var15, var14);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot50 = var2;
    var2 = false;
    var _closure1_slot51 = var2;
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
    var _closure1_slot52 = var2;
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
        var1 = var1.k1Cjqr;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['messageGetter'] = var11;
    var2[var10] = var9;
    var10 = var8.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED;
    var9 = {};
    var11 = 'GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED';
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
        var1 = var1.Z5SUuv;
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
        var2 = var1.CTMXwL;
        var1 = {};
        var7 = _closure1_slot1;
        var6 = 45;
        var6 = var9[var6];
        var7 = var7.bind(var8)(var6);
        var6 = var7.getArticleURL;
        var5 = _closure1_slot37;
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
        var1 = var1.E8nbNb;
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
        var1 = var1.aRUbah;
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
        var1 = var1.aRUbah;
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
        var1 = var1./meGhR;
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
        var1 = var1.Oc1Zjw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['messageGetter'] = var10;
    var2[var9] = var8;
    var _closure1_slot53 = var2;
    var2 = {};
    var8 = function receiveMessage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arguments[2];
            var5 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0005_ip = 32; continue _fun0005 }
case 79:
            var6 = false;
case 32:
            if(!(var5 === var1)) { _fun0005_ip = 29; continue _fun0005 }
case 80:
            var5 = {};
case 29:
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var8 = arg3;
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 81; continue _fun0006 }
case 79:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 31;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot27;
            var2 = var1.AUTOMATED_MESSAGE_RECEIVED;
            var1 = {};
            var6 = 'Clyde';
            var1['message_author'] = var6;
            var1['message_name'] = var8;
            var1 = var3.bind(var4)(var2, var1);
case 81:
            var4 = _closure1_slot54;
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
        var4 = _closure1_slot35;
        var4 = var4.NITRO_NOTIFICATION;
        var2['type'] = var4;
        var4 = arg2;
        var2['content'] = var4;
        var4 = _closure1_slot33;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Nitro Notification', 'discriminator': null, 'avatar': 'nitro', 'bot': true};
        var5 = _closure1_slot40;
        var4['id'] = var5;
        var5 = _closure1_slot41;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot54;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot42;
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
        var4 = _closure1_slot35;
        var4 = var4.GIFTING_PROMPT;
        var2['type'] = var4;
        var4 = '';
        var2['content'] = var4;
        var4 = _closure1_slot33;
        var4 = var4.EPHEMERAL;
        var2['flags'] = var4;
        var4 = {'id': null, 'username': 'Gifting Prompt', 'discriminator': null, 'avatar': 'gifting_prompt', 'bot': true};
        var5 = _closure1_slot40;
        var4['id'] = var5;
        var5 = _closure1_slot41;
        var4['discriminator'] = var5;
        var5 = true;
        var2['author'] = var4;
        var4 = arg2;
        var2['giftingPrompt'] = var4;
        var10 = var3.bind(var1)(var2);
        var4 = _closure1_slot54;
        var3 = var4.receiveMessage;
        var2 = {};
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var7 = _closure1_slot42;
        var8 = var7.SENT;
        var7 = 'state';
        var2[var7] = var8;
        var2 = var3.bind(var4)(var6, var2, var5);
        return var1;
    };
    var2['sendGiftingPromptSystemMessage'] = var8;
    var8 = function sendClydeError(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var8 = arguments[1];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0007_ip = 32; continue _fun0007 }
case 79:
            var8 = 0;
case 32:
            var4 = _closure1_slot18;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var6);
            var3 = null;
            if(!(var3 != var10)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var3 = _closure1_slot26;
            var3 = var3.SLOWMODE_RATE_LIMITED;
            if(!(var8 !== var3)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var3 = _closure1_slot26;
            var3 = var3.INVALID_MESSAGE_SEND_USER;
            if(!(var8 !== var3)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var3 = _closure1_slot26;
            var3 = var3.TOO_MANY_THREADS;
            if(!(var8 !== var3)) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var3 = _closure1_slot26;
            var3 = var3.TOO_MANY_ANNOUNCEMENT_THREADS;
            if(!(var8 !== var3)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var3 = _closure1_slot26;
            var3 = var3.HARMFUL_LINK_MESSAGE_BLOCKED;
            if(!(var8 !== var3)) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var3 = _closure1_slot26;
            var3 = var3.HARMFUL_URL_BLOCKED;
            if(!(var8 !== var3)) { _fun0007_ip = 94; continue _fun0007 }
case 95:
            var3 = _closure1_slot53;
            var3 = var8 in var3;
            if(var3) { _fun0007_ip = 96; continue _fun0007 }
case 41:
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
            var4 = var3.CTMXwL;
            var3 = {};
            var11 = _closure1_slot1;
            var9 = 45;
            var9 = var12[var9];
            var12 = var11.bind(var1)(var9);
            var11 = var12.getArticleURL;
            var9 = _closure1_slot37;
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
            _fun0007_ip = 97; continue _fun0007;
case 96:
            var7 = _closure1_slot53;
            var3 = var7[var8];
            var4 = var3.messageName;
            var8 = var7[var8];
            var7 = var8.messageGetter;
            var5 = var7.bind(var8)();
            _fun0007_ip = 97; continue _fun0007;
case 94:
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
            var3 = var3.WxX2Fd;
            var5 = var7.bind(var8)(var3);
            var4 = 'HARMFUL_URL_BLOCKED';
            _fun0007_ip = 97; continue _fun0007;
case 92:
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
            var7 = var3.zSG3Qy;
            var3 = {};
            var11 = _closure1_slot38;
            var11 = var11.HARMFUL_LINKS;
            var3['helpUrl'] = var11;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'HARMFUL_LINK_MESSAGE_BLOCKED';
            _fun0007_ip = 97; continue _fun0007;
case 90:
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
            _fun0007_ip = 97; continue _fun0007;
case 88:
            var3 = var10.isForumLikeChannel;
            var3 = var3.bind(var10)();
            if(var3) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var3 = var10.isForumPost;
            var3 = var3.bind(var10)();
            if(var3) { _fun0007_ip = 98; continue _fun0007 }
case 100:
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
            var3 = var3.5EMPA7;
            var7 = var7.bind(var8)(var3);
            _fun0007_ip = 101; continue _fun0007;
case 98:
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
            var3 = var3./jUd2+;
            var7 = var8.bind(var9)(var3);
case 101:
            var4 = 'TOO_MANY_THREADS';
            var5 = var7;
            _fun0007_ip = 97; continue _fun0007;
case 86:
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
            var7 = var3.CTMXwL;
            var3 = {};
            var12 = _closure1_slot1;
            var11 = 45;
            var11 = var13[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot37;
            var11 = var11.DM_COULD_NOT_BE_DELIVERED;
            var11 = var12.bind(var13)(var11);
            var3['helpUrl'] = var11;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'INVALID_MESSAGE_SEND_USER';
            _fun0007_ip = 97; continue _fun0007;
case 84:
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
            var7 = var3.IWntYg;
            var3 = {};
            var10 = var10.rateLimitPerUser;
            var3['seconds'] = var10;
            var5 = var8.bind(var9)(var7, var3);
            var4 = 'SLOWMODE_RATE_LIMITED';
case 97:
            var3 = _closure1_slot54;
            var2 = var3.sendBotMessage;
            var2 = var2.bind(var3)(var6, var5, var4);
case 82:
            return var1;
        }
    };
    var2['sendClydeError'] = var8;
    var8 = function sendExplicitMediaClydeError(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot18;
            var2 = var3.getChannel;
            var13 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var13)) { _fun0008_ip = 102; continue _fun0008 }
case 103:
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
            var6 = 49;
            var6 = var12[var6];
            var7 = var11.bind(var3)(var6);
            var6 = var7.createNonce;
            var6 = var6.bind(var7)();
            var8 = _closure1_slot54;
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
            if(!var2) { _fun0008_ip = 104; continue _fun0008 }
case 96:
            var8 = var4.length;
            var7 = 0;
            var2 = var8 > var7;
case 104:
            if(!var2) { _fun0008_ip = 102; continue _fun0008 }
case 105:
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
case 102:
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var7 = _closure1_slot54;
            var6 = var7.trackJump;
            var3 = null;
            var2 = 'Present';
            var2 = var6.bind(var7)(var5, var3, var2);
            var6 = {};
            var2 = true;
            var6['present'] = var2;
            var3 = _closure1_slot21;
            var2 = var3.hasPresent;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0009_ip = 106; continue _fun0009 }
case 7:
            var7 = _closure1_slot54;
            var3 = var7.fetchMessages;
            var2 = {};
            var2['channelId'] = var5;
            var2['limit'] = var4;
            var2['jump'] = var6;
            var2 = var3.bind(var7)(var2);
            _fun0009_ip = 107; continue _fun0009;
case 106:
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
case 107:
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
        var2 = _closure1_slot27;
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
case 0:
            var1 = arg1;
            var13 = var1.channelId;
            var12 = var1.messageId;
            var11 = var1.flash;
            var2 = undefined;
            if(!(var11 === var2)) { _fun0010_ip = 108; continue _fun0010 }
case 109:
            var11 = false;
case 108:
            var10 = var1.offset;
            var7 = var1.context;
            var3 = var1.extraProperties;
            if(!(var3 === var2)) { _fun0010_ip = 110; continue _fun0010 }
case 111:
            var3 = null;
case 110:
            var6 = var1.isPreload;
            var9 = var1.returnMessageId;
            var5 = var1.skipLocalFetch;
            var8 = var1.jumpType;
            var4 = var1.avoidInitialScroll;
            var2 = 'string';
            var1 = typeof var7;
            if(!(var2 === var1)) { _fun0010_ip = 112; continue _fun0010 }
case 89:
            var2 = _closure1_slot54;
            var1 = var2.trackJump;
            var18 = var2;
            var17 = var13;
            var16 = var12;
            var15 = var7;
            var14 = var3;
            var1 = var18[var1](var17, var16, var15, var14, var13);
case 112:
            var1 = _closure1_slot48;
            var3 = null;
            var1 = var3 == var1;
            if(var1) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var2 = _closure1_slot48;
            var2 = var2.pauseAllMediaPlayers;
            var1 = var3 == var2;
case 113:
            if(var1) { _fun0010_ip = 115; continue _fun0010 }
case 41:
            var2 = _closure1_slot48;
            var1 = var2.pauseAllMediaPlayers;
            var1 = var1.bind(var2)();
case 115:
            var3 = _closure1_slot54;
            var2 = var3.fetchMessages;
            var1 = {};
            var1['channelId'] = var13;
            var7 = _closure1_slot34;
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
        var3 = _closure1_slot54;
        var2 = var3.fetchMessages;
        var1 = {};
        var1['channelId'] = var6;
        var4 = _closure1_slot34;
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
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 51;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
                    var10 = _closure1_slot28;
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
case 118:
                    return var2;
case 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                    var4 = var2.body;
                    var4 = var4.length;
                    var6 = 0;
                    if(!(!(var4 > var6))) { _fun0011_ip = 122; continue _fun0011 }
case 95:
                    return var5;
case 122:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 52;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.createMessageRecord;
                    var3 = var2.body;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 120:
                    return var2;
case 116:
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            var5 = _closure1_slot18;
            var3 = var5.getChannel;
            var18 = var3.bind(var5)(var14);
            var5 = _closure1_slot7;
            var3 = var5.isConnectedOrOverlay;
            var3 = var3.bind(var5)();
            var _closure2_slot9 = var3;
            var5 = global;
            var16 = var5.Date;
            var3 = var16.now;
            var3 = var3.bind(var16)();
            var _closure2_slot10 = var3;
            var16 = null;
            if(!(var16 != var18)) { _fun0012_ip = 123; continue _fun0012 }
case 124:
            var19 = var18.type;
            var18 = _closure1_slot29;
            var18 = var18.GUILD_STORE;
            if(!(var19 !== var18)) { _fun0012_ip = 125; continue _fun0012 }
case 123:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 53;
            var18 = var21[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var14 !== var18)) { _fun0012_ip = 126; continue _fun0012 }
case 23:
            var19 = _closure1_slot49;
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
            var19 = _closure1_slot54;
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
            if(var5) { _fun0012_ip = 126; continue _fun0012 }
case 127:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 54;
            var5 = var19[var5];
            var5 = var18.bind(var1)(var5);
            var20 = var5.fetchMessages;
            var5 = var20.recordStart;
            var5 = var5.bind(var20)();
            var5 = 55;
            var5 = var19[var5];
            var19 = var18.bind(var1)(var5);
            var18 = var19.recordChannelFetchStart;
            var5 = var3;
            if(!(var16 != var15)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
            var5 = var15;
case 128:
            var33 = var19;
            var32 = var14;
            var31 = var5;
            var30 = var12;
            var29 = var11;
            var28 = var10;
            var5 = var33[var18](var32, var31, var30, var29, var28, var27);
            var18 = var16 != var9;
            var5 = undefined;
            if(!var18) { _fun0012_ip = 130; continue _fun0012 }
case 131:
            var5 = var9;
case 130:
            var9 = var16 == var5;
            if(!var9) { _fun0012_ip = 132; continue _fun0012 }
case 133:
            var9 = var16 != var17;
case 132:
            if(!var9) { _fun0012_ip = 134; continue _fun0012 }
case 135:
            var9 = {};
            var32 = var9;
            var31 = var17;
            var17 = copyDataProperties(var32, var31);
            var5 = var9;
case 134:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 56;
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
            var9 = 46;
            var9 = var18[var9];
            var18 = var17.bind(var1)(var9);
            var17 = var18.dispatch;
            var9 = {};
            var19 = 'LOAD_MESSAGES';
            var9['type'] = var19;
            var9 = var17.bind(var18)(var9);
            var17 = var16 == var5;
            var9 = undefined;
            if(var17) { _fun0012_ip = 136; continue _fun0012 }
case 137:
            var9 = var5.messageId;
case 136:
            _closure2_slot11 = var9;
            var5 = _closure1_slot52;
            var17 = var5.prototype;
            var17 = Object.create(var17, {constructor: {value: var5}});
            var33 = var17;
            var5 = new var33[var5](var32);
            var5 = var5 instanceof Object ? var5 : var17;
            _closure2_slot12 = var5;
            if(var4) { _fun0012_ip = 138; continue _fun0012 }
case 139:
            var4 = var13.fetchLocalMessages;
            if(!(var16 != var15)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
            var3 = var15;
case 140:
            var33 = var13;
            var32 = var14;
            var31 = var3;
            var30 = var12;
            var29 = var11;
            var28 = var10;
            var27 = var5;
            var3 = var33[var4](var32, var31, var30, var29, var28, var27, var26);
case 138:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 51;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': false};
            var13 = _closure1_slot28;
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
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                        if(var3) { _fun0013_ip = 11; continue _fun0013 }
case 2:
                        var6 = var9.length;
                        var1 = _closure2_slot3;
                        var1 = var6 === var1;
                        if(!var1) { _fun0013_ip = 106; continue _fun0013 }
case 142:
                        var6 = var12;
                        if(var6) { _fun0013_ip = 143; continue _fun0013 }
case 144:
                        var7 = _closure2_slot1;
                        var7 = var4 == var7;
                        if(!var7) { _fun0013_ip = 145; continue _fun0013 }
case 146:
                        var8 = _closure2_slot2;
                        var7 = var4 == var8;
case 145:
                        var6 = var7;
case 143:
                        var1 = var6;
case 106:
                        var3 = var1;
case 11:
                        var1 = _closure2_slot11;
                        var6 = var4 != var1;
                        if(var6) { _fun0013_ip = 147; continue _fun0013 }
case 148:
                        var1 = var11;
                        if(!var1) { _fun0013_ip = 121; continue _fun0013 }
case 149:
                        var8 = var9.length;
                        var7 = _closure2_slot3;
                        var1 = var8 === var7;
case 121:
                        var6 = var1;
case 147:
                        var1 = _closure2_slot11;
                        var10 = var3;
                        var8 = var6;
                        if(!(var4 != var1)) { _fun0013_ip = 150; continue _fun0013 }
case 151:
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
                        var18 = _closure1_slot2;
                        var13 = 57;
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
                        if(!(var13 < var1)) { _fun0013_ip = 152; continue _fun0013 }
case 153:
                        var3 = false;
case 152:
                        var1 = var9.length;
                        var1 = var1 - var13;
                        if(!(var1 < var7)) { _fun0013_ip = 154; continue _fun0013 }
case 155:
                        var6 = false;
case 154:
                        var10 = var3;
                        var8 = var6;
                        if(!var6) { _fun0013_ip = 150; continue _fun0013 }
case 26:
                        var7 = var9.length;
                        var1 = 0;
                        var10 = var3;
                        var8 = var6;
                        if(!(var7 > var1)) { _fun0013_ip = 150; continue _fun0013 }
case 156:
                        var13 = _closure1_slot23;
                        var7 = var13.lastMessageId;
                        var5 = _closure2_slot0;
                        var5 = var7.bind(var13)(var5);
                        var1 = var9[var1];
                        var1 = var1.id;
                        var10 = var3;
                        var8 = var6;
                        if(!(var1 === var5)) { _fun0013_ip = 150; continue _fun0013 }
case 157:
                        var8 = false;
                        var10 = var3;
case 150:
                        var6 = _closure1_slot49;
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
                        var5 = _closure1_slot2;
                        var1 = 46;
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
                        if(var8) { _fun0013_ip = 158; continue _fun0013 }
case 159:
                        var11 = _closure1_slot7;
                        var10 = var11.lastTimeConnectedChanged;
                        var11 = var10.bind(var11)();
                        var10 = _closure2_slot10;
                        var8 = var11 >= var10;
case 158:
                        var5['isStale'] = var8;
                        var8 = _closure2_slot5;
                        var5['truncate'] = var8;
                        var8 = _closure2_slot7;
                        var5['avoidInitialScroll'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 55;
                        var3 = var6[var3];
                        var8 = var5.bind(var1)(var3);
                        var7 = var8.recordChannelFetchedNetwork;
                        var6 = _closure2_slot0;
                        var3 = _closure2_slot8;
                        if(!(var4 == var3)) { _fun0013_ip = 160; continue _fun0013 }
case 161:
                        var5 = _closure2_slot10;
                        _fun0013_ip = 162; continue _fun0013;
case 160:
                        var5 = _closure2_slot8;
case 162:
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
                var5 = _closure1_slot49;
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
case 126:
            return var1;
case 125:
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
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 163; continue _fun0014 }
case 79:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var7 = _closure1_slot18;
                    var5 = var7.getBasicChannel;
                    var11 = _closure2_slot0;
                    var9 = var5.bind(var7)(var11);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 56;
                    var5 = var10[var5];
                    var7 = var8.bind(var3)(var5);
                    var5 = var7.getOrCreate;
                    var7 = var5.bind(var7)(var11);
                    var5 = 58;
                    var5 = var10[var5];
                    var8 = var8.bind(var3)(var5);
                    var5 = var8.database;
                    var8 = var5.bind(var8)();
                    _closure4_slot0 = var8;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0014_ip = 121; continue _fun0014 }
case 164:
                    if(!(var5 != var9)) { _fun0014_ip = 121; continue _fun0014 }
case 13:
                    var8 = _closure2_slot2;
                    if(!(var5 == var8)) { _fun0014_ip = 121; continue _fun0014 }
case 118:
                    var8 = _closure2_slot3;
                    if(!(var5 != var8)) { _fun0014_ip = 165; continue _fun0014 }
case 121:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 54;
                    var8 = var11[var8];
                    var12 = var10.bind(var3)(var8);
                    var11 = var12.addLocalMessages;
                    var10 = _closure2_slot0;
                    var8 = -1;
                    var8 = var11.bind(var12)(var10, var8);
                    _fun0014_ip = 166; continue _fun0014;
case 165:
                    var8 = var7.ready;
                    if(!var8) { _fun0014_ip = 167; continue _fun0014 }
case 168:
                    var7 = var7.cached;
                    if(var7) { _fun0014_ip = 167; continue _fun0014 }
case 116:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 54;
                    var7 = var10[var7];
                    var11 = var8.bind(var3)(var7);
                    var10 = var11.addLocalMessages;
                    var8 = _closure2_slot0;
                    var7 = -2;
                    var7 = var10.bind(var11)(var8, var7);
                    _fun0014_ip = 166; continue _fun0014;
case 167:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 59;
                    var7 = var10[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.tryLoadAsync;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 60;
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
case 169:
                    return var2;
case 170:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0014_ip = 70; continue _fun0014 }
case 171:
                    if(!(var5 == var2)) { _fun0014_ip = 172; continue _fun0014 }
case 173:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 54;
                    var5 = var8[var5];
                    var10 = var7.bind(var3)(var5);
                    var8 = var10.addLocalMessages;
                    var7 = _closure2_slot0;
                    var5 = -3;
                    var5 = var8.bind(var10)(var7, var5);
                    _fun0014_ip = 166; continue _fun0014;
case 172:
                    var10 = _closure1_slot49;
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
                    var10 = _closure1_slot2;
                    var7 = 54;
                    var7 = var10[var7];
                    var10 = var8.bind(var3)(var7);
                    var8 = var10.addLocalMessages;
                    var7 = var2.messages;
                    var7 = var7.length;
                    var7 = var8.bind(var10)(var11, var7);
                    var5 = var5.completed;
                    if(var5) { _fun0014_ip = 166; continue _fun0014 }
case 174:
                    var5 = var2.messages;
                    var7 = var5.length;
                    var5 = 0;
                    if(!(var7 > var5)) { _fun0014_ip = 166; continue _fun0014 }
case 175:
                    var5 = var2.messages;
                    var7 = var5.length;
                    var5 = _closure2_slot4;
                    var7 = var7 >= var5;
                    if(!var7) { _fun0014_ip = 57; continue _fun0014 }
case 176:
                    var8 = var2.connectionId;
                    var10 = _closure1_slot7;
                    var5 = var10.lastTimeConnectedChanged;
                    var5 = var5.bind(var10)();
                    var7 = var8 === var5;
case 57:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 55;
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
                    var4 = 46;
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
case 166:
                    return var3;
case 70:
                    return var2;
case 163:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 177; continue _fun0015 }
case 79:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var6 = _closure1_slot18;
                    var5 = var6.getBasicChannel;
                    var3 = _closure2_slot0;
                    var11 = var5.bind(var6)(var3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 58;
                    var3 = var6[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.database;
                    var3 = var3.bind(var5)();
                    _closure4_slot0 = var3;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0015_ip = 178; continue _fun0015 }
case 143:
                    if(!(var6 != var11)) { _fun0015_ip = 178; continue _fun0015 }
case 179:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 56;
                    var3 = var3[var9];
                    var8 = var5.bind(var2)(var3);
                    var5 = var8.getOrCreate;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var8)(var3);
                    var3 = var3.hasMoreAfter;
                    if(var3) { _fun0015_ip = 178; continue _fun0015 }
case 180:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 59;
                    var3 = var8[var3];
                    var8 = var5.bind(var2)(var3);
                    var5 = var8.tryLoadAsync;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 60;
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
case 168:
                    return var3;
case 181:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 135; continue _fun0015 }
case 182:
                    if(!(var6 != var3)) { _fun0015_ip = 178; continue _fun0015 }
case 183:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.getOrCreate;
                    var5 = _closure2_slot0;
                    var8 = var8.bind(var9)(var5);
                    var5 = var8.last;
                    var8 = var5.bind(var8)();
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0015_ip = 184; continue _fun0015 }
case 185:
                    var5 = var8.id;
case 184:
                    _closure4_slot1 = var5;
                    if(!(var6 != var5)) { _fun0015_ip = 171; continue _fun0015 }
case 186:
                    var6 = var3.messages;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 57;
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
                    _fun0015_ip = 187; continue _fun0015;
case 171:
                    var8 = var3.messages;
case 187:
                    var6 = _closure1_slot49;
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
                    if(!(var4 !== var5)) { _fun0015_ip = 178; continue _fun0015 }
case 188:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 46;
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
                    var7 = 61;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                    var7 = var7.bind(var8)();
                    var4['shouldForceCommitMessages'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0015_ip = 178; continue _fun0015;
case 135:
                    return var3;
case 178:
                    return var2;
case 177:
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
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var13 = var1.before;
            var15 = var1.after;
            var5 = var1.limit;
            var6 = var1.jump;
            var10 = var1.focus;
            var4 = var1.truncate;
            var3 = _closure1_slot21;
            var2 = var3.getMessages;
            var8 = var2.bind(var3)(var7);
            var2 = var8.cached;
            if(var2) { _fun0016_ip = 189; continue _fun0016 }
case 190:
            var2 = var8.ready;
            if(!var2) { _fun0016_ip = 189; continue _fun0016 }
case 191:
            var14 = null;
            var9 = var14 == var6;
            var3 = undefined;
            var2 = undefined;
            if(var9) { _fun0016_ip = 192; continue _fun0016 }
case 193:
            var2 = var6.messageId;
case 192:
            if(!(var14 == var2)) { _fun0016_ip = 194; continue _fun0016 }
case 13:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0016_ip = 195; continue _fun0016 }
case 196:
            var2 = var10.messageId;
case 195:
            if(!(var14 == var2)) { _fun0016_ip = 194; continue _fun0016 }
case 197:
            if(!(var14 != var13)) { _fun0016_ip = 198; continue _fun0016 }
case 199:
            var2 = var8.hasBeforeCached;
            var2 = var2.bind(var8)(var13);
            if(var2) { _fun0016_ip = 200; continue _fun0016 }
case 198:
            var9 = var14 == var15;
            if(var9) { _fun0016_ip = 201; continue _fun0016 }
case 15:
            var2 = var8.hasAfterCached;
            var2 = var2.bind(var8)(var15);
            var9 = !var2;
case 201:
            var2 = !var9;
            if(var9) { _fun0016_ip = 202; continue _fun0016 }
case 203:
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
case 202:
            _fun0016_ip = 152; continue _fun0016;
case 200:
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
case 152:
            return var2;
case 194:
            var9 = var14 == var6;
            var2 = undefined;
            if(var9) { _fun0016_ip = 204; continue _fun0016 }
case 205:
            var2 = var6.messageId;
case 204:
            if(!(var14 != var2)) { _fun0016_ip = 206; continue _fun0016 }
case 27:
            var11 = var8.has;
            var9 = var6.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0016_ip = 207; continue _fun0016 }
case 206:
            var9 = var14 == var10;
            var2 = undefined;
            if(var9) { _fun0016_ip = 208; continue _fun0016 }
case 209:
            var2 = var10.messageId;
case 208:
            var12 = var6;
            if(!(var14 != var2)) { _fun0016_ip = 210; continue _fun0016 }
case 211:
            var11 = var8.has;
            var9 = var10.messageId;
            var2 = false;
            var2 = var11.bind(var8)(var9, var2);
            if(var2) { _fun0016_ip = 212; continue _fun0016 }
case 92:
            var2 = {};
            var19 = var2;
            var18 = var10;
            var9 = copyDataProperties(var19, var18);
            var12 = var2;
case 210:
            var9 = var14 == var12;
            var2 = undefined;
            if(var9) { _fun0016_ip = 213; continue _fun0016 }
case 214:
            var2 = var12.messageId;
case 213:
            var2 = var14 != var2;
            var11 = 0;
            if(!var2) { _fun0016_ip = 215; continue _fun0016 }
case 216:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 57;
            var2 = var13[var2];
            var13 = var9.bind(var3)(var2);
            var9 = var13.extractTimestamp;
            var15 = var14 == var12;
            var2 = undefined;
            if(var15) { _fun0016_ip = 217; continue _fun0016 }
case 218:
            var2 = var12.messageId;
case 217:
            var11 = var9.bind(var13)(var2);
case 215:
            var2 = var8.first;
            var13 = var2.bind(var8)();
            var2 = var8.last;
            var9 = var2.bind(var8)();
            var2 = var8.hasMoreBefore;
            var2 = !var2;
            if(!var2) { _fun0016_ip = 58; continue _fun0016 }
case 219:
            var2 = var14 != var13;
case 58:
            if(!var2) { _fun0016_ip = 220; continue _fun0016 }
case 176:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 57;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var13.id;
            var15 = var16.bind(var17)(var15);
            var2 = var15 >= var11;
case 220:
            if(var2) { _fun0016_ip = 221; continue _fun0016 }
case 222:
            var8 = var8.hasMoreAfter;
            var8 = !var8;
            if(!var8) { _fun0016_ip = 223; continue _fun0016 }
case 224:
            var8 = var14 != var9;
case 223:
            if(!var8) { _fun0016_ip = 137; continue _fun0016 }
case 225:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 57;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.extractTimestamp;
            var15 = var9.id;
            var15 = var16.bind(var17)(var15);
            var8 = var15 <= var11;
case 137:
            var2 = var8;
case 221:
            if(var2) { _fun0016_ip = 226; continue _fun0016 }
case 227:
            var8 = var14 != var13;
            if(!var8) { _fun0016_ip = 228; continue _fun0016 }
case 229:
            var8 = var14 != var9;
case 228:
            if(!var8) { _fun0016_ip = 230; continue _fun0016 }
case 231:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 57;
            var14 = var16[var14];
            var15 = var15.bind(var3)(var14);
            var14 = var15.extractTimestamp;
            var13 = var13.id;
            var13 = var14.bind(var15)(var13);
            var8 = var13 < var11;
case 230:
            if(!var8) { _fun0016_ip = 232; continue _fun0016 }
case 67:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 57;
            var13 = var15[var13];
            var14 = var14.bind(var3)(var13);
            var13 = var14.extractTimestamp;
            var9 = var9.id;
            var9 = var13.bind(var14)(var9);
            var8 = var9 > var11;
case 232:
            var2 = var8;
case 226:
            if(!var2) { _fun0016_ip = 233; continue _fun0016 }
case 234:
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
            var12 = _closure1_slot34;
            var8['limit'] = var12;
            var8 = var9.bind(var11)(var8);
            var2 = true;
case 233:
            return var2;
case 212:
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
case 207:
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
case 189:
            var1 = false;
            return var1;
        }
    };
    var2['_tryFetchMessagesCached'] = var8;
    var8 = function sendMessage(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0017_ip = 108; continue _fun0017 }
case 109:
            var3 = true;
case 108:
            var _closure2_slot2 = var3;
            var3 = arguments[3];
            var _closure2_slot3 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 129; continue _fun0018 }
case 79:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var2 = _closure2_slot1;
                        var2 = var2.reaction;
                        if(var2) { _fun0018_ip = 235; continue _fun0018 }
case 236:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 62;
                        var2 = var6[var2];
                        var5 = var5.bind(var7)(var2);
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address=73);
case 237:
                        return var2;
case 190:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0018_ip = 238; continue _fun0018 }
case 239:
                        var5 = null;
                        if(!(var5 == var2)) { _fun0018_ip = 240; continue _fun0018 }
case 89:
                        var6 = _closure2_slot3;
                        var12 = var6.nonce;
                        if(!(var5 == var12)) { _fun0018_ip = 199; continue _fun0018 }
case 241:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 49;
                        var5 = var9[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.createNonce;
                        var12 = var5.bind(var6)();
case 199:
                        var5 = {};
                        var18 = _closure2_slot3;
                        var19 = var5;
                        var6 = copyDataProperties(var19, var18);
                        var6 = 'nonce';
                        var5[var6] = var12;
                        _closure2_slot3 = var5;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 63;
                        var5 = var9[var5];
                        var9 = var6.bind(var7)(var5);
                        var6 = var9.backgroundify;
                        var5 = function() {
                            var5 = _closure1_slot54;
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
                        var9 = _closure1_slot21;
                        var5 = var9.isReady;
                        var5 = var5.bind(var9)(var10);
                        if(var5) { _fun0018_ip = 242; continue _fun0018 }
case 243:
                        var5 = _closure2_slot2;
                        if(!var5) { _fun0018_ip = 173; continue _fun0018 }
case 244:
                        var9 = _closure2_slot0;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 53;
                        var5 = var11[var5];
                        var5 = var10.bind(var7)(var5);
                        var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        if(!(var9 === var5)) { _fun0018_ip = 245; continue _fun0018 }
case 173:
                        var5 = var6.bind(var7)();
                        _fun0018_ip = 246; continue _fun0018;
case 245:
                        var12 = _closure1_slot50;
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
                            var4 = _closure1_slot21;
                            var3 = var4.whenReady;
                            var2 = _closure2_slot0;
                            var1 = function() {
                                var3 = _closure1_slot50;
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
case 246:
                        _fun0018_ip = 247; continue _fun0018;
case 242:
                        var5 = var6.bind(var7)();
case 247:
                        return var5;
case 240:
                        var7 = _closure1_slot54;
                        var6 = var7.sendMessage;
                        var18 = _closure2_slot1;
                        var17 = _closure2_slot2;
                        var16 = _closure2_slot3;
                        var20 = var7;
                        var19 = var2;
                        var3 = var20[var6](var19, var18, var17, var16, var15);
                        return var3;
case 238:
                        return var2;
case 235:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
case 129:
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
case 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0019_ip = 248; continue _fun0019 }
case 79:
            var1 = {};
            var4 = {};
            var6 = var3.channel;
            var5 = var6.getGuildId;
            var6 = var5.bind(var6)();
            var7 = var2 != var6;
            var5 = undefined;
            if(!var7) { _fun0019_ip = 249; continue _fun0019 }
case 83:
            var5 = var6;
case 249:
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
            if(var3) { _fun0019_ip = 250; continue _fun0019 }
case 251:
            var3 = {};
            var4 = global;
            var6 = var4.Object;
            var5 = var6.values;
            var4 = _closure1_slot36;
            var4 = var5.bind(var6)(var4);
            var3['parse'] = var4;
            var4 = false;
            var3['replied_user'] = var4;
            var2 = var3;
case 250:
            var1['allowedMentions'] = var2;
            _fun0019_ip = 252; continue _fun0019;
case 248:
            var1 = {};
case 252:
            return var1;
        }
    };
    var2['getSendMessageOptionsForReply'] = var8;
    var8 = function getSendMessageOptionsForStickers(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isGif;
            var2 = var2.stickers;
            var3 = null;
            if(!(var3 != var2)) { _fun0020_ip = 2; continue _fun0020 }
case 31:
            var4 = var2.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0020_ip = 2; continue _fun0020 }
case 103:
            if(var1) { _fun0020_ip = 2; continue _fun0020 }
case 236:
            var1 = {};
            var1['stickerIds'] = var2;
            _fun0020_ip = 111; continue _fun0020;
case 2:
            var1 = {};
case 111:
            return var1;
        }
    };
    var2['getSendMessageOptionsForStickers'] = var8;
    var8 = function getSendMessageOptionsForScheduledMessage(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.scheduledTimestamp;
            var1 = null;
            if(!(var1 != var2)) { _fun0021_ip = 253; continue _fun0021 }
case 254:
            var1 = {};
            var1['scheduledTimestamp'] = var2;
            _fun0021_ip = 255; continue _fun0021;
case 253:
            var1 = {};
case 255:
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
        var6 = _closure1_slot54;
        var4 = var6.getSendMessageOptionsForReply;
        var3 = var5.pendingReply;
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot54;
        var4 = var6.getSendMessageOptionsForStickers;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var6 = _closure1_slot54;
        var4 = var6.getSendMessageOptionsForScheduledMessage;
        var3 = {};
        var9 = var3;
        var8 = var5;
        var7 = copyDataProperties(var9, var8);
        var8 = var4.bind(var6)(var3);
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var4 = _closure1_slot54;
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var7 = arg5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 64;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = arg2;
            var6 = var3.bind(var4)(var1);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0022_ip = 190; continue _fun0022 }
case 256:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '\n';
            var1 = var5.bind(var4)(var7, var3, var6);
case 190:
            var5 = _closure1_slot54;
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
        var5 = _closure1_slot54;
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
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arguments[2];
            var1 = arguments[4];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0023_ip = 257; continue _fun0023 }
case 79:
            var2 = '';
case 257:
            if(!(var1 === var3)) { _fun0023_ip = 258; continue _fun0023 }
case 29:
            var1 = false;
case 258:
            var5 = _closure1_slot54;
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
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var10;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0024_ip = 108; continue _fun0024 }
case 109:
            var2 = {};
case 108:
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
            var9 = _closure1_slot28;
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
            var6 = _closure1_slot47;
            var6 = var6.GREET;
            var5['location'] = var6;
            var2['context'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 65;
                var5 = var6[var3];
                var3 = undefined;
                var10 = var4.bind(var3)(var5);
                var8 = var10.donateSentMessage;
                var5 = var1.body;
                var7 = var5.content;
                var9 = _closure2_slot0;
                var7 = var8.bind(var10)(var7, var9);
                var8 = _closure1_slot54;
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
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot49;
                    var4 = var5.log;
                    var3 = 'Failed to send greeting';
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0025_ip = 259; continue _fun0025 }
case 37:
                    var6 = _closure1_slot54;
                    var5 = var6.sendClydeError;
                    var4 = _closure2_slot0;
                    var3 = var1.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
case 259:
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
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0026_ip = 260; continue _fun0026 }
case 261:
            var6 = {};
case 260:
            var5 = _closure1_slot54;
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
            var1 = _closure1_slot47;
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
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg1;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0027_ip = 197; continue _fun0027 }
case 253:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 66;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.canUseAnimatedEmojis;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0027_ip = 197; continue _fun0027 }
case 262:
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
            var1 = var1.V5/GgC;
            var3 = var2.bind(var3)(var1);
            var2 = 'INVALID_ANIMATED_EMOJI_BODY';
            _fun0027_ip = 263; continue _fun0027;
case 197:
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
            var1 = var1.Q87rI/;
            var3 = var4.bind(var5)(var1);
            var2 = 'INVALID_EXTERNAL_EMOJI_BODY';
case 263:
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
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0028_ip = 264; continue _fun0028 }
case 79:
                    var11 = undefined;
                    var _closure4_slot0 = var11;
                    var _closure4_slot1 = var11;
                    var _closure4_slot2 = var11;
                    var _closure4_slot3 = var11;
                    var _closure4_slot4 = var11;
                    var _closure4_slot5 = var11;
                    var _closure4_slot6 = var11;
                    var _closure4_slot7 = var11;
                    var28 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var _closure4_slot8 = var11;
                    var _closure4_slot9 = var11;
                    var29 = undefined;
                    var _closure4_slot10 = var11;
                    var _closure4_slot11 = var11;
                    var26 = undefined;
                    var _closure4_slot12 = var11;
                    var14 = undefined;
                    var _closure4_slot13 = var11;
                    var23 = undefined;
                    var16 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var21 = undefined;
                    var12 = undefined;
                    var15 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 62;
                    var4 = var13[var4];
                    var5 = var5.bind(var11)(var4);
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var11)(var4);
                    var13 = null;
                    if(!(var13 == var4)) { _fun0028_ip = 265; continue _fun0028 }
case 266:
                    var5 = _closure2_slot1;
                    var36 = var5.content;
                    _closure4_slot0 = var36;
                    var44 = var5.invalidEmojis;
                    var17 = var5.validNonShortcutEmojis;
                    _closure4_slot1 = var17;
                    var5 = var5.tts;
                    var41 = var11 !== var5;
                    if(!var41) { _fun0028_ip = 182; continue _fun0028 }
case 267:
                    var41 = var5;
case 182:
                    var17 = _closure2_slot2;
                    var30 = var17.activityAction;
                    var37 = var17.location;
                    _closure4_slot2 = var37;
                    var5 = var17.inviteAnalyticsMetadata;
                    _closure4_slot3 = var5;
                    var31 = var17.stickerIds;
                    _closure4_slot4 = var31;
                    var40 = var17.messageReference;
                    _closure4_slot5 = var40;
                    var39 = var17.allowedMentions;
                    var33 = var17.poll;
                    _closure4_slot6 = var33;
                    var32 = var17.sharedCustomTheme;
                    var25 = var17.contentInventoryEntry;
                    _closure4_slot7 = var25;
                    var24 = var17.attachments;
                    var28 = var17.attachmentsToUpload;
                    var10 = var17.onAttachmentUploadError;
                    var34 = var17.announcementSendOptions;
                    var5 = var17.withCheckpoint;
                    var17 = var17.flags;
                    var35 = var13 != var17;
                    var22 = 0;
                    var45 = 0;
                    if(!var35) { _fun0028_ip = 56; continue _fun0028 }
case 268:
                    var45 = var17;
case 56:
                    var35 = _closure1_slot1;
                    var38 = _closure1_slot2;
                    var17 = 67;
                    var17 = var38[var17];
                    var17 = var35.bind(var11)(var17);
                    var38 = var17.bind(var11)(var36);
                    var35 = _closure1_slot3;
                    var17 = 2;
                    var38 = var35.bind(var11)(var38, var17);
                    var17 = var38[var22];
                    var35 = 1;
                    var35 = var38[var35];
                    var42 = var36;
                    var38 = var45;
                    if(!var17) { _fun0028_ip = 269; continue _fun0028 }
case 157:
                    _closure4_slot0 = var35;
                    var36 = _closure1_slot0;
                    var43 = _closure1_slot2;
                    var17 = 68;
                    var17 = var43[var17];
                    var43 = var36.bind(var11)(var17);
                    var36 = var43.addFlag;
                    var17 = _closure1_slot33;
                    var17 = var17.SUPPRESS_NOTIFICATIONS;
                    var38 = var36.bind(var43)(var45, var17);
                    var42 = var35;
case 269:
                    var36 = false;
                    var18 = false;
                    var17 = _closure2_slot2;
                    var17 = var17.messageReference;
                    var43 = var13 == var17;
                    var35 = undefined;
                    if(var43) { _fun0028_ip = 270; continue _fun0028 }
case 271:
                    var35 = var17.type;
case 270:
                    var17 = _closure1_slot39;
                    var17 = var17.FORWARD;
                    var35 = var35 === var17;
                    _closure4_slot8 = var35;
                    var17 = '';
                    if(!(var17 === var42)) { _fun0028_ip = 272; continue _fun0028 }
case 273:
                    if(!(var13 == var30)) { _fun0028_ip = 272; continue _fun0028 }
case 274:
                    if(!(var13 == var31)) { _fun0028_ip = 272; continue _fun0028 }
case 275:
                    if(!(var13 == var33)) { _fun0028_ip = 272; continue _fun0028 }
case 178:
                    if(!(var13 == var32)) { _fun0028_ip = 272; continue _fun0028 }
case 276:
                    if(!(var13 == var25)) { _fun0028_ip = 272; continue _fun0028 }
case 277:
                    if(var35) { _fun0028_ip = 272; continue _fun0028 }
case 278:
                    if(!(var13 != var24)) { _fun0028_ip = 279; continue _fun0028 }
case 280:
                    var35 = var24.length;
                    if(!(var22 === var35)) { _fun0028_ip = 272; continue _fun0028 }
case 279:
                    if(var5) { _fun0028_ip = 272; continue _fun0028 }
case 281:
                    var35 = _closure2_slot1;
                    var35 = var35.components;
                    if(!(var13 != var35)) { _fun0028_ip = 222; continue _fun0028 }
case 57:
                    var35 = _closure2_slot1;
                    var35 = var35.components;
                    var35 = var35.length;
                    if(!(var22 === var35)) { _fun0028_ip = 272; continue _fun0028 }
case 222:
                    var35 = var28;
                    if(!(var13 != var35)) { _fun0028_ip = 225; continue _fun0028 }
case 282:
                    var35 = var28;
                    var35 = var35.length;
                    if(!(!(var35 > var22))) { _fun0028_ip = 283; continue _fun0028 }
case 225:
                    var35 = global;
                    var43 = var35.Promise;
                    var35 = var43.resolve;
                    var35 = var35.bind(var43)();
                    return var35;
case 283:
                    var18 = true;
case 272:
                    if(!(var13 == var40)) { _fun0028_ip = 284; continue _fun0028 }
case 285:
                    var35 = _closure1_slot35;
                    var45 = var35.DEFAULT;
                    _fun0028_ip = 286; continue _fun0028;
case 284:
                    var35 = _closure1_slot35;
                    var45 = var35.REPLY;
case 286:
                    _closure4_slot9 = var45;
                    var35 = _closure2_slot2;
                    var35 = var35.nonce;
                    if(!(var13 == var35)) { _fun0028_ip = 287; continue _fun0028 }
case 288:
                    var46 = _closure1_slot0;
                    var47 = _closure1_slot2;
                    var43 = 49;
                    var43 = var47[var43];
                    var46 = var46.bind(var11)(var43);
                    var43 = var46.createNonce;
                    var35 = var43.bind(var46)();
case 287:
                    var29 = var35;
                    _closure4_slot10 = var35;
                    _closure4_slot11 = var35;
                    var43 = _closure1_slot1;
                    var46 = _closure1_slot2;
                    var35 = 47;
                    var35 = var46[var35];
                    var43 = var43.bind(var11)(var35);
                    var35 = {};
                    var46 = _closure2_slot0;
                    var35['channelId'] = var46;
                    var35['content'] = var42;
                    var35['tts'] = var41;
                    var35['type'] = var45;
                    var35['messageReference'] = var40;
                    var35['allowedMentions'] = var39;
                    var45 = undefined;
                    if(!(var22 !== var38)) { _fun0028_ip = 289; continue _fun0028 }
case 290:
                    var45 = var38;
case 289:
                    var35['flags'] = var45;
                    var45 = var29;
                    var35['nonce'] = var45;
                    var46 = _closure1_slot0;
                    var47 = _closure1_slot2;
                    var45 = 69;
                    var45 = var47[var45];
                    var46 = var46.bind(var11)(var45);
                    var45 = var46.createPollServerDataFromCreateRequest;
                    var45 = var45.bind(var46)(var33);
                    var35['poll'] = var45;
                    var35['sharedCustomTheme'] = var32;
                    var26 = var43.bind(var11)(var35);
                    var35 = _closure2_slot2;
                    var35 = var35.eagerDispatch;
                    if(!(var36 !== var35)) { _fun0028_ip = 291; continue _fun0028 }
case 292:
                    var36 = _closure1_slot0;
                    var43 = _closure1_slot2;
                    var35 = 70;
                    var35 = var43[var35];
                    var45 = var36.bind(var11)(var35);
                    var43 = var45.updateComboOnMessageSend;
                    var36 = _closure2_slot0;
                    var35 = var26;
                    var35 = var35.id;
                    var35 = var43.bind(var45)(var36, var35);
                    if(!(var13 != var31)) { _fun0028_ip = 293; continue _fun0028 }
case 294:
                    var36 = var26;
                    var43 = var31.map;
                    var35 = function(arg1) {
                        var3 = _closure1_slot15;
                        var2 = var3.getStickerById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var45 = var43.bind(var31)(var35);
                    var43 = var45.filter;
                    var35 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var35 = var43.bind(var45)(var35);
                    var36['sticker_items'] = var35;
case 293:
                    var47 = _closure1_slot54;
                    var46 = var47.receiveMessage;
                    var51 = _closure2_slot0;
                    var50 = var26;
                    var48 = _closure2_slot2;
                    var49 = true;
                    var52 = var47;
                    var35 = var52[var46](var51, var50, var49, var48, var47);
case 291:
                    var35 = _closure1_slot51;
                    if(var35) { _fun0028_ip = 295; continue _fun0028 }
case 77:
                    if(!(var13 != var44)) { _fun0028_ip = 295; continue _fun0028 }
case 296:
                    var35 = var44.length;
                    if(!(var35 > var22)) { _fun0028_ip = 295; continue _fun0028 }
case 297:
                    var35 = true;
                    _closure1_slot51 = var35;
                    var36 = _closure1_slot25;
                    var35 = var36.getCurrentUser;
                    var43 = var35.bind(var36)();
                    var36 = _closure1_slot54;
                    var35 = var36.validateMessage;
                    var45 = _closure2_slot0;
                    var35 = var35.bind(var36)(var44, var43, var45);
                    var44 = var35.errorMessage;
                    var43 = var35.errorMessageName;
                    var36 = _closure1_slot54;
                    var35 = var36.sendBotMessage;
                    var35 = var35.bind(var36)(var45, var44, var43);
case 295:
                    var35 = {};
                    if(!(var13 == var34)) { _fun0028_ip = 298; continue _fun0028 }
case 299:
                    var43 = _closure1_slot0;
                    var44 = _closure1_slot2;
                    var36 = 71;
                    var36 = var44[var36];
                    var36 = var43.bind(var11)(var36);
                    var36 = var36.MessageDataType;
                    var36 = var36.SEND;
                    _fun0028_ip = 300; continue _fun0028;
case 298:
                    var44 = _closure1_slot0;
                    var45 = _closure1_slot2;
                    var43 = 71;
                    var43 = var45[var43];
                    var43 = var44.bind(var11)(var43);
                    var43 = var43.MessageDataType;
                    var36 = var43.SEND_ANNOUNCEMENT;
case 300:
                    var35['type'] = var36;
                    var36 = {};
                    var43 = _closure2_slot0;
                    var36['channelId'] = var43;
                    var36['content'] = var42;
                    var42 = var29;
                    var36['nonce'] = var42;
                    var36['tts'] = var41;
                    var36['message_reference'] = var40;
                    var36['allowed_mentions'] = var39;
                    var36['flags'] = var38;
                    var36['analyticsLocation'] = var37;
                    var35['message'] = var36;
                    var14 = var35;
                    _closure4_slot13 = var35;
                    var35 = _closure2_slot1;
                    var35 = var35.components;
                    if(!(var13 != var35)) { _fun0028_ip = 301; continue _fun0028 }
case 302:
                    var35 = var14;
                    var36 = var35.message;
                    var35 = _closure2_slot1;
                    var35 = var35.components;
                    var36['components'] = var35;
case 301:
                    if(!(var13 != var34)) { _fun0028_ip = 303; continue _fun0028 }
case 304:
                    var35 = var14;
                    var37 = var35.message;
                    var36 = var34.createThread;
                    var37['create_thread'] = var36;
                    var37 = var35.message;
                    var36 = var34.threadName;
                    var37['title'] = var36;
                    var35 = var35.message;
                    var36 = var34.publish;
                    var34 = var13 != var36;
                    if(!var34) { _fun0028_ip = 305; continue _fun0028 }
case 306:
                    var34 = var36;
case 305:
                    var35['publish'] = var34;
case 303:
                    if(!(var13 != var30)) { _fun0028_ip = 307; continue _fun0028 }
case 308:
                    var35 = var13 == var30;
                    var34 = undefined;
                    if(var35) { _fun0028_ip = 309; continue _fun0028 }
case 310:
                    var35 = var30.activity;
                    var34 = var35.session_id;
case 309:
                    var37 = var30.type;
                    var35 = _closure1_slot43;
                    var36 = var35.JOIN_REQUEST;
                    var35 = var34;
                    if(!(var37 !== var36)) { _fun0028_ip = 311; continue _fun0028 }
case 312:
                    var37 = var30.type;
                    var36 = _closure1_slot43;
                    var36 = var36.STREAM_REQUEST;
                    var35 = var34;
                    if(!(var37 !== var36)) { _fun0028_ip = 311; continue _fun0028 }
case 313:
                    var35 = var34;
                    if(!(var13 == var35)) { _fun0028_ip = 311; continue _fun0028 }
case 314:
                    var36 = _closure1_slot17;
                    var34 = var36.getSessionId;
                    var35 = var34.bind(var36)();
case 311:
                    if(!(var13 != var35)) { _fun0028_ip = 307; continue _fun0028 }
case 315:
                    var34 = {};
                    var36 = var30.type;
                    var34['type'] = var36;
                    var34['session_id'] = var35;
                    var35 = var30.targetUserId;
                    var34['target_user_id'] = var35;
                    var35 = var30.activity;
                    var30 = var35.party;
                    var30 = var13 != var30;
                    if(!var30) { _fun0028_ip = 316; continue _fun0028 }
case 317:
                    var36 = var35.party;
                    var36 = var36.id;
                    var30 = var13 != var36;
case 316:
                    if(!var30) { _fun0028_ip = 318; continue _fun0028 }
case 319:
                    var30 = var35.party;
                    var30 = var30.id;
                    var34['party_id'] = var30;
case 318:
                    var30 = var14;
                    var36 = var30.message;
                    var35 = var35.application_id;
                    var36['application_id'] = var35;
                    var30 = var30.message;
                    var30['activity'] = var34;
case 307:
                    if(!(var13 != var33)) { _fun0028_ip = 320; continue _fun0028 }
case 321:
                    var30 = var14;
                    var30 = var30.message;
                    var30['poll'] = var33;
case 320:
                    if(!(var13 != var32)) { _fun0028_ip = 322; continue _fun0028 }
case 323:
                    var30 = var14;
                    var30 = var30.message;
                    var30['shared_client_theme'] = var32;
case 322:
                    if(!(var13 != var31)) { _fun0028_ip = 324; continue _fun0028 }
case 325:
                    var30 = var14;
                    var30 = var30.message;
                    var30['sticker_ids'] = var31;
case 324:
                    var31 = _closure1_slot11;
                    var30 = var31.isEnabled;
                    var30 = var30.bind(var31)();
                    if(!var30) { _fun0028_ip = 326; continue _fun0028 }
case 327:
                    var30 = var14;
                    var31 = var30.message;
                    var30 = true;
                    var31['has_poggermode_enabled'] = var30;
case 326:
                    if(!var5) { _fun0028_ip = 328; continue _fun0028 }
case 329:
                    var5 = var14;
                    var30 = var5.message;
                    var5 = true;
                    var30['with_checkpoint'] = var5;
case 328:
                    if(!(var13 != var25)) { _fun0028_ip = 330; continue _fun0028 }
case 331:
                    var5 = var14;
                    var5 = var5.message;
                    var5['content_inventory_entry'] = var25;
case 330:
                    var5 = var13 != var24;
                    if(!var5) { _fun0028_ip = 332; continue _fun0028 }
case 333:
                    var25 = var24.length;
                    var5 = var25 > var22;
case 332:
                    if(!var5) { _fun0028_ip = 334; continue _fun0028 }
case 335:
                    var5 = var14;
                    var5 = var5.message;
                    var5['attachments'] = var24;
case 334:
                    var5 = var28;
                    if(!(var13 != var5)) { _fun0028_ip = 336; continue _fun0028 }
case 337:
                    var5 = var28;
                    var5 = var5.length;
                    if(!(var5 > var22)) { _fun0028_ip = 336; continue _fun0028 }
case 338: // try_start_0
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var5 = 72;
                    var5 = var25[var5];
                    var25 = var24.bind(var11)(var5);
                    var24 = var25.uploadMessageAttachments;
                    var5 = {};
                    var30 = _closure2_slot0;
                    var5['channelId'] = var30;
                    var5['nonce'] = var29;
                    var5['items'] = var28;
                    var5['message'] = var26;
                    var27 = _closure2_slot2;
                    var27 = var27.doNotNotifyOnError;
                    var27 = !var27;
                    var26 = var27;
                    if(!var27) { _fun0028_ip = 339; continue _fun0028 }
case 340:
                    var26 = undefined;
case 339:
                    var5['shouldUploadFailureSendNotification'] = var26;
                    var5 = var24.bind(var25)(var5);
                    SaveGenerator(address=1747);
case 341:
                    return var5;
case 342:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=23);
                    if(var24) { _fun0028_ip = 343; continue _fun0028 }
case 344:
                    var23 = var5;
                    if(!(var13 != var5)) { _fun0028_ip = 345; continue _fun0028 }
case 346:
                    var16 = var23.attachments;
                    var23 = var23.uploader;
                    _closure4_slot12 = var23;
                    if(!var18) { _fun0028_ip = 347; continue _fun0028 }
case 348:
                    var18 = var16;
                    if(!(var13 != var18)) { _fun0028_ip = 349; continue _fun0028 }
case 350:
                    var18 = var16;
                    var18 = var18.length;
                    if(!(var22 !== var18)) { _fun0028_ip = 349; continue _fun0028 }
case 347:
                    var18 = var16;
                    if(!(var13 != var18)) { _fun0028_ip = 336; continue _fun0028 }
case 351:
                    var18 = var14;
                    var22 = var18.message;
                    var24 = var16;
                    var23 = var24.map;
                    var18 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 73;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAttachmentPayload;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var18 = var23.bind(var24)(var18);
                    var22['attachments'] = var18;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var18 = 74;
                    var18 = var23[var18];
                    var22 = var22.bind(var11)(var18);
                    var18 = var22.areAdvancedSignalsEnabled;
                    var18 = var18.bind(var22)();
                    if(!var18) { _fun0028_ip = 336; continue _fun0028 }
case 352:
                    var18 = _closure1_slot55;
                    var16 = var18.bind(var11)(var16);
                    var20 = var16;
                    var16 = var16.bind(var11)();
                    var19 = var16;
                    var16 = var16.done;
                    var18 = 75;
                    if(var16) { _fun0028_ip = 336; continue _fun0028 }
case 353:
                    var16 = var19;
                    var16 = var16.value;
                    var12 = var16;
                    var16 = var16.item;
                    var21 = var16;
                    var16 = var13 == var16;
                    var22 = undefined;
                    if(var16) { _fun0028_ip = 354; continue _fun0028 }
case 355:
                    var16 = var21;
                    var16 = var16.clip;
                    var21 = var16;
                    var16 = var13 == var16;
                    var22 = undefined;
                    if(var16) { _fun0028_ip = 354; continue _fun0028 }
case 356:
                    var16 = var21;
                    var16 = var16.decision;
                    var21 = var16;
                    var16 = var13 == var16;
                    var22 = undefined;
                    if(var16) { _fun0028_ip = 354; continue _fun0028 }
case 357:
                    var16 = var21;
                    var16 = var16.signal;
                    var21 = var16;
                    var16 = var13 == var16;
                    var22 = undefined;
                    if(var16) { _fun0028_ip = 354; continue _fun0028 }
case 358:
                    var16 = var21;
                    var22 = var16.type;
case 354:
                    var23 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var18];
                    var16 = var23.bind(var11)(var16);
                    var16 = var16.ClipSignalTypes;
                    var16 = var16.DISTRIBUTED;
                    if(!(var22 !== var16)) { _fun0028_ip = 359; continue _fun0028 }
case 360:
                    var16 = var20;
                    var16 = var16.bind(var11)();
                    var19 = var16;
                    var16 = var16.done;
                    if(var16) { _fun0028_ip = 336; continue _fun0028 }
case 361:
                    _fun0028_ip = 353; continue _fun0028;
case 359:
                    var18 = {};
                    var16 = var12.item;
                    var16 = var16.clip;
                    var16 = var16.id;
                    var18['id'] = var16;
                    var12 = var12.item;
                    var12 = var12.clip;
                    var12 = var12.decision;
                    var15 = var12;
                    var16 = var13 == var12;
                    var12 = undefined;
                    if(var16) { _fun0028_ip = 362; continue _fun0028 }
case 363:
                    var16 = var15;
                    var16 = var16.signal;
                    var15 = var16;
                    var16 = var13 == var16;
                    var12 = undefined;
                    if(var16) { _fun0028_ip = 362; continue _fun0028 }
case 364:
                    var12 = var15.remoteTriggerClipId;
case 362:
                    var18['remoteTriggerClipId'] = var12;
                    var12 = global;
                    var16 = var12.JSON;
                    var15 = var16.stringify;
                    var18 = var15.bind(var16)(var18);
                    var15 = var12.HermesInternal;
                    var16 = var15.concat;
                    var15 = '__CLIP_METADATA__';
                    var16 = var16.bind(var15)(var18);
                    var15 = var14;
                    var14 = var15.message;
                    var15 = var15.message;
                    var15 = var15.content;
                    var12 = var12.HermesInternal;
                    var12 = var12.concat;
                    var12 = var12.bind(var17)(var15, var16);
                    var14['content'] = var12;
case 336: // try_end0
                    var12 = global;
                    var15 = var12.Promise;
                    var12 = var15.prototype;
                    var14 = Object.create(var12, {constructor: {value: var15}});
                    var51 = function(arg1, arg2) {
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
                        var3 = 71;
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
                        var9 = _closure1_slot50;
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
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
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
                                if(var2) { _fun0029_ip = 365; continue _fun0029 }
case 366:
                                var9 = _closure1_slot49;
                                var8 = var9.log;
                                var6 = {};
                                var2 = var3.hasErr;
                                var6['hasErr'] = var2;
                                var2 = var3.status;
                                var6['status'] = var2;
                                var10 = var3.body;
                                var7 = null;
                                var12 = var7 == var10;
                                var5 = undefined;
                                var2 = undefined;
                                if(var12) { _fun0029_ip = 148; continue _fun0029 }
case 367:
                                var2 = var10.code;
case 148:
                                var6['code'] = var2;
                                var2 = var3.err;
                                var6['error'] = var2;
                                var2 = 'Failed to send message';
                                var2 = var8.bind(var9)(var2, var6);
                                var2 = var3.hasErr;
                                if(var2) { _fun0029_ip = 368; continue _fun0029 }
case 122:
                                var6 = var3.status;
                                var2 = 400;
                                var8 = var6 >= var2;
                                var10 = undefined;
                                var2 = false;
                                if(!var8) { _fun0029_ip = 369; continue _fun0029 }
case 115:
                                var9 = var3.status;
                                var8 = 500;
                                var8 = var9 < var8;
                                var10 = undefined;
                                var2 = false;
                                if(!var8) { _fun0029_ip = 369; continue _fun0029 }
case 20:
                                var8 = var3.body;
                                var10 = undefined;
                                var2 = false;
                                if(!var8) { _fun0029_ip = 369; continue _fun0029 }
case 370:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot26;
                                var8 = var8.SLOWMODE_RATE_LIMITED;
                                if(!(var9 !== var8)) { _fun0029_ip = 371; continue _fun0029 }
case 372:
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
                                if(var8) { _fun0029_ip = 373; continue _fun0029 }
case 25:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot26;
                                var8 = var8.POGGERMODE_TEMPORARILY_DISABLED;
                                if(!(var9 !== var8)) { _fun0029_ip = 374; continue _fun0029 }
case 375:
                                var8 = var3.body;
                                var9 = var8.code;
                                var8 = _closure1_slot26;
                                var8 = var8.EXPLICIT_CONTENT;
                                if(!(var9 !== var8)) { _fun0029_ip = 376; continue _fun0029 }
case 377:
                                var8 = _closure4_slot6;
                                var8 = var7 != var8;
                                if(var8) { _fun0029_ip = 378; continue _fun0029 }
case 379:
                                var8 = _closure4_slot8;
case 378:
                                if(var8) { _fun0029_ip = 380; continue _fun0029 }
case 381:
                                var9 = _closure4_slot7;
                                var8 = var7 != var9;
case 380:
                                var10 = undefined;
                                var2 = false;
                                if(var8) { _fun0029_ip = 369; continue _fun0029 }
case 382:
                                var13 = _closure1_slot54;
                                var12 = var13.sendClydeError;
                                var9 = _closure2_slot0;
                                var8 = var3.body;
                                var8 = var8.code;
                                var8 = var12.bind(var13)(var9, var8);
                                var10 = undefined;
                                var2 = false;
                                _fun0029_ip = 369; continue _fun0029;
case 376:
                                var8 = _closure1_slot46;
                                var10 = var8.EXPLICIT_CONTENT;
                                var2 = false;
                                _fun0029_ip = 369; continue _fun0029;
case 374:
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
                                var10 = undefined;
                                var2 = false;
                                _fun0029_ip = 369; continue _fun0029;
case 373:
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
                                var15 = var3.body;
                                var15 = var15.code;
                                var13['code'] = var15;
                                var15 = var3.body;
                                var15 = var15.message;
                                var13['message'] = var15;
                                var8['errorResponseBody'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var10 = undefined;
                                var2 = false;
                                _fun0029_ip = 369; continue _fun0029;
case 371:
                                var8 = var3.body;
                                var15 = var8.retry_after;
                                var8 = var7 != var15;
                                if(!var8) { _fun0029_ip = 158; continue _fun0029 }
case 383:
                                var9 = 0;
                                var8 = var15 > var9;
case 158:
                                var10 = undefined;
                                var2 = false;
                                if(!var8) { _fun0029_ip = 369; continue _fun0029 }
case 384:
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
                                var13 = _closure1_slot24;
                                var13 = var13.SendMessage;
                                var8['slowmodeType'] = var13;
                                var13 = 79;
                                var13 = var17[var13];
                                var13 = var16.bind(var5)(var13);
                                var13 = var13.Millis;
                                var13 = var13.SECOND;
                                var13 = var15 * var13;
                                var8['cooldownMs'] = var13;
                                var8 = var9.bind(var12)(var8);
                                var10 = undefined;
                                var2 = false;
                                _fun0029_ip = 369; continue _fun0029;
case 368:
                                var6 = var3.err;
                                var8 = var6.code;
                                var2 = false;
                                var6 = 'ABORTED';
                                var10 = undefined;
                                if(!(var6 === var8)) { _fun0029_ip = 369; continue _fun0029 }
case 289:
                                var2 = true;
                                var10 = undefined;
case 369:
                                if(var2) { _fun0029_ip = 385; continue _fun0029 }
case 386:
                                var6 = _closure4_slot12;
                                if(!(var7 != var6)) { _fun0029_ip = 387; continue _fun0029 }
case 388:
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
                                var6['reason'] = var10;
                                var12 = true;
                                var6['noSendFailed'] = var12;
                                var6 = var8.bind(var9)(var6);
case 387:
                                var6 = var3.hasErr;
                                if(var6) { _fun0029_ip = 389; continue _fun0029 }
case 390:
                                var6 = _closure1_slot46;
                                var6 = var6.EXPLICIT_CONTENT;
                                if(!(var10 === var6)) { _fun0029_ip = 389; continue _fun0029 }
case 391:
                                var12 = _closure1_slot54;
                                var9 = var12.sendExplicitMediaClydeError;
                                var8 = _closure2_slot0;
                                var6 = var3.body;
                                var13 = var7 == var6;
                                var7 = undefined;
                                if(var13) { _fun0029_ip = 392; continue _fun0029 }
case 393:
                                var7 = var6.attachments;
case 392:
                                var13 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var6 = 50;
                                var6 = var15[var6];
                                var6 = var13.bind(var5)(var6);
                                var6 = var6.TrackMediaRedactionContext;
                                var6 = var6.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                                var6 = var9.bind(var12)(var8, var7, var6);
case 389:
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
                                var6['reason'] = var10;
                                var6 = var7.bind(var9)(var6);
                                var7 = _closure1_slot0;
                                var6 = 76;
                                var6 = var8[var6];
                                var8 = var7.bind(var5)(var6);
                                var7 = var8.logMessageSendFailure;
                                var6 = {};
                                var10 = var3.hasErr;
                                var9 = undefined;
                                if(var10) { _fun0029_ip = 394; continue _fun0029 }
case 395:
                                var9 = var3.status;
case 394:
                                var6['failureCode'] = var9;
                                var10 = var3.hasErr;
                                var9 = undefined;
                                if(!var10) { _fun0029_ip = 396; continue _fun0029 }
case 397:
                                var10 = var3.err;
                                var9 = var10.message;
case 396:
                                var6['errorMessage'] = var9;
                                var6 = var7.bind(var8)(var6);
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 71;
                                var6 = var8[var6];
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.cancelPendingSendRequests;
                                var2 = _closure2_slot0;
                                var7 = var6.bind(var7)(var2);
                                var6 = var7.forEach;
                                var2 = function(arg1) {
                                    var5 = arg1;
                                    var6 = _closure1_slot49;
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
                                _fun0029_ip = 398; continue _fun0029;
case 385:
                                var9 = _closure1_slot54;
                                var8 = var9.deleteMessage;
                                var7 = _closure2_slot0;
                                var6 = _closure4_slot11;
                                var2 = true;
                                var2 = var8.bind(var9)(var7, var6, var2);
case 398:
                                var2 = _closure5_slot1;
                                var2 = var2.bind(var5)(var3);
                                _fun0029_ip = 399; continue _fun0029;
case 365:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 65;
                                var5 = var5[var2];
                                var2 = undefined;
                                var9 = var6.bind(var2)(var5);
                                var6 = var9.donateSentMessage;
                                var5 = _closure4_slot0;
                                var13 = _closure2_slot0;
                                var5 = var6.bind(var9)(var5, var13);
                                var12 = _closure1_slot54;
                                var10 = var12.receiveMessage;
                                var25 = var3.body;
                                var6 = {};
                                var5 = {};
                                var5['duration'] = var14;
                                var14 = _closure5_slot3;
                                var5['queueSize'] = var14;
                                var6['sendAnalytics'] = var5;
                                var5 = _closure4_slot6;
                                var6['poll'] = var5;
                                var24 = true;
                                var27 = var12;
                                var26 = var13;
                                var23 = var6;
                                var5 = var27[var10](var26, var25, var24, var23, var22);
                                var5 = _closure2_slot2;
                                var5 = var5.alsoForwardToChannelId;
                                var9 = null;
                                if(!(var9 != var5)) { _fun0029_ip = 400; continue _fun0029 }
case 313:
                                var6 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var5 = 77;
                                var5 = var13[var5];
                                var12 = var6.bind(var2)(var5);
                                var10 = var12.sendForward;
                                var6 = _closure1_slot0;
                                var5 = 52;
                                var5 = var13[var5];
                                var13 = var6.bind(var2)(var5);
                                var6 = var13.createMessageRecord;
                                var5 = var3.body;
                                var6 = var6.bind(var13)(var5);
                                var5 = _closure2_slot2;
                                var5 = var5.alsoForwardToChannelId;
                                var10 = var10.bind(var12)(var6, var5);
                                var6 = var10.then;
                                var5 = function() {
                                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                                        var2 = {};
                                        var1 = _closure6_slot0;
                                        var6 = var1.body;
                                        var3 = null;
                                        var7 = var3 == var6;
                                        var1 = undefined;
                                        var5 = undefined;
                                        if(var7) { _fun0030_ip = 401; continue _fun0030 }
case 108:
                                        var5 = var6.id;
case 401:
                                        var2['referencedMessageId'] = var5;
                                        var5 = _closure6_slot0;
                                        var6 = var5.body;
                                        var7 = var3 == var6;
                                        var5 = undefined;
                                        if(var7) { _fun0030_ip = 402; continue _fun0030 }
case 4:
                                        var5 = var6.guild_id;
case 402:
                                        var2['guildId'] = var5;
                                        var4 = _closure6_slot0;
                                        var4 = var4.body;
                                        var5 = var3 == var4;
                                        var3 = undefined;
                                        if(var5) { _fun0030_ip = 145; continue _fun0030 }
case 239:
                                        var3 = var4.channel_id;
case 145:
                                        var2['channelId'] = var3;
                                        var3 = _closure2_slot2;
                                        var3 = var3.alsoForwardToChannelId;
                                        var2['destinationChannelId'] = var3;
                                        var9 = var2.referencedMessageId;
                                        var8 = var2.guildId;
                                        var7 = var2.channelId;
                                        var6 = var2.destinationChannelId;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 43;
                                        var3 = var5[var3];
                                        var5 = var4.bind(var1)(var3);
                                        var4 = var5.track;
                                        var2 = _closure1_slot27;
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
                                var10 = var6.bind(var10)(var5);
                                var6 = var10.catch;
                                var5 = function(arg1) {
                                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                                        var7 = arg1;
                                        var5 = _closure1_slot49;
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
                                        if(var9) { _fun0031_ip = 146; continue _fun0031 }
case 87:
                                        var6 = var8.id;
case 146:
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
                                var5 = var6.bind(var10)(var5);
case 400:
                                var6 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var5 = 57;
                                var5 = var10[var5];
                                var10 = var6.bind(var2)(var5);
                                var6 = var10.cast;
                                var5 = _closure2_slot0;
                                var10 = var6.bind(var10)(var5);
                                var6 = _closure1_slot8;
                                var5 = var6.getRequest;
                                var5 = var5.bind(var6)(var10);
                                if(!(var9 != var5)) { _fun0029_ip = 403; continue _fun0029 }
case 323:
                                var14 = var5.guildId;
                                var12 = var5.userId;
                                var13 = var5.applicationStatus;
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 78;
                                var5 = var10[var5];
                                var10 = var6.bind(var2)(var5);
                                var6 = var10.trackMemberApplicationInterviewMessage;
                                var5 = {};
                                var5['guildId'] = var14;
                                var14 = _closure2_slot0;
                                var5['channelId'] = var14;
                                var14 = var3.body;
                                var14 = var14.id;
                                var5['messageId'] = var14;
                                var5['joinRequestStatus'] = var13;
                                var5['joinRequestUserId'] = var12;
                                var5 = var6.bind(var10)(var5);
case 403:
                                var10 = _closure1_slot10;
                                var6 = var10.recordMessageSendApiResponse;
                                var5 = _closure4_slot10;
                                var5 = var6.bind(var10)(var5);
                                var6 = _closure4_slot9;
                                var5 = _closure1_slot35;
                                var5 = var5.REPLY;
                                if(!(var6 === var5)) { _fun0029_ip = 404; continue _fun0029 }
case 405:
                                var5 = var3.body;
                                var17 = var5.id;
                                var13 = _closure2_slot0;
                                var5 = _closure4_slot5;
                                var5 = var9 == var5;
                                var10 = undefined;
                                if(var5) { _fun0029_ip = 338; continue _fun0029 }
case 406:
                                var5 = _closure4_slot5;
                                var10 = var5.message_id;
case 338:
                                var6 = _closure1_slot12;
                                var5 = var6.getPendingReplyActionSource;
                                var6 = var5.bind(var6)(var13);
                                var5 = 'message_swipe';
                                if(!(var5 !== var6)) { _fun0029_ip = 407; continue _fun0029 }
case 408:
                                var5 = 'message_shortcut';
                                if(!(var5 === var6)) { _fun0029_ip = 404; continue _fun0029 }
case 409:
                                var6 = _closure1_slot18;
                                var5 = var6.getChannel;
                                var18 = var5.bind(var6)(var13);
                                var6 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 43;
                                var5 = var12[var5];
                                var14 = var6.bind(var2)(var5);
                                var12 = var14.track;
                                var5 = _closure1_slot27;
                                var6 = var5.MESSAGE_SHORTCUT_ACTION_SENT;
                                var5 = {};
                                var5['message_id'] = var17;
                                var5['channel_id'] = var13;
                                var16 = var9 == var18;
                                var15 = undefined;
                                if(var16) { _fun0029_ip = 410; continue _fun0029 }
case 411:
                                var15 = var18.guild_id;
case 410:
                                var5['guild_id'] = var15;
                                var5['original_message_id'] = var10;
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
                                if(var21) { _fun0029_ip = 412; continue _fun0029 }
case 413:
                                var15 = var18.guild_id;
case 412:
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
                                _fun0029_ip = 404; continue _fun0029;
case 407:
                                var5 = var9 != var10;
                                var16 = null;
                                if(!var5) { _fun0029_ip = 414; continue _fun0029 }
case 415:
                                var6 = _closure1_slot21;
                                var5 = var6.getMessage;
                                var16 = var5.bind(var6)(var13, var10);
case 414:
                                var6 = _closure1_slot18;
                                var5 = var6.getChannel;
                                var15 = var5.bind(var6)(var13);
                                var6 = _closure1_slot25;
                                var5 = var6.getCurrentUser;
                                var14 = var5.bind(var6)();
                                var6 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var5 = 43;
                                var5 = var10[var5];
                                var12 = var6.bind(var2)(var5);
                                var10 = var12.track;
                                var5 = _closure1_slot27;
                                var6 = var5.MESSAGE_SWIPE_ACTION_SENT;
                                var5 = {};
                                var5['message_id'] = var17;
                                var5['channel_id'] = var13;
                                var17 = var9 == var15;
                                var13 = undefined;
                                if(var17) { _fun0029_ip = 416; continue _fun0029 }
case 417:
                                var13 = var15.guild_id;
case 416:
                                var5['guild_id'] = var13;
                                var13 = 'reply';
                                var5['swipe_action'] = var13;
                                var13 = var9 != var14;
                                if(!var13) { _fun0029_ip = 418; continue _fun0029 }
case 419:
                                var15 = var14.id;
                                var17 = var9 == var16;
                                var14 = undefined;
                                if(var17) { _fun0029_ip = 420; continue _fun0029 }
case 421:
                                var16 = var16.author;
                                var14 = var16.id;
case 420:
                                var13 = var15 === var14;
case 418:
                                var5['is_own_message'] = var13;
                                var5 = var10.bind(var12)(var6, var5);
case 404:
                                var12 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var6 = 46;
                                var5 = var10[var6];
                                var15 = var12.bind(var2)(var5);
                                var14 = var15.dispatch;
                                var13 = {};
                                var5 = 'SLOWMODE_RESET_COOLDOWN';
                                var13['type'] = var5;
                                var5 = _closure1_slot24;
                                var5 = var5.SendMessage;
                                var13['slowmodeType'] = var5;
                                var5 = _closure2_slot0;
                                var13['channelId'] = var5;
                                var13 = var14.bind(var15)(var13);
                                var13 = var10[var6];
                                var15 = var12.bind(var2)(var13);
                                var14 = var15.dispatch;
                                var13 = {};
                                var16 = 'EMOJI_TRACK_USAGE';
                                var13['type'] = var16;
                                var16 = _closure4_slot1;
                                var13['emojiUsed'] = var16;
                                var13 = var14.bind(var15)(var13);
                                var13 = var10[var6];
                                var15 = var12.bind(var2)(var13);
                                var14 = var15.dispatch;
                                var13 = {};
                                var16 = 'STICKER_TRACK_USAGE';
                                var13['type'] = var16;
                                var16 = _closure4_slot4;
                                var13['stickerIds'] = var16;
                                var13 = var14.bind(var15)(var13);
                                var10 = var10[var6];
                                var13 = var12.bind(var2)(var10);
                                var12 = var13.dispatch;
                                var10 = {};
                                var14 = 'LOCAL_MESSAGE_CREATE';
                                var10['type'] = var14;
                                var14 = {};
                                var14['channel_id'] = var5;
                                var16 = _closure1_slot25;
                                var15 = var16.getCurrentUser;
                                var15 = var15.bind(var16)();
                                var14['author'] = var15;
                                var10['message'] = var14;
                                var10 = var12.bind(var13)(var10);
                                var10 = {};
                                var12 = _closure4_slot0;
                                var10['content'] = var12;
                                var10['channelId'] = var5;
                                var5 = var3.body;
                                var5 = var5.id;
                                var10['messageId'] = var5;
                                var5 = _closure4_slot2;
                                var12 = var9 != var5;
                                var17 = 'chat_input';
                                var5 = var17;
                                if(!var12) { _fun0029_ip = 422; continue _fun0029 }
case 423:
                                var5 = _closure4_slot2;
case 422:
                                var10['location'] = var5;
                                var5 = _closure4_slot3;
                                var10['inviteAnalyticsMetadata'] = var5;
                                var5 = function trackCodedLinks(arg1) {
                                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                                        if(!(var3 === var1)) { _fun0032_ip = 7; continue _fun0032 }
case 424:
                                        var3 = {};
case 7:
                                        var _closure7_slot4 = var3;
                                        var _closure7_slot5 = var1;
                                        var6 = _closure1_slot17;
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
case 0:
                                                var1 = arg1;
                                                var7 = var1.type;
                                                var4 = var1.code;
                                                var8 = var1.url;
                                                var5 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var6 = 30;
                                                var3 = var1[var6];
                                                var1 = undefined;
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.INVITE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 425; continue _fun0033 }
case 142:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.TEMPLATE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 426; continue _fun0033 }
case 193:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.BUILD_OVERRIDE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 250:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EXPERIMENT;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 115:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.MANUAL_BUILD_OVERRIDE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 428:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EVENT;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 202:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.CHANNEL_LINK;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 170:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_PROFILE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 429; continue _fun0033 }
case 430:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT;
                                                if(!(var7 !== var3)) { _fun0033_ip = 431; continue _fun0033 }
case 206:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                                                if(!(var7 !== var3)) { _fun0033_ip = 301; continue _fun0033 }
case 432:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.ACTIVITY_BOOKMARK;
                                                if(!(var7 !== var3)) { _fun0033_ip = 397; continue _fun0033 }
case 238:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                                                if(!(var7 !== var3)) { _fun0033_ip = 433; continue _fun0033 }
case 434:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.GUILD_PRODUCT;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 132:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.SERVER_SHOP;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 435:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.SOCIAL_LAYER_STOREFRONT;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 436:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.QUESTS_EMBED;
                                                if(!(var7 !== var3)) { _fun0033_ip = 437; continue _fun0033 }
case 272:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.APP_OAUTH2_LINK;
                                                if(!(var7 !== var3)) { _fun0033_ip = 438; continue _fun0033 }
case 439:
                                                var5 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var3 = var3[var6];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.CodedLinkType;
                                                var3 = var3.COLLECTIBLES_SHOP;
                                                if(!(var7 !== var3)) { _fun0033_ip = 427; continue _fun0033 }
case 440:
                                                var3 = global;
                                                var5 = var3.Error;
                                                var3 = var3.HermesInternal;
                                                var6 = var3.concat;
                                                var3 = 'Unknown coded link type: ';
                                                var3 = var6.bind(var3)(var7);
                                                var3 = var5.bind(var1)(var3);
                                                throw var3;
case 438:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var3 = 31;
                                                var3 = var6[var3];
                                                var9 = var5.bind(var1)(var3);
                                                var7 = var9.trackWithMetadata;
                                                var3 = _closure1_slot27;
                                                var5 = var3.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                var3 = {};
                                                var3['application_id'] = var4;
                                                var3 = var7.bind(var9)(var5, var3);
                                                var5 = _closure1_slot0;
                                                var3 = 33;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot44;
                                                var5 = var3.OAUTH;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 437:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 36;
                                                var7 = var6[var3];
                                                var11 = var5.bind(var1)(var7);
                                                var9 = var11.getAdMetadataRaw;
                                                var10 = 37;
                                                var7 = var6[var10];
                                                var7 = var5.bind(var1)(var7);
                                                var7 = var7.QuestContent;
                                                var7 = var7.QUESTS_EMBED;
                                                var13 = var9.bind(var11)(var7);
                                                var3 = var6[var3];
                                                var9 = var5.bind(var1)(var3);
                                                var7 = var9.getAdMetadataSealed;
                                                var3 = var6[var10];
                                                var3 = var5.bind(var1)(var3);
                                                var3 = var3.QuestContent;
                                                var3 = var3.QUESTS_EMBED;
                                                var11 = var7.bind(var9)(var3);
                                                var3 = 38;
                                                var3 = var6[var3];
                                                var6 = var5.bind(var1)(var3);
                                                var5 = var6.trackQuestEvent;
                                                var3 = {};
                                                var3['questId'] = var4;
                                                var7 = _closure1_slot27;
                                                var7 = var7.QUEST_LINK_SHARED;
                                                var3['event'] = var7;
                                                var7 = {};
                                                var9 = null;
                                                var14 = var9 != var13;
                                                var12 = null;
                                                if(!var14) { _fun0033_ip = 441; continue _fun0033 }
case 442:
                                                var12 = var13;
case 441:
                                                var7['metadata_raw'] = var12;
                                                var12 = var9 != var11;
                                                var9 = null;
                                                if(!var12) { _fun0033_ip = 443; continue _fun0033 }
case 444:
                                                var9 = var11;
case 443:
                                                var7['metadata_sealed'] = var9;
                                                var3['properties'] = var7;
                                                var7 = true;
                                                var3['trackGuildAndChannelMetadata'] = var7;
                                                var9 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var7 = var7[var10];
                                                var7 = var9.bind(var1)(var7);
                                                var7 = var7.QuestContent;
                                                var7 = var7.QUESTS_EMBED;
                                                var3['sourceQuestContent'] = var7;
                                                var3 = var5.bind(var6)(var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 433:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 33;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot44;
                                                var5 = var3.ACTIVITY_INVITE;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 397:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var3 = 35;
                                                var3 = var7[var3];
                                                var5 = var6.bind(var1)(var3);
                                                var3 = var5.extractActivityBookmarkParams;
                                                var3 = var3.bind(var5)(var8);
                                                var5 = 33;
                                                var5 = var7[var5];
                                                var8 = var6.bind(var1)(var5);
                                                var7 = var8.trackAppEmbedLinkSent;
                                                var5 = _closure1_slot44;
                                                var6 = var5.ACTIVITY;
                                                var5 = var3.referrerId;
                                                var9 = null;
                                                if(!(var9 == var5)) { _fun0033_ip = 445; continue _fun0033 }
case 446:
                                                var5 = _closure7_slot5;
case 445:
                                                var15 = var3.customId;
                                                var19 = var8;
                                                var18 = var4;
                                                var17 = var6;
                                                var16 = var5;
                                                var3 = var19[var7](var18, var17, var16, var15, var14);
                                                _fun0033_ip = 427; continue _fun0033;
case 301:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 34;
                                                var3 = var6[var3];
                                                var5 = var5.bind(var1)(var3);
                                                var3 = var5.parseStorefrontSkuCodedLink;
                                                var3 = var3.bind(var5)(var4);
                                                var5 = null;
                                                if(!(var5 != var3)) { _fun0033_ip = 427; continue _fun0033 }
case 447:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var5 = 32;
                                                var5 = var7[var5];
                                                var7 = var6.bind(var1)(var5);
                                                var6 = var7.trackAppDirectoryProfileEmbed;
                                                var5 = var3.applicationId;
                                                var3 = 'storefront_sku';
                                                var3 = var6.bind(var7)(var5, var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 431:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var6[var3];
                                                var6 = var5.bind(var1)(var3);
                                                var5 = var6.trackAppDirectoryProfileEmbed;
                                                var3 = 'storefront';
                                                var3 = var5.bind(var6)(var4, var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 429:
                                                var5 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var3 = 32;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var3 = var7.trackAppDirectoryProfileEmbed;
                                                var3 = var3.bind(var7)(var4);
                                                var3 = 33;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackAppEmbedLinkSent;
                                                var3 = _closure1_slot44;
                                                var5 = var3.APP_DISCOVERY;
                                                var3 = _closure7_slot5;
                                                var3 = var6.bind(var7)(var4, var5, var3);
                                                _fun0033_ip = 427; continue _fun0033;
case 426:
                                                var5 = _closure1_slot9;
                                                var3 = var5.getGuildTemplate;
                                                var8 = var3.bind(var5)(var4);
                                                var3 = null;
                                                if(!(var3 != var8)) { _fun0033_ip = 448; continue _fun0033 }
case 316:
                                                var5 = var8.state;
                                                var3 = _closure1_slot45;
                                                var3 = var3.RESOLVING;
                                                if(!(var5 !== var3)) { _fun0033_ip = 448; continue _fun0033 }
case 400:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var3 = 31;
                                                var3 = var6[var3];
                                                var7 = var5.bind(var1)(var3);
                                                var6 = var7.trackWithMetadata;
                                                var3 = _closure1_slot27;
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
                                                _fun0033_ip = 427; continue _fun0033;
case 448:
                                                return var1;
case 425:
                                                var3 = _closure1_slot57;
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
case 427:
                                                return var1;
                                            }
                                        };
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    }
                                };
                                var5 = var5.bind(var2)(var10);
                                var15 = _closure4_slot0;
                                var14 = _closure2_slot0;
                                var5 = var3.body;
                                var13 = var5.id;
                                var5 = _closure4_slot2;
                                var5 = var9 != var5;
                                var12 = var17;
                                if(!var5) { _fun0029_ip = 449; continue _fun0029 }
case 450:
                                var12 = _closure4_slot2;
case 449:
                                var5 = _closure2_slot2;
                                var10 = var5.isGiftLinkSentOnBehalfOfUser;
                                var10 = !var10;
                                var11 = function trackGiftCodes(arg1, arg2, arg3, arg4, arg5) {
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
                                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                                            var4 = _closure1_slot18;
                                            var3 = var4.getChannel;
                                            var2 = _closure7_slot0;
                                            var6 = var3.bind(var4)(var2);
                                            var2 = null;
                                            if(!(var2 != var6)) { _fun0034_ip = 122; continue _fun0034 }
case 3:
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var2 = 31;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var4 = var4.bind(var2)(var3);
                                            var3 = var4.trackWithMetadata;
                                            var1 = _closure1_slot27;
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
case 122:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var22 = !var10;
                                var27 = undefined;
                                var26 = var15;
                                var25 = var14;
                                var24 = var13;
                                var23 = var12;
                                var10 = var27[var11](var26, var25, var24, var23, var22, var21);
                                var5 = var5.gifMetadata;
                                if(!(var9 != var5)) { _fun0029_ip = 451; continue _fun0029 }
case 452:
                                var5 = _closure2_slot2;
                                var13 = var5.gifMetadata;
                                var11 = _closure2_slot0;
                                var5 = var3.body;
                                var14 = var5.id;
                                var5 = _closure4_slot2;
                                var5 = var9 != var5;
                                if(!var5) { _fun0029_ip = 453; continue _fun0029 }
case 264:
                                var17 = _closure4_slot2;
case 453:
                                var10 = _closure1_slot18;
                                var5 = var10.getChannel;
                                var15 = var5.bind(var10)(var11);
                                if(!(var9 != var15)) { _fun0029_ip = 451; continue _fun0029 }
case 454:
                                var10 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var5 = 43;
                                var5 = var16[var5];
                                var12 = var10.bind(var2)(var5);
                                var11 = var12.track;
                                var5 = _closure1_slot27;
                                var10 = var5.MESSAGE_SENT_WITH_GIF;
                                var5 = {};
                                var5['location'] = var17;
                                var5['message_id'] = var14;
                                var14 = var13.gif_provider;
                                var5['gif_provider'] = var14;
                                var14 = var13.load_id;
                                var5['load_id'] = var14;
                                var14 = var13.source_object;
                                var5['source_object'] = var14;
                                var14 = var13.gif_url;
                                var5['gif_url'] = var14;
                                var13 = var13.gif_id;
                                var5['gif_id'] = var13;
                                var14 = _closure1_slot0;
                                var13 = 31;
                                var17 = var16[var13];
                                var19 = var14.bind(var2)(var17);
                                var18 = var19.collectGuildAnalyticsMetadata;
                                var17 = var15.getGuildId;
                                var17 = var17.bind(var15)();
                                var25 = var18.bind(var19)(var17);
                                var26 = var5;
                                var17 = copyDataProperties(var26, var25);
                                var13 = var16[var13];
                                var14 = var14.bind(var2)(var13);
                                var13 = var14.collectChannelAnalyticsMetadata;
                                var25 = var13.bind(var14)(var15);
                                var26 = var5;
                                var13 = copyDataProperties(var26, var25);
                                var5 = var11.bind(var12)(var10, var5);
case 451:
                                var5 = _closure4_slot12;
                                if(!(var9 != var5)) { _fun0029_ip = 455; continue _fun0029 }
case 456:
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
case 455:
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var2)(var3);
case 399:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    };
                    var52 = var14;
                    var12 = new var52[var15](var51, var50);
                    var12 = var12 instanceof Object ? var12 : var14;
                    return var12;
case 349:
                    return var11;
case 345:
                    return var11;
case 343:
                    return var5;
case 457: // catch_target0
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
                    var5 = 76;
                    var5 = var14[var5];
                    var14 = var12.bind(var11)(var5);
                    var12 = var14.logMessageSendFailure;
                    var5 = {};
                    var17 = var17.items;
                    var5['fileItems'] = var17;
                    var5['failureCode'] = var16;
                    var16 = var13 == var15;
                    var15 = undefined;
                    if(var16) { _fun0028_ip = 458; continue _fun0028 }
case 459:
                    var16 = var7;
                    var15 = var16.msg;
case 458:
                    var5['errorMessage'] = var15;
                    var5 = var12.bind(var14)(var5);
                    var12 = var10;
                    var12 = var13 == var12;
                    var5 = var12;
                    if(var12) { _fun0028_ip = 460; continue _fun0028 }
case 461:
                    var51 = var9;
                    var50 = var8;
                    var49 = var7;
                    var48 = var6;
                    var52 = undefined;
                    var5 = var52[var10](var51, var50, var49, var48, var47);
case 460:
                    var5 = undefined;
                    return var5;
case 265:
                    var6 = _closure1_slot50;
                    var5 = var6.info;
                    var3 = 'Converting channel to a private channel';
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var4 = _closure1_slot50;
                        var3 = var4.info;
                        var2 = 'Finished converting channel to a private channel';
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure1_slot54;
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
case 264:
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
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var4 = arg3;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 68;
            var5 = var5[var3];
            var3 = undefined;
            var10 = var8.bind(var3)(var5);
            var9 = var10.hasFlag;
            var8 = var6.flags;
            var5 = _closure1_slot33;
            var5 = var5.IS_COMPONENTS_V2;
            var5 = var9.bind(var10)(var8, var5);
            if(!var5) { _fun0035_ip = 193; continue _fun0035 }
case 262:
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
            if(!(!(var9 > var5))) { _fun0035_ip = 462; continue _fun0035 }
case 193:
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
case 462:
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
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0036_ip = 88; continue _fun0036 }
case 79:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var11 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = _closure1_slot19;
                    var2 = var6.getEditActionSource;
                    var6 = var2.bind(var6)(var7);
                    var2 = 'message_swipe';
                    if(!(var2 === var6)) { _fun0036_ip = 463; continue _fun0036 }
case 424:
                    var6 = _closure1_slot18;
                    var2 = var6.getChannel;
                    var12 = var2.bind(var6)(var7);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 43;
                    var2 = var8[var2];
                    var9 = var6.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot27;
                    var6 = var2.MESSAGE_SWIPE_ACTION_SENT;
                    var2 = {};
                    var2['message_id'] = var11;
                    var2['channel_id'] = var7;
                    var11 = null;
                    var13 = var11 == var12;
                    var11 = undefined;
                    if(var13) { _fun0036_ip = 199; continue _fun0036 }
case 464:
                    var11 = var12.guild_id;
case 199:
                    var2['guild_id'] = var11;
                    var11 = 'edit';
                    var2['swipe_action'] = var11;
                    var11 = true;
                    var2['is_own_message'] = var11;
                    var2 = var8.bind(var9)(var6, var2);
case 463:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 82;
                    var2 = var8[var2];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var6)(var7);
                    SaveGenerator(address=196);
case 465:
                    return var2;
case 466:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0036_ip = 467; continue _fun0036 }
case 22:
                    var11 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var7 = _closure1_slot21;
                    var6 = var7.getMessage;
                    var12 = var6.bind(var7)(var11, var9);
                    var7 = null;
                    var8 = var7 != var12;
                    var6 = undefined;
                    if(!var8) { _fun0036_ip = 468; continue _fun0036 }
case 469:
                    var13 = var12.type;
                    var8 = _closure1_slot35;
                    var8 = var8.REPLY;
                    var6 = undefined;
                    if(!(var13 === var8)) { _fun0036_ip = 468; continue _fun0036 }
case 186:
                    var14 = _closure1_slot13;
                    var13 = var14.getMessageByReference;
                    var8 = var12.messageReference;
                    var8 = var13.bind(var14)(var8);
                    var14 = var8.state;
                    var13 = _closure1_slot14;
                    var13 = var13.LOADED;
                    var6 = undefined;
                    if(!(var14 === var13)) { _fun0036_ip = 468; continue _fun0036 }
case 152:
                    var13 = var12.mentions;
                    var12 = var13.includes;
                    var8 = var8.message;
                    var8 = var8.author;
                    var8 = var8.id;
                    var8 = var12.bind(var13)(var8);
                    var6 = undefined;
                    if(var8) { _fun0036_ip = 468; continue _fun0036 }
case 6:
                    var8 = {};
                    var12 = global;
                    var14 = var12.Object;
                    var13 = var14.values;
                    var12 = _closure1_slot36;
                    var12 = var13.bind(var14)(var12);
                    var8['parse'] = var12;
                    var12 = false;
                    var8['replied_user'] = var12;
                    var6 = var8;
case 468:
                    var12 = _closure1_slot21;
                    var8 = var12.getMessage;
                    var13 = var8.bind(var12)(var11, var9);
                    var7 = var7 != var13;
                    if(!var7) { _fun0036_ip = 470; continue _fun0036 }
case 471:
                    var12 = var13.hasFlag;
                    var8 = _closure1_slot33;
                    var8 = var8.CROSSPOSTED;
                    var7 = var12.bind(var13)(var8);
case 470:
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
                    var9 = 71;
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
                        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                            var8 = arg1;
                            var1 = var8.hasErr;
                            var9 = !var1;
                            if(!var9) { _fun0037_ip = 262; continue _fun0037 }
case 254:
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
case 262:
                            if(!var9) { _fun0037_ip = 472; continue _fun0037 }
case 473:
                            var4 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 71;
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
case 472:
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
                            if(var10) { _fun0037_ip = 56; continue _fun0037 }
case 52:
                            if(var9) { _fun0037_ip = 104; continue _fun0037 }
case 171:
                            var9 = var3.0x1HBD;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0037_ip = 474; continue _fun0037;
case 104:
                            var9 = var3.Hym4ix;
                            var9 = var6.bind(var7)(var9);
                            var9 = var4.bind(var5)(var9);
                            _fun0037_ip = 474; continue _fun0037;
case 56:
                            var3 = var3.Atp7FP;
                            var3 = var6.bind(var7)(var3);
                            var3 = var4.bind(var5)(var3);
case 474:
                            var7 = _closure1_slot54;
                            var6 = var7.endEditMessage;
                            var4 = _closure2_slot0;
                            var9 = var8.hasErr;
                            var3 = undefined;
                            if(var9) { _fun0037_ip = 475; continue _fun0037 }
case 188:
                            var3 = var8;
case 475:
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure1_slot54;
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
case 467:
                    return var2;
case 88:
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
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0038_ip = 462; continue _fun0038 }
case 117:
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
case 4:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0038_ip = 476; continue _fun0038 }
case 477:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 51;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var11 = _closure1_slot28;
                    var10 = var11.MESSAGE;
                    var9 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var7 = var10.bind(var11)(var9, var7);
                    var4['url'] = var7;
                    var7 = {};
                    var8 = _closure1_slot33;
                    var8 = var8.SUPPRESS_EMBEDS;
                    var7['flags'] = var8;
                    var4['body'] = var7;
                    var7 = true;
                    var4['oldFormErrors'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 476:
                    return var2;
case 462:
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
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0039_ip = 14; continue _fun0039 }
case 117:
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
case 4:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0039_ip = 478; continue _fun0039 }
case 477:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 51;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.patch;
                    var4 = {};
                    var11 = _closure1_slot28;
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
case 478:
                    return var2;
case 14:
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
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0040_ip = 108; continue _fun0040 }
case 109:
            var3 = false;
case 108:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0041_ip = 116; continue _fun0041 }
case 79:
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
                        if(var2) { _fun0041_ip = 203; continue _fun0041 }
case 103:
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
case 479:
                        return var2;
case 480:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0041_ip = 481; continue _fun0041 }
case 482:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 51;
                        var5 = var10[var5];
                        var5 = var6.bind(var7)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.del;
                        var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var11 = _closure1_slot28;
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
                        _fun0041_ip = 43; continue _fun0041;
case 481:
                        return var2;
case 203:
                        var2 = undefined;
                        var2 = var3.bind(var2)();
case 43:
                        var2 = undefined;
                        return var2;
case 116:
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
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var5 = this;
            var3 = var1.loggingName;
            var2 = null;
            if(!(var2 != var3)) { _fun0042_ip = 483; continue _fun0042 }
case 80:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 31;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var4);
            var4 = var6.trackWithMetadata;
            var2 = _closure1_slot27;
            var3 = var2.AUTOMATED_MESSAGE_DISMISSED;
            var2 = {};
            var7 = var1.loggingName;
            var2['message_name'] = var7;
            var7 = var1.author;
            var7 = var7.username;
            var2['message_author'] = var7;
            var2 = var4.bind(var6)(var3, var2);
case 483:
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
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0043_ip = 484; continue _fun0043 }
case 117: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 51;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'failImmediatelyWhenRateLimited': true, 'rejectWithError': false};
                    var9 = _closure1_slot28;
                    var8 = var9.MESSAGE_CROSSPOST;
                    var7 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var5 = var8.bind(var9)(var7, var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=102);
case 485:
                    return var2;
case 367:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0043_ip = 486; continue _fun0043 }
case 91: // try_end0
                    return var2;
case 486:
                    return var2;
case 487: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var6 = var2;
                    var3 = var2.status;
                    var2 = 429;
                    if(!(var2 !== var3)) { _fun0043_ip = 488; continue _fun0043 }
case 250:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 44;
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
                    _fun0043_ip = 489; continue _fun0043;
case 488:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 44;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.77cuqz;
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
case 489:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 84;
                    var3 = var10[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var6 = 44;
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
case 484:
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
    var _closure1_slot54 = var2;
    var4 = 85;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/MessageActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();