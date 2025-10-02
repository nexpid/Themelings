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
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = var2.url;
                    var7 = var2.source;
                    var6 = _closure1_slot8;
                    var5 = var6.log;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var11 = var3.concat;
                    var27 = 'Opening url: ';
                    var25 = ' [';
                    var23 = ']';
                    var26 = var4;
                    var24 = var7;
                    var3 = var27[var11](var26, var25, var24, var23, var22);
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure1_slot4;
                    var3 = var5.getState;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot5;
                    var3 = var3.ACTIVE;
                    if(!(var5 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.trackAppOpened;
                    var3 = null;
                    var9 = var3 == var4;
                    var3 = 'deeplink';
                    if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = 'launcher';
case 6:
                    var3 = var5.bind(var6)(var3);
case 4:
                    var12 = null;
                    if(!(var12 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var4.startsWith;
                    var3 = 'discordwidget:///';
                    var3 = var5.bind(var4)(var3);
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = var2.URL;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var27 = var5;
                    var26 = var4;
                    var3 = new var27[var3](var26, var25);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var6 = var3.hostname;
                    var3 = 'l.discord.com';
                    var5 = var4;
                    var13 = var7;
                    if(!(var3 === var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = var2.fetch;
                    var9 = undefined;
                    var2 = {'method': 'HEAD', 'redirect': 'follow'};
                    var2 = var3.bind(var9)(var4, var2);
                    SaveGenerator(address=275);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = var2.url;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var3 = var7.bind(var9)(var3);
                    var3 = var3.DeeplinkSource;
                    var13 = var3.Iterable;
case 12:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var6 = undefined;
                    var7 = var7.bind(var6)(var3);
                    var3 = true;
                    var11 = var7.bind(var6)(var5, var3);
                    var16 = var11.fingerprint;
                    var14 = var11.attemptId;
                    var7 = var11.payload;
                    var10 = _closure1_slot8;
                    var9 = var10.log;
                    var3 = 'Parsed url as: ';
                    var3 = var9.bind(var10)(var3, var11);
                    var21 = var7.inviteCode;
                    var15 = var7.guildTemplateCode;
                    var17 = var7.authToken;
                    var3 = var12 == var16;
                    var10 = var5;
                    if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var3 = var12 == var14;
case 18:
                    if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var3 = var12 == var21;
case 20:
                    if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var3 = var12 == var15;
case 22:
                    if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var3 = var12 == var17;
case 24:
                    if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var3 = var12 == var13;
case 26:
                    if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 8;
                    var3 = var9[var3];
                    var11 = var5.bind(var6)(var3);
                    var9 = var11.track;
                    var3 = _closure1_slot6;
                    var5 = var3.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                    var3 = {};
                    var19 = var12 != var21;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var19 = 9;
                    var19 = var22[var19];
                    var20 = var20.bind(var6)(var19);
                    var19 = var20.parseInviteCodeFromInviteKey;
                    var18 = var19.bind(var20)(var21);
case 30:
                    var3['invite_code'] = var18;
                    var3['guild_template_code'] = var15;
                    var15 = var12 != var17;
                    if(!var15) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var18 = var17.length;
                    var17 = 0;
                    var15 = var17 === var18;
case 32:
                    var3['has_auth_token'] = var15;
                    var17 = _closure1_slot4;
                    var15 = var17.getState;
                    var17 = var15.bind(var17)();
                    var15 = _closure1_slot5;
                    var15 = var15.BACKGROUND;
                    var15 = var17 === var15;
                    var3['is_backgrounded'] = var15;
                    var3['attempt_id'] = var14;
                    var3['deeplink_source'] = var13;
                    var13 = var7.type;
                    var3['link_type'] = var13;
                    var13 = var12 != var16;
                    var12 = null;
                    if(!var13) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var13 = {};
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 10;
                    var14 = var17[var14];
                    var15 = var15.bind(var6)(var14);
                    var14 = var15.extractId;
                    var14 = var14.bind(var15)(var16);
                    var13['fingerprint'] = var14;
                    var12 = var13;
case 34:
                    var26 = var3;
                    var25 = var12;
                    var12 = copyDataProperties(var26, var25);
                    var3 = var9.bind(var11)(var5, var3);
case 28:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 11;
                    var3 = var9[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.bind(var6)(var10);
                    var3 = 5;
                    var3 = var9[var3];
                    var5 = var5.bind(var6)(var3);
                    var3 = {};
                    var3['payload'] = var7;
                    var3 = var5.bind(var6)(var3);
                    _fun0001_ip = 8; continue _fun0001;
case 16:
                    return var2;
case 10:
                    var3 = var4.split;
                    var2 = 'voice/';
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.length;
                    var3 = 2;
                    if(!(var3 === var4)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var4 = 1;
                    var6 = var2[var4];
                    var5 = var6.split;
                    var2 = '/';
                    var2 = var5.bind(var6)(var2);
                    var6 = var2.length;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var7 = var2[var5];
                    var6 = 'user';
                    if(!(var6 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 40:
                    var7 = var2[var5];
                    var6 = 'invite';
                    if(!(var6 !== var7)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var7 = var2[var5];
                    var6 = 'wave';
                    if(!(var6 !== var7)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var7 = var2[var5];
                    var6 = 'join';
                    if(!(var6 !== var7)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var6 = var2.length;
                    if(!(var3 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 47:
                    var11 = var2[var5];
                    var10 = var2[var4];
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var9 = {};
                    var12 = _closure1_slot7;
                    var12 = var12.CHANNEL;
                    var9['type'] = var12;
                    var9['guildId'] = var11;
                    var9['channelId'] = var10;
                    var5['payload'] = var9;
                    var5 = var6.bind(var7)(var5);
                    var5 = undefined;
                    return var5;
case 45:
                    var11 = var2[var4];
                    var10 = var2[var3];
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var9 = {};
                    var12 = _closure1_slot7;
                    var12 = var12.CHANNEL;
                    var9['type'] = var12;
                    var9['guildId'] = var11;
                    var9['channelId'] = var10;
                    var5['payload'] = var9;
                    var5 = var6.bind(var7)(var5);
                    _fun0001_ip = 8; continue _fun0001;
case 43:
                    var11 = var2[var4];
                    var10 = var2[var3];
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var9 = {};
                    var12 = _closure1_slot7;
                    var12 = var12.SEND_VOICE_HANGOUT_WAVE;
                    var9['type'] = var12;
                    var9['guildId'] = var11;
                    var9['channelId'] = var10;
                    var5['payload'] = var9;
                    var5 = var6.bind(var7)(var5);
                    _fun0001_ip = 8; continue _fun0001;
case 41:
                    var7 = var2[var4];
                    var6 = var2[var3];
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var5 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.CREATE_VOICE_INVITE;
                    var5['type'] = var8;
                    var5['guildId'] = var7;
                    var5['channelId'] = var6;
                    var2['payload'] = var5;
                    var2 = var3.bind(var4)(var2);
case 8:
                    var2 = undefined;
                    return var2;
case 38:
                    var2 = undefined;
                    return var2;
case 36:
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