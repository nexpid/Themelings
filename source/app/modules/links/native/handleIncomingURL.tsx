// app/modules/links/native/handleIncomingURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleIncomingURL() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = var3;
                    var4 = undefined;
                    var2 = undefined;
                    var17 = undefined;
                    var8 = undefined;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var4;
                    var16 = var3.url;
                    var2 = var16;
                    var15 = var3.source;
                    var17 = var15;
                    var11 = _closure1_slot10;
                    var10 = var11.log;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var14 = var6.concat;
                    var27 = 'Opening url: ';
                    var25 = ' [';
                    var23 = ']';
                    var26 = var16;
                    var24 = var15;
                    var6 = var27[var14](var26, var25, var24, var23, var22);
                    var6 = var10.bind(var11)(var6);
                    var10 = _closure1_slot6;
                    var6 = var10.getState;
                    var10 = var6.bind(var10)();
                    var6 = _closure1_slot7;
                    var6 = var6.ACTIVE;
                    if(!(var10 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 6;
                    var6 = var11[var6];
                    var11 = var10.bind(var4)(var6);
                    var10 = var11.trackAppOpened;
                    var12 = var2;
                    var6 = null;
                    var12 = var6 == var12;
                    var6 = 'deeplink';
                    if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = 'launcher';
case 6:
                    var6 = var10.bind(var11)(var6);
case 4:
                    var10 = var2;
                    var6 = null;
                    if(!(var6 != var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var12 = var2;
                    var11 = var12.startsWith;
                    var10 = 'discord://app/open';
                    var10 = var11.bind(var12)(var10);
                    if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var12 = var2;
                    var11 = var12.indexOf;
                    var10 = '#';
                    var13 = var11.bind(var12)(var10);
                    var10 = -1;
                    if(!(var10 === var13)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var14 = _closure1_slot10;
                    var12 = var14.warn;
                    var11 = {};
                    var10 = var2;
                    var11['originalUrl'] = var10;
                    var10 = 'No hash mark found in AppsFlyer legacy URL';
                    var10 = var12.bind(var14)(var10, var11);
                    _fun0001_ip = 10; continue _fun0001;
case 12:
                    var12 = var2;
                    var11 = var12.substring;
                    var10 = 1;
                    var10 = var13 + var10;
                    var10 = var11.bind(var12)(var10);
                    var8 = var10;
                    var11 = '';
                    if(!(var11 !== var10)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var12 = var8;
                    var10 = var12.trim;
                    var10 = var10.bind(var12)();
                    if(!(var11 !== var10)) { _fun0001_ip = 14; continue _fun0001 }
case 16: // try_start_0
                    var12 = var5.URL;
                    var26 = var8;
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var27 = var11;
                    var10 = new var27[var12](var26, var25);
                    var10 = var10 instanceof Object ? var10 : var11;
                    _closure4_slot0 = var10;
                    var11 = ['campaign', 'deep_link_value', 'media_source'];
                    _closure4_slot1 = var11;
                    var12 = var10.searchParams;
                    var11 = var12.keys;
                    var25 = var11.bind(var12)();
                    var13 = new Array(0);
                    var24 = 0;
                    var26 = var13;
                    var11 = arraySpread(var26, var25, var24);
                    var12 = var13.filter;
                    var11 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.startsWith;
                            var1 = 'af_';
                            var1 = var2.bind(var4)(var1);
                            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var3 = _closure4_slot1;
                            var2 = var3.includes;
                            var1 = var2.bind(var3)(var4);
case 17:
                            return var1;
                        }
                    };
                    var12 = var12.bind(var13)(var11);
                    var11 = var12.forEach;
                    var7 = function(arg1) {
                        var1 = _closure4_slot0;
                        var3 = var1.searchParams;
                        var2 = var3.delete;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    var7 = var10.toString;
                    var13 = var7.bind(var10)();
                    var2 = var13;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 7;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.DeeplinkSource;
                    var17 = var7.AppsFlyer;
                    var11 = _closure1_slot10;
                    var10 = var11.log;
                    var7 = var5.HermesInternal;
                    var12 = var7.concat;
                    var7 = 'Extracted clean URL from AppsFlyer legacy URL: ';
                    var7 = var12.bind(var7)(var13);
                    var7 = var10.bind(var11)(var7);
case 10: // try_end0
                    var11 = var2;
                    var10 = var11.startsWith;
                    var7 = 'discordwidget:///';
                    var7 = var10.bind(var11)(var7);
                    if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var11 = var5.URL;
                    var26 = var2;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var27 = var10;
                    var7 = new var27[var11](var26, var25);
                    var7 = var7 instanceof Object ? var7 : var10;
                    var10 = var7.hostname;
                    var7 = 'l.discord.com';
                    if(!(var7 === var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var11 = var5.fetch;
                    var10 = var2;
                    var7 = {'method': 'HEAD', 'redirect': 'follow'};
                    var7 = var11.bind(var4)(var10, var7);
                    SaveGenerator(address=639);
case 23:
                    return var7;
case 24:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var2 = var7.url;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 7;
                    var10 = var12[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.DeeplinkSource;
                    var17 = var10.Iterable;
case 21:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 11;
                    var10 = var12[var10];
                    var12 = var11.bind(var4)(var10);
                    var11 = var2;
                    var10 = true;
                    var15 = var12.bind(var4)(var11, var10);
                    var21 = var15.fingerprint;
                    var18 = var15.attemptId;
                    var12 = var15.payload;
                    var14 = var15.installationId;
                    var13 = _closure1_slot10;
                    var11 = var13.log;
                    var10 = 'Parsed url as: ';
                    var10 = var11.bind(var13)(var10, var15);
                    var11 = var12.inviteCode;
                    var19 = var12.guildTemplateCode;
                    var20 = var12.authToken;
                    var10 = var6 != var11;
                    var13 = null;
                    if(!var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 12;
                    var10 = var16[var10];
                    var15 = var15.bind(var4)(var10);
                    var10 = var15.parseInviteCodeFromInviteKey;
                    var13 = var10.bind(var15)(var11);
case 27:
                    var10 = var6 == var21;
                    if(!var10) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var10 = var6 == var18;
case 29:
                    if(!var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var10 = var6 == var11;
case 31:
                    if(!var10) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var10 = var6 == var19;
case 33:
                    if(!var10) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var10 = var6 == var20;
case 35:
                    if(!var10) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var11 = var17;
                    var10 = var6 == var11;
case 37:
                    if(!var10) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var10 = var6 == var14;
case 39:
                    if(var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var11 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var10 = 9;
                    var10 = var15[var10];
                    var16 = var11.bind(var4)(var10);
                    var15 = var16.track;
                    var10 = _closure1_slot8;
                    var11 = var10.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                    var10 = {};
                    var10['invite_code'] = var13;
                    var10['guild_template_code'] = var19;
                    var19 = var6 != var20;
                    if(!var19) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var22 = var20.length;
                    var20 = 0;
                    var19 = var20 === var22;
case 43:
                    var10['has_auth_token'] = var19;
                    var20 = _closure1_slot6;
                    var19 = var20.getState;
                    var20 = var19.bind(var20)();
                    var19 = _closure1_slot7;
                    var19 = var19.BACKGROUND;
                    var19 = var20 === var19;
                    var10['is_backgrounded'] = var19;
                    var10['attempt_id'] = var18;
                    var10['deeplink_source'] = var17;
                    var17 = var12.type;
                    var10['link_type'] = var17;
                    var17 = arg2;
                    var10['is_cold_start'] = var17;
                    var10['received_installation_id'] = var14;
                    var18 = var6 != var21;
                    var17 = null;
                    if(!var18) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var18 = {};
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var19 = 13;
                    var19 = var22[var19];
                    var20 = var20.bind(var4)(var19);
                    var19 = var20.extractId;
                    var19 = var19.bind(var20)(var21);
                    var18['fingerprint'] = var19;
                    var17 = var18;
case 45:
                    var26 = var10;
                    var25 = var17;
                    var17 = copyDataProperties(var26, var25);
                    var10 = var15.bind(var16)(var11, var10);
case 41:
                    var10 = var6 != var13;
                    if(!var10) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var10 = var6 != var14;
case 47:
                    if(!var10) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                    var11 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var10 = 14;
                    var10 = var15[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = var11.setReceivedInstallationIdForInviteCode;
                    var10 = var10.bind(var11)(var13, var14);
case 49:
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 15;
                    var10 = var13[var10];
                    var14 = var11.bind(var4)(var10);
                    var10 = var2;
                    var10 = var14.bind(var4)(var10);
                    var10 = 10;
                    var10 = var13[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var10['payload'] = var12;
                    var10 = var11.bind(var4)(var10);
                    _fun0001_ip = 8; continue _fun0001;
case 25:
                    return var7;
case 19:
                    var11 = var2;
                    var10 = var11.startsWith;
                    var7 = 'discordwidget:///open-voice-panel';
                    var7 = var10.bind(var11)(var7);
                    if(var7) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var11 = var2;
                    var10 = var11.split;
                    var7 = 'voice/';
                    var7 = var10.bind(var11)(var7);
                    var11 = var7.length;
                    var10 = 2;
                    if(!(var10 === var11)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var11 = 1;
                    var13 = var7[var11];
                    var12 = var13.split;
                    var7 = '/';
                    var7 = var12.bind(var13)(var7);
                    var13 = var7.length;
                    var12 = 0;
                    if(!(var12 !== var13)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var14 = var7[var12];
                    var13 = 'user';
                    if(!(var13 !== var14)) { _fun0001_ip = 8; continue _fun0001 }
case 57:
                    var14 = var7[var12];
                    var13 = 'invite';
                    if(!(var13 !== var14)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
                    var14 = var7[var12];
                    var13 = 'wave';
                    if(!(var13 !== var14)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
                    var14 = var7[var12];
                    var13 = 'join';
                    if(!(var13 !== var14)) { _fun0001_ip = 62; continue _fun0001 }
case 63:
                    var13 = var7.length;
                    if(!(var10 === var13)) { _fun0001_ip = 8; continue _fun0001 }
case 64:
                    var16 = var7[var12];
                    var15 = var7[var11];
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 10;
                    var12 = var14[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var14 = {};
                    var17 = _closure1_slot9;
                    var17 = var17.CHANNEL;
                    var14['type'] = var17;
                    var14['guildId'] = var16;
                    var14['channelId'] = var15;
                    var12['payload'] = var14;
                    var12 = var13.bind(var4)(var12);
                    var12 = undefined;
                    return var12;
case 62:
                    var16 = var7[var11];
                    var15 = var7[var10];
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 10;
                    var12 = var14[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var14 = {};
                    var17 = _closure1_slot9;
                    var17 = var17.CHANNEL;
                    var14['type'] = var17;
                    var14['guildId'] = var16;
                    var14['channelId'] = var15;
                    var12['payload'] = var14;
                    var12 = var13.bind(var4)(var12);
                    _fun0001_ip = 8; continue _fun0001;
case 60:
                    var16 = var7[var11];
                    var15 = var7[var10];
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 10;
                    var12 = var14[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var14 = {};
                    var17 = _closure1_slot9;
                    var17 = var17.SEND_VOICE_HANGOUT_WAVE;
                    var14['type'] = var17;
                    var14['guildId'] = var16;
                    var14['channelId'] = var15;
                    var12['payload'] = var14;
                    var12 = var13.bind(var4)(var12);
                    _fun0001_ip = 8; continue _fun0001;
case 58:
                    var13 = var7[var11];
                    var12 = var7[var10];
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 10;
                    var7 = var11[var7];
                    var10 = var10.bind(var4)(var7);
                    var7 = {};
                    var11 = {};
                    var14 = _closure1_slot9;
                    var14 = var14.CREATE_VOICE_INVITE;
                    var11['type'] = var14;
                    var11['guildId'] = var13;
                    var11['channelId'] = var12;
                    var7['payload'] = var11;
                    var7 = var10.bind(var4)(var7);
case 8:
                    return var4;
case 55:
                    return var4;
case 53:
                    return var4;
case 51:
                    var10 = _closure1_slot5;
                    var7 = var10.getChannelId;
                    var11 = var7.bind(var10)();
                    var7 = var6 != var11;
                    var12 = null;
                    if(!var7) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                    var10 = _closure1_slot4;
                    var7 = var10.getChannel;
                    var12 = var7.bind(var10)(var11);
case 65:
                    if(!(var6 != var12)) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var10 = var7.bind(var4)(var6);
                    var7 = var10.navigateToVoiceChannel;
                    var6 = 'LiveActivity';
                    var6 = var7.bind(var10)(var12, var6);
                    var10 = var2;
                    var7 = var10.indexOf;
                    var6 = '?';
                    var13 = var7.bind(var10)(var6);
                    var7 = var5.URLSearchParams;
                    var5 = 0;
                    var6 = var13 >= var5;
                    var5 = '';
                    if(!var6) { _fun0001_ip = 69; continue _fun0001 }
case 70:
                    var11 = var2;
                    var10 = var11.slice;
                    var6 = 1;
                    var6 = var13 + var6;
                    var5 = var10.bind(var11)(var6);
case 69:
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var27 = var6;
                    var26 = var5;
                    var5 = new var27[var7](var26, var25);
                    var7 = var5 instanceof Object ? var5 : var6;
                    var6 = var7.get;
                    var5 = 'source';
                    var11 = var6.bind(var7)(var5);
                    var5 = 'lockScreen';
                    var5 = var5 !== var11;
                    if(!var5) { _fun0001_ip = 71; continue _fun0001 }
case 72:
                    var6 = 'dynamicIsland';
                    var5 = var6 !== var11;
case 71:
                    if(var5) { _fun0001_ip = 67; continue _fun0001 }
case 73:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var10 = var6.bind(var4)(var5);
                    var7 = var10.track;
                    var5 = _closure1_slot8;
                    var6 = var5.LIVE_ACTIVITY_INTERACTED;
                    var5 = {};
                    var13 = 'Open Voice Panel';
                    var5['action'] = var13;
                    var12 = var12.id;
                    var5['channel_id'] = var12;
                    var5['surface'] = var11;
                    var5 = var7.bind(var10)(var6, var5);
case 67:
                    return var4;
case 74: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot10;
                    var6 = var7.warn;
                    var5 = {};
                    var9 = var9.url;
                    var5['originalUrl'] = var9;
                    var5['extractedUrlString'] = var8;
                    var4 = var4.message;
                    var5['error'] = var4;
                    var4 = 'Failed to parse URL from AppsFlyer legacy URL';
                    var4 = var6.bind(var7)(var4, var5);
                    var4 = undefined;
                    return var4;
case 14:
                    var5 = _closure1_slot10;
                    var4 = var5.warn;
                    var3 = {};
                    var3['originalUrl'] = var2;
                    var2 = 'Empty or whitespace-only URL fragment in AppsFlyer legacy URL';
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppStates;
    var _closure1_slot7 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.LinkingTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'index.native.tsx';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleIncomingURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleIncomingURL() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();