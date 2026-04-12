// app/modules/game_profile/navigateToGameAnnouncement.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _navigateToGameAnnouncement() {
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
                    var12 = var2.invite;
                    var8 = var2.guildId;
                    var10 = var2.channelId;
                    var9 = var2.messageId;
                    var7 = var2.analyticsLocationStack;
                    var6 = undefined;
                    SaveGenerator(address=46);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 3;
                    var4 = var11[var4];
                    var11 = var5.bind(var6)(var4);
                    var5 = var7.length;
                    var4 = 0;
                    var5 = var5 > var4;
                    var4 = 'analyticsLocationStack must have at least one location';
                    var4 = var11.bind(var6)(var5, var4);
                    var5 = var7.length;
                    var4 = 1;
                    var4 = var5 - var4;
                    var13 = var7[var4];
                    var4 = null;
                    var5 = var4 != var12;
                    var14 = null;
                    if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var12.guild;
                    var15 = var4 == var5;
                    var11 = undefined;
                    if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = var5.id;
case 10:
                    var5 = global;
                    var16 = var5.Set;
                    var15 = var12.guild;
                    var17 = var4 == var15;
                    var5 = undefined;
                    if(var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var15.features;
case 12:
                    var15 = var16.prototype;
                    var15 = Object.create(var15, {constructor: {value: var16}});
                    var22 = var15;
                    var21 = var5;
                    var5 = new var22[var16](var21, var20);
                    var14 = var5 instanceof Object ? var5 : var15;
                    var8 = var11;
case 8:
                    if(!(var4 != var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = _closure1_slot4;
                    var5 = var11.getGuild;
                    var11 = var5.bind(var11)(var8);
                    var15 = var4 == var11;
                    var5 = undefined;
                    if(var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = var11.joinedAt;
case 16:
                    if(!(var4 == var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    if(!(var4 != var14)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var11 = var14.has;
                    var5 = _closure1_slot5;
                    var5 = var5.PREVIEW_ENABLED;
                    var5 = var11.bind(var14)(var5);
                    if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    if(!(var4 != var12)) { _fun0001_ip = 18; continue _fun0001 }
case 23:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 5;
                    var4 = var11[var4];
                    var11 = var5.bind(var6)(var4);
                    var5 = var11.acceptInvite;
                    var4 = {};
                    var12 = var12.code;
                    var4['inviteKey'] = var12;
                    var12 = {};
                    var12['location'] = var13;
                    var4['context'] = var12;
                    var12 = true;
                    var4['skipOnboarding'] = var12;
                    var4 = var5.bind(var11)(var4);
                    SaveGenerator(address=343);
case 24:
                    return var4;
case 25:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 26; continue _fun0001 }
case 18:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 6;
                    var5 = var12[var5];
                    var13 = var11.bind(var6)(var5);
                    var12 = var13.transitionTo;
                    var11 = _closure1_slot7;
                    var5 = var11.CHANNEL;
                    var11 = var5.bind(var11)(var8, var10, var9);
                    var5 = {};
                    var5['sourceLocationStack'] = var7;
                    var5 = var12.bind(var13)(var11, var5);
case 14:
                    return var6;
case 26:
                    return var4;
case 20:
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 4;
                    var4 = var11[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.startLurking;
                    var4 = {};
                    var11 = true;
                    var4['shouldNavigate'] = var11;
                    var4['channelId'] = var10;
                    var4['messageId'] = var9;
                    var3 = _closure1_slot6;
                    var3 = var3.GAME_PROFILE_ANNOUNCEMENTS;
                    var4['joinSource'] = var3;
                    var20 = {};
                    var22 = var6;
                    var21 = var8;
                    var19 = var4;
                    var18 = var7;
                    var3 = var22[var5](var21, var20, var19, var18, var17);
                    SaveGenerator(address=491);
case 27:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var4 = undefined;
                    return var4;
case 29:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var7 = var4.GuildFeatures;
    var _closure1_slot5 = var7;
    var7 = var4.JoinGuildSources;
    var _closure1_slot6 = var7;
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/navigateToGameAnnouncement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function navigateToGameAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot8;
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