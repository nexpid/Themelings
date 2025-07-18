// app/modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _isDefaultChannelThresholdMetAfterDelete() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 71; continue _fun0001 }
 10:
                    var2 = null;
                    var2 = var2 == var7;
                    if(var2) { _fun0001_ip = 68; continue _fun0001 }
 19:
                    var6 = _closure1_slot13;
                    var5 = undefined;
                    var4 = arg2;
                    var3 = {'removingView': true, 'removingChat': true};
                    var3 = var6.bind(var5)(var7, var4, var3);
                    SaveGenerator(address=56);
 54:
                    return var3;
 56:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0001_ip = 68; continue _fun0001 }
 65:
                    return var3;
 68:
                    return var2;
 71:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function isDefaultChannelThresholdMetAfterChannelChange() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _isDefaultChannelThresholdMetAfterChannelChange() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var8 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 339; continue _fun0002 }
 16:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var4 = var2.bind(var3)(var6);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 334; continue _fun0002 }
 42:
                    var2 = var3 != var4;
                    if(!var2) { _fun0002_ip = 87; continue _fun0002 }
 49:
                    var9 = var4.features;
                    var4 = var3 == var9;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 84; continue _fun0002 }
 64:
                    var7 = var9.has;
                    var4 = _closure1_slot10;
                    var4 = var4.GUILD_ONBOARDING;
                    var3 = var7.bind(var9)(var4);
 84:
                    var2 = var3;
 87:
                    if(var2) { _fun0002_ip = 95; continue _fun0002 }
 90:
                    var3 = true;
                    return var3;
 95:
                    if(!var2) { _fun0002_ip = 113; continue _fun0002 }
 98:
                    var4 = _closure1_slot7;
                    var3 = var4.shouldFetchPrompts;
                    var2 = var3.bind(var4)(var6);
 113:
                    if(!var2) { _fun0002_ip = 162; continue _fun0002 }
 116:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchOnboardingPrompts;
                    var2 = var2.bind(var3)(var6);
                    SaveGenerator(address=153);
 151:
                    return var2;
 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 331; continue _fun0002 }
 162:
                    var4 = _closure1_slot7;
                    var3 = var4.getDefaultChannelIds;
                    var10 = var3.bind(var4)(var6);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 7;
                    var3 = var7[var3];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getChattableDefaultChannels;
                    var6 = var3.bind(var4)(var6, var10);
                    var4 = _closure1_slot4;
                    var3 = 2;
                    var3 = var4.bind(var7)(var6, var3);
                    var4 = 0;
                    var6 = var3[var4];
                    var7 = 1;
                    var4 = var3[var7];
                    var9 = var10.includes;
                    var3 = arg2;
                    var3 = var9.bind(var10)(var3);
                    if(var3) { _fun0002_ip = 258; continue _fun0002 }
 253:
                    var3 = true;
                    return var3;
 258:
                    var3 = var8.removingView;
                    if(!var3) { _fun0002_ip = 284; continue _fun0002 }
 267:
                    var4 = var4.length;
                    var9 = var4 - var7;
                    var4 = _closure1_slot8;
                    var3 = var9 < var4;
 284:
                    var4 = var8.removingChat;
                    if(var4) { _fun0002_ip = 299; continue _fun0002 }
 293:
                    var4 = var8.removingView;
 299:
                    if(!var4) { _fun0002_ip = 319; continue _fun0002 }
 302:
                    var6 = var6.length;
                    var6 = var6 - var7;
                    var5 = _closure1_slot9;
                    var4 = var6 < var5;
 319:
                    var3 = !var3;
                    if(!var3) { _fun0002_ip = 328; continue _fun0002 }
 325:
                    var3 = !var4;
 328:
                    return var3;
 331:
                    return var2;
 334:
                    var2 = true;
                    return var2;
 339:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _checkDefaultChannelThresholdMetAfterChannelPermissionDeny() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    var8 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 721; continue _fun0003 }
 19:
                    var2 = var3.getGuildId;
                    var7 = var2.bind(var3)();
                    var4 = null;
                    if(!(var4 != var7)) { _fun0003_ip = 716; continue _fun0003 }
 38:
                    var12 = var8;
                    if(!(var4 != var10)) { _fun0003_ip = 101; continue _fun0003 }
 45:
                    var11 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var2 = 8;
                    var5 = var13[var2];
                    var9 = undefined;
                    var6 = var11.bind(var9)(var5);
                    var5 = var6.filter;
                    var2 = var13[var2];
                    var9 = var11.bind(var9)(var2);
                    var2 = var9.invert;
                    var2 = var2.bind(var9)(var10);
                    var12 = var5.bind(var6)(var8, var2);
 101:
                    var2 = var3.permissionOverwrites;
                    var2 = var2[var7];
                    if(!(var4 == var2)) { _fun0003_ip = 155; continue _fun0003 }
 115:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.deserialize;
                    var4 = 0;
                    var11 = var5.bind(var6)(var4);
                    _fun0003_ip = 223; continue _fun0003;
 155:
                    var10 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var8 = 8;
                    var4 = var13[var8];
                    var9 = undefined;
                    var6 = var10.bind(var9)(var4);
                    var5 = var6.filter;
                    var4 = var2.deny;
                    var8 = var13[var8];
                    var9 = var10.bind(var9)(var8);
                    var8 = var9.invert;
                    var2 = var2.allow;
                    var2 = var8.bind(var9)(var2);
                    var11 = var5.bind(var6)(var4, var2);
 223:
                    var6 = {};
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var10 = 8;
                    var2 = var2[var10];
                    var13 = undefined;
                    var5 = var4.bind(var13)(var2);
                    var4 = var5.has;
                    var2 = _closure1_slot11;
                    var2 = var2.VIEW_CHANNEL;
                    var2 = var4.bind(var5)(var12, var2);
                    if(!var2) { _fun0003_ip = 315; continue _fun0003 }
 274:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var10];
                    var8 = var5.bind(var13)(var4);
                    var5 = var8.has;
                    var4 = _closure1_slot11;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var5.bind(var8)(var11, var4);
                    var2 = !var4;
 315:
                    var6['removingView'] = var2;
                    var5 = false;
                    var6['removingChat'] = var5;
                    var2 = var3.isForumLikeChannel;
                    var14 = var2.bind(var3)();
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var2 = var2[var10];
                    var8 = var4.bind(var13)(var2);
                    var4 = var8.has;
                    var2 = _closure1_slot11;
                    if(var14) { _fun0003_ip = 430; continue _fun0003 }
 366:
                    var14 = var2.SEND_MESSAGES;
                    var14 = var4.bind(var8)(var12, var14);
                    if(!var14) { _fun0003_ip = 422; continue _fun0003 }
 381:
                    var16 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var15 = var15[var10];
                    var17 = var16.bind(var13)(var15);
                    var16 = var17.has;
                    var15 = _closure1_slot11;
                    var15 = var15.SEND_MESSAGES;
                    var15 = var16.bind(var17)(var11, var15);
                    var14 = !var15;
 422:
                    var6['removingChat'] = var14;
                    _fun0003_ip = 492; continue _fun0003;
 430:
                    var2 = var2.SEND_MESSAGES_IN_THREADS;
                    var2 = var4.bind(var8)(var12, var2);
                    if(!var2) { _fun0003_ip = 486; continue _fun0003 }
 445:
                    var8 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var10];
                    var10 = var8.bind(var13)(var4);
                    var8 = var10.has;
                    var4 = _closure1_slot11;
                    var4 = var4.SEND_MESSAGES_IN_THREADS;
                    var4 = var8.bind(var10)(var11, var4);
                    var2 = !var4;
 486:
                    var6['removingChat'] = var2;
 492:
                    var2 = var6.removingChat;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 513; continue _fun0003 }
 504:
                    var4 = var6.removingView;
                    var2 = !var4;
 513:
                    if(var2) { _fun0003_ip = 713; continue _fun0003 }
 519:
                    var4 = _closure1_slot13;
                    var3 = var3.id;
                    var3 = var4.bind(var13)(var7, var3, var6);
                    SaveGenerator(address=539);
 537:
                    return var3;
 539:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 710; continue _fun0003 }
 548:
                    var6 = !var3;
                    var4 = !var6;
                    if(!var6) { _fun0003_ip = 705; continue _fun0003 }
 560:
                    var7 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var6 = 9;
                    var6 = var14[var6];
                    var8 = var7.bind(var13)(var6);
                    var7 = var8.show;
                    var6 = {};
                    var10 = _closure1_slot0;
                    var9 = 10;
                    var11 = var14[var9];
                    var11 = var10.bind(var13)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var9];
                    var11 = var10.bind(var13)(var11);
                    var11 = var11.t;
                    var11 = var11.ut7sq6;
                    var11 = var12.bind(var15)(var11);
                    var6['title'] = var11;
                    var11 = var14[var9];
                    var11 = var10.bind(var13)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var14[var9];
                    var9 = var10.bind(var13)(var9);
                    var9 = var9.t;
                    var10 = var9.5sm9rK;
                    var9 = {};
                    var9 = var11.bind(var12)(var10, var9);
                    var6['body'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var4 = false;
 705:
                    var2 = var4;
                    _fun0003_ip = 713; continue _fun0003;
 710:
                    return var3;
 713:
                    return var2;
 716:
                    var2 = true;
                    return var2;
 721:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING;
    var _closure1_slot8 = var7;
    var4 = var4.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var7 = var4.GuildSettingsSections;
    var4 = var4.Permissions;
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/DefaultChannelThresholdUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isDefaultChannelThresholdMetAfterDelete() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['isDefaultChannelThresholdMetAfterDelete'] = var4;
    var2 = function checkDefaultChannelThresholdMetAfterChannelPermissionDeny() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['checkDefaultChannelThresholdMetAfterChannelPermissionDeny'] = var2;
    return var1;
})();