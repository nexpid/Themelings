// app/modules/oauth2/native/ApplicationEducation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ApplicationEducationEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.iconComponent;
            var9 = var1.text;
            var1 = _closure1_slot8;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.entry;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var8;
            if(!var5) { _fun0001_ip = 73; continue _fun0001 }
 56:
            var5 = {};
            var11 = var10.entryIcon;
            var5['style'] = var11;
            var7 = var8.bind(var4)(var5);
 73:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 13;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var11 = 'text-md/normal';
            var6['variant'] = var11;
            var10 = var10.entryText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_FRIENDS;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['applicationEducation'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 12};
    var4['entry'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['entryText'] = var9;
    var9 = {'width': 20, 'height': 20};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['tintColor'] = var10;
    var4['entryIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/ApplicationEducation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ApplicationEducation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.application;
            var3 = var1.accountScopes;
            var1 = _closure1_slot8;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var12 = new Array(0);
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 6;
            var2 = var1[var2];
            var2 = var4.bind(var5)(var2);
            var10 = var2.bind(var5)(var8);
            var2 = var3.includes;
            var4 = _closure1_slot0;
            var6 = 7;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var1 = var1.OAuth2Scopes;
            var1 = var1.SDK_SOCIAL_LAYER;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0002_ip = 609; continue _fun0002 }
 100:
            var2 = var3.includes;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var1 = var1.OAuth2Scopes;
            var1 = var1.SDK_SOCIAL_LAYER_PRESENCE;
            var1 = var2.bind(var3)(var1);
            var14 = undefined;
            if(!var1) { _fun0002_ip = 1187; continue _fun0002 }
 147:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var17 = 8;
            var1 = var2[var17];
            var1 = var3.bind(var5)(var1);
            var6 = var1.intl;
            if(var10) { _fun0002_ip = 207; continue _fun0002 }
 175:
            var4 = var6.string;
            var1 = var2[var17];
            var1 = var3.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ex4sMT;
            var1 = var4.bind(var6)(var1);
            _fun0002_ip = 250; continue _fun0002;
 207:
            var4 = var6.formatToPlainString;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.3Mau09;
            var2 = {};
            var11 = var8.name;
            var2['applicationName'] = var11;
            var1 = var4.bind(var6)(var3, var2);
 250:
            var6 = var12.push;
            var4 = {};
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.FriendsIcon;
            var4['iconComponent'] = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var17];
            var11 = var3.bind(var5)(var11);
            var15 = var11.intl;
            var13 = var15.formatToPlainString;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var3 = var2.t;
            if(var10) { _fun0002_ip = 357; continue _fun0002 }
 332:
            var11 = var3.WNKzo6;
            var2 = {};
            var16 = _closure1_slot4;
            var2['maxFriends'] = var16;
            var2 = var13.bind(var15)(var11, var2);
            _fun0002_ip = 380; continue _fun0002;
 357:
            var11 = var3.z9peam;
            var3 = {};
            var16 = _closure1_slot4;
            var3['maxFriends'] = var16;
            var2 = var13.bind(var15)(var11, var3);
 380:
            var4['text'] = var2;
            var3 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var2 = var11.bind(var5)(var2);
            var2 = var2.GameControllerIcon;
            var3['iconComponent'] = var2;
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = var2[var17];
            var13 = var11.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var2 = var2[var17];
            var2 = var11.bind(var5)(var2);
            var11 = var2.t;
            if(var10) { _fun0002_ip = 474; continue _fun0002 }
 461:
            var2 = var11.feD3+v;
            var2 = var13.bind(var15)(var2);
            _fun0002_ip = 485; continue _fun0002;
 474:
            var11 = var11./bdaND;
            var2 = var13.bind(var15)(var11);
 485:
            var3['text'] = var2;
            var2 = {};
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var11 = var15[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.SettingsIcon;
            var2['iconComponent'] = var11;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = var11[var17];
            var15 = var13.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var11 = var11[var17];
            var11 = var13.bind(var5)(var11);
            var13 = var11.t;
            if(var10) { _fun0002_ip = 579; continue _fun0002 }
 566:
            var11 = var13.YFFVMz;
            var11 = var15.bind(var16)(var11);
            _fun0002_ip = 590; continue _fun0002;
 579:
            var13 = var13.mSqazM;
            var11 = var15.bind(var16)(var13);
 590:
            var2['text'] = var11;
            var2 = var6.bind(var12)(var4, var3, var2);
            var14 = var1;
            _fun0002_ip = 1187; continue _fun0002;
 609:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var17 = 8;
            var1 = var2[var17];
            var1 = var3.bind(var5)(var1);
            var6 = var1.intl;
            if(var10) { _fun0002_ip = 669; continue _fun0002 }
 637:
            var4 = var6.string;
            var1 = var2[var17];
            var1 = var3.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ex4sMT;
            var1 = var4.bind(var6)(var1);
            _fun0002_ip = 712; continue _fun0002;
 669:
            var4 = var6.formatToPlainString;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.3Mau09;
            var2 = {};
            var8 = var8.name;
            var2['applicationName'] = var8;
            var1 = var4.bind(var6)(var3, var2);
 712:
            var8 = var12.push;
            var6 = {};
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.FriendsIcon;
            var6['iconComponent'] = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var17];
            var4 = var3.bind(var5)(var4);
            var13 = var4.intl;
            var11 = var13.formatToPlainString;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var3 = var2.t;
            if(var10) { _fun0002_ip = 819; continue _fun0002 }
 794:
            var4 = var3.WNKzo6;
            var2 = {};
            var15 = _closure1_slot4;
            var2['maxFriends'] = var15;
            var2 = var11.bind(var13)(var4, var2);
            _fun0002_ip = 842; continue _fun0002;
 819:
            var4 = var3.z9peam;
            var3 = {};
            var15 = _closure1_slot4;
            var3['maxFriends'] = var15;
            var2 = var11.bind(var13)(var4, var3);
 842:
            var6['text'] = var2;
            var4 = {};
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ChatSmileIcon;
            var4['iconComponent'] = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var17];
            var11 = var3.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var3 = var2.t;
            if(var10) { _fun0002_ip = 938; continue _fun0002 }
 923:
            var2 = var3.j7peBg;
            var2 = var11.bind(var13)(var2);
            _fun0002_ip = 951; continue _fun0002;
 938:
            var3 = var3.daY6xs;
            var2 = var11.bind(var13)(var3);
 951:
            var4['text'] = var2;
            var3 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var2 = var11.bind(var5)(var2);
            var2 = var2.GameControllerIcon;
            var3['iconComponent'] = var2;
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = var2[var17];
            var13 = var11.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var2 = var2[var17];
            var2 = var11.bind(var5)(var2);
            var11 = var2.t;
            if(var10) { _fun0002_ip = 1045; continue _fun0002 }
 1032:
            var2 = var11.feD3+v;
            var2 = var13.bind(var15)(var2);
            _fun0002_ip = 1056; continue _fun0002;
 1045:
            var11 = var11./bdaND;
            var2 = var13.bind(var15)(var11);
 1056:
            var3['text'] = var2;
            var2 = {};
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var11 = var15[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.SettingsIcon;
            var2['iconComponent'] = var11;
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = var11[var17];
            var13 = var16.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var11 = var11[var17];
            var11 = var16.bind(var5)(var11);
            var11 = var11.t;
            if(var10) { _fun0002_ip = 1150; continue _fun0002 }
 1137:
            var10 = var11.YFFVMz;
            var10 = var13.bind(var15)(var10);
            _fun0002_ip = 1161; continue _fun0002;
 1150:
            var11 = var11.mSqazM;
            var10 = var13.bind(var15)(var11);
 1161:
            var2['text'] = var10;
            var22 = var12;
            var21 = var6;
            var20 = var4;
            var19 = var3;
            var18 = var2;
            var2 = var22[var8](var21, var20, var19, var18, var17);
            var14 = var1;
 1187:
            var2 = var12.length;
            var11 = null;
            var13 = 0;
            var1 = null;
            if(!(var13 !== var2)) { _fun0002_ip = 1406; continue _fun0002 }
 1205:
            var4 = _closure1_slot6;
            var3 = _closure1_slot7;
            var2 = {};
            var8 = _closure1_slot3;
            var6 = {};
            var9 = var9.applicationEducation;
            var6['style'] = var9;
            var9 = var11 != var14;
            var10 = null;
            if(!var9) { _fun0002_ip = 1307; continue _fun0002 }
 1240:
            var9 = var14.length;
            var9 = var9 > var13;
            var10 = null;
            if(!var9) { _fun0002_ip = 1307; continue _fun0002 }
 1254:
            var13 = _closure1_slot5;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 13;
            var9 = var15[var9];
            var9 = var11.bind(var5)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var9['children'] = var14;
            var10 = var13.bind(var5)(var11, var9);
 1307:
            var9 = new Array(2);
            var9[0] = var10;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.iconComponent;
                var1 = var1.text;
                var5 = _closure1_slot5;
                var4 = _closure1_slot9;
                var3 = {};
                var3['iconComponent'] = var2;
                var3['text'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var9[1] = var10;
            var6['children'] = var9;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 14;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.AuthorizeFormSeparator;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1406:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();