// app/modules/user_profile/native/AddOrOpenAppButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AddAppButton(arg1) {
        var3 = arg1;
        var14 = var3.application;
        var _closure2_slot0 = var14;
        var2 = var3.guildId;
        var _closure2_slot1 = var2;
        var13 = var3.style;
        var3 = _closure1_slot11;
        var4 = undefined;
        var12 = var3.bind(var4)();
        var _closure2_slot2 = var12;
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var7 = var14.customInstallUrl;
        var3 = new Array(5);
        var3[0] = var7;
        var7 = var14.id;
        var3[1] = var7;
        var7 = var14.installParams;
        var3[2] = var7;
        var7 = var14.integrationTypesConfig;
        var3[3] = var7;
        var3[4] = var2;
        var2 = function() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.installApplication;
            var3 = {};
            var8 = _closure2_slot0;
            var9 = var8.id;
            var3['applicationId'] = var9;
            var9 = var8.customInstallUrl;
            var3['customInstallUrl'] = var9;
            var9 = var8.installParams;
            var3['installParams'] = var9;
            var8 = var8.integrationTypesConfig;
            var3['integrationTypesConfig'] = var8;
            var7 = _closure2_slot1;
            var3['guildId'] = var7;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 11;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var10 = var5.bind(var6)(var2, var3);
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var3 = new Array(1);
        var3[0] = var14;
        var2 = function() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var2 = var4[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.copy;
            var2 = 13;
            var2 = var4[var2];
            var8 = var3.bind(var1)(var2);
            var7 = var8.getApplicationInstallURL;
            var2 = _closure2_slot0;
            var2 = var7.bind(var8)(var2);
            var2 = var5.bind(var6)(var2);
            var2 = 14;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
            return var1;
        };
        var9 = var5.bind(var6)(var2, var3);
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var2 = var12.applicationInstallButtonIcon;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var4 = _closure1_slot10;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CirclePlusIcon;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = 16;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.colors;
            var5 = var5.WHITE;
            var1['color'] = var5;
            var5 = 'sm';
            var1['size'] = var5;
            var5 = _closure2_slot2;
            var5 = var5.applicationInstallButtonIcon;
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var6 = var5.bind(var6)(var2, var3);
        var7 = _closure1_slot5;
        var5 = var7.useCallback;
        var2 = var14.customInstallUrl;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = var12.launchIcon;
        var3[1] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.customInstallUrl;
                var4 = null;
                var2 = var4 == var1;
                var1 = null;
                if(var2) { _fun0001_ip = 173; continue _fun0001 }
 27:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var6.bind(var5)(var3);
                var6 = var7.isDiscordUrl;
                var3 = _closure2_slot0;
                var3 = var3.customInstallUrl;
                var3 = var6.bind(var7)(var3);
                var1 = null;
                if(var3) { _fun0001_ip = 173; continue _fun0001 }
 78:
                var4 = _closure1_slot10;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 18;
                var2 = var8[var6];
                var3 = var7.bind(var5)(var2);
                var2 = {};
                var9 = _closure2_slot2;
                var9 = var9.launchIcon;
                var2['style'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.Sizes;
                var6 = var6.SMALL;
                var2['size'] = var6;
                var6 = 19;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var2['source'] = var6;
                var6 = 'white';
                var2['color'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 173:
                return var1;
            }
        };
        var5 = var5.bind(var7)(var2, var3);
        var8 = _closure1_slot5;
        var7 = var8.useMemo;
        var3 = function() {
            var2 = {};
            var1 = 'longpress';
            var2['name'] = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 20;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.XWDiho;
            var1 = var3.bind(var4)(var1);
            var2['label'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var2 = new Array(0);
        var8 = var7.bind(var8)(var3, var2);
        var7 = _closure1_slot5;
        var3 = var7.useCallback;
        var2 = new Array(1);
        var2[0] = var14;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.actionName;
                var1 = 'longPress';
                if(!(var1 === var2)) { _fun0002_ip = 112; continue _fun0002 }
 24:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var2 = undefined;
                var6 = var3.bind(var2)(var1);
                var5 = var6.copy;
                var1 = 13;
                var1 = var4[var1];
                var8 = var3.bind(var2)(var1);
                var7 = var8.getApplicationInstallURL;
                var1 = _closure2_slot0;
                var1 = var7.bind(var8)(var1);
                var1 = var5.bind(var6)(var1);
                var1 = 14;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.presentLinkCopied;
                var1 = var1.bind(var2)();
 112:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot10;
        var16 = _closure1_slot1;
        var15 = _closure1_slot2;
        var14 = 21;
        var1 = var15[var14];
        var2 = var16.bind(var4)(var1);
        var1 = {};
        var17 = var15[var14];
        var17 = var16.bind(var4)(var17);
        var17 = var17.Looks;
        var17 = var17.FILLED;
        var1['look'] = var17;
        var14 = var15[var14];
        var14 = var16.bind(var4)(var14);
        var14 = var14.Sizes;
        var14 = var14.SMALL;
        var1['size'] = var14;
        var14 = var12.applicationInstallButton;
        var12 = new Array(2);
        var12[0] = var14;
        var12[1] = var13;
        var1['style'] = var12;
        var14 = _closure1_slot0;
        var11 = 20;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.NgXl3N;
        var11 = var12.bind(var13)(var11);
        var1['text'] = var11;
        var1['onPress'] = var10;
        var1['onLongPress'] = var9;
        var1['accessibilityActions'] = var8;
        var1['onAccessibilityAction'] = var7;
        var1['renderIcon'] = var6;
        var1['renderRightIcon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function AddOrOpenAppButtonWithRequiredChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.application;
            var9 = var1.botUserId;
            var8 = var1.context;
            var7 = var1.style;
            var6 = var1.onOpenApp;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 22;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['context'] = var8;
            var1 = var3.bind(var5)(var1);
            var4 = _closure1_slot10;
            if(var1) { _fun0003_ip = 124; continue _fun0003 }
 73:
            var3 = _closure1_slot12;
            var1 = {};
            var1['application'] = var10;
            var13 = var8.type;
            var12 = 'channel';
            var11 = undefined;
            if(!(var12 === var13)) { _fun0003_ip = 108; continue _fun0003 }
 98:
            var12 = var8.channel;
            var11 = var12.guild_id;
 108:
            var1['guildId'] = var11;
            var1['style'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 159; continue _fun0003;
 124:
            var3 = _closure1_slot14;
            var2 = {};
            var2['profileApplication'] = var10;
            var2['botUserId'] = var9;
            var2['context'] = var8;
            var2['style'] = var7;
            var2['onOpenApp'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 159:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function OpenAppButton(arg1) {
        var2 = arg1;
        var11 = var2.profileApplication;
        var _closure2_slot0 = var11;
        var12 = var2.context;
        var _closure2_slot1 = var12;
        var9 = var2.style;
        var10 = var2.onOpenApp;
        var _closure2_slot2 = var10;
        var2 = _closure1_slot11;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var5 = _closure1_slot5;
        var3 = var5.useState;
        var2 = false;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var6 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot3 = var2;
        var5 = _closure1_slot5;
        var3 = var5.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 389; continue _fun0004 }
 10:
                    var7 = _closure1_slot6;
                    var6 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = undefined;
                    var10 = var7.bind(var2)(var6, var4);
                    var7 = var10.descriptor;
                    var4 = null;
                    var8 = var4 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 63; continue _fun0004 }
 58:
                    var6 = var7.application;
 63:
                    if(!(var4 == var6)) { _fun0004_ip = 78; continue _fun0004 }
 67:
                    var7 = _closure2_slot3;
                    var6 = true;
                    var6 = var7.bind(var2)(var6);
 78:
                    var6 = var10.descriptor;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0004_ip = 98; continue _fun0004 }
 93:
                    var7 = var6.application;
 98:
                    if(!(var4 == var7)) { _fun0004_ip = 158; continue _fun0004 }
 102:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 23;
                    var6 = var9[var6];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.fetchApplication;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=146);
 144:
                    return var6;
 146:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    var7 = var6;
                    if(!var8) { _fun0004_ip = 158; continue _fun0004 }
 155:
                    return var6;
 158:
                    var8 = _closure2_slot3;
                    var6 = false;
                    var6 = var8.bind(var2)(var6);
                    if(!(var4 != var10)) { _fun0004_ip = 386; continue _fun0004 }
 176:
                    var6 = _closure2_slot2;
                    if(!(var4 != var6)) { _fun0004_ip = 192; continue _fun0004 }
 184:
                    var5 = _closure2_slot2;
                    var5 = var5.bind(var2)();
 192:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 24;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getBestActiveInput;
                    var6 = var5.bind(var6)();
                    if(!(var4 != var6)) { _fun0004_ip = 333; continue _fun0004 }
 226:
                    var5 = var6.openCustomKeyboard;
                    var4 = {};
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 25;
                    var8 = var11[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.KeyboardTypes;
                    var8 = var8.APP_LAUNCHER;
                    var4['type'] = var8;
                    var8 = {};
                    var9 = _closure1_slot9;
                    var9 = var9.APPLICATION_VIEW;
                    var8['initialRouteName'] = var9;
                    var9 = true;
                    var8['initiallyExpanded'] = var9;
                    var8['application'] = var7;
                    var9 = var10.isGuildInstalled;
                    var9 = !var9;
                    if(!var9) { _fun0004_ip = 319; continue _fun0004 }
 310:
                    var10 = var10.isUserInstalled;
                    var9 = !var10;
 319:
                    var8['installOnDemand'] = var9;
                    var4['context'] = var8;
                    var4 = var5.bind(var6)(var4);
 333:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 26;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.APP_PROFILE_OPEN_APP_BUTTON_CLICKED;
                    var3 = {};
                    var7 = var7.id;
                    var3['application_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
 386:
                    return var2;
 389:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = new Array(3);
        var1[0] = var12;
        var11 = var11.id;
        var1[1] = var11;
        var1[2] = var10;
        var5 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot10;
        var12 = _closure1_slot1;
        var11 = _closure1_slot2;
        var10 = 21;
        var1 = var11[var10];
        var2 = var12.bind(var4)(var1);
        var1 = {};
        var13 = var11[var10];
        var13 = var12.bind(var4)(var13);
        var13 = var13.Looks;
        var13 = var13.FILLED;
        var1['look'] = var13;
        var10 = var11[var10];
        var10 = var12.bind(var4)(var10);
        var10 = var10.Sizes;
        var10 = var10.SMALL;
        var1['size'] = var10;
        var10 = var8.applicationInstallButton;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var1['style'] = var8;
        var10 = _closure1_slot0;
        var7 = 20;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.Cia+Aw;
        var7 = var8.bind(var9)(var7);
        var1['text'] = var7;
        var1['loading'] = var6;
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSection;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginRight': 8, 'marginTop': 16};
    var4['applicationInstallButton'] = var9;
    var9 = {};
    var9['marginRight'] = var11;
    var4['applicationInstallButtonIcon'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['launchIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/AddOrOpenAppButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddOrOpenAppButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var8 = var2.application;
            var10 = var2.botUserId;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var7 = var2.guildId;
            var6 = var2.style;
            var9 = var2.onOpenApp;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var3);
            var4 = var11.useStateFromStores;
            var12 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var4.bind(var11)(var3, var1);
            var1 = null;
            if(!(var1 != var11)) { _fun0005_ip = 154; continue _fun0005 }
 100:
            var4 = _closure1_slot10;
            var3 = _closure1_slot13;
            var1 = {};
            var1['application'] = var8;
            var1['botUserId'] = var10;
            var10 = {};
            var10['channel'] = var11;
            var11 = 'channel';
            var10['type'] = var11;
            var1['context'] = var10;
            var1['style'] = var6;
            var1['onOpenApp'] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 182; continue _fun0005;
 154:
            var4 = _closure1_slot10;
            var3 = _closure1_slot12;
            var2 = {};
            var2['application'] = var8;
            var2['guildId'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 182:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();