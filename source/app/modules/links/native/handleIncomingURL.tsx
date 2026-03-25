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
                    var15 = undefined;
                    var8 = undefined;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var4;
                    var17 = var3.url;
                    var2 = var17;
                    var16 = var3.source;
                    var15 = var16;
                    var11 = _closure1_slot8;
                    var10 = var11.log;
                    var5 = global;
                    var7 = var5.HermesInternal;
                    var14 = var7.concat;
                    var29 = 'Opening url: ';
                    var27 = ' [';
                    var25 = ']';
                    var28 = var17;
                    var26 = var16;
                    var7 = var29[var14](var28, var27, var26, var25, var24);
                    var7 = var10.bind(var11)(var7);
                    var10 = _closure1_slot4;
                    var7 = var10.getState;
                    var10 = var7.bind(var10)();
                    var7 = _closure1_slot5;
                    var7 = var7.ACTIVE;
                    if(!(var10 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 4;
                    var7 = var11[var7];
                    var11 = var10.bind(var4)(var7);
                    var10 = var11.trackAppOpened;
                    var12 = var2;
                    var7 = null;
                    var12 = var7 == var12;
                    var7 = 'deeplink';
                    if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = 'launcher';
case 6:
                    var7 = var10.bind(var11)(var7);
case 4:
                    var7 = var2;
                    var13 = null;
                    if(!(var13 != var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var2;
                    var10 = var11.startsWith;
                    var7 = 'discord://app/open';
                    var7 = var10.bind(var11)(var7);
                    if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = var2;
                    var10 = var11.indexOf;
                    var7 = '#';
                    var12 = var10.bind(var11)(var7);
                    var7 = -1;
                    if(!(var7 === var12)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var14 = _closure1_slot8;
                    var11 = var14.warn;
                    var10 = {};
                    var7 = var2;
                    var10['originalUrl'] = var7;
                    var7 = 'No hash mark found in AppsFlyer legacy URL';
                    var7 = var11.bind(var14)(var7, var10);
                    _fun0001_ip = 10; continue _fun0001;
case 12:
                    var11 = var2;
                    var10 = var11.substring;
                    var7 = 1;
                    var7 = var12 + var7;
                    var7 = var10.bind(var11)(var7);
                    var8 = var7;
                    var10 = '';
                    if(!(var10 !== var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = var8;
                    var7 = var11.trim;
                    var7 = var7.bind(var11)();
                    if(!(var10 !== var7)) { _fun0001_ip = 14; continue _fun0001 }
case 16: // try_start_0
                    var11 = var5.URL;
                    var28 = var8;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var29 = var10;
                    var7 = new var29[var11](var28, var27);
                    var7 = var7 instanceof Object ? var7 : var10;
                    _closure4_slot0 = var7;
                    var10 = ['campaign', 'deep_link_value', 'media_source'];
                    _closure4_slot1 = var10;
                    var11 = var7.searchParams;
                    var10 = var11.keys;
                    var27 = var10.bind(var11)();
                    var12 = new Array(0);
                    var26 = 0;
                    var28 = var12;
                    var10 = arraySpread(var28, var27, var26);
                    var11 = var12.filter;
                    var10 = function(arg1) {
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
                    var11 = var11.bind(var12)(var10);
                    var10 = var11.forEach;
                    var6 = function(arg1) {
                        var1 = _closure4_slot0;
                        var3 = var1.searchParams;
                        var2 = var3.delete;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var10.bind(var11)(var6);
                    var6 = var7.toString;
                    var12 = var6.bind(var7)();
                    var2 = var12;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 5;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.DeeplinkSource;
                    var15 = var6.AppsFlyer;
                    var10 = _closure1_slot8;
                    var7 = var10.log;
                    var6 = var5.HermesInternal;
                    var11 = var6.concat;
                    var6 = 'Extracted clean URL from AppsFlyer legacy URL: ';
                    var6 = var11.bind(var6)(var12);
                    var6 = var7.bind(var10)(var6);
case 10: // try_end0
                    var10 = var2;
                    var7 = var10.startsWith;
                    var6 = 'discordwidget:///';
                    var6 = var7.bind(var10)(var6);
                    if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var10 = var5.URL;
                    var28 = var2;
                    var7 = var10.prototype;
                    var7 = Object.create(var7, {constructor: {value: var10}});
                    var29 = var7;
                    var6 = new var29[var10](var28, var27);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var7 = var6.hostname;
                    var6 = 'l.discord.com';
                    if(!(var6 === var7)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var7 = var5.fetch;
                    var6 = var2;
                    var5 = {'method': 'HEAD', 'redirect': 'follow'};
                    var5 = var7.bind(var4)(var6, var5);
                    SaveGenerator(address=637);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var2 = var5.url;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 5;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.DeeplinkSource;
                    var15 = var6.Iterable;
case 21:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 7;
                    var6 = var10[var6];
                    var10 = var7.bind(var4)(var6);
                    var7 = var2;
                    var6 = true;
                    var12 = var10.bind(var4)(var7, var6);
                    var17 = var12.fingerprint;
                    var16 = var12.attemptId;
                    var10 = var12.payload;
                    var14 = var12.installationId;
                    var11 = _closure1_slot8;
                    var7 = var11.log;
                    var6 = 'Parsed url as: ';
                    var6 = var7.bind(var11)(var6, var12);
                    var23 = var10.inviteCode;
                    var18 = var10.guildTemplateCode;
                    var19 = var10.authToken;
                    var6 = var13 == var17;
                    if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var6 = var13 == var16;
case 27:
                    if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var6 = var13 == var23;
case 29:
                    if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var6 = var13 == var18;
case 31:
                    if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var6 = var13 == var19;
case 33:
                    if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var7 = var15;
                    var6 = var13 == var7;
case 35:
                    if(!var6) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var6 = var13 == var14;
case 37:
                    if(var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var6 = var11[var6];
                    var12 = var7.bind(var4)(var6);
                    var11 = var12.track;
                    var6 = _closure1_slot6;
                    var7 = var6.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                    var6 = {};
                    var21 = var13 != var23;
                    var20 = null;
                    if(!var21) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var22 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var21 = 9;
                    var21 = var24[var21];
                    var22 = var22.bind(var4)(var21);
                    var21 = var22.parseInviteCodeFromInviteKey;
                    var20 = var21.bind(var22)(var23);
case 41:
                    var6['invite_code'] = var20;
                    var6['guild_template_code'] = var18;
                    var18 = var13 != var19;
                    if(!var18) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var20 = var19.length;
                    var19 = 0;
                    var18 = var19 === var20;
case 43:
                    var6['has_auth_token'] = var18;
                    var19 = _closure1_slot4;
                    var18 = var19.getState;
                    var19 = var18.bind(var19)();
                    var18 = _closure1_slot5;
                    var18 = var18.BACKGROUND;
                    var18 = var19 === var18;
                    var6['is_backgrounded'] = var18;
                    var6['attempt_id'] = var16;
                    var6['deeplink_source'] = var15;
                    var15 = var10.type;
                    var6['link_type'] = var15;
                    var15 = arg2;
                    var6['is_cold_start'] = var15;
                    var6['received_installation_id'] = var14;
                    var14 = var13 != var17;
                    var13 = null;
                    if(!var14) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var14 = {};
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var15 = 10;
                    var15 = var18[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = var16.extractId;
                    var15 = var15.bind(var16)(var17);
                    var14['fingerprint'] = var15;
                    var13 = var14;
case 45:
                    var28 = var6;
                    var27 = var13;
                    var13 = copyDataProperties(var28, var27);
                    var6 = var11.bind(var12)(var7, var6);
case 39:
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 11;
                    var6 = var11[var6];
                    var12 = var7.bind(var4)(var6);
                    var6 = var2;
                    var6 = var12.bind(var4)(var6);
                    var6 = 6;
                    var6 = var11[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var6['payload'] = var10;
                    var6 = var7.bind(var4)(var6);
                    _fun0001_ip = 8; continue _fun0001;
case 25:
                    return var5;
case 19:
                    var7 = var2;
                    var6 = var7.split;
                    var5 = 'voice/';
                    var5 = var6.bind(var7)(var5);
                    var7 = var5.length;
                    var6 = 2;
                    if(!(var6 === var7)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var7 = 1;
                    var11 = var5[var7];
                    var10 = var11.split;
                    var5 = '/';
                    var5 = var10.bind(var11)(var5);
                    var11 = var5.length;
                    var10 = 0;
                    if(!(var10 !== var11)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                    var12 = var5[var10];
                    var11 = 'user';
                    if(!(var11 !== var12)) { _fun0001_ip = 8; continue _fun0001 }
case 51:
                    var12 = var5[var10];
                    var11 = 'invite';
                    if(!(var11 !== var12)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
                    var12 = var5[var10];
                    var11 = 'wave';
                    if(!(var11 !== var12)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
                    var12 = var5[var10];
                    var11 = 'join';
                    if(!(var11 !== var12)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
                    var11 = var5.length;
                    if(!(var6 === var11)) { _fun0001_ip = 8; continue _fun0001 }
case 58:
                    var14 = var5[var10];
                    var13 = var5[var7];
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 6;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var12 = {};
                    var15 = _closure1_slot7;
                    var15 = var15.CHANNEL;
                    var12['type'] = var15;
                    var12['guildId'] = var14;
                    var12['channelId'] = var13;
                    var10['payload'] = var12;
                    var10 = var11.bind(var4)(var10);
                    var10 = undefined;
                    return var10;
case 56:
                    var14 = var5[var7];
                    var13 = var5[var6];
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 6;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var12 = {};
                    var15 = _closure1_slot7;
                    var15 = var15.CHANNEL;
                    var12['type'] = var15;
                    var12['guildId'] = var14;
                    var12['channelId'] = var13;
                    var10['payload'] = var12;
                    var10 = var11.bind(var4)(var10);
                    _fun0001_ip = 8; continue _fun0001;
case 54:
                    var14 = var5[var7];
                    var13 = var5[var6];
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 6;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var12 = {};
                    var15 = _closure1_slot7;
                    var15 = var15.SEND_VOICE_HANGOUT_WAVE;
                    var12['type'] = var15;
                    var12['guildId'] = var14;
                    var12['channelId'] = var13;
                    var10['payload'] = var12;
                    var10 = var11.bind(var4)(var10);
                    _fun0001_ip = 8; continue _fun0001;
case 52:
                    var11 = var5[var7];
                    var10 = var5[var6];
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = {};
                    var7 = {};
                    var12 = _closure1_slot7;
                    var12 = var12.CREATE_VOICE_INVITE;
                    var7['type'] = var12;
                    var7['guildId'] = var11;
                    var7['channelId'] = var10;
                    var5['payload'] = var7;
                    var5 = var6.bind(var4)(var5);
case 8:
                    return var4;
case 49:
                    return var4;
case 47:
                    return var4;
case 59: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot8;
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
                    var5 = _closure1_slot8;
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppStates;
    var _closure1_slot5 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot6 = var8;
    var4 = var4.LinkingTypes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'index.native.tsx';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleIncomingURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleIncomingURL() {
        var1 = undefined;
        var4 = _closure1_slot9;
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