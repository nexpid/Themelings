// app/modules/links/native/handleIncomingURL.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 1159; continue _fun0001 }
 13:
                    var4 = var2.url;
                    var13 = var2.source;
                    var6 = _closure1_slot8;
                    var5 = var6.log;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Opening url: ';
                    var3 = var7.bind(var3)(var4);
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure1_slot4;
                    var3 = var5.getState;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot5;
                    var3 = var3.ACTIVE;
                    if(!(var5 !== var3)) { _fun0001_ip = 145; continue _fun0001 }
 93:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.trackAppOpened;
                    var3 = null;
                    var7 = var3 == var4;
                    var3 = 'deeplink';
                    if(!var7) { _fun0001_ip = 140; continue _fun0001 }
 134:
                    var3 = 'launcher';
 140:
                    var3 = var5.bind(var6)(var3);
 145:
                    var12 = null;
                    if(!(var12 != var4)) { _fun0001_ip = 1144; continue _fun0001 }
 154:
                    var5 = var4.startsWith;
                    var3 = 'discordwidget:///';
                    var3 = var5.bind(var4)(var3);
                    if(var3) { _fun0001_ip = 733; continue _fun0001 }
 177:
                    var3 = var2.URL;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var25 = var5;
                    var24 = var4;
                    var3 = new var25[var3](var24, var23);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var6 = var3.hostname;
                    var3 = 'l.discord.com';
                    var5 = var4;
                    if(!(var3 === var6)) { _fun0001_ip = 303; continue _fun0001 }
 225:
                    var3 = var2.fetch;
                    var9 = undefined;
                    var2 = {'method': 'HEAD', 'redirect': 'follow'};
                    var2 = var3.bind(var9)(var4, var2);
                    SaveGenerator(address=257);
 255:
                    return var2;
 257:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 730; continue _fun0001 }
 266:
                    var5 = var2.url;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var3 = var7.bind(var9)(var3);
                    var3 = var3.DeeplinkSource;
                    var13 = var3.Iterable;
 303:
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
                    if(!var3) { _fun0001_ip = 407; continue _fun0001 }
 403:
                    var3 = var12 == var14;
 407:
                    if(!var3) { _fun0001_ip = 414; continue _fun0001 }
 410:
                    var3 = var12 == var21;
 414:
                    if(!var3) { _fun0001_ip = 421; continue _fun0001 }
 417:
                    var3 = var12 == var15;
 421:
                    if(!var3) { _fun0001_ip = 428; continue _fun0001 }
 424:
                    var3 = var12 == var17;
 428:
                    if(!var3) { _fun0001_ip = 435; continue _fun0001 }
 431:
                    var3 = var12 == var13;
 435:
                    if(var3) { _fun0001_ip = 676; continue _fun0001 }
 441:
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
                    if(!var19) { _fun0001_ip = 518; continue _fun0001 }
 487:
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var19 = 9;
                    var19 = var22[var19];
                    var20 = var20.bind(var6)(var19);
                    var19 = var20.parseInviteCodeFromInviteKey;
                    var18 = var19.bind(var20)(var21);
 518:
                    var3['invite_code'] = var18;
                    var3['guild_template_code'] = var15;
                    var15 = var12 != var17;
                    if(!var15) { _fun0001_ip = 546; continue _fun0001 }
 535:
                    var18 = var17.length;
                    var17 = 0;
                    var15 = var17 === var18;
 546:
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
                    if(!var13) { _fun0001_ip = 660; continue _fun0001 }
 619:
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
 660:
                    var24 = var3;
                    var23 = var12;
                    var12 = copyDataProperties(var24, var23);
                    var3 = var9.bind(var11)(var5, var3);
 676:
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
                    _fun0001_ip = 1144; continue _fun0001;
 730:
                    return var2;
 733:
                    var3 = var4.split;
                    var2 = 'voice/';
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.length;
                    var3 = 2;
                    if(!(var3 === var4)) { _fun0001_ip = 1154; continue _fun0001 }
 764:
                    var4 = 1;
                    var6 = var2[var4];
                    var5 = var6.split;
                    var2 = '/';
                    var2 = var5.bind(var6)(var2);
                    var6 = var2.length;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0001_ip = 1149; continue _fun0001 }
 799:
                    var7 = var2[var5];
                    var6 = 'user';
                    if(!(var6 !== var7)) { _fun0001_ip = 1144; continue _fun0001 }
 814:
                    var7 = var2[var5];
                    var6 = 'invite';
                    if(!(var6 !== var7)) { _fun0001_ip = 1078; continue _fun0001 }
 829:
                    var7 = var2[var5];
                    var6 = 'wave';
                    if(!(var6 !== var7)) { _fun0001_ip = 1010; continue _fun0001 }
 844:
                    var7 = var2[var5];
                    var6 = 'join';
                    if(!(var6 !== var7)) { _fun0001_ip = 939; continue _fun0001 }
 856:
                    var6 = var2.length;
                    if(!(var3 === var6)) { _fun0001_ip = 1144; continue _fun0001 }
 868:
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
 939:
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
                    _fun0001_ip = 1144; continue _fun0001;
 1010:
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
                    _fun0001_ip = 1144; continue _fun0001;
 1078:
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
 1144:
                    var2 = undefined;
                    return var2;
 1149:
                    var2 = undefined;
                    return var2;
 1154:
                    var2 = undefined;
                    return var2;
 1159:
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