// app/modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var10 = 0;
    var2 = var8[var10];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var4 = var8[var9];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot6 = var4;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var6 = var7.bind(var1)(var2);
    var4 = var6.createStyles;
    var2 = {};
    var11 = {};
    var11['flex'] = var10;
    var2['titleWrapper'] = var11;
    var11 = {};
    var12 = 'flex-start';
    var11['justifyContent'] = var12;
    var2['titleContainer'] = var11;
    var11 = {};
    var11['flex'] = var9;
    var12 = 5;
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var11['marginTop'] = var14;
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['marginLeft'] = var14;
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11['marginRight'] = var12;
    var2['gifPicker'] = var11;
    var2 = var4.bind(var6)(var2);
    var _closure1_slot8 = var2;
    var4 = {};
    var4['AVATAR'] = var10;
    var2 = 'AVATAR';
    var4[var10] = var2;
    var4['BANNER'] = var9;
    var2 = 'BANNER';
    var4[var9] = var2;
    var _closure1_slot9 = var4;
    var2 = {};
    var2['PROFILE_EDIT'] = var10;
    var6 = 'PROFILE_EDIT';
    var2[var10] = var6;
    var2['PROFILE_TRY_IT_OUT'] = var9;
    var6 = 'PROFILE_TRY_IT_OUT';
    var2[var9] = var6;
    var _closure1_slot10 = var2;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/native/ProfileGIFSelectActionSheet.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ProfileGIFSelectActionSheet(arg1) {
        var1 = arg1;
        var2 = var1.profileAssetType;
        var _closure2_slot0 = var2;
        var1 = var1.selectionContext;
        var _closure2_slot1 = var1;
        var1 = function _onPressGIF() {
            var4 = undefined;
            var1 = undefined;
            var3 = _closure1_slot3;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var3 = var2.gifSrc;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                        var3 = var2.src;
case 4:
                        var2 = global;
                        var2 = var2.fetch;
                        var5 = undefined;
                        var2 = var2.bind(var5)(var3);
                        SaveGenerator(address=50);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var3 = var2.blob;
                        var3 = var3.bind(var2)();
                        SaveGenerator(address=73);
case 10:
                        return var3;
case 11:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                        var4 = function blobToDataURI(arg1) {
                            var2 = arg1;
                            var _closure6_slot0 = var2;
                            var2 = global;
                            var3 = var2.Promise;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var4 = function(arg1) {
                                var2 = arg1;
                                var _closure7_slot0 = var2;
                                var2 = global;
                                var2 = var2.FileReader;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {constructor: {value: var2}});
                                var5 = var3;
                                var2 = new var5[var2](var4);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var1 = function(arg1) {
                                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                        var1 = arg1;
                                        var2 = var1.target;
                                        var1 = null;
                                        var3 = var1 == var2;
                                        var1 = undefined;
                                        var4 = undefined;
                                        if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                                        var4 = var2.result;
case 14:
                                        var3 = _closure7_slot0;
                                        var2 = '';
                                        var6 = 'string';
                                        var5 = typeof var4;
                                        if(!(var6 === var5)) { _fun0002_ip = 16; continue _fun0002 }
case 7:
                                        var2 = var4;
case 16:
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    }
                                };
                                var3['onload'] = var1;
                                var2 = var3.readAsDataURL;
                                var1 = _closure6_slot0;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var4 = var4.bind(var5)(var3);
                        SaveGenerator(address=100);
case 17:
                        return var4;
case 18:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                        var9 = _closure2_slot0;
                        var8 = _closure1_slot9;
                        var8 = var8.AVATAR;
                        if(!(var8 !== var9)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                        var8 = _closure1_slot9;
                        var8 = var8.BANNER;
                        if(!(var8 === var9)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                        var9 = _closure2_slot1;
                        var8 = _closure1_slot10;
                        var8 = var8.PROFILE_TRY_IT_OUT;
                        if(!(var9 !== var8)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 8;
                        var8 = var10[var8];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.setPendingChanges;
                        var8 = {};
                        var8['banner'] = var4;
                        var8 = var9.bind(var10)(var8);
                        _fun0001_ip = 23; continue _fun0001;
case 25:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 7;
                        var8 = var10[var8];
                        var9 = var9.bind(var5)(var8);
                        var8 = var9.setTryItOutBanner;
                        var8 = var8.bind(var9)(var4);
                        _fun0001_ip = 23; continue _fun0001;
case 21:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var11 = 6;
                        var8 = var13[var11];
                        var10 = var12.bind(var5)(var8);
                        var9 = var10.createPendingImage;
                        var8 = {};
                        var8['imageUri'] = var4;
                        var11 = var13[var11];
                        var12 = var12.bind(var5)(var11);
                        var11 = var12.generateAvatarDescription;
                        var11 = var11.bind(var12)();
                        var8['description'] = var11;
                        var9 = var9.bind(var10)(var8);
                        var8 = _closure2_slot1;
                        var7 = _closure1_slot10;
                        var7 = var7.PROFILE_TRY_IT_OUT;
                        if(!(var8 !== var7)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 8;
                        var7 = var10[var7];
                        var12 = var8.bind(var5)(var7);
                        var11 = var12.setPendingChanges;
                        var7 = {};
                        var7['avatar'] = var9;
                        var7 = var11.bind(var12)(var7);
                        var7 = 9;
                        var7 = var10[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.announcePendingAvatarChange;
                        var7 = var7.bind(var8)(var9);
                        _fun0001_ip = 23; continue _fun0001;
case 27:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 7;
                        var7 = var10[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.setTryItOutAvatar;
                        var7 = var7.bind(var8)(var9);
case 23:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 10;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.hideActionSheet;
                        var6 = var6.bind(var7)();
                        return var5;
case 19:
                        return var4;
case 12:
                        return var3;
case 8:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            _closure2_slot2 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot2 = var1;
        var1 = _closure1_slot8;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var1 = null;
        var12 = var2.bind(var3)(var1);
        var3 = _closure1_slot7;
        var14 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 11;
        var1 = var13[var1];
        var1 = var14.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {'ref': null, 'scrollable': true, 'startExpanded': true};
        var1['ref'] = var12;
        var8 = _closure1_slot6;
        var5 = 12;
        var5 = var13[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var7 = 13;
        var15 = var13[var7];
        var15 = var14.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var7 = var13[var7];
        var7 = var14.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.xsC+/y;
        var7 = var15.bind(var16)(var7);
        var5['title'] = var7;
        var7 = 14;
        var7 = var13[var7];
        var7 = var14.bind(var4)(var7);
        var14 = var7.NitroWheelIcon;
        var7 = {};
        var7 = var8.bind(var4)(var14, var7);
        var5['trailing'] = var7;
        var7 = var10.titleWrapper;
        var5['titleWrapperStyle'] = var7;
        var7 = var10.titleContainer;
        var5['titleContainerStyle'] = var7;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var7 = _closure1_slot5;
        var6 = {};
        var10 = var10.gifPicker;
        var6['style'] = var10;
        var10 = _closure1_slot1;
        var9 = 15;
        var9 = var13[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9['bottomSheetRef'] = var12;
        var11 = function onPressGIF(arg1) {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var9['onPressGIF'] = var11;
        var9 = var8.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var5;
    var3['ProfileAssetType'] = var4;
    var3['GIFSelectionContext'] = var2;
    return var1;
})();