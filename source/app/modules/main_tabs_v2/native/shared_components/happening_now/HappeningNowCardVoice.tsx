// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var4 = function useVoiceChannelUsers(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 18;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot7;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot6;
        var3[1] = var7;
        var6 = _closure1_slot5;
        var3[2] = var6;
        var6 = var2.channelId;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot7;
            var4 = var5.getVoiceStatesForChannel;
            var3 = _closure2_slot0;
            var3 = var3.channelId;
            var4 = var4.bind(var5)(var3);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var5 = var3.bind(var6)(var4);
            var4 = var5.map;
            var3 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var2 = 20;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var4 = var3.bind(var4)(var2);
            var3 = var4.orderBy;
            var2 = new Array(1);
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUserAffinity;
                    var1 = arg1;
                    var1 = var1.id;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0001_ip = 43; continue _fun0001 }
 37:
                    var2 = var3.communicationProbability;
 43:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0001_ip = 55; continue _fun0001 }
 52:
                    var1 = var2;
 55:
                    return var1;
                }
            };
            var2[0] = var1;
            var1 = ['desc'];
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var2 = function formatVoiceActivityTitle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0002_ip = 376; continue _fun0002 }
 20:
            var8 = 1;
            if(!(var8 !== var3)) { _fun0002_ip = 330; continue _fun0002 }
 30:
            var10 = 2;
            if(!(var10 !== var3)) { _fun0002_ip = 192; continue _fun0002 }
 40:
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 22;
            var6 = var14[var3];
            var12 = undefined;
            var6 = var4.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var14[var3];
            var3 = var4.bind(var12)(var3);
            var3 = var3.t;
            var4 = var3.pjxkCA;
            var3 = {};
            var11 = _closure1_slot1;
            var9 = 21;
            var13 = var14[var9];
            var17 = var11.bind(var12)(var13);
            var16 = var17.getName;
            var15 = var2[var1];
            var13 = null;
            var15 = var16.bind(var17)(var5, var13, var15);
            var3['user1'] = var15;
            var9 = var14[var9];
            var12 = var11.bind(var12)(var9);
            var11 = var12.getName;
            var9 = var2[var8];
            var9 = var11.bind(var12)(var5, var13, var9);
            var3['user2'] = var9;
            var9 = var2.length;
            var9 = var9 - var10;
            var3['extras'] = var9;
            var3 = var6.bind(var7)(var4, var3);
            return var3;
 192:
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 22;
            var6 = var13[var3];
            var12 = undefined;
            var6 = var4.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var13[var3];
            var3 = var4.bind(var12)(var3);
            var3 = var3.t;
            var4 = var3.4SM/RU;
            var3 = {};
            var10 = _closure1_slot1;
            var9 = 21;
            var11 = var13[var9];
            var16 = var10.bind(var12)(var11);
            var15 = var16.getName;
            var14 = var2[var1];
            var11 = null;
            var14 = var15.bind(var16)(var5, var11, var14);
            var3['user1'] = var14;
            var9 = var13[var9];
            var10 = var10.bind(var12)(var9);
            var9 = var10.getName;
            var8 = var2[var8];
            var8 = var9.bind(var10)(var5, var11, var8);
            var3['user2'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            return var3;
 330:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 21;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.getName;
            var2 = var2[var1];
            var1 = null;
            var1 = var3.bind(var4)(var5, var1, var2);
            return var1;
 376:
            var1 = '';
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var9 = var6.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var13 = 1;
    var6 = var8[var13];
    var6 = var7.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.HappeningNowCardTrackingType;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.jsx;
    var _closure1_slot10 = var10;
    var6 = var6.jsxs;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {};
    var12['flexShrink'] = var13;
    var6['content'] = var12;
    var12 = {};
    var13 = 12;
    var12['marginRight'] = var13;
    var6['avatars'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot12 = var6;
    var6 = var9.memo;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var19 = var2.guildId;
            var _closure2_slot0 = var19;
            var9 = var2.index;
            var _closure2_slot1 = var9;
            var15 = var2.voiceState;
            var _closure2_slot2 = var15;
            var8 = var2.fullwidth;
            var6 = var2.panelVariant;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 53; continue _fun0003 }
 51:
            var6 = false;
 53:
            var _closure2_slot3 = var5;
            var3 = _closure1_slot12;
            var12 = var3.bind(var5)();
            var3 = _closure1_slot13;
            var18 = var3.bind(var5)(var15);
            _closure2_slot3 = var18;
            var3 = _closure1_slot14;
            var17 = var3.bind(var5)(var18, var19);
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var19;
            var9 = var15.channelId;
            var3[2] = var9;
            var3[3] = var18;
            var1 = function() {
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var5 = var3[var1];
                var1 = undefined;
                var8 = var6.bind(var1)(var5);
                var7 = var8.track;
                var5 = _closure1_slot9;
                var6 = var5.ACTIVITY_CARD_CLICKED;
                var5 = {};
                var10 = _closure2_slot1;
                var5['order'] = var10;
                var10 = _closure2_slot0;
                var5['guild_id'] = var10;
                var10 = _closure1_slot8;
                var10 = var10.VOICE_CARD;
                var5['type'] = var10;
                var10 = _closure2_slot2;
                var10 = var10.channelId;
                var5['destination_channel_id'] = var10;
                var11 = _closure2_slot3;
                var10 = var11.map;
                var9 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var9 = var10.bind(var11)(var9);
                var5['highlighted_user_ids'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var5 = _closure1_slot0;
                var4 = 11;
                var4 = var3[var4];
                var5 = var5.bind(var1)(var4);
                var4 = 10;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var5.bind(var1)(var4, var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.default;
                        var2 = _closure2_slot2;
                        var3 = var2.channelId;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 45; continue _fun0004 }
 26:
                        var1 = _closure2_slot2;
                        var3 = var1.channelId;
                        var2 = undefined;
                        var1 = true;
                        var1 = var4.bind(var2)(var3, var1);
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var4.bind(var7)(var1, var3);
            var3 = var18.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0003_ip = 440; continue _fun0003 }
 152:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var11 = 13;
            var1 = var1[var11];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['onPress'] = var7;
            var7 = 'large';
            if(!var8) { _fun0003_ip = 193; continue _fun0003 }
 189:
            var7 = 'full';
 193:
            var1['width'] = var7;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 14;
            var7 = var16[var7];
            var7 = var9.bind(var5)(var7);
            var1['badgeIcon'] = var7;
            var13 = _closure1_slot0;
            var7 = 15;
            var7 = var16[var7];
            var7 = var13.bind(var5)(var7);
            var7 = var7.VoiceNormalIcon;
            var1['IconComponent'] = var7;
            var1['panelVariant'] = var6;
            var14 = _closure1_slot10;
            var10 = _closure1_slot4;
            var7 = {};
            var8 = var12.avatars;
            var7['style'] = var8;
            var8 = 16;
            var8 = var16[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['guildId'] = var19;
            var8['users'] = var18;
            var8 = var14.bind(var5)(var9, var8);
            var7['children'] = var8;
            var8 = var14.bind(var5)(var10, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var9 = _closure1_slot11;
            var8 = {};
            var12 = var12.content;
            var8['style'] = var12;
            var11 = var16[var11];
            var11 = var13.bind(var5)(var11);
            var12 = var11.HappeningNowCardHeader;
            var11 = {};
            var18 = 2;
            var11['lineClamp'] = var18;
            var11['children'] = var17;
            var12 = var14.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = 17;
            var12 = var16[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.HappeningNowVoiceCardSubtitle;
            var12 = {};
            var12['voiceState'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var9.bind(var5)(var10, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 483; continue _fun0003;
 440:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.HappeningNowCardPlaceholder;
            var2 = {};
            var2['panelVariant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 483:
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useVoiceChannelUsers'] = var4;
    var3['formatVoiceActivityTitle'] = var2;
    return var1;
})();