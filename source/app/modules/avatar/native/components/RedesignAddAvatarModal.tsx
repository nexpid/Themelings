// app/modules/avatar/native/components/RedesignAddAvatarModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var13 = 2;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var12 = 'center';
    var9 = {'flexGrow': 2, 'alignItems': 'center'};
    var4['contentContainer'] = var9;
    var9 = {};
    var9['flexGrow'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['minHeight'] = var13;
    var4['growContainer'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center'};
    var4['headerContainer'] = var9;
    var9 = {};
    var13 = '100%';
    var9['width'] = var13;
    var4['buttonContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginBottom'] = var13;
    var9['textAlign'] = var12;
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var4['subtitle'] = var9;
    var9 = {};
    var9['alignSelf'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9['paddingTop'] = var10;
    var4['errorContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar/native/components/RedesignAddAvatarModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RedesignAddAvatarModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.route;
            var1 = var1.params;
            var1 = var1.onComplete;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = function _handleSelectAvatar() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 262; continue _fun0002 }
 10:
                            var5 = _closure2_slot1;
                            var3 = undefined;
                            var2 = false;
                            var2 = var5.bind(var3)(var2);
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var10 = 14;
                            var2 = var2[var10];
                            var7 = var6.bind(var3)(var2);
                            var6 = var7.openImagePicker;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var2['size'] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=74);
 72:
                            return var2;
 74:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 259; continue _fun0002 }
 83:
                            var13 = var2.base64;
                            var6 = null;
                            if(!(var6 != var13)) { _fun0002_ip = 133; continue _fun0002 }
 95:
                            var8 = var13.match;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var3)(var7);
                            var7 = var7.base64GIFRegex;
                            var7 = var8.bind(var13)(var7);
                            if(!(var6 == var7)) { _fun0002_ip = 245; continue _fun0002 }
 133:
                            var6 = var6 != var13;
                            var7 = undefined;
                            if(!var6) { _fun0002_ip = 203; continue _fun0002 }
 142:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 11;
                            var6 = var12[var10];
                            var9 = var11.bind(var3)(var6);
                            var8 = var9.createPendingImage;
                            var6 = {};
                            var6['imageUri'] = var13;
                            var10 = var12[var10];
                            var11 = var11.bind(var3)(var10);
                            var10 = var11.generateAvatarDescription;
                            var10 = var10.bind(var11)();
                            var6['description'] = var10;
                            var7 = var8.bind(var9)(var6);
 203:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 15;
                            var5 = var8[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.setPendingAvatar;
                            var5 = var5.bind(var6)(var7);
                            var5 = _closure2_slot3;
                            var5 = var5.bind(var3)(var3);
                            _fun0002_ip = 256; continue _fun0002;
 245:
                            var5 = _closure2_slot1;
                            var4 = true;
                            var4 = var5.bind(var3)(var4);
 256:
                            return var3;
 259:
                            return var2;
 262:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot5 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot5 = var1;
            var1 = _closure1_slot12;
            var10 = var1.bind(var4)();
            var8 = _closure1_slot5;
            var1 = var8.useState;
            var5 = false;
            var1 = var1.bind(var8)(var5);
            var7 = _closure1_slot4;
            var6 = 2;
            var1 = var7.bind(var4)(var1, var6);
            var3 = 0;
            var17 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            _closure2_slot1 = var1;
            var1 = var8.useState;
            var1 = var1.bind(var8)();
            var1 = var7.bind(var4)(var1, var6);
            var15 = var1[var3];
            var _closure2_slot2 = var15;
            var16 = var1[var2];
            _closure2_slot3 = var16;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var14 = var1.bottom;
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getPendingAvatar;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var6)(var2, var1);
            var12 = null;
            var3 = var12 != var15;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 309; continue _fun0001 }
 226:
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 11;
            var3 = var18[var8];
            var7 = var11.bind(var4)(var3);
            var6 = var7.createPendingImage;
            var3 = {};
            var19 = 12;
            var19 = var18[var19];
            var19 = var11.bind(var4)(var19);
            var19 = var19.DEFAULT_AVATARS;
            var19 = var19[var15];
            var3['imageUri'] = var19;
            var8 = var18[var8];
            var11 = var11.bind(var4)(var8);
            var8 = var11.generateAvatarDescription;
            var8 = var8.bind(var11)();
            var3['description'] = var8;
            var1 = var6.bind(var7)(var3);
 309:
            var11 = var2;
            if(!(var12 != var1)) { _fun0001_ip = 319; continue _fun0001 }
 316:
            var11 = var1;
 319:
            _closure2_slot4 = var11;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.memoizedImageSource;
            var6 = var12 == var11;
            var1 = undefined;
            if(var6) { _fun0001_ip = 364; continue _fun0001 }
 358:
            var1 = var11.imageUri;
 364:
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var10.container;
            var1['style'] = var6;
            var1['alwaysBounceVertical'] = var5;
            var6 = var10.contentContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var7 = 8;
            var8 = var22[var7];
            var8 = var20.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var8 = var14 + var8;
            var6['paddingBottom'] = var8;
            var7 = var22[var7];
            var7 = var20.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var6['paddingHorizontal'] = var7;
            var5[1] = var6;
            var1['contentContainerStyle'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var7 = var10.headerContainer;
            var5['style'] = var7;
            var7 = {};
            var14 = _closure1_slot10;
            var28 = _closure1_slot0;
            var19 = 16;
            var8 = var22[var19];
            var8 = var28.bind(var4)(var8);
            var23 = var8.Text;
            var8 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var18 = var10.title;
            var8['style'] = var18;
            var18 = 17;
            var24 = var22[var18];
            var24 = var28.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var22[var18];
            var24 = var28.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.XQRWvb;
            var24 = var25.bind(var26)(var24);
            var8['children'] = var24;
            var23 = var14.bind(var4)(var23, var8);
            var8 = new Array(2);
            var8[0] = var23;
            var23 = var22[var19];
            var23 = var28.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var25 = var10.subtitle;
            var23['style'] = var25;
            var25 = var22[var18];
            var25 = var28.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var22[var18];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.fH9TLS;
            var25 = var26.bind(var27)(var25);
            var23['children'] = var25;
            var23 = var14.bind(var4)(var24, var23);
            var8[1] = var23;
            var7['children'] = var8;
            var8 = var3.bind(var4)(var6, var7);
            var7 = new Array(3);
            var7[0] = var8;
            var8 = 18;
            var8 = var22[var8];
            var20 = var20.bind(var4)(var8);
            var8 = {};
            var8['avatarSource'] = var21;
            var21 = var12 != var11;
            var8['showPendingAvatar'] = var21;
            var21 = function handleSelectAvatar() {
                var1 = undefined;
                var4 = _closure2_slot5;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var8['onSelectAvatar'] = var21;
            var8 = var14.bind(var4)(var20, var8);
            var7[1] = var8;
            var8 = {};
            var20 = var10.errorContainer;
            var8['style'] = var20;
            if(!var17) { _fun0001_ip = 888; continue _fun0001 }
 794:
            var21 = _closure1_slot10;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-danger'};
            var23 = var22[var18];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var18];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.XyLlVl;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var17 = var21.bind(var4)(var20, var19);
 888:
            var8['children'] = var17;
            var8 = var14.bind(var4)(var6, var8);
            var7[2] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 12;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['onAvatarSelect'] = var16;
            var6['selectedAvatar'] = var15;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var7 = _closure1_slot6;
            var6 = {};
            var15 = var10.growContainer;
            var6['style'] = var15;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var6 = {};
            var10 = var10.buttonContainer;
            var6['style'] = var10;
            var17 = _closure1_slot0;
            var9 = 19;
            var9 = var14[var9];
            var9 = var17.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {'variant': 'primary', 'size': 'lg'};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.PDTjLC;
            var14 = var15.bind(var16)(var14);
            var9['text'] = var14;
            var13 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.handlePressNext;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot2;
                    var7 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var7)) { _fun0003_ip = 63; continue _fun0003 }
 52:
                    var1 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    _fun0003_ip = 67; continue _fun0003;
 63:
                    var1 = _closure2_slot0;
 67:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var9['onPress'] = var13;
            var11 = var12 == var11;
            var9['disabled'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();