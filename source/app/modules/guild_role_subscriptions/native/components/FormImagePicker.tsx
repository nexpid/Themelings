// app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var8;
    var1 = function pickImage() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _pickImage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 94; continue _fun0001 }
 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.openImagePicker;
                    var2 = {};
                    var6 = arg1;
                    var2['size'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=56);
 54:
                    return var2;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 91; continue _fun0001 }
 62:
                    var4 = var2.base64;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0001_ip = 88; continue _fun0001 }
 74:
                    var5 = {};
                    var5['uri'] = var4;
                    var4 = arg2;
                    var4 = var4.bind(var3)(var5);
 88:
                    return var3;
 91:
                    return var2;
 94:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var2 = function ImagePickerIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var19 = var2.style;
            var8 = var2.image;
            var _closure2_slot0 = var8;
            var1 = var2.imageUploadSize;
            var _closure2_slot1 = var1;
            var1 = var2.setImage;
            var _closure2_slot2 = var1;
            var17 = var2.previewResizeMode;
            var3 = var2.previewShape;
            var11 = var2.standalone;
            var1 = var2.size;
            var _closure2_slot3 = var1;
            var7 = var2.disabled;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 80; continue _fun0002 }
 78:
            var7 = false;
 80:
            var2 = _closure1_slot8;
            var12 = var2.bind(var4)();
            var13 = 'center';
            if(!(var13 !== var17)) { _fun0002_ip = 107; continue _fun0002 }
 99:
            var20 = var12.image;
            _fun0002_ip = 113; continue _fun0002;
 107:
            var20 = var12.imageCentered;
 113:
            var2 = _closure1_slot9;
            var2 = var2.CIRCLE;
            if(!(var3 !== var2)) { _fun0002_ip = 135; continue _fun0002 }
 127:
            var18 = var12.imageSquircle;
            _fun0002_ip = 141; continue _fun0002;
 135:
            var18 = var12.imageCircle;
 141:
            var6 = _closure1_slot4;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var1;
                    var9 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var4 = _closure2_slot0;
                    var1 = var4.uri;
 29:
                    if(!(var3 == var1)) { _fun0003_ip = 35; continue _fun0003 }
 33:
                    return var9;
 35:
                    var1 = _closure2_slot0;
                    var5 = var1.uri;
                    var4 = var5.startsWith;
                    var1 = 'data:';
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0003_ip = 178; continue _fun0003 }
 64:
                    var1 = _closure2_slot3;
                    if(!(var3 != var1)) { _fun0003_ip = 178; continue _fun0003 }
 72:
                    var3 = _closure2_slot0;
                    var4 = var3.uri;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 7;
                    var5 = var10[var1];
                    var6 = var8.bind(var9)(var5);
                    var5 = var6.getBestMediaProxySize;
                    var7 = _closure2_slot3;
                    var1 = var10[var1];
                    var8 = var8.bind(var9)(var1);
                    var1 = var8.getDevicePixelRatio;
                    var1 = var1.bind(var8)();
                    var1 = var7 * var1;
                    var6 = var5.bind(var6)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = '?size=';
                    var1 = var5.bind(var1)(var6);
                    var1 = var4 + var1;
                    var3['uri'] = var1;
                    _fun0003_ip = 187; continue _fun0003;
 178:
                    var2 = _closure2_slot0;
                    var1 = var2.uri;
 187:
                    return var1;
                }
            };
            var16 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 8;
            var1 = var21[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var15 = _closure1_slot0;
            var6 = 9;
            var9 = var21[var6];
            var9 = var15.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var21[var6];
            var6 = var15.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.HNo5cH;
            var6 = var9.bind(var10)(var6);
            var1['accessibilityLabel'] = var6;
            var6 = {};
            var6['disabled'] = var7;
            var1['accessibilityState'] = var6;
            var5 = function onPress() {
                var4 = _closure1_slot10;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var6 = var12.image;
            var5 = new Array(5);
            var5[0] = var6;
            var5[1] = var18;
            var6 = var12.imageContainerEmpty;
            var5[2] = var6;
            var6 = var7;
            if(!var6) { _fun0002_ip = 327; continue _fun0002 }
 322:
            var6 = var12.disabled;
 327:
            var5[3] = var6;
            var5[4] = var19;
            var1['style'] = var5;
            var1['disabled'] = var7;
            var10 = _closure1_slot6;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 10;
            var5 = var9[var5];
            var9 = var6.bind(var4)(var5);
            var6 = null;
            if(!(var6 == var8)) { _fun0002_ip = 406; continue _fun0002 }
 373:
            var5 = {};
            var5['resizeMode'] = var13;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 11;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var5['source'] = var13;
            _fun0002_ip = 460; continue _fun0002;
 406:
            var13 = {};
            var15 = new Array(3);
            var15[0] = var20;
            var15[1] = var19;
            var15[2] = var18;
            var13['style'] = var15;
            var18 = var6 != var17;
            var15 = 'cover';
            if(!var18) { _fun0002_ip = 442; continue _fun0002 }
 439:
            var15 = var17;
 442:
            var13['resizeMode'] = var15;
            var15 = {};
            var15['uri'] = var16;
            var13['source'] = var15;
            var5 = var13;
 460:
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = var6 != var8;
            if(!var6) { _fun0002_ip = 484; continue _fun0002 }
 481:
            var6 = !var7;
 484:
            if(!var6) { _fun0002_ip = 628; continue _fun0002 }
 490:
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var13 = var12.editImageIcon;
            var10 = new Array(2);
            var10[0] = var13;
            if(!var11) { _fun0002_ip = 523; continue _fun0002 }
 517:
            var11 = var12.standaloneIcon;
 523:
            var10[1] = var11;
            var7['style'] = var10;
            var12 = _closure1_slot6;
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 12;
            var10 = var15[var13];
            var11 = var17.bind(var4)(var10);
            var10 = {};
            var16 = '#292b30';
            var10['color'] = var16;
            var16 = 13;
            var16 = var15[var16];
            var16 = var17.bind(var4)(var16);
            var10['source'] = var16;
            var14 = _closure1_slot0;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.IconSizes;
            var13 = var13.SMALL;
            var10['size'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 628:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var8[var11];
    var1 = undefined;
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var6 = var8[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot6 = var6;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var8[var4];
    var12 = var7.bind(var1)(var4);
    var9 = var12.createStyles;
    var4 = {};
    var6 = 16;
    var13 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'marginHorizontal': 16};
    var4['imageSelectionRow'] = var13;
    var13 = {'flex': 1, 'flexDirection': 'column', 'marginEnd': 16};
    var4['buttonColumn'] = var13;
    var13 = {'flexWrap': 'wrap', 'marginBottom': 16};
    var4['imageDescription'] = var13;
    var13 = {'alignSelf': 'center', 'width': 84, 'height': 84};
    var4['image'] = var13;
    var13 = {'alignSelf': 'center', 'width': 20, 'height': 20};
    var4['imageCentered'] = var13;
    var13 = {};
    var14 = 42;
    var13['borderRadius'] = var14;
    var4['imageCircle'] = var13;
    var13 = {};
    var14 = 5;
    var16 = var8[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var13['borderRadius'] = var16;
    var4['imageSquircle'] = var13;
    var13 = {};
    var16 = var8[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_TERTIARY;
    var13['backgroundColor'] = var16;
    var4['imageContainerEmpty'] = var13;
    var13 = {'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'top': 0, 'height': 24, 'justifyContent': 'center', 'right': 0, 'padding': 4, 'position': 'absolute', 'width': 24};
    var16 = var8[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var13['backgroundColor'] = var16;
    var14 = var8[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var13['borderRadius'] = var14;
    var4['editImageIcon'] = var13;
    var13 = {'top': 4294967292, 'right': 4294967292};
    var4['standaloneIcon'] = var13;
    var13 = {};
    var14 = 0.3;
    var13['opacity'] = var14;
    var4['disabled'] = var13;
    var4 = var9.bind(var12)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var4['CIRCLE'] = var11;
    var9 = 'CIRCLE';
    var4[var11] = var9;
    var4['SQUIRCLE'] = var10;
    var9 = 'SQUIRCLE';
    var4[var10] = var9;
    var _closure1_slot9 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_role_subscriptions/native/components/FormImagePicker.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function FormImagePicker(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var17 = var4.description;
            var12 = var4.imageUploadSize;
            var _closure2_slot0 = var12;
            var11 = var4.image;
            var10 = var4.setImage;
            var _closure2_slot1 = var10;
            var13 = var4.disabled;
            var3 = {'description': 0, 'imageUploadSize': 0, 'image': 0, 'setImage': 0, 'disabled': 0};
            var1 = null;
            var25 = var3;
            var24 = null;
            var2 = silentSetPrototypeOf(var25, var24);
            var25 = {};
            var24 = var4;
            var23 = var3;
            var9 = copyDataProperties(var25, var24, var23);
            var2 = _closure1_slot8;
            var4 = undefined;
            var18 = var2.bind(var4)();
            if(!(var1 != var11)) { _fun0004_ip = 154; continue _fun0004 }
 95:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var2 = var7[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.0KOidn;
            var22 = var2.bind(var3)(var1);
            _fun0004_ip = 211; continue _fun0004;
 154:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var2 = var7[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.bGPfSk;
            var22 = var2.bind(var3)(var1);
 211:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var18.imageSelectionRow;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var5 = {};
            var14 = var18.buttonColumn;
            var5['style'] = var14;
            var16 = _closure1_slot6;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 14;
            var14 = var20[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var18 = var18.imageDescription;
            var14['style'] = var18;
            var14['children'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot6;
            var19 = _closure1_slot1;
            var18 = 15;
            var15 = var20[var18];
            var16 = var19.bind(var4)(var15);
            var15 = {};
            var15['text'] = var22;
            var22 = var20[var18];
            var22 = var19.bind(var4)(var22);
            var22 = var22.Colors;
            var22 = var22.GREY;
            var15['color'] = var22;
            var22 = var20[var18];
            var22 = var19.bind(var4)(var22);
            var22 = var22.Looks;
            var22 = var22.FILLED;
            var15['look'] = var22;
            var21 = function onPress() {
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15['onPress'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.Sizes;
            var18 = var18.MEDIUM;
            var15['size'] = var18;
            var15['disabled'] = var13;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var5['children'] = var14;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot12;
            var6 = {};
            var25 = var6;
            var24 = var9;
            var9 = copyDataProperties(var25, var24);
            var9 = 'disabled';
            var6[var9] = var13;
            var9 = 'imageUploadSize';
            var6[var9] = var12;
            var9 = 'image';
            var6[var9] = var11;
            var9 = 'setImage';
            var6[var9] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['PreviewShape'] = var4;
    var3['ImagePickerIcon'] = var2;
    return var1;
})();