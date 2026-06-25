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
        var3 = _closure1_slot16;
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
        var3 = _closure1_slot13;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 11;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var1['onPress'] = var6;
        var5 = function backImage() {
            var4 = _closure1_slot13;
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
    var _closure1_slot23 = var1;
    var1 = function ProductPurchaseGradientBackground(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.product;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot17;
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
                    var6 = _closure1_slot22;
                    var1[3] = var6;
                    var2 = _closure1_slot22;
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
                    var4 = _closure1_slot22;
                    var2[3] = var4;
                    var3 = _closure1_slot22;
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
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 21;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var8.backdrop;
            var1['style'] = var8;
            var8 = _closure1_slot12;
            var8 = var8.START;
            var1['start'] = var8;
            var7 = _closure1_slot12;
            var7 = var7.END;
            var1['end'] = var7;
            var1['locations'] = var6;
            var1['colors'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var8 = var4.AnalyticEvents;
    var _closure1_slot10 = var8;
    var8 = var4.Orientation;
    var _closure1_slot11 = var8;
    var4 = var4.VerticalGradient;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.jsxs;
    var _closure1_slot14 = var8;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
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
    var _closure1_slot16 = var8;
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
    var4 = 48;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductPurchaseSuccessModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductPurchaseSuccessModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var43 = var2.product;
            var _closure2_slot0 = var43;
            var16 = var2.useCategoryImage;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var16 = false;
case 29:
            var31 = var2.renderMessages;
            var12 = var2.onSuccess;
            var32 = var2.onCancel;
            var22 = var2.showOrbBalancePill;
            if(!(var22 === var4)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var22 = false;
case 31:
            var50 = var2.orbBalancePriorToPurchase;
            if(!(var50 === var4)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var50 = null;
case 33:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCurrentUser;
            var45 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var43.styles;
            var2 = var3.bind(var4)(var2);
            var47 = var2.backgroundColors;
            var29 = null;
            var3 = var29 == var47;
            var2 = undefined;
            if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var2 = var47.tertiary;
case 35:
            var5 = var29 != var2;
            var3 = _closure1_slot17;
            var2 = var43.type;
            var9 = var3.bind(var4)(var2, var5);
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 20;
            var3 = var2[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useToken;
            var10 = _closure1_slot1;
            var30 = 8;
            var3 = var2[var30];
            var3 = var10.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.INTERACTIVE_TEXT_ACTIVE;
            var34 = var7.bind(var8)(var3);
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var3 = _closure1_slot21;
            var3 = var7.bind(var8)(var3);
            _closure2_slot1 = var3;
            var10 = _closure1_slot5;
            var8 = var10.useCallback;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var8 = 0;
                    var6 = var7[var8];
                    var4 = var7.slice;
                    var3 = 1;
                    var3 = var4.bind(var7)(var3);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var7 = var3.length;
                    if(!(var8 !== var7)) { _fun0006_ip = 39; continue _fun0006 }
case 37:
                    var8 = var3.length;
                    var7 = _closure1_slot21;
                    var9 = var7.length;
                    var7 = 2;
                    var7 = var9 / var7;
                    if(!(!(var8 >= var7))) { _fun0006_ip = 40; continue _fun0006 }
case 41:
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
                    _fun0006_ip = 42; continue _fun0006;
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
                    var7 = var7.IMPACT_LIGHT;
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 42; continue _fun0006;
case 39:
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
case 42:
                    if(!(var4 != var6)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var4 = global;
                    var5 = var4.setTimeout;
                    var4 = _closure2_slot2;
                    var4 = var5.bind(var1)(var4, var6);
case 43:
                    var2 = _closure2_slot1;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var10)(var7, var3);
            _closure2_slot2 = var3;
            var10 = _closure1_slot5;
            var8 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = function() {
                    var2 = _closure2_slot1;
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
            var40 = var3.avatarDecorationSize;
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
            var38 = var10.bind(var11)(var8, var3);
            var3 = var43.type;
            var37 = 9;
            var2 = var2[var37];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            var3 = var3 === var2;
            if(var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = var43.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var37];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            var3 = var5 === var2;
case 45:
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
                        if(var5) { _fun0007_ip = 47; continue _fun0007 }
case 48:
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
case 47:
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot3;
                        var2 = var3.set;
                        var4 = _closure3_slot0;
                        var1 = var10;
                        if(var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
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
case 49:
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
                        if(!var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                        var2 = 0.6;
case 51:
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
            var2 = var2.bind(var4)(var38, var3);
            var35 = var2.previewViewStyle;
            var33 = var2.textViewStyle;
            var10 = var2.curtainViewStyle;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useFetchCollectiblesProductCategory;
            var2 = var43.skuId;
            var2 = var3.bind(var5)(var2);
            var2 = var2.category;
            var3 = var29 == var2;
            var14 = undefined;
            if(var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var14 = var2.mobileBgUrl;
case 53:
            var3 = _closure1_slot3;
            var2 = var43.items;
            var18 = 1;
            var2 = var3.bind(var4)(var2, var18);
            var46 = 0;
            var44 = var2[var46];
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 26;
            var5 = var3[var5];
            var11 = var2.bind(var4)(var5);
            var8 = var11.useHandleUseNow;
            var5 = {};
            var5['product'] = var43;
            var5['onSuccess'] = var12;
            var5 = var8.bind(var11)(var5);
            var27 = var5.handleUseNow;
            var19 = var5.canUseNow;
            var28 = var5.isApplying;
            var25 = var5.handleEditProfile;
            var8 = _closure1_slot1;
            var5 = 27;
            var5 = var3[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = var5.analyticsLocations;
            _closure2_slot3 = var5;
            var8 = 28;
            var8 = var3[var8];
            var11 = var2.bind(var4)(var8);
            var8 = var11.useIsPostPurchaseGiftingEnabled;
            var41 = 'ProductPurchaseSuccessModal';
            var20 = var8.bind(var11)(var41);
            var8 = 29;
            var8 = var3[var8];
            var11 = var2.bind(var4)(var8);
            var8 = var11.useCanGiftProduct;
            var21 = var8.bind(var11)(var43);
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var13 = var43.skuId;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var5;
            var5 = function() {
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 30;
                var3 = var4[var1];
                var1 = undefined;
                var10 = var7.bind(var1)(var3);
                var9 = var10.track;
                var3 = _closure1_slot10;
                var8 = var3.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                var3 = {};
                var6 = _closure2_slot0;
                var11 = var6.skuId;
                var3['sku_id'] = var11;
                var11 = 'post_purchase_gift';
                var3['cta_name'] = var11;
                var11 = _closure2_slot3;
                var3['location_stack'] = var11;
                var3 = var9.bind(var10)(var8, var3);
                var3 = 10;
                var3 = var4[var3];
                var7 = var7.bind(var1)(var3);
                var3 = var7.close;
                var3 = var3.bind(var7)();
                var3 = _closure1_slot0;
                var2 = 31;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openShopGiftModal;
                var2 = {};
                var6 = var6.skuId;
                var2['skuId'] = var6;
                var5 = _closure2_slot3;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var11.bind(var12)(var5, var8);
            var5 = var45.getAvatarSource;
            var11 = false;
            var39 = var5.bind(var45)(var4, var11, var7);
            var5 = 32;
            var5 = var3[var5];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useFetchVirtualCurrencyBalance;
            var5 = var5.bind(var7)();
            var49 = var5.balance;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 33;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.lockOrientation;
                var1 = _closure1_slot11;
                var1 = var1.PORTRAIT;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
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
            var1 = 34;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.usePreviewCollectibleProduct;
            var26 = true;
            var1 = var1.bind(var5)(var43, var26);
            var1 = 35;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useShopProductItems;
            var42 = var1.bind(var2)(var43);
            var3 = _closure1_slot14;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var9.root;
            var1['style'] = var5;
            var5 = var43.skuId;
            var1['id'] = var5;
            if(!var16) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            if(!(var29 == var14)) { _fun0005_ip = 57; continue _fun0005 }
case 55:
            var8 = _closure1_slot13;
            var7 = _closure1_slot24;
            var5 = {};
            var5['product'] = var43;
            var7 = var8.bind(var4)(var7, var5);
            _fun0005_ip = 58; continue _fun0005;
case 57:
            var12 = _closure1_slot13;
            var8 = _closure1_slot6;
            var5 = {};
            var13 = {};
            var13['uri'] = var14;
            var5['source'] = var13;
            var13 = var9.imageBackground;
            var5['style'] = var13;
            var7 = var12.bind(var4)(var8, var5);
case 58:
            var5 = new Array(3);
            var5[0] = var7;
            var12 = _closure1_slot14;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 36;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var14 = var9.main;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var15 = undefined;
            if(!var16) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var15 = 'rgba(0, 0, 0, 0.3)';
case 59:
            var14['backgroundColor'] = var15;
            var13[1] = var14;
            var7['style'] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot8;
            var13 = {};
            var16 = var9.header;
            var13['style'] = var16;
            var17 = _closure1_slot13;
            var16 = {};
            var23 = var9.headerLeading;
            var16['style'] = var23;
            if(!var22) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var48 = _closure1_slot13;
            var36 = _closure1_slot0;
            var51 = _closure1_slot2;
            var23 = 37;
            var23 = var51[var23];
            var23 = var36.bind(var4)(var23);
            var36 = var23.BalanceWidgetPill;
            var23 = {};
            var23['initialRenderedBalance'] = var50;
            var23['balance'] = var49;
            var22 = var48.bind(var4)(var36, var23);
case 61:
            var16['children'] = var22;
            var17 = var17.bind(var4)(var14, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var23 = _closure1_slot13;
            var22 = _closure1_slot23;
            var17 = {};
            var48 = var29 == var47;
            var36 = undefined;
            if(var48) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var48 = var47.label;
            var47 = var48.toHexString;
            var36 = var47.bind(var48)();
case 63:
            if(!(var29 != var36)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var34 = var36;
case 65:
            var17['tintColor'] = var34;
            var17['onCancel'] = var32;
            var17 = var23.bind(var4)(var22, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var14 = var15.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot14;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = {};
            var17['flex'] = var18;
            var14['style'] = var17;
            var17 = var9.body;
            var14['contentContainerStyle'] = var17;
            var14['alwaysBounceVertical'] = var11;
            var32 = _closure1_slot13;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 14;
            var17 = var18[var11];
            var17 = var22.bind(var4)(var17);
            var23 = var17.View;
            var17 = {};
            var36 = var9.preview;
            var34 = new Array(2);
            var34[0] = var36;
            var34[1] = var35;
            var17['style'] = var34;
            var36 = var43.type;
            var35 = _closure1_slot0;
            var34 = var18[var37];
            var34 = var35.bind(var4)(var34);
            var34 = var34.CollectiblesItemType;
            var34 = var34.BUNDLE;
            if(!(var34 !== var36)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var37];
            var34 = var35.bind(var4)(var34);
            var34 = var34.CollectiblesItemType;
            var34 = var34.AVATAR_DECORATION;
            if(!(var34 !== var36)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var37];
            var34 = var35.bind(var4)(var34);
            var34 = var34.CollectiblesItemType;
            var34 = var34.PROFILE_EFFECT;
            if(!(var34 !== var36)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var37];
            var34 = var35.bind(var4)(var34);
            var34 = var34.CollectiblesItemType;
            var34 = var34.PROFILE_FRAME;
            if(!(var34 !== var36)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var37];
            var34 = var35.bind(var4)(var34);
            var34 = var34.CollectiblesItemType;
            var35 = var34.NAMEPLATE;
            var34 = null;
            if(!(var35 === var36)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var37 = _closure1_slot13;
            var36 = _closure1_slot0;
            var47 = _closure1_slot2;
            var35 = 42;
            var35 = var47[var35];
            var35 = var36.bind(var4)(var35);
            var36 = var35.NameplatePreview;
            var35 = {};
            var35['user'] = var45;
            var47 = var43.items;
            var47 = var47[var46];
            var35['nameplate'] = var47;
            var35['animate'] = var26;
            var34 = var37.bind(var4)(var36, var35);
            _fun0005_ip = 75; continue _fun0005;
case 73:
            var37 = _closure1_slot13;
            var36 = _closure1_slot1;
            var47 = _closure1_slot2;
            var35 = 41;
            var35 = var47[var35];
            var36 = var36.bind(var4)(var35);
            var35 = {};
            var35['user'] = var45;
            var47 = var43.items;
            var47 = var47[var46];
            var35['profileFrame'] = var47;
            var34 = var37.bind(var4)(var36, var35);
            _fun0005_ip = 75; continue _fun0005;
case 71:
            var37 = _closure1_slot13;
            var36 = _closure1_slot1;
            var47 = _closure1_slot2;
            var35 = 40;
            var35 = var47[var35];
            var36 = var36.bind(var4)(var35);
            var35 = {};
            var35['user'] = var45;
            var45 = var43.items;
            var45 = var45[var46];
            var35['profileEffect'] = var45;
            var34 = var37.bind(var4)(var36, var35);
            _fun0005_ip = 75; continue _fun0005;
case 69:
            var37 = _closure1_slot13;
            var36 = _closure1_slot1;
            var45 = _closure1_slot2;
            var35 = 39;
            var35 = var45[var35];
            var36 = var36.bind(var4)(var35);
            var35 = {};
            var35['item'] = var44;
            var35['size'] = var40;
            var35['avatarSource'] = var39;
            var38 = !var38;
            var35['animate'] = var38;
            var34 = var37.bind(var4)(var36, var35);
            _fun0005_ip = 75; continue _fun0005;
case 67:
            var37 = _closure1_slot13;
            var36 = _closure1_slot8;
            var35 = {};
            var38 = var9.previewBundle;
            var35['style'] = var38;
            var40 = _closure1_slot13;
            var39 = _closure1_slot1;
            var44 = _closure1_slot2;
            var38 = 38;
            var38 = var44[var38];
            var39 = var39.bind(var4)(var38);
            var38 = {};
            var44 = var42.firstAvatarDecoration;
            var38['deco'] = var44;
            var44 = var42.firstProfileEffect;
            var38['pfx'] = var44;
            var42 = var42.firstNameplate;
            var38['nameplate'] = var42;
            var42 = var43.previewAssets;
            var38['previewAssets'] = var42;
            var38['disableStaticBackground'] = var26;
            var42 = 'large';
            var38['size'] = var42;
            var38['exposureLocation'] = var41;
            var38 = var40.bind(var4)(var39, var38);
            var35['children'] = var38;
            var34 = var37.bind(var4)(var36, var35);
case 75:
            var17['children'] = var34;
            var23 = var32.bind(var4)(var23, var17);
            var17 = new Array(2);
            var17[0] = var23;
            var23 = _closure1_slot13;
            var18 = var18[var11];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var34 = var9.messages;
            var32 = new Array(2);
            var32[0] = var34;
            var32[1] = var33;
            var18['style'] = var32;
            if(!(var29 == var31)) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var33 = _closure1_slot14;
            var32 = _closure1_slot15;
            var29 = {};
            var37 = _closure1_slot13;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var35 = 43;
            var34 = var40[var35];
            var34 = var39.bind(var4)(var34);
            var36 = var34.Text;
            var34 = {'variant': 'heading-xl/bold', 'color': 'white'};
            var38 = var9.title;
            var34['style'] = var38;
            var44 = 13;
            var38 = var40[var44];
            var38 = var39.bind(var4)(var38);
            var45 = var38.intl;
            var42 = var45.format;
            var38 = var40[var44];
            var38 = var39.bind(var4)(var38);
            var38 = var38.t;
            var41 = var38.YNaxMp;
            var38 = {};
            var46 = var43.name;
            var38['itemName'] = var46;
            var38 = var42.bind(var45)(var41, var38);
            var34['children'] = var38;
            var36 = var37.bind(var4)(var36, var34);
            var34 = new Array(2);
            var34[0] = var36;
            var37 = _closure1_slot13;
            var35 = var40[var35];
            var35 = var39.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-md/medium', 'color': 'white'};
            var38 = var9.title;
            var35['style'] = var38;
            var38 = 44;
            var38 = var40[var38];
            var39 = var39.bind(var4)(var38);
            var38 = var39.isPremiumCollectiblesProduct;
            var38 = var38.bind(var39)(var43);
            var40 = _closure1_slot0;
            var39 = _closure1_slot2;
            var41 = var39[var44];
            var41 = var40.bind(var4)(var41);
            var42 = var41.intl;
            var41 = var42.format;
            var39 = var39[var44];
            var39 = var40.bind(var4)(var39);
            var39 = var39.t;
            if(var38) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var40 = var39["4kp0AB"];
            var38 = {};
            var44 = var43.name;
            var38['itemName'] = var44;
            var38 = var41.bind(var42)(var40, var38);
            _fun0005_ip = 81; continue _fun0005;
case 79:
            var40 = var39.nW6E3m;
            var39 = {};
            var43 = var43.name;
            var39['itemName'] = var43;
            var38 = var41.bind(var42)(var40, var39);
case 81:
            var35['children'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var34[1] = var35;
            var29['children'] = var34;
            var29 = var33.bind(var4)(var32, var29);
            _fun0005_ip = 82; continue _fun0005;
case 77:
            var29 = var31.bind(var4)();
case 82:
            var18['children'] = var29;
            var18 = var23.bind(var4)(var22, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot13;
            var15 = _closure1_slot8;
            var14 = {};
            var17 = var9.footer;
            var14['style'] = var17;
            var18 = _closure1_slot14;
            var17 = {};
            var22 = var9.cta;
            var17['style'] = var22;
            var23 = _closure1_slot13;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = 45;
            var22 = var31[var22];
            var22 = var29.bind(var4)(var22);
            var22 = var22.Button;
            if(var19) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var19 = {};
            var19['onPress'] = var25;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var25 = 13;
            var29 = var33[var25];
            var29 = var32.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var25 = var33[var25];
            var25 = var32.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["2p2aYz"];
            var25 = var29.bind(var31)(var25);
            var19['text'] = var25;
            var25 = 'lg';
            var19['size'] = var25;
            var19['grow'] = var26;
            _fun0005_ip = 85; continue _fun0005;
case 83:
            var25 = {};
            var25['loading'] = var28;
            var25['disabled'] = var28;
            var25['onPress'] = var27;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var27 = 13;
            var28 = var32[var27];
            var28 = var31.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var32[var27];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.MAS7uK;
            var27 = var28.bind(var29)(var27);
            var25['text'] = var27;
            var27 = 'lg';
            var25['size'] = var27;
            var25['grow'] = var26;
            var19 = var25;
case 85:
            var22 = var23.bind(var4)(var22, var19);
            var19 = new Array(2);
            var19[0] = var22;
            if(!var20) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var20 = var21;
case 86:
            if(!var20) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var23 = _closure1_slot13;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 46;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var22 = var21.IconButton;
            var21 = {'size': 'lg', 'variant': 'primary'};
            var29 = _closure1_slot13;
            var25 = 47;
            var25 = var28[var25];
            var25 = var27.bind(var4)(var25);
            var26 = var25.GiftIcon;
            var25 = {};
            var31 = 'md';
            var25['size'] = var31;
            var31 = _closure1_slot1;
            var30 = var28[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.colors;
            var30 = var30.WHITE;
            var25['color'] = var30;
            var25 = var29.bind(var4)(var26, var25);
            var21['icon'] = var25;
            var21['onPress'] = var24;
            var24 = 13;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.PEjaCx;
            var24 = var25.bind(var26)(var24);
            var21['accessibilityLabel'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 88:
            var19[1] = var20;
            var17['children'] = var19;
            var17 = var18.bind(var4)(var15, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot13;
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