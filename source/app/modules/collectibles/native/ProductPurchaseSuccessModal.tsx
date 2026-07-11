// app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CancelButton(arg1) {
        var1 = arg1;
        var2 = var1.tintColor;
        var _closure2_slot0 = var2;
        var2 = var1.onCancel;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot15;
        var4 = undefined;
        var3 = var3.bind(var4)();
        var _closure2_slot2 = var3;
        var7 = _closure1_slot5;
        var6 = var7.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 2:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.close;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var6 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 11;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var1['onPress'] = var6;
        var5 = function backImage() {
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.XSmallIcon;
            var1 = {};
            var5 = 'lg';
            var1['size'] = var5;
            var5 = _closure2_slot2;
            var6 = var5.closeButtonIcon;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = _closure2_slot0;
            var6['tintColor'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1['backImage'] = var5;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.cpT0Cq;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = false;
        var1['labelVisible'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ProductPurchaseGradientBackground(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.product;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot16;
            var3 = var1.type;
            var8 = var5.bind(var4)(var3);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 19;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var1 = var1.styles;
            var1 = var3.bind(var4)(var1);
            var11 = var1.backgroundColors;
            var _closure2_slot0 = var11;
            var3 = null;
            var5 = var3 == var11;
            var1 = undefined;
            if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var11.tertiary;
case 4:
            var1 = var3 != var1;
            _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 20;
            var3 = var12[var5];
            var14 = var6.bind(var4)(var3);
            var13 = var14.useToken;
            var9 = _closure1_slot1;
            var3 = 8;
            var10 = var12[var3];
            var10 = var9.bind(var4)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BASE_LOW;
            var10 = var13.bind(var14)(var10);
            _closure2_slot2 = var10;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useToken;
            var3 = var12[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_SURFACE_HIGH;
            var9 = var5.bind(var6)(var3);
            _closure2_slot3 = var9;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var5 = var4.primary;
                    var2 = var5.toHexString;
                    var5 = var2.bind(var5)();
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = new Array(5);
                    var1[0] = var5;
                    var6 = var4.primary;
                    var2 = var6.toHexString;
                    var2 = var2.bind(var6)();
                    var1[1] = var2;
                    var6 = var4.secondary;
                    var2 = var6.toHexString;
                    var2 = var2.bind(var6)();
                    var1[2] = var2;
                    var6 = _closure1_slot21;
                    var1[3] = var6;
                    var2 = _closure1_slot21;
                    var1[4] = var2;
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var2 = new Array(3);
                    var2[0] = var5;
                    var6 = var4.secondary;
                    var5 = var6.toHexString;
                    var5 = var5.bind(var6)();
                    var2[1] = var5;
                    var5 = var4.tertiary;
                    var4 = var5.toHexString;
                    var4 = var4.bind(var5)();
                    var2[2] = var4;
                    var1 = var2;
case 10:
                    _fun0003_ip = 11; continue _fun0003;
case 6:
                    var4 = _closure2_slot2;
                    var2 = new Array(5);
                    var2[0] = var4;
                    var4 = _closure2_slot2;
                    var2[1] = var4;
                    var3 = _closure2_slot3;
                    var2[2] = var3;
                    var4 = _closure1_slot21;
                    var2[3] = var4;
                    var3 = _closure1_slot21;
                    var2[4] = var3;
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = [0, 0.05, 0.6, 0.95, 1];
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var6 = [0, 0.6, 0.85];
case 14:
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 21;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var8.backdrop;
            var1['style'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.START;
            var1['start'] = var8;
            var7 = _closure1_slot11;
            var7 = var7.END;
            var1['end'] = var7;
            var1['locations'] = var6;
            var1['colors'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var8 = var4.ScrollView;
    var _closure1_slot7 = var8;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Orientation;
    var _closure1_slot10 = var8;
    var4 = var4.VerticalGradient;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.jsxs;
    var _closure1_slot13 = var8;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 7;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var12 = 8;
    var12 = var6[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var11['tintColor'] = var12;
    var8['closeButtonIcon'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot15 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var4 = arguments[1];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = false;
case 15:
            var1 = {};
            var2 = {};
            var13 = 1;
            var2['flex'] = var13;
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 8;
            var7 = var12[var6];
            var7 = var14.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var7;
            var1['root'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var7 = 'row';
            var8 = 'center';
            var9 = var12[var6];
            var9 = var14.bind(var5)(var9);
            var9 = var9.space;
            var9 = var9.PX_16;
            var2['paddingHorizontal'] = var9;
            var1['header'] = var2;
            var2 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
            var1['headerLeading'] = var2;
            var2 = {'resizeMode': 'cover', 'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var1['imageBackground'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var1['backdrop'] = var2;
            var2 = {};
            var2['flex'] = var13;
            var1['main'] = var2;
            var2 = {'position': 'absolute', 'backgroundColor': null, 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var11 = var12[var6];
            var11 = var14.bind(var5)(var11);
            var11 = var11.colors;
            var11 = var11.BLACK;
            var2['backgroundColor'] = var11;
            var1['curtain'] = var2;
            var2 = {'flexGrow': 1, 'flexDirection': 'column', 'justifyContent': 'center'};
            var1['body'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
            var14 = _closure1_slot0;
            var11 = 9;
            var12 = var12[var11];
            var12 = var14.bind(var5)(var12);
            var12 = var12.CollectiblesItemType;
            var14 = var12.AVATAR_DECORATION;
            var12 = 0;
            if(!(var10 === var14)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var12 = var13;
case 17:
            var2['flex'] = var12;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var11];
            var12 = var13.bind(var5)(var12);
            var12 = var12.CollectiblesItemType;
            var12 = var12.AVATAR_DECORATION;
            var9 = 0;
            if(!(var10 === var12)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var9 = '20%';
case 19:
            var2['marginTop'] = var9;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var12.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var12 = var9.NAMEPLATE;
            var9 = undefined;
            if(!(var10 === var12)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var13.bind(var5)(var12);
            var12 = var12.space;
            var9 = var12.PX_32;
case 21:
            var2['marginHorizontal'] = var9;
            if(!var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var9.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var4 = var4.AVATAR_DECORATION;
            if(!(var10 !== var4)) { _fun0004_ip = 25; continue _fun0004 }
case 23:
            var4 = {};
            _fun0004_ip = 26; continue _fun0004;
case 25:
            var9 = {'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 1, 'shadowRadius': 60, 'elevation': 24};
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.PRIMARY_630;
            var9['shadowColor'] = var12;
            var12 = {'width': 0, 'height': 0};
            var9['shadowOffset'] = var12;
            var4 = var9;
case 26:
            var16 = var2;
            var15 = var4;
            var4 = copyDataProperties(var16, var15);
            var1['preview'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'flex-start', 'alignItems': 'center', 'minHeight': 250};
            var1['previewBundle'] = var2;
            var2 = {'paddingTop': null, 'minHeight': null, 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'flex-start'};
            var12 = _closure1_slot1;
            var4 = _closure1_slot2;
            var9 = var4[var6];
            var9 = var12.bind(var5)(var9);
            var9 = var9.space;
            var9 = var9.PX_24;
            var2['paddingTop'] = var9;
            var9 = _closure1_slot0;
            var4 = var4[var11];
            var4 = var9.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var9 = var4.AVATAR_DECORATION;
            var4 = undefined;
            if(!(var10 === var9)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var4 = '32%';
case 27:
            var2['minHeight'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var9 = var3[var6];
            var9 = var4.bind(var5)(var9);
            var9 = var9.space;
            var9 = var9.PX_16;
            var2['gap'] = var9;
            var1['messages'] = var2;
            var2 = {};
            var2['textAlign'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_32;
            var2['marginHorizontal'] = var8;
            var1['title'] = var2;
            var2 = {};
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_16;
            var2['marginBottom'] = var8;
            var1['footer'] = var2;
            var2 = {};
            var2['flexDirection'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.space;
            var7 = var7.PX_12;
            var2['gap'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.space;
            var7 = var7.PX_16;
            var2['paddingVertical'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.space;
            var7 = var7.PX_24;
            var2['marginHorizontal'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var1['cta'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = 'black';
    var7 = var7.bind(var1)(var4);
    var4 = var7.toHexString;
    var4 = var4.bind(var7)();
    var _closure1_slot21 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductPurchaseSuccessModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductPurchaseSuccessModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var39 = var2.product;
            var16 = var2.useCategoryImage;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0005_ip = 29; continue _fun0005 }
case 2:
            var16 = false;
case 29:
            var27 = var2.renderMessages;
            var12 = var2.onSuccess;
            var28 = var2.onCancel;
            var20 = var2.showOrbBalancePill;
            if(!(var20 === var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var20 = false;
case 30:
            var45 = var2.orbBalancePriorToPurchase;
            if(!(var45 === var4)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var45 = null;
case 32:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCurrentUser;
            var40 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var39.styles;
            var2 = var3.bind(var4)(var2);
            var42 = var2.backgroundColors;
            var26 = null;
            var3 = var26 == var42;
            var2 = undefined;
            if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var2 = var42.tertiary;
case 34:
            var5 = var26 != var2;
            var3 = _closure1_slot16;
            var2 = var39.type;
            var9 = var3.bind(var4)(var2, var5);
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 20;
            var3 = var2[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useToken;
            var10 = _closure1_slot1;
            var3 = 8;
            var3 = var2[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.INTERACTIVE_TEXT_ACTIVE;
            var30 = var7.bind(var8)(var3);
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var3 = _closure1_slot20;
            var3 = var7.bind(var8)(var3);
            _closure2_slot0 = var3;
            var10 = _closure1_slot5;
            var8 = var10.useCallback;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var8 = 0;
                    var6 = var7[var8];
                    var4 = var7.slice;
                    var3 = 1;
                    var3 = var4.bind(var7)(var3);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var7 = var3.length;
                    if(!(var8 !== var7)) { _fun0006_ip = 38; continue _fun0006 }
case 36:
                    var8 = var3.length;
                    var7 = _closure1_slot20;
                    var9 = var7.length;
                    var7 = 2;
                    var7 = var9 / var7;
                    if(!(!(var8 >= var7))) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 17;
                    var8 = var11[var7];
                    var9 = var10.bind(var1)(var8);
                    var8 = var9.triggerHapticFeedback;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.HapticFeedbackTypes;
                    var7 = var7.IMPACT_MEDIUM;
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 41; continue _fun0006;
case 39:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 17;
                    var8 = var11[var7];
                    var9 = var10.bind(var1)(var8);
                    var8 = var9.triggerHapticFeedback;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.HapticFeedbackTypes;
                    var7 = var7.IMPACT_LIGHT;
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 41; continue _fun0006;
case 38:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 17;
                    var7 = var10[var5];
                    var8 = var9.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_HEAVY;
                    var5 = var7.bind(var8)(var5);
case 41:
                    if(!(var4 != var6)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var4 = global;
                    var5 = var4.setTimeout;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var1)(var4, var6);
case 42:
                    var2 = _closure2_slot0;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var10)(var7, var3);
            _closure2_slot1 = var3;
            var10 = _closure1_slot5;
            var8 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = function() {
                    var2 = _closure2_slot0;
                    var1 = new Array(0);
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = var8.bind(var10)(var3, var7);
            var3 = 23;
            var3 = var2[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useAvatarDecorationPreviewSizes;
            var3 = var3.bind(var7)();
            var7 = var3.avatarSize;
            var36 = var3.avatarDecorationSize;
            var3 = 24;
            var3 = var2[var3];
            var11 = var5.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var34 = var10.bind(var11)(var8, var3);
            var3 = var39.type;
            var33 = 9;
            var2 = var2[var33];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            var3 = var3 === var2;
            if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = var39.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var33];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            var3 = var5 === var2;
case 44:
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var14 = arg2;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var14;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 14;
                var3 = var11[var8];
                var9 = undefined;
                var4 = var10.bind(var9)(var3);
                var3 = var4.useSharedValue;
                var6 = 0;
                var13 = var3.bind(var4)(var6);
                var _closure3_slot2 = var13;
                var3 = var11[var8];
                var4 = var10.bind(var9)(var3);
                var3 = var4.useSharedValue;
                var7 = var3.bind(var4)(var6);
                var _closure3_slot3 = var7;
                var6 = _closure1_slot5;
                var4 = var6.useEffect;
                var3 = new Array(3);
                var3[0] = var13;
                var3[1] = var1;
                var3[2] = var7;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var5 = _closure3_slot0;
                        var10 = 1;
                        var2 = var10;
                        if(var5) { _fun0007_ip = 46; continue _fun0007 }
case 29:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 14;
                        var5 = var11[var5];
                        var6 = undefined;
                        var8 = var9.bind(var6)(var5);
                        var7 = var8.withDelay;
                        var5 = 15;
                        var5 = var11[var5];
                        var9 = var9.bind(var6)(var5);
                        var6 = var9.withSpring;
                        var5 = {'duration': 500, 'dampingRatio': 0.7};
                        var6 = var6.bind(var9)(var10, var5);
                        var5 = 200;
                        var2 = var7.bind(var8)(var5, var6);
case 46:
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot3;
                        var2 = var3.set;
                        var4 = _closure3_slot0;
                        var1 = var10;
                        if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 14;
                        var4 = var9[var4];
                        var5 = undefined;
                        var7 = var8.bind(var5)(var4);
                        var6 = var7.withDelay;
                        var4 = 16;
                        var4 = var9[var4];
                        var9 = var8.bind(var5)(var4);
                        var8 = var9.withTiming;
                        var4 = {};
                        var5 = 200;
                        var4['duration'] = var5;
                        var4 = var8.bind(var9)(var10, var4);
                        var1 = var6.bind(var7)(var5, var4);
case 47:
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var6)(var1, var3);
                var1 = {};
                var3 = var11[var8];
                var6 = var10.bind(var9)(var3);
                var4 = var6.useAnimatedStyle;
                var3 = function n() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 14;
                        var2 = var8[var4];
                        var6 = undefined;
                        var12 = var7.bind(var6)(var2);
                        var11 = var12.interpolate;
                        var5 = _closure3_slot2;
                        var3 = var5.get;
                        var10 = var3.bind(var5)();
                        var9 = [0, 1];
                        var3 = [0.1, 1];
                        var3 = var11.bind(var12)(var10, var9, var3);
                        var1['opacity'] = var3;
                        var3 = {};
                        var4 = var8[var4];
                        var7 = var7.bind(var6)(var4);
                        var6 = var7.interpolate;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = _closure3_slot1;
                        var2 = 0;
                        if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                        var2 = 0.6;
case 49:
                        var4 = new Array(2);
                        var4[0] = var2;
                        var2 = 1;
                        var4[1] = var2;
                        var2 = [0, 1];
                        var2 = var6.bind(var7)(var5, var2, var4);
                        var3['scale'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1['transform'] = var2;
                        return var1;
                    }
                };
                var12 = {};
                var15 = var11[var8];
                var15 = var10.bind(var9)(var15);
                var15 = var15.interpolate;
                var12['interpolate'] = var15;
                var12['springInput'] = var13;
                var12['isProfilePreview'] = var14;
                var3['__closure'] = var12;
                var12 = 15385317790278.0;
                var3['__workletHash'] = var12;
                var12 = _closure1_slot17;
                var3['__initData'] = var12;
                var3 = var4.bind(var6)(var3);
                var1['previewViewStyle'] = var3;
                var3 = var11[var8];
                var6 = var10.bind(var9)(var3);
                var4 = var6.useAnimatedStyle;
                var3 = function s() {
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var3 = var7[var2];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.interpolate;
                    var4 = _closure3_slot2;
                    var3 = var4.get;
                    var9 = var3.bind(var4)();
                    var8 = [0, 1];
                    var3 = [0, 1];
                    var3 = var10.bind(var11)(var9, var8, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var7[var2];
                    var7 = var6.bind(var5)(var2);
                    var6 = var7.interpolate;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var4 = [0, 1];
                    var2 = [0.75, 1];
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                };
                var12 = {};
                var14 = var11[var8];
                var14 = var10.bind(var9)(var14);
                var14 = var14.interpolate;
                var12['interpolate'] = var14;
                var12['springInput'] = var13;
                var3['__closure'] = var12;
                var12 = 4517716462039.0;
                var3['__workletHash'] = var12;
                var12 = _closure1_slot18;
                var3['__initData'] = var12;
                var3 = var4.bind(var6)(var3);
                var1['textViewStyle'] = var3;
                var3 = var11[var8];
                var4 = var10.bind(var9)(var3);
                var3 = var4.useAnimatedStyle;
                var2 = function c() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.interpolate;
                    var3 = _closure3_slot3;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = [0, 1];
                    var2 = [0.5, 0];
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                };
                var6 = {};
                var8 = var11[var8];
                var8 = var10.bind(var9)(var8);
                var8 = var8.interpolate;
                var6['interpolate'] = var8;
                var6['linearInput'] = var7;
                var2['__closure'] = var6;
                var6 = 6018737312.0;
                var2['__workletHash'] = var6;
                var5 = _closure1_slot19;
                var2['__initData'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['curtainViewStyle'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var34, var3);
            var31 = var2.previewViewStyle;
            var29 = var2.textViewStyle;
            var10 = var2.curtainViewStyle;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useFetchCollectiblesProductCategory;
            var2 = var39.skuId;
            var2 = var3.bind(var5)(var2);
            var2 = var2.category;
            var3 = var26 == var2;
            var14 = undefined;
            if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var14 = var2.mobileBgUrl;
case 51:
            var3 = _closure1_slot3;
            var2 = var39.items;
            var18 = 1;
            var2 = var3.bind(var4)(var2, var18);
            var41 = 0;
            var38 = var2[var41];
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 26;
            var5 = var3[var5];
            var11 = var2.bind(var4)(var5);
            var8 = var11.useHandleUseNow;
            var5 = {};
            var5['product'] = var39;
            var5['onSuccess'] = var12;
            var5 = var8.bind(var11)(var5);
            var24 = var5.handleUseNow;
            var19 = var5.canUseNow;
            var25 = var5.isApplying;
            var22 = var5.handleEditProfile;
            var5 = var40.getAvatarSource;
            var11 = false;
            var35 = var5.bind(var40)(var4, var11, var7);
            var5 = 27;
            var5 = var3[var5];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useFetchVirtualCurrencyBalance;
            var5 = var5.bind(var7)();
            var44 = var5.balance;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.lockOrientation;
                var1 = _closure1_slot10;
                var1 = var1.PORTRAIT;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.restoreDefaultOrientation;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var7.bind(var8)(var5, var1);
            var1 = 29;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.usePreviewCollectibleProduct;
            var23 = true;
            var1 = var1.bind(var5)(var39, var23);
            var1 = 30;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useShopProductItems;
            var37 = var1.bind(var2)(var39);
            var3 = _closure1_slot13;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var9.root;
            var1['style'] = var5;
            var5 = var39.skuId;
            var1['id'] = var5;
            if(!var16) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            if(!(var26 == var14)) { _fun0005_ip = 55; continue _fun0005 }
case 53:
            var8 = _closure1_slot12;
            var7 = _closure1_slot23;
            var5 = {};
            var5['product'] = var39;
            var7 = var8.bind(var4)(var7, var5);
            _fun0005_ip = 56; continue _fun0005;
case 55:
            var12 = _closure1_slot12;
            var8 = _closure1_slot6;
            var5 = {};
            var13 = {};
            var13['uri'] = var14;
            var5['source'] = var13;
            var13 = var9.imageBackground;
            var5['style'] = var13;
            var7 = var12.bind(var4)(var8, var5);
case 56:
            var5 = new Array(3);
            var5[0] = var7;
            var12 = _closure1_slot13;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 31;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var14 = var9.main;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var15 = undefined;
            if(!var16) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var15 = 'rgba(0, 0, 0, 0.3)';
case 57:
            var14['backgroundColor'] = var15;
            var13[1] = var14;
            var7['style'] = var13;
            var15 = _closure1_slot13;
            var14 = _closure1_slot8;
            var13 = {};
            var16 = var9.header;
            var13['style'] = var16;
            var17 = _closure1_slot12;
            var16 = {};
            var21 = var9.headerLeading;
            var16['style'] = var21;
            if(!var20) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var43 = _closure1_slot12;
            var32 = _closure1_slot0;
            var46 = _closure1_slot2;
            var21 = 32;
            var21 = var46[var21];
            var21 = var32.bind(var4)(var21);
            var32 = var21.BalanceWidgetPill;
            var21 = {};
            var21['initialRenderedBalance'] = var45;
            var21['balance'] = var44;
            var20 = var43.bind(var4)(var32, var21);
case 59:
            var16['children'] = var20;
            var17 = var17.bind(var4)(var14, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var21 = _closure1_slot12;
            var20 = _closure1_slot22;
            var17 = {};
            var43 = var26 == var42;
            var32 = undefined;
            if(var43) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var43 = var42.label;
            var42 = var43.toHexString;
            var32 = var42.bind(var43)();
case 61:
            if(!(var26 != var32)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var30 = var32;
case 63:
            var17['tintColor'] = var30;
            var17['onCancel'] = var28;
            var17 = var21.bind(var4)(var20, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var14 = var15.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot13;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = {};
            var17['flex'] = var18;
            var14['style'] = var17;
            var17 = var9.body;
            var14['contentContainerStyle'] = var17;
            var14['alwaysBounceVertical'] = var11;
            var28 = _closure1_slot12;
            var20 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 14;
            var17 = var18[var11];
            var17 = var20.bind(var4)(var17);
            var21 = var17.View;
            var17 = {};
            var32 = var9.preview;
            var30 = new Array(2);
            var30[0] = var32;
            var30[1] = var31;
            var17['style'] = var30;
            var32 = var39.type;
            var31 = _closure1_slot0;
            var30 = var18[var33];
            var30 = var31.bind(var4)(var30);
            var30 = var30.CollectiblesItemType;
            var30 = var30.BUNDLE;
            if(!(var30 !== var32)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var30 = var31.bind(var4)(var30);
            var30 = var30.CollectiblesItemType;
            var30 = var30.AVATAR_DECORATION;
            if(!(var30 !== var32)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var30 = var31.bind(var4)(var30);
            var30 = var30.CollectiblesItemType;
            var30 = var30.PROFILE_EFFECT;
            if(!(var30 !== var32)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var30 = var31.bind(var4)(var30);
            var30 = var30.CollectiblesItemType;
            var30 = var30.PROFILE_FRAME;
            if(!(var30 !== var32)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var30 = var31.bind(var4)(var30);
            var30 = var30.CollectiblesItemType;
            var31 = var30.NAMEPLATE;
            var30 = null;
            if(!(var31 === var32)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var33 = _closure1_slot12;
            var32 = _closure1_slot0;
            var42 = _closure1_slot2;
            var31 = 37;
            var31 = var42[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.NameplatePreview;
            var31 = {};
            var31['user'] = var40;
            var42 = var39.items;
            var42 = var42[var41];
            var31['nameplate'] = var42;
            var31['animate'] = var23;
            var30 = var33.bind(var4)(var32, var31);
            _fun0005_ip = 73; continue _fun0005;
case 71:
            var33 = _closure1_slot12;
            var32 = _closure1_slot1;
            var42 = _closure1_slot2;
            var31 = 36;
            var31 = var42[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['user'] = var40;
            var42 = var39.items;
            var42 = var42[var41];
            var31['profileFrame'] = var42;
            var30 = var33.bind(var4)(var32, var31);
            _fun0005_ip = 73; continue _fun0005;
case 69:
            var33 = _closure1_slot12;
            var32 = _closure1_slot1;
            var42 = _closure1_slot2;
            var31 = 35;
            var31 = var42[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['user'] = var40;
            var40 = var39.items;
            var40 = var40[var41];
            var31['profileEffect'] = var40;
            var30 = var33.bind(var4)(var32, var31);
            _fun0005_ip = 73; continue _fun0005;
case 67:
            var33 = _closure1_slot12;
            var32 = _closure1_slot1;
            var40 = _closure1_slot2;
            var31 = 34;
            var31 = var40[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['item'] = var38;
            var31['size'] = var36;
            var31['avatarSource'] = var35;
            var34 = !var34;
            var31['animate'] = var34;
            var30 = var33.bind(var4)(var32, var31);
            _fun0005_ip = 73; continue _fun0005;
case 65:
            var33 = _closure1_slot12;
            var32 = _closure1_slot8;
            var31 = {};
            var34 = var9.previewBundle;
            var31['style'] = var34;
            var36 = _closure1_slot12;
            var35 = _closure1_slot1;
            var38 = _closure1_slot2;
            var34 = 33;
            var34 = var38[var34];
            var35 = var35.bind(var4)(var34);
            var34 = {};
            var38 = var37.firstAvatarDecoration;
            var34['deco'] = var38;
            var38 = var37.firstProfileEffect;
            var34['pfx'] = var38;
            var37 = var37.firstNameplate;
            var34['nameplate'] = var37;
            var37 = var39.previewAssets;
            var34['previewAssets'] = var37;
            var34['disableStaticBackground'] = var23;
            var37 = 'large';
            var34['size'] = var37;
            var37 = 'ProductPurchaseSuccessModal';
            var34['exposureLocation'] = var37;
            var34 = var36.bind(var4)(var35, var34);
            var31['children'] = var34;
            var30 = var33.bind(var4)(var32, var31);
case 73:
            var17['children'] = var30;
            var21 = var28.bind(var4)(var21, var17);
            var17 = new Array(2);
            var17[0] = var21;
            var21 = _closure1_slot12;
            var18 = var18[var11];
            var18 = var20.bind(var4)(var18);
            var20 = var18.View;
            var18 = {};
            var30 = var9.messages;
            var28 = new Array(2);
            var28[0] = var30;
            var28[1] = var29;
            var18['style'] = var28;
            if(!(var26 == var27)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var29 = _closure1_slot13;
            var28 = _closure1_slot14;
            var26 = {};
            var33 = _closure1_slot12;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 38;
            var30 = var36[var31];
            var30 = var35.bind(var4)(var30);
            var32 = var30.Text;
            var30 = {'variant': 'heading-xl/bold', 'color': 'text-overlay-light'};
            var34 = var9.title;
            var30['style'] = var34;
            var40 = 13;
            var34 = var36[var40];
            var34 = var35.bind(var4)(var34);
            var41 = var34.intl;
            var38 = var41.format;
            var34 = var36[var40];
            var34 = var35.bind(var4)(var34);
            var34 = var34.t;
            var37 = var34.YNaxMp;
            var34 = {};
            var42 = var39.name;
            var34['itemName'] = var42;
            var34 = var38.bind(var41)(var37, var34);
            var30['children'] = var34;
            var32 = var33.bind(var4)(var32, var30);
            var30 = new Array(2);
            var30[0] = var32;
            var33 = _closure1_slot12;
            var31 = var36[var31];
            var31 = var35.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-md/medium', 'color': 'text-overlay-light'};
            var34 = var9.title;
            var31['style'] = var34;
            var34 = 39;
            var34 = var36[var34];
            var35 = var35.bind(var4)(var34);
            var34 = var35.isPremiumCollectiblesProduct;
            var34 = var34.bind(var35)(var39);
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var37 = var35[var40];
            var37 = var36.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.format;
            var35 = var35[var40];
            var35 = var36.bind(var4)(var35);
            var35 = var35.t;
            if(var34) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var36 = var35["4kp0AB"];
            var34 = {};
            var40 = var39.name;
            var34['itemName'] = var40;
            var34 = var37.bind(var38)(var36, var34);
            _fun0005_ip = 79; continue _fun0005;
case 77:
            var36 = var35.nW6E3m;
            var35 = {};
            var39 = var39.name;
            var35['itemName'] = var39;
            var34 = var37.bind(var38)(var36, var35);
case 79:
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var30[1] = var31;
            var26['children'] = var30;
            var26 = var29.bind(var4)(var28, var26);
            _fun0005_ip = 80; continue _fun0005;
case 75:
            var26 = var27.bind(var4)();
case 80:
            var18['children'] = var26;
            var18 = var21.bind(var4)(var20, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot8;
            var14 = {};
            var17 = var9.footer;
            var14['style'] = var17;
            var18 = _closure1_slot12;
            var17 = {};
            var20 = var9.cta;
            var17['style'] = var20;
            var21 = _closure1_slot12;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 40;
            var20 = var27[var20];
            var20 = var26.bind(var4)(var20);
            var20 = var20.Button;
            if(var19) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var19 = {};
            var19['onPress'] = var22;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 13;
            var26 = var29[var22];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var22 = var29[var22];
            var22 = var28.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22["2p2aYz"];
            var22 = var26.bind(var27)(var22);
            var19['text'] = var22;
            var22 = 'lg';
            var19['size'] = var22;
            var19['grow'] = var23;
            _fun0005_ip = 83; continue _fun0005;
case 81:
            var22 = {};
            var22['loading'] = var25;
            var22['disabled'] = var25;
            var22['onPress'] = var24;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 13;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.MAS7uK;
            var24 = var25.bind(var26)(var24);
            var22['text'] = var24;
            var24 = 'lg';
            var22['size'] = var24;
            var22['grow'] = var23;
            var19 = var22;
case 83:
            var19 = var21.bind(var4)(var20, var19);
            var17['children'] = var19;
            var17 = var18.bind(var4)(var15, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var11 = var9.curtain;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var9 = 'none';
            var6['pointerEvents'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();