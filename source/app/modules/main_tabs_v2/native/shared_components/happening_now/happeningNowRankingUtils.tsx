// app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot5 = var5;
    var5 = var4.HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN;
    var _closure1_slot6 = var5;
    var4 = var4.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot7 = var4;
    var4 = function cardSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = var4.kind;
            var1 = 'placeholder';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'voice';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = 'activity';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var1 = 'guild-event';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var1 = 'active-channel';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var1 = 'live-guild-stage';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var1 = 'embedded-activity';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var1 = 'unified-vc';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var1 = 'user';
            if(!(var1 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = 'invite';
            if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = 'create-channel';
            if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var1 = 'customize-guild';
            if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            var1 = 'student-hub-add-channel';
            if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 17:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 13:
            var1 = _closure1_slot6;
            return var1;
case 11:
            var1 = _closure1_slot7;
            return var1;
case 2:
            var1 = _closure1_slot5;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['cardSize'] = var4;
    var4 = {'Stage': 7, 'Voice': 6, 'Stream': 5, 'Game': 4, 'Listening': 3, 'CustomStatus': 3, 'User': 2, 'Base': 1};
    var3['HappeningNowWeights'] = var4;
    var4 = -1000;
    var3['HAPPENING_NOW_OFFLINE_PENALTY'] = var4;
    var4 = function filterHappeningNowCards(arg1) {
        var3 = arg1;
        var2 = function hasNoDiscoverableVoiceStates(arg1) {
            var3 = function cardHasNoDiscoverableVoiceStates(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = 'voiceState';
                    var1 = var1 in var2;
                    if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var3 = var2.voiceState;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                    var2 = var2.voiceState;
                    var5 = var2.channelId;
                    if(!(var1 != var5)) { _fun0002_ip = 21; continue _fun0002 }
case 5:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var4 = _closure1_slot4;
                    var1 = var4.getVoiceStatesForChannel;
                    var1 = var1.bind(var4)(var5);
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var3 = var4.every;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.discoverable;
                        var1 = false;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
case 21:
                    var1 = false;
                    return var1;
case 18:
                    var1 = false;
                    return var1;
                }
            };
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure2_slot0 = var2;
        var2 = function hasBlockedOrIgnoredUserInChannel(arg1) {
            var3 = function cardHasBlockedOrIgnoredUserInVoiceChannel(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = 'voiceState';
                    var1 = var1 in var3;
                    if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 3:
                    var4 = var3.voiceState;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = var3.voiceState;
                    var6 = var3.channelId;
                    if(!(var1 != var6)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var5 = _closure1_slot4;
                    var4 = var5.getVoiceStatesForChannel;
                    var5 = var4.bind(var5)(var6);
                    var1 = var1 != var5;
                    if(!var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var7 = undefined;
                    var4 = var6.bind(var7)(var4);
                    var6 = var4.bind(var7)(var5);
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.filter;
                    var6 = _closure1_slot0;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.isNotNullish;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var3 = _closure1_slot3;
                        var2 = var3.isBlockedOrIgnored;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 28:
                    return var1;
case 26:
                    var1 = false;
                    return var1;
case 24:
                    var1 = false;
                    return var1;
                }
            };
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure2_slot1 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                var1 = !var1;
                if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var2 = _closure2_slot1;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 30:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterHappeningNowCards'] = var4;
    var2 = function sortHappeningNowCards(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.orderBy;
        var3 = new Array(2);
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = arg1;
                var3 = var4.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = 1;
                if(!(var3 === var2)) { _fun0005_ip = 4; continue _fun0005 }
case 32:
                var1 = 0;
case 4:
                return var1;
            }
        };
        var3[0] = var2;
        var1 = function(arg1) {
            var3 = function cardHasNonDiscoverableVoiceStates(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = 'voiceState';
                    var1 = var1 in var2;
                    if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 19:
                    var3 = var2.voiceState;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 33; continue _fun0006 }
case 20:
                    var2 = var2.voiceState;
                    var4 = var2.discoverable;
                    var3 = false;
                    if(!(var3 !== var4)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var6 = var2.channelId;
                    var1 = var1 != var6;
                    if(!var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.values;
                    var5 = _closure1_slot4;
                    var2 = var5.getVoiceStatesForChannel;
                    var2 = var2.bind(var5)(var6);
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.discoverable;
                        var1 = false;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 36:
                    return var1;
case 34:
                    var1 = true;
                    return var1;
case 33:
                    var1 = false;
                    return var1;
                }
            };
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3[1] = var1;
        var2 = arg1;
        var1 = ['asc', 'asc'];
        var1 = var4.bind(var5)(var2, var3, var1);
        return var1;
    };
    var3['sortHappeningNowCards'] = var2;
    return var1;
})();