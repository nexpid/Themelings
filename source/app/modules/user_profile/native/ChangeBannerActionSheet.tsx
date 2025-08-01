// app/modules/user_profile/native/ChangeBannerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ChangeBannerColorRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.user;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot12;
            var16 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var9 = var2.bind(var4)(var1);
            var6 = var9.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getAllPending;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var9)(var3, var1);
            var9 = var1.pendingAvatar;
            var6 = var1.pendingAccentColor;
            var1 = 21;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getPendingAvatarSrc;
            var1 = {};
            var11 = var8.id;
            var1['userId'] = var11;
            var1['image'] = var9;
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var2 = 22;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var8.id;
            var7 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 == var12)) { _fun0001_ip = 184; continue _fun0001 }
 169:
            var2 = var8.getAvatarURL;
            var1 = 80;
            var12 = var2.bind(var8)(var4, var1);
 184:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 23;
            var2 = var13[var1];
            var8 = var9.bind(var4)(var2);
            var2 = var8.memoizedImageSource;
            var11 = var2.bind(var8)(var12);
            var17 = 24;
            var2 = var13[var17];
            var8 = var9.bind(var4)(var2);
            var2 = var8.rgb2int;
            var1 = var13[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useDominantColorFromImage;
            var1 = var1.bind(var9)(var12, var11);
            var1 = var2.bind(var8)(var1);
            _closure2_slot0 = var1;
            if(!(var4 === var6)) { _fun0001_ip = 285; continue _fun0001 }
 267:
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 282; continue _fun0001 }
 276:
            var2 = var7.primaryColor;
 282:
            var6 = var2;
 285:
            var2 = var1;
            if(!(var3 != var6)) { _fun0001_ip = 295; continue _fun0001 }
 292:
            var2 = var6;
 295:
            var3 = var3 != var2;
            var19 = 0;
            if(!var3) { _fun0001_ip = 307; continue _fun0001 }
 304:
            var19 = var2;
 307:
            _closure2_slot1 = var19;
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    if(!(var4 === var1)) { _fun0002_ip = 16; continue _fun0002 }
 14:
                    var4 = null;
 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setPendingAccentColor;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1, var2);
            _closure2_slot2 = var1;
            var3 = _closure1_slot9;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 17;
            var1 = var15[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var8 = _closure1_slot9;
            var6 = 18;
            var6 = var15[var6];
            var6 = var18.bind(var4)(var6);
            var7 = var6.FormLabel;
            var6 = {};
            var9 = var16.label;
            var6['style'] = var9;
            var9 = 14;
            var11 = var15[var9];
            var11 = var18.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var15[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.xzNfPz;
            var9 = var11.bind(var12)(var9);
            var6['text'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['label'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var16.selectedColor;
            var6['style'] = var9;
            var12 = _closure1_slot9;
            var14 = _closure1_slot1;
            var9 = 26;
            var9 = var15[var9];
            var11 = var14.bind(var4)(var9);
            var9 = {};
            var13 = var16.bannerColor;
            var9['style'] = var13;
            var9['color'] = var19;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var13 = _closure1_slot9;
            var11 = 27;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-normal'};
            var20 = var16.selectedColorHex;
            var11['style'] = var20;
            var17 = var15[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.int2hex;
            var17 = var17.bind(var18)(var19);
            var11['children'] = var17;
            var11 = var13.bind(var4)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot9;
            var13 = 28;
            var10 = var15[var13];
            var11 = var14.bind(var4)(var10);
            var10 = {};
            var16 = var16.rowArrow;
            var10['style'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Sizes;
            var13 = var13.CUSTOM;
            var10['size'] = var13;
            var13 = 29;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var10['source'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot1;
                var2['color'] = var5;
                var4 = _closure2_slot2;
                var2['onSelect'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot7 = var7;
    var4 = var4.UPLOAD_BANNER_SIZE;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'color': null, 'alignItems': 'center', 'flexDirection': 'row'};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_ACTIVE;
    var9['color'] = var13;
    var4['label'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var9['color'] = var13;
    var4['sublabel'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginLeft'] = var13;
    var4['nitroWheel'] = var9;
    var9 = {'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'height': 24, 'minWidth': 24};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['bannerColor'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['selectedColor'] = var9;
    var9 = {};
    var13 = 'uppercase';
    var9['textTransform'] = var13;
    var4['selectedColorHex'] = var9;
    var9 = {'height': 13, 'width': 8, 'marginLeft': 10, 'marginTop': 2};
    var4['rowArrow'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginTop'] = var13;
    var4['upsellButton'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DANGER;
    var9['color'] = var11;
    var4['remove'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['titleWrapper'] = var9;
    var9 = {};
    var10 = 'flex-start';
    var9['justifyContent'] = var10;
    var4['titleContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/ChangeBannerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChangeBannerActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var18 = var1.user;
            var3 = var1.analyticsLocations;
            var2 = var1.onBannerChange;
            var _closure2_slot0 = var2;
            var21 = var1.removeText;
            var13 = var1.showRemoveBanner;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0003_ip = 46; continue _fun0003 }
 44:
            var13 = false;
 46:
            var27 = var1.isTryItOut;
            if(!(var27 === var4)) { _fun0003_ip = 58; continue _fun0003 }
 56:
            var27 = false;
 58:
            var1 = _closure1_slot12;
            var25 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var5 = var2.analyticsLocations;
            if(var27) { _fun0003_ip = 134; continue _fun0003 }
 103:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.canUsePremiumProfileCustomization;
            var27 = var2.bind(var3)(var18);
 134:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 109; continue _fun0004 }
 7:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 10;
                            var4 = var6[var3];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var4);
                            var4 = var7.hideActionSheet;
                            var4 = var4.bind(var7)();
                            var4 = 11;
                            var4 = var6[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.openImagePicker;
                            var2 = _closure1_slot8;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=73);
 71:
                            return var2;
 73:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0004_ip = 106; continue _fun0004 }
 79:
                            var5 = var2.base64;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0004_ip = 103; continue _fun0004 }
 91:
                            var4 = _closure2_slot0;
                            var4 = var4.bind(var3)(var5);
 103:
                            return var3;
 106:
                            return var2;
 109:
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
            var20 = var2.bind(var4)();
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = var11[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot10;
            var5 = 12;
            var5 = var11[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var10 = _closure1_slot9;
            var8 = 13;
            var8 = var11[var8];
            var8 = var15.bind(var4)(var8);
            var9 = var8.BottomSheetTitleHeader;
            var8 = {};
            var26 = 14;
            var12 = var11[var26];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var11[var26];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Vgdusr;
            var11 = var12.bind(var14)(var11);
            var8['title'] = var11;
            var11 = var27;
            if(!var11) { _fun0003_ip = 323; continue _fun0003 }
 285:
            var15 = _closure1_slot9;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 15;
            var12 = var16[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.NitroWheelIcon;
            var12 = {};
            var11 = var15.bind(var4)(var14, var12);
 323:
            var8['trailing'] = var11;
            var11 = var25.titleWrapper;
            var8['titleWrapperStyle'] = var11;
            var11 = var25.titleContainer;
            var8['titleContainerStyle'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 16;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRowGroup;
            var9 = {};
            var23 = null;
            var14 = null;
            if(var27) { _fun0003_ip = 423; continue _fun0003 }
 403:
            var16 = _closure1_slot9;
            var15 = _closure1_slot13;
            var12 = {};
            var12['user'] = var18;
            var14 = var16.bind(var4)(var15, var12);
 423:
            var12 = new Array(3);
            var12[0] = var14;
            var18 = _closure1_slot9;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var14 = 17;
            var15 = var30[var14];
            var15 = var31.bind(var4)(var15);
            var16 = var15.TableRow;
            var15 = {};
            var29 = _closure1_slot10;
            var28 = _closure1_slot5;
            var19 = {};
            var24 = var25.label;
            var19['style'] = var24;
            var32 = _closure1_slot9;
            var24 = 18;
            var30 = var30[var24];
            var30 = var31.bind(var4)(var30);
            var31 = var30.FormLabel;
            var30 = {};
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var35 = var33[var26];
            var35 = var34.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var33 = var33[var26];
            var33 = var34.bind(var4)(var33);
            var34 = var33.t;
            if(var13) { _fun0003_ip = 565; continue _fun0003 }
 550:
            var33 = var34.70CYsb;
            var33 = var35.bind(var36)(var33);
            _fun0003_ip = 578; continue _fun0003;
 565:
            var34 = var34.N0bC3N;
            var33 = var35.bind(var36)(var34);
 578:
            var30['text'] = var33;
            var31 = var32.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var31 = !var27;
            if(!var31) { _fun0003_ip = 658; continue _fun0003 }
 602:
            var34 = _closure1_slot9;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var32 = 15;
            var32 = var35[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.NitroWheelIcon;
            var32 = {};
            var35 = var25.nitroWheel;
            var32['style'] = var35;
            var35 = 'sm';
            var32['size'] = var35;
            var31 = var34.bind(var4)(var33, var32);
 658:
            var30[1] = var31;
            var19['children'] = var30;
            var19 = var29.bind(var4)(var28, var19);
            var15['label'] = var19;
            var29 = _closure1_slot10;
            var28 = _closure1_slot11;
            var19 = {};
            var32 = _closure1_slot9;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var24];
            var30 = var31.bind(var4)(var30);
            var31 = var30.FormSubLabel;
            var30 = {};
            var33 = var25.sublabel;
            var30['style'] = var33;
            var33 = 2;
            var30['numberOfLines'] = var33;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var35 = var33[var26];
            var35 = var34.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var33 = var33[var26];
            var33 = var34.bind(var4)(var33);
            var34 = var33.t;
            if(var27) { _fun0003_ip = 792; continue _fun0003 }
 777:
            var33 = var34.NSTmdH;
            var33 = var35.bind(var36)(var33);
            _fun0003_ip = 805; continue _fun0003;
 792:
            var34 = var34.IhzZlp;
            var33 = var35.bind(var36)(var34);
 805:
            var30['text'] = var33;
            var31 = var32.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var31 = !var27;
            if(!var31) { _fun0003_ip = 906; continue _fun0003 }
 829:
            var34 = _closure1_slot9;
            var33 = _closure1_slot5;
            var32 = {};
            var35 = var25.upsellButton;
            var32['style'] = var35;
            var37 = _closure1_slot9;
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var35 = 19;
            var35 = var38[var35];
            var36 = var36.bind(var4)(var35);
            var35 = {};
            var38 = _closure1_slot7;
            var38 = var38.EDIT_PROFILE_BANNER;
            var35['analyticsObject'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var32['children'] = var35;
            var31 = var34.bind(var4)(var33, var32);
 906:
            var30[1] = var31;
            var19['children'] = var30;
            var19 = var29.bind(var4)(var28, var19);
            var15['subLabel'] = var19;
            var19 = undefined;
            if(!var27) { _fun0003_ip = 933; continue _fun0003 }
 930:
            var19 = var20;
 933:
            var15['onPress'] = var19;
            var15 = var18.bind(var4)(var16, var15);
            var12[1] = var15;
            if(!var13) { _fun0003_ip = 1119; continue _fun0003 }
 953:
            var16 = _closure1_slot9;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = var18[var14];
            var14 = var19.bind(var4)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var20 = _closure1_slot9;
            var18 = var18[var24];
            var18 = var19.bind(var4)(var18);
            var19 = var18.FormLabel;
            var18 = {};
            var27 = var25.label;
            var24 = new Array(2);
            var24[0] = var27;
            var25 = var25.remove;
            var24[1] = var25;
            var18['style'] = var24;
            if(!(var23 == var21)) { _fun0003_ip = 1088; continue _fun0003 }
 1034:
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var26];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.tT9n7O;
            var21 = var23.bind(var24)(var22);
 1088:
            var18['text'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var14['label'] = var18;
            var17 = function onPress() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var14['onPress'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 1119:
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
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