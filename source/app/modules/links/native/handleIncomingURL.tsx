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
                    var16 = undefined;
                    var8 = undefined;
                    var _closure4_slot0 = var4;
                    var _closure4_slot1 = var4;
                    var17 = var3.url;
                    var2 = var17;
                    var15 = var3.source;
                    var16 = var15;
                    var11 = _closure1_slot8;
                    var10 = var11.log;
                    var5 = global;
                    var7 = var5.HermesInternal;
                    var14 = var7.concat;
                    var26 = 'Opening url: ';
                    var24 = ' [';
                    var22 = ']';
                    var25 = var17;
                    var23 = var15;
                    var7 = var26[var14](var25, var24, var23, var22, var21);
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
                    var10 = var2;
                    var7 = null;
                    if(!(var7 != var10)) { _fun0001_ip = 8; continue _fun0001 }
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
                    var14 = _closure1_slot8;
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
                    var25 = var8;
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var26 = var11;
                    var10 = new var26[var12](var25, var24);
                    var10 = var10 instanceof Object ? var10 : var11;
                    _closure4_slot0 = var10;
                    var11 = ['campaign', 'deep_link_value', 'media_source'];
                    _closure4_slot1 = var11;
                    var12 = var10.searchParams;
                    var11 = var12.keys;
                    var24 = var11.bind(var12)();
                    var13 = new Array(0);
                    var23 = 0;
                    var25 = var13;
                    var11 = arraySpread(var25, var24, var23);
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
                    var6 = function(arg1) {
                        var1 = _closure4_slot0;
                        var3 = var1.searchParams;
                        var2 = var3.delete;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var11.bind(var12)(var6);
                    var6 = var10.toString;
                    var13 = var6.bind(var10)();
                    var2 = var13;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 5;
                    var6 = var11[var6];
                    var6 = var10.bind(var4)(var6);
                    var6 = var6.DeeplinkSource;
                    var16 = var6.AppsFlyer;
                    var11 = _closure1_slot8;
                    var10 = var11.log;
                    var6 = var5.HermesInternal;
                    var12 = var6.concat;
                    var6 = 'Extracted clean URL from AppsFlyer legacy URL: ';
                    var6 = var12.bind(var6)(var13);
                    var6 = var10.bind(var11)(var6);
case 10: // try_end0
                    var11 = var2;
                    var10 = var11.startsWith;
                    var6 = 'discordwidget:///';
                    var6 = var10.bind(var11)(var6);
                    if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var11 = var5.URL;
                    var25 = var2;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var26 = var10;
                    var6 = new var26[var11](var25, var24);
                    var6 = var6 instanceof Object ? var6 : var10;
                    var10 = var6.hostname;
                    var6 = 'l.discord.com';
                    if(!(var6 === var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var10 = var5.fetch;
                    var6 = var2;
                    var5 = {'method': 'HEAD', 'redirect': 'follow'};
                    var5 = var10.bind(var4)(var6, var5);
                    SaveGenerator(address=639);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var2 = var5.url;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 5;
                    var6 = var11[var6];
                    var6 = var10.bind(var4)(var6);
                    var6 = var6.DeeplinkSource;
                    var16 = var6.Iterable;
case 21:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 7;
                    var6 = var11[var6];
                    var11 = var10.bind(var4)(var6);
                    var10 = var2;
                    var6 = true;
                    var14 = var11.bind(var4)(var10, var6);
                    var20 = var14.fingerprint;
                    var17 = var14.attemptId;
                    var10 = var14.payload;
                    var12 = var14.installationId;
                    var13 = _closure1_slot8;
                    var11 = var13.log;
                    var6 = 'Parsed url as: ';
                    var6 = var11.bind(var13)(var6, var14);
                    var13 = var10.inviteCode;
                    var18 = var10.guildTemplateCode;
                    var19 = var10.authToken;
                    var6 = var7 != var13;
                    var11 = null;
                    if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 8;
                    var6 = var15[var6];
                    var14 = var14.bind(var4)(var6);
                    var6 = var14.parseInviteCodeFromInviteKey;
                    var11 = var6.bind(var14)(var13);
case 27:
                    var6 = var7 == var20;
                    if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var6 = var7 == var17;
case 29:
                    if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var6 = var7 == var13;
case 31:
                    if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var6 = var7 == var18;
case 33:
                    if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var6 = var7 == var19;
case 35:
                    if(!var6) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var13 = var16;
                    var6 = var7 == var13;
case 37:
                    if(!var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var6 = var7 == var12;
case 39:
                    if(var6) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var6 = 9;
                    var6 = var14[var6];
                    var15 = var13.bind(var4)(var6);
                    var14 = var15.track;
                    var6 = _closure1_slot6;
                    var13 = var6.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                    var6 = {};
                    var6['invite_code'] = var11;
                    var6['guild_template_code'] = var18;
                    var18 = var7 != var19;
                    if(!var18) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var21 = var19.length;
                    var19 = 0;
                    var18 = var19 === var21;
case 43:
                    var6['has_auth_token'] = var18;
                    var19 = _closure1_slot4;
                    var18 = var19.getState;
                    var19 = var18.bind(var19)();
                    var18 = _closure1_slot5;
                    var18 = var18.BACKGROUND;
                    var18 = var19 === var18;
                    var6['is_backgrounded'] = var18;
                    var6['attempt_id'] = var17;
                    var6['deeplink_source'] = var16;
                    var16 = var10.type;
                    var6['link_type'] = var16;
                    var16 = arg2;
                    var6['is_cold_start'] = var16;
                    var6['received_installation_id'] = var12;
                    var17 = var7 != var20;
                    var16 = null;
                    if(!var17) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var17 = {};
                    var19 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var18 = 10;
                    var18 = var21[var18];
                    var19 = var19.bind(var4)(var18);
                    var18 = var19.extractId;
                    var18 = var18.bind(var19)(var20);
                    var17['fingerprint'] = var18;
                    var16 = var17;
case 45:
                    var25 = var6;
                    var24 = var16;
                    var16 = copyDataProperties(var25, var24);
                    var6 = var14.bind(var15)(var13, var6);
case 41:
                    var6 = var7 != var11;
                    if(!var6) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var6 = var7 != var12;
case 47:
                    if(!var6) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 11;
                    var6 = var13[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.setReceivedInstallationIdForInviteCode;
                    var6 = var6.bind(var7)(var11, var12);
case 49:
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 12;
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
                    if(!(var6 === var7)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var7 = 1;
                    var11 = var5[var7];
                    var10 = var11.split;
                    var5 = '/';
                    var5 = var10.bind(var11)(var5);
                    var11 = var5.length;
                    var10 = 0;
                    if(!(var10 !== var11)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var12 = var5[var10];
                    var11 = 'user';
                    if(!(var11 !== var12)) { _fun0001_ip = 8; continue _fun0001 }
case 55:
                    var12 = var5[var10];
                    var11 = 'invite';
                    if(!(var11 !== var12)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
                    var12 = var5[var10];
                    var11 = 'wave';
                    if(!(var11 !== var12)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
                    var12 = var5[var10];
                    var11 = 'join';
                    if(!(var11 !== var12)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
                    var11 = var5.length;
                    if(!(var6 === var11)) { _fun0001_ip = 8; continue _fun0001 }
case 62:
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
case 60:
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
case 58:
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
case 56:
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
case 53:
                    return var4;
case 51:
                    return var4;
case 63: // catch_target0
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
    var4 = 13;
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