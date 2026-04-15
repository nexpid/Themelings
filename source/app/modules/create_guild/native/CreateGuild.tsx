// app/modules/create_guild/native/CreateGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MarketingURLs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var4['flex'] = var10;
    var7['flex'] = var4;
    var4 = {'backgroundColor': null, 'paddingHorizontal': 16, 'paddingBottom': 16};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var4['backgroundColor'] = var10;
    var7['contentContainer'] = var4;
    var4 = {};
    var10 = 'center';
    var4['textAlign'] = var10;
    var7['header'] = var4;
    var4 = 18;
    var10 = {'lineHeight': 18, 'textAlign': 'center', 'marginBottom': 24};
    var7['description'] = var10;
    var10 = {'alignSelf': 'center', 'marginBottom': 4};
    var7['iconUploader'] = var10;
    var10 = {};
    var11 = 8;
    var10['marginBottom'] = var11;
    var7['hint'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/CreateGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CreateGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.guild;
            var23 = var2.onIconPress;
            var27 = var2.onNameChange;
            var22 = var2.onStaffOnlyChange;
            var17 = var2.onCreate;
            var16 = var2.submitting;
            var14 = var2.error;
            var19 = var2.customTitle;
            var28 = var2.customDescription;
            var18 = var2.customButtonLabel;
            var25 = var2.autoFocus;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var25 = true;
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot9;
            var21 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var13 = null;
            var11 = var13 == var3;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.isStaff;
            var2 = var2.bind(var3)();
            var11 = !var2;
case 4:
            var9 = !var11;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var26 = var2.bind(var3)();
            _closure2_slot0 = var26;
            var5 = _closure1_slot3;
            var2 = var5.useRef;
            var20 = var2.bind(var5)(var13);
            _closure2_slot1 = var20;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var26;
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
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {'style': null, 'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var5 = var21.flex;
            var1['style'] = var5;
            var5 = {};
            var6 = 0;
            var5['top'] = var6;
            var1['contentInset'] = var5;
            var24 = false;
            var5 = var21.contentContainer;
            var1['contentContainerStyle'] = var5;
            var7 = _closure1_slot8;
            var5 = 9;
            var5 = var8[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var29 = 10;
            var8 = var8[var29];
            var8 = var15.bind(var4)(var8);
            var15 = var8.Text;
            var8 = {'ref': null, 'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var8['ref'] = var20;
            var20 = var21.header;
            var8['style'] = var20;
            if(!(var13 == var19)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var20 = 11;
            var30 = var33[var20];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var20 = var33[var20];
            var20 = var32.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.XioBx6;
            var19 = var30.bind(var31)(var20);
case 10:
            var8['children'] = var19;
            var15 = var3.bind(var4)(var15, var8);
            var8 = new Array(8);
            var8[0] = var15;
            var20 = _closure1_slot7;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var29];
            var15 = var19.bind(var4)(var15);
            var19 = var15.Text;
            var15 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var29 = var21.description;
            var15['style'] = var29;
            if(!(var13 == var28)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 11;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29["/k/L/j"];
            var28 = var30.bind(var31)(var29);
case 12:
            var15['children'] = var28;
            var15 = var20.bind(var4)(var19, var15);
            var8[1] = var15;
            var20 = _closure1_slot7;
            var19 = _closure1_slot1;
            var28 = _closure1_slot2;
            var15 = 12;
            var15 = var28[var15];
            var19 = var19.bind(var4)(var15);
            var15 = {};
            var29 = var21.contentContainer;
            var29 = var29.backgroundColor;
            var15['iconBackgroundColor'] = var29;
            var29 = var21.iconUploader;
            var15['style'] = var29;
            var15['onPress'] = var23;
            var23 = var12.icon;
            var15['icon'] = var23;
            var15 = var20.bind(var4)(var19, var15);
            var8[2] = var15;
            var31 = _closure1_slot0;
            var15 = 13;
            var15 = var28[var15];
            var15 = var31.bind(var4)(var15);
            var19 = var15.TextInput;
            var15 = {};
            var23 = true;
            var15['isClearable'] = var23;
            var23 = 11;
            var29 = var28[var23];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var23];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.dBih7e;
            var28 = var29.bind(var30)(var28);
            var15['label'] = var28;
            var29 = var13 == var14;
            var28 = undefined;
            if(var29) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var30 = var14.getFirstFieldErrorMessage;
            var29 = 'name';
            var28 = var30.bind(var14)(var29);
case 14:
            var15['errorMessage'] = var28;
            var28 = var12.name;
            var15['value'] = var28;
            var15['onChange'] = var27;
            if(!var25) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var25 = !var26;
case 16:
            var15['autoFocus'] = var25;
            var15['autoCorrect'] = var24;
            var24 = 'done';
            var15['returnKeyType'] = var24;
            var15 = var20.bind(var4)(var19, var15);
            var8[3] = var15;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = _closure1_slot7;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 14;
            var11 = var20[var11];
            var11 = var25.bind(var4)(var11);
            var15 = var11.TableSwitchRow;
            var11 = {'onValueChange': null, 'value': null, 'start': true, 'end': true, 'label': 'Staff Only'};
            var11['onValueChange'] = var22;
            var22 = var12.staffOnly;
            var11['value'] = var22;
            var22 = var20[var23];
            var22 = var25.bind(var4)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var20 = var20[var23];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.edQ5va;
            var20 = var22.bind(var24)(var20);
            var11['subLabel'] = var20;
            var9 = var19.bind(var4)(var15, var11);
case 18:
            var8[4] = var9;
            var15 = _closure1_slot7;
            var11 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 15;
            var9 = var19[var9];
            var9 = var11.bind(var4)(var9);
            var20 = var9.TextWithIOSLinkWorkaround;
            var9 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var21 = var21.hint;
            var9['style'] = var21;
            var21 = var19[var23];
            var21 = var11.bind(var4)(var21);
            var25 = var21.intl;
            var24 = var25.format;
            var21 = var19[var23];
            var21 = var11.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21["2bprXx"];
            var21 = {};
            var26 = _closure1_slot6;
            var26 = var26.GUIDELINES;
            var21['guidelinesURL'] = var26;
            var21 = var24.bind(var25)(var22, var21);
            var9['children'] = var21;
            var9 = var15.bind(var4)(var20, var9);
            var8[5] = var9;
            var9 = 16;
            var9 = var19[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Button;
            var9 = {'disabled': null, 'size': 'md', 'grow': true};
            var19 = var12.name;
            var12 = '';
            var19 = var12 === var19;
            var9['disabled'] = var19;
            if(!(var13 == var18)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.O0p/lS;
            var18 = var20.bind(var21)(var19);
case 20:
            var9['text'] = var18;
            var9['onPress'] = var17;
            var9['loading'] = var16;
            var9 = var15.bind(var4)(var11, var9);
            var8[6] = var9;
            var11 = var13 == var14;
            var9 = undefined;
            if(var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var15 = var14.getFirstFieldErrorMessage;
            var11 = 'name';
            var9 = var15.bind(var14)(var11);
case 22:
            var11 = var13 == var9;
            var9 = null;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var15 = var13 == var14;
            var11 = undefined;
            if(var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var11 = var14.message;
case 26:
            var11 = var13 != var11;
            var9 = null;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 28:
            var15 = var13 == var14;
            var11 = undefined;
            if(var15) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var11 = var14.message;
case 29:
            var9 = null;
            if(!(var12 !== var11)) { _fun0001_ip = 24; continue _fun0001 }
case 31:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 17;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var13 = var14.message;
case 32:
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 24:
            var8[7] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();