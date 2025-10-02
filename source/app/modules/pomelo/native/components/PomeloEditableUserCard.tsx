// app/modules/pomelo/native/components/PomeloEditableUserCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ImageBackground;
    var _closure1_slot3 = var8;
    var8 = var4.Image;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_DISPLAY_NAME_LENGTH;
    var _closure1_slot7 = var4;
    var16 = 4;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EditState;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.Fonts;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.generateBoxShadowStyle;
    var4 = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000000', 'shadowOpacity': 0.1, 'shadowRadius': 16, 'elevation': 24, 'shadowColorAndroid': '#000000'};
    var10 = var8.bind(var9)(var4);
    var12 = 8;
    var4 = var6[var12];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = {};
    var13 = 9;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var11['borderRadius'] = var17;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var17;
    var17 = 'hidden';
    var11['overflow'] = var17;
    var4['container'] = var11;
    var4['shadow'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'flex-start', 'marginBottom': 14};
    var4['header'] = var10;
    var10 = {};
    var11 = 10;
    var10['marginRight'] = var11;
    var4['body'] = var10;
    var10 = {'width': 24, 'height': 24, 'marginTop': 36};
    var4['legacyUsernameBadge'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967290, 'left': 4294967290, 'backgroundColor': null, 'borderRadius': 46, 'width': 92, 'height': 92};
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var17;
    var4['avatarBorder'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': 64, 'overflow': 'hidden'};
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var10['borderTopLeftRadius'] = var17;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var10['borderTopRightRadius'] = var17;
    var4['banner'] = var10;
    var10 = {};
    var10['marginBottom'] = var16;
    var4['label'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var4['bannerImage'] = var10;
    var10 = {};
    var16 = '95%';
    var10['width'] = var16;
    var4['outerContainer'] = var10;
    var10 = {'marginTop': 40, 'marginLeft': 24, 'marginRight': 14, 'marginBottom': 24};
    var4['content'] = var10;
    var10 = {'padding': 0, 'width': '100%'};
    var4['textInput'] = var10;
    var10 = {'fontFamily': null, 'fontSize': 24, 'lineHeight': 30, 'fontWeight': '700'};
    var15 = var15.PRIMARY_BOLD;
    var10['fontFamily'] = var15;
    var4['input'] = var10;
    var10 = {};
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DANGER;
    var10['color'] = var13;
    var4['error'] = var10;
    var10 = {};
    var10['marginTop'] = var12;
    var4['footer'] = var10;
    var10 = {};
    var12 = var6[var11];
    var12 = var5.bind(var1)(var12);
    var12 = var12.DARK_BLACK_500_LIGHT_BLACK_300;
    var10['shadowColor'] = var12;
    var4['shadowAndroid'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_PRIMARY_700_LIGHT_WHITE_500;
    var10['backgroundColor'] = var11;
    var4['cardBackground'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.style;
            var17 = var1.label;
            var11 = var1.value;
            var13 = var1.keyboardType;
            var12 = var1.secureTextEntry;
            var9 = var1.onChangeText;
            var10 = var1.maxLength;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot7;
case 2:
            var1 = _closure1_slot12;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 11;
            var5 = var16[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var18 = var14.label;
            var5['style'] = var18;
            var5['children'] = var17;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 12;
            var6 = var16[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TextInput;
            var6 = {'style': null, 'autoCapitalize': 'none', 'autoComplete': 'off', 'autoFocus': true, 'autoCorrect': false};
            var16 = var14.textInput;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var6['style'] = var14;
            var6['keyboardType'] = var13;
            var6['secureTextEntry'] = var12;
            var6['value'] = var11;
            var6['maxLength'] = var10;
            var6['onChangeText'] = var9;
            var9 = arg2;
            var6['ref'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.forwardRef;
    var2 = function PomeloEditableUserCard(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var18 = arg1;
            var1 = _closure1_slot12;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var23 = var18.user;
            var _closure2_slot0 = var23;
            var2 = var18.displayName;
            var5 = var18.username;
            var1 = var18.onChangeDisplayName;
            var3 = var18.onChangeUsername;
            var36 = var18.editState;
            var19 = var18.validation;
            var16 = var18.animatedStyles;
            var6 = _closure1_slot8;
            var6 = var6.EDIT_DISPLAY_NAME;
            var41 = var36 === var6;
            if(!var41) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var19.displayName;
            var7 = null;
            var8 = var7 == var6;
            var7 = undefined;
            if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = var6.type;
case 6:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 13;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.NameValidationState;
            var6 = var6.ERROR;
            var41 = var7 === var6;
case 4:
            if(var41) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot8;
            var6 = var6.EDIT_USERNAME;
            var6 = var36 === var6;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = var19.username;
            var8 = null;
            var9 = var8 == var7;
            var8 = undefined;
            if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var7.type;
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 13;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.NameValidationState;
            var7 = var7.ERROR;
            var6 = var8 === var7;
case 10:
            var41 = var6;
case 8:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 14;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var23.id;
            var10 = var7.bind(var4)(var6);
            var40 = null;
            var6 = var40 == var10;
            var8 = undefined;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = var10.getBannerURL;
            var6 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 15;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.GifAutoPlay;
            var9 = var11.getSetting;
            var9 = var9.bind(var11)();
            var6['canAnimate'] = var9;
            var9 = 600;
            var6['size'] = var9;
            var8 = var7.bind(var10)(var6);
case 14:
            var6 = var40 != var8;
            var21 = null;
            if(!var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 16;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.makeSource;
            var21 = var6.bind(var7)(var8);
case 16:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 17;
            var6 = var7[var6];
            var9 = var8.bind(var4)(var6);
            var11 = _closure1_slot0;
            var6 = 18;
            var6 = var7[var6];
            var13 = var11.bind(var4)(var6);
            var12 = var13.getUserAvatarURLForPomelo;
            var6 = false;
            var6 = var12.bind(var13)(var23, var6);
            var22 = var9.bind(var4)(var6, var10);
            var6 = 19;
            var9 = var7[var6];
            var10 = var8.bind(var4)(var9);
            var9 = var10.useName;
            var37 = var9.bind(var10)(var23);
            var6 = var7[var6];
            var9 = var8.bind(var4)(var6);
            var8 = var9.useUserTag;
            var6 = {'mode': 'username', 'identifiable': 'always'};
            var34 = var8.bind(var9)(var23, var6);
            var6 = _closure1_slot8;
            var8 = var6.PREVIEW;
            var26 = var36 === var8;
            var8 = 20;
            var8 = var7[var8];
            var12 = var11.bind(var4)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUserProfile;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var12)(var9, var8);
            var _closure2_slot1 = var8;
            var8 = 21;
            var9 = var7[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.9AjdkJ;
            var7 = var9.bind(var10)(var7);
            var6 = var6.EDIT_DISPLAY_NAME;
            if(!(var36 !== var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = _closure1_slot8;
            var6 = var6.EDIT_USERNAME;
            var6 = var36 !== var6;
            if(!var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var9 = _closure1_slot8;
            var9 = var9.SUGGESTION;
            var6 = var36 !== var9;
case 20:
            var35 = var7;
            var33 = var2;
            var32 = var1;
            if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var8];
            var7 = var10.bind(var4)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var6[var8];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.IEpCBQ;
            var35 = var7.bind(var9)(var6);
            var33 = var5;
            var32 = var3;
            _fun0002_ip = 22; continue _fun0002;
case 18:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var8];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.9AjdkJ;
            var35 = var5.bind(var6)(var3);
            var33 = var2;
            var32 = var1;
case 22:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var20.outerContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var38 = 22;
            var6 = var6[var38];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isAndroid;
            var7 = var6.bind(var7)();
            var6 = null;
            if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var20.shadow;
case 24:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var20.container;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = var20.cardBackground;
            var8[1] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var38];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isAndroid;
            var10 = var9.bind(var10)();
            var9 = null;
            if(!var10) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var10 = {};
            var46 = var20.shadow;
            var47 = var10;
            var11 = copyDataProperties(var47, var46);
            var46 = var20.shadowAndroid;
            var47 = var10;
            var11 = copyDataProperties(var47, var46);
            var9 = var10;
case 26:
            var8[2] = var9;
            var5['style'] = var8;
            var9 = var26;
            if(!var26) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 23;
            var8 = var12[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var9 = var11.bind(var4)(var10, var8);
case 28:
            var8 = new Array(3);
            var8[0] = var9;
            var11 = _closure1_slot9;
            var10 = _closure1_slot5;
            var9 = {};
            var13 = var20.banner;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var17 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 24;
            var15 = var24[var15];
            var17 = var17.bind(var4)(var15);
            var15 = var17.int2hex;
            var15 = var15.bind(var17)(var22);
            var13['backgroundColor'] = var15;
            var12[1] = var13;
            var9['style'] = var12;
            var12 = var40 != var21;
            if(!var12) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var17 = _closure1_slot9;
            var15 = _closure1_slot3;
            var13 = {};
            var22 = var20.bannerImage;
            var13['style'] = var22;
            var13['source'] = var21;
            var12 = var17.bind(var4)(var15, var13);
case 30:
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var20.content;
            var9['style'] = var12;
            var22 = _closure1_slot9;
            var12 = {};
            var15 = var20.avatarBorder;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = var20.cardBackground;
            var13[1] = var15;
            var12['style'] = var13;
            var13 = var22.bind(var4)(var10, var12);
            var12 = new Array(4);
            var12[0] = var13;
            var13 = {};
            var15 = var20.header;
            var13['style'] = var15;
            var21 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 25;
            var15 = var17[var15];
            var21 = var21.bind(var4)(var15);
            var15 = {};
            var15['user'] = var23;
            var21 = var22.bind(var4)(var21, var15);
            var15 = new Array(2);
            var15[0] = var21;
            var21 = _closure1_slot0;
            var28 = 26;
            var17 = var17[var28];
            var17 = var21.bind(var4)(var17);
            var21 = var17.TransitionGroup;
            var17 = {};
            var17['component'] = var10;
            var27 = true;
            var17['transitionEnter'] = var27;
            var23 = var26;
            if(!var26) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var29 = _closure1_slot9;
            var44 = _closure1_slot1;
            var45 = _closure1_slot2;
            var24 = 27;
            var24 = var45[var24];
            var25 = var44.bind(var4)(var24);
            var24 = {};
            var30 = 300;
            var24['duration'] = var30;
            var31 = _closure1_slot0;
            var30 = 28;
            var30 = var45[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.PressableOpacity;
            var30 = {};
            var39 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 29;
                    var1 = var10[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'ORIGINALLY_KNOWN_AS';
                    var1['key'] = var5;
                    var7 = _closure1_slot0;
                    var5 = 21;
                    var8 = var10[var5];
                    var8 = var7.bind(var6)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var5 = var10[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.t;
                    var7 = var5.bhrgkJ;
                    var5 = {};
                    var11 = _closure2_slot1;
                    var10 = null;
                    var13 = var10 == var11;
                    var11 = undefined;
                    if(var13) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var12 = _closure2_slot1;
                    var11 = var12.legacyUsername;
case 34:
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var10 = var11;
case 36:
                    var5['legacyUsername'] = var10;
                    var5 = var8.bind(var9)(var7, var5);
                    var1['content'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 30;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var1['icon'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var30['onPress'] = var39;
            var42 = _closure1_slot4;
            var39 = {};
            var43 = var20.legacyUsernameBadge;
            var39['style'] = var43;
            var43 = 30;
            var43 = var45[var43];
            var43 = var44.bind(var4)(var43);
            var39['source'] = var43;
            var39 = var29.bind(var4)(var42, var39);
            var30['children'] = var39;
            var30 = var29.bind(var4)(var31, var30);
            var24['children'] = var30;
            var23 = var29.bind(var4)(var25, var24);
case 32:
            var17['children'] = var23;
            var17 = var22.bind(var4)(var21, var17);
            var15[1] = var17;
            var13['children'] = var15;
            var13 = var11.bind(var4)(var10, var13);
            var12[1] = var13;
            var21 = _closure1_slot11;
            var17 = _closure1_slot5;
            var15 = {};
            var13 = var20.body;
            var15['style'] = var13;
            var24 = _closure1_slot9;
            var23 = _closure1_slot1;
            var22 = _closure1_slot2;
            var13 = 31;
            var22 = var22[var13];
            var22 = var23.bind(var4)(var22);
            var23 = var22.View;
            var22 = {};
            var22['style'] = var16;
            var25 = !var26;
            if(var26) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var31 = _closure1_slot9;
            var30 = _closure1_slot13;
            var29 = {};
            var42 = var20.input;
            var39 = new Array(2);
            var39[0] = var42;
            var40 = null;
            if(!var41) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var40 = var20.error;
case 40:
            var39[1] = var40;
            var29['style'] = var39;
            var29['label'] = var35;
            var29['value'] = var33;
            var29['onChangeText'] = var32;
            var32 = _closure1_slot7;
            var29['maxLength'] = var32;
            var32 = arg2;
            var29['ref'] = var32;
            var32 = _closure1_slot8;
            var32 = var32.EDIT_USERNAME;
            var32 = var36 === var32;
            if(!var32) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var35 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var38];
            var35 = var35.bind(var4)(var33);
            var33 = var35.isAndroid;
            var32 = var33.bind(var35)();
case 42:
            var29['secureTextEntry'] = var32;
            var32 = _closure1_slot8;
            var33 = var32.EDIT_USERNAME;
            var35 = 'default';
            var32 = var35;
            if(!(var36 === var33)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var36 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var38];
            var36 = var36.bind(var4)(var33);
            var33 = var36.isAndroid;
            var33 = var33.bind(var36)();
            var32 = var35;
            if(!var33) { _fun0002_ip = 44; continue _fun0002 }
case 46:
            var32 = 'visible-password';
case 44:
            var29['keyboardType'] = var32;
            var25 = var31.bind(var4)(var30, var29);
case 38:
            var22['children'] = var25;
            var23 = var24.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot9;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var28];
            var23 = var24.bind(var4)(var23);
            var24 = var23.TransitionGroup;
            var23 = {};
            var28 = _closure1_slot5;
            var23['component'] = var28;
            var23['transitionEnter'] = var27;
            if(!var26) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var29 = _closure1_slot11;
            var28 = _closure1_slot1;
            var35 = _closure1_slot2;
            var27 = 27;
            var27 = var35[var27];
            var28 = var28.bind(var4)(var27);
            var27 = {};
            var30 = 300;
            var27['duration'] = var30;
            var33 = _closure1_slot9;
            var32 = _closure1_slot0;
            var31 = 11;
            var30 = var35[var31];
            var30 = var32.bind(var4)(var30);
            var36 = var30.Text;
            var30 = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var30['children'] = var37;
            var36 = var33.bind(var4)(var36, var30);
            var30 = new Array(2);
            var30[0] = var36;
            var31 = var35[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'heading-lg/medium', 'color': 'text-normal'};
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var30[1] = var31;
            var27['children'] = var30;
            var26 = var29.bind(var4)(var28, var27);
case 47:
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var15['children'] = var22;
            var15 = var21.bind(var4)(var17, var15);
            var12[2] = var15;
            var15 = _closure1_slot9;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = var21[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var13['style'] = var16;
            var16 = 32;
            var16 = var21[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var20 = var20.footer;
            var16['style'] = var20;
            var16['validation'] = var19;
            var18 = var18.footerMessage;
            var16['message'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/components/PomeloEditableUserCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();