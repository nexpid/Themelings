// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var7;
    var2 = function HappeningNowLiveStageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.stage;
            var2 = var1.renderingContext;
            var7 = var1.streamingUser;
            var3 = var1.guildId;
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.useLiveStageData;
            var6 = var1.bind(var6)(var13);
            var1 = var6.channel;
            var10 = var6.speakers;
            var11 = var6.friends;
            var6 = null;
            var12 = var6 == var1;
            var9 = undefined;
            if(var12) { _fun0001_ip = 103; continue _fun0001 }
 98:
            var9 = var1.name;
 103:
            var1 = 'guild';
            if(!(var1 === var2)) { _fun0001_ip = 125; continue _fun0001 }
 111:
            var2 = var10.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 270; continue _fun0001 }
 125:
            var1 = var11.length;
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0001_ip = 218; continue _fun0001 }
 136:
            var1 = var10.length;
            if(!(var1 > var2)) { _fun0001_ip = 335; continue _fun0001 }
 148:
            var2 = _closure1_slot12;
            var1 = {};
            var12 = var10;
            if(!(var6 != var7)) { _fun0001_ip = 172; continue _fun0001 }
 161:
            var14 = new Array(1);
            var14[0] = var7;
            var12 = var14;
 172:
            var1['users'] = var12;
            if(!(var6 == var7)) { _fun0001_ip = 193; continue _fun0001 }
 181:
            var12 = _closure1_slot10;
            var12 = var12.ON_STAGE;
            _fun0001_ip = 203; continue _fun0001;
 193:
            var14 = _closure1_slot10;
            var12 = var14.SHARING;
 203:
            var1['action'] = var12;
            var1['guildId'] = var3;
            var9 = var2.bind(var4)(var1);
            _fun0001_ip = 335; continue _fun0001;
 218:
            var2 = _closure1_slot12;
            var1 = {};
            var1['users'] = var11;
            if(!(var6 == var7)) { _fun0001_ip = 245; continue _fun0001 }
 233:
            var11 = _closure1_slot10;
            var11 = var11.LISTENING;
            _fun0001_ip = 255; continue _fun0001;
 245:
            var12 = _closure1_slot10;
            var11 = var12.WATCHING;
 255:
            var1['action'] = var11;
            var1['guildId'] = var3;
            var9 = var2.bind(var4)(var1);
            _fun0001_ip = 335; continue _fun0001;
 270:
            var2 = _closure1_slot12;
            var1 = {};
            if(!(var6 != var7)) { _fun0001_ip = 291; continue _fun0001 }
 280:
            var11 = new Array(1);
            var11[0] = var7;
            var10 = var11;
 291:
            var1['users'] = var10;
            if(!(var6 == var7)) { _fun0001_ip = 312; continue _fun0001 }
 300:
            var6 = _closure1_slot10;
            var6 = var6.ON_STAGE;
            _fun0001_ip = 322; continue _fun0001;
 312:
            var7 = _closure1_slot10;
            var6 = var7.SHARING;
 322:
            var1['action'] = var6;
            var1['guildId'] = var3;
            var9 = var2.bind(var4)(var1);
 335:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.content;
            var1['style'] = var5;
            var12 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 13;
            var5 = var10[var6];
            var5 = var7.bind(var4)(var5);
            var11 = var5.HappeningNowCardHeader;
            var5 = {};
            var14 = 3;
            var5['lineClamp'] = var14;
            var13 = var13.topic;
            var5['children'] = var13;
            var11 = var12.bind(var4)(var11, var5);
            var5 = new Array(2);
            var5[0] = var11;
            var8 = _closure1_slot7;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.HappeningNowCardSubtitle;
            var6 = {};
            var10 = 1;
            var6['lineClamp'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function getUsersSubtitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.users;
            var3 = var1.action;
            var10 = var1.guildId;
            var6 = var2.length;
            var1 = 0;
            if(!(var1 !== var6)) { _fun0002_ip = 1393; continue _fun0002 }
 33:
            var4 = 1;
            if(!(var4 !== var6)) { _fun0002_ip = 912; continue _fun0002 }
 43:
            var5 = 2;
            if(!(var5 !== var6)) { _fun0002_ip = 479; continue _fun0002 }
 53:
            var6 = var2.length;
            var8 = '';
            var5 = var8;
            if(!(var1 !== var6)) { _fun0002_ip = 477; continue _fun0002 }
 72:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 19;
            var7 = var11[var7];
            var13 = undefined;
            var12 = var9.bind(var13)(var7);
            var11 = var12.getName;
            var9 = var2[var1];
            var7 = null;
            var12 = var11.bind(var12)(var10, var7, var9);
            var7 = var2.length;
            var11 = var7 - var4;
            var7 = _closure1_slot10;
            var7 = var7.LISTENING;
            if(!(var7 !== var3)) { _fun0002_ip = 409; continue _fun0002 }
 142:
            var7 = _closure1_slot10;
            var7 = var7.WATCHING;
            if(!(var7 !== var3)) { _fun0002_ip = 339; continue _fun0002 }
 159:
            var7 = _closure1_slot10;
            var7 = var7.ON_STAGE;
            if(!(var7 !== var3)) { _fun0002_ip = 266; continue _fun0002 }
 173:
            var7 = _closure1_slot10;
            var7 = var7.SHARING;
            var5 = var8;
            if(!(var7 === var3)) { _fun0002_ip = 477; continue _fun0002 }
 193:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 18;
            var9 = var15[var7];
            var9 = var8.bind(var13)(var9);
            var14 = var9.intl;
            var9 = var14.formatToPlainString;
            var7 = var15[var7];
            var7 = var8.bind(var13)(var7);
            var7 = var7.t;
            var8 = var7.m+NEcH;
            var7 = {};
            var7['name'] = var12;
            var7['count'] = var11;
            var5 = var9.bind(var14)(var8, var7);
            _fun0002_ip = 477; continue _fun0002;
 266:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 18;
            var9 = var15[var7];
            var9 = var8.bind(var13)(var9);
            var14 = var9.intl;
            var9 = var14.formatToPlainString;
            var7 = var15[var7];
            var7 = var8.bind(var13)(var7);
            var7 = var7.t;
            var8 = var7.zRm3ZW;
            var7 = {};
            var7['name'] = var12;
            var7['count'] = var11;
            var5 = var9.bind(var14)(var8, var7);
            _fun0002_ip = 477; continue _fun0002;
 339:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 18;
            var9 = var15[var7];
            var9 = var8.bind(var13)(var9);
            var14 = var9.intl;
            var9 = var14.formatToPlainString;
            var7 = var15[var7];
            var7 = var8.bind(var13)(var7);
            var7 = var7.t;
            var8 = var7.Iwxee3;
            var7 = {};
            var7['name'] = var12;
            var7['count'] = var11;
            var5 = var9.bind(var14)(var8, var7);
            _fun0002_ip = 477; continue _fun0002;
 409:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 18;
            var8 = var14[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.CsvyMT;
            var6 = {};
            var6['name'] = var12;
            var6['count'] = var11;
            var5 = var8.bind(var9)(var7, var6);
 477:
            return var5;
 479:
            var14 = var2[var1];
            var8 = var2[var4];
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 19;
            var7 = var9[var4];
            var12 = undefined;
            var13 = var6.bind(var12)(var7);
            var11 = var13.getName;
            var7 = null;
            var11 = var11.bind(var13)(var10, var7, var14);
            var4 = var9[var4];
            var6 = var6.bind(var12)(var4);
            var4 = var6.getName;
            var9 = var4.bind(var6)(var10, var7, var8);
            var4 = _closure1_slot10;
            var4 = var4.LISTENING;
            if(!(var4 !== var3)) { _fun0002_ip = 840; continue _fun0002 }
 566:
            var4 = _closure1_slot10;
            var4 = var4.WATCHING;
            if(!(var4 !== var3)) { _fun0002_ip = 768; continue _fun0002 }
 583:
            var4 = _closure1_slot10;
            var4 = var4.ON_STAGE;
            if(!(var4 !== var3)) { _fun0002_ip = 693; continue _fun0002 }
 597:
            var4 = _closure1_slot10;
            var6 = var4.SHARING;
            var4 = '';
            if(!(var6 === var3)) { _fun0002_ip = 910; continue _fun0002 }
 618:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 18;
            var8 = var14[var6];
            var8 = var7.bind(var12)(var8);
            var13 = var8.intl;
            var8 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.uRjRHR;
            var6 = {};
            var6['name1'] = var11;
            var6['name2'] = var9;
            var4 = var8.bind(var13)(var7, var6);
            _fun0002_ip = 910; continue _fun0002;
 693:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 18;
            var8 = var14[var6];
            var8 = var7.bind(var12)(var8);
            var13 = var8.intl;
            var8 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.SrTuJy;
            var6 = {};
            var6['name1'] = var11;
            var6['name2'] = var9;
            var4 = var8.bind(var13)(var7, var6);
            _fun0002_ip = 910; continue _fun0002;
 768:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 18;
            var8 = var14[var6];
            var8 = var7.bind(var12)(var8);
            var13 = var8.intl;
            var8 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.afUntr;
            var6 = {};
            var6['name1'] = var11;
            var6['name2'] = var9;
            var4 = var8.bind(var13)(var7, var6);
            _fun0002_ip = 910; continue _fun0002;
 840:
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 18;
            var7 = var13[var5];
            var7 = var6.bind(var12)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var13[var5];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.GFMcxs;
            var5 = {};
            var5['name1'] = var11;
            var5['name2'] = var9;
            var4 = var7.bind(var8)(var6, var5);
 910:
            return var4;
 912:
            var9 = var2[var1];
            var1 = _closure1_slot10;
            var1 = var1.LISTENING;
            if(!(var1 !== var3)) { _fun0002_ip = 1294; continue _fun0002 }
 936:
            var1 = _closure1_slot10;
            var1 = var1.WATCHING;
            if(!(var1 !== var3)) { _fun0002_ip = 1195; continue _fun0002 }
 953:
            var1 = _closure1_slot10;
            var1 = var1.ON_STAGE;
            if(!(var1 !== var3)) { _fun0002_ip = 1093; continue _fun0002 }
 970:
            var1 = _closure1_slot10;
            var2 = var1.SHARING;
            var1 = '';
            if(!(var2 === var3)) { _fun0002_ip = 1391; continue _fun0002 }
 991:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var4 = var12[var2];
            var11 = undefined;
            var4 = var3.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var12[var2];
            var2 = var3.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.5oa7dX;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = 19;
            var7 = var12[var7];
            var11 = var8.bind(var11)(var7);
            var8 = var11.getName;
            var7 = null;
            var7 = var8.bind(var11)(var10, var7, var9);
            var2['name'] = var7;
            var1 = var4.bind(var5)(var3, var2);
            _fun0002_ip = 1391; continue _fun0002;
 1093:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var4 = var12[var2];
            var11 = undefined;
            var4 = var3.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var12[var2];
            var2 = var3.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.5uJ3+v;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = 19;
            var7 = var12[var7];
            var11 = var8.bind(var11)(var7);
            var8 = var11.getName;
            var7 = null;
            var7 = var8.bind(var11)(var10, var7, var9);
            var2['name'] = var7;
            var1 = var4.bind(var5)(var3, var2);
            _fun0002_ip = 1391; continue _fun0002;
 1195:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var4 = var12[var2];
            var11 = undefined;
            var4 = var3.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var12[var2];
            var2 = var3.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.iWY9ws;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = 19;
            var7 = var12[var7];
            var11 = var8.bind(var11)(var7);
            var8 = var11.getName;
            var7 = null;
            var7 = var8.bind(var11)(var10, var7, var9);
            var2['name'] = var7;
            var1 = var4.bind(var5)(var3, var2);
            _fun0002_ip = 1391; continue _fun0002;
 1294:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 18;
            var4 = var11[var2];
            var8 = undefined;
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var11[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.lJXKtL;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 19;
            var6 = var11[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getName;
            var6 = null;
            var6 = var7.bind(var8)(var10, var6, var9);
            var2['name'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1391:
            return var1;
 1393:
            var1 = '';
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var13 = 0;
    var5 = var7[var13];
    var4 = metroImportAll;
    var1 = undefined;
    var9 = var4.bind(var1)(var5);
    var _closure1_slot3 = var9;
    var12 = 1;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var7[var11];
    var4 = var6.bind(var1)(var4);
    var19 = var4.HAPPENING_NOW_CONTENT_HEIGHT;
    var16 = var4.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    var18 = var4.HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
    var4 = var4.HappeningNowCardTrackingType;
    var _closure1_slot5 = var4;
    var10 = 3;
    var4 = var7[var10];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var14 = var6.bind(var1)(var4);
    var5 = var14.createStyles;
    var4 = {};
    var15 = {'flexShrink': 1, 'gap': 2};
    var4['content'] = var15;
    var15 = {'marginRight': 12, 'flexDirection': 'column', 'justifyContent': 'space-between', 'height': '100%'};
    var15['width'] = var18;
    var4['stagePreviewContainer'] = var15;
    var15 = {};
    var15['height'] = var16;
    var16 = 6;
    var18 = var7[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.PRIMARY_800;
    var15['backgroundColor'] = var18;
    var18 = var7[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var15['borderRadius'] = var18;
    var18 = 'center';
    var15['alignItems'] = var18;
    var15['paddingTop'] = var16;
    var4['stagePreviewBackground'] = var15;
    var15 = {};
    var15['height'] = var19;
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var19 = var19.PRIMARY_800;
    var15['backgroundColor'] = var19;
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var15['borderRadius'] = var19;
    var15['justifyContent'] = var18;
    var15['alignItems'] = var18;
    var4['stagePreviewBackgroundNoAudience'] = var15;
    var15 = {'backgroundColor': null, 'padding': 2, 'borderRadius': null, 'position': 'absolute', 'alignSelf': 'center', 'bottom': 0};
    var18 = var7[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.STAGE_CARD_PILL_BG;
    var15['backgroundColor'] = var18;
    var16 = var7[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xl;
    var15['borderRadius'] = var16;
    var4['avatarStackContainer'] = var15;
    var4 = var5.bind(var14)(var4);
    var _closure1_slot9 = var4;
    var5 = var9.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var16 = var2.stage;
            var11 = var2.index;
            var _closure2_slot0 = var11;
            var8 = var2.fullwidth;
            var7 = var2.renderingContext;
            var6 = var2.panelVariant;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 46; continue _fun0003 }
 44:
            var6 = false;
 46:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot9;
            var21 = var3.bind(var5)();
            var4 = var16.channel_id;
            _closure2_slot1 = var4;
            var10 = var16.guild_id;
            _closure2_slot2 = var10;
            var12 = _closure1_slot3;
            var9 = var12.useCallback;
            var3 = new Array(3);
            var3[0] = var4;
            var3[1] = var10;
            var3[2] = var11;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.track;
                var4 = _closure1_slot6;
                var5 = var4.ACTIVITY_CARD_CLICKED;
                var4 = {};
                var9 = _closure2_slot0;
                var4['order'] = var9;
                var9 = _closure2_slot2;
                var4['guild_id'] = var9;
                var9 = _closure1_slot5;
                var9 = var9.GUILD_LIVE_STAGE_CARD;
                var4['type'] = var9;
                var8 = _closure2_slot1;
                var4['destination_channel_id'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 8;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.default;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = true;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12 = var9.bind(var12)(var1, var3);
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var13 = var3.bind(var5)(var1);
            var1 = var13.useLiveStageData;
            var1 = var1.bind(var13)(var16);
            var26 = var1.speakers;
            var27 = var1.audienceCount;
            var24 = var1.audiencePrefixedFriends;
            var1 = 11;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCallActivityData;
            var1 = var1.bind(var3)(var4);
            var9 = var1.stream;
            var17 = null;
            if(!(var17 == var9)) { _fun0003_ip = 731; continue _fun0003 }
 208:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 13;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['onPress'] = var12;
            var12 = 'large';
            if(!var8) { _fun0003_ip = 249; continue _fun0003 }
 245:
            var12 = 'full';
 249:
            var1['width'] = var12;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 14;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var1['badgeIcon'] = var12;
            var13 = _closure1_slot0;
            var12 = 15;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.StageIcon;
            var1['IconComponent'] = var12;
            var1['panelVariant'] = var6;
            var14 = _closure1_slot8;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var21.stagePreviewContainer;
            var12['style'] = var15;
            var19 = _closure1_slot7;
            var18 = _closure1_slot4;
            var15 = {};
            var25 = 0;
            if(!(var25 !== var27)) { _fun0003_ip = 354; continue _fun0003 }
 346:
            var20 = var21.stagePreviewBackground;
            _fun0003_ip = 360; continue _fun0003;
 354:
            var20 = var21.stagePreviewBackgroundNoAudience;
 360:
            var15['style'] = var20;
            var20 = var26.length;
            var20 = var20 > var25;
            if(!var20) { _fun0003_ip = 464; continue _fun0003 }
 376:
            var28 = _closure1_slot7;
            var23 = _closure1_slot1;
            var31 = _closure1_slot2;
            var29 = 16;
            var22 = var31[var29];
            var23 = var23.bind(var5)(var22);
            var22 = {};
            var30 = var26[var25];
            var22['user'] = var30;
            var30 = var26[var25];
            var30 = var30.avatarDecoration;
            var22['avatarDecoration'] = var30;
            var22['guildId'] = var10;
            var30 = _closure1_slot0;
            var29 = var31[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.REFRESH_MEDIUM_32;
            var22['size'] = var29;
            var20 = var28.bind(var5)(var23, var22);
 464:
            var15['children'] = var20;
            var18 = var19.bind(var5)(var18, var15);
            var15 = new Array(2);
            var15[0] = var18;
            var18 = var27 > var25;
            var17 = null;
            if(!var18) { _fun0003_ip = 650; continue _fun0003 }
 494:
            var20 = _closure1_slot7;
            var19 = _closure1_slot4;
            var18 = {};
            var21 = var21.avatarStackContainer;
            var18['style'] = var21;
            var23 = _closure1_slot7;
            var22 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 17;
            var21 = var28[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.HappeningNowAvatarStack;
            var21 = {};
            var21['users'] = var24;
            var21['guildId'] = var10;
            var24 = var26.length;
            var24 = var27 + var24;
            var26 = var26.length;
            var26 = var26 > var25;
            var25 = 0;
            if(!var26) { _fun0003_ip = 581; continue _fun0003 }
 578:
            var25 = 1;
 581:
            var24 = var24 - var25;
            var21['userCount'] = var24;
            var24 = true;
            var21['isStage'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 16;
            var24 = var26[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.AvatarSizes;
            var24 = var24.SIZE_16;
            var21['avatarSize'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var18['children'] = var21;
            var17 = var20.bind(var5)(var19, var18);
 650:
            var15[1] = var17;
            var12['children'] = var15;
            var13 = var14.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var13 = {};
            var13['stage'] = var16;
            var13['renderingContext'] = var7;
            var17 = 'guild';
            var16 = undefined;
            if(!(var17 === var7)) { _fun0003_ip = 705; continue _fun0003 }
 702:
            var16 = var10;
 705:
            var13['guildId'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var1['children'] = var12;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 801; continue _fun0003;
 731:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['index'] = var11;
            var11 = var9.ownerId;
            var2['userId'] = var11;
            var2['guildId'] = var10;
            var2['stream'] = var9;
            var2['fullwidth'] = var8;
            var2['renderingContext'] = var7;
            var2['panelVariant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 801:
            return var1;
        }
    };
    var4 = var5.bind(var9)(var4);
    var5 = {};
    var5['LISTENING'] = var13;
    var9 = 'LISTENING';
    var5[var13] = var9;
    var5['WATCHING'] = var12;
    var9 = 'WATCHING';
    var5[var12] = var9;
    var5['ON_STAGE'] = var11;
    var9 = 'ON_STAGE';
    var5[var11] = var9;
    var5['SHARING'] = var10;
    var9 = 'SHARING';
    var5[var10] = var9;
    var _closure1_slot10 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['HappeningNowLiveStageContent'] = var2;
    return var1;
})();