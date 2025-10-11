// app/modules/user_profile/native/AddOrOpenAppButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AddAppButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.application;
            var _closure2_slot0 = var5;
            var2 = var2.guildId;
            var _closure2_slot1 = var2;
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var7 = var5.customInstallUrl;
            var3 = new Array(5);
            var3[0] = var7;
            var7 = var5.id;
            var3[1] = var7;
            var7 = var5.installParams;
            var3[2] = var7;
            var7 = var5.integrationTypesConfig;
            var3[3] = var7;
            var3[4] = var2;
            var2 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
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
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var11 = var4.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = 11;
                var2 = var4[var2];
                var8 = var3.bind(var1)(var2);
                var7 = var8.getApplicationInstallURL;
                var2 = _closure2_slot0;
                var2 = var7.bind(var8)(var2);
                var2 = var5.bind(var6)(var2);
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentLinkCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = var4.bind(var6)(var2, var3);
            var6 = var5.customInstallUrl;
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isDiscordUrl;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.LinkExternalSmallIcon;
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var7 = var2.PlusSmallIcon;
case 5:
            var6 = _closure1_slot5;
            var4 = var6.useMemo;
            var3 = function() {
                var2 = {};
                var1 = 'longpress';
                var2['name'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
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
            var6 = var4.bind(var6)(var3, var2);
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'longPress';
                    if(!(var1 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.copy;
                    var1 = 11;
                    var1 = var4[var1];
                    var8 = var3.bind(var2)(var1);
                    var7 = var8.getApplicationInstallURL;
                    var1 = _closure2_slot0;
                    var1 = var7.bind(var8)(var1);
                    var1 = var5.bind(var6)(var1);
                    var1 = 12;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentLinkCopied;
                    var1 = var1.bind(var2)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot9;
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var15.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {};
            var12 = 16;
            var13 = var10[var12];
            var13 = var15.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var10[var12];
            var12 = var15.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.NgXl3N;
            var12 = var13.bind(var14)(var12);
            var1['text'] = var12;
            var1['onPress'] = var11;
            var1['onLongPress'] = var9;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            var6 = _closure1_slot9;
            var5 = {};
            var9 = 'sm';
            var5['size'] = var9;
            var9 = _closure1_slot1;
            var8 = 18;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.colors;
            var8 = var8.WHITE;
            var5['color'] = var8;
            var5 = var6.bind(var3)(var7, var5);
            var1['icon'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function OpenAppButton(arg1) {
        var1 = arg1;
        var9 = var1.profileApplication;
        var _closure2_slot0 = var9;
        var10 = var1.channel;
        var _closure2_slot1 = var10;
        var8 = var1.onOpenApp;
        var _closure2_slot2 = var8;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var3 = false;
        var6 = var4.bind(var5)(var3);
        var5 = _closure1_slot4;
        var4 = undefined;
        var3 = 2;
        var5 = var5.bind(var4)(var6, var3);
        var3 = 0;
        var6 = var5[var3];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot3 = var3;
        var7 = _closure1_slot5;
        var5 = var7.useCallback;
        var3 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = _closure1_slot6;
                    var6 = {};
                    var2 = 'channel';
                    var6['type'] = var2;
                    var2 = _closure2_slot1;
                    var6['channel'] = var2;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = undefined;
                    var10 = var7.bind(var2)(var6, var4);
                    var7 = var10.descriptor;
                    var4 = null;
                    var8 = var4 == var7;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var6 = var7.application;
case 10:
                    if(!(var4 == var6)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = _closure2_slot3;
                    var6 = true;
                    var6 = var7.bind(var2)(var6);
case 12:
                    var6 = var10.descriptor;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 6; continue _fun0003 }
case 14:
                    var7 = var6.application;
case 6:
                    if(!(var4 == var7)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 19;
                    var6 = var9[var6];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.fetchApplication;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=160);
case 17:
                    return var6;
case 18:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    var7 = var6;
                    if(!var8) { _fun0003_ip = 15; continue _fun0003 }
case 19:
                    return var6;
case 15:
                    var8 = _closure2_slot3;
                    var6 = false;
                    var6 = var8.bind(var2)(var6);
                    if(!(var4 != var10)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var6 = _closure2_slot2;
                    if(!(var4 != var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var5 = _closure2_slot2;
                    var5 = var5.bind(var2)();
case 22:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 20;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getBestActiveInput;
                    var6 = var5.bind(var6)();
                    if(!(var4 != var6)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var5 = var6.openCustomKeyboard;
                    var4 = {};
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 21;
                    var8 = var11[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.KeyboardTypes;
                    var8 = var8.APP_LAUNCHER;
                    var4['type'] = var8;
                    var8 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.APPLICATION_VIEW;
                    var8['initialRouteName'] = var9;
                    var9 = true;
                    var8['initiallyExpanded'] = var9;
                    var8['application'] = var7;
                    var9 = var10.isGuildInstalled;
                    var9 = !var9;
                    if(!var9) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var10 = var10.isUserInstalled;
                    var9 = !var10;
case 26:
                    var8['installOnDemand'] = var9;
                    var4['context'] = var8;
                    var4 = var5.bind(var6)(var4);
case 24:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.APP_PROFILE_OPEN_APP_BUTTON_CLICKED;
                    var3 = {};
                    var7 = var7.id;
                    var3['application_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 20:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = new Array(3);
        var2[0] = var10;
        var9 = var9.id;
        var2[1] = var9;
        var2[2] = var8;
        var5 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot9;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 17;
        var1 = var11[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {};
        var7 = 16;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSection;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/AddOrOpenAppButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddOrOpenAppButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.application;
            var8 = var1.botUserId;
            var7 = var1.channel;
            var10 = var1.guildId;
            var6 = var1.onOpenApp;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var7);
            if(!var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var1 = null;
            if(!(var1 == var7)) { _fun0004_ip = 30; continue _fun0004 }
case 28:
            var4 = _closure1_slot9;
            var3 = _closure1_slot10;
            var1 = {};
            var1['application'] = var9;
            var1['guildId'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 31; continue _fun0004;
case 30:
            var4 = _closure1_slot9;
            var3 = _closure1_slot11;
            var2 = {};
            var2['profileApplication'] = var9;
            var2['botUserId'] = var8;
            var2['channel'] = var7;
            var2['onOpenApp'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();