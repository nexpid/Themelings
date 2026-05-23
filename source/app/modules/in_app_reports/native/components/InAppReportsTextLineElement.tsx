// app/modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.Linking;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 16;
    var9 = {'marginBottom': 16, 'paddingHorizontal': 16};
    var4['container'] = var9;
    var9 = {};
    var13 = 8;
    var9['marginBottom'] = var13;
    var4['header'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['description'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var13;
    var4['trailingButtonContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['smsInfoContainer'] = var9;
    var9 = {'flex': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'backgroundColor': null, 'marginBottom': 8};
    var10 = 7;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var9['borderColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var14;
    var4['smsNumberContainer'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_POSITIVE_BACKGROUND;
    var9['borderColor'] = var14;
    var4['smsNumberContainerSuccess'] = var9;
    var9 = {};
    var13 = var6[var13];
    var13 = var11.bind(var1)(var13);
    var12 = var12.DISPLAY_SEMIBOLD;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.INTERACTIVE_TEXT_ACTIVE;
    var10 = 14;
    var16 = var13.bind(var1)(var12, var11, var10);
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var4['smsNumberText'] = var9;
    var9 = {'paddingHorizontal': 12, 'marginBottom': 8, 'marginLeft': 12};
    var4['startButtonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TextLineElement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.element;
            var1 = var1.data;
            var20 = var1.title;
            var18 = var1.body;
            var11 = var1.sms;
            var _closure2_slot0 = var11;
            var2 = var1.sms_body;
            var _closure2_slot1 = var2;
            var1 = var1.is_localized;
            var2 = _closure1_slot11;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var2 = false;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot5;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var19 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getParser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var4)(var2);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            return var1;
case 2:
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var7 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 11;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.isIOS;
                            var2 = var2.bind(var5)();
                            var10 = '?';
                            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var2 = 12;
                            var2 = var6[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.getSystemVersionMajor;
                            var5 = var2.bind(var5)();
                            var2 = 8;
                            var5 = var5 < var2;
                            var2 = '&';
                            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var2 = ';';
case 8:
                            var10 = var2;
case 6:
                            var6 = global;
                            var2 = var6.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'sms:';
                            var5 = var5.bind(var2)(var7);
                            var2 = null;
                            var7 = var2 != var8;
                            var9 = '';
                            var2 = var9;
                            if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var7 = var6.encodeURIComponent;
                            var8 = var7.bind(var3)(var8);
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = 'body=';
                            var2 = var7.bind(var9)(var10, var6, var8);
case 10:
                            var6 = var5 + var2;
                            var5 = _closure1_slot8;
                            var2 = var5.canOpenURL;
                            var2 = var2.bind(var5)(var6);
                            SaveGenerator(address=214);
case 12:
                            return var2;
case 13:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var4 = 13;
                            var4 = var7[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.openURL;
                            var4 = var4.bind(var5)(var6);
case 16:
                            return var3;
case 14:
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var13 = var1.bind(var4)();
            if(var19) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = {};
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var9 = var14.smsNumberContainerSuccess;
case 20:
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var14.container;
            var1['style'] = var5;
            var10 = _closure1_slot9;
            var16 = _closure1_slot0;
            var15 = _closure1_slot3;
            var6 = 14;
            var5 = var15[var6];
            var5 = var16.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header'};
            var21 = var14.header;
            var5['style'] = var21;
            var5['children'] = var20;
            var7 = var10.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var6 = var15[var6];
            var6 = var16.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var20 = var14.description;
            var6['style'] = var20;
            var20 = 'text-md/medium';
            var6['variant'] = var20;
            var8 = var8.bind(var4)(var18);
            var6['children'] = var8;
            var6 = var10.bind(var4)(var7, var6);
            var5[1] = var6;
            var6 = {};
            var7 = var14.smsInfoContainer;
            var6['style'] = var7;
            var7 = {};
            var18 = var14.smsNumberContainer;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var9;
            var7['style'] = var8;
            var8 = 15;
            var8 = var15[var8];
            var8 = var16.bind(var4)(var8);
            var9 = var8.LegacyText;
            var8 = {};
            var18 = var14.smsNumberText;
            var8['style'] = var18;
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var11 = var14.trailingButtonContainer;
            var9['style'] = var11;
            var11 = 16;
            var15 = var15[var11];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {};
            var23 = _closure1_slot0;
            var20 = _closure1_slot3;
            var18 = 17;
            var21 = var20[var18];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var18];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            if(var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var19 = var20.OpuAlK;
            var19 = var21.bind(var22)(var19);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var20 = var20.t5VZ88;
            var19 = var21.bind(var22)(var20);
case 23:
            var15['text'] = var19;
            var19 = 'sm';
            var15['size'] = var19;
            var17 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 18;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.copy;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                var3 = 19;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.presentCopiedToClipboard;
                var3 = var3.bind(var4)();
                var3 = _closure2_slot2;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onPress'] = var17;
            var17 = 'secondary';
            var15['variant'] = var17;
            var15 = var10.bind(var4)(var16, var15);
            var9['children'] = var15;
            var9 = var10.bind(var4)(var2, var9);
            var8[1] = var9;
            var7['children'] = var8;
            var8 = var3.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot9;
            var9 = _closure1_slot7;
            var8 = {};
            var14 = var14.startButtonContainer;
            var8['style'] = var14;
            var17 = _closure1_slot0;
            var14 = _closure1_slot3;
            var11 = var14[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.BDYHSe;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var14 = 'md';
            var11['size'] = var14;
            var11['onPress'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();