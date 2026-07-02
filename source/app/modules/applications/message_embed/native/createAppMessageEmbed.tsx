// app/modules/applications/message_embed/native/createAppMessageEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createBlockedAppMessageEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.theme;
            var3 = var1.message;
            var5 = var1.visibility;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var9 = undefined;
            var1 = var6.bind(var9)(var1);
            var1 = var1.bind(var9)(var4);
            var4 = var1.baseColors;
            var6 = _closure1_slot0;
            var1 = 7;
            var1 = var7[var1];
            var1 = var6.bind(var9)(var1);
            var1 = var1.ContentClassificationVisibility;
            var1 = var1.BLOCK_UNDERAGE;
            if(!(var5 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var5 = var8[var1];
            var5 = var7.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var1 = var8[var1];
            var1 = var7.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.NIZyKq;
            var5 = var5.bind(var6)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var6 = var10[var1];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var1 = var10[var1];
            var1 = var8.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.LPOzxB;
            var5 = var6.bind(var7)(var1);
case 4:
            var1 = {};
            var12 = var1;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.AppMessageEmbedDisplayType;
            var6 = var4.BLOCKED;
            var4 = 'displayType';
            var1[3] = var6;
            var6 = '';
            var4 = 'appId';
            var1[3] = var6;
            var4 = var3.id;
            var3 = 'messageId';
            var1[2] = var4;
            var3 = null;
            var4 = 'title';
            var1[3] = var3;
            var4 = 9;
            var6 = var10[var4];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.bZBN64;
            var6 = var6.bind(var7)(var4);
            var4 = 'header';
            var1[3] = var6;
            var4 = 'info';
            var1[3] = var5;
            var4 = 'tagline';
            var1[3] = var3;
            var4 = 'iconSrc';
            var1[3] = var3;
            var4 = 'staticBannerSrc';
            var1[3] = var3;
            var5 = 'bot';
            var4 = 'bannerRatio';
            var1[3] = var5;
            var5 = new Array(0);
            var4 = 'actions';
            var1[3] = var5;
            var4 = 'embedUrl';
            var1[3] = var3;
            var2 = _closure1_slot9;
            var4 = var2.APP_MESSAGE_EMBED;
            var2 = 'extendedType';
            var1[1] = var4;
            var4 = new Array(0);
            var2 = 'gradientColors';
            var1[1] = var4;
            var2 = 'type';
            var1[1] = var3;
            var2 = 'headerText';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot9 = var4;
    var4 = ['embedded_cover'];
    var _closure1_slot10 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/createAppMessageEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAppLinkGateResult(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.appId;
            var14 = var1.channel;
            var9 = var1.message;
            var10 = var1.theme;
            var4 = _closure1_slot7;
            var2 = var4.getApplication;
            var4 = var2.bind(var4)(var3);
            var5 = null;
            if(!(var5 != var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = _closure1_slot4;
            var2 = var6.getCurrentUser;
            var2 = var2.bind(var6)();
            var5 = var5 == var2;
            var7 = undefined;
            var13 = undefined;
            if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var13 = var2.nsfwAllowed;
case 7:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var8 = var6[var2];
            var12 = var5.bind(var7)(var8);
            var11 = var12.getContentClassificationVisibility;
            var8 = var4.contentClassification;
            var8 = var11.bind(var12)(var8, var14, var13);
            var2 = var6[var2];
            var2 = var5.bind(var7)(var2);
            var2 = var2.ContentClassificationVisibility;
            var2 = var2.DISPLAY;
            if(!(var8 === var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = {};
            var5 = 'display';
            var2['state'] = var5;
            var2['app'] = var4;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var4 = {};
            var5 = 'blocked';
            var4['state'] = var5;
            var6 = _closure1_slot11;
            var5 = {};
            var5['theme'] = var10;
            var5['message'] = var9;
            var5['visibility'] = var8;
            var5 = var6.bind(var7)(var5);
            var4['model'] = var5;
            var2 = var4;
case 11:
            return var2;
case 5:
            var4 = _closure1_slot7;
            var2 = var4.isFetchingApplication;
            var4 = var2.bind(var4)(var3);
            var2 = false;
            if(!(var2 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.fetchApplication;
            var1 = var1.bind(var2)(var3);
case 12:
            var1 = {};
            var2 = 'unavailable';
            var1['state'] = var2;
            return var1;
        }
    };
    var3['getAppLinkGateResult'] = var4;
    var4 = function createAppMessageEmbed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.theme;
            var8 = var1.embedUrl;
            var3 = var1.message;
            var14 = var1.app;
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 8;
            var4 = var2[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.bind(var5)(var6);
            var18 = var4.baseColors;
            var15 = var3.channel_id;
            var4 = var14.id;
            var13 = var14.name;
            var17 = var14.bot;
            var12 = var14.tags;
            var21 = var14.maxParticipants;
            var16 = var14.icon;
            var6 = _closure1_slot0;
            var10 = 11;
            var2 = var2[var10];
            var6 = var6.bind(var5)(var2);
            var2 = var6.isEmbeddedApp;
            var2 = var2.bind(var6)(var14);
            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var7 = _closure1_slot5;
            var6 = var7.getApplicationAssetFetchState;
            var7 = var6.bind(var7)(var4);
            var6 = _closure1_slot6;
            var6 = var6.NOT_FETCHED;
            if(!(var7 !== var6)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = _closure1_slot6;
            var6 = var6.FETCHING;
            if(!(var7 !== var6)) { _fun0003_ip = 18; continue _fun0003 }
case 14:
            var6 = null;
            if(!(var6 != var21)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = 0;
            if(!(!(var21 > var7))) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = 9;
            var9 = var20[var7];
            var9 = var19.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var7 = var20[var7];
            var7 = var19.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.RjceQU;
            var11 = var9.bind(var11)(var7);
            _fun0003_ip = 22; continue _fun0003;
case 21:
            var9 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 9;
            var19 = var22[var7];
            var19 = var9.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var7 = var22[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var9 = var7.z8EAJW;
            var7 = {};
            var7['count'] = var21;
            var11 = var19.bind(var20)(var9, var7);
case 22:
            var9 = new Array(0);
            if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 13;
            var2 = var19[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.canLaunchFrame;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 14;
            var2 = var19[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.getPlayInContext;
            var7 = var2.bind(var7)(var4, var15);
            var2 = var7.instanceId;
            var15 = var7.isCurrentlyInInstance;
            var7 = var7.canLaunchInChannel;
            if(var7) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var19 = var9.push;
            var7 = {};
            var20 = 'play_in_dm';
            var7['id'] = var20;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 9;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.JeK1Wg;
            var20 = var21.bind(var22)(var20);
            var7['label'] = var20;
            var7 = var19.bind(var9)(var7);
            _fun0003_ip = 23; continue _fun0003;
case 27:
            var21 = _closure1_slot0;
            var7 = _closure1_slot2;
            var22 = 9;
            var19 = var7[var22];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var7 = var7[var22];
            var7 = var21.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.RscU7I;
            var7 = var19.bind(var20)(var7);
            if(var15) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var19 = var7;
            if(!(var6 != var2)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var21 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = var2[var22];
            var7 = var21.bind(var5)(var7);
            var20 = var7.intl;
            var7 = var20.string;
            var2 = var2[var22];
            var2 = var21.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.VJlc0S;
            var19 = var7.bind(var20)(var2);
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var21 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = var2[var22];
            var7 = var21.bind(var5)(var7);
            var20 = var7.intl;
            var7 = var20.string;
            var2 = var2[var22];
            var2 = var21.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DPfdsq;
            var19 = var7.bind(var20)(var2);
case 31:
            var7 = var9.push;
            var2 = {};
            var20 = 'play_in_channel';
            var2['id'] = var20;
            var2['label'] = var19;
            var2['disabled'] = var15;
            var2 = var7.bind(var9)(var2);
            _fun0003_ip = 23; continue _fun0003;
case 25:
            var7 = var9.push;
            var2 = {};
            var15 = 'play_frame';
            var2['id'] = var15;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 9;
            var19 = var22[var15];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var22[var15];
            var15 = var21.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.RscU7I;
            var15 = var19.bind(var20)(var15);
            var2['label'] = var15;
            var2 = var7.bind(var9)(var2);
case 23:
            var7 = var12.join;
            var2 = ' ∙ ';
            var12 = var7.bind(var12)(var2);
            var21 = var14.id;
            var19 = var14.bot;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var7 = var7.bind(var5)(var2);
            var2 = var7.isEmbeddedApp;
            var2 = var2.bind(var7)(var14);
            if(!var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 12;
            var2 = var2[var15];
            var10 = var7.bind(var5)(var2);
            var7 = var10.getAssetIds;
            var2 = _closure1_slot10;
            var10 = var7.bind(var10)(var21, var2);
            if(!(var6 == var10)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var10 = new Array(0);
case 35:
            var7 = _closure1_slot3;
            var2 = 1;
            var7 = var7.bind(var5)(var10, var2);
            var2 = 0;
            var20 = var7[var2];
            var2 = var6 != var20;
            var7 = null;
            if(!var2) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var15 = var10.bind(var5)(var2);
            var10 = var15.getAssetImage;
            var2 = 512;
            var7 = var10.bind(var15)(var21, var20, var2);
case 37:
            if(!(var6 == var7)) { _fun0003_ip = 39; continue _fun0003 }
case 33:
            if(!(var6 != var19)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 16;
            var2 = var15[var2];
            var15 = var10.bind(var5)(var2);
            var10 = var15.getUserBannerURL;
            var2 = {};
            var20 = var19.id;
            var2['id'] = var20;
            var19 = var19.banner;
            var2['banner'] = var19;
            var19 = 512;
            var2['size'] = var19;
            var19 = false;
            var2['canAnimate'] = var19;
            var10 = var10.bind(var15)(var2);
            if(!(var6 == var10)) { _fun0003_ip = 42; continue _fun0003 }
case 40:
            var15 = {'bannerRatio': 'bot', 'staticBannerSrc': null};
            _fun0003_ip = 43; continue _fun0003;
case 42:
            var2 = {};
            var19 = 'bot';
            var2['bannerRatio'] = var19;
            var2['staticBannerSrc'] = var10;
            var15 = var2;
            _fun0003_ip = 43; continue _fun0003;
case 39:
            var2 = {};
            var10 = 'activity';
            var2['bannerRatio'] = var10;
            var2['staticBannerSrc'] = var7;
            var15 = var2;
case 43:
            var2 = var6 != var16;
            var10 = null;
            if(!var2) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 15;
            var2 = var19[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.getAppIconSrc;
            var10 = var2.bind(var7)(var4, var16, var17);
case 44:
            var2 = var10;
            if(!(var6 == var2)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var2 = var15.staticBannerSrc;
case 46:
            var7 = var6 != var2;
            var19 = undefined;
            if(!var7) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var19 = var2;
case 48:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 15;
            var2 = var17[var2];
            var7 = var16.bind(var5)(var2);
            var2 = var7.getAppGradientColors;
            var7 = var2.bind(var7)(var19);
            var2 = {};
            var27 = var2;
            var26 = var18;
            var18 = copyDataProperties(var27, var26);
            var27 = var2;
            var26 = var15;
            var15 = copyDataProperties(var27, var26);
            var15 = 10;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.AppMessageEmbedDisplayType;
            var16 = var15.DISPLAY;
            var15 = 'displayType';
            var2[14] = var16;
            var15 = var14.id;
            var14 = 'appId';
            var2[13] = var15;
            var14 = var3.id;
            var3 = 'messageId';
            var2[2] = var14;
            var3 = 'title';
            var2[2] = var6;
            var3 = 'header';
            var2[2] = var13;
            var3 = 'info';
            var2[2] = var12;
            var3 = 'tagline';
            var2[2] = var11;
            var3 = 'iconSrc';
            var2[2] = var10;
            var3 = 'actions';
            var2[2] = var9;
            var3 = 'embedUrl';
            var2[2] = var8;
            var3 = _closure1_slot9;
            var8 = var3.APP_MESSAGE_EMBED;
            var3 = 'extendedType';
            var2[2] = var8;
            var3 = 'gradientColors';
            var2[2] = var7;
            var3 = 'type';
            var2[2] = var6;
            var3 = 'headerText';
            var2[2] = var6;
            return var2;
case 18:
            var2 = null;
            return var2;
case 16:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.fetchAssetIds;
            var1 = _closure1_slot10;
            var1 = var2.bind(var3)(var4, var1);
            var1 = null;
            return var1;
        }
    };
    var3['createAppMessageEmbed'] = var4;
    var2 = function handleTapAppMessageEmbed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.getApplication;
            var1 = var10.appId;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.toURLSafe;
            var2 = var10.embedUrl;
            var4 = var3.bind(var4)(var2);
            var3 = null;
            var2 = var3 == var4;
            var6 = undefined;
            if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var9 = var4.searchParams;
            var5 = var9.get;
            var2 = 'referrer_id';
            var6 = var5.bind(var9)(var2);
case 50:
            if(!(var3 == var6)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = var10.message;
            var2 = var2.author;
            var6 = var2.id;
case 52:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 10; continue _fun0004 }
case 54:
            var9 = var4.searchParams;
            var5 = var9.get;
            var4 = 'custom_id';
            var2 = var5.bind(var9)(var4);
case 10:
            var4 = var3 != var2;
            var5 = undefined;
            if(!var4) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var5 = var2;
case 55:
            var4 = var10.actionId;
            var2 = 'play_in_channel';
            if(!(var2 !== var4)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var2 = 'play_in_dm';
            if(!(var2 !== var4)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = 'play_frame';
            if(!(var2 !== var4)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var2 = 'view_in_app_launcher';
            if(!(var2 !== var4)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var2 = 'add_app';
            if(!(var2 !== var4)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = 'link_copied';
            if(!(var2 !== var4)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 28;
            var2 = var9[var2];
            var9 = var4.bind(var1)(var2);
            var4 = var9.assertNever;
            var2 = var10.actionId;
            var2 = var4.bind(var9)(var2);
            _fun0004_ip = 35; continue _fun0004;
case 67:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 26;
            var2 = var9[var2];
            var12 = var4.bind(var1)(var2);
            var11 = var12.copy;
            var2 = var10.embedUrl;
            var2 = var11.bind(var12)(var2);
            var2 = 27;
            var2 = var9[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.presentLinkCopied;
            var2 = var2.bind(var4)();
            _fun0004_ip = 35; continue _fun0004;
case 65:
            if(!(var3 != var8)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 25;
            var2 = var9[var2];
            var9 = var4.bind(var1)(var2);
            var4 = var9.installApplication;
            var2 = {};
            var11 = var8.id;
            var2['applicationId'] = var11;
            var11 = var8.customInstallUrl;
            var2['customInstallUrl'] = var11;
            var11 = var8.installParams;
            var2['installParams'] = var11;
            var11 = var8.integrationTypesConfig;
            var2['integrationTypesConfig'] = var11;
            var11 = 'app_message_embed';
            var2['source'] = var11;
            var2 = var4.bind(var9)(var2);
            _fun0004_ip = 35; continue _fun0004;
case 69:
            return var1;
case 63:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getBestActiveInput;
            var9 = var2.bind(var4)();
            if(!(var3 != var9)) { _fun0004_ip = 35; continue _fun0004 }
case 71:
            var4 = var9.openCustomKeyboard;
            var2 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 24;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var2['type'] = var11;
            var11 = {};
            var12 = _closure1_slot8;
            var12 = var12.APPLICATION_VIEW;
            var11['initialRouteName'] = var12;
            var12 = true;
            var11['initiallyExpanded'] = var12;
            var12 = var10.appId;
            var11['applicationId'] = var12;
            var11['referrerId'] = var6;
            var11['customId'] = var5;
            var2['context'] = var11;
            var2 = var4.bind(var9)(var2);
            _fun0004_ip = 35; continue _fun0004;
case 61:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 22;
            var2 = var9[var2];
            var9 = var4.bind(var1)(var2);
            var4 = var9.launchFrame;
            var2 = {};
            var11 = var10.appId;
            var2['applicationId'] = var11;
            var2 = var4.bind(var9)(var2);
            _fun0004_ip = 35; continue _fun0004;
case 59:
            var4 = var3 == var8;
            var2 = undefined;
            if(var4) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var2 = var8.bot;
case 72:
            if(!(var3 != var2)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var4 = var9.bind(var1)(var2);
            var3 = var4.launchActivityInBotDM;
            var2 = {};
            var12 = var10.appId;
            var2['appId'] = var12;
            var8 = var8.bot;
            var8 = var8.id;
            var2['botId'] = var8;
            var12 = _closure1_slot1;
            var8 = 19;
            var8 = var11[var8];
            var8 = var12.bind(var1)(var8);
            var12 = var8.APP_MESSAGE_EMBED;
            var8 = new Array(1);
            var8[0] = var12;
            var2['analyticsLocations'] = var8;
            var8 = 21;
            var8 = var11[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CommandOrigin;
            var8 = var8.APP_MESSAGE_EMBED;
            var2['commandOrigin'] = var8;
            var2['referrerId'] = var6;
            var2['customId'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0004_ip = 35; continue _fun0004;
case 74:
            return var1;
case 57:
            var2 = var10.message;
            var8 = var2.channel_id;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 18;
            var2 = var9[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.joinOrStartActivityInChannel;
            var2 = {};
            var10 = var10.appId;
            var2['appId'] = var10;
            var2['channelId'] = var8;
            var8 = _closure1_slot1;
            var7 = 19;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.APP_MESSAGE_EMBED;
            var7 = new Array(1);
            var7[0] = var8;
            var2['analyticsLocations'] = var7;
            var2['referrerId'] = var6;
            var2['customId'] = var5;
            var2 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['handleTapAppMessageEmbed'] = var2;
    return var1;
})();