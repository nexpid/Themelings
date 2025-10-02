// app/modules/rpc/RPCHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var13 = dependencyMap;
        var _closure1_slot0 = var12;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var13;
        var1 = function recurseReplaceContentTree(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = var1.type;
                var2 = 'customEmoji';
                if(!(var2 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = 'emoji';
                var1['type'] = var2;
case 2:
                var3 = var1.type;
                var2 = 'emoji';
                var2 = var2 === var3;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var1.src;
case 4:
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot28;
                var3 = var1.src;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1['src'] = var2;
case 6:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.isArray;
                var2 = var1.content;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = var1.content;
                var3 = var4.map;
                var2 = _closure1_slot27;
                var2 = var3.bind(var4)(var2);
                var1['content'] = var2;
case 8:
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var7 = function getRemoteIconURL(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var8 = arg1;
                var2 = /^http/;
                var1 = var2.test;
                var2 = var1.bind(var2)(var8);
                var1 = var8;
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = global;
                var3 = var2.location;
                var7 = var3.protocol;
                var3 = var2.location;
                var6 = var3.host;
                var4 = var8.charAt;
                var3 = 0;
                var3 = var4.bind(var8)(var3);
                var5 = '/';
                if(!(var5 === var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var5 = '';
case 12:
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var14 = '';
                var12 = '//';
                var13 = var7;
                var11 = var6;
                var10 = var5;
                var9 = var8;
                var1 = var14[var4](var13, var12, var11, var10, var9, var8);
case 10:
                return var1;
            }
        };
        var _closure1_slot28 = var7;
        var6 = function validateOrigin(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = new Array(0);
case 14:
                var2 = var3.indexOf;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                var1 = var2 > var1;
                return var1;
            }
        };
        var _closure1_slot29 = var6;
        var5 = function transformInternalTextMessage(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var6 = undefined;
                var8 = var3.bind(var6)(var1);
                var7 = var8.parseToAST;
                var5 = var2.content;
                var3 = {};
                var1 = var2.channel_id;
                var3['channelId'] = var1;
                var1 = true;
                var5 = var7.bind(var8)(var5, var1, var3);
                var3 = var5.map;
                var1 = _closure1_slot27;
                var9 = var3.bind(var5)(var1);
                var5 = _closure1_slot8;
                var3 = var5.getChannel;
                var1 = var2.channel_id;
                var10 = var3.bind(var5)(var1);
                var1 = var2.author;
                var3 = null;
                var1 = var3 != var1;
                var5 = undefined;
                if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var8 = _closure1_slot7;
                var14 = var2.author;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var15 = var7;
                var1 = new var15[var8](var14, var13);
                var5 = var1 instanceof Object ? var1 : var7;
case 16:
                var1 = var2.author;
                var1 = var3 != var1;
                var8 = undefined;
                if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 20;
                var1 = var11[var1];
                var7 = var7.bind(var6)(var1);
                var1 = var7.getUserAuthor;
                var8 = var1.bind(var7)(var5, var10);
case 18:
                var1 = {};
                var7 = var2.id;
                var1['id'] = var7;
                var7 = var2.blocked;
                var1['blocked'] = var7;
                var7 = var2.bot;
                var1['bot'] = var7;
                var7 = var2.content;
                var1['content'] = var7;
                var10 = var9.length;
                var7 = undefined;
                if(!var10) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var7 = var9;
case 20:
                var1['content_parsed'] = var7;
                var9 = var3 == var8;
                var7 = undefined;
                if(var9) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var7 = var8.nick;
case 22:
                var1['nick'] = var7;
                var9 = var3 == var8;
                var7 = undefined;
                if(var9) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var7 = var8.colorString;
case 24:
                var1['author_color'] = var7;
                var7 = var2.edited_timestamp;
                if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var7 = var2.editedTimestamp;
case 26:
                var1['edited_timestamp'] = var7;
                var7 = var2.timestamp;
                var1['timestamp'] = var7;
                var7 = var2.tts;
                var1['tts'] = var7;
                var7 = var2.mentions;
                var1['mentions'] = var7;
                var7 = var2.mention_everyone;
                if(var7) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var7 = var2.mentionEveryone;
case 28:
                var1['mention_everyone'] = var7;
                var7 = var2.mention_roles;
                if(var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var7 = var2.mentionRoles;
case 30:
                var1['mention_roles'] = var7;
                var7 = var2.embeds;
                var1['embeds'] = var7;
                var7 = var2.attachments;
                var1['attachments'] = var7;
                var7 = var3 != var5;
                var3 = undefined;
                if(!var7) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 21;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var3 = var4.bind(var6)(var5);
case 32:
                var1['author'] = var3;
                var3 = var2.pinned;
                var1['pinned'] = var3;
                var2 = var2.type;
                var1['type'] = var2;
                return var1;
            }
        };
        var _closure1_slot30 = var5;
        var4 = function transformVoiceState(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg3;
                var12 = var1.mute;
                var11 = var1.deaf;
                var10 = var1.selfMute;
                var9 = var1.selfDeaf;
                var8 = var1.suppress;
                var4 = var1.userId;
                var3 = _closure1_slot13;
                var1 = var3.getUser;
                var5 = var1.bind(var3)(var4);
                var1 = null;
                if(!(var1 != var5)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var1 = {};
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 22;
                var13 = var7[var3];
                var3 = undefined;
                var16 = var6.bind(var3)(var13);
                var15 = var16.getName;
                var14 = arg1;
                var13 = arg2;
                var13 = var15.bind(var16)(var14, var13, var5);
                var1['nick'] = var13;
                var15 = _closure1_slot10;
                var14 = var15.isLocalMute;
                var13 = var5.id;
                var13 = var14.bind(var15)(var13);
                var1['mute'] = var13;
                var15 = _closure1_slot10;
                var14 = var15.getLocalVolume;
                var13 = var5.id;
                var13 = var14.bind(var15)(var13);
                var1['volume'] = var13;
                var14 = _closure1_slot10;
                var13 = var14.getLocalPan;
                var2 = var5.id;
                var2 = var13.bind(var14)(var2);
                var1['pan'] = var2;
                var2 = {};
                var2['mute'] = var12;
                var2['deaf'] = var11;
                var2['self_mute'] = var10;
                var2['self_deaf'] = var9;
                var2['suppress'] = var8;
                var1['voice_state'] = var2;
                var2 = 21;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var5);
                var1['user'] = var2;
                return var1;
case 34:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid user id: ';
                var19 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var20 = var2;
                var1 = new var20[var3](var19, var18);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure1_slot31 = var4;
        var1 = function fetchApplicationRPC(arg1) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 25;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'oldFormErrors': true, 'retries': 3, 'rejectWithError': true};
            var7 = _closure1_slot19;
            var6 = var7.APPLICATION_RPC;
            var5 = arg1;
            var5 = var6.bind(var7)(var5);
            var2['url'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                return var1;
            };
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot21;
                var1 = var1.INVALID_CLIENTID;
                var3['closeCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = 'Invalid Client ID';
                var7 = var2;
                var6 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot32 = var1;
        var1 = function _validateSocketApplication() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        var6 = arg1;
                        var10 = arg2;
                        var9 = arg3;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 36:
                        var4 = _closure1_slot4;
                        var3 = var4.getApplication;
                        var7 = var3.bind(var4)(var10);
                        var5 = 'string';
                        var3 = typeof var9;
                        var4 = var7;
                        if(!(var5 === var3)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                        var5 = var6.transport;
                        var3 = _closure1_slot16;
                        var3 = var3.POST_MESSAGE;
                        if(!(var5 !== var3)) { _fun0007_ip = 39; continue _fun0007 }
case 6:
                        var3 = _closure1_slot32;
                        var11 = undefined;
                        var3 = var3.bind(var11)(var10);
                        SaveGenerator(address=92);
case 40:
                        return var3;
case 41:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                        var8 = _closure1_slot5;
                        var5 = var8.createFromServer;
                        var4 = var5.bind(var8)(var3);
                        var12 = _closure1_slot29;
                        var5 = var3.rpc_origins;
                        var5 = var12.bind(var11)(var9, var5);
                        if(var5) { _fun0007_ip = 37; continue _fun0007 }
case 44:
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 26;
                        var5 = var12[var5];
                        var12 = var8.bind(var11)(var5);
                        var11 = {};
                        var5 = _closure1_slot21;
                        var5 = var5.INVALID_ORIGIN;
                        var11['closeCode'] = var5;
                        var5 = var12.prototype;
                        var8 = Object.create(var5, {constructor: {value: var12}});
                        var13 = 'Invalid Origin';
                        var15 = var8;
                        var14 = var11;
                        var5 = new var15[var12](var14, var13, var12);
                        var5 = var5 instanceof Object ? var5 : var8;
                        throw var5;
case 42:
                        return var3;
case 39:
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 27;
                        var3 = var5[var3];
                        var5 = undefined;
                        var3 = var8.bind(var5)(var3);
                        var11 = var3.bind(var5)(var10);
                        var3 = null;
                        if(!(var3 != var11)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                        var8 = _closure1_slot29;
                        var3 = new Array(1);
                        var3[0] = var11;
                        var3 = var8.bind(var5)(var9, var3);
                        var4 = var7;
                        if(!var3) { _fun0007_ip = 45; continue _fun0007 }
case 37:
                        var3 = null;
                        if(!(var3 == var4)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                        var8 = _closure1_slot5;
                        var7 = var8.createFromServer;
                        var9 = _closure1_slot32;
                        var3 = undefined;
                        var3 = var9.bind(var3)(var10);
                        SaveGenerator(address=297);
case 49:
                        return var3;
case 50:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(var9) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                        var4 = var7.bind(var8)(var3);
case 47:
                        var11 = var4.id;
                        var10 = var4.name;
                        var9 = var4.icon;
                        var8 = var4.coverImage;
                        var7 = var4.flags;
                        var4 = {};
                        var4['id'] = var11;
                        var4['name'] = var10;
                        var4['icon'] = var9;
                        var4['coverImage'] = var8;
                        var4['flags'] = var7;
                        var6['application'] = var4;
                        var4 = undefined;
                        return var4;
case 51:
                        return var3;
case 45:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 26;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot21;
                        var2 = var2.INVALID_ORIGIN;
                        var4['closeCode'] = var2;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {constructor: {value: var5}});
                        var13 = 'Invalid Origin';
                        var15 = var3;
                        var14 = var4;
                        var2 = new var15[var5](var14, var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 32:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot33 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot33 = var1;
        var1 = function _processSocketThrottlers() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        var5 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                        var2 = _closure1_slot26;
                        var3 = var2[var5];
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                        var8 = 60;
                        var2 = arg2;
                        if(!var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                        var8 = 2;
case 57:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 28;
                        var6 = var6[var2];
                        var2 = undefined;
                        var7 = var7.bind(var2)(var6);
                        var9 = _closure1_slot25;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var11 = var6;
                        var10 = var8;
                        var2 = new var11[var7](var10, var9, var8);
                        var2 = var2 instanceof Object ? var2 : var6;
                        var4 = _closure1_slot26;
                        var4[var5] = var2;
                        var3 = var2;
case 55:
                        var2 = var3.process;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=113);
case 59:
                        return var2;
case 60:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                        var3 = undefined;
                        return var3;
case 61:
                        return var2;
case 53:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot34 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot34 = var1;
        var8 = global;
        var14 = var8.Object;
        var10 = var14.defineProperty;
        var9 = {};
        var1 = true;
        var9['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var14)(var3, var1, var9);
        var15 = 0;
        var9 = var13[var15];
        var1 = undefined;
        var9 = var11.bind(var1)(var9);
        var _closure1_slot3 = var9;
        var9 = 1;
        var10 = var13[var9];
        var10 = var11.bind(var1)(var10);
        var _closure1_slot4 = var10;
        var10 = 2;
        var14 = var13[var10];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot5 = var14;
        var14 = 3;
        var14 = var13[var14];
        var14 = var12.bind(var1)(var14);
        var14 = var14.GUILD_VOCAL_CHANNEL_TYPES;
        var _closure1_slot6 = var14;
        var14 = 4;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot7 = var14;
        var14 = 5;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot8 = var14;
        var14 = 6;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot9 = var14;
        var14 = 7;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot10 = var14;
        var14 = 8;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot11 = var14;
        var14 = 9;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot12 = var14;
        var14 = 10;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot13 = var14;
        var14 = 11;
        var14 = var13[var14];
        var14 = var11.bind(var1)(var14);
        var _closure1_slot14 = var14;
        var14 = 12;
        var14 = var13[var14];
        var14 = var12.bind(var1)(var14);
        var16 = var14.RPC_LOCAL_SCOPE;
        var _closure1_slot15 = var16;
        var14 = var14.TransportTypes;
        var _closure1_slot16 = var14;
        var14 = 13;
        var14 = var13[var14];
        var14 = var12.bind(var1)(var14);
        var16 = var14.ActivityActionTypes;
        var _closure1_slot17 = var16;
        var16 = var14.ChannelTypes;
        var _closure1_slot18 = var16;
        var16 = var14.Endpoints;
        var _closure1_slot19 = var16;
        var16 = var14.MAX_MESSAGES_PER_CHANNEL;
        var _closure1_slot20 = var16;
        var16 = var14.RPCCloseCodes;
        var _closure1_slot21 = var16;
        var16 = var14.RPCErrors;
        var _closure1_slot22 = var16;
        var14 = var14.RTCConnectionStates;
        var _closure1_slot23 = var14;
        var14 = 14;
        var14 = var13[var14];
        var17 = var11.bind(var1)(var14);
        var16 = var17.toURLSafe;
        var14 = var8.window;
        var14 = var14.GLOBAL_ENV;
        var14 = var14.API_ENDPOINT;
        var17 = var16.bind(var17)(var14);
        var16 = null;
        var18 = var16 == var17;
        var14 = undefined;
        if(var18) { _fun0001_ip = 63; continue _fun0001 }
case 64:
        var14 = var17.host;
case 63:
        var16 = var16 != var14;
        var17 = 'localhost';
        if(!var16) { _fun0001_ip = 65; continue _fun0001 }
case 66:
        var17 = var14;
case 65:
        var16 = var17.split;
        var14 = ':';
        var14 = var16.bind(var17)(var14);
        var14 = var14[var15];
        var15 = var14.includes;
        var18 = '.';
        var15 = var15.bind(var14)(var18);
        var17 = var14;
        if(!var15) { _fun0001_ip = 67; continue _fun0001 }
case 68:
        var15 = var14.split;
        var19 = var15.bind(var14)(var18);
        var15 = var19.length;
        var15 = var15 - var9;
        var20 = var19[var15];
        var16 = /^\d+$/;
        var15 = var16.test;
        var15 = var15.bind(var16)(var20);
        if(var15) { _fun0001_ip = 69; continue _fun0001 }
case 70:
        var16 = var19.slice;
        var15 = -2;
        var16 = var16.bind(var19)(var15);
        var15 = var16.join;
        var14 = var15.bind(var16)(var18);
case 69:
        var17 = var14;
case 67:
        var15 = var8.RegExp;
        var14 = 15;
        var16 = var13[var14];
        var19 = var11.bind(var1)(var16);
        var18 = var19.escape;
        var16 = 'https://';
        var19 = var18.bind(var19)(var16);
        var14 = var13[var14];
        var16 = var11.bind(var1)(var14);
        var14 = var16.escape;
        var22 = var14.bind(var16)(var17);
        var8 = var8.HermesInternal;
        var17 = var8.concat;
        var25 = '^';
        var23 = '(?:[a-z]+\\.)?(';
        var21 = '|discordapp.com|discord.com)$';
        var24 = var19;
        var24 = var25[var17](var24, var23, var22, var21, var20);
        var14 = var15.prototype;
        var14 = Object.create(var14, {constructor: {value: var15}});
        var25 = var14;
        var8 = new var25[var15](var24, var23);
        var8 = var8 instanceof Object ? var8 : var14;
        var _closure1_slot24 = var8;
        var8 = 16;
        var8 = var13[var8];
        var8 = var11.bind(var1)(var8);
        var8 = var8.Millis;
        var8 = var8.MINUTE;
        var9 = var9 * var8;
        var _closure1_slot25 = var9;
        var8 = {};
        var _closure1_slot26 = var8;
        var11 = 29;
        var11 = var13[var11];
        var13 = var12.bind(var1)(var11);
        var12 = var13.fileFinishedImporting;
        var11 = 'modules/rpc/RPCHelpers.tsx';
        var11 = var12.bind(var13)(var11);
        var3['VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW'] = var10;
        var10 = 60;
        var3['VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH'] = var10;
        var3['VALIDATE_SOCKET_PERIOD_MS'] = var9;
        var3['VALIDATE_SOCKET_THROTTLERS'] = var8;
        var3['getRemoteIconURL'] = var7;
        var7 = function containsSameValues(arg1, arg2) {
            var4 = arg1;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 17;
            var2 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var2);
            var2 = var3.isEqual;
            var1 = var7[var1];
            var7 = var6.bind(var5)(var1);
            var6 = var7.pick;
            var1 = global;
            var5 = var1.Object;
            var1 = var5.keys;
            var5 = var1.bind(var5)(var4);
            var1 = arg2;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var3['containsSameValues'] = var7;
        var3['validateOrigin'] = var6;
        var6 = function transformChannel(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var _closure2_slot0 = var2;
                var3 = arg2;
                var _closure2_slot1 = var3;
                var4 = new Array(0);
                var3 = var2.getGuildId;
                var3 = var3.bind(var2)();
                var _closure2_slot2 = var3;
                var5 = _closure1_slot18;
                var6 = var5.GUILD_CATEGORY;
                var5 = new Array(1);
                var5[0] = var6;
                var8 = _closure1_slot6;
                var7 = 1;
                var9 = var5;
                var3 = arraySpread(var9, var8, var7);
                var3 = var5.includes;
                var2 = var2.type;
                var2 = var3.bind(var5)(var2);
                if(var2) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                var3 = var4.push;
                var2 = global;
                var6 = var2.Promise;
                var2 = var6.prototype;
                var5 = Object.create(var2, {constructor: {value: var6}});
                var9 = function(arg1) {
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot11;
                    var3 = var4.whenReady;
                    var6 = _closure2_slot0;
                    var2 = var6.id;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchMessages;
                    var2 = {};
                    var6 = var6.id;
                    var2['channelId'] = var6;
                    var5 = _closure1_slot20;
                    var2['limit'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var10 = var5;
                var2 = new var10[var6](var9, var8);
                var2 = var2 instanceof Object ? var2 : var5;
                var2 = var3.bind(var4)(var2);
case 71:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.all;
                var3 = var2.bind(var3)(var4);
                var2 = var3.then;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = var2.isNSFW;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                        var2 = _closure1_slot13;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        var2 = null;
                        var3 = var2 == var1;
                        var2 = undefined;
                        if(var3) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var2 = var1.nsfwAllowed;
case 75:
                        var1 = true;
                        if(!(var1 === var2)) { _fun0010_ip = 77; continue _fun0010 }
case 73:
                        var1 = _closure2_slot1;
                        if(var1) { _fun0010_ip = 78; continue _fun0010 }
case 77:
                        var3 = new Array(0);
                        _fun0010_ip = 79; continue _fun0010;
case 78:
                        var6 = _closure1_slot11;
                        var4 = var6.getMessages;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var4 = var4.bind(var6)(var2);
                        var2 = var4.toArray;
                        var4 = var2.bind(var4)();
                        var2 = var4.map;
                        var1 = _closure1_slot30;
                        var3 = var2.bind(var4)(var1);
case 79:
                        var1 = global;
                        var6 = var1.Object;
                        var2 = var6.values;
                        var8 = _closure1_slot14;
                        var7 = var8.getVoiceStatesForChannel;
                        var4 = _closure2_slot0;
                        var1 = var4.id;
                        var1 = var7.bind(var8)(var1);
                        var6 = var2.bind(var6)(var1);
                        var2 = var6.map;
                        var1 = function(arg1) {
                            var5 = _closure1_slot31;
                            var4 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var3 = var1.id;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var5.bind(var2)(var4, var3, var1);
                            return var1;
                        };
                        var2 = var2.bind(var6)(var1);
                        var1 = {};
                        var6 = var4.id;
                        var1['id'] = var6;
                        var6 = var4.name;
                        var1['name'] = var6;
                        var6 = var4.type;
                        var1['type'] = var6;
                        var6 = var4.topic;
                        var1['topic'] = var6;
                        var6 = var4.bitrate;
                        var1['bitrate'] = var6;
                        var6 = var4.userLimit;
                        var1['user_limit'] = var6;
                        var5 = _closure2_slot2;
                        var1['guild_id'] = var5;
                        var4 = var4.position;
                        var1['position'] = var4;
                        var1['messages'] = var3;
                        var1['voice_states'] = var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['transformChannel'] = var6;
        var3['transformInternalTextMessage'] = var5;
        var3['transformVoiceState'] = var4;
        var4 = function transformBaseRelationship(arg1, arg2) {
            var3 = arg2;
            var1 = {};
            var2 = arg1;
            var1['type'] = var2;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 21;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)(var3);
            var1['user'] = var2;
            var2 = {};
            var6 = _closure1_slot12;
            var5 = var6.getStatus;
            var4 = var3.id;
            var3 = null;
            var4 = var5.bind(var6)(var4, var3);
            var2['status'] = var4;
            var2['activity'] = var3;
            var1['presence'] = var2;
            return var1;
        };
        var3['transformBaseRelationship'] = var4;
        var4 = function transformApplicationRelationship(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var8 = arg2;
                var5 = null;
                var1 = var3;
                if(!(var5 != var8)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                var2 = {};
                var10 = var2;
                var9 = var3;
                var4 = copyDataProperties(var10, var9);
                var4 = {};
                var9 = var3.presence;
                var10 = var4;
                var6 = copyDataProperties(var10, var9);
                var7 = _closure1_slot12;
                var6 = var7.getApplicationActivity;
                var3 = var3.user;
                var3 = var3.id;
                var3 = var6.bind(var7)(var3, var8);
                var6 = var5 != var3;
                var5 = null;
                if(!var6) { _fun0011_ip = 82; continue _fun0011 }
case 13:
                var5 = var3;
case 82:
                var3 = 'activity';
                var4[var3] = var5;
                var3 = 'presence';
                var2[var3] = var4;
                var1 = var2;
case 80:
                return var1;
            }
        };
        var3['transformApplicationRelationship'] = var4;
        var4 = function isMatchingOrigin(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var6 = var1;
                var9 = undefined;
                var3 = undefined;
                var4 = undefined;
                var7 = null;
                if(!(var7 != var1)) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                var8 = global;
                var1 = var8.window;
                var1 = var1.location;
                var2 = var1.origin;
                var4 = var2;
                var1 = var6;
                if(!(var1 !== var2)) { _fun0012_ip = 85; continue _fun0012 }
case 75: // try_start_0
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 23;
                var1 = var10[var1];
                var9 = var2.bind(var9)(var1);
                var2 = var9.parse;
                var1 = var6;
                var1 = var2.bind(var9)(var1);
                var3 = var1.hostname;
case 86: // try_end0
                var8 = var8.window;
                var8 = var8.location;
                var9 = var8.hostname;
                var8 = var3;
                var8 = var9 === var8;
                var2 = var8;
                if(!var8) { _fun0012_ip = 16; continue _fun0012 }
case 87:
                var8 = var3;
                var3 = 'localhost';
                var2 = var3 === var8;
case 16:
                var1 = var2;
                if(var2) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                var9 = var6;
                var8 = var9.match;
                var3 = 'staging';
                var3 = var8.bind(var9)(var3);
                var3 = var7 == var3;
                var2 = var3;
                if(!var3) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                var8 = _closure1_slot24;
                var7 = var8.test;
                var6 = var7.bind(var8)(var6);
                var6 = !var6;
                var3 = var6;
                if(var6) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                var6 = _closure1_slot24;
                var5 = var6.test;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
case 92:
                var2 = !var3;
case 90:
                var1 = var2;
case 88:
                return var1;
case 94: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = false;
                return var1;
case 85:
                var1 = true;
                return var1;
case 83:
                var1 = false;
                return var1;
            }
        };
        var3['isMatchingOrigin'] = var4;
        var4 = function hasMessageReadPermission(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var4 = arg3;
                var6 = _closure1_slot9;
                var3 = var6.getGuild;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var6)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0013_ip = 7; continue _fun0013 }
case 57:
                var3 = var5.getApplicationId;
                var3 = var3.bind(var5)();
                _fun0013_ip = 95; continue _fun0013;
case 7:
                var3 = var1.application_id;
case 95:
                var1 = arg2;
                var1 = var3 === var1;
                if(var1) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                var3 = var4.indexOf;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 24;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.OAuth2Scopes;
                var2 = var2.MESSAGES_READ;
                var3 = var3.bind(var4)(var2);
                var2 = -1;
                var1 = var3 > var2;
case 96:
                return var1;
            }
        };
        var3['hasMessageReadPermission'] = var4;
        var4 = function getVoiceConnectionState(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var2 = _closure1_slot23;
                var2 = var2.RTC_CONNECTED;
                if(!(var2 !== var4)) { _fun0014_ip = 98; continue _fun0014 }
case 74:
                var2 = _closure1_slot23;
                var2 = var2.RTC_CONNECTING;
                if(!(var2 !== var4)) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                var1 = _closure1_slot23;
                var1 = var1.RTC_DISCONNECTED;
                if(!(var1 !== var4)) { _fun0014_ip = 98; continue _fun0014 }
case 4:
                return var4;
case 98:
                var3 = var4.replace;
                var2 = /^RTC_/;
                var1 = 'VOICE_';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['getVoiceConnectionState'] = var4;
        var4 = function validateActivityInvite(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg2;
                var1 = _closure1_slot17;
                var2 = var1.JOIN;
                var1 = arg1;
                var1 = var1 === var2;
                if(!var1) { _fun0015_ip = 100; continue _fun0015 }
case 2:
                var4 = null;
                var2 = var4 != var3;
                if(!var2) { _fun0015_ip = 101; continue _fun0015 }
case 102:
                var3 = var3.id;
                var2 = var4 != var3;
case 101:
                if(!var2) { _fun0015_ip = 73; continue _fun0015 }
case 76:
                var3 = arg3;
                var3 = var3.join;
                var2 = var4 != var3;
case 73:
                var1 = var2;
case 100:
                return var1;
            }
        };
        var3['validateActivityInvite'] = var4;
        var4 = function validateSocketApplication() {
            var1 = undefined;
            var4 = _closure1_slot33;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['validateSocketApplication'] = var4;
        var4 = function processSocketThrottlers() {
            var1 = undefined;
            var4 = _closure1_slot34;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['processSocketThrottlers'] = var4;
        var4 = function validateOriginAndUpdateSocket(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = null;
                var1 = arg2;
                if(!(var2 == var1)) { _fun0016_ip = 57; continue _fun0016 }
case 15:
                var1 = arg1;
                var2 = var1.authorization;
                var3 = _closure1_slot15;
                var1 = new Array(1);
                var1[0] = var3;
                var2['scopes'] = var1;
case 57:
                var1 = undefined;
                return var1;
            }
        };
        var3['validateOriginAndUpdateSocket'] = var4;
        var4 = function getDeprecatedVoiceSettingsWithShortcut(arg1) {
            var2 = _closure1_slot10;
            var1 = var2.getSettings;
            var2 = var1.bind(var2)();
            var7 = function formatDevices(arg1) {
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var2 = arg1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.sort;
                var2 = function(arg1, arg2) {
                    var1 = arg1;
                    var2 = var1.index;
                    var1 = arg2;
                    var1 = var1.index;
                    var1 = var2 - var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.id;
                    var1['id'] = var3;
                    var2 = var2.name;
                    var1['name'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = arg1;
            var6 = undefined;
            var4 = var1.bind(var6)(var2);
            var1 = {};
            var3 = {};
            var9 = _closure1_slot10;
            var8 = var9.getInputDevices;
            var8 = var8.bind(var9)();
            var8 = var7.bind(var6)(var8);
            var3['available_devices'] = var8;
            var8 = var2.inputDeviceId;
            var3['device_id'] = var8;
            var8 = var2.inputVolume;
            var3['volume'] = var8;
            var1['input'] = var3;
            var3 = {};
            var8 = _closure1_slot10;
            var5 = var8.getOutputDevices;
            var5 = var5.bind(var8)();
            var5 = var7.bind(var6)(var5);
            var3['available_devices'] = var5;
            var5 = var2.outputDeviceId;
            var3['device_id'] = var5;
            var5 = var2.outputVolume;
            var3['volume'] = var5;
            var1['output'] = var3;
            var3 = {};
            var5 = var2.mode;
            var3['type'] = var5;
            var5 = var2.modeOptions;
            var5 = var5.autoThreshold;
            var3['auto_threshold'] = var5;
            var5 = var2.modeOptions;
            var5 = var5.threshold;
            var3['threshold'] = var5;
            var3['shortcut'] = var4;
            var4 = var2.modeOptions;
            var4 = var4.delay;
            var3['delay'] = var4;
            var1['mode'] = var3;
            var3 = var2.automaticGainControl;
            var1['automatic_gain_control'] = var3;
            var3 = var2.echoCancellation;
            var1['echo_cancellation'] = var3;
            var3 = var2.noiseSuppression;
            var1['noise_suppression'] = var3;
            var3 = var2.qos;
            var1['qos'] = var3;
            var3 = var2.silenceWarning;
            var1['silence_warning'] = var3;
            var3 = var2.deaf;
            var1['deaf'] = var3;
            var2 = var2.mute;
            var1['mute'] = var2;
            return var1;
        };
        var3['getDeprecatedVoiceSettingsWithShortcut'] = var4;
        var4 = function getVoiceSettingsWithShortcut(arg1, arg2) {
            var3 = _closure1_slot10;
            var2 = var3.getSettings;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var3 = arg2;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var1 = {};
            var3 = {};
            var5 = var2.mode;
            var3['type'] = var5;
            var3['shortcut'] = var4;
            var1['input_mode'] = var3;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.keys;
            var3 = var2.localMutes;
            var3 = var4.bind(var5)(var3);
            var1['local_mutes'] = var3;
            var3 = var2.localVolumes;
            var1['local_volumes'] = var3;
            var3 = var2.mute;
            var1['self_mute'] = var3;
            var2 = var2.deaf;
            var1['self_deaf'] = var2;
            return var1;
        };
        var3['getVoiceSettingsWithShortcut'] = var4;
        var4 = function validatePostMessageTransport(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot16;
                var2 = var2.POST_MESSAGE;
                if(!(var6 === var2)) { _fun0017_ip = 103; continue _fun0017 }
case 74:
                var2 = undefined;
                return var2;
case 103:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot22;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var2 = 'command not available from "';
                var1 = ' transport';
                var7 = var5.bind(var2)(var6, var1);
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var9 = var2;
                var8 = var3;
                var1 = new var9[var4](var8, var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var3['validatePostMessageTransport'] = var4;
        var2 = function validateApplication(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var3 = var1.id;
                var2 = null;
                if(!(var2 != var3)) { _fun0018_ip = 84; continue _fun0018 }
case 104:
                var1 = var1.id;
                return var1;
case 84:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot22;
                var1 = var1.INVALID_COMMAND;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = 'Invalid application';
                var7 = var2;
                var6 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var3['validateApplication'] = var2;
        return var1;
    }
})();