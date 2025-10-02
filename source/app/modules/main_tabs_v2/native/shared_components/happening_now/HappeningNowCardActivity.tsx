// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function IconOrPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = var3.userId;
            var1 = var3.activity;
            var10 = var3.stream;
            var3 = var3.game;
            var5 = _closure1_slot16;
            var4 = undefined;
            var9 = var5.bind(var4)();
            var _closure2_slot0 = var9;
            var5 = {};
            var5['userId'] = var6;
            var5['activity'] = var1;
            var5['game'] = var3;
            var5['stream'] = var10;
            var3 = function useActivityIcon(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.userId;
                    var2 = var1.activity;
                    var10 = var1.game;
                    var11 = var1.stream;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 41;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var3 = null;
                    var4 = var3 == var11;
                    var7 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = var11.guildId;
case 2:
                    var4 = var3 == var11;
                    var6 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var11.channelId;
case 4:
                    var12 = var3 == var11;
                    var4 = undefined;
                    if(var12) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var11.ownerId;
case 6:
                    var4 = var9.bind(var5)(var7, var6, var4);
                    var6 = var4.previewUrl;
                    var7 = var3 != var6;
                    var4 = undefined;
                    if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var6;
case 8:
                    var6 = var3 == var4;
                    if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = var3 == var2;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = var2.assets;
                    var11 = var3 == var9;
                    var7 = undefined;
                    if(var11) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                    var7 = var9.large_image;
case 12:
                    var6 = var3 != var7;
case 10:
                    if(!var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 42;
                    var6 = var9[var6];
                    var12 = var7.bind(var5)(var6);
                    var11 = var12.getAssetImage;
                    var6 = var3 == var2;
                    var9 = undefined;
                    if(var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var9 = var2.application_id;
case 17:
                    var6 = var3 == var2;
                    var7 = undefined;
                    if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = var2.assets;
                    var7 = var6.large_image;
case 19:
                    var13 = _closure1_slot14;
                    var6 = new Array(2);
                    var6[0] = var13;
                    var13 = _closure1_slot14;
                    var6[1] = var13;
                    var4 = var11.bind(var12)(var9, var7, var6);
case 15:
                    if(!(var3 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var7 = var3 == var10;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var9 = var10.getIconURL;
                    var7 = _closure1_slot14;
                    var6 = var9.bind(var10)(var7);
case 23:
                    var4 = var6;
case 21:
                    var6 = var3 == var4;
                    if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var9 = var3 == var2;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var9 = var2.assets;
                    var10 = var3 == var9;
                    var7 = undefined;
                    if(var10) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                    var7 = var9.small_image;
case 27:
                    var6 = var3 != var7;
case 25:
                    if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 42;
                    var6 = var9[var6];
                    var11 = var7.bind(var5)(var6);
                    var10 = var11.getAssetImage;
                    var6 = var3 == var2;
                    var9 = undefined;
                    if(var6) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var9 = var2.application_id;
case 32:
                    var6 = var3 == var2;
                    var7 = undefined;
                    if(var6) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var6 = var2.assets;
                    var7 = var6.small_image;
case 34:
                    var12 = _closure1_slot14;
                    var6 = new Array(2);
                    var6[0] = var12;
                    var12 = _closure1_slot14;
                    var6[1] = var12;
                    var4 = var10.bind(var11)(var9, var7, var6);
case 30:
                    if(!(var3 == var4)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var6 = var3 == var2;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var3 = var2.type;
case 38:
                    var2 = _closure1_slot9;
                    var2 = var2.PLAYING;
                    if(!(var3 !== var2)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 43;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    _fun0002_ip = 42; continue _fun0002;
case 40:
                    var6 = _closure1_slot15;
                    var7 = var8.slice;
                    var3 = -1;
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.charCodeAt;
                    var3 = 0;
                    var7 = var7.bind(var8)(var3);
                    var3 = var6.length;
                    var3 = var7 % var3;
                    var2 = var6[var3];
case 42:
                    var4 = var2;
case 36:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 44;
                    var3 = var6[var1];
                    var7 = var2.bind(var5)(var3);
                    var3 = var7.memoizedImageSource;
                    var3 = var3.bind(var7)(var4);
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.useDominantRGBFromImage;
                    var2 = var1.bind(var2)(var4, var3);
                    var1 = {};
                    var1['source'] = var3;
                    var1['accentColor'] = var2;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var5);
            var15 = var3.source;
            var3 = var3.accentColor;
            var14 = var3.r;
            var13 = var3.g;
            var12 = var3.b;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 35;
            var3 = var7[var5];
            var11 = var6.bind(var4)(var3);
            var3 = var11.rgbToHex;
            var3 = var3.bind(var11)(var14, var13, var12);
            var _closure2_slot1 = var3;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.hexWithOpacity;
            var5 = 0.2;
            var11 = var6.bind(var7)(var3, var5);
            var _closure2_slot2 = var11;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var9.cardImageAssetContainer;
            var5[1] = var3;
            var3 = function() {
                var1 = _closure2_slot0;
                var2 = var1.cardImageAssetContainer;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot1;
                var2['shadowColor'] = var3;
                var1[1] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var3, var5);
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var11;
            var11 = var9.cardImageAssetBackground;
            var3[1] = var11;
            var2 = function() {
                var1 = _closure2_slot0;
                var2 = var1.cardImageAssetBackground;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot2;
                var2['backgroundColor'] = var3;
                var1[1] = var2;
                return var1;
            };
            var12 = var6.bind(var7)(var2, var3);
            var2 = null;
            if(!(var2 == var10)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 27;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var3 = var2 == var1;
            var6 = undefined;
            if(var3) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var6 = var1.type;
case 47:
            var3 = _closure1_slot9;
            var3 = var3.LISTENING;
            if(!(var6 !== var3)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 30;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 53:
            var2 = var1.type;
case 32:
            var1 = _closure1_slot9;
            var1 = var1.CUSTOM_STATUS;
            var6 = undefined;
            if(!(var2 !== var1)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var2 = var11[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.2TbM/P;
            var6 = var2.bind(var3)(var1);
case 54:
            _fun0001_ip = 56; continue _fun0001;
case 51:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var2 = var11[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.T0uYKy;
            var6 = var2.bind(var3)(var1);
case 56:
            _fun0001_ip = 57; continue _fun0001;
case 49:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var2 = var11[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.kUEnxM;
            var6 = var2.bind(var3)(var1);
case 57:
            _fun0001_ip = 58; continue _fun0001;
case 45:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var2 = var11[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.rmnkz8;
            var6 = var2.bind(var3)(var1);
case 58:
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var1['accessibilityLabel'] = var6;
            var11 = _closure1_slot11;
            var7 = _closure1_slot4;
            var6 = {};
            var6['style'] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 38;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var16 = var9.cardImageAsset;
            var12['style'] = var16;
            var12['source'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var6['children'] = var12;
            var6 = var11.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 43:
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 36;
            var5 = var12[var5];
            var6 = var11.bind(var4)(var5);
            var5 = {};
            var5['stream'] = var10;
            var13 = _closure1_slot11;
            var10 = 37;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = var9.cardImageStreamLive;
            var10['style'] = var14;
            var14 = var9.stageStreamLiveText;
            var10['textStyle'] = var14;
            var14 = false;
            var10['allowFontScaling'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5['children'] = var10;
            var9 = var9.cardImageStreamPreview;
            var5['style'] = var9;
            var11 = _closure1_slot0;
            var8 = 34;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.7Xq/nZ;
            var8 = var9.bind(var10)(var8);
            var5['ctaText'] = var8;
            var8 = true;
            var5['disabled'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function StageStreamAvatars(arg1) {
        var1 = arg1;
        var8 = var1.user;
        var12 = var1.stage;
        var1 = _closure1_slot16;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 39;
        var1 = var10[var1];
        var2 = var9.bind(var4)(var1);
        var1 = var2.useLiveStageData;
        var1 = var1.bind(var2)(var12);
        var11 = var1.audienceCount;
        var16 = var1.audienceFriends;
        var3 = _closure1_slot11;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.avatarStackContainer;
        var1['style'] = var6;
        var7 = _closure1_slot11;
        var5 = 40;
        var5 = var10[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.HappeningNowAvatarStack;
        var5 = {};
        var13 = new Array(1);
        var13[0] = var8;
        var8 = 1;
        var17 = var13;
        var15 = var8;
        var14 = arraySpread(var17, var16, var15);
        var5['users'] = var13;
        var12 = var12.guild_id;
        var5['guildId'] = var12;
        var8 = var11 + var8;
        var5['userCount'] = var8;
        var8 = true;
        var5['isStage'] = var8;
        var8 = 25;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.AvatarSizes;
        var8 = var8.SIZE_16;
        var5['avatarSize'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var15 = 1;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var16 = 2;
    var4 = var6[var16];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.HAPPENING_NOW_CONTENT_HEIGHT;
    var8 = var4.HappeningNowCardTrackingType;
    var _closure1_slot7 = var8;
    var17 = var4.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    var4 = var4.STATUS_CUTOUT_SMALL;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityTypes;
    var _closure1_slot9 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 64;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var13.bind(var1)(var4);
    var4 = new Array(2);
    var4[0] = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var4[1] = var8;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexShrink': 1, 'gap': 2};
    var4['content'] = var10;
    var10 = {'backgroundColor': null, 'padding': 2, 'borderRadius': null, 'position': 'absolute', 'alignSelf': 'center', 'bottom': 0};
    var12 = 11;
    var18 = var6[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.STAGE_CARD_PILL_BG;
    var10['backgroundColor'] = var18;
    var18 = var6[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.xl;
    var10['borderRadius'] = var18;
    var4['avatarStackContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var16;
    var4['cardAvatar'] = var10;
    var10 = {};
    var10['height'] = var14;
    var10['minWidth'] = var14;
    var16 = 12;
    var10['marginRight'] = var16;
    var16 = 'relative';
    var10['position'] = var16;
    var4['cardImage'] = var10;
    var10 = {};
    var10['height'] = var17;
    var10['minWidth'] = var14;
    var10['position'] = var16;
    var4['cardImageStream'] = var10;
    var10 = {};
    var10['width'] = var14;
    var10['height'] = var14;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderRadius'] = var16;
    var10['borderWidth'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var10['borderColor'] = var15;
    var4['cardImageAsset'] = var10;
    var10 = {'height': '100%', 'backgroundColor': null, 'borderRadius': null, 'shadowOffset': null, 'shadowRadius': 5, 'shadowOpacity': 0.32, 'elevation': 10};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CARD_SECONDARY_BG;
    var10['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10['borderRadius'] = var15;
    var15 = {'width': 0, 'height': 0};
    var10['shadowOffset'] = var15;
    var4['cardImageAssetContainer'] = var10;
    var10 = {};
    var10['width'] = var14;
    var10['height'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var4['cardImageAssetBackground'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var10['borderRadius'] = var12;
    var12 = 'hidden';
    var10['overflow'] = var12;
    var4['cardImageStreamPreview'] = var10;
    var10 = {'top': 4, 'left': 4, 'position': 'absolute'};
    var4['cardImageStreamLive'] = var10;
    var10 = {'fontSize': 10, 'lineHeight': 13};
    var11 = var11.PRIMARY_BOLD;
    var10['fontFamily'] = var11;
    var4['stageStreamLiveText'] = var10;
    var10 = {'marginRight': 12, 'flexDirection': 'column', 'height': '100%'};
    var4['stagePreviewWrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var15 = var1.userId;
            var _closure2_slot0 = var15;
            var11 = var1.guildId;
            var _closure2_slot1 = var11;
            var32 = var1.status;
            var14 = var1.index;
            var _closure2_slot2 = var14;
            var10 = var1.activity;
            var _closure2_slot3 = var10;
            var29 = var1.stream;
            var _closure2_slot4 = var29;
            var13 = var1.fullwidth;
            var21 = var1.renderingContext;
            var5 = var1.panelVariant;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 59; continue _fun0003 }
case 4:
            var5 = false;
case 59:
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot16;
            var26 = var3.bind(var4)();
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var9 = var3.analyticsLocations;
            _closure2_slot5 = var9;
            var7 = _closure1_slot0;
            var3 = 13;
            var6 = var8[var3];
            var17 = var7.bind(var4)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var16.bind(var17)(var12, var6);
            _closure2_slot6 = var12;
            var6 = 14;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useGetOrFetchApplication;
            var23 = null;
            var16 = var23 == var10;
            var6 = undefined;
            if(var16) { _fun0003_ip = 60; continue _fun0003 }
case 20:
            var6 = var10.application_id;
case 60:
            var30 = var7.bind(var8)(var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = var7[var3];
            var16 = var6.bind(var4)(var3);
            var8 = var16.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStageInstanceByChannel;
                    var5 = _closure2_slot4;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var4 = _closure2_slot4;
                    var1 = var4.channelId;
case 61:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var22 = var8.bind(var16)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 27;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var10);
            if(var3) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var3 = var23 == var10;
            var6 = undefined;
            if(var3) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var6 = var10.type;
case 65:
            var3 = _closure1_slot9;
            var3 = var3.LISTENING;
            if(!(var6 !== var3)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 30;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var10);
            if(var3) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var3 = var23 == var10;
            var6 = undefined;
            if(var3) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var6 = var10.type;
case 71:
            var3 = _closure1_slot9;
            var3 = var3.CUSTOM_STATUS;
            var7 = undefined;
            if(!(var6 !== var3)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            if(!(var23 == var22)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 33;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.GameControllerIcon;
            _fun0003_ip = 73; continue _fun0003;
case 75:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 32;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.StageIcon;
            _fun0003_ip = 73; continue _fun0003;
case 69:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 31;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.XboxNeutralIcon;
            _fun0003_ip = 73; continue _fun0003;
case 67:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 29;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.MusicIcon;
            _fun0003_ip = 73; continue _fun0003;
case 63:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 28;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.SpotifyNeutralIcon;
case 73:
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var3 = new Array(7);
            var3[0] = var15;
            var3[1] = var12;
            var3[2] = var29;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var14;
            var3[6] = var9;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0005_ip = 5; continue _fun0005 }
case 77:
                    var1 = _closure2_slot3;
                    if(!(var5 != var1)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                    var1 = _closure2_slot3;
                    var6 = var1.type;
                    var3 = _closure1_slot9;
                    var3 = var3.CUSTOM_STATUS;
                    if(!(var6 === var3)) { _fun0005_ip = 80; continue _fun0005 }
case 78:
                    var3 = _closure1_slot7;
                    var10 = var3.STATUS_CARD;
                    _fun0005_ip = 81; continue _fun0005;
case 80:
                    var1 = _closure1_slot7;
                    var10 = var1.ACTIVITY_CARD;
case 81:
                    _fun0005_ip = 82; continue _fun0005;
case 5:
                    var1 = _closure1_slot7;
                    var10 = var1.STREAM_CARD;
case 82:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var6 = var6[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.track;
                    var6 = _closure1_slot10;
                    var7 = var6.ACTIVITY_CARD_CLICKED;
                    var6 = {};
                    var6['type'] = var10;
                    var10 = _closure2_slot2;
                    var6['order'] = var10;
                    var10 = _closure2_slot1;
                    var6['guild_id'] = var10;
                    var11 = _closure2_slot0;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var6['highlighted_user_ids'] = var10;
                    var10 = _closure2_slot4;
                    var11 = var5 == var10;
                    var10 = undefined;
                    if(var11) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var11 = _closure2_slot4;
                    var10 = var11.channelId;
case 83:
                    var6['destination_channel_id'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var4 = _closure2_slot4;
                    if(!(var5 == var4)) { _fun0005_ip = 24; continue _fun0005 }
case 85:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 17;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = 18;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var6 = var6.bind(var1)(var5, var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var2 = {};
                        var4 = _closure2_slot0;
                        var2['userId'] = var4;
                        var4 = _closure2_slot6;
                        var2['localUser'] = var4;
                        var1 = _closure2_slot5;
                        var2['sourceAnalyticsLocations'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0005_ip = 27; continue _fun0005;
case 24:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 17;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 16;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var5.bind(var1)(var4, var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var4 = var1.default;
                        var1 = _closure2_slot4;
                        var3 = var1.channelId;
                        var2 = undefined;
                        var1 = true;
                        var1 = var4.bind(var2)(var3, var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var8 = var6.bind(var8)(var2, var3);
            if(!(var23 != var12)) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var14 = 'full';
            if(var13) { _fun0003_ip = 58; continue _fun0003 }
case 88:
            var3 = var23 != var29;
            var2 = 'medium';
            if(!var3) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var2 = 'large';
case 89:
            var14 = var2;
case 58:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getName;
            var9 = var2.bind(var3)(var11, var23, var12);
            var2 = var23 == var10;
            var3 = undefined;
            if(var2) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var3 = var10.type;
case 91:
            var2 = _closure1_slot9;
            var2 = var2.CUSTOM_STATUS;
            if(!(var3 !== var2)) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var6 = _closure1_slot11;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var24 = 22;
            var2 = var2[var24];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['onPress'] = var8;
            var2['width'] = var14;
            var2['IconComponent'] = var7;
            var2['panelVariant'] = var5;
            var15 = _closure1_slot12;
            var14 = _closure1_slot13;
            if(!(var23 == var22)) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var7 = {};
            var18 = _closure1_slot11;
            var17 = _closure1_slot4;
            var16 = {};
            var19 = var26.cardImage;
            var16['style'] = var19;
            var25 = _closure1_slot11;
            var20 = _closure1_slot17;
            var19 = {};
            var27 = var12.id;
            var19['userId'] = var27;
            var19['activity'] = var10;
            var19['game'] = var30;
            var19['stream'] = var29;
            var19 = var25.bind(var4)(var20, var19);
            var16['children'] = var19;
            var17 = var18.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot12;
            var18 = _closure1_slot4;
            var17 = {};
            var20 = var26.content;
            var17['style'] = var20;
            var31 = _closure1_slot11;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 24;
            var20 = var28[var20];
            var27 = var25.bind(var4)(var20);
            var20 = {};
            var20['user'] = var12;
            var25 = var12.avatarDecoration;
            var20['avatarDecoration'] = var25;
            var25 = _closure1_slot0;
            var33 = 25;
            var33 = var28[var33];
            var33 = var25.bind(var4)(var33);
            var33 = var33.AvatarSizes;
            var33 = var33.XSMALL;
            var20['size'] = var33;
            var20['guildId'] = var11;
            var20['status'] = var32;
            var32 = var26.cardAvatar;
            var20['style'] = var32;
            var32 = _closure1_slot8;
            var20['autoStatusCutout'] = var32;
            var27 = var31.bind(var4)(var27, var20);
            var20 = new Array(3);
            var20[0] = var27;
            var31 = _closure1_slot11;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var27 = var24.HappeningNowCardHeader;
            var24 = {};
            var32 = true;
            var24['noMargin'] = var32;
            var24['children'] = var9;
            var24 = var31.bind(var4)(var27, var24);
            var20[1] = var24;
            var27 = _closure1_slot11;
            var24 = 26;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.HappeningNowActivityCardSubtitle;
            var24 = {};
            var24['activity'] = var10;
            var24['stream'] = var29;
            var24 = var27.bind(var4)(var25, var24);
            var20[2] = var24;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var7['children'] = var16;
            _fun0003_ip = 97; continue _fun0003;
case 95:
            var16 = {};
            var19 = _closure1_slot12;
            var18 = _closure1_slot4;
            var17 = {};
            var20 = var26.stagePreviewWrapper;
            var17['style'] = var20;
            var25 = _closure1_slot11;
            var24 = _closure1_slot4;
            var20 = {};
            var26 = var26.cardImageStream;
            var20['style'] = var26;
            var28 = _closure1_slot11;
            var27 = _closure1_slot17;
            var26 = {};
            var31 = var12.id;
            var26['userId'] = var31;
            var26['activity'] = var10;
            var26['game'] = var30;
            var26['stream'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var20['children'] = var26;
            var24 = var25.bind(var4)(var24, var20);
            var20 = new Array(2);
            var20[0] = var24;
            var24 = var23 != var22;
            var23 = null;
            if(!var24) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var26 = _closure1_slot11;
            var25 = _closure1_slot18;
            var24 = {};
            var24['user'] = var12;
            var24['stage'] = var22;
            var23 = var26.bind(var4)(var25, var24);
case 98:
            var20[1] = var23;
            var17['children'] = var20;
            var18 = var19.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot11;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 23;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.HappeningNowLiveStageContent;
            var18 = {};
            var18['stage'] = var22;
            var18['renderingContext'] = var21;
            var18['guildId'] = var11;
            var18['streamingUser'] = var12;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var16['children'] = var17;
            var7 = var16;
case 97:
            var7 = var15.bind(var4)(var14, var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            _fun0003_ip = 100; continue _fun0003;
case 93:
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 21;
            var3 = var14[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.CustomStatusActivityCard;
            var3 = {};
            var3['fullwidth'] = var13;
            var3['user'] = var12;
            var3['guildId'] = var11;
            var3['activity'] = var10;
            var3['userTitle'] = var9;
            var3['onPress'] = var8;
            var3['panelVariant'] = var5;
            var2 = var7.bind(var4)(var6, var3);
case 100:
            return var2;
case 86:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HappeningNowCardPlaceholder;
            var1 = {};
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();