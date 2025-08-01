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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MarketingURLs;
    var _closure1_slot5 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'backgroundColor': null, 'paddingHorizontal': 16, 'paddingBottom': 16};
    var11 = 6;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOBILE_PRIMARY;
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
    var9['marginTop'] = var13;
    var4['error'] = var9;
    var9 = {'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'borderStyle': 'solid', 'borderRadius': null, 'marginBottom': 8, 'paddingHorizontal': 8, 'paddingVertical': 8};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var9['color'] = var13;
    var4['hubInput'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 8};
    var4['hubLabel'] = var9;
    var9 = {'fontSize': 12, 'color': null, 'marginBottom': 16};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var9['color'] = var11;
    var4['hubHint'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 16};
    var4['staffOnly'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['hint'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/CreateGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CreateGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.guild;
            var25 = var1.onIconPress;
            var23 = var1.onNameChange;
            var19 = var1.onStaffOnlyChange;
            var15 = var1.onCreate;
            var14 = var1.submitting;
            var11 = var1.error;
            var18 = var1.customTitle;
            var21 = var1.customDescription;
            var16 = var1.customButtonLabel;
            var22 = var1.autoFocus;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 85; continue _fun0001 }
 83:
            var22 = true;
 85:
            var1 = _closure1_slot8;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var10 = null;
            var8 = var10 == var2;
            if(var8) { _fun0001_ip = 131; continue _fun0001 }
 118:
            var1 = var2.isStaff;
            var1 = var1.bind(var2)();
            var8 = !var1;
 131:
            var6 = !var8;
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {'style': null, 'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var5 = var12.flex;
            var1['style'] = var5;
            var5 = {};
            var13 = 0;
            var5['top'] = var13;
            var1['contentInset'] = var5;
            var20 = false;
            var5 = var12.contentContainer;
            var1['contentContainerStyle'] = var5;
            var17 = _closure1_slot6;
            var13 = _closure1_slot0;
            var5 = _closure1_slot2;
            var24 = 7;
            var5 = var5[var24];
            var5 = var13.bind(var4)(var5);
            var13 = var5.Text;
            var5 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var26 = var12.header;
            var5['style'] = var26;
            if(!(var10 == var18)) { _fun0001_ip = 309; continue _fun0001 }
 252:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 8;
            var27 = var30[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.XioBx8;
            var18 = var27.bind(var28)(var26);
 309:
            var5['children'] = var18;
            var13 = var17.bind(var4)(var13, var5);
            var5 = new Array(8);
            var5[0] = var13;
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var24];
            var13 = var17.bind(var4)(var13);
            var17 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var24 = var12.description;
            var13['style'] = var24;
            if(!(var10 == var21)) { _fun0001_ip = 437; continue _fun0001 }
 382:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 8;
            var26 = var29[var24];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var24 = var29[var24];
            var24 = var28.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24./k/L/v;
            var21 = var26.bind(var27)(var24);
 437:
            var13['children'] = var21;
            var13 = var18.bind(var4)(var17, var13);
            var5[1] = var13;
            var18 = _closure1_slot6;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var13 = 9;
            var13 = var24[var13];
            var21 = var17.bind(var4)(var13);
            var13 = {};
            var26 = var12.contentContainer;
            var26 = var26.backgroundColor;
            var13['iconBackgroundColor'] = var26;
            var26 = var12.iconUploader;
            var13['style'] = var26;
            var13['onPress'] = var25;
            var25 = var9.icon;
            var13['icon'] = var25;
            var13 = var18.bind(var4)(var21, var13);
            var5[2] = var13;
            var13 = 10;
            var13 = var24[var13];
            var17 = var17.bind(var4)(var13);
            var13 = {};
            var27 = _closure1_slot0;
            var21 = 8;
            var25 = var24[var21];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var21];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.dBih7e;
            var24 = var25.bind(var26)(var24);
            var13['label'] = var24;
            var25 = var10 == var11;
            var24 = undefined;
            if(var25) { _fun0001_ip = 619; continue _fun0001 }
 604:
            var26 = var11.getFirstFieldErrorMessage;
            var25 = 'name';
            var24 = var26.bind(var11)(var25);
 619:
            var13['error'] = var24;
            var24 = var9.name;
            var13['value'] = var24;
            var13['onChangeText'] = var23;
            var13['autoFocus'] = var22;
            var13['autoCorrect'] = var20;
            var20 = 'done';
            var13['returnKeyType'] = var20;
            var13 = var18.bind(var4)(var17, var13);
            var5[3] = var13;
            if(var8) { _fun0001_ip = 803; continue _fun0001 }
 672:
            var17 = _closure1_slot6;
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 11;
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
            var18 = var18.edQ5vb;
            var18 = var19.bind(var20)(var18);
            var8['subLabel'] = var18;
            var6 = var17.bind(var4)(var13, var8);
 803:
            var5[4] = var6;
            var13 = _closure1_slot6;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 12;
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
            var18 = var17.2bprX1;
            var17 = {};
            var23 = _closure1_slot5;
            var23 = var23.GUIDELINES;
            var17['guidelinesURL'] = var23;
            var17 = var20.bind(var22)(var18, var17);
            var6['children'] = var17;
            var6 = var13.bind(var4)(var8, var6);
            var5[5] = var6;
            var18 = _closure1_slot1;
            var17 = 13;
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
            if(!(var10 == var16)) { _fun0001_ip = 1072; continue _fun0001 }
 1020:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.O0p/lZ;
            var16 = var18.bind(var19)(var17);
 1072:
            var6['text'] = var16;
            var6['onPress'] = var15;
            var6['loading'] = var14;
            var6 = var13.bind(var4)(var8, var6);
            var5[6] = var6;
            var8 = var10 == var11;
            var6 = undefined;
            if(var8) { _fun0001_ip = 1119; continue _fun0001 }
 1104:
            var13 = var11.getFirstFieldErrorMessage;
            var8 = 'name';
            var6 = var13.bind(var11)(var8);
 1119:
            var8 = var10 == var6;
            var6 = null;
            if(!var8) { _fun0001_ip = 1230; continue _fun0001 }
 1128:
            var13 = var10 == var11;
            var8 = undefined;
            if(var13) { _fun0001_ip = 1142; continue _fun0001 }
 1137:
            var8 = var11.message;
 1142:
            var8 = var10 != var8;
            var6 = null;
            if(!var8) { _fun0001_ip = 1230; continue _fun0001 }
 1151:
            var13 = var10 == var11;
            var8 = undefined;
            if(var13) { _fun0001_ip = 1165; continue _fun0001 }
 1160:
            var8 = var11.message;
 1165:
            var6 = null;
            if(!(var9 !== var8)) { _fun0001_ip = 1230; continue _fun0001 }
 1171:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 14;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var12.error;
            var7['style'] = var12;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 1220; continue _fun0001 }
 1215:
            var10 = var11.message;
 1220:
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1230:
            var5[7] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();