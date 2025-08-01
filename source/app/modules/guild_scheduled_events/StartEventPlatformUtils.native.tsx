// app/modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _navigateToEvent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    var3 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 533; continue _fun0001 }
 16:
                    var6 = var2.entity_type;
                    var9 = var2.guild_id;
                    var5 = _closure1_slot8;
                    var5 = var5.STAGE_INSTANCE;
                    if(!(var5 !== var6)) { _fun0001_ip = 298; continue _fun0001 }
 47:
                    var5 = _closure1_slot8;
                    var5 = var5.VOICE;
                    if(!(var5 !== var6)) { _fun0001_ip = 164; continue _fun0001 }
 61:
                    var5 = _closure1_slot8;
                    var5 = var5.EXTERNAL;
                    if(!(var5 === var6)) { _fun0001_ip = 519; continue _fun0001 }
 78:
                    var6 = _closure1_slot7;
                    var5 = var6.getGuildId;
                    var5 = var5.bind(var6)();
                    if(!(var5 !== var9)) { _fun0001_ip = 144; continue _fun0001 }
 96:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 10;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transitionTo;
                    var8 = _closure1_slot9;
                    var5 = var8.CHANNEL;
                    var5 = var5.bind(var8)(var9);
                    var5 = var6.bind(var7)(var5);
 144:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0001_ip = 519; continue _fun0001 }
 153:
                    var5 = undefined;
                    var5 = var3.bind(var5)();
                    _fun0001_ip = 519; continue _fun0001;
 164:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannelId;
                    var9 = var5.bind(var6)();
                    var7 = _closure1_slot5;
                    var6 = var7.getChannel;
                    var5 = var2.channel_id;
                    var7 = var6.bind(var7)(var5);
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var11 = var8.bind(var5)(var6);
                    var6 = null;
                    var10 = var6 != var7;
                    var8 = 'could not find channel';
                    var8 = var11.bind(var5)(var10, var8);
                    var8 = var7.id;
                    if(!(var9 !== var8)) { _fun0001_ip = 282; continue _fun0001 }
 246:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var8 = 9;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.selectVoiceChannel;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7);
 282:
                    if(!(var6 != var3)) { _fun0001_ip = 519; continue _fun0001 }
 289:
                    var5 = var3.bind(var5)();
                    _fun0001_ip = 519; continue _fun0001;
 298:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannelId;
                    var5 = var5.bind(var6)();
                    var7 = _closure1_slot5;
                    var6 = var7.getChannel;
                    var2 = var2.channel_id;
                    var7 = var6.bind(var7)(var2);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 6;
                    var2 = var8[var2];
                    var8 = undefined;
                    var10 = var6.bind(var8)(var2);
                    var9 = null;
                    var6 = var9 != var7;
                    var2 = 'could not find channel';
                    var2 = var10.bind(var8)(var6, var2);
                    var2 = var7.id;
                    if(!(var5 !== var2)) { _fun0001_ip = 424; continue _fun0001 }
 380:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 7;
                    var2 = var6[var2];
                    var6 = var5.bind(var8)(var2);
                    var5 = var6.connectToStage;
                    var2 = true;
                    var2 = var5.bind(var6)(var7, var2);
                    SaveGenerator(address=418);
 416:
                    return var2;
 418:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 530; continue _fun0001 }
 424:
                    if(!(var9 != var3)) { _fun0001_ip = 432; continue _fun0001 }
 428:
                    var3 = var3.bind(var8)();
 432:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var3 = 7;
                    var3 = var6[var3];
                    var5 = var5.bind(var8)(var3);
                    var3 = var5.navigateToStage;
                    var6 = false;
                    var3 = var3.bind(var5)(var7, var9, var6);
                    SaveGenerator(address=471);
 469:
                    return var3;
 471:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 527; continue _fun0001 }
 477:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 8;
                    var4 = var9[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.audienceAckRequestToSpeak;
                    var4 = var4.bind(var5)(var7, var6);
                    SaveGenerator(address=513);
 511:
                    return var4;
 513:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 524; continue _fun0001 }
 519:
                    var5 = undefined;
                    return var5;
 524:
                    return var4;
 527:
                    return var3;
 530:
                    return var2;
 533:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function navigateToEvent() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['navigateToEvent'] = var4;
    var2 = function postStartActions() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['postStartActions'] = var2;
    return var1;
})();