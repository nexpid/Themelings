// app/modules/nuf/native/components/ChannelPrompt.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var11;
    var4['flex'] = var9;
    var9 = {};
    var13 = 8;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.NAV_BAR_HEIGHT;
    var9['marginTop'] = var13;
    var9['flex'] = var11;
    var4['safePadding'] = var9;
    var9 = {};
    var11 = 16;
    var9['paddingHorizontal'] = var11;
    var4['contentContainer'] = var9;
    var9 = {};
    var11 = 'center';
    var9['alignSelf'] = var11;
    var4['guildIcon'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['guildName'] = var9;
    var9 = {'marginTop': 16, 'textAlign': 'center'};
    var4['title'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['subTitle'] = var9;
    var9 = {};
    var11 = 24;
    var9['marginTop'] = var11;
    var4['topicInput'] = var9;
    var9 = {'marginTop': 8, 'width': '100%'};
    var4['button'] = var9;
    var9 = {'position': 'absolute', 'bottom': 16, 'alignSelf': 'center'};
    var4['skipContainer'] = var9;
    var9 = {'fontSize': 16, 'color': null, 'textAlign': 'center'};
    var11 = 9;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var9['color'] = var11;
    var4['skipText'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/ChannelPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelPrompt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var7 = var3.guildId;
            var _closure2_slot0 = var7;
            var19 = var3.buttonText;
            var12 = var3.hasBack;
            var _closure2_slot1 = var12;
            var9 = var3.hasSkip;
            var _closure2_slot2 = var9;
            var2 = var3.onCancel;
            var _closure2_slot3 = var2;
            var6 = var3.onSuccess;
            var _closure2_slot4 = var6;
            var3 = _closure1_slot11;
            var5 = undefined;
            var15 = var3.bind(var5)();
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 10;
            var3 = var13[var3];
            var14 = var8.bind(var5)(var3);
            var10 = var14.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var10.bind(var14)(var4, var3);
            var4 = _closure1_slot5;
            var10 = var4.useState;
            var3 = '';
            var3 = var10.bind(var4)(var3);
            var20 = _closure1_slot4;
            var16 = 2;
            var3 = var20.bind(var5)(var3, var16);
            var10 = 0;
            var22 = var3[var10];
            var _closure2_slot5 = var22;
            var18 = 1;
            var21 = var3[var18];
            var14 = var4.useState;
            var3 = false;
            var3 = var14.bind(var4)(var3);
            var3 = var20.bind(var5)(var3, var16);
            var17 = var3[var10];
            var3 = var3[var18];
            var _closure2_slot6 = var3;
            var3 = var4.useState;
            var14 = null;
            var3 = var3.bind(var4)(var14);
            var3 = var20.bind(var5)(var3, var16);
            var16 = var3[var10];
            var3 = var3[var18];
            var _closure2_slot7 = var3;
            var3 = 11;
            var3 = var13[var3];
            var8 = var8.bind(var5)(var3);
            var3 = var8.useNavigation;
            var13 = var3.bind(var8)();
            var _closure2_slot8 = var13;
            var8 = var4.useLayoutEffect;
            var3 = new Array(5);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var9;
            var3[3] = var2;
            var3[4] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot8;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot1;
                    if(var6) { _fun0002_ip = 33; continue _fun0002 }
 24:
                    var6 = function() {
                        var1 = null;
                        return var1;
                    };
                    _fun0002_ip = 73; continue _fun0002;
 33:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 12;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.getHeaderBackButton;
                    var7 = _closure2_slot3;
                    var6 = var8.bind(var9)(var7);
 73:
                    var1['headerLeft'] = var6;
                    var6 = _closure2_slot2;
                    if(var6) { _fun0002_ip = 94; continue _fun0002 }
 85:
                    var4 = function() {
                        var1 = null;
                        return var1;
                    };
                    _fun0002_ip = 182; continue _fun0002;
 94:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 12;
                    var6 = var13[var6];
                    var11 = undefined;
                    var8 = var12.bind(var11)(var6);
                    var7 = var8.getHeaderTextButton;
                    var6 = 13;
                    var9 = var13[var6];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var11)(var6);
                    var6 = var6.t;
                    var6 = var6.5WxrcX;
                    var6 = var9.bind(var10)(var6);
                    var5 = _closure2_slot4;
                    var4 = var7.bind(var8)(var6, var5);
 182:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var4)(var2, var3);
            var3 = var4.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 292; continue _fun0003 }
 10:
                        var2 = undefined;
                        var11 = undefined;
                        var5 = undefined;
                        var4 = _closure2_slot7;
                        var12 = null;
                        var4 = var4.bind(var2)(var12);
                        var6 = _closure2_slot6;
                        var4 = true;
                        var4 = var6.bind(var2)(var4);
                        var8 = _closure1_slot7;
                        var7 = var8.getDefaultChannel;
                        var6 = _closure2_slot0;
                        var11 = var7.bind(var8)(var6);
 63: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 13;
                        var9 = var8[var6];
                        var9 = var7.bind(var2)(var9);
                        var13 = var9.intl;
                        var9 = var13.formatToPlainString;
                        var6 = var8[var6];
                        var6 = var7.bind(var2)(var6);
                        var6 = var6.t;
                        var7 = var6.V4lepK;
                        var6 = {};
                        var10 = _closure2_slot5;
                        var6['topic'] = var10;
                        var5 = var9.bind(var13)(var7, var6);
                        var7 = _closure1_slot1;
                        var6 = 14;
                        var6 = var8[var6];
                        var9 = var7.bind(var2)(var6);
                        var8 = var9.createTextChannel;
                        var7 = _closure2_slot0;
                        var6 = var11;
                        var12 = var12 == var6;
                        var6 = undefined;
                        if(var12) { _fun0003_ip = 176; continue _fun0003 }
 170:
                        var6 = var11.parent_id;
 176:
                        var15 = var5;
                        var19 = var9;
                        var18 = var7;
                        var17 = var10;
                        var16 = var6;
                        var5 = var19[var8](var18, var17, var16, var15, var14);
                        SaveGenerator(address=199);
 197:
                        return var5;
 199:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 215; continue _fun0003 }
 205:
                        var6 = _closure2_slot4;
                        var6 = var6.bind(var2)();
 213: // try_end0
                        _fun0003_ip = 278; continue _fun0003;
 215:
                        return var5;
 218: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure2_slot7;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 15;
                        var4 = var8[var4];
                        var4 = var6.bind(var2)(var4);
                        var4 = var4.APIError;
                        var6 = var4.prototype;
                        var6 = Object.create(var6, {constructor: {value: var4}});
                        var19 = var6;
                        var18 = var7;
                        var4 = new var19[var4](var18, var17);
                        var4 = var4 instanceof Object ? var4 : var6;
                        var4 = var5.bind(var2)(var4);
 278:
                        var4 = _closure2_slot6;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 292:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var1 = new Array(3);
            var1[0] = var7;
            var1[1] = var6;
            var1[2] = var22;
            var18 = var3.bind(var4)(var2, var1);
            var2 = var14 == var25;
            var1 = null;
            if(var2) { _fun0001_ip = 1280; continue _fun0001 }
 355:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 16;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var23 = true;
            var2['top'] = var23;
            var6 = var15.safePadding;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {'style': null, 'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var9 = var15.flex;
            var6['style'] = var9;
            var9 = {};
            var9['top'] = var10;
            var6['contentInset'] = var9;
            var9 = var15.contentContainer;
            var6['contentContainerStyle'] = var9;
            var10 = _closure1_slot1;
            var9 = 17;
            var9 = var12[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var12 = var15.guildIcon;
            var9['style'] = var12;
            var12 = var25.name;
            var9['value'] = var12;
            var12 = var25.icon;
            var13 = var14 != var12;
            var12 = null;
            if(!var13) { _fun0001_ip = 573; continue _fun0001 }
 510:
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var13 = 18;
            var13 = var24[var13];
            var24 = var20.bind(var5)(var13);
            var20 = var24.getGuildIconURL;
            var13 = {};
            var26 = var25.id;
            var13['id'] = var26;
            var26 = var25.icon;
            var13['icon'] = var26;
            var13['canAnimate'] = var23;
            var26 = 128;
            var13['size'] = var26;
            var12 = var20.bind(var24)(var13);
 573:
            var9['icon'] = var12;
            var9['selected'] = var23;
            var10 = var4.bind(var5)(var10, var9);
            var9 = new Array(7);
            var9[0] = var10;
            var13 = _closure1_slot9;
            var27 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 19;
            var12 = var24[var10];
            var12 = var27.bind(var5)(var12);
            var20 = var12.Text;
            var12 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var26 = var15.guildName;
            var12['style'] = var26;
            var25 = var25.name;
            var12['children'] = var25;
            var12 = var13.bind(var5)(var20, var12);
            var9[1] = var12;
            var12 = var24[var10];
            var12 = var27.bind(var5)(var12);
            var25 = var12.Text;
            var12 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var20 = var15.title;
            var12['style'] = var20;
            var20 = 13;
            var26 = var24[var20];
            var26 = var27.bind(var5)(var26);
            var29 = var26.intl;
            var28 = var29.string;
            var26 = var24[var20];
            var26 = var27.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.8VRa7e;
            var26 = var28.bind(var29)(var26);
            var12['children'] = var26;
            var12 = var13.bind(var5)(var25, var12);
            var9[2] = var12;
            var10 = var24[var10];
            var10 = var27.bind(var5)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var25 = var15.subTitle;
            var10['style'] = var25;
            var25 = var24[var20];
            var25 = var27.bind(var5)(var25);
            var28 = var25.intl;
            var26 = var28.string;
            var25 = var24[var20];
            var25 = var27.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.+855Pj;
            var25 = var26.bind(var28)(var25);
            var10['children'] = var25;
            var10 = var13.bind(var5)(var12, var10);
            var9[3] = var10;
            var12 = _closure1_slot1;
            var10 = 20;
            var10 = var24[var10];
            var12 = var12.bind(var5)(var10);
            var10 = {};
            var25 = var15.topicInput;
            var10['style'] = var25;
            var25 = var24[var20];
            var25 = var27.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var20];
            var24 = var27.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.bY20tb;
            var24 = var25.bind(var26)(var24);
            var10['label'] = var24;
            var10['value'] = var22;
            var24 = var14 == var16;
            var22 = undefined;
            if(var24) { _fun0001_ip = 978; continue _fun0001 }
 963:
            var25 = var16.getFirstFieldErrorMessage;
            var24 = 'name';
            var22 = var25.bind(var16)(var24);
 978:
            var10['error'] = var22;
            var10['onChangeText'] = var21;
            var10['onSubmitEditing'] = var18;
            var21 = 100;
            var10['maxLength'] = var21;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var21 = var22[var20];
            var21 = var25.bind(var5)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var20 = var22[var20];
            var20 = var25.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.xGOYAw;
            var20 = var21.bind(var24)(var20);
            var10['placeholder'] = var20;
            var20 = 'done';
            var10['returnKeyType'] = var20;
            var10['autoFocus'] = var23;
            var10 = var13.bind(var5)(var12, var10);
            var9[4] = var10;
            var13 = _closure1_slot9;
            var21 = _closure1_slot1;
            var20 = 21;
            var10 = var22[var20];
            var12 = var21.bind(var5)(var10);
            var10 = {};
            var10['shrink'] = var23;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.Sizes;
            var20 = var20.MEDIUM;
            var10['size'] = var20;
            var20 = var15.button;
            var10['style'] = var20;
            var10['text'] = var19;
            var10['onPress'] = var18;
            var10['loading'] = var17;
            var10 = var13.bind(var5)(var12, var10);
            var9[5] = var10;
            var12 = var14 != var16;
            var10 = null;
            if(!var12) { _fun0001_ip = 1256; continue _fun0001 }
 1177:
            var12 = var16.hasFieldErrors;
            var12 = var12.bind(var16)();
            var10 = null;
            if(!var12) { _fun0001_ip = 1256; continue _fun0001 }
 1192:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 22;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var15 = var15.error;
            var11['style'] = var15;
            var15 = var14 == var16;
            var14 = undefined;
            if(var15) { _fun0001_ip = 1246; continue _fun0001 }
 1236:
            var15 = var16.getAnyErrorMessage;
            var14 = var15.bind(var16)();
 1246:
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 1256:
            var9[6] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1280:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();