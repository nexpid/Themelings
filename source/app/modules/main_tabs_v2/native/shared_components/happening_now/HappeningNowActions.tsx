// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function trackClick(arg1, arg2) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot10;
        var3 = var2.ACTIVITY_CARD_CLICKED;
        var2 = {};
        var6 = arg1;
        var2['type'] = var6;
        var6 = 0;
        var2['order'] = var6;
        var6 = arg2;
        var2['guild_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HappeningNowCardTrackingType;
    var _closure1_slot9 = var7;
    var13 = var4.HAPPENING_NOW_CARD_HEIGHT;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'padding': 8, 'borderWidth': 1};
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var10['height'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var10['borderColor'] = var13;
    var4['actionCard'] = var10;
    var10 = {'backgroundColor': null, 'height': 44, 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'marginBottom': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_PRIMARY;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var4['actionCardImage'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.text;
            var7 = var1.onPress;
            var13 = var1.imageSource;
            var5 = var1.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var1 = _closure1_slot14;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 20;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var7;
            var7 = var11.actionCard;
            var1['style'] = var7;
            var7 = 'medium';
            var1['width'] = var7;
            var1['panelVariant'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot4;
            var5 = {};
            var11 = var11.actionCardImage;
            var5['style'] = var11;
            var12 = _closure1_slot5;
            var11 = {};
            var11['source'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 21;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/normal', 'maxFontSizeMultiplier': 2};
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HappeningNowCardCreateChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var5 = var2.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = false;
case 4:
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var4 = _closure1_slot16;
                var1 = _closure1_slot9;
                var3 = var1.GUILD_ACTION_CREATE_CHANNEL_CARD;
                var5 = _closure2_slot0;
                var1 = undefined;
                var3 = var4.bind(var1)(var3, var5);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var10 = var4;
                var9 = null;
                var8 = var5;
                var7 = null;
                var6 = null;
                var2 = var10[var3](var9, var8, var7, var6, var5);
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 12;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var1['imageSource'] = var8;
            var1['onPress'] = var7;
            var9 = _closure1_slot0;
            var6 = 13;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.fUYU+v;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardCreateChannel'] = var4;
    var4 = function HappeningNowCardCustomizeGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var5 = var2.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var5 = false;
case 4:
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var5 = _closure1_slot16;
                var1 = _closure1_slot9;
                var3 = var1.GUILD_ACTION_CUSTOMIZE_CARD;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var4);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var8 = 'Customize';
            var1['text'] = var8;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 15;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var1['imageSource'] = var7;
            var1['onPress'] = var6;
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardCustomizeGuild'] = var4;
    var4 = function HappeningNowCardInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var5 = var2.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var5 = false;
case 4:
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var7 = _closure2_slot0;
                    var6 = var3.bind(var4)(var7);
                    var4 = _closure1_slot6;
                    var3 = var4.getChannels;
                    var5 = var3.bind(var4)(var7);
                    var4 = _closure1_slot8;
                    var3 = var4.getChannelId;
                    var4 = var3.bind(var4)(var7);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var8 = _closure1_slot16;
                    var3 = _closure1_slot9;
                    var3 = var3.GUILD_ACTION_INVITE_CARD;
                    var2 = _closure2_slot0;
                    var7 = undefined;
                    var2 = var8.bind(var7)(var3, var2);
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 16;
                    var2 = var8[var2];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.handleOpenInviteActionsheet;
                    var1 = _closure1_slot11;
                    var9 = var1.SERVER_PROFILE;
                    var13 = var3;
                    var12 = var6;
                    var11 = var4;
                    var10 = var5;
                    var1 = var13[var2](var12, var11, var10, var9, var8);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 17;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var1['imageSource'] = var8;
            var1['onPress'] = var7;
            var9 = _closure1_slot0;
            var6 = 13;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.VINpSE;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardInvite'] = var4;
    var2 = function HappeningNowStudentHubAddServer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var5 = var2.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0006_ip = 4; continue _fun0006 }
case 5:
            var5 = false;
case 4:
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var6 = _closure2_slot0;
                    var5 = var3.bind(var4)(var6);
                    var4 = _closure1_slot6;
                    var3 = var4.getDefaultChannel;
                    var4 = var3.bind(var4)(var6);
                    var6 = null;
                    var3 = var6 != var5;
                    if(!var3) { _fun0007_ip = 8; continue _fun0007 }
case 9:
                    var3 = var6 != var4;
case 8:
                    if(!var3) { _fun0007_ip = 10; continue _fun0007 }
case 11:
                    var7 = _closure1_slot16;
                    var3 = _closure1_slot9;
                    var6 = var3.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var7.bind(var3)(var6, var2);
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 18;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var6 = var5.id;
                    var1['directoryGuildId'] = var6;
                    var5 = var5.name;
                    var1['directoryGuildName'] = var5;
                    var4 = var4.id;
                    var1['directoryChannelId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var1['imageSource'] = var8;
            var1['onPress'] = var7;
            var9 = _closure1_slot0;
            var6 = 13;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.emRpdX;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowStudentHubAddServer'] = var2;
    return var1;
})();