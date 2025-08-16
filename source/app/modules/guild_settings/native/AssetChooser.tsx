// app/modules/guild_settings/native/AssetChooser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot9 = var8;
    var8 = var7.Image;
    var _closure1_slot10 = var8;
    var8 = var7.ImageBackground;
    var _closure1_slot11 = var8;
    var7 = var7.TouchableWithoutFeedback;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot14 = var8;
    var8 = var7.Fragment;
    var _closure1_slot15 = var8;
    var7 = var7.jsxs;
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {'width': '100%', 'alignItems': 'center'};
    var7['assetWrapper'] = var10;
    var10 = {'width': '100%', 'height': 192, 'borderRadius': null, 'overflow': 'hidden'};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var7['asset'] = var10;
    var10 = {'position': 'absolute', 'bottom': 10, 'right': 10, 'shadowColor': null, 'shadowRadius': 10, 'shadowOffset': null, 'shadowOpacity': 0.2};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BLACK_500;
    var10['shadowColor'] = var13;
    var13 = {'height': 8, 'width': 0};
    var10['shadowOffset'] = var13;
    var7['uploadIconWrapper'] = var10;
    var10 = {'width': 16, 'height': 16};
    var7['uploadIcon'] = var10;
    var10 = {'marginTop': 8, 'fontSize': 14, 'lineHeight': 18};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BLUE_345;
    var10['color'] = var11;
    var7['remove'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot17 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function AssetChooser(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = _closure1_slot3;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 150; continue _fun0003 }
 10:
                            var2 = _closure3_slot0;
                            var2 = var2.props;
                            var8 = var2.size;
                            var5 = var2.onChooseAsset;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.openImagePicker;
                            var7 = 'number';
                            var2 = typeof var8;
                            if(!(var7 !== var2)) { _fun0003_ip = 99; continue _fun0003 }
 75:
                            var7 = null;
                            var2 = var8;
                            if(!(var7 == var2)) { _fun0003_ip = 97; continue _fun0003 }
 84:
                            var7 = {};
                            var9 = _closure1_slot13;
                            var7['size'] = var9;
                            var2 = var7;
 97:
                            _fun0003_ip = 108; continue _fun0003;
 99:
                            var7 = {};
                            var7['size'] = var8;
                            var2 = var7;
 108:
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=117);
 115:
                            return var2;
 117:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 147; continue _fun0003 }
 123:
                            var4 = var2.base64;
                            var6 = null;
                            if(!(var6 != var4)) { _fun0003_ip = 144; continue _fun0003 }
 135:
                            if(!(var6 != var5)) { _fun0003_ip = 144; continue _fun0003 }
 139:
                            var4 = var5.bind(var3)(var4);
 144:
                            return var3;
 147:
                            return var2;
 150:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['handleChooseAsset'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onChooseAsset;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 31; continue _fun0004 }
 24:
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleRemoveAsset'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'getSource';
        var5['key'] = var1;
        var1 = function getSource() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var4 = var1.rawSource;
                var6 = var1.getSource;
                var5 = var1.guild;
                var1 = null;
                var2 = var1 == var4;
                if(var2) { _fun0005_ip = 79; continue _fun0005 }
 34:
                var3 = var4.startsWith;
                var2 = 'data:';
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0005_ip = 67; continue _fun0005 }
 54:
                var3 = undefined;
                var2 = 192;
                var2 = var6.bind(var3)(var5, var2);
                _fun0005_ip = 76; continue _fun0005;
 67:
                var3 = {};
                var3['uri'] = var4;
                var2 = var3;
 76:
                var1 = var2;
 79:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var11 = this;
                var2 = _closure1_slot17;
                var1 = var11.context;
                var4 = undefined;
                var13 = var2.bind(var4)(var1);
                var1 = var11.props;
                var7 = var1.disabled;
                var1 = var11.getSource;
                var6 = var1.bind(var11)();
                var3 = _closure1_slot16;
                var2 = _closure1_slot15;
                var1 = {};
                var14 = _closure1_slot14;
                var18 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 14;
                var5 = var8[var5];
                var5 = var18.bind(var4)(var5);
                var9 = var5.PressableOpacity;
                var5 = {};
                var12 = 'button';
                var5['accessibilityRole'] = var12;
                var16 = 15;
                var15 = var8[var16];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var8 = var8[var16];
                var8 = var18.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.MsUY/f;
                var8 = var15.bind(var17)(var8);
                var5['accessibilityLabel'] = var8;
                var8 = var13.assetWrapper;
                var5['style'] = var8;
                var8 = var11.handleChooseAsset;
                var5['onPress'] = var8;
                var5['disabled'] = var7;
                var17 = _closure1_slot11;
                var15 = {};
                var8 = null;
                var18 = var6;
                if(!(var8 == var18)) { _fun0006_ip = 202; continue _fun0006 }
 182:
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 16;
                var19 = var21[var19];
                var18 = var20.bind(var4)(var19);
 202:
                var15['source'] = var18;
                var18 = var13.asset;
                var15['style'] = var18;
                var18 = null;
                if(var7) { _fun0006_ip = 297; continue _fun0006 }
 221:
                var21 = _closure1_slot14;
                var20 = _closure1_slot9;
                var19 = {};
                var22 = var13.uploadIconWrapper;
                var19['style'] = var22;
                var23 = _closure1_slot10;
                var22 = {};
                var24 = var13.uploadIcon;
                var22['style'] = var24;
                var25 = _closure1_slot1;
                var26 = _closure1_slot2;
                var24 = 17;
                var24 = var26[var24];
                var24 = var25.bind(var4)(var24);
                var22['source'] = var24;
                var22 = var21.bind(var4)(var23, var22);
                var19['children'] = var22;
                var18 = var21.bind(var4)(var20, var19);
 297:
                var15['children'] = var18;
                var15 = var14.bind(var4)(var17, var15);
                var5['children'] = var15;
                var9 = var14.bind(var4)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                var9 = var8 == var6;
                var6 = null;
                if(var9) { _fun0006_ip = 471; continue _fun0006 }
 337:
                var6 = null;
                if(var7) { _fun0006_ip = 471; continue _fun0006 }
 345:
                var9 = _closure1_slot14;
                var8 = _closure1_slot12;
                var7 = {};
                var7['accessibilityRole'] = var12;
                var11 = var11.handleRemoveAsset;
                var7['onPress'] = var11;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 18;
                var10 = var12[var10];
                var10 = var15.bind(var4)(var10);
                var11 = var10.LegacyText;
                var10 = {};
                var13 = var13.remove;
                var10['style'] = var13;
                var13 = var12[var16];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.N86XcH;
                var12 = var13.bind(var14)(var12);
                var10['children'] = var12;
                var10 = var9.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 471:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var2['contextType'] = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/AssetChooser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();