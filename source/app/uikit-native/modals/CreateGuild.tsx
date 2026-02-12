// app/uikit-native/modals/CreateGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MarketingURLs;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'backgroundColor': null, 'paddingHorizontal': 16, 'paddingBottom': 16};
    var10 = 6;
    var10 = var6[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var4['contentContainer'] = var9;
    var10 = 8;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['header'] = var9;
    var9 = {'lineHeight': 18, 'textAlign': 'center', 'marginBottom': 32};
    var4['description'] = var9;
    var9 = {'alignSelf': 'center', 'marginBottom': 12};
    var4['iconUploader'] = var9;
    var9 = {'width': '100%', 'marginTop': 8};
    var4['createButton'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['error'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 16};
    var4['staffOnly'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['hint'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/CreateGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CreateGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var26 = var2.onIconPress;
            var24 = var2.onNameChange;
            var19 = var2.onStaffOnlyChange;
            var15 = var2.onCreate;
            var14 = var2.submitting;
            var11 = var2.error;
            var18 = var2.customTitle;
            var21 = var2.customDescription;
            var16 = var2.customButtonLabel;
            var22 = var2.autoFocus;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var22 = true;
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot9;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var10 = null;
            var8 = var10 == var3;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.isStaff;
            var2 = var2.bind(var3)();
            var8 = !var2;
case 4:
            var6 = !var8;
            var13 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var23 = var2.bind(var3)();
            _closure2_slot0 = var23;
            var17 = _closure1_slot3;
            var2 = var17.useRef;
            var27 = var2.bind(var17)(var10);
            _closure2_slot1 = var27;
            var3 = var17.useEffect;
            var2 = new Array(1);
            var2[0] = var23;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    var1 = var2 != var3;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setAccessibilityFocus;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1['ref'] = var4;
                    var4 = 100;
                    var1['delay'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var17)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {'style': null, 'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var17 = var12.flex;
            var1['style'] = var17;
            var17 = {};
            var20 = 0;
            var17['top'] = var20;
            var1['contentInset'] = var17;
            var20 = false;
            var17 = var12.contentContainer;
            var1['contentContainerStyle'] = var17;
            var17 = _closure1_slot7;
            var25 = 9;
            var5 = var5[var25];
            var5 = var13.bind(var4)(var5);
            var13 = var5.Text;
            var5 = {'ref': null, 'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var5['ref'] = var27;
            var27 = var12.header;
            var5['style'] = var27;
            if(!(var10 == var18)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = 10;
            var28 = var31[var27];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.XioBx6;
            var18 = var28.bind(var29)(var27);
case 10:
            var5['children'] = var18;
            var13 = var17.bind(var4)(var13, var5);
            var5 = new Array(8);
            var5[0] = var13;
            var18 = _closure1_slot7;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var25];
            var13 = var17.bind(var4)(var13);
            var17 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var25 = var12.description;
            var13['style'] = var25;
            if(!(var10 == var21)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var25 = 10;
            var27 = var30[var25];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var25 = var30[var25];
            var25 = var29.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25./k/L/j;
            var21 = var27.bind(var28)(var25);
case 12:
            var13['children'] = var21;
            var13 = var18.bind(var4)(var17, var13);
            var5[1] = var13;
            var18 = _closure1_slot7;
            var17 = _closure1_slot1;
            var25 = _closure1_slot2;
            var13 = 11;
            var13 = var25[var13];
            var21 = var17.bind(var4)(var13);
            var13 = {};
            var27 = var12.contentContainer;
            var27 = var27.backgroundColor;
            var13['iconBackgroundColor'] = var27;
            var27 = var12.iconUploader;
            var13['style'] = var27;
            var13['onPress'] = var26;
            var26 = var9.icon;
            var13['icon'] = var26;
            var13 = var18.bind(var4)(var21, var13);
            var5[2] = var13;
            var13 = 12;
            var13 = var25[var13];
            var17 = var17.bind(var4)(var13);
            var13 = {};
            var28 = _closure1_slot0;
            var21 = 10;
            var26 = var25[var21];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var21];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.dBih7e;
            var25 = var26.bind(var27)(var25);
            var13['label'] = var25;
            var26 = var10 == var11;
            var25 = undefined;
            if(var26) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var27 = var11.getFirstFieldErrorMessage;
            var26 = 'name';
            var25 = var27.bind(var11)(var26);
case 14:
            var13['error'] = var25;
            var25 = var9.name;
            var13['value'] = var25;
            var13['onChangeText'] = var24;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var22 = !var23;
case 16:
            var13['autoFocus'] = var22;
            var13['autoCorrect'] = var20;
            var20 = 'done';
            var13['returnKeyType'] = var20;
            var13 = var18.bind(var4)(var17, var13);
            var5[3] = var13;
            if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = _closure1_slot7;
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 13;
            var8 = var18[var8];
            var8 = var22.bind(var4)(var8);
            var13 = var8.FormSwitchRow;
            var8 = {'onValueChange': null, 'value': null, 'start': true, 'end': true, 'style': null, 'label': 'Staff Only'};
            var8['onValueChange'] = var19;
            var19 = var9.staffOnly;
            var8['value'] = var19;
            var19 = var12.staffOnly;
            var8['style'] = var19;
            var19 = var18[var21];
            var19 = var22.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.edQ5va;
            var18 = var19.bind(var20)(var18);
            var8['subLabel'] = var18;
            var6 = var17.bind(var4)(var13, var8);
case 18:
            var5[4] = var6;
            var13 = _closure1_slot7;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 14;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var8 = var6.TextWithIOSLinkWorkaround;
            var6 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var17 = var12.hint;
            var6['style'] = var17;
            var17 = var19[var21];
            var17 = var18.bind(var4)(var17);
            var22 = var17.intl;
            var20 = var22.format;
            var17 = var19[var21];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.2bprXx;
            var17 = {};
            var23 = _closure1_slot6;
            var23 = var23.GUIDELINES;
            var17['guidelinesURL'] = var23;
            var17 = var20.bind(var22)(var18, var17);
            var6['children'] = var17;
            var6 = var13.bind(var4)(var8, var6);
            var5[5] = var6;
            var18 = _closure1_slot1;
            var17 = 15;
            var6 = var19[var17];
            var8 = var18.bind(var4)(var6);
            var6 = {};
            var20 = var9.name;
            var9 = '';
            var20 = var9 === var20;
            var6['disabled'] = var20;
            var20 = true;
            var6['shrink'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Sizes;
            var17 = var17.MEDIUM;
            var6['size'] = var17;
            var17 = var12.createButton;
            var6['style'] = var17;
            if(!(var10 == var16)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.O0p/lS;
            var16 = var18.bind(var19)(var17);
case 20:
            var6['text'] = var16;
            var6['onPress'] = var15;
            var6['loading'] = var14;
            var6 = var13.bind(var4)(var8, var6);
            var5[6] = var6;
            var8 = var10 == var11;
            var6 = undefined;
            if(var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = var11.getFirstFieldErrorMessage;
            var8 = 'name';
            var6 = var13.bind(var11)(var8);
case 22:
            var8 = var10 == var6;
            var6 = null;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var10 == var11;
            var8 = undefined;
            if(var13) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var11.message;
case 26:
            var8 = var10 != var8;
            var6 = null;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 28:
            var13 = var10 == var11;
            var8 = undefined;
            if(var13) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = var11.message;
case 29:
            var6 = null;
            if(!(var9 !== var8)) { _fun0001_ip = 24; continue _fun0001 }
case 31:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 16;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var12.error;
            var7['style'] = var12;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = var11.message;
case 32:
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5[7] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();