// app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var4 = arguments[1];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var1 = {};
            var2 = {};
            var12 = 1;
            var2['flex'] = var12;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var7 = var11[var6];
            var7 = var13.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var7;
            var1['root'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
            var7 = 'center';
            var8 = var11[var6];
            var8 = var13.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['paddingHorizontal'] = var8;
            var1['header'] = var2;
            var2 = {'resizeMode': 'cover', 'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var1['imageBackground'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var1['backdrop'] = var2;
            var2 = {};
            var2['flex'] = var12;
            var1['main'] = var2;
            var2 = {'position': 'absolute', 'backgroundColor': null, 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var10 = var11[var6];
            var10 = var13.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BLACK;
            var2['backgroundColor'] = var10;
            var1['curtain'] = var2;
            var2 = {'flexGrow': 1, 'flexDirection': 'column', 'justifyContent': 'center'};
            var1['body'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
            var13 = _closure1_slot0;
            var10 = 9;
            var11 = var11[var10];
            var11 = var13.bind(var5)(var11);
            var11 = var11.CollectiblesItemType;
            var13 = var11.AVATAR_DECORATION;
            var11 = 0;
            if(!(var9 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var12;
case 4:
            var2['flex'] = var11;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var10];
            var11 = var12.bind(var5)(var11);
            var11 = var11.CollectiblesItemType;
            var11 = var11.AVATAR_DECORATION;
            var8 = 0;
            if(!(var9 === var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = '20%';
case 6:
            var2['marginTop'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var5)(var8);
            var8 = var8.CollectiblesItemType;
            var11 = var8.NAMEPLATE;
            var8 = undefined;
            if(!(var9 === var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var6];
            var11 = var12.bind(var5)(var11);
            var11 = var11.spacing;
            var8 = var11.PX_32;
case 8:
            var2['marginHorizontal'] = var8;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var8.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var4 = var4.AVATAR_DECORATION;
            if(!(var9 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            var4 = {};
            _fun0001_ip = 13; continue _fun0001;
case 12:
            var8 = {'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 1, 'shadowRadius': 60, 'elevation': 24};
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var6];
            var11 = var12.bind(var5)(var11);
            var11 = var11.unsafe_rawColors;
            var11 = var11.PRIMARY_630;
            var8['shadowColor'] = var11;
            var11 = {'width': 0, 'height': 0};
            var8['shadowOffset'] = var11;
            var4 = var8;
case 13:
            var15 = var2;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var1['preview'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'flex-start', 'alignItems': 'center', 'minHeight': 250};
            var1['previewBundle'] = var2;
            var2 = {'paddingTop': null, 'minHeight': null, 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'flex-start'};
            var11 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var6];
            var8 = var11.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_24;
            var2['paddingTop'] = var8;
            var8 = _closure1_slot0;
            var4 = var4[var10];
            var4 = var8.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var8 = var4.AVATAR_DECORATION;
            var4 = undefined;
            if(!(var9 === var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = '32%';
case 14:
            var2['minHeight'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['gap'] = var8;
            var1['messages'] = var2;
            var2 = {};
            var2['textAlign'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_32;
            var2['marginHorizontal'] = var7;
            var1['title'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['marginBottom'] = var7;
            var1['footer'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingVertical'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
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
    var4 = function CancelButton(arg1) {
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 16:
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
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
    var _closure1_slot21 = var4;
    var4 = 18;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = 'black';
    var7 = var7.bind(var1)(var4);
    var4 = var7.toHexString;
    var4 = var4.bind(var7)();
    var _closure1_slot22 = var4;
    var4 = function ProductPurchaseGradientBackground(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var11.tertiary;
case 18:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var5 = var4.primary;
                    var2 = var5.toHexString;
                    var5 = var2.bind(var5)();
                    if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
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
                    var2 = _closure1_slot22;
                    var1[3] = var2;
                    var1[4] = var2;
                    _fun0004_ip = 24; continue _fun0004;
case 22:
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
case 24:
                    _fun0004_ip = 25; continue _fun0004;
case 20:
                    var4 = _closure2_slot2;
                    var2 = new Array(5);
                    var2[0] = var4;
                    var4 = _closure2_slot2;
                    var2[1] = var4;
                    var3 = _closure2_slot3;
                    var2[2] = var3;
                    var3 = _closure1_slot22;
                    var2[3] = var3;
                    var2[4] = var3;
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            if(var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var6 = [0, 0.05, 0.6, 0.95, 1];
            _fun0003_ip = 28; continue _fun0003;
case 26:
            var6 = [0, 0.6, 0.85];
case 28:
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 21;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var8.backdrop;
            var1['style'] = var8;
            var7 = _closure1_slot11;
            var8 = var7.START;
            var1['start'] = var8;
            var7 = var7.END;
            var1['end'] = var7;
            var1['locations'] = var6;
            var1['colors'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductPurchaseSuccessModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var37 = var2.product;
            var16 = var2.useCategoryImage;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0005_ip = 29; continue _fun0005 }
case 16:
            var16 = false;
case 29:
            var25 = var2.renderMessages;
            var12 = var2.onSuccess;
            var26 = var2.onCancel;
            var17 = var2.showOrbBalancePill;
            if(!(var17 === var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var17 = false;
case 30:
            var30 = var2.orbBalancePriorToPurchase;
            if(!(var30 === var4)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var30 = null;
case 32:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCurrentUser;
            var38 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var37.styles;
            var2 = var3.bind(var4)(var2);
            var42 = var2.backgroundColors;
            var24 = null;
            var3 = var24 == var42;
            var2 = undefined;
            if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var2 = var42.tertiary;
case 34:
            var5 = var24 != var2;
            var3 = _closure1_slot16;
            var2 = var37.type;
            var9 = var3.bind(var4)(var2, var5);
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 20;
            var3 = var2[var3];
            var8 = var5.bind(var4)(var3);
            var6 = var8.useToken;
            var10 = _closure1_slot1;
            var3 = 8;
            var3 = var2[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.INTERACTIVE_TEXT_ACTIVE;
            var40 = var6.bind(var8)(var3);
            var10 = _closure1_slot5;
            var6 = var10.useRef;
            var3 = _closure1_slot21;
            var3 = var6.bind(var10)(var3);
            _closure2_slot0 = var3;
            var8 = var10.useCallback;
            var6 = function() {
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
                    var7 = _closure1_slot21;
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
            var3 = var8.bind(var10)(var6, var3);
            _closure2_slot1 = var3;
            var8 = var10.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
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
            var3 = var8.bind(var10)(var3, var6);
            var3 = 23;
            var3 = var2[var3];
            var6 = var5.bind(var4)(var3);
            var3 = var6.useAvatarDecorationPreviewSizes;
            var3 = var3.bind(var6)();
            var6 = var3.avatarSize;
            var35 = var3.avatarDecorationSize;
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
            var32 = var10.bind(var11)(var8, var3);
            var3 = var37.type;
            var31 = 9;
            var2 = var2[var31];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            var3 = var3 === var2;
            if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = var37.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var31];
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
                var12 = _closure1_slot18;
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
                var12 = _closure1_slot19;
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
                var5 = _closure1_slot20;
                var2['__initData'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['curtainViewStyle'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var32, var3);
            var29 = var2.previewViewStyle;
            var27 = var2.textViewStyle;
            var10 = var2.curtainViewStyle;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useFetchCollectiblesProductCategory;
            var2 = var37.skuId;
            var2 = var3.bind(var5)(var2);
            var2 = var2.category;
            var3 = var24 == var2;
            var14 = undefined;
            if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var14 = var2.mobileBgUrl;
case 51:
            var3 = _closure1_slot3;
            var2 = var37.items;
            var18 = 1;
            var2 = var3.bind(var4)(var2, var18);
            var39 = 0;
            var36 = var2[var39];
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 26;
            var5 = var3[var5];
            var11 = var2.bind(var4)(var5);
            var8 = var11.useHandleUseNow;
            var5 = {};
            var5['product'] = var37;
            var5['onSuccess'] = var12;
            var5 = var8.bind(var11)(var5);
            var22 = var5.handleUseNow;
            var23 = var5.isApplying;
            var5 = var38.getAvatarSource;
            var11 = false;
            var33 = var5.bind(var38)(var4, var11, var6);
            var5 = 27;
            var5 = var3[var5];
            var6 = var2.bind(var4)(var5);
            var5 = var6.useFetchVirtualCurrencyBalance;
            var5 = var5.bind(var6)();
            var28 = var5.balance;
            var8 = _closure1_slot5;
            var6 = var8.useEffect;
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
            var1 = var6.bind(var8)(var5, var1);
            var1 = 29;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.usePreviewCollectibleProduct;
            var21 = true;
            var1 = var1.bind(var5)(var37, var21);
            var1 = 30;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useShopProductItems;
            var34 = var1.bind(var2)(var37);
            var3 = _closure1_slot13;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var9.root;
            var1['style'] = var5;
            var5 = var37.skuId;
            var1['id'] = var5;
            if(!var16) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            if(!(var24 == var14)) { _fun0005_ip = 55; continue _fun0005 }
case 53:
            var8 = _closure1_slot12;
            var6 = _closure1_slot23;
            var5 = {};
            var5['product'] = var37;
            var6 = var8.bind(var4)(var6, var5);
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
            var6 = var12.bind(var4)(var8, var5);
case 56:
            var5 = new Array(3);
            var5[0] = var6;
            var14 = _closure1_slot13;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 31;
            var6 = var12[var6];
            var6 = var8.bind(var4)(var6);
            var13 = var6.SafeAreaPaddingView;
            var12 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var8 = var9.main;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var15 = undefined;
            if(!var16) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var15 = 'rgba(0, 0, 0, 0.3)';
case 57:
            var8['backgroundColor'] = var15;
            var6[1] = var8;
            var12['style'] = var6;
            var15 = _closure1_slot13;
            var8 = _closure1_slot8;
            var6 = {};
            var16 = var9.header;
            var6['style'] = var16;
            var20 = _closure1_slot12;
            var19 = _closure1_slot17;
            var16 = {};
            var43 = var24 == var42;
            var41 = undefined;
            if(var43) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var43 = var42.label;
            var42 = var43.toHexString;
            var41 = var42.bind(var43)();
case 59:
            if(!(var24 != var41)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var40 = var41;
case 61:
            var16['tintColor'] = var40;
            var16['onCancel'] = var26;
            var19 = var20.bind(var4)(var19, var16);
            var16 = new Array(2);
            var16[0] = var19;
            if(!var17) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var26 = _closure1_slot12;
            var20 = _closure1_slot0;
            var40 = _closure1_slot2;
            var19 = 32;
            var19 = var40[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.BalanceWidgetPill;
            var19 = {};
            var19['initialRenderedBalance'] = var30;
            var19['balance'] = var28;
            var17 = var26.bind(var4)(var20, var19);
case 63:
            var16[1] = var17;
            var6['children'] = var16;
            var6 = var15.bind(var4)(var8, var6);
            var15 = new Array(3);
            var15[0] = var6;
            var16 = _closure1_slot13;
            var8 = _closure1_slot7;
            var6 = {};
            var17 = {};
            var17['flex'] = var18;
            var6['style'] = var17;
            var17 = var9.body;
            var6['contentContainerStyle'] = var17;
            var6['alwaysBounceVertical'] = var11;
            var20 = _closure1_slot12;
            var19 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 14;
            var17 = var18[var11];
            var17 = var19.bind(var4)(var17);
            var26 = var17.View;
            var17 = {};
            var30 = var9.preview;
            var28 = new Array(2);
            var28[0] = var30;
            var28[1] = var29;
            var17['style'] = var28;
            var30 = var37.type;
            var29 = _closure1_slot0;
            var28 = var18[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.CollectiblesItemType;
            var28 = var28.BUNDLE;
            if(!(var28 !== var30)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.CollectiblesItemType;
            var28 = var28.AVATAR_DECORATION;
            if(!(var28 !== var30)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.CollectiblesItemType;
            var28 = var28.PROFILE_EFFECT;
            if(!(var28 !== var30)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.CollectiblesItemType;
            var28 = var28.PROFILE_FRAME;
            if(!(var28 !== var30)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.CollectiblesItemType;
            var29 = var28.NAMEPLATE;
            var28 = null;
            if(!(var29 === var30)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var31 = _closure1_slot12;
            var30 = _closure1_slot0;
            var40 = _closure1_slot2;
            var29 = 37;
            var29 = var40[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.NameplatePreview;
            var29 = {};
            var29['user'] = var38;
            var40 = var37.items;
            var40 = var40[var39];
            var29['nameplate'] = var40;
            var29['animate'] = var21;
            var28 = var31.bind(var4)(var30, var29);
            _fun0005_ip = 73; continue _fun0005;
case 71:
            var31 = _closure1_slot12;
            var30 = _closure1_slot1;
            var40 = _closure1_slot2;
            var29 = 36;
            var29 = var40[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['user'] = var38;
            var40 = var37.items;
            var40 = var40[var39];
            var29['profileFrame'] = var40;
            var28 = var31.bind(var4)(var30, var29);
            _fun0005_ip = 73; continue _fun0005;
case 69:
            var31 = _closure1_slot12;
            var30 = _closure1_slot1;
            var40 = _closure1_slot2;
            var29 = 35;
            var29 = var40[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['user'] = var38;
            var38 = var37.items;
            var38 = var38[var39];
            var29['profileEffect'] = var38;
            var28 = var31.bind(var4)(var30, var29);
            _fun0005_ip = 73; continue _fun0005;
case 67:
            var31 = _closure1_slot12;
            var30 = _closure1_slot1;
            var38 = _closure1_slot2;
            var29 = 34;
            var29 = var38[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['item'] = var36;
            var29['size'] = var35;
            var29['avatarSource'] = var33;
            var32 = !var32;
            var29['animate'] = var32;
            var28 = var31.bind(var4)(var30, var29);
            _fun0005_ip = 73; continue _fun0005;
case 65:
            var31 = _closure1_slot12;
            var30 = _closure1_slot8;
            var29 = {};
            var32 = var9.previewBundle;
            var29['style'] = var32;
            var33 = _closure1_slot1;
            var35 = _closure1_slot2;
            var32 = 33;
            var32 = var35[var32];
            var33 = var33.bind(var4)(var32);
            var32 = {};
            var35 = var34.firstAvatarDecoration;
            var32['deco'] = var35;
            var35 = var34.firstProfileEffect;
            var32['pfx'] = var35;
            var34 = var34.firstNameplate;
            var32['nameplate'] = var34;
            var34 = var37.previewAssets;
            var32['previewAssets'] = var34;
            var32['disableStaticBackground'] = var21;
            var34 = 'large';
            var32['size'] = var34;
            var34 = 'ProductPurchaseSuccessModal';
            var32['exposureLocation'] = var34;
            var32 = var31.bind(var4)(var33, var32);
            var29['children'] = var32;
            var28 = var31.bind(var4)(var30, var29);
case 73:
            var17['children'] = var28;
            var26 = var20.bind(var4)(var26, var17);
            var17 = new Array(2);
            var17[0] = var26;
            var18 = var18[var11];
            var18 = var19.bind(var4)(var18);
            var19 = var18.View;
            var18 = {};
            var28 = var9.messages;
            var26 = new Array(2);
            var26[0] = var28;
            var26[1] = var27;
            var18['style'] = var26;
            if(!(var24 == var25)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var27 = _closure1_slot13;
            var26 = _closure1_slot14;
            var24 = {};
            var31 = _closure1_slot12;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 38;
            var28 = var34[var29];
            var28 = var33.bind(var4)(var28);
            var30 = var28.Text;
            var28 = {'variant': 'heading-xl/bold', 'color': 'white'};
            var32 = var9.title;
            var28['style'] = var32;
            var38 = 13;
            var32 = var34[var38];
            var32 = var33.bind(var4)(var32);
            var39 = var32.intl;
            var36 = var39.format;
            var32 = var34[var38];
            var32 = var33.bind(var4)(var32);
            var32 = var32.t;
            var35 = var32.YNaxMp;
            var32 = {};
            var40 = var37.name;
            var32['itemName'] = var40;
            var32 = var36.bind(var39)(var35, var32);
            var28['children'] = var32;
            var30 = var31.bind(var4)(var30, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var29 = var34[var29];
            var29 = var33.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-md/medium', 'color': 'white'};
            var32 = var9.title;
            var29['style'] = var32;
            var32 = 39;
            var32 = var34[var32];
            var33 = var33.bind(var4)(var32);
            var32 = var33.isPremiumCollectiblesProduct;
            var32 = var32.bind(var33)(var37);
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var35 = var33[var38];
            var35 = var34.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.format;
            var33 = var33[var38];
            var33 = var34.bind(var4)(var33);
            var33 = var33.t;
            if(var32) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var34 = var33["4kp0AB"];
            var32 = {};
            var38 = var37.name;
            var32['itemName'] = var38;
            var32 = var35.bind(var36)(var34, var32);
            _fun0005_ip = 79; continue _fun0005;
case 77:
            var34 = var33.nW6E3m;
            var33 = {};
            var37 = var37.name;
            var33['itemName'] = var37;
            var32 = var35.bind(var36)(var34, var33);
case 79:
            var29['children'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var28[1] = var29;
            var24['children'] = var28;
            var24 = var27.bind(var4)(var26, var24);
            _fun0005_ip = 80; continue _fun0005;
case 75:
            var24 = var25.bind(var4)();
case 80:
            var18['children'] = var24;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var6['children'] = var17;
            var6 = var16.bind(var4)(var8, var6);
            var15[1] = var6;
            var8 = _closure1_slot12;
            var17 = _closure1_slot8;
            var16 = {};
            var6 = var9.footer;
            var16['style'] = var6;
            var18 = {};
            var6 = var9.cta;
            var18['style'] = var6;
            var25 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 40;
            var19 = var6[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Button;
            var19 = {};
            var19['loading'] = var23;
            var19['disabled'] = var23;
            var19['onPress'] = var22;
            var22 = 13;
            var23 = var6[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var6[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.MAS7uK;
            var22 = var23.bind(var24)(var22);
            var19['text'] = var22;
            var22 = 'lg';
            var19['size'] = var22;
            var19['grow'] = var21;
            var19 = var8.bind(var4)(var20, var19);
            var18['children'] = var19;
            var18 = var8.bind(var4)(var17, var18);
            var16['children'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5[1] = var12;
            var7 = _closure1_slot1;
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