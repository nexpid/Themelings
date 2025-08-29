// app/modules/applications/message_embed/native/createAppMessageEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot8 = var4;
    var4 = ['embedded_cover'];
    var _closure1_slot9 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/createAppMessageEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createAppMessageEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.theme;
            var4 = var1.appId;
            var8 = var1.embedUrl;
            var6 = var1.message;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            var16 = var1.baseColors;
            var1 = var1.colors;
            var15 = var6.channel_id;
            var3 = _closure1_slot6;
            var1 = var3.getApplication;
            var14 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var14)) { _fun0001_ip = 1287; continue _fun0001 }
 96:
            var13 = var14.name;
            var18 = var14.bot;
            var12 = var14.tags;
            var21 = var14.maxParticipants;
            var17 = var14.icon;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 7;
            var3 = var3[var10];
            var7 = var7.bind(var5)(var3);
            var3 = var7.isEmbeddedApp;
            var3 = var3.bind(var7)(var14);
            if(!var3) { _fun0001_ip = 207; continue _fun0001 }
 158:
            var9 = _closure1_slot4;
            var7 = var9.getApplicationAssetFetchState;
            var9 = var7.bind(var9)(var4);
            var7 = _closure1_slot5;
            var7 = var7.NOT_FETCHED;
            if(!(var9 !== var7)) { _fun0001_ip = 1249; continue _fun0001 }
 190:
            var7 = _closure1_slot5;
            var7 = var7.FETCHING;
            if(!(var9 !== var7)) { _fun0001_ip = 1247; continue _fun0001 }
 207:
            if(!(var1 == var21)) { _fun0001_ip = 270; continue _fun0001 }
 211:
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
            _fun0001_ip = 334; continue _fun0001;
 270:
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
            var9 = var7.z8EAJS;
            var7 = {};
            var7['count'] = var21;
            var11 = var19.bind(var20)(var9, var7);
 334:
            var9 = new Array(0);
            if(!var3) { _fun0001_ip = 686; continue _fun0001 }
 344:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 10;
            var3 = var19[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getPlayInContext;
            var7 = var3.bind(var7)(var4, var15);
            var3 = var7.instanceId;
            var15 = var7.isCurrentlyInInstance;
            var7 = var7.canLaunchInChannel;
            if(var7) { _fun0001_ip = 485; continue _fun0001 }
 397:
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
            var20 = var20.JeK1Wl;
            var20 = var21.bind(var22)(var20);
            var7['label'] = var20;
            var7 = var19.bind(var9)(var7);
            _fun0001_ip = 686; continue _fun0001;
 485:
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
            var7 = var7.RscU7O;
            var7 = var19.bind(var20)(var7);
            if(var15) { _fun0001_ip = 604; continue _fun0001 }
 543:
            var19 = var7;
            if(!(var1 != var3)) { _fun0001_ip = 656; continue _fun0001 }
 550:
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var22];
            var7 = var21.bind(var5)(var7);
            var20 = var7.intl;
            var7 = var20.string;
            var3 = var3[var22];
            var3 = var21.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.VJlc0d;
            var19 = var7.bind(var20)(var3);
            _fun0001_ip = 656; continue _fun0001;
 604:
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var22];
            var7 = var21.bind(var5)(var7);
            var20 = var7.intl;
            var7 = var20.string;
            var3 = var3[var22];
            var3 = var21.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.DPfdsr;
            var19 = var7.bind(var20)(var3);
 656:
            var7 = var9.push;
            var3 = {};
            var20 = 'play_in_channel';
            var3['id'] = var20;
            var3['label'] = var19;
            var3['disabled'] = var15;
            var3 = var7.bind(var9)(var3);
 686:
            var7 = var12.join;
            var3 = ' ∙ ';
            var12 = var7.bind(var12)(var3);
            var21 = var14.id;
            var19 = var14.bot;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var7 = var7.bind(var5)(var3);
            var3 = var7.isEmbeddedApp;
            var3 = var3.bind(var7)(var14);
            if(!var3) { _fun0001_ip = 856; continue _fun0001 }
 744:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 8;
            var3 = var3[var15];
            var10 = var7.bind(var5)(var3);
            var7 = var10.getAssetIds;
            var3 = _closure1_slot9;
            var10 = var7.bind(var10)(var21, var3);
            if(!(var1 == var10)) { _fun0001_ip = 788; continue _fun0001 }
 784:
            var10 = new Array(0);
 788:
            var7 = _closure1_slot3;
            var3 = 1;
            var7 = var7.bind(var5)(var10, var3);
            var3 = 0;
            var20 = var7[var3];
            var3 = var1 != var20;
            var7 = null;
            if(!var3) { _fun0001_ip = 852; continue _fun0001 }
 816:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var15 = var10.bind(var5)(var3);
            var10 = var15.getAssetImage;
            var3 = 512;
            var7 = var10.bind(var15)(var21, var20, var3);
 852:
            if(!(var1 == var7)) { _fun0001_ip = 967; continue _fun0001 }
 856:
            if(!(var1 != var19)) { _fun0001_ip = 934; continue _fun0001 }
 860:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 12;
            var3 = var15[var3];
            var15 = var10.bind(var5)(var3);
            var10 = var15.getUserBannerURL;
            var3 = {};
            var20 = var19.id;
            var3['id'] = var20;
            var19 = var19.banner;
            var3['banner'] = var19;
            var19 = 512;
            var3['size'] = var19;
            var19 = false;
            var3['canAnimate'] = var19;
            var10 = var10.bind(var15)(var3);
            if(!(var1 == var10)) { _fun0001_ip = 946; continue _fun0001 }
 934:
            var15 = {'bannerRatio': 'bot', 'staticBannerSrc': null};
            _fun0001_ip = 986; continue _fun0001;
 946:
            var3 = {};
            var19 = 'bot';
            var3['bannerRatio'] = var19;
            var3['staticBannerSrc'] = var10;
            var15 = var3;
            _fun0001_ip = 986; continue _fun0001;
 967:
            var3 = {};
            var10 = 'activity';
            var3['bannerRatio'] = var10;
            var3['staticBannerSrc'] = var7;
            var15 = var3;
 986:
            var3 = var1 != var17;
            var10 = null;
            if(!var3) { _fun0001_ip = 1028; continue _fun0001 }
 995:
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 11;
            var3 = var19[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getAppIconSrc;
            var10 = var3.bind(var7)(var4, var17, var18);
 1028:
            var3 = var10;
            if(!(var1 == var3)) { _fun0001_ip = 1041; continue _fun0001 }
 1035:
            var3 = var15.staticBannerSrc;
 1041:
            var7 = var1 != var3;
            var17 = undefined;
            if(!var7) { _fun0001_ip = 1053; continue _fun0001 }
 1050:
            var17 = var3;
 1053:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 11;
            var3 = var18[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getAppGradientColors;
            var7 = var3.bind(var7)(var17);
            var3 = {};
            var27 = var3;
            var26 = var16;
            var16 = copyDataProperties(var27, var26);
            var27 = var3;
            var26 = var15;
            var15 = copyDataProperties(var27, var26);
            var15 = var14.id;
            var14 = 'appId';
            var3[var14] = var15;
            var14 = var6.id;
            var6 = 'messageId';
            var3[var6] = var14;
            var6 = 'title';
            var3[var6] = var1;
            var6 = 'header';
            var3[var6] = var13;
            var6 = 'info';
            var3[var6] = var12;
            var6 = 'tagline';
            var3[var6] = var11;
            var6 = 'iconSrc';
            var3[var6] = var10;
            var6 = 'actions';
            var3[var6] = var9;
            var6 = 'embedUrl';
            var3[var6] = var8;
            var6 = _closure1_slot8;
            var8 = var6.APP_MESSAGE_EMBED;
            var6 = 'extendedType';
            var3[var6] = var8;
            var6 = 'gradientColors';
            var3[var6] = var7;
            var6 = 'type';
            var3[var6] = var1;
            var6 = 'headerText';
            var3[var6] = var1;
            return var3;
 1247:
            return var1;
 1249:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.fetchAssetIds;
            var3 = _closure1_slot9;
            var3 = var6.bind(var7)(var4, var3);
            return var1;
 1287:
            var6 = _closure1_slot6;
            var3 = var6.isFetchingApplication;
            var6 = var3.bind(var6)(var4);
            var3 = false;
            if(!(var3 === var6)) { _fun0001_ip = 1339; continue _fun0001 }
 1308:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.fetchApplication;
            var2 = var2.bind(var3)(var4);
 1339:
            return var1;
        }
    };
    var3['createAppMessageEmbed'] = var4;
    var2 = function handleTapAppMessageEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var10 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.getApplication;
            var1 = var10.appId;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.toURLSafe;
            var2 = var10.embedUrl;
            var4 = var3.bind(var4)(var2);
            var3 = null;
            var2 = var3 == var4;
            var6 = undefined;
            if(var2) { _fun0002_ip = 97; continue _fun0002 }
 77:
            var9 = var4.searchParams;
            var5 = var9.get;
            var2 = 'referrer_id';
            var6 = var5.bind(var9)(var2);
 97:
            if(!(var3 == var6)) { _fun0002_ip = 117; continue _fun0002 }
 101:
            var2 = var10.message;
            var2 = var2.author;
            var6 = var2.id;
 117:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0002_ip = 146; continue _fun0002 }
 126:
            var9 = var4.searchParams;
            var5 = var9.get;
            var4 = 'custom_id';
            var2 = var5.bind(var9)(var4);
 146:
            var4 = var3 != var2;
            var5 = undefined;
            if(!var4) { _fun0002_ip = 158; continue _fun0002 }
 155:
            var5 = var2;
 158:
            var4 = var10.actionId;
            var2 = 'play_in_channel';
            if(!(var2 !== var4)) { _fun0002_ip = 724; continue _fun0002 }
 177:
            var2 = 'play_in_dm';
            if(!(var2 !== var4)) { _fun0002_ip = 564; continue _fun0002 }
 190:
            var2 = 'view_in_app_launcher';
            if(!(var2 !== var4)) { _fun0002_ip = 425; continue _fun0002 }
 203:
            var2 = 'add_app';
            if(!(var2 !== var4)) { _fun0002_ip = 329; continue _fun0002 }
 213:
            var2 = 'link_copied';
            if(!(var2 !== var4)) { _fun0002_ip = 265; continue _fun0002 }
 223:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var9 = var4.bind(var1)(var2);
            var4 = var9.assertNever;
            var2 = var10.actionId;
            var2 = var4.bind(var9)(var2);
            _fun0002_ip = 827; continue _fun0002;
 265:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 21;
            var2 = var9[var2];
            var12 = var4.bind(var1)(var2);
            var11 = var12.copy;
            var2 = var10.embedUrl;
            var2 = var11.bind(var12)(var2);
            var2 = 22;
            var2 = var9[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.presentLinkCopied;
            var2 = var2.bind(var4)();
            _fun0002_ip = 827; continue _fun0002;
 329:
            if(!(var3 != var8)) { _fun0002_ip = 423; continue _fun0002 }
 333:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 20;
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
            _fun0002_ip = 827; continue _fun0002;
 423:
            return var1;
 425:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 18;
            var2 = var9[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getBestActiveInput;
            var9 = var2.bind(var4)();
            if(!(var3 != var9)) { _fun0002_ip = 827; continue _fun0002 }
 462:
            var4 = var9.openCustomKeyboard;
            var2 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 19;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var2['type'] = var11;
            var11 = {};
            var12 = _closure1_slot7;
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
            _fun0002_ip = 827; continue _fun0002;
 564:
            var4 = var3 == var8;
            var2 = undefined;
            if(var4) { _fun0002_ip = 579; continue _fun0002 }
 573:
            var2 = var8.bot;
 579:
            if(!(var3 != var2)) { _fun0002_ip = 722; continue _fun0002 }
 586:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 16;
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
            var8 = 15;
            var8 = var11[var8];
            var8 = var12.bind(var1)(var8);
            var12 = var8.APP_MESSAGE_EMBED;
            var8 = new Array(1);
            var8[0] = var12;
            var2['analyticsLocations'] = var8;
            var8 = 17;
            var8 = var11[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CommandOrigin;
            var8 = var8.APP_MESSAGE_EMBED;
            var2['commandOrigin'] = var8;
            var2['referrerId'] = var6;
            var2['customId'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 827; continue _fun0002;
 722:
            return var1;
 724:
            var2 = var10.message;
            var8 = var2.channel_id;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.joinOrStartActivityInChannel;
            var2 = {};
            var10 = var10.appId;
            var2['appId'] = var10;
            var2['channelId'] = var8;
            var8 = _closure1_slot1;
            var7 = 15;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.APP_MESSAGE_EMBED;
            var7 = new Array(1);
            var7[0] = var8;
            var2['analyticsLocations'] = var7;
            var2['referrerId'] = var6;
            var2['customId'] = var5;
            var2 = var3.bind(var4)(var2);
 827:
            return var1;
        }
    };
    var3['handleTapAppMessageEmbed'] = var2;
    return var1;
})();